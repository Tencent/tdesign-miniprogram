/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSegmentedProps {
  /**
   * 是否禁用
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 数据化配置选项内容
   * @default []
   */
  options?: {
    type: ObjectConstructor;
    value?: string[] | number[] | SegmentedItem[];
  };
  /**
   * 当前选中的值
   */
  value?: {
    type: null;
    value?: string | number;
  };
  /**
   * 当前选中的值，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: string | number;
  };
}

export interface SegmentedItem {
  value: string | number;
  label?: string;
  icon?: string | object;
  disabled?: boolean;
}
