/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdTextProps {
  /**
   * 是否添加代码样式
   * @default false
   */
  code?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 文本内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否可复制
   * @default false
   */
  copyable?: {
    type: BooleanConstructor;
    value?: boolean | TypographyCopyable;
  };
  /**
   * 是否添加删除线样式
   * @default false
   */
  delete?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否添加不可用样式
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 文本是否为斜体
   * @default false
   */
  italic?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否添加键盘样式
   * @default false
   */
  keyboard?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否添加标记样式，默认为黄色，可通过配置颜色修改标记样式，如#0052D9
   * @default false
   */
  mark?: {
    type: null;
    value?: string | boolean;
  };
  /**
   * 文本是否加粗
   * @default false
   */
  strong?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 主题
   */
  theme?: {
    type: StringConstructor;
    value?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  };
  /**
   * 是否添加下划线样式
   * @default false
   */
  underline?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export interface TypographyCopyable {
  text?: string;
}

export interface TypographyEllipsis {
  collapsible?: boolean;
  expandable?: boolean;
  row?: number;
}
