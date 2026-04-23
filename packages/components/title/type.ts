/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TypographyEllipsis } from '../text/index';

export interface TdTitleProps {
  /**
   * 段落内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式
   * @default false
   */
  ellipsis?: {
    type: null;
    value?: boolean | TypographyEllipsis;
  };
  /**
   * 标题等级
   * @default h1
   */
  level?: {
    type: StringConstructor;
    value?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };
}
