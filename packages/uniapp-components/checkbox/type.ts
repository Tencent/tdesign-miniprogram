/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCheckboxProps {
  /**
   * 是否为块级元素
   * @default true
   */
  block?: boolean;
  /**
   * 是否开启无边框模式
   */
  borderless?: boolean;
  /**
   * 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用
   * @default false
   */
  checkAll?: boolean;
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 是否选中，非受控属性
   */
  defaultChecked?: boolean;
  /**
   * 多选框内容
   */
  content?: string;
  /**
   * 是否禁用组件内容（content）触发选中
   */
  contentDisabled?: boolean;
  /**
   * 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled > CheckboxGroup.disabled > Form.disabled
   */
  disabled?: boolean;
  /**
   * 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标，半选中态图标]`。使用 String 时，值为 circle 表示填充圆形图标、值为 line 表示描边型图标、值为 rectangle 表示填充矩形图标
   * @default 'circle'
   */
  icon?: 'circle' | 'line' | 'rectangle' | string[];
  /**
   * 是否为半选
   * @default false
   */
  indeterminate?: boolean;
  /**
   * 主文案
   */
  label?: string;
  /**
   * 内容最大行数限制
   * @default 5
   */
  maxContentRow?: number;
  /**
   * 主文案最大行数限制
   * @default 3
   */
  maxLabelRow?: number;
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 多选框和内容相对位置
   * @default left
   */
  placement?: 'left' | 'right';
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * -1 时代表独立，不再寻找 parent，用于头条小程序
   * @default ''
   */
  relationKey?: string;
  /**
   * 多选框的值
   */
  value?: string | number | boolean;
  /**
   * 值变化时触发。`context` 表示当前点击项内容
   */
  onChange?: (context: {
    checked: boolean;
    context: { value: boolean | number | string; label: boolean | number | string };
  }) => void;
}
