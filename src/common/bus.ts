export default class Bus {
  listeners: Map<string, any>;
  emited: Set<string>;

  constructor() {
    this.listeners = new Map();
    this.emited = new Set();
  }

  on(evtName: string, listener) {
    if (this.emited.has(evtName)) {
      listener();
      return;
    }
    const target = this.listeners.get(evtName) || [];

    target.push(listener);

    this.listeners.set(evtName, target);
  }

  emit(evtName: string) {
    const listeners = this.listeners.get(evtName);

    if (listeners) {
      listeners.forEach((func) => func());
      this.emited.add(evtName);
    }
  }
}
