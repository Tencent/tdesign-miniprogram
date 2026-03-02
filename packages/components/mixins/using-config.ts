/**
 * 提供子组件从 config-provider 获取全局配置的能力
 */

import { getComponentLocale, useConfig } from '../config-provider/use-config';
import { toCamel } from '../common/utils';
import defaultLocale from '../locale/zh_CN';

export interface UsingConfigBehaviorOptions {
  /** 组件在 locale 中的 key（如 'picker'、'calendar' 等） */
  componentName: string;
  /** 组件自定义语言文本的属性名（如 'localeText'） */
  localeTextPropName?: string;
}

export default function usingConfig(options: UsingConfigBehaviorOptions) {
  const { componentName, localeTextPropName } = options;
  const _componentName = toCamel(componentName);

  return Behavior({
    data: {
      globalConfig: {},
    },

    lifetimes: {
      attached() {
        this.updateLocale?.();

        // 订阅全局 locale 变化
        const configHook = useConfig(_componentName);
        this._unsubscribeLocale = configHook.subscribeLocale(this, () => {
          this.updateLocale?.();
        });
      },

      detached() {
        // 清理订阅
        const unsubscribe = this._unsubscribeLocale;
        if (unsubscribe) {
          unsubscribe();
          this._unsubscribeLocale = null;
        }
      },
    },

    methods: {
      /**
       * 更新语言包
       * 子组件可以覆盖此方法以自定义更新逻辑
       */
      updateLocale() {
        const componentDefaultLocale = defaultLocale[_componentName] || {};
        const globalConfig = getComponentLocale(this, _componentName, componentDefaultLocale, localeTextPropName);

        this.setData({
          globalConfig,
        });
      },
    },
  });
}
