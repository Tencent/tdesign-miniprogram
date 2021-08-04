// import TComponent from '../common/component';
// import dom from '../behaviors/dom';
// import touch from '../behaviors/touch';
// import config from '../common/config';
// const { prefix } = config;
// const name = `${prefix}-tabs`;

// enum Position {
//   top = 'top',
//   right = 'right',
//   bottom = 'bottom',
//   left = 'left',
// }
// const trackLineWidth = 88;
// TComponent({
//   behaviors: [dom, touch],
//   relations: {
//     '../tab/tab': {
//       type: 'descendant',
//       linked(target: any) {
//         this.children.push(target);
//         target.index = this.children.length - 1;
//         this.updateTabs();
//       },
//       unlinked() {
//         this.children = this.children.map((child: any, index: number) => {
//           child.index = index;
//           return child;
//         });
//         this.updateTabs();
//       },
//     },
//   },
//   properties: {
//     duration: {
//       type: Number,
//       value: 0.3,
//     },
//     color: {
//       type: String,
//       observer(color: string) {
//         this.setTrack(color);
//       },
//     },
//     activeName: {
//       type: String,
//       value: '0',
//       observer(name: string) {
//         if (name !== this.getCurrentName()) {
//           this.setCurrentIndexByName(name);
//         }
//       },
//     },
//     ellipsis: {
//       type: Boolean,
//       value: false,
//     },
//     swipeable: {
//       type: Boolean,
//       value: false,
//     },
//     scrollThreshold: {
//       type: Number,
//       value: 5,
//     },
//     animated: {
//       type: Boolean,
//       value: false,
//     },
//     tabPosition: {
//       type: String,
//       value: Position.top, // 枚举 'bottom' | 'left' | 'right',
//     },
//   },
//   data: {
//     classPrefix: name,
//     tabs: [],
//     currentIndex: -1,
//     trackStyle: '',
//     isScrollX: true,
//     isScrollY: false,
//     direction: 'X',
//     scrollable: false,
//   },
//   lifetimes: {
//     created() {
//       this.children = this.children || [];
//     },
//     attached() {
//       wx.nextTick(() => {
//         this.setTrack();
//       });

//       // 根据tabPosition判断scroll-view滚动方向
//       const { tabPosition } = this.data;
//       let isScrollX = false;
//       let isScrollY = false;
//       if (tabPosition === Position.top || tabPosition === Position.bottom) {
//         isScrollX = true;
//       } else {
//         isScrollY = true;
//       }
//       this.setData({
//         isScrollX,
//         isScrollY,
//         direction: isScrollX ? 'X' : 'Y',
//       });
//     },
//   },
//   methods: {
//     updateTabs() {
//       const { children } = this;
//       const { scrollThreshold } = this.data;
//       this.setData({
//         tabs: children.map((child: any) => child.data),
//         scrollable: children.length >= scrollThreshold,
//       });
//       this.setCurrentIndexByName(this.data.activeName);
//     },
//     setCurrentIndexByName(name: string) {
//       const { children } = this;
//       const index = children.findIndex((child: any) => child.getComputedName() === name);
//       if (index > -1) {
//         this.setCurrentIndex(index);
//       }
//     },
//     setCurrentIndex(index: number) {
//       if (index <= -1 || index >= this.children.length) return;
//       this.children.forEach((child: any, idx: number) => {
//         const isActive = index === idx;
//         if (isActive !== child.data.active) {
//           child.render(isActive, this);
//         }
//       });
//       if (this.data.currentIndex === index) return;
//       this.setData({
//         currentIndex: index,
//       });
//       wx.nextTick(() => {
//         this.setTrack();
//         this.trigger('change', index);
//       });
//     },
//     getCurrentName() {
//       if (this.children) {
//         const activeTab = this.children[this.data.currentIndex];
//         if (activeTab) {
//           return activeTab.getComputedName();
//         }
//       }
//     },
//     setTrack(color = '#0052d9') {
//       const { children } = this;
//       if (!children) return;
//       const { currentIndex, duration, isScrollX, direction } = this.data;
//       if (currentIndex <= -1) return;
//       this.gettingBoundingClientRect(`.${name}__tabbar`, true).then((res: any) => {
//         const rect = res[currentIndex];
//         if (!rect) return;
//         let count = 0;
//         let distance = 0;
//         for (const item of res) {
//           if (count < currentIndex) {
//             distance += isScrollX ? item.width : item.height;
//             count += 1;
//           }
//         }
//         if (isScrollX) {
//           distance += (rect.width - trackLineWidth) / 2;
//         }
//         let trackStyle = `background-color: ${color};
//         -webkit-transform: translate${direction}(${distance}px);
//         transform: translate${direction}(${distance}px);
//         -webkit-transition-duration: ${duration}s;
//         transition-duration: ${duration}s;
//       `;
//         trackStyle += isScrollX ? `width: ${trackLineWidth}px;` : `height: ${rect.height}px;`;
//         this.setData({
//           trackStyle,
//         });
//       });
//     },
//     trigger(eventName: string, index: number) {
//       const currentIndex = index || this.data.currentIndex;
//       const currentTab = this.data.tabs[currentIndex];
//       if (currentTab) {
//         const { name, title } = currentTab;
//         this.triggerEvent(eventName, {
//           name,
//           title,
//           index: currentIndex,
//         });
//       }
//     },
//     onTabTap(event: any) {
//       const { index } = event.currentTarget.dataset;
//       const currentTab = this.data.tabs[index];
//       if (currentTab.disabled) {
//         this.trigger('disabled', index);
//       } else {
//         this.setCurrentIndex(+index);
//         wx.nextTick(() => {
//           this.trigger('click', index);
//         });
//       }
//     },
//     onTouchStart(event: any) {
//       const { swipeable } = this.data;
//       if (!swipeable) {
//         return;
//       }
//       this.touchStart(event);
//     },
//     onTouchMove(event: any) {
//       const { swipeable } = this.data;
//       if (!swipeable) {
//         return;
//       }
//       this.touchMove(event);
//     },
//     onTouchEnd() {
//       const { swipeable } = this.data;
//       if (!swipeable) {
//         return;
//       }
//       const { direction, deltaX, offsetX } = this;
//       const minSwipeDistance = 50;
//       if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
//         const index = this.getAvaiableTabIndex(deltaX);
//         if (index !== -1) {
//           this.setCurrentIndex(index);
//         }
//       }
//     },
//     getAvaiableTabIndex(deltaX: number) {
//       const step = deltaX > 0 ? -1 : 1;
//       const { currentIndex, tabs } = this.data;
//       const len = tabs.length;
//       for (let i = step; currentIndex + step >= 0 && currentIndex + step < len; i += step) {
//         const newIndex = currentIndex + i;
//         if (newIndex >= 0 && newIndex < len && tabs[newIndex] && !tabs[newIndex].disabled) {
//           return newIndex;
//         }
//       }
//       return -1;
//     },
//   },
// });
import { SuperComponent, wxComponent } from '../common/src/index';
@wxComponent()
export default class Tabs extends SuperComponent {
  externalClasses = ['t-class'];
  relations = {
    '../tab-panel/tab-panel': {
      type: 'descendant' as 'descendant',
      linked(this: Tabs, target: WechatMiniprogram.Component.TrivialInstance) {
        this.children.push(target);
        this.updateTabs();
      },
      unlinked(this: Tabs, target: WechatMiniprogram.Component.TrivialInstance) {
        this.children = this.children.filter((item) => item !== target);
        this.updateTabs();
      },
    },
  };

