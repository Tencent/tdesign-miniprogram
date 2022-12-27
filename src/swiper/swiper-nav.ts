import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-swiper-nav`;

type NavOptions = {
  index: number;
  total: number;
  direction: boolean;
  paginationPosition: string;
};

@wxComponent()
export default class SwiperNav extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = {
    // 页码导航类型
    type: {
      type: String,
      value: 'dots',
    },
    // 最小显示数量，即小于这个数不会显示导航器
    minShowNum: {
      type: Number,
      value: 2,
    },
    /**
     * 是否开启导航按钮
     */
    showControls: {
      type: Boolean,
      value: false,
    },
  };

  relations: RelationsOptions = {
    './swiper': {
      type: 'parent',
    },
  };

  data = {
    index: 0,
    total: 0,
    direction: 'horizontal',
    prefix,
    classPrefix: name,
  };

  methods = {
    onChange(opt: NavOptions) {
      this.setData({
        ...opt,
      });
    },

    nav(e) {
      const { dir } = e.target.dataset;
      const source = 'nav';

      this.triggerEvent('navBtnChange', { dir, source });
      if (this.$parent) {
        this.$parent?.doNavBtnChange(dir, source);
      }
    },
  };
}
