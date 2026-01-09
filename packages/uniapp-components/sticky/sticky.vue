<template>
  <view
    :class="classPrefix + ' ' + tClass"
    :style="tools._style(['z-index:' + zIndex, containerStyle, customStyle])"
  >
    <view
      :class="classPrefix + '__content ' + tClassContent"
      :style="tools._style(['z-index:' + zIndex, contentStyle])"
    >
      <slot />
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import props from './props';
import { prefix } from '../common/config';
import pageScrollMixin from '../mixins/page-scroll';
import { getRect, nextTick } from '../common/utils';
import tools from '../common/utils.wxs';


const name = `${prefix}-sticky`;
const ContainerClass = `.${name}`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
  ],
  mixins: [pageScrollMixin()],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      containerStyle: '',
      contentStyle: '',
      tools,
    };
  },
  watch: {
    offsetTop: 'onScroll',
    disabled: 'onScroll',
    container: 'onScroll',
  },
  mounted() {
    this.onScroll();
  },
  methods: {
    onScroll(event) {
      const { scrollTop } = event || {};
      const { container, offsetTop, disabled } = this;

      if (disabled) {
        this.setDataAfterDiff({
          isFixed: false,
          transform: 0,
        });
        return;
      }

      this.scrollTop = scrollTop || this.scrollTop;

      if (typeof container === 'function') {
        Promise.all([getRect(this, ContainerClass), this.getContainerRect()]).then(([root, container]) => {
          if (!root || !container) return;
          if (offsetTop + root.height > container.height + container.top) {
            this.setDataAfterDiff({
              isFixed: false,
              transform: container.height - root.height,
            });
          } else if (offsetTop >= root.top) {
            this.setDataAfterDiff({
              isFixed: true,
              height: root.height,
              transform: 0,
            });
          } else {
            this.setDataAfterDiff({ isFixed: false, transform: 0 });
          }
        });

        return;
      }

      getRect(this, ContainerClass).then((root) => {
        if (!root) return;
        if (offsetTop >= root.top) {
          this.setDataAfterDiff({ isFixed: true, height: root.height });
          this.transform = 0;
        } else {
          this.setDataAfterDiff({ isFixed: false });
        }
      });
    },

    setDataAfterDiff(data) {
      const { offsetTop } = this;
      const { containerStyle: prevContainerStyle, contentStyle: prevContentStyle } = this;
      const { isFixed, height, transform } = data;
      nextTick().then(() => {
        let containerStyle = '';
        let contentStyle = '';

        if (isFixed) {
          containerStyle += `height:${height}px;`;
          contentStyle += `position:fixed;top:${offsetTop}px;left:0;right:0;`;
        }
        if (transform) {
          const translate = `translate3d(0, ${transform}px, 0)`;
          contentStyle += `-webkit-transform:${translate};transform:${translate};`;
        }

        if (prevContainerStyle !== containerStyle || prevContentStyle !== contentStyle) {
          this.containerStyle = containerStyle;
          this.contentStyle = contentStyle;
        }

        this.$emit('scroll', {
          scrollTop: this.scrollTop,
          isFixed,
        });
      });
    },

    getContainerRect() {
      const nodesRef = this.container();
      return new Promise(resolve => nodesRef.boundingClientRect(resolve).exec());
    },
  },
});

</script>
<style scoped>
@import './sticky.css';
</style>
