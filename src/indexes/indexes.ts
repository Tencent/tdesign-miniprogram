import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;

const classPrefix = `${prefix}-indexes`;
const topOffset = 40; // 滑动选中高亮的顶部偏移(px)

@wxComponent()
export default class IndexBar extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-index`];

  properties = props;

  observers = {
    list(this: IndexBar, newValue) {
      let groups = newValue;
      // 分组没有title属性时，默认以index作为title
      if (!!newValue.length && newValue[0].title === undefined) {
        groups = groups.map((g) => {
          return { title: g.index, ...g };
        });
      }
      this.setData({ groups });
    },
    height(this: IndexBar) {
      this.getDomInfo();
    },
  };

  data = {
    prefix,
    classPrefix,
    clientHeight: 0,
    groups: [],
    activeGroup: null, // 当前高亮group
    currentGroup: null, // 当前跳转group
    showScrollTip: false,
  };

  timer = null;

  groupTop = null;

  btnBar = null;

  ready() {
    this.getHeight();
  }

  getHeight() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData(
          {
            clientHeight: res.windowHeight,
          },
          this.getDomInfo,
        );
      },
    });
  }

  getDomInfo() {
    const query = this.createSelectorQuery();
    query.select(`#id-${classPrefix}__bar`).boundingClientRect();
    query.selectAll(`.${classPrefix}__group`).boundingClientRect();
    query.exec((res) => {
      if (!res[0]) return;
      this.btnBar = {
        top: res[0].top,
        height: res[0].height,
        itemHeight: res[0].height / this.data.groups.length,
      };
      if (!res[1]) return;
      // 计算每个group的scrollTop
      this.groupTop = res[1].map((element) => element.height);
      this.groupTop.reduce((acc, cur, index) => {
        const amount = acc + cur;
        this.groupTop[index] = amount;

        return amount;
      });
    });
  }

  // 通过点击索引的点击位置，判断点击的索引下标位置。
  computedIndex(tapY) {
    const offsetY = tapY - this.btnBar.top;
    let index;
    if (offsetY < 0) {
      index = 0;
    } else if (offsetY > this.btnBar.height) {
      index = this.data.groups.length - 1;
    } else {
      index = Math.floor(offsetY / this.btnBar.itemHeight);
    }
    return index;
  }

  // 通过scroll-view滑动高度计算当前下标位置
  computedIndexByScrollTop(scrollTop: number): number {
    if (!this.groupTop) {
      return -1;
    }

    return this.groupTop.findIndex((element) => element - topOffset > scrollTop);
  }

  // 在scroll-view滑动过程中，高亮对应的index
  activeIndexWhenScroll(scrollTop: number) {
    const curIndex = this.computedIndexByScrollTop(scrollTop);
    if (curIndex >= 0) {
      this.setData({
        activeGroup: this.data.groups[curIndex],
      });
    }
  }

  scrollToY(tapY) {
    const index = this.computedIndex(tapY);
    this.scrollToAnchor(index);
  }

  scrollToAnchor(index) {
    this.switchScrollTip(true);
    const curGroup = this.data.groups[index];
    this.setData({
      activeGroup: curGroup,
      currentGroup: curGroup,
    });
  }

  switchScrollTip(val) {
    val = !!val;
    const switchFun = (value) => {
      if (this.data.showScrollTip === value) {
        return;
      }
      this.setData({
        showScrollTip: value,
      });
    };
    // 关闭tip有延时，开启无延时
    if (!val) {
      clearInterval(this.timer);
      this.timer = setTimeout(() => {
        switchFun(false);
      }, 300);
    } else {
      switchFun(true);
    }
  }

  // 控制触发频率(防抖)
  throttleScroll() {
    return new Promise<void>((resolve) => {
      const delay = 100;
      const now = Date.now();
      if (this.lastScrollTime && this.lastScrollTime + delay > now) {
        if (this.scrollTimer) {
          clearTimeout(this.scrollTimer);
        }
        this.scrollTimer = setTimeout(() => {
          this.lastScrollTime = now;
          resolve();
        }, delay);
      } else {
        this.lastScrollTime = now;
        resolve();
      }
    });
  }

  onTouchStart() {}

  onTouchMove(e) {
    this.throttleScroll().then(() => this.scrollToY(e.changedTouches[0].pageY));
  }

  onTouchCancel() {
    this.switchScrollTip(false);
  }

  onTouchEnd(e) {
    this.switchScrollTip(false);
    this.scrollToY(e.changedTouches[0].pageY);
  }

  onCellTap(e) {
    const { indexes } = e.currentTarget.dataset;
    this.triggerEvent('select', { indexes });
  }

  onListScroll(e) {
    this.throttleScroll().then(() => {
      const { scrollTop } = e.detail;
      this.activeIndexWhenScroll(scrollTop);
    });
  }
}
