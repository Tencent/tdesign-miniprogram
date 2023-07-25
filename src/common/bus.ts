export default class Bus {
  listeners: Map<string, any>;
  emitted: Set<string>;

  constructor() {
    this.listeners = new Map();
    this.emitted = new Set();
  }

  on(evtName: string, listener) {
    if (this.emitted.has(evtName)) {
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
    }
    this.emitted.add(evtName);
  }
}
