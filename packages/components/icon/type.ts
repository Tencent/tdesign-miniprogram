/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdIconProps {
  /**
   * 图标颜色
   * @default ''
   */
  color?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 图标名称或图片链接
   * @default ''
   */
  name: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 自定义图标前缀
   * @default ''
   */
  prefix?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 图标大小, 如 `20`, `20px`, `48rpx`, 默认单位是 `px`
   */
  size?: {
    type: null;
    value?: string | number;
  };
}
