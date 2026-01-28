<template>
  <view
    :style="tools._style([customStyle])"
    :class="[
      classPrefix,
      tClass
    ]"
  >
    <block v-if="logo && Object.keys(logo).length">
      <view :class="classPrefix + '__logo'">
        <t-image
          v-if="logo.icon"
          :t-class="classPrefix + '__icon'"
          :custom-style="iconCustomStyle"
          :src="logo.icon"
        />
        <view
          v-if="logo.title"
          :class="classPrefix + '__title'"
        >
          {{ logo.title }}
        </view>
        <t-image
          v-else-if="logo.url"
          :t-class="classPrefix + '__title-url'"
          :custom-style="titleUrlCustomStyle"
          :src="logo.url"
          mode="widthFix"
        />
      </view>
    </block>
    <block v-else>
      <view
        v-if="links.length > 0"
        :class="classPrefix + '__link-list'"
      >
        <block
          v-for="(item, index) in links"
          :key="index"
        >
          <navigator
            :url="item.url"
            :open-type="item.openType"
            hover-class="none"
            :class="classPrefix + '__link-item'"
          >
            {{ item.name }}
          </navigator>

          <view
            v-if="index !== links.length - 1"
            :aria-hidden="true"
            :class="classPrefix + '__link-line'"
          >
            |
          </view>
        </block>
      </view>
      <view :class="classPrefix + '__text'">
        {{ text }}
      </view>
    </block>
  </view>
</template>
<script>
import TImage from '../image/image';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';


const name = `${prefix}-footer`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
  ],
  components: {
    TImage,
  },
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
  computed: {
    iconCustomStyle() {
      return tools._style({
        width: 'var(--td-footer-logo-icon-width, 24px)',
        height: 'var(--td-footer-logo-icon-height, 24px)',
        marginRight: 'var(--td-footer-logo-icon-margin-right, var(--td-spacer, 8px))',
      });
    },
    titleUrlCustomStyle() {
      return tools._style({
        width: 'var(--td-footer-logo-title-url-width, 128px)',
      });
    },
  },
  methods: {
  },
});
</script>
<style scoped>
@import './footer.css';
</style>
