import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import avatarGroupProps from './props';

const { prefix } = config;
const name = `${prefix}-avatar-group`;

@wxComponent()
export default class AvatarGroup extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-content`, `${prefix}-class-image`];

  properties = avatarGroupProps;

  data = {
    prefix,
    classPrefix: name,
    hasChild: true,
    length: 0,
    className: '',
  };

  options = {
    multipleSlots: true,
  };

  relations: RelationsOptions = {
    '../avatar/avatar': {
      type: 'descendant',
    },
  };

  lifetimes = {
    attached() {
      this.setClass();
    },
    ready() {
      this.setData({
        length: this.$children.length,
      });
      this.handleMax();
      this.handleChildCascading();
    },
  };

  observers = {
    'cascading, size'() {
      this.setClass();
    },
  };

  methods = {
    setClass() {
      const { cascading, size } = this.properties;
      const direction = cascading.split('-')[0];
      const classList = [
        name,
        `${prefix}-class`,
        `${name}-offset-${direction}-${size.indexOf('px') > -1 ? 'medium' : size}`,
      ];

      this.setData({
        className: classList.join(' '),
      });
    },

    handleMax() {
      const { max } = this.data;
      const len = this.$children.length;
      if (!max || max > len) return;

      const restAvatars = this.$children.splice(max, len - max);

      restAvatars.forEach((child) => {
        child.hide();
      });
    },

    handleChildCascading() {
      if (this.properties.cascading === 'right-up') return;

      const defaultZIndex = 100;
      this.$children.forEach((child, index) => {
        child.updateCascading(defaultZIndex - index * 10);
      });
    },
  };
}
