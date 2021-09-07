/**
 * 轮播导航器
 * todo: 垂直滚动
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { DIRECTION } from './common/constants';

const { prefix } = config;
type NavOptions = {
  index: number;
  total: number;
  direction: boolean;
};

const enum Types {
  // 无
  none = '',
  // 点状
  dots = 'dots',
  // 点状-激活条形
  dotsBar = 'dotsBar',
  // 页码
  pages = 'pages',
}

@wxComponent()
export default class SwiperNav extends SuperComponent {
  externalClasses = ['t-class'];

  properties = {
    // 页码导航类型
    type: {
      type: String,
      value: Types.dots,
    },
    // 最小显示数量，即小于这个数不会显示导航器
    minShowNum: {
      type: Number,
      value: 2,
    },
    /**
     * 是否开启导航按钮
     */
    hasNavBtn: {
      type: Boolean,
      value: false,
    },
  };

  relations = {
    './swiper': {
      type: 'parent' as 'parent',
    },
  };

  data = {
    index: 0,
    total: 0,
    direction: DIRECTION.HOR,
    classPrefix: `.${prefix}-swiper-nav`,
  };

  ready() {
    this.$swiper = this.getRelationNodes('./swiper')[0];
  }

  onChange(opt: NavOptions) {
    this.setData({
      ...opt,
    });
  }

  prev() {
    this.$swiper.pause();
    this.$swiper.prev({ source: 'nav', cycle: true });
  }

  next() {
    this.$swiper.pause();
    this.$swiper.next({ source: 'nav', cycle: true });
  }
}
