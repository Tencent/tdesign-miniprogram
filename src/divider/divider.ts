import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-divider`;
@wxComponent()
export default class Divider extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-content`];

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
    prefix,
    classPrefix: name,
  };

  observers = {
    'lineColor, customStyle'() {
      this.setDividerStyle();
    },
  };

  methods = {
    setDividerStyle() {
      const { lineColor, customStyle } = this.properties;
      const dividerStyle = `${lineColor ? `border-color: ${lineColor};` : ''}${customStyle ? `${customStyle}` : ''}`;
      this.setData({
        dividerStyle,
      });
    },
  };
}
