import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;

const classPrefix = `${prefix}-indexes`;

@wxComponent()
export default class IndexBar extends SuperComponent {
  properties = {
    list: {
      type: Array,
      value: [],
      observer(this: IndexBar, newValue) {
        let groups = newValue;
        // 分组没有title属性时，默认以index作为title
        if (!!newValue.length && newValue[0].title === undefined) {
          groups = groups.map((g) => {
            return Object.assign({ title: g.index }, g);
          });
        }
        this.setData({ groups });
      },
    },
    height: {
      type: Number,
      observer(this: IndexBar) {
        this.getBtnBarInfo();
      },
    },
  };

  data = {
    classPrefix,
    clientHeight: 0,
    groups: [],
    currentGroup: null,
    showScrollTip: false,
  };

  timer = null;

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
          this.getBtnBarInfo,
        );
      },
    });
  }

  getBtnBarInfo() {
    const query = this.createSelectorQuery();
    query
      .select(`#${classPrefix}__btn-bar`)
      .boundingClientRect()
      .exec((res) => {
        if (!res[0]) return;
        this.btnBar = {
          top: res[0].top,
          height: res[0].height,
          itemHeight: res[0].height / this.data.groups.length,
        };
      });
  }
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
  scrollToY(tapY) {
    const index = this.computedIndex(tapY);
    this.scrollToAnchor(index);
  }
  scrollToAnchor(index) {
    this.switchScrollTip(true);
    this.setData({
      currentGroup: this.data.groups[index],
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
      }, 1000);
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
  onTouchStart() {
    // this.switchScrollTip(true);
  }
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
}
