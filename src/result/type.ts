/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdResultProps {
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
    value?: array;
  };
  /**
   * 图标名称。值为字符串表示图标名称，值为 `false` 表示不显示图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标。
   * @default true
   */
  icon?: {
    type: null;
    value?: string | boolean | object;
  };
  /**
   * 图片地址
   */
  image?: {
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
  /**
   * 标题
   * @default ''
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
}
