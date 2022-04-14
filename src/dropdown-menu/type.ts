/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdDropdownMenuProps {
  /**
   * 【讨论中】菜单标题和选项的选中态颜色
   * @default ''
   */
  activeColor?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否在点击遮罩层后关闭菜单
   * @default true
   */
  closeOnClickOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 动画时长
   * @default 200
   */
  duration?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
  };
  /**
   * 是否显示遮罩层
   * @default true
   */
  overlay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 菜单栏 z-index 层级
   * @default 11600
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}

export interface TdDropdownItemProps {
  /**
   * 是否禁用
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 标题
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否多选
   * @default false
   */
  multiple?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选项数据
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<TdDropdownItemOption>;
  };
  /**
   * 选项分栏（1-3）
   * @default 1
   */
  optionsColumns?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
  };
  /**
   * 选项排列
   * @default columns
   */
  optionsLayout?: {
    type: StringConstructor;
    value?: 'columns' | 'tree';
  };
  /**
   * 选中值
   */
  value?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor | ArrayConstructor>;
    value?: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>;
  };
  /**
   * 选中值，非受控属性
   */
  defaultValue?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor | ArrayConstructor>;
    value?: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>;
  };
}

export interface TdDropdownItemOption {
  label: string;
  disabled: boolean;
  value: TdDropdownItemOptionValueType;
  [key: string]: any;
}

export type TdDropdownItemOptionValueType = string | number;
