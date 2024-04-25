import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import avatarProps from './props';
import { setIcon } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-avatar`;

@wxComponent()
export default class Avatar extends SuperComponent {
  options: WechatMiniprogram.Component.ComponentOptions = {
    multipleSlots: true,
  };

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-image`,
    `${prefix}-class-icon`,
    `${prefix}-class-alt`,
    `${prefix}-class-content`,
  ];

  properties = avatarProps;

  data = {
    prefix,
    classPrefix: name,
    isShow: true,
    zIndex: 0,
    borderedWithGroup: false,
  };

  relations: RelationsOptions = {
    '../avatar-group/avatar-group': {
      type: 'ancestor',
      linked(parent) {
        this.parent = parent;

        this.setData({
          size: this.data.size ?? parent.data.size,
          borderedWithGroup: true,
        });
      },
    },
  };

  observers = {
    icon(icon) {
      const obj = setIcon('icon', icon, '');
      this.setData({
        ...obj,
      });
    },
  };

  methods = {
    hide() {
      this.setData({
        isShow: false,
      });
    },

    updateCascading(zIndex) {
      this.setData({ zIndex });
    },

    onLoadError(e: WechatMiniprogram.CustomEvent) {
      if (this.properties.hideOnLoadFailed) {
        this.setData({
          isShow: false,
        });
      }
      this.triggerEvent('error', e.detail);
    },
  };
}
