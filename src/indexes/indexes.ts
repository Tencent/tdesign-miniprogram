import { RelationsOptions, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getRect, throttle, systemInfo } from '../common/utils';
import pageScrollMixin from '../mixins/page-scroll';

const { prefix } = config;
const name = `${prefix}-indexes`;

@wxComponent()
export default class Indexes extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-sidebar`, `${prefix}-class-sidebar-item`];

  properties = props;

  controlledProps = [
    {
      key: 'current',
      event: 'change',
    },
  ];

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

  behaviors = [pageScrollMixin()];

  timer = null;

  groupTop = [];

  sidebar = null;

  observers = {
    indexList(v) {
      this.setIndexList(v);
      this.setHeight(this.data._height);
    },
    height(v) {
      this.setHeight(v);
    },

    current(current: string | number) {
      if (current && this.data.activeAnchor && current !== this.data.activeAnchor) {
        this.setAnchorByCurrent(current, 'update');
      }
    },
  };

  lifetimes = {
    ready() {
      this.timer = null;
      this.groupTop = [];
      this.sidebar = null;
      if (this.data._height === 0) {
        this.setHeight();
      }
      if (this.data.indexList === null) {
        this.setIndexList();
      }
    },
  };

  methods = {
    setHeight(height: string | number) {
      if (!height) {
        const { windowHeight } = systemInfo;
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

        const current = this.data.current || this.data._indexList[0];
        this.setAnchorByCurrent(current, 'init');
      });
      this.getSidebarRect();
    },

    getAnchorsRect() {
      return Promise.all(
        this.$children.map((child) =>
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
        const { length } = this.data._indexList;

        this.sidebar = {
          top,
          height,
          itemHeight: (height - (length - 1) * 2) / length, // margin = 2px
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

    setAnchorByCurrent(current: string | number, source: 'init' | 'click' | 'touch' | 'update') {
      const { stickyOffset } = this.data;

      if (this.data.activeAnchor !== null && this.data.activeAnchor === current) return;

      const target = this.groupTop.find((item) => item.anchor === current);

      if (target) {
        const scrollTop = target.top - stickyOffset;

        if (scrollTop === 0 && source === 'init') {
          this.setAnchorOnScroll(scrollTop);
        } else {
          wx.pageScrollTo({
            scrollTop,
            duration: 0,
          });
        }

        if (['click', 'touch'].includes(source)) {
          this.toggleTips(true);
          this.triggerEvent('select', { index: current });
        }
      }
    },

    onClick(e) {
      const { current } = e.currentTarget.dataset;

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

    onAnchorTouch: throttle(function (e: WechatMiniprogram.TouchEvent) {
      const getAnchorIndex = (clientY) => {
        const offsetY = clientY - this.sidebar.top;

        if (offsetY <= 0) {
          return 0;
        }

        if (offsetY > this.sidebar.height) {
          return this.data._indexList.length - 1;
        }

        return Math.floor(offsetY / this.sidebar.itemHeight);
      };
      const index = getAnchorIndex(e.changedTouches[0].clientY);

      this.setAnchorByCurrent(this.data._indexList[index], 'touch');
    }, 1000 / 30), // 30 frame

    setAnchorOnScroll(scrollTop: number) {
      if (!this.groupTop) {
        return;
      }

      const { sticky, stickyOffset } = this.data;

      scrollTop += stickyOffset;

      const curIndex = this.groupTop.findIndex(
        (group) => scrollTop >= group.top - group.height && scrollTop <= group.top + group.totalHeight - group.height,
      );

      if (curIndex === -1) return;

      const curGroup = this.groupTop[curIndex];

      this.setData({ activeAnchor: curGroup.anchor }, () => {
        this._trigger('change', { index: curGroup.anchor, current: curGroup.anchor });
      });

      if (sticky) {
        const offset = curGroup.top - scrollTop;
        const betwixt = offset < curGroup.height && offset > 0 && scrollTop > stickyOffset;

        this.$children.forEach((child, index) => {
          if (index === curIndex) {
            const sticky = scrollTop > stickyOffset;
            const anchorStyle = `transform: translate3d(0, ${betwixt ? offset : 0}px, 0); top: ${stickyOffset}px`;
            if (anchorStyle !== child.data.anchorStyle || sticky !== child.data.sticky) {
              child.setData({
                sticky,
                active: true,
                style: `height: ${curGroup.height}px`,
                anchorStyle,
              });
            }
          } else if (index + 1 === curIndex) {
            // 两个 anchor 同时出现时的上一个
            const anchorStyle = `transform: translate3d(0, ${
              betwixt ? offset - curGroup.height : 0
            }px, 0); top: ${stickyOffset}px`;
            if (anchorStyle !== child.data.anchorStyle) {
              child.setData({
                sticky: true,
                active: true,
                style: `height: ${curGroup.height}px`,
                anchorStyle,
              });
            }
          } else {
            child.setData({ active: false, sticky: false, anchorStyle: '' });
          }
        });
      }
    },

    onScroll({ scrollTop }) {
      this.setAnchorOnScroll(scrollTop);
    },
  };
}