  properties = {
    animation: {
      type: Object,
    },
    /** 组件类名，分别用于设置 组件外层元素 等类名 */
    externalClasses: {
      type: Array,
    },
    /** 选项卡位置 */
    placement: {
      type: String,
      value: 'top',
    },
    /** 是否展示底部激活线条 */
    showBottomLine: {
      type: Boolean,
      value: true,
    },
    /** 激活的选项卡值 */
    value: {
      type: String,
      value: '0',
      // observer(v: string) {
      //   if (v !== this.getCurrentValue()) {
      //     this.setCurrentIndexByName(v);
      //   }
      // },
    },
  };

  data = {
    tabs: [],
    showScrollBar: false,
    currentIndex: -1,
    children: [],
  };
  created() {
    this.children = [];
  }

  updateTabs() {
    const { children } = this;
    this.setData({ tabs: children.map((child: any) => child.data) });
    this.setCurrentIndexByName(this.properties.value);
  }

  setCurrentIndexByName(name) {
    const { children } = this;
    const index = children.findIndex((child: any) => child.getValue() === name);

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
    wx.nextTick(() => {
      this.trigger('change', index);
    });
  }

  getCurrentValue() {
    if (this.children) {
      const activeTab = this.children[this.data.currentIndex];
      if (activeTab) {
        return activeTab.getValue();
      }
    }
  }

  trigger(eventName: string, index: number) {
    const currentIndex = index || this.data.currentIndex;
    const currentTab = this.data.tabs[currentIndex];
    if (currentTab) {
      const { value, label } = currentTab;
      this.triggerEvent(eventName, {
        value,
        label,
        index: currentIndex,
      });
    }
  }

  onTabTap(event: any) {
    const { children } = this;
    const index = children.findIndex(
      (child: any) => child.getValue() === event.currentTarget.dataset.index,
    );

    const currentTab = this.data.tabs[index];
    console.log('🚀 ~ index', index);
    console.log('🚀 ~ currentTab', currentTab);

    if (currentTab.disabled) {
      this.trigger('disabled', index);
    } else {
      this.setCurrentIndex(+index);
      wx.nextTick(() => {
        this.trigger('click', index);
      });
    }
  }
}
