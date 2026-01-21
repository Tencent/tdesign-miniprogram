export default class Bus {
  constructor() {
    this.listeners = new Map();
    this.emitted = new Map(); // 改为Map存储事件参数
    this.onceListeners = new Map();
  }

  on(evtName, listener) {
    const target = this.listeners.get(evtName) || [];
    target.push(listener);
    this.listeners.set(evtName, target);

    // 如果事件已触发过，用保存的参数立即执行
    if (this.emitted.has(evtName)) {
      listener(...this.emitted.get(evtName));
    }
  }

  once(evtName, listener) {
    // 如果事件已经触发过，立即执行并返回
    if (this.emitted.has(evtName)) {
      listener(...this.emitted.get(evtName));
      return;
    }

    // 封装自移除函数
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(evtName, onceWrapper);
    };

    // 存储原始监听器用于精准移除
    const onceMap = this.onceListeners.get(evtName) || new Map();
    onceMap.set(listener, onceWrapper);
    this.onceListeners.set(evtName, onceMap);

    // 注册封装函数
    this.on(evtName, onceWrapper);
  }

  emit(evtName, ...args) {
    // 保存事件参数
    this.emitted.set(evtName, args);

    const listeners = this.listeners.get(evtName) || [];
    // 使用副本避免执行时修改数组
    [...listeners].forEach(func => func(...args));
  }

  off(evtName, listener) {
    if (listener) {
      // 处理一次性监听器的原始引用
      const onceMap = this.onceListeners.get(evtName);
      if (onceMap && onceMap.has(listener)) {
        const wrapper = onceMap.get(listener);
        this._removeListener(evtName, wrapper);
        onceMap.delete(listener);
        return;
      }

      // 处理普通监听器
      this._removeListener(evtName, listener);
    } else {
      // 移除所有监听器
      this.listeners.delete(evtName);
      this.onceListeners.delete(evtName);
      this.emitted.delete(evtName);
    }
  }

  // 私有方法：从指定事件中移除单个监听器
  _removeListener(evtName, listener) {
    const listeners = this.listeners.get(evtName);
    if (!listeners) return;

    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
      if (listeners.length === 0) {
        this.listeners.delete(evtName);
      }
    }
  }
}
