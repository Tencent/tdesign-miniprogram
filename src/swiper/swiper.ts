import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-swiper`;

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
    navCurrent(v) {
      this.updateNav(v);
    },
  };

  $nav = null;

  relations: RelationsOptions = {
    '../swiper-nav/swiper-nav': {
      type: 'child',
    },
  };

  data = {
    prefix,
    classPrefix: name,
  };

  lifetimes = {
    ready() {
      const { current } = this.properties;
      this.setData({ navCurrent: current });
    },
  };

  methods = {
    updateNav(currentValue) {
      if (this.data.navigation) return;
      const $nav = this.getRelationNodes('./swiper-nav')?.[0];
      if (!$nav) return;
      const { direction, paginationPosition, list } = this.properties;

      $nav.setData({
        current: currentValue,
        total: list.length,
        direction,
        paginationPosition,
      });
    },

    onTap(e) {
      const { index } = e.currentTarget.dataset;

      this.triggerEvent('click', { index });
    },

    onChange(e) {
      const { current, source } = e.detail;

      this.setData({
        navCurrent: current,
      });

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

    onImageLoad(e) {
      this.triggerEvent('image-load', { index: e.target.dataset.custom });
    },
  };
}
