/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdPickerItemProps {
  /**
   * 格式化标签
   */
  format?: {
    type: undefined;
    value?: (option: PickerItemOption) => string;
  };
  /**
   * 数据源
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: PickerItemOption[];
  };
}

export interface PickerItemOption {
  label: string;
  value: string | number;
}
