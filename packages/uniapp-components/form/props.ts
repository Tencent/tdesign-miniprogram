/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdFormProps } from './type';
export default {
  /** 是否在表单标签字段右侧显示冒号 */
  colon: Boolean,
  /** 表单内容对齐方式：左对齐、右对齐 */
  contentAlign: {
    type: String,
    default: 'left' as TdFormProps['contentAlign'],
    validator(val: TdFormProps['contentAlign']): boolean {
      if (!val) return true;
      return ['left', 'right'].includes(val);
    },
  },
  /** 表单数据 */
  data: {
    type: Object,
    default: () => ({}),
  },
  /** 是否禁用整个表单 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 表单错误信息配置，示例：`{ idcard: '请输入正确的身份证号码', max: '字符长度不能超过 ${max}' }` */
  errorMessage: {
    type: Object,
  },
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐 */
  labelAlign: {
    type: String,
    default: 'right' as TdFormProps['labelAlign'],
    validator(val: TdFormProps['labelAlign']): boolean {
      if (!val) return true;
      return ['left', 'right', 'top'].includes(val);
    },
  },
  /** 可以整体设置label标签宽度，默认为81px */
  labelWidth: {
    type: [String, Number],
    default: '81px' as TdFormProps['labelWidth'],
  },
  /** 是否整个表单只读 */
  readonly: {
    type: Boolean,
    default: undefined,
  },
  /** 是否显示必填符号（*），默认显示 */
  requiredMark: {
    type: Boolean,
    default: undefined,
  },
  /** 表单必填符号（*）显示位置 */
  requiredMarkPosition: {
    type: String,
    validator(val: TdFormProps['requiredMarkPosition']): boolean {
      if (!val) return true;
      return ['left', 'right'].includes(val);
    },
  },
  /** 重置表单的方式，值为 empty 表示重置表单为空，值为 initial 表示重置表单数据为初始值 */
  resetType: {
    type: String,
    default: 'empty' as TdFormProps['resetType'],
    validator(val: TdFormProps['resetType']): boolean {
      if (!val) return true;
      return ['empty', 'initial'].includes(val);
    },
  },
  /** 表单字段校验规则 */
  rules: {
    type: Object,
  },
  /** 表单校验不通过时，是否自动滚动到第一个校验不通过的字段，平滑滚动或是瞬间直达。值为空则表示不滚动 */
  scrollToFirstError: {
    type: String,
    validator(val: TdFormProps['scrollToFirstError']): boolean {
      if (!val) return true;
      return ['', 'smooth', 'auto'].includes(val);
    },
  },
  /** 校验不通过时，是否显示错误提示信息，统一控制全部表单项。如果希望控制单个表单项，请给 FormItem 设置该属性 */
  showErrorMessage: {
    type: Boolean,
    default: true,
  },
  /** 【讨论中】当校验结果只有告警信息时，是否触发 `submit` 提交事件 */
  submitWithWarningMessage: Boolean,
  /** 表单重置时触发 */
  onReset: {
    type: Function,
    default: () => ({}),
  },
  /** 表单提交时触发。其中 `context.validateResult` 表示校验结果，`context.firstError` 表示校验不通过的第一个规则提醒。`context.validateResult` 值为 `true` 表示校验通过；如果校验不通过，`context.validateResult` 值为校验结果列表。<br />【注意】⚠️ 默认情况，输入框按下 Enter 键会自动触发提交事件，如果希望禁用这个默认行为，可以给输入框添加  enter 事件，并在事件中设置 `e.preventDefault()` */
  onSubmit: {
    type: Function,
    default: () => ({}),
  },
  /** 校验结束后触发，result 值为 true 表示校验通过；如果校验不通过，result 值为校验结果列表 */
  onValidate: {
    type: Function,
    default: () => ({}),
  },
};
