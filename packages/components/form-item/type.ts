/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdFormItemProps {
  /**
   * 是否显示右侧箭头
   * @default false
   */
  arrow?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 表单项说明内容
   * @default ''
   */
  help?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 字段标签名称
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 表单字段标签对齐方式：左对齐、右对齐、顶部对齐。默认使用 Form 的对齐方式，优先级高于 Form.labelAlign
   */
  labelAlign?: {
    type: StringConstructor;
    value?: 'left' | 'right' | 'top';
  };
  /**
   * 可以整体设置标签宽度，优先级高于 Form.labelWidth
   */
  labelWidth?: {
    type: null;
    value?: string | number;
  };
  /**
   * 表单字段名称
   * @default ''
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否显示必填符号（*），优先级高于 Form.requiredMark
   */
  requiredMark?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 校验不通过时，是否显示错误提示信息，优先级高于 `Form.showErrorMessage`
   */
  showErrorMessage?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
