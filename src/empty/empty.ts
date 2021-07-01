import { SuperComponent, wxComponent } from '../common/src/index';

@wxComponent()
export default class extends SuperComponent {
  externalClasses = ['t-class'];

  properties = {
    image: {
      type: String,
      value:
        'https://cdn-we-retail.ym.tencent.com/miniapp/goods/noGoods.png?imageMogr2/format/webp/thumbnail/100x100!/strip',
    },
    description: {
      type: String,
      value: '',
    },
    size: {
      type: String,
      value: '120rpx',
    },
    textSize: {
      type: String,
      value: '28rpx',
    },
    textColor: {
      type: String,
      value: 'rgba(0, 0, 0, .4)',
    },
    backColor: {
      type: String,
      value: '',
    },
  };
}
