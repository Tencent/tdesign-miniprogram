/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCalendarProps } from './type';
const props: TdCalendarProps = {
  /** 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。 */
  confirmBtn: {
    type: null,
    value: '',
  },
  /** 自定义组件样式 */
  customStyle: {
    type: String,
    value: '',
  },
  /** 第一天从星期几开始，默认 0 = 周日 */
  firstDayOfWeek: {
    type: Number,
    value: 0,
  },
  /** 用于格式化日期的函数 */
  format: {
    type: null,
  },
  /** 最大可选的日期，不传则默认半年后 */
  maxDate: {
    type: Number,
  },
  /** 最小可选的日期，不传则默认今天 */
  minDate: {
    type: Number,
  },
  /** 标题，不传默认为“请选择日期” */
  title: {
    type: String,
  },
  /** 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择 */
  type: {
    type: String,
    value: 'single',
  },
  /** 是否使用弹出层包裹日历 */
  usePopup: {
    type: Boolean,
    value: true,
  },
  /** 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组 */
  value: {
    type: null,
    value: null,
  },
  /** 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组，非受控属性 */
  defaultValue: {
    type: null,
  },
  /** 是否显示日历；`usePopup` 为 true 时有效 */
  visible: {
    type: Boolean,
    value: false,
  },
};

export default props;
