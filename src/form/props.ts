// import { TdFormProps } from './type';

const props = {
  // ==================== 已实现的属性 ====================
  /** 表单底部按钮组样式 */
  buttonGroupStyle: {
    type: Object,
    value: {},
  },
  /** 是否在表单标签字段右侧显示冒号 */
  colon: {
    type: Boolean,
    value: false,
  },
  /** 表单数据 */
  data: {
    type: Object,
    value: {},
  },
  /** 是否禁用整个表单 */
  disabled: {
    type: Boolean,
    value: undefined,
  },
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐 */
  labelAlign: {
    type: String,
    value: 'left',
  },
  /** 是否阻止表单提交默认事件 */
  preventSubmitDefault: {
    type: Boolean,
    value: true,
  },
  /** 是否显示必填符号（*），默认显示 */
  requiredMark: {
    type: Boolean,
    value: undefined,
  },
  /** 重置表单的方式，值为 empty 表示重置表单为空，值为 initial 表示重置表单数据为初始值 */
  resetType: {
    type: String,
    value: 'empty',
  },
  /** 表单字段校验规则 */
  rules: {
    type: Object,
    value: {},
  },
  /** 校验不通过时，是否显示错误提示信息 */
  showErrorMessage: {
    type: Boolean,
    value: true,
  },

  // ==================== 待实现的属性 ====================
  /** 表单内容对齐方式：左对齐、右对齐 */
  // contentAlign: {
  //   type: String,
  //   value: 'left',
  // },
  /** 表单错误信息配置 */
  // errorMessage: {
  //   type: Object,
  //   value: {},
  // },
  /** 可以整体设置label标签宽度，默认为81px */
  // labelWidth: {
  //   type: String,
  //   value: '81px',
  // },
  /** 表单校验不通过时，是否自动滚动到第一个校验不通过的字段 */
  // scrollToFirstError: {
  //   type: String,
  //   value: '',
  // },
  /** 当校验结果只有告警信息时，是否触发 submit 提交事件 */
  // submitWithWarningMessage: {
  //   type: Boolean,
  //   value: false,
  // },
};

export default props;
