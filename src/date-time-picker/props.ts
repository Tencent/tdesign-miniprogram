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
  /** 选择器的结束时间 */
  end: {
    type: String,
    optionalTypes: [Number],
  },
  /** 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format) */
  format: {
    type: String,
    value: 'YYYY-MM-DD',
  },
  /** 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容 */
  header: {
    type: Boolean,
    value: true,
  },
  /** 选择器模式，用于表示可以选择到哪一个层级。【示例一】year 或者 ['year'] 表示纯日期选择器，只能选择到年份，只显示年份。【示例二】'hour' 或 ['hour'] 表示纯时间选择器，只能选择到小时维度。【示例三】['year', 'month', 'date', 'hour', 'minute'] 表示，日期和时间 混合选择器，可以选择到具体哪一分钟，显示全部时间：年/月/日/时/分 */
  mode: {
    type: String,
    optionalTypes: [Array],
    value: ['year', 'month', 'date'],
  },
  /** 【开发中】是否在日期旁边显示周几（如周一，周二，周日等） */
  showWeek: {
    type: Boolean,
    value: false,
  },
  /** 选择器的开始时间 */
  start: {
    type: String,
    optionalTypes: [Number],
  },
  /** 标题 */
  title: {
    type: String,
    value: '',
  },
  /** 选中值 */
  value: {
    type: String,
    optionalTypes: [Number],
    value: null,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: String,
    optionalTypes: [Number],
  },
  /** 是否显示 */
  visible: {
    type: Boolean,
    value: false,
  },
};

export default props;
