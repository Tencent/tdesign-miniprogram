import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
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
  properties = {
    dashed: {
      type: Boolean,
      value: false,
    },
    hairline: {
      type: Boolean,
      value: false,
    },
    contentPosition: {
      type: String,
      value: '',
    },
    borderColor: {
      type: String,
      value: '',
    },
    textColor: {
      type: String,
      value: '',
    },
    customStyle: {
      type: String,
      value: '',
    },
  };
  /**
   * 组件的初始数据
   */
  data = {
    classPrefix: name,
  };
}
