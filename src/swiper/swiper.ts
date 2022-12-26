import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-swiper`;

const defaultNavigation = {
  type: 'dots',
  minShowNum: 2,
  showControls: false,
};

@wxComponent()
export default class Swiper extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-nav`,
    `${prefix}-class-image`,
    `${prefix}-class-prev-image`,
    `${prefix}-class-next-image`,
  ];

  options = {
    multipleSlots: true,
  };

  properties = props;

  observers = {
    current(v) {
      this.updateNav(v);
    },
    navigation(val) {
      this.setData({
        _navigation: { ...defaultNavigation, ...val },
      });
    },
  };

  $nav = null;

  relations: RelationsOptions = {
    './swiper-nav': {
      type: 'child',
    },
  };

  data = {
    _navigation: null,
    prefix,
    classPrefix: name,
  };

  lifetimes = {
    ready() {
      this.initNav();
      this.updateNav(this.data.current);
    },
  };

  methods = {
    initNav() {
      const { _navigation } = this.data;
      if (_navigation) {
        // 启用内部导航器
        this.$nav = this.selectComponent('#swiperNav');
      } else {
        // 启用插槽嵌入的导航器
        this.$nav = this.getRelationNodes('./swiper-nav')?.[0];
      }
    },

    updateNav(index) {
      if (!this.$nav) return;
      const { direction, paginationPosition, list } = this.properties;
      this.$nav?.onChange({
        index,
        total: list.length,
        direction,
        paginationPosition,
      });
    },

    onChange(e) {
      const { current, source } = e.detail;

      this.setData({ current });
      this.triggerEvent('change', { current, source });
    },

    onNavBtnChange(e) {
      const { dir, source } = e.detail;

      this.doNavBtnChange(dir, source);
    },

    doNavBtnChange(dir, source) {
      const { current, list, loop } = this.data;
      const count = list.length;
      let nextPos = dir === 'next' ? current + 1 : current - 1;

      if (loop) {
        nextPos = dir === 'next' ? (current + 1) % count : (current - 1 + count) % count;
      } else {
        nextPos = nextPos < 0 || nextPos >= count ? current : nextPos;
      }

      if (nextPos === current) return;

      this.setData({
        current: nextPos,
      });
      this.triggerEvent('change', { current: nextPos, source });
    },
  };
}
