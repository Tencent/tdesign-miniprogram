/**
 * 响应式状态基类
 * 使用简易的发布-订阅模式实现响应式更新
 */
export default class ReactiveState {
  constructor(initialValue) {
    this.iValue = initialValue;
    this.iListeners = new Set();
  }

  get value() {
    return this.iValue;
  }

  set value(newValue) {
    if (this.iValue !== newValue) {
      this.iValue = newValue;
      this.notify();
    }
  }

  subscribe(listener) {
    this.iListeners.add(listener);
    listener(this.iValue);
    return () => {
      this.iListeners.delete(listener);
    };
  }

  notify() {
    this.iListeners.forEach((listener) => {
      try {
        listener(this.iValue);
      } catch (error) {
        // ignore
      }
    });
  }
}
