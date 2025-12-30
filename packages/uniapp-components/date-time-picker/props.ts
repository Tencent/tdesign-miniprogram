/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdDateTimePickerProps } from './type';
export default {
  /** 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible */
  autoClose: Boolean,
  /** 取消按钮文字 */
  cancelBtn: {
    type: String,
    default: '取消',
  },
  /** 确定按钮文字 */
  confirmBtn: {
    type: String,
    default: '',
  },
  /**  组件国际化语言，目前支持: 简体中文(zh)、(tc)、英文(en)、日语(ja)、韩语(ko)、俄语(ru)等六种语言 */
  customLocale: {
    type: String,
    default: 'zh',
  },
  /** 选择器的最大可选时间，默认为当前时间+10年 */
  end: {
    type: [String, Number],
  },
  /** 列选项过滤函数，支持自定义列内容。(type 值可为: year, month, date, hour, minute, second) */
  filter: {
    type: Function,
  },
  /** 用于格式化 pick、change、confirm 事件返回的值，[详细文档](https://day.js.org/docs/en/display/format) */
  format: {
    type: String,
    default: 'YYYY-MM-DD HH:mm:ss',
  },
  /** 格式化标签 */
  formatter: {
    type: Function,
  },
  /** 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容 */
  header: {
    type: Boolean,
    default: true as TdDateTimePickerProps['header'],
  },
  /** year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒 */
  mode: {
    type: [String, Array],
    default: 'date' as TdDateTimePickerProps['mode'],
  },
  /** 透传 Popup 组件全部属性 */
  popupProps: {
    type: Object,
    default: () => ({}),
  },
  /** 是否在日期旁边显示周几（如周一，周二，周日等） */
  showWeek: Boolean,
  /** 选择器的最小可选时间，默认为当前时间-10年 */
  start: {
    type: [String, Number],
  },
  /** 时间间隔步数，示例：`{ minute: 5 }` */
  steps: {
    type: Object,
    default: () => ({}),
  },
  /** 标题 */
  title: {
    type: String,
    default: '',
  },
  /** 是否使用弹出层包裹 */
  usePopup: {
    type: Boolean,
    default: true,
  },
  /** 选中值 */
  value: {
    type: [String, Number],
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: [String, Number],
  },
  /** 是否显示 */
  visible: Boolean,
  /** 取消按钮点击时触发 */
  onCancel: {
    type: Function,
    default: () => ({}),
  },
  /** 确认按钮点击时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 关闭时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 确认按钮点击时触发 */
  onConfirm: {
    type: Function,
    default: () => ({}),
  },
  /** 选中值发生变化时触发 */
  onPick: {
    type: Function,
    default: () => ({}),
  },
};
