/**
 * 事件订阅基类，供各 adapter 复用
 */
import type { Adapter, AdapterEventMap, AdapterEventType, AdapterStartOptions } from '../type';

export abstract class BaseSpeechAdapter implements Adapter {
  private _listeners: {
    [K in AdapterEventType]?: Array<AdapterEventMap[K]>;
  } = {};

  destroy(): void {
    this._listeners = {};
  }

  on<E extends AdapterEventType>(event: E, cb: AdapterEventMap[E]): void {
    if (!this._listeners[event]) {
      this._listeners[event] = [] as any;
    }
    (this._listeners[event] as Array<AdapterEventMap[E]>).push(cb);
  }

  off<E extends AdapterEventType>(event: E, cb?: AdapterEventMap[E]): void {
    if (!this._listeners[event]) return;
    if (!cb) {
      this._listeners[event] = [] as any;
      return;
    }
    this._listeners[event] = ((this._listeners[event] as Array<AdapterEventMap[E]>) || []).filter(
      (fn) => fn !== cb,
    ) as any;
  }

  protected emit<E extends AdapterEventType>(event: E, ...args: Parameters<AdapterEventMap[E]>): void {
    const listeners = (this._listeners[event] as Array<AdapterEventMap[E]>) || [];
    listeners.forEach((fn) => {
      try {
        (fn as any)(...args);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('[chat-record adapter] listener error:', e);
      }
    });
  }

  abstract checkAuth(): Promise<boolean>;
  abstract requestAuth(): Promise<boolean>;
  abstract start(opts: AdapterStartOptions): Promise<void>;
  abstract stop(): Promise<void>;
}
