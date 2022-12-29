import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import avatarProps from './props';
import { setIcon } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-avatar`;

@wxComponent()
export default class Avatar extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
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
    isChild: false,
  };

  relations: RelationsOptions = {
    './avatar-group': {
      type: 'ancestor',
      linked(this, target) {
        this.parent = target;
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
    /**
     * @description avatar-group子节点缩紧，avatar无
     * @param isChild 是否为avatar-group子节点
     */
    updateIsChild(isChild) {
      this.setData({
        isChild,
      });
    },

    /**
     * @description 控制avatar显隐
     */
    updateShow() {
      this.setData({
        isShow: false,
      });
    },
    /**
     * @description 控制avatar尺寸
     */
    updateSize(size) {
      if (this.properties.size) return;
      this.setData({ size });
    },
    /**
     * @description 控制avatar左侧在上/右侧在上
     */
    updateCascading(zIndex) {
      this.setData({ zIndex });
    },
  };

  onLoadError(e: any) {
    if (this.properties.hideOnLoadFailed) {
      this.setData({
        isShow: false,
      });
    }
    this.triggerEvent('error', e.detail);
  }
}
