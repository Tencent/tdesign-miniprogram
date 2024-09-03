/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdIndexesProps {
  /**
   * 索引字符列表。不传默认 `A-Z`
   */
  indexList?: {
    type: null;
    value?: string[] | number[];
  };
  /**
   * 索引是否吸顶，默认为true
   * @default true
   */
  sticky?: {
    type: BooleanConstructor;
    value?: Boolean;
  };
  /**
   * 锚点吸顶时与顶部的距离
   * @default 0
   */
  stickyOffset?: {
    type: NumberConstructor;
    value?: number;
  };
}
