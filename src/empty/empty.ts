import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';

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
}
