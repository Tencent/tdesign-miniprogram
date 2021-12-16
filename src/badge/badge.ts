import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-badge`;

@wxComponent()
export default class Badge extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = ['t-class', 't-class-count', 't-class-content'];

  properties = props;

  data = {
    classPrefix: name,
    value: '',
  };
}
