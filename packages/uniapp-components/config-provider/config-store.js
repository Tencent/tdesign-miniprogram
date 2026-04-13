import ReactiveState from './reactive-state';

class ConfigStore {
  constructor() {
    this.currentLocale = new ReactiveState({});
    this.themeVars = new ReactiveState({});
    this.pageInitFlags = new Map();
    this.cleanupCallbacks = new Map();
  }

  deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (a == null || b == null) return a === b;
    if (typeof a !== 'object') return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch (e) {
      return keysA.every(key => this.deepEqual(a[key], b[key]));
    }
  }

  switchLocale(locale, componentId) {
    if (!componentId) return;
    const pageInitFlag = this.getOrInitPageFlag(componentId);
    if (!pageInitFlag.locale) {
      pageInitFlag.locale = true;
      this.currentLocale.value = locale;
    } else {
      const isEmptyLocale = !locale || Object.keys(locale).length === 0;
      const isCurrentEmpty = Object.keys(this.currentLocale.value).length === 0;
      if (isEmptyLocale !== isCurrentEmpty || !this.deepEqual(locale, this.currentLocale.value)) {
        this.currentLocale.value = locale;
      }
    }
  }

  updateThemeVars(vars) {
    this.themeVars.value = { ...this.themeVars.value, ...vars };
  }

  getOrInitPageFlag(componentId) {
    if (!this.pageInitFlags.has(componentId)) {
      this.pageInitFlags.set(componentId, { theme: false, locale: false });
    }
    return this.pageInitFlags.get(componentId);
  }

  resetPageState(componentId) {
    if (componentId) {
      this.pageInitFlags.delete(componentId);
      const cleanup = this.cleanupCallbacks.get(componentId);
      if (cleanup) {
        try {
          cleanup();
        } catch (e) { /* ignore */ }
        this.cleanupCallbacks.delete(componentId);
      }
      const hasOtherLocaleProvider = Array.from(this.pageInitFlags.values()).some(flag => flag.locale);
      if (!hasOtherLocaleProvider) {
        this.currentLocale.value = {};
      }
    }
  }
}

export const configStore = new ConfigStore();
