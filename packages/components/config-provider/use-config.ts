/**
 * 获取配置的工具函数
 * 用于子组件从 config-provider 获取全局配置
 */

import { configStore } from './config-store';

/**
 * 获取组件的 locale 配置
 * @param component 组件实例
 * @param componentName 以组件名作为 locale 中的 key（如 'picker'、'calendar' 等）
 * @param defaultLocale 默认语言包
 * @param localePropName 组件自定义语言文本的属性名
 * @returns 合并后的语言包
 */
export function getComponentLocale<T extends Record<string, any>>(
  component: any,
  componentName: string,
  defaultLocale: T,
  localePropName?: string,
): T {
  let componentLocale = {};
  if (localePropName) {
    componentLocale = component.properties?.[localePropName] || {};
  }

  // 从全局 store 获取 config-provider 的 locale，然后得到当前组件的语言包
  const globalLocaleConfig = configStore.currentLocale.value;
  const globalLocale = (globalLocaleConfig && globalLocaleConfig[componentName]) || {};

  // 合并顺序：组件传入 > config-provider > 默认值
  return {
    ...defaultLocale,
    ...globalLocale,
    ...componentLocale,
  };
}

/**
 * 获取全局配置的 hook
 * 返回一个包含 locale 订阅和取消订阅的对象
 * @param componentName 以组件名作为 locale 中的 key
 */
export function useConfig(componentName: string) {
  return {
    /**
     * 获取当前的 locale
     * @param defaultLocale 默认语言包
     * @param component 组件实例
     * @returns 合并后的语言包
     */
    getLocale<T extends Record<string, any>>(defaultLocale: T, component: any): T {
      return getComponentLocale(component, componentName, defaultLocale);
    },

    /**
     * 订阅 locale 变化
     * @param component 组件实例
     * @param callback locale 变化时的回调
     * @returns 取消订阅的函数
     */
    subscribeLocale(component: any, callback: (locale: Record<string, any>) => void): () => void {
      const unsubscribe = configStore.currentLocale.subscribe((locale) => {
        // 调用回调
        callback(locale);
      });

      return unsubscribe;
    },
  };
}
