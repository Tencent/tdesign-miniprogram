/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDateTimePickerProps } from './type';
const props: TdDateTimePickerProps = {
  /** 取消按钮文字 */
  cancelBtn: {
    type: String,
    value: '',
  },
  /** 确定按钮文字 */
  confirmBtn: {
    type: String,
    value: '',
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
  },
  /** 选择器的最大可选时间，默认为当前时间+10年 */
  end: {
    type: null,
  },
  /** 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 底部内容 */
  footer: {
    type: Boolean,
    value: true,
  },
  /** 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format) */
  format: {
    type: String,
    value: '',
  },
  /** 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容 */
  header: {
    type: Boolean,
    value: true,
  },
  /** year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒 */
  mode: {
    type: null,
    value: 'date',
  },
  /** 【开发中】是否在日期旁边显示周几（如周一，周二，周日等） */
  showWeek: {
    type: Boolean,
    value: false,
  },
  /** 选择器的最小可选时间，默认为当前时间-10年 */
  start: {
    type: null,
  },
  /** 标题 */
  title: {
    type: String,
    value: '',
  },
  /** 选中值 */
  value: {
    type: null,
    value: null,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: null,
  },
  /** 是否显示 */
  visible: {
    type: Boolean,
    value: false,
  },
};

export default props;
