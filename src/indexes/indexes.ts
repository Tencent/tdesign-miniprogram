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
        this.groupTop.forEach((item, index) => {
          const next = this.groupTop[index + 1];
          item.totalHeight = (next?.top || Infinity) - item.top;
        });
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

    setAnchorByIndex(index) {
      const { _indexList, sticky } = this.data;
      const activeAnchor = _indexList[index];
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

      if (sticky) {
        const { children } = this;
        for (let i = 0, size = children.length; i < size; i += 1) {
          const cur = children[i];
          if (cur.data.index === activeAnchor) {
            const styleCache = cur.data.customStyle;
            cur.setData({
              customStyle: `${styleCache};position: fixed; top: 0; left:0; right:0; z-index: 2`,
            });

            if (i - 1 >= 0) {
              const pre = children[i - 1];
              const styleCache = pre.data.customStyle;
              pre.setData({
                customStyle: `${styleCache};position: fixed; top: 0; left:0; right:0; z-index: 1`,
              });
            }
            break;
          }
        }
      }
    },

    onClick(e) {
      const { index } = e.currentTarget.dataset;

      this.setAnchorByIndex(index);
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

      this.setAnchorByIndex(index);
    },

    setAnchorOnScroll(scrollTop: number) {
      if (!this.groupTop) {
        return;
      }

      if (scrollTop <= 0) {
        this.children[0].setData({ sticky: false });
        return;
      }

      const curGroup = this.groupTop.find(
        (group) => scrollTop >= group.top - group.height && scrollTop <= group.top + group.totalHeight - group.height,
      );

      this.setData({
        activeAnchor: curGroup.anchor,
      });

      if (this.data.sticky) {
        const { children } = this;
        const offset = curGroup.top - scrollTop;
        const betwixt = offset < curGroup.height && offset > 0;

        for (let i = 0, size = children.length; i < size; i += 1) {
          const cur = children[i];
          if (cur.data.index === curGroup.anchor) {
            cur.setData({
              sticky: true,
              customStyle: `height: ${curGroup.height}px`,
              anchorStyle: `transform: translate3d(0, ${betwixt ? offset : 0}px, 0)`,
            });

            if (i - 1 >= 0) {
              const pre = children[i - 1];
              pre.setData({
                sticky: true,
                customStyle: `height: ${curGroup.height}px`,
                anchorStyle: `transform: translate3d(0, ${betwixt ? offset - curGroup.height : 0}px, 0)`,
              });
            }
          } else if (!betwixt) {
            cur.setData({ sticky: false, anchorStyle: '' });
          }
        }
      }
    },

    throttleScroll() {
      return new Promise<void>((resolve) => {
        const delay = 16;
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
      const { scrollTop } = e.detail;

      this.setAnchorOnScroll(scrollTop);
    },
  };
}
