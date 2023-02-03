/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCheckboxGroupProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 支持最多选中的数量
   */
  max?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 统一设置内部复选框 HTML 属性
   * @default ''
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<CheckboxOption>;
  };
  /**
   * 选中值
   * @default []
   */
  value?: {
    type: ArrayConstructor;
    value?: CheckboxGroupValue;
  };
  /**
   * 选中值，非受控属性
   * @default []
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: CheckboxGroupValue;
  };
}

export type CheckboxOption = string | number | CheckboxOptionObj;

export interface CheckboxOptionObj {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  checkAll?: true;
}

export type CheckboxGroupValue = Array<string | number>;
