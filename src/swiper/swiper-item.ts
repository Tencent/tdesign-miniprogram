/**
 * 轮播条目组件
 */
import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import { DIRECTION } from './common/constants';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-swiper-item`;

@wxComponent()
export default class SwiperItem extends SuperComponent {
  relations: RelationsOptions = {
    './swiper': {
      type: 'parent',
    },
  };

  data = {
    index: 0,
    classPrefix: name,
    translate: '',
  };

  setIndex(index: number, direction: string) {
    const translate =
      direction === DIRECTION.HOR ? `translate(${100 * index}%, 0px)` : `translate(0px, ${100 * index}%)`;
    this.setData({
      index,
      direction,
      translate,
    });
  }
}
