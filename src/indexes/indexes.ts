import { RelationsOptions, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getRect } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-indexes`;

@wxComponent()
export default class Indexes extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-sidebar`, `${prefix}-class-sidebar-item`];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    _height: 0,
    _indexList: [],
    scrollTop: 0,
    activeAnchor: null,
    showTips: false,
  };

  relations: RelationsOptions = {
    '../indexes-anchor/indexes-anchor': {
      type: 'child',
    },
  };

  timer = null;

  groupTop = [];

  sidebar = null;

  observers = {
    indexList(v) {
      this.setIndexList(v);
    },
    height(v) {
      this.setHeight(v);
    },
  };

  lifetimes = {
    ready() {
      if (this.data._height === 0) {
        this.setHeight();
      }
      if (this.data._indexList?.length === 0) {
        this.setIndexList();
      }
    },
  };

  methods = {
    setHeight(height: string | number) {
      if (!height) {
        const { windowHeight } = wx.getSystemInfoSync();
        height = windowHeight;
      }
      this.setData(
        {
          _height: height,
        },
        () => {
          this.getAllRect();
        },
      );
    },

    setIndexList(list) {
      if (!list) {
        const start = 'A'.charCodeAt(0);
        const alphabet = [];

        for (let i = start, end = start + 26; i < end; i += 1) {
          alphabet.push(String.fromCharCode(i));
        }

        this.setData({ _indexList: alphabet });
      } else {
        this.setData({ _indexList: list });
      }
    },

    getAllRect() {
      this.getAnchorsRect().then(() => {
        this.setAnchorOnScroll(0);
      });
      this.getSidebarRect();
    },

    getAnchorsRect() {
      return Promise.all(
        this.children.map((child) =>
          getRect(child, `.${name}-anchor`).then((rect) => {
            this.groupTop.push({
              height: rect.height,
              top: rect.top,
              anchor: child.data.index,
            });
          }),
        ),
      );
    },

    getSidebarRect() {
      getRect(this, `#id-${name}__bar`).then((rect) => {
        const { top, height } = rect;
        this.sidebar = {
          top,
          height,
          itemHeight: height / this.data._indexList.length,
        };
      });
    },

    toggleTips(flag: boolean) {
      if (!flag) {
        clearInterval(this.timer);
        this.timer = setTimeout(() => {
          this.setData({
            showTips: false,
          });
        }, 300);
      } else {
        this.setData({
          showTips: true,
        });
      }
    },

    setAnchorWithIndex(index) {
      const activeAnchor = this.data._indexList[index];
      const target = this.groupTop.find((item) => item.anchor === activeAnchor);
      const rect: Record<string, any> = {};

      if (target) {
        rect.scrollTop = target.top;
      }
      this.setData({
        ...rect,
        activeAnchor,
      });
      this.toggleTips(true);
      this.triggerEvent('select', { index: activeAnchor });
    },

    onSelectAnchor(e) {
      const { index } = e.currentTarget.dataset;

      this.setAnchorWithIndex(index);
    },

    onTouchMove(e) {
      this.throttleScroll().then(() => this.onAnchorTouch(e.changedTouches[0].pageY));
    },

    onTouchCancel() {
      this.toggleTips(false);
    },

    onTouchEnd(e) {
      this.toggleTips(false);
      this.onAnchorTouch(e.changedTouches[0].pageY);
    },

    onAnchorTouch(touchY) {
      const getAnchorIndex = (touchY) => {
        const offsetY = touchY - this.sidebar.top;

        if (offsetY < 0) {
          return 0;
        }

        if (offsetY > this.sidebar.height) {
          return this.data._indexList.length - 1;
        }

        return Math.floor(offsetY / this.sidebar.itemHeight);
      };
      const index = getAnchorIndex(touchY);

      this.setAnchorWithIndex(index);
    },

    setAnchorOnScroll(scrollTop: number) {
      if (!this.groupTop) {
        return;
      }

      const nextAnchor = this.groupTop.findIndex((group) => group.top > scrollTop);

      if (nextAnchor > -1) {
        const curIndex = Math.max(nextAnchor - 1, 0);
        this.setData({
          activeAnchor: this.groupTop[curIndex].anchor,
        });
      }
    },

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
    },

    onScroll(e) {
      this.throttleScroll().then(() => {
        const { scrollTop } = e.detail;

        this.setAnchorOnScroll(scrollTop);
      });
    },
  };
}
