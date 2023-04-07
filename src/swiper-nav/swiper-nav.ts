import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import { TdSwiperNavProps } from './type';

const { prefix } = config;
const name = `${prefix}-swiper-nav`;

export interface SwiperNavProps extends TdSwiperNavProps {}

@wxComponent()
export default class SwiperNav extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = {
    current: {
      type: Number,
      value: 0,
    },
    total: {
      type: Number,
      value: 0,
    },
    type: {
      type: String,
      value: 'dots',
    },
    minShowNum: {
      type: Number,
      value: 2,
    },
    showControls: {
      type: Boolean,
      value: false,
    },
    direction: {
      type: String,
      value: 'horizontal',
    },
    paginationPosition: {
      type: String,
      value: 'bottom',
    },
  };

  relations: RelationsOptions = {
    '../swiper/swiper': {
      type: 'parent',
    },
  };

  data = {
    prefix,
    classPrefix: name,
  };

  methods = {
    nav(e) {
      const { dir } = e.target.dataset;
      const source = 'nav';

      this.triggerEvent('nav-btn-change', { dir, source });
      if (this.$parent) {
        this.$parent?.doNavBtnChange(dir, source);
      }
    },
  };
}
