/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdCalendarProps } from './type';
export default {
  /** 是否允许区间选择日历的起止时间相同，仅当 `type='range'` 时有效 */
  allowSameDay: Boolean,
  /** 自动关闭；在点击关闭按钮、确认按钮、遮罩层时自动关闭，不需要手动设置 visible */
  autoClose: {
    type: Boolean,
    default: true,
  },
  /** 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性 */
  confirmBtn: {
    type: [String, Object],
    default: '' as TdCalendarProps['confirmBtn'],
  },
  /** 第一天从星期几开始，默认 0 = 周日 */
  firstDayOfWeek: {
    type: Number,
    default: 0,
  },
  /** 用于格式化日期的函数 */
  format: {
    type: Function,
  },
  /** 国际化文案 */
  localeText: {
    type: Object,
  },
  /** 最大可选的日期，不传则默认半年后 */
  maxDate: {
    type: Number,
  },
  /** 最小可选的日期，不传则默认今天 */
  minDate: {
    type: Number,
  },
  /** 是否只读，只读状态下不能选择日期 */
  readonly: Boolean,
  /** 切换模式。 `none` 表示平铺展示所有月份； `month` 表示支持按月切换， `year-month` 表示既按年切换，也支持按月切换 */
  switchMode: {
    type: String,
    default: 'none' as TdCalendarProps['switchMode'],
    validator(val: TdCalendarProps['switchMode']): boolean {
      if (!val) return true;
      return ['none', 'month', 'year-month'].includes(val);
    },
  },
  /** 标题，不传默认为“请选择日期” */
  title: {
    type: String,
  },
  /** 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择 */
  type: {
    type: String,
    default: 'single' as TdCalendarProps['type'],
    validator(val: TdCalendarProps['type']): boolean {
      if (!val) return true;
      return ['single', 'multiple', 'range'].includes(val);
    },
  },
  /** 是否使用弹出层包裹日历 */
  usePopup: {
    type: Boolean,
    default: true,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate > today。当 type = multiple 或 range 时传入数组 */
  value: {
    type: [Number, Array],
  },
  /** 当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate > today。当 type = multiple 或 range 时传入数组，非受控属性 */
  defaultValue: {
    type: [Number, Array],
  },
  /** 是否显示日历；`usePopup` 为 true 时有效 */
  visible: Boolean,
  /** 不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple） */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 关闭按钮时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 点击确认按钮时触发 */
  onConfirm: {
    type: Function,
    default: () => ({}),
  },
  /** 切换月或年时触发（switch-mode 不为 none 时有效） */
  onPanelChange: {
    type: Function,
    default: () => ({}),
  },
  /** 滚动时触发 */
  onScroll: {
    type: Function,
    default: () => ({}),
  },
  /** 点击日期时触发 */
  onSelect: {
    type: Function,
    default: () => ({}),
  },
};
