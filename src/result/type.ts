export interface TdResultProps {
  /**
   * 描述文字
   */
  description?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-description', 't-class-image'];
    required?: boolean;
  };
  /**
   * 图标名称
   * @default ''
   */
  icon?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 图片地址
   */
  image?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 标题
   * @default ''
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 内置主题
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'success' | 'warning' | 'error';
  };
}
