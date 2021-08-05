import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-divider`;
@wxComponent()
export default class Divider extends SuperComponent {
  externalClasses = ['t-class', 't-class-content'];
  options = {
    addGlobalClass: true,
    multipleSlots: true,
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
