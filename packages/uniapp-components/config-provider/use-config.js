import { configStore } from './config-store';

export function getComponentLocale(component, componentName, defaultLocale, localePropName) {
  let componentLocale = {};
  if (localePropName && component[localePropName]) {
    componentLocale = component[localePropName];
  }
  const globalLocaleConfig = configStore.currentLocale.value;
  const globalLocale = (globalLocaleConfig && globalLocaleConfig[componentName]) || {};
  return {
    ...defaultLocale,
    ...globalLocale,
    ...componentLocale,
  };
}

export function useConfig(componentName) {
  return {
    getLocale(defaultLocale, component) {
      return getComponentLocale(component, componentName, defaultLocale);
    },
    subscribeLocale(component, callback) {
      const unsubscribe = configStore.currentLocale.subscribe((locale) => {
        callback(locale);
      });
      return unsubscribe;
    },
  };
}
