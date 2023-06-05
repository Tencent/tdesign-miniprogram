/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdActionSheetProps {
  /**
   * 水平对齐方式
   * @default center
   */
  align?: {
    type: StringConstructor;
    value?: 'center' | 'left';
  };
  /**
   * 设置取消按钮的文本
   * @default ''
   */
  cancelText?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 设置每页展示菜单的数量，仅当 type=grid 时有效
   * @default 8
   */
  count?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 动作面板描述文字
   * @default ''
   */
  description?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 菜单项
   */
  items: {
    type: ArrayConstructor;
    value?: Array<string | ActionSheetItem>;
  };
  /**
   * 是否显示取消按钮
   * @default true
   */
  showCancel?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 展示类型，列表和表格形式展示
   * @default list
   */
  theme?: {
    type: StringConstructor;
    value?: 'list' | 'grid';
  };
  /**
   * 显示与隐藏
   * @default false
   */
  visible: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 显示与隐藏，非受控属性
   * @default false
   */
  defaultVisible: {
    type: BooleanConstructor;
    value?: boolean;
  };
  popupProps: {
    type: ObjectConstructor;
    value?: object;
  };
}

export interface ActionSheetItem {
  label: string;
  color?: string;
  disabled?: boolean;
}
