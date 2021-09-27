import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import avatarProps from './props';

const { prefix } = config;
const name = `${prefix}-avatar`;

@wxComponent()
export default class Avatar extends SuperComponent {
  externalClasses = ['t-class', 't-class-image', 't-class-icon', 't-class-alt'];

  properties = avatarProps;

  data = {
    classPrefix: name,
    isShow: true,
  };

  relations = {
    './avatar-group': {
      type: 'ancestor' as 'ancestor',
      linked(this: Avatar, target: WechatMiniprogram.Component.TrivialInstance) {
        this.parent = target;
      },
    },
  };

  methods = {
    updateShow() {
      // console.log('children');

      this.setData({
        isShow: false,
      });
    },

    updateSize(size) {
      this.setData({ size });
    },
  };

  onLoadError(e: any) {
    this.triggerEvent('error', e.detail);
  }
}
