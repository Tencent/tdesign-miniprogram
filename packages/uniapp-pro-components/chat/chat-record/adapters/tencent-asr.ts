/**
 * 腾讯云 ASR 实时语音识别适配器（全新三层架构）
 *
 * ┌─────────────────────────────────────────────┐
 * │  TencentASRAdapter  编排层（对外接口）          │
 * │   - start / stop / checkAuth / requestAuth    │
 * │   - generation 轮次隔离                        │
 * ├─────────────────────────────────────────────┤
 * │  AsrSocket  传输层（WebSocket 收发）            │
 * │   - 屏蔽 H5 / 小程序 WebSocket 差异            │
 * │   - 关键：小程序用 success 回调拿 SocketTask   │
 * ├─────────────────────────────────────────────┤
 * │  AudioCapturer  采集层（PCM 音频帧）           │
 * │   - 屏蔽 H5 AudioContext / 小程序 Recorder     │
 * └─────────────────────────────────────────────┘
 *
 * 签名走后端，密钥不下客户端。
 * 协议参考：https://cloud.tencent.com/document/product/1093/48982
 */

import { BaseSpeechAdapter } from './base';
import type { AdapterStartOptions } from '../type';

const IS_H5 = typeof window !== 'undefined' && typeof document !== 'undefined';

// =============================================================================
// 配置
// =============================================================================

export interface TencentASRConfig {
  /** 后端签名接口地址，POST → { wsUrl } */
  signEndpoint: string;
  /** 自定义 request headers（如鉴权 token） */
  signHeaders?: Record<string, string>;
  /** 引擎模型，默认 '16k_zh' */
  engineModelType?: string;
}

// =============================================================================
// 传输层：AsrSocket —— 统一封装 H5 / 小程序 WebSocket
// =============================================================================

interface AsrSocketHandlers {
  onOpen: () => void;
  onMessage: (raw: string) => void;
  onError: (err: unknown) => void;
  onClose: () => void;
}

class AsrSocket {
  private impl: any = null;

  private open = false;

  private handlers: AsrSocketHandlers;

  constructor(handlers: AsrSocketHandlers) {
    this.handlers = handlers;
  }

  get isOpen(): boolean {
    return this.open;
  }

  /** 建立连接，onOpen 时 resolve */
  connect(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      let settled = false;
      const done = (err?: unknown) => {
        if (settled) return;
        settled = true;
        if (err) reject(err);
        else resolve();
      };

      if (IS_H5) {
        const ws = new WebSocket(url);
        ws.binaryType = 'arraybuffer';
        this.impl = ws;

        ws.onopen = () => {
          this.open = true;
          done();
          this.handlers.onOpen();
        };
        ws.onmessage = (e: MessageEvent) => this.handlers.onMessage(e.data);
        ws.onerror = () => {
          done(new Error('WebSocket error'));
          this.handlers.onError(new Error('WebSocket error'));
        };
        ws.onclose = () => {
          this.open = false;
          this.handlers.onClose();
        };
      } else {
        // 关键：必须传 success 回调，uni.connectSocket 才返回 SocketTask，
        // 否则返回 Promise（导致 task.onOpen is not a function）
        const task: any = uni.connectSocket({
          url,
          success: () => {},
          fail: (err: any) => {
            done(err || new Error('connectSocket fail'));
            this.handlers.onError(err);
          },
        });
        this.impl = task;

        task.onOpen(() => {
          this.open = true;
          done();
          this.handlers.onOpen();
        });
        task.onMessage((res: any) => this.handlers.onMessage(res.data));
        task.onError((err: any) => {
          done(err || new Error('socket error'));
          this.handlers.onError(err);
        });
        task.onClose(() => {
          this.open = false;
          this.handlers.onClose();
        });
      }
    });
  }

  /** 发送（自动区分 H5 / 小程序） */
  send(data: any): void {
    if (!this.impl || !this.open) return;
    try {
      this.impl.send(IS_H5 ? data : { data });
    } catch {
      // ignore
    }
  }

  /** 幂等关闭 */
  close(): void {
    const { impl } = this;
    this.impl = null;
    this.open = false;
    if (!impl) return;
    try {
      // 小程序 close 需要传 success/fail，否则 uni 返回 Promise 且 reject 时抛
      // unhandled rejection（closeSocket:fail taskID not exist）
      if (IS_H5) {
        impl.close();
      } else {
        impl.close({ success: () => {}, fail: () => {} });
      }
    } catch {
      // ignore（已被服务端关闭再 close 会报 taskID not exist）
    }
  }
}

// =============================================================================
// 采集层：AudioCapturer —— 统一封装 H5 / 小程序 PCM 采集
// =============================================================================

class AudioCapturer {
  private onFrame: (buf: ArrayBuffer) => void;

  private onError: (err: unknown) => void;

  // 小程序
  private recorder: any = null;

  // H5
  private mediaStream: MediaStream | null = null;

  private audioCtx: AudioContext | null = null;

  private processor: any = null;

  private stopped = false;

