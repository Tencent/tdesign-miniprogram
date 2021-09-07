/**
 * 轮播条目组件
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import { DIRECTION } from './common/constants';
import config from '../common/config';

const { prefix } = config;
@wxComponent()
export default class SwiperItem extends SuperComponent {
  relations = {
    './swiper': {
      type: 'parent' as 'parent',
    },
  };

  data = {
    index: 0,
    classPrefix: `.${prefix}-swiper-item`,
    translate: '',
  };

  setIndex(index: number, direction: string) {
    const translate =
      direction === DIRECTION.HOR
        ? `translate(${100 * index}%, 0px)`
        : `translate(0px, ${100 * index}%)`;
    this.setData({
      index,
      direction,
      translate,
    });
  }
}
