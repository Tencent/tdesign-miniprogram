/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSegmentedProps {
  /**
   * 是否撑满父元素宽度
   * @default false
   */
  block?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 数据化配置选项内容
   * @default []
   */
  options?: string[] | number[] | SegmentedItem[];
  /**
   * 当前选中的值
   */
  value?: string | number;
  /**
   * 当前选中的值，非受控属性
   */
  defaultValue?: string | number;
  /**
   * 选项值发生变化时触发
   */
  onChange?: (context: { value: string | number; selectedOption: SegmentedItem }) => void;
}

export interface SegmentedItem {
  value: string | number;
  label?: string;
  icon?: string | object;
  disabled?: boolean;
}
