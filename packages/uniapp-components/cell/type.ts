/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCellProps {
  /**
   * 右侧内容的对齐方式，默认居中对齐
   * @default middle
   */
  align?: 'top' | 'middle' | 'bottom';
  /**
   * 是否显示右侧箭头
   * @default false
   */
  arrow?: boolean | object;
  /**
   * 是否显示下边框
   * @default true
   */
  bordered?: boolean;
  /**
   * 下方内容描述
   */
  description?: string;
  /**
   * 是否开启点击反馈
   */
  hover?: boolean;
  /**
   * 主图
   */
  image?: string;
  /**
   * 链接跳转类型
   * @default navigateTo
   */
  jumpType?: 'switchTab' | 'reLaunch' | 'redirectTo' | 'navigateTo';
  /**
   * 左侧图标，出现在单元格标题的左侧
   */
  leftIcon?: string | object;
  /**
   * 和标题同行的说明文字
   */
  note?: string;
  /**
   * 说明文字自定义样式
   */
  noteStyle?: string | object;
  /**
   * 是否显示表单必填星号
   * @default false
   */
  required?: boolean;
  /**
   * 最右侧图标
   */
  rightIcon?: string | object;
  /**
   * 右侧图标自定义样式
   */
  rightIconStyle?: string | object;
  /**
   * 标题
   */
  title?: string;
  /**
   * 标题自定义样式
   */
  titleStyle?: string | object;
  /**
   * 点击后跳转链接地址。如果值为空，则表示不需要跳转
   * @default ''
   */
  url?: string;
  /**
   * 右侧内容
   */
  onClick?: (e: MouseEvent) => void;
}
