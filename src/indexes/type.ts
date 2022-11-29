/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdIndexesProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 列表高度，未设置默认占满设备高度
   */
  height?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 索引列表的列表数据。每个元素包含三个子元素，index(string)：索引值，例如1，2，3，...或A，B，C等；title(string): 索引标题，可不填将默认设为索引值；children(Array<{title: string}>): 子元素列表，title为子元素的展示文案。
   * @default []
   */
  list: {
    type: ArrayConstructor;
    value?: ListItem[];
  };
  /**
   * 【开发中】索引是否吸顶，默认为true
   * @default true
   */
  sticky?: {
    type: BooleanConstructor;
    value?: Boolean;
  };
}

export interface ListItem {
  title: string;
  index: string;
  children: { title: string; [key: string]: any }[];
}
