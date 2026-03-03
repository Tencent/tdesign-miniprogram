import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { TdConfigProviderProps } from './type';
import { configStore } from './config-store';
import themeVarsToCSS from './utils';

const { prefix } = config;
const componentName = 'config-provider';

export interface ConfigProviderProps extends TdConfigProviderProps {}

@wxComponent()
export default class ConfigProvider extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  externalClasses = [`${prefix}-class`];

  properties = props;

  data = {
    prefix,
    classPrefix: `${prefix}-${componentName}`,
    cssVars: {},
  };

  // 存储取消订阅的函数
  _unsubscribeLocale?: () => void;

  // 组件唯一标识符
  _componentId?: string;

  observers = {
    'themeVars, globalConfig'() {
      this.updateConfig();
    },
  };

  lifetimes = {
    attached() {
      // 生成组件唯一标识符
      this._componentId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;

      this.initStore();
      this.updateConfig();
    },

    detached() {
      // 组件销毁时取消订阅
      if (this._unsubscribeLocale) {
        this._unsubscribeLocale();
      }
      // 重置页面状态
      if (this._componentId) {
        configStore.resetPageState(this._componentId);
      }
    },
  };

  methods = {
    /**
     * 初始化 Store 并订阅状态变化
     */
    initStore() {
      // 订阅语言包变化
      this._unsubscribeLocale = configStore.currentLocale.subscribe(() => {});
    },

    /**
     * 更新配置
     */
    updateConfig() {
      const { themeVars, globalConfig } = this.properties;

      // 切换语言包
      if (globalConfig) {
        configStore.switchLocale(globalConfig, this._componentId);
      }

      // 更新主题变量
      if (themeVars) {
        configStore.updateThemeVars(themeVars);
      }

      // 应用主题变量
      this.applyTheme();
    },

    applyTheme() {
      const { themeVars } = this.properties;

      const cssVars = themeVarsToCSS(themeVars || {});

      this.setData({
        cssVars,
      });
    },
  };
}
