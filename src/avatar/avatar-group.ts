import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import avatarGroupProps from './avatar-group-props';

const { prefix } = config;
const name = `${prefix}-avatar-group`;

@wxComponent()
export default class AvatarGroup extends SuperComponent {
  properties = avatarGroupProps;

  data = {
    classPrefix: name,
  };

  options = {
    multipleSlots: true,
  };

  relations = {
    './avatar': {
      type: 'descendant' as 'descendant',
      linked(this: AvatarGroup) {
        this.children = this.getRelationNodes('./avatar');
      },
    },
  };

  ready() {
    this.handleChildMax(this.properties.max, this.children);
    this.handleChildSize(this.properties.size, this.children);
  }

  methods = {
    handleChildMax(max, children) {
      const len = children.length;
      if (max > len) {
        // console.log('3333');
        return false;
      }
      const leftChildren = children.splice(max, len - max);
      leftChildren.forEach((child) => {
        child.updateShow();
      });
      // console.log(leftChildren);
    },

    handleChildSize(size = 'large', children) {
      children.forEach((child) => {
        child.updateSize(size);
      });
    },
  };
}
