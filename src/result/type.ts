/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdResultProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 描述文字
   */
  description?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名。`['t-class', 't-class-image', 't-class-title', 't-class-description']`
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-description', 't-class-image'];
  };
  /**
   * 图标名称
   * @default true
   */
  icon?: {
    type: null;
    value?: boolean | string | object;
  };
  /**
   * 图片地址
   */
  image?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 内置主题。可选项：default/success/warning/error
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'success' | 'warning' | 'error';
  };
  /**
   * 标题
   * @default ''
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
}
