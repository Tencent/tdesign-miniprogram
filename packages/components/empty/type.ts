/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdEmptyProps {
  /**
   * 描述文字
   */
  description?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-description', 't-class-image', 't-class-actions'];
  };
  /**
   * 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`。
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 图片地址
   */
  image?: {
    type: StringConstructor;
    value?: string;
  };
}
