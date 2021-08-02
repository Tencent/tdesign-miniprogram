/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-07-26 09:43:31
 * */

export interface TdCellGroupProps {
  /**
   * 是否显示组边框
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 组件类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
    required?: boolean;
  };
  /**
   * 单元格组标题
   * @default ''
   */
  title: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
}
