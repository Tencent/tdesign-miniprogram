/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TypographyEllipsis } from '../text/type';

export interface TdParagraphProps {
  /**
   * 段落内容
   */
  content?: string;
  /**
   * 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式
   * @default false
   */
  ellipsis?: boolean | TypographyEllipsis;
}
