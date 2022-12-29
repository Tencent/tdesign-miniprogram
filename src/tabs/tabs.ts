import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import props from './props';
import config from '../common/config';
import touch from '../mixins/touch';
import { getRect, uniqueFactory } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-tabs`;
const getUniqueID = uniqueFactory('tabs');

enum Position {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}
@wxComponent()
export default class Tabs extends SuperComponent {
  behaviors = [touch];

  externalClasses = [`${prefix}-class`, `${prefix}-class-item`, `${prefix}-class-active`, `${prefix}-class-track`];

  relations: RelationsOptions = {
    './tab-panel': {
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
    placement() {
      this.adjustPlacement();
    },
  };

  data = {
    prefix,
    classPrefix: name,
    tabs: [],
    currentIndex: -1,
    trackStyle: '',
    isScrollX: true,
    isScrollY: false,
    direction: 'X',
    offset: 0,
    tabID: '',
  };

  lifetimes = {
    created() {
      this.children = this.children || [];
    },

    attached() {
      wx.nextTick(() => {
        this.setTrack();
      });

      this.adjustPlacement();
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
    adjustPlacement() {
      // 根据placement判断scroll-view滚动方向
      const { placement } = this.properties;
      let isScrollX = false;
      let isScrollY = false;
      if ((placement as any) === Position.top || (placement as any) === Position.bottom) {
        isScrollX = true;
      } else {
        isScrollY = true;
      }
      this.setData({
        isScrollX,
        isScrollY,
        direction: isScrollX ? 'X' : 'Y',
      });
    },
  };

  updateTabs(cb) {
    const { children } = this;
    const tabs = children.map((child: any) => child.data);

    this.setData({ tabs }, cb);
    this.setCurrentIndexByName(this.properties.value);
  }

  setCurrentIndexByName(name) {
    const { children } = this;
    const index = children.findIndex((child: any) => child.getComputedName() === `${name}`);
    if (index > -1) {
      this.setCurrentIndex(index);
    }
  }

  setCurrentIndex(index: number) {
    if (index <= -1 || index >= this.children.length) return;
    this.children.forEach((child: any, idx: number) => {
      const isActive = index === idx;
      if (isActive !== child.data.active) {
        child.render(isActive, this);
      }
    });
    if (this.data.currentIndex === index) return;
    this.setData({
      currentIndex: index,
    });
    this.setTrack();
  }

  getCurrentName() {
    if (this.children) {
      const activeTab = this.children[this.data.currentIndex];
      if (activeTab) {
        return activeTab.getComputedName();
      }
    }
  }

  calcScrollOffset(containerWidth: number, targetLeft: number, targetWidth: number, offset: number) {
    return offset + targetLeft - (1 / 2) * containerWidth + targetWidth / 2;
  }

  getTrackSize() {
    return new Promise<number>((resolve) => {
      if (this.trackWidth) {
        resolve(this.trackWidth);
        return;
      }
      getRect(this, `.${prefix}-tabs__track`).then((res) => {
        if (res) {
          this.trackWidth = res.width;
          resolve(this.trackWidth);
        }
      });
    });
  }

  async setTrack() {
    if (!this.properties.showBottomLine) return;
    const { children } = this;
    if (!children) return;
    const { currentIndex, isScrollX, direction } = this.data;
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
          distance += isScrollX ? item.width : item.height;
          count += 1;
        }
        totalSize += isScrollX ? item.width : item.height;
      });

      if (this.containerWidth) {
        const offset = this.calcScrollOffset(this.containerWidth, rect.left, rect.width, this.data.offset);
        const maxOffset = totalSize - this.containerWidth;
        this.setData({
          offset: Math.min(Math.max(offset, 0), maxOffset),
        });
      }

      if (isScrollX) {
        const trackLineWidth = await this.getTrackSize();
        distance += (rect.width - trackLineWidth) / 2;
      }
      let trackStyle = `-webkit-transform: translate${direction}(${distance}px);
        transform: translate${direction}(${distance}px);
      `;
      if (!isScrollX) {
        trackStyle += `height: ${rect.height}px;`;
      }
      this.setData({
        trackStyle,
      });
    } catch (err) {
      this.triggerEvent('error', err);
    }
  }

  onTabTap(event: any) {
    const { index } = event.currentTarget.dataset;

    this.changeIndex(index);
  }

  onTouchStart(event: any) {
    if (!this.properties.swipeable) return;

    this.touchStart(event);
  }

  onTouchMove(event: any) {
    if (!this.properties.swipeable) return;

    this.touchMove(event);
  }

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
  }

  onTouchScroll(event: WechatMiniprogram.CustomEvent) {
    this._trigger('scroll', event.detail);
  }

  changeIndex(index) {
    const currentTab = this.data.tabs[index];
    const { value, label } = currentTab;
    if (!currentTab?.disabled && index !== this.data.currentIndex) {
      this._trigger('change', { value, label });
    }
    this._trigger('click', { value, label });
  }

  getAvailableTabIndex(deltaX: number) {
    const step = deltaX > 0 ? -1 : 1;
    const { currentIndex, tabs } = this.data;
    const len = tabs.length;
    for (let i = step; currentIndex + step >= 0 && currentIndex + step < len; i += step) {
      const newIndex = currentIndex + i;
      if (newIndex >= 0 && newIndex < len && tabs[newIndex] && !tabs[newIndex].disabled) {
        return newIndex;
      }
    }
    return -1;
  }
}
