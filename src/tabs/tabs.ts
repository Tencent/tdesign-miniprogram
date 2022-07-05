import dom from '../behaviors/dom';
import touch from '../behaviors/touch';
import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-tabs`;

enum Position {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}
const trackLineWidth = 30;
@wxComponent()
export default class Tabs extends SuperComponent {
  behaviors = [dom, touch];

  externalClasses = [`${prefix}-class`, `${prefix}-class-item`, `${prefix}-class-active`, `${prefix}-class-track`];

  relations = {
    './tab-panel': {
      type: 'descendant' as 'descendant',
      linked(target: any) {
        this.children.push(target);
        target.index = this.children.length - 1;
        this.updateTabs();
      },
      unlinked() {
        this.children = this.children.map((child: any, index: number) => {
          child.index = index;
          return child;
        });
        this.updateTabs();
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

    animation(v) {
      this.setData({ animate: v });
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
    animate: { duration: 0 },
  };

  created() {
    this.children = this.children || [];
  }

  attached() {
    wx.nextTick(() => {
      this.setTrack();
    });

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
  }

  updateTabs() {
    const { children } = this;
    this.setData({
      tabs: children.map((child: any) => child.data),
    });
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

  setTrack(color = '#0052d9') {
    if (!this.properties.showBottomLine) return;
    const { children } = this;
    if (!children) return;
    const { currentIndex, isScrollX, direction } = this.data;
    if (currentIndex <= -1) return;
    this.gettingBoundingClientRect(`.${prefix}-tabs__item`, true)
      .then((res: any) => {
        const rect = res[currentIndex];
        if (!rect) return;
        let count = 0;
        let distance = 0;
        // eslint-disable-next-line no-restricted-syntax
        for (const item of res) {
          if (count < currentIndex) {
            distance += isScrollX ? item.width : item.height;
            count += 1;
          }
        }

        if (isScrollX) {
          distance += (rect.width - trackLineWidth) / 2;
        }
        let trackStyle = `background-color: ${color};
        -webkit-transform: translate${direction}(${distance}px);
        transform: translate${direction}(${distance}px);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
      `;
        trackStyle += isScrollX ? `width: ${trackLineWidth}px;` : `height: ${rect.height}px;`;
        this.setData({
          trackStyle,
        });
      })
      .catch((err) => {
        this.triggerEvent('error', err);
      });
  }

  onTabTap(event: any) {
    const { index } = event.currentTarget.dataset;

    this.changeIndex(index);
  }

  onTouchStart(event: any) {
    this.touchStart(event);
  }

  onTouchMove(event: any) {
    this.touchMove(event);
  }

  onTouchEnd() {
    const { direction, deltaX, offsetX } = this;
    const minSwipeDistance = 50;
    if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
      const index = this.getAvailableTabIndex(deltaX);
      if (index !== -1) {
        this.changeIndex(index);
      }
    }
  }

  changeIndex(index) {
    const currentTab = this.data.tabs[index];
    if (!currentTab?.disabled && index !== this.data.currentIndex) {
      this._trigger('change', { value: currentTab.value });
    }
    this._trigger('click', { value: currentTab.value });
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
