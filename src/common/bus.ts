export default class Bus {
  listeners: Map<string, any>;

  constructor() {
    this.listeners = new Map();
  }

  on(evtName: string, listener) {
    const target = this.listeners.get(evtName) || [];

    target.push(listener);

    this.listeners.set(evtName, target);
  }

  emit(evtName: string) {
    const listeners = this.listeners.get(evtName);

    if (listeners) {
      listeners.forEach((func) => func());
    }
  }
}
