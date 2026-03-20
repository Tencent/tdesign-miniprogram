<template>
  <view
    :class="'' + `${classPrefix} ${tClass}`"
    :style="'' + `${tools._style([customStyle, cssVars])}`"
  >
    <slot />
  </view>
</template>

<script>
import { prefix } from '../common/config';
import props from './props';
import { uniComponent } from '../common/src/index';
import tools from '../common/utils.wxs';
import { configStore } from './config-store';
import themeVarsToCSS from './utils';

const componentName = 'config-provider';
const name = `${prefix}-${componentName}`;

export default {
  ...uniComponent({
    name,
    externalClasses: [
      `${prefix}-class`,
    ],
    options: {
      styleIsolation: 'shared',
    },
    props: {
      ...props,
    },
    data() {
      return {
        prefix,
        tools,
        classPrefix: name,
        cssVars: {},
        iComponentId: null,
      };
    },
    watch: {
      themeVars: {
        handler() {
          this.updateConfig();
        },
        deep: true,
      },
      globalConfig: {
        handler() {
          this.updateConfig();
        },
        deep: true,
      },
    },
    mounted() {
      this.iComponentId = `${Date.now()}-${Math.random().toString(36)
        .slice(2)}`;
      this.initStore();
      this.updateConfig();
    },
    beforeUnmount() {
      if (this.iUnsubscribeLocale) {
        this.iUnsubscribeLocale();
      }
      if (this.iComponentId) {
        configStore.resetPageState(this.iComponentId);
      }
    },
    methods: {
    /**
     * 初始化 Store 并订阅状态变化
     */
      initStore() {
        this.iUnsubscribeLocale = configStore.currentLocale.subscribe(() => {});
      },

      /**
     * 更新配置
     */
      updateConfig() {
        const { themeVars, globalConfig } = this;

        // 切换语言包
        if (globalConfig) {
          configStore.switchLocale(globalConfig, this.iComponentId);
        }

        // 更新主题变量
        if (themeVars) {
          configStore.updateThemeVars(themeVars);
        }

        // 应用主题变量
        this.applyTheme();
      },

      applyTheme() {
        const { themeVars } = this;
        this.cssVars = themeVarsToCSS(themeVars || {});
      },
    },
  }),
};
</script>
