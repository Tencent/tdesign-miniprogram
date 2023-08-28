/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdIndexesProps } from './type';
const props: TdIndexesProps = {
  /** 索引字符列表。不传默认 `A-Z` */
  indexList: {
    type: null,
  },
  /** 已废弃。索引列表的列表数据。每个元素包含三个子元素，index(string)：索引值，例如1，2，3，...或A，B，C等；title(string): 索引标题，可不填将默认设为索引值；children(Array<{title: string}>): 子元素列表，title为子元素的展示文案。 */
  list: {
    type: Array,
    value: [],
  },
  /** 索引是否吸顶，默认为true */
  sticky: {
    type: Boolean,
    value: true,
  },
  /** 锚点吸顶时与顶部的距离	 */
  stickyOffset: {
    type: Number,
    value: 0,
  },
};

export default props;
