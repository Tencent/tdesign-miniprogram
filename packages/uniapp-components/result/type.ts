/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdResultProps {
  /**
   * 描述文字
   */
  description?: string;
  /**
   * 图标名称。值为字符串表示图标名称，值为 `false` 表示不显示图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标
   * @default true
   */
  icon?: string | boolean | object;
  /**
   * 图片地址
   */
  image?: string;
  /**
   * 内置主题
   * @default default
   */
  theme?: 'default' | 'success' | 'warning' | 'error';
  /**
   * 标题
   * @default ''
   */
  title?: string;
}
