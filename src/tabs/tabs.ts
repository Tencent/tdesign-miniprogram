import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import props from './props';
import config from '../common/config';
import touch from '../mixins/touch';
import { getRect, uniqueFactory } from '../common/utils';
import { TdTabsProps } from './type';

const { prefix } = config;
const name = `${prefix}-tabs`;
const getUniqueID = uniqueFactory('tabs');

export interface TabsProps extends TdTabsProps {}

@wxComponent()
export default class Tabs extends SuperComponent {
  options = {
    pureDataPattern: /^currentLabels$/,
  };

  behaviors = [touch];

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-item`,
    `${prefix}-class-active`,
    `${prefix}-class-track`,
    `${prefix}-class-content`,
  ];

  relations: RelationsOptions = {
    '../tab-panel/tab-panel': {
      type: 'descendant',
      linked(target: any) {
        this.children.push(target);
        this.initChildId();
        target.index = this.children.length - 1;
        this.updateTabs();
      },
      unlinked(target: WechatMiniprogram.Component.TrivialInstance) {
        this.children = this.children.filter((item) => item.index !== target.index);
        this.updateTabs(() => this.setTrack());
        this.initChildId();
      },
    },
  };

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  observers = {
    value(name) {
      if (name !== this.getCurrentName()) {
        this.setCurrentIndexByName(name);
      }
    },
  };

  data = {
    prefix,
    classPrefix: name,
    tabs: [],
    currentLabels: [],
    currentIndex: -1,
    trackStyle: '',
    offset: 0,
    scrollLeft: 0,
    tabID: '',
    placement: 'top',
  };

  lifetimes = {
    created() {
      this.children = this.children || [];
    },

    attached() {
      wx.nextTick(() => {
        this.setTrack();
      });
      getRect(this, `.${name}`).then((rect) => {
        this.containerWidth = rect.width;
      });
      this.setData({
        tabID: getUniqueID(),
      });
    },
  };

  initChildId() {
    this.children.forEach((item, index) => {
      item.setId(`${this.data.tabID}_panel_${index}`);
    });
  }

  methods = {
    onScroll(e) {
      const { scrollLeft } = e.detail;
      this.setData({
        scrollLeft,
      });
    },
    updateTabs(cb) {
      const { children } = this;
      const tabs = children.map((child: any) => child.data);

      tabs.forEach((item) => {
        if (typeof item.icon === 'string') {
          item.icon = { name: item.icon };
        }
      });

      this.setData({ tabs }, cb);
      this.setCurrentIndexByName(this.properties.value);
    },

    setCurrentIndexByName(name) {
      const { children } = this;
      const index = children.findIndex((child: any) => child.getComputedName() === `${name}`);
      if (index > -1) {
        this.setCurrentIndex(index);
      }
    },

    setCurrentIndex(index: number) {
      if (index <= -1 || index >= this.children.length) return;
      const Labels = [];
      this.children.forEach((child: any, idx: number) => {
        const isActive = index === idx;
        if (isActive !== child.data.active) {
          child.render(isActive, this);
        }
        Labels.push(child.data.label);
      });

      const { currentIndex, currentLabels } = this.data;
      if (currentIndex === index && currentLabels.join('') === Labels.join('')) return;
      this.setData(
        {
          currentIndex: index,
          currentLabels: Labels,
        },
        () => {
          this.setTrack();
        },
      );
    },

    getCurrentName() {
      if (this.children) {
        const activeTab = this.children[this.data.currentIndex];
        if (activeTab) {
          return activeTab.getComputedName();
        }
      }
    },

    calcScrollOffset(containerWidth: number, targetLeft: number, targetWidth: number, offset: number) {
      return offset + targetLeft - (1 / 2) * containerWidth + targetWidth / 2;
    },

    // 外部无法获取虚拟组件节点位置信息
    getTabHeight() {
      return getRect(this, `.${name}`);
    },

    getTrackSize() {
      return new Promise<number>((resolve, reject) => {
        if (this.trackWidth) {
          resolve(this.trackWidth);
          return;
        }
        getRect(this, `.${prefix}-tabs__track`)
          .then((res) => {
            if (res) {
              this.trackWidth = res.width;
              resolve(this.trackWidth);
            }
          })
          .catch(reject);
      });
    },

    async setTrack() {
      // if (!this.properties.showBottomLine) return;
      const { children } = this;
      if (!children) return;
      const { currentIndex } = this.data;
      if (currentIndex <= -1) return;

      try {
        const res = await getRect(this, `.${prefix}-tabs__item`, true);
        const rect = res[currentIndex];
        if (!rect) return;
        let count = 0;
        let distance = 0;
        let totalSize = 0;

        res.forEach((item) => {
          if (count < currentIndex) {
            distance += item.width;
            count += 1;
          }
          totalSize += item.width;
        });

        if (this.containerWidth) {
          const offset = this.calcScrollOffset(this.containerWidth, rect.left, rect.width, this.data.scrollLeft);
          const maxOffset = totalSize - this.containerWidth;
          this.setData({
            offset: Math.min(Math.max(offset, 0), maxOffset),
          });
        }

        if (this.data.theme === 'line') {
          const trackLineWidth = await this.getTrackSize();
          distance += (rect.width - trackLineWidth) / 2;
        }
        this.setData({
          trackStyle: `-webkit-transform: translateX(${distance}px);
            transform: translateX(${distance}px);
          `,
        });
      } catch (err) {
        this.triggerEvent('error', err);
      }
    },

    onTabTap(event: any) {
      const { index } = event.currentTarget.dataset;

      this.changeIndex(index);
    },

    onTouchStart(event: any) {
      if (!this.properties.swipeable) return;

      this.touchStart(event);
    },

    onTouchMove(event: any) {
      if (!this.properties.swipeable) return;

      this.touchMove(event);
    },

    onTouchEnd() {
      if (!this.properties.swipeable) return;

      const { direction, deltaX, offsetX } = this;
      const minSwipeDistance = 50;
      if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
        const index = this.getAvailableTabIndex(deltaX);
        if (index !== -1) {
          this.changeIndex(index);
        }
      }
    },

    onTouchScroll(event: WechatMiniprogram.CustomEvent) {
      this._trigger('scroll', event.detail);
    },

    changeIndex(index) {
      const currentTab = this.data.tabs[index];
      const { value, label } = currentTab;
      if (!currentTab?.disabled && index !== this.data.currentIndex) {
        this._trigger('change', { value, label });
      }
      this._trigger('click', { value, label });
    },

    getAvailableTabIndex(deltaX: number) {
      const step = deltaX > 0 ? -1 : 1;
      const { currentIndex, tabs } = this.data;
      const len = tabs.length;
      for (let i = step; currentIndex + step >= 0 && currentIndex + step < len; i += step) {
        const newIndex = currentIndex + i;
        if (newIndex >= 0 && newIndex < len && tabs[newIndex]) {
          if (!tabs[newIndex].disabled) {
            return newIndex;
          }
        } else {
          return currentIndex;
        }
      }
      return -1;
    },
  };
}
