/**
 * 提供子组件从 config-provider 获取全局配置的能力
 */
import { getComponentLocale, useConfig } from '../config-provider/use-config';
import { toCamel } from '../common/utils';
import defaultLocale from '../locale/zh_CN';

export default function usingConfig(options) {
  const { componentName, localeTextPropName } = options;
  const innerComponentName = toCamel(componentName);

  return {
    data() {
      return {
        globalConfig: {},
      };
    },
    created() {
      this.updateLocale();
      const configHook = useConfig(innerComponentName);
      this.iUnsubscribeLocale = configHook.subscribeLocale(this, () => {
        this.updateLocale();
      });
    },
    beforeDestroy() {
      if (this.iUnsubscribeLocale) {
        this.iUnsubscribeLocale();
        this.iUnsubscribeLocale = null;
      }
    },
    methods: {
      updateLocale() {
        const componentDefaultLocale = defaultLocale[innerComponentName] || {};
        const globalConfig = getComponentLocale(this, innerComponentName, componentDefaultLocale, localeTextPropName);
        this.globalConfig = globalConfig;
      },
    },
  };
}
