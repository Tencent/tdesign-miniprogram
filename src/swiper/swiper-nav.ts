/**
 * 轮播导航器
 * 同时支持两种方式
 * 1、swiper简易配置，参见swiper的navigation。提升易用性
 * 2、自定义组件插槽组合，slot=nav。提升灵活性，方便样式覆盖
 */
import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import { DIRECTION, NavTypes } from './common/constants';

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
      value: NavTypes.dots,
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

  relations: RelationsOptions = {
    './swiper': {
      type: 'parent',
    },
  };

  data = {
    index: 0,
    total: 0,
    direction: DIRECTION.HOR,
    prefix,
    classPrefix: name,
  };

  ready() {
    this.$swiper = this.getRelationNodes('./swiper')?.[0];
  }

  onChange(opt: NavOptions) {
    this.setData({
      ...opt,
    });
  }

  nav(e) {
    const { dir } = e.target.dataset;
    const opt = { source: 'nav', cycle: true };
    // 触发导航按钮事件
    this.triggerEvent('navBtnChange', { ...opt, dir });
    // 插槽嵌入时主动调用API
    if (this.$swiper) {
      this.$swiper?.pause();
      this.$swiper?.[dir](opt);
    }
  }
}
