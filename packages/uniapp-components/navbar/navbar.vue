<template>
  <view
    :class="tools.cls(classPrefix, [['fixed', fixed]]) + ' ' + visibleClass + ' ' + tClass"
    :style="tools._style([boxStyle, customStyle])"
  >
    <view
      v-if="fixed && placeholder"
      :class="classPrefix + '__placeholder ' + tClassPlaceholder"
    />
    <view :class="classPrefix + '__content ' + tClassContent">
      <view :class="classPrefix + '__left ' + (hideLeft ? classPrefix + '__left--hide' : '') + ' ' + tClassLeft">
        <view
          v-if="leftArrow"
          :class="classPrefix + '__btn'"
          aria-role="button"
          aria-label="返回"
          @click="goBack"
        >
          <t-icon
            name="chevron-left"
            :custom-style="leftArrowCustomStyle"
            :t-class="classPrefix + '__left-arrow'"
          />
        </view>
        <slot name="left" />
        <view :class="classPrefix + '__capsule ' + tClassCapsule">
          <slot name="capsule" />
        </view>
      </view>
      <view :class="classPrefix + '__center ' + (hideCenter ? classPrefix + '__center--hide' : '') + ' ' + tClassCenter">
        <slot name="title" />
        <text
          v-if="title"
          :class="classPrefix + '__center-title ' + tClassTitle"
        >
          {{ showTitle }}
        </text>
      </view>

      <view
        :class="classPrefix + '__right'"
        @click="onClickRight"
      >
        <slot name="right" />
      </view>
    </view>
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { getRect, systemInfo } from '../common/utils';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';


const name = `${prefix}-navbar`;

