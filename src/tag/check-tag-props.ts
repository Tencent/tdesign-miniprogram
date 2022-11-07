/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCheckTagProps } from './type';
const props: TdCheckTagProps = {
  /** 标签选中的状态，默认风格（theme=default）才有选中态 */
  checked: {
    type: Boolean,
    value: undefined,
  },
  /** 标签选中的状态，默认风格（theme=default）才有选中态，非受控属性 */
  defaultChecked: {
    type: null,
    value: undefined,
  },
  /** 标签是否可关闭 */
  closable: {
    type: Boolean,
    value: false,
  },
  /** 组件子元素 */
  content: {
    type: String,
    optionalTypes: [Number],
  },
  /** 自定义组件样式 */
  customStyle: {
    type: String,
    value: '',
  },
  /** 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 组件类名，用于设置 组件外层元素元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 标签图标 */
  icon: {
    type: String,
    value: '',
  },
  /** 标签类型，有三种：方形、圆角方形、标记型 */
  shape: {
    type: String,
    value: 'square',
  },
  /** 标签尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
};

export default props;
