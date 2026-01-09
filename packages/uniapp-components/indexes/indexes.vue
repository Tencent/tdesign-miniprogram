<template>
  <view
    :style="tools._style([customStyle])"
    :class="classPrefix + ' ' + tClass"
    disable-scroll
  >
    <view
      :id="'id-' + classPrefix + '__bar'"
      :class="classPrefix + '__sidebar ' + tClassSidebar"
      @touchmove.stop.prevent="onTouchMove"
      @touchcancel.stop.prevent="onTouchCancel"
      @touchend.stop.prevent="onTouchEnd"
    >
      <view
        v-for="(item, index) in _indexList"
        :key="index"
        :class="tools.cls(classPrefix + '__sidebar-item', [['active', dataCurrent === item]]) + ' ' + tClassSidebarItem"
        :data-index="index"
        @click.stop="onClick(item, index)"
      >
        <view
          aria-role="button"
          :aria-label="dataCurrent === item ? '已选中' + item : ''"
        >
          {{ getFirstCharacter(item) }}
        </view>

        <view
          v-if="showTips && dataCurrent === item"
          :class="classPrefix + '__sidebar-tips'"
        >
          {{ dataCurrent }}
        </view>
      </view>
    </view>
    <slot />
  </view>
</template>
<script>
import tIcon from '../icon/icon';
import tCell from '../cell/cell';
import tCellGroup from '../cell-group/cell-group';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { getRect, throttle, systemInfo } from '../common/utils';
import pageScrollMixin from '../mixins/page-scroll';
import tools from '../common/utils.wxs';
import { getFirstCharacter } from './computed.js';
import { ParentMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-indexes`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'current',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-sidebar`,
    `${prefix}-class-sidebar-item`,
  ],
  mixins: [
    pageScrollMixin(),
    ParentMixin(RELATION_MAP.IndexesAnchor),
  ],
  components: {
    tIcon,
    tCell,
    tCellGroup,
  },
  props: {
    ...props,
  },
  emits: [
    'change',
    'select',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      _height: 0,
      _indexList: [],
      scrollTop: 0,
      activeAnchor: this.current,
      showTips: false,

      tools,

      timer: null,
      groupTop: [],
      sidebar: null,
      currentTouchAnchor: null,

      dataCurrent: this.current,
    };
  },
  watch: {
    indexList: {
      handler(v, pre) {
        const cb = () => {
          this.setIndexList(v);
          this.setHeight(this._height);
        };
        if (!pre?.length) {
          // 防止抖音小程序报错
          setTimeout(() => {
            cb();
          }, 33);
        } else {
          cb();
        }
      },
      immediate: true,
    },
    height(v) {
      this.setHeight(v);
    },
    stickyOffset() {
      this.setAnchorByCurrent(this.dataCurrent, 'update', true);
    },

    current: {
      handler(val) {
        this.dataCurrent = val;
      },
      immediate: true,
    },
    dataCurrent: {
      handler(e) {
        if (e && this.activeAnchor && e !== this.activeAnchor) {
          this.setAnchorByCurrent(e, 'update');
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.timer = null;
    this.groupTop = [];
    this.sidebar = null;

    if (this._height === 0) {
      this.setHeight();
    }

    if (this.indexList === null) {
      this.setIndexList();
    }
  },
  methods: {
    getFirstCharacter,
    setHeight(height) {
      if (!height) {
        const { windowHeight } = systemInfo;
        height = windowHeight;
      }
      this._height = height;

      setTimeout(() => {
        this.getAllRect();
      });
    },

    setIndexList(list) {
      if (!list) {
        const start = 'A'.charCodeAt(0);
        const alphabet = [];

        for (let i = start, end = start + 26; i < end; i += 1) {
          alphabet.push(String.fromCharCode(i));
        }

        this._indexList = alphabet;
      } else {
        this._indexList = list;
      }
    },

    getAllRect() {
      this.getAnchorsRect().then(() => {
        this.groupTop.forEach((item, index) => {
          const next = this.groupTop[index + 1];
          item.totalHeight = (next?.top || Infinity) - item.top;
        });

        const current = this.dataCurrent || this._indexList[0];
        this.setAnchorByCurrent(current, 'init');
      })
        .catch((err) => {
          console.log('err', err);
        });
      this.getSidebarRect();
    },

    getAnchorsRect() {
      return Promise.all((this.children || [])
        .map(child => getRect(child, `.${name}-anchor`)
          .then((rect) => {
            this.groupTop.push({
              height: rect.height,
              top: rect.top,
              anchor: child.index,
            });
          })
          .catch((err) => {
            console.log('err', err);
          })));
    },

    getSidebarRect() {
      getRect(this, `#id-${name}__bar`).then((rect) => {
        const { top, height } = rect;
        const { length } = this._indexList;

        this.sidebar = {
          top,
          height,
          itemHeight: (height - (length - 1) * 2) / length, // margin = 2px
        };
      })
        .catch((err) => {
          console.log('err', err);
        });
    },

    toggleTips(flag) {
      if (!flag) {
        clearInterval(this.timer);
        this.timer = setTimeout(() => {
          this.showTips = false;
        }, 300);
      } else {
        this.showTips = true;
      }
    },

    setAnchorByCurrent(current, source, force) {
      const { stickyOffset } = this;

      if (this.activeAnchor !== null && this.activeAnchor === current && !force) return;

      const target = this.groupTop.find(item => item.anchor === current);

      // 寻求与 小程序 一致逻辑
      // this.activeAnchor = current;
      if (target) {
        const scrollTop = target.top - stickyOffset;

        // if (scrollTop === 0 && source === 'init') {
        // 与当前小程序逻辑不同
        this.setAnchorOnScroll(scrollTop);
        // } else {
        uni.pageScrollTo({
          scrollTop,
          duration: 0,
        });
        // }

        if (['click', 'touch'].includes(source)) {
          this.toggleTips(true);
          this.$emit('select', { index: current });
        }
      }
    },

    onClick(current) {
      this.setAnchorByCurrent(current, 'click');
    },

    onTouchMove(e) {
      this.onAnchorTouch(e);
    },

    onTouchCancel() {
      this.toggleTips(false);
    },

    onTouchEnd(e) {
      this.toggleTips(false);
      this.onAnchorTouch(e);
    },

    onAnchorTouch: throttle(function (e) {
      const getAnchorIndex = (clientY) => {
        const offsetY = clientY - this.sidebar.top;
        const max = this._indexList.length - 1;

        if (offsetY <= 0) {
          return 0;
        }

        if (offsetY > this.sidebar.height) {
          return max;
        }

        return Math.min(max, Math.floor(offsetY / this.sidebar.itemHeight));
      };
      const index = getAnchorIndex(e.changedTouches[0].clientY);

      this.setAnchorByCurrent(this._indexList[index], 'touch');
    }, 1000 / 30), // 30 frame

    setAnchorOnScroll(scrollTop) {
      if (!this.groupTop) {
        return;
      }

      const { sticky, stickyOffset } = this;

      scrollTop += stickyOffset;

      const curIndex = this.groupTop.findIndex(group => scrollTop >= group.top - group.height && scrollTop <= group.top + group.totalHeight - group.height);

      if (curIndex === -1) return;

      const curGroup = this.groupTop[curIndex];

      this.activeAnchor = curGroup.anchor;
      setTimeout(() => {
        this._trigger('change', { index: curGroup.anchor, current: curGroup.anchor });
      });

      if (sticky) {
        const offset = curGroup.top - scrollTop;
        const betwixt = offset < curGroup.height && offset > 0 && scrollTop > stickyOffset;

        this.children.forEach((child, index) => {
          if (index === curIndex) {
            const sticky = scrollTop > stickyOffset;
            const anchorStyle = `transform: translate3d(0, ${betwixt ? offset : 0}px, 0); top: ${stickyOffset}px`;
            if (anchorStyle !== child.anchorStyle || sticky !== child.sticky) {
              child.sticky = sticky;
              child.active = true;
              child.dataStyle = `height: ${curGroup.height}px`;
              child.anchorStyle = anchorStyle;
            }
          } else if (index + 1 === curIndex) {
            // 两个 anchor 同时出现时的上一个
            const anchorStyle = `transform: translate3d(0, ${
              betwixt ? offset - curGroup.height : 0
            }px, 0); top: ${stickyOffset}px`;
            if (anchorStyle !== child.anchorStyle) {
              child.sticky = true;
              child.active = true;
              child.dataStyle = `height: ${curGroup.height}px`;
              child.anchorStyle = anchorStyle;
            }
          } else {
            child.active = false;
            child.sticky = false;
            child.dataStyle = '';
            child.anchorStyle = '';
          }
        });
      }
    },

    onScroll({ scrollTop }) {
      this.setAnchorOnScroll(scrollTop);
    },
  },
});
</script>
<style scoped>
@import './indexes.css';
</style>
