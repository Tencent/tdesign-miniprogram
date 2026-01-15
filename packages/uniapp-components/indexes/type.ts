/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdIndexesProps {
  /**
   * 索引列表的激活项，默认首项
   */
  current?: string | number;
  /**
   * 索引列表的激活项，默认首项，非受控属性
   */
  defaultCurrent?: string | number;
  /**
   * 索引字符列表。不传默认 `A-Z`
   */
  indexList?: Array<string | number>;
  /**
   * 索引是否吸顶，默认为true
   * @default true
   */
  sticky?: Boolean;
  /**
   * 锚点吸顶时与顶部的距离
   * @default 0
   */
  stickyOffset?: number;
  /**
   * 索引发生变更时触发事件
   */
  onChange?: (context: { index: string | number }) => void;
  /**
   * 点击侧边栏时触发事件
   */
  onSelect?: (context: { index: string | number }) => void;
}