const BASE_MENU_RECT = {
  width: 87,
  height: 32,
  top: 24,
  right: systemInfo.windowWidth - 10,
};


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-placeholder`,
    `${prefix}-class-content`,
    `${prefix}-class-title`,
    `${prefix}-class-left`,
    `${prefix}-class-center`,
    `${prefix}-class-left-icon`,
    `${prefix}-class-home-icon`,
    `${prefix}-class-capsule`,
    `${prefix}-class-nav-btn`,
  ],
  components: {
    TIcon,
  },
  props: {
    ...props,
  },
  emits: [
    'fail',
    'complete',
    'success',
    'go-back',
    'right-click',
  ],
  data() {
    return {
      timer: null,
      prefix,
      classPrefix: name,
      boxStyle: '',
      showTitle: '',
      hideLeft: false,
      hideCenter: false,
      _menuRect: null,
      _leftRect: null,
      _boxStyle: {},
      tools,

      visibleClass: '',

    };
  },
  computed: {
    leftArrowCustomStyle() {
      return 'font-size: var(--td-navbar-left-arrow-size, 24px);';
    },
  },
  watch: {
    visible(visible) {
      const { animation } = this;
      const visibleClass = `${name}${visible ? '--visible' : '--hide'}`;
      this.visibleClass = `${visibleClass}${animation ? '-animation' : ''}`;

      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (animation) {
        this.timer = setTimeout(() => {
          this.visibleClass = visibleClass;
        }, 300);
      }
    },

    title: 'onWatchTitle',
    titleMaxLength: 'onWatchTitle',
  },

  mounted() {
    this.onWatchTitle();
    this.initStyle();
    this.getLeftRect();
    this.onMenuButtonBoundingClientRectWeightChange();
  },

  beforeUnMount() {
    this.offMenuButtonBoundingClientRectWeightChange();
  },
  methods: {
    initStyle() {
      this.getMenuRect();

      const { _menuRect, _leftRect } = this;

      if (!_menuRect || !_leftRect || !systemInfo) return;

      const _boxStyle = {
        '--td-navbar-padding-top': `${systemInfo.statusBarHeight}px`,
        '--td-navbar-right': `${systemInfo.windowWidth - _menuRect.left}px`, // 导航栏右侧小程序胶囊按钮宽度
        '--td-navbar-left-max-width': `${_menuRect.left}px`, // 左侧内容最大宽度
        '--td-navbar-capsule-height': `${_menuRect.height}px`, // 胶囊高度
        '--td-navbar-capsule-width': `${_menuRect.width}px`, // 胶囊宽度
        '--td-navbar-height': `${(_menuRect.top - systemInfo.statusBarHeight) * 2 + _menuRect.height}px`,
      };
      // #ifdef H5 || APP-PLUS
      delete _boxStyle['--td-navbar-height'];
      // #endif

      this.calcCenterStyle(_leftRect, _menuRect, _boxStyle);
    },
    onWatchTitle() {
      const { title } = this;
      const titleMaxLength = this.titleMaxLength || Number.MAX_SAFE_INTEGER;
      let temp = title.slice(0, titleMaxLength);
      if (titleMaxLength < title.length) temp += '...';

      this.showTitle = temp;
    },

    calcCenterStyle(
      leftRect,
      menuRect,
      defaultStyle,
    ) {
      const maxSpacing = Math.max(leftRect.right, systemInfo.windowWidth - menuRect.left);
      const _boxStyle = {
        ...defaultStyle,
        'z-index': this.zIndex,
        '--td-navbar-center-left': `${maxSpacing}px`, // 标题左侧距离
        '--td-navbar-center-width': `${Math.max(menuRect.left - maxSpacing, 0)}px`, // 标题宽度
      };

      const boxStyle = Object.entries(_boxStyle)
        .map(([k, v]) => `${k}: ${v}`)
        .join('; ');

      this.boxStyle = boxStyle;
      this._boxStyle = _boxStyle;
    },

    getLeftRect() {
      getRect(this, `.${name}__left`).then((res) => {
        if (res.right > this._leftRect.right) {
          this.calcCenterStyle(res, this._menuRect, this._boxStyle);
        }
      });
    },

    getMenuRect() {
      // 场景值为1177（视频号直播间）和1175 （视频号profile页）时，小程序禁用了 uni.getMenuButtonBoundingClientRect
      let rect = {
        ...BASE_MENU_RECT,
        bottom: BASE_MENU_RECT.top + BASE_MENU_RECT.height,
        left: BASE_MENU_RECT.right - BASE_MENU_RECT.width,
      };
      if (uni.getMenuButtonBoundingClientRect
         && typeof uni.getMenuButtonBoundingClientRect === 'function'
         && typeof uni.getMenuButtonBoundingClientRect()  === 'object'
      ) {
        rect = uni.getMenuButtonBoundingClientRect() || {};
      }

      this._menuRect = rect;
      this._leftRect = {
        right: systemInfo.windowWidth - rect.left,
      };
    },

    onMenuButtonBoundingClientRectWeightChange() {
      if (uni.onMenuButtonBoundingClientRectWeightChange) {
        this.onMenuButtonBoundingClientRectWeightChangeCallback = res => this.queryElements(res);

        uni.onMenuButtonBoundingClientRectWeightChange(this.onMenuButtonBoundingClientRectWeightChangeCallback);
      }
    },

    offMenuButtonBoundingClientRectWeightChange() {
      if (this.onMenuButtonBoundingClientRectWeightChangeCallback) {
        uni.offMenuButtonBoundingClientRectWeightChange(this.onMenuButtonBoundingClientRectWeightChangeCallback);
      }
    },

    /**
     * 比较胶囊条和navbar内容，决定是否隐藏
     * @param capsuleRect API返回值，胶囊条的位置信息
     */
    queryElements(capsuleRect) {
      Promise.all([
        getRect(this, `.${this.classPrefix}__left`),
        getRect(this, `.${this.classPrefix}__center`),
      ]).then(([leftRect, centerRect]) => {
        // 部分安卓机型中（目前仅在Magic6/7中复现），仍存在精度问题，暂使用 Math.round() 取整规避
        const leftRight = Math.round(leftRect.right);
        const centerRight = Math.round(centerRect.right);
        const capsuleLeft = capsuleRect.left;

        this.hideLeft = leftRight > capsuleLeft;
        this.hideCenter = leftRight > capsuleLeft ? true : centerRight > capsuleLeft;
      });
    },

    goBack() {
      const { delta } = this;
      // eslint-disable-next-line
      const that = this;
      this.$emit('go-back');
      if (delta > 0) {
        uni.navigateBack({
          delta,
          fail(e) {
            that.$emit('fail', e);
          },
          complete(e) {
            that.$emit('complete', e);
          },
          success(e) {
            that.$emit('success', e);
          },
        });
      }
    },

    onClickRight() {
      this.$emit('right-click');
    },
  },
});
</script>
<style scoped>
@import './navbar.css';
</style>
