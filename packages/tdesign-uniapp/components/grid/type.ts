/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdGridProps {
  /**
   * 内容对齐方式
   * @default center
   */
  align?: 'left' | 'center';
  /**
   * 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式
   * @default false
   */
  border?:
    | boolean
    | {
        color?: string;
        width?: string;
        style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset';
      };
  /**
   * 每一行的列数量；为 0 时等于固定大小
   * @default 4
   */
  column?: number;
  /**
   * 间隔大小
   */
  gutter?: number;
  /**
   * 是否开启点击反馈
   * @default false
   */
  hover?: boolean;
  /**
   * 宫格的风格
   * @default default
   */
  theme?: 'default' | 'card';
}
