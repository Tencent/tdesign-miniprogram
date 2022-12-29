import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';
import { setIcon } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-empty`;

@wxComponent()
export default class extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = [`${prefix}-class`, `${prefix}-class-description`, `${prefix}-class-image`];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
  };

  observers = {
    icon(icon) {
      const obj = setIcon('icon', icon, '');
      this.setData({
        ...obj,
      });
    },
  };
}
