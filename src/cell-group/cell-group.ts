import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-cell-group`;

@wxComponent()
export default class CellGroup extends SuperComponent {
  externalClasses = ['t-class'];

  options = {
    addGlobalClass: true,
  };

  /**
   * 组件的属性列表
   */
  properties = props;

  /**
   * 组件的初始数据
   */
  data = {
    classPrefix: name,
  };
}