  constructor(onFrame: (buf: ArrayBuffer) => void, onError: (err: unknown) => void) {
    this.onFrame = onFrame;
    this.onError = onError;
  }

  start(durationMs: number): void {
    this.stopped = false;
    if (IS_H5) {
      this.startH5();
    } else {
      this.startMini(durationMs);
    }
  }

  stop(): void {
    this.stopped = true;
    // 小程序
    if (this.recorder) {
      try {
        this.recorder.stop();
      } catch {
        // ignore
      }
    }
    // H5
    if (this.processor) {
      try {
        this.processor.disconnect();
      } catch {
        // ignore
      }
      this.processor = null;
    }
    if (this.audioCtx) {
      try {
        this.audioCtx.close();
      } catch {
        // ignore
      }
      this.audioCtx = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((t) => t.stop());
      this.mediaStream = null;
    }
  }

  private startMini(durationMs: number): void {
    if (!this.recorder) {
      this.recorder = uni.getRecorderManager();
    }
    const mgr = this.recorder;

    mgr.onFrameRecorded((res: any) => {
      if (this.stopped) return;
      if (res?.frameBuffer) this.onFrame(res.frameBuffer);
    });
    mgr.onError((err: any) => {
      if (this.stopped) return;
      this.onError(err);
    });

    mgr.start({
      duration: durationMs,
      sampleRate: 16000,
      numberOfChannels: 1,
      encodeBitRate: 48000,
      format: 'pcm',
      frameSize: 10, // 10KB ≈ 320ms/帧
    });
  }

  private startH5(): void {
    if (!navigator.mediaDevices?.getUserMedia) {
      this.onError(new Error('浏览器不支持麦克风'));
      return;
    }
    navigator.mediaDevices
      .getUserMedia({ audio: { sampleRate: 16000, channelCount: 1, echoCancellation: true, noiseSuppression: true } })
      .then((stream) => {
        if (this.stopped) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        this.mediaStream = stream;

        const AudioCtxCtor = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (!AudioCtxCtor) {
          this.onError(new Error('AudioContext 不可用'));
          return;
        }
        this.audioCtx = new AudioCtxCtor({ sampleRate: 16000 });
        if (!this.audioCtx) return;

        const source = this.audioCtx.createMediaStreamSource(stream);
        const processor = (this.audioCtx as any).createScriptProcessor(4096, 1, 1);
        this.processor = processor;

        processor.onaudioprocess = (e: any) => {
          if (this.stopped) return;
          const input = e.inputBuffer.getChannelData(0);
          const pcm = new Int16Array(input.length);
          for (let i = 0; i < input.length; i += 1) {
            const s = Math.max(-1, Math.min(1, input[i]));
            pcm[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
          }
          this.onFrame(pcm.buffer);
        };

        source.connect(processor);
        processor.connect(this.audioCtx.destination);
      })
      .catch((err) => {
        if (this.stopped) return;
        this.onError(err || new Error('麦克风权限获取失败'));
      });
  }
}

// =============================================================================
// 编排层：TencentASRAdapter
// =============================================================================

export class TencentASRAdapter extends BaseSpeechAdapter {
  private config: TencentASRConfig;

  // 轮次隔离：每次 start 递增，异步回调校验归属
  private generation = 0;

  private socket: AsrSocket | null = null;

  private capturer: AudioCapturer | null = null;

  private startTs = 0;

  // 按句 index 累积识别文本（VAD 多句断句时拼接全文）
  private segments: Record<number, string> = {};

  // 等待 final:1 的 resolver
  private finalResolver: (() => void) | null = null;

  constructor(config: TencentASRConfig) {
    super();
    this.config = config;
  }

  // ================== 权限 ==================

  async checkAuth(): Promise<boolean> {
    if (IS_H5) {
      if (!navigator.mediaDevices?.getUserMedia) return false;
      try {
        const perm = (navigator as any).permissions;
        if (perm?.query) {
          const res = await perm.query({ name: 'microphone' as any });
          return res.state === 'granted';
        }
        return true;
      } catch {
        return true;
      }
    }
    return new Promise((resolve) => {
      uni.getSetting({
        success: (res: any) => resolve(!!res.authSetting?.['scope.record']),
        fail: () => resolve(false),
      });
    });
  }

