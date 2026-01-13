<template>
  <view
    :class="[tClass, prefix || 't-icon']"
    :style="tools._style([iconStyle, customStyle])"
    :aria-hidden="ariaHidden"
    :aria-label="ariaLabel"
    :aria-role="ariaRole"
    @click="onTap"
  >
    <view
      v-if="isImage"
      :class="classPrefix + '--image'"
    >
      <image
        :src="name"
        mode="aspectFit"
        :class="classPrefix + '__image'"
      />
    </view>
    <div
      v-if="tools.isValidIconName(name) && !isImage"
      :class="(prefix ? prefix : classPrefix) + '-' + name + ' ' + classPrefix + '-base'"
    />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { styles, addUnit, getRect } from '../common/utils';
import tools from '../common/utils.wxs';


const name = `${prefix}-icon`;
export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [`${prefix}-class`],
  props: {
    ...props,
  },
  data() {
    return {
      componentPrefix: prefix,
      classPrefix: name,
      isImage: false,
      iconStyle: undefined,
      tools,
    };
  },
  watch: {
    name: {
      handler() {
        this.setIconStyle();
      },
      immediate: true,
    },
    color: {
      handler() {
        this.setIconStyle();
      },
      immediate: true,
    },
    size: {
      handler() {
        this.setIconStyle();
      },
      immediate: true,
    },
    style: {
      handler() {
        this.setIconStyle();
      },
      immediate: true,
    },
  },
  methods: {
    onTap(t) {
      this.$emit('click', t);
    },
    setIconStyle() {
      const {
        name,
        color,
        size,
        classPrefix,
      } = this;
      const isImage = name.indexOf('/') !== -1;
      const sizeValue = addUnit(size);
      const colorStyle = color ? {
        color,
      } : {};
      const fontStyle = size ? {
        'font-size': sizeValue,
      } : {};
      const iconStyle = { ...colorStyle, ...fontStyle };
      this.isImage = isImage;

      if (isImage) {
        let iconSize = sizeValue;
        if (!iconSize) {
          getRect(this, `.${classPrefix}`)
            .then((res) => {
              iconSize = addUnit(res?.height);
            })
            .catch(() => {});
        }

        iconStyle.width = iconSize;
        iconStyle.height = iconSize;
      }
      this.iconStyle = `${styles(iconStyle)}`;
    },
  },
});
</script>
<style scoped>
@import './icon.css';
</style>
