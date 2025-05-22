/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCellGroupProps {
  /**
   * 是否显示组边框
   * @default false
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 单元格组风格
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'card';
  };
  /**
   * 单元格组标题
   * @default ''
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
}
