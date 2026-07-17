/**
 * H5 Web Speech API 适配器
 *
 * 依赖浏览器原生 SpeechRecognition（webkitSpeechRecognition）
 * - Chrome / Edge / Safari 桌面版可用
 * - Firefox 尚未支持
 * - 移动端 Safari iOS 14.5+ 支持
 *
 * 局限：Web Speech API 不产出录音文件，tempFilePath 恒为空
 */
import { BaseSpeechAdapter } from './base';
import type { AdapterStartOptions } from '../type';

declare const window: any;

interface WebSpeechRecognition {
  onstart: (() => void) | null;
  onresult: ((e: any) => void) | null;
  onerror: ((e: any) => void) | null;
  onend: (() => void) | null;
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
}

export class WebSpeechAdapter extends BaseSpeechAdapter {
  private recognition: WebSpeechRecognition | null = null;

  private startTs = 0;

  private finalText = '';

  private mediaStream: MediaStream | null = null;

  private isRunning = false;

  constructor() {
    super();
    this.initRecognition();
  }

  async checkAuth(): Promise<boolean> {
    // Web 端权限通过 getUserMedia 触发系统弹框，无法在不触发弹框的情况下 check
    // 这里返回 true，让 UI 直接进入"可以按住说话"，requestAuth 时再由浏览器询问
    if (typeof navigator === 'undefined' || !navigator.mediaDevices) return false;
    const perm = (navigator as any).permissions;
    if (perm?.query) {
      try {
        const res = await perm.query({ name: 'microphone' as any });
        return res.state === 'granted';
      } catch (e) {
        return true;
      }
    }
    return true;
  }

  async requestAuth(): Promise<boolean> {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices) return false;
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // 拿到就立刻停掉，只是为了触发权限申请
      this.mediaStream.getTracks().forEach((t) => t.stop());
      this.mediaStream = null;
      return true;
    } catch (e) {
      return false;
    }
  }

  async start(opts: AdapterStartOptions): Promise<void> {
    if (!this.recognition) {
      this.initRecognition();
    }
    if (!this.recognition) {
      this.emit('error', new Error('当前浏览器不支持 Web Speech API'));
      return;
    }
    this.recognition.lang = this.normalizeLang(opts.lang);
    this.isRunning = true;
    try {
      this.recognition.start();
    } catch (e) {
      this.isRunning = false;
      this.emit('error', e);
    }
  }

  async stop(): Promise<void> {
    if (!this.recognition || !this.isRunning) return;
    try {
      this.recognition.stop();
    } catch (e) {
      // ignore
    }
  }

  destroy(): void {
    try {
      if (this.recognition && this.isRunning) {
        this.recognition.stop();
      }
    } catch (e) {
      // ignore
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((t) => t.stop());
      this.mediaStream = null;
    }
    this.recognition = null;
    this.isRunning = false;
    super.destroy();
  }

  private initRecognition(): void {
    if (typeof window === 'undefined') return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;

    const rec: WebSpeechRecognition = new SR();
    rec.continuous = false;
    rec.interimResults = true;

    rec.onstart = () => {
      this.startTs = Date.now();
      this.finalText = '';
      this.emit('start');
    };

    rec.onresult = (e: any) => {
      let finalTranscript = '';
      let interimTranscript = '';
      for (let i = e.resultIndex; i < e.results.length; i += 1) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) {
          finalTranscript += t;
        } else {
          interimTranscript += t;
        }
      }
      if (finalTranscript) {
        this.finalText += finalTranscript;
      }
      const partial = (this.finalText + interimTranscript).trim();
      if (partial) {
        this.emit('partial', { result: partial });
      }
    };

    rec.onerror = (e: any) => {
      this.isRunning = false;
      this.emit('error', e);
    };

    rec.onend = () => {
      if (!this.isRunning) return;
      this.isRunning = false;
      const duration = Date.now() - this.startTs;
      this.emit('stop', {
        tempFilePath: '',
        duration,
        result: this.finalText.trim(),
      });
    };

    this.recognition = rec;
  }

  private normalizeLang(lang: string): string {
    // 微信小程序习惯用 zh_CN / en_US；Web Speech API 用 zh-CN / en-US
    return (lang || 'zh-CN').replace('_', '-');
  }
}

/** 工厂：创建 H5 adapter */
export function createWebSpeechAdapter(): WebSpeechAdapter {
  return new WebSpeechAdapter();
}