  async requestAuth(): Promise<boolean> {
    if (IS_H5) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((t) => t.stop());
        return true;
      } catch {
        return false;
      }
    }
    try {
      await uni.authorize({ scope: 'scope.record' });
      return true;
    } catch {
      return new Promise((resolve) => {
        uni.openSetting({
          success: (r: any) => resolve(!!r.authSetting?.['scope.record']),
          fail: () => resolve(false),
        });
      });
    }
  }

  // ================== 录音生命周期 ==================

  async start(opts: AdapterStartOptions): Promise<void> {
    // 强制清理上一轮
    this.teardown();

    this.generation += 1;
    const gen = this.generation;
    this.startTs = Date.now();
    this.segments = {};
    this.finalResolver = null;

    // 1. 后端签名
    let wsUrl: string;
    try {
      wsUrl = await this.fetchSignUrl();
    } catch (e: any) {
      if (this.generation !== gen) return;
      this.emit('error', new Error(`签名失败: ${e?.message || e}`));
      return;
    }
    if (this.generation !== gen) return;

    // 2. 建立 socket
    const socket = new AsrSocket({
      onOpen: () => {
        console.log('[TencentASR] socket open');
      },
      onMessage: (raw) => this.onSocketMessage(gen, raw),
      onError: (err) => {
        console.log('[TencentASR] socket error', err);
      },
      onClose: () => {
        console.log('[TencentASR] socket close');
      },
    });
    this.socket = socket;

    try {
      await socket.connect(wsUrl);
    } catch (e: any) {
      if (this.generation !== gen) return;
      this.emit('error', new Error(`WebSocket 失败: ${e?.message || e}`));
      return;
    }
    if (this.generation !== gen) return;

    // 3. 开始采集
    this.emit('start');
    const capturer = new AudioCapturer(
      (buf) => {
        if (this.generation !== gen) return;
        this.socket?.send(buf);
      },
      (err) => {
        if (this.generation !== gen) return;
        console.log('[TencentASR] capturer error', err);
      },
    );
    this.capturer = capturer;
    capturer.start(opts.duration);
  }

  async stop(): Promise<void> {
    // 停采集
    this.capturer?.stop();

    // 通知服务端结束
    this.sendEndFrame();

    // 等最终结果（最多 1.5s），拿到完整文本再派 stop
    const gen = this.generation;
    await this.waitFinal(gen, 1500);

    const duration = Date.now() - this.startTs;
    const fullText = this.buildFullText();

    console.log('[TencentASR] emit stop, text=', fullText);
    this.emit('stop', { tempFilePath: '', duration, result: fullText });

    // 后台清理
    setTimeout(() => {
      if (this.generation === gen) this.teardown();
    }, 2000);
  }

  destroy(): void {
    this.teardown();
    super.destroy();
  }

  // ================== 内部 ==================

  private teardown(): void {
    if (this.capturer) {
      this.capturer.stop();
      this.capturer = null;
    }
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    // resolve 正在等的 stop()，避免 start 后 stop() 永远不会 resolve
    this.resolveFinal();
  }

  private sendEndFrame(): void {
    this.socket?.send(JSON.stringify({ type: 'end' }));
  }

  private onSocketMessage(gen: number, raw: string): void {
    if (this.generation !== gen) return;

    let data: any;
    try {
      data = typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch {
      return;
    }

    if (data.code !== 0) {
      console.log('[TencentASR] asr error', data.code, data.message);
      return;
    }

    // 识别彻底结束标记（发送 end 帧后服务端回 final:1）
    if (data.final === 1) {
      this.resolveFinal();
      return;
    }

    // 连接确认（无 result）
    const { result } = data;
    if (!result) return;

    const text = result.voice_text_str || '';
    const index = typeof result.index === 'number' ? result.index : 0;

    // 按句 index 累积：VAD 多句断句时，每句 voice_text_str 只含当前句，
    // 用 index 累积才能拼出完整全文（后句不会覆盖前句）
    this.segments[index] = text;

    // 实时回显完整拼接文本（中间结果 slice_type 0/1）
    if (result.slice_type !== 2) {
      this.emit('partial', { result: this.buildFullText() });
    }
  }

  /** 按句 index 升序拼接完整文本 */
  private buildFullText(): string {
    return Object.keys(this.segments)
      .map(Number)
      .sort((a, b) => a - b)
      .map((i) => this.segments[i])
      .join('');
  }

  /** 等待识别彻底结束（final:1）或超时 */
  private waitFinal(gen: number, timeoutMs: number): Promise<void> {
    return new Promise((resolve) => {
      if (this.generation !== gen) {
        resolve();
        return;
      }
      this.finalResolver = resolve;
      setTimeout(() => {
        if (this.finalResolver === resolve) {
          this.finalResolver = null;
          resolve();
        }
      }, timeoutMs);
    });
  }

  private resolveFinal(): void {
    if (this.finalResolver) {
      const r = this.finalResolver;
      this.finalResolver = null;
      r();
    }
  }

  private async fetchSignUrl(): Promise<string> {
    // 调试：填 wsUrl 跳过签名（置空走真实流程）
    const DEBUG_FAKE_URL = '';
    if (DEBUG_FAKE_URL) return DEBUG_FAKE_URL;

    const res = await uni.request({
      url: this.config.signEndpoint,
      method: 'POST' as any,
      header: { 'Content-Type': 'application/json', ...(this.config.signHeaders || {}) },
      data: { engineModelType: this.config.engineModelType || '16k_zh' },
    });
    const { data } = res as any;
    if (!data?.wsUrl) throw new Error('签名接口返回格式错误，期望 { wsUrl }');
    return data.wsUrl;
  }
}

// =============================================================================
// 工厂
// =============================================================================

export function createTencentASRAdapter(config: TencentASRConfig): TencentASRAdapter {
  return new TencentASRAdapter(config);
}
