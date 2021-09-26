import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';

@wxComponent()
export default class extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = ['t-class', 't-class-description', 't-class-image'];

  properties = props;
}
