<template>
  <view
    :style="'' + tools._style([customStyle])"
    :class="classPrefix + ' ' + tClass"
  >
    <view v-if="header">
      {{ header }}
    </view>
    <slot name="header" />

    <slot />

    <view
      :class="classPrefix + '__loading--wrapper'"
      @click="onLoadMore"
    >
      <t-loading
        v-if="asyncLoading === 'loading' || asyncLoading === 'load-more'"
        :indicator="asyncLoading === 'loading'"
        :text="asyncLoading === 'loading' ? globalConfig.loading : globalConfig.loadingMoreText"
        :t-class="classPrefix + '__loading ' + tClassLoading"
      />
      <block v-else>
        <slot name="async-loading" />
        <slot name="asyncLoading" />
      </block>
    </view>

    <view v-if="footer">
      {{ footer }}
    </view>
    <slot name="footer" />
  </view>
</template>

<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';
import { getRect, systemInfo } from '../common/utils';
import tools from '../common/utils.wxs';
import TLoading from '../loading/loading';
import pageScrollMixin from '../mixins/page-scroll';
import usingConfig from '../mixins/using-config';

import props from './props';

const componentName = 'list';
const name = `${prefix}-${componentName}`;

export default {
  components: {
    TLoading,
  },
  emits: ['load-more', 'scroll'],
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [`${prefix}-class`, `${prefix}-class-loading`],
    mixins: [usingConfig({ componentName }), pageScrollMixin()],
    props: {
      ...props,
    },
    data() {
      return {
        prefix,
        classPrefix: name,
        tools,
      };
    },
    methods: {
      onLoadMore() {
        if (this.asyncLoading === 'load-more') {
          this.$emit('load-more');
        }
      },

      onScroll(event) {
        // #ifdef H5
        if (event && typeof event.scrollHeight === 'number') {
          const scrollTop = event.scrollTop || document.documentElement.scrollTop || document.body.scrollTop || 0;
          const offsetHeight = event.offsetHeight || systemInfo.windowHeight;
          this.$emit('scroll', event.scrollHeight - (scrollTop + offsetHeight), scrollTop);
          return;
        }
        // #endif

        const scrollTop = event?.scrollTop || 0;
        getRect(this, `.${name}`).then((rect) => {
          this.$emit('scroll', rect.bottom - systemInfo.windowHeight, scrollTop);
        });
      },
    },
  }),
};
</script>

<style src="./list.css" scoped></style>
