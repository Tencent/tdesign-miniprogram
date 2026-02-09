/**
 * 响应式状态基类
 * 使用简易的发布-订阅模式实现响应式更新
 */
export default class ReactiveState<T> {
  private _value: T;

  private _listeners: Set<(value: T) => void> = new Set();

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._notify();
    }
  }

  /**
   * 订阅状态变化
   * @param listener 状态变化回调
   * @returns 取消订阅的函数
   */
  subscribe(listener: (value: T) => void): () => void {
    this._listeners.add(listener);

    // 立即执行一次，确保初始值被消费
    listener(this._value);

    return () => {
      this._listeners.delete(listener);
    };
  }

  private _notify(): void {
    this._listeners.forEach((listener) => {
      try {
        listener(this._value);
      } catch (error) {
        console.error('State listener error:', error);
      }
    });
  }
}
