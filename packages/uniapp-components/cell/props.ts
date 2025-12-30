/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdCellProps } from './type';
export default {
  /** 右侧内容的对齐方式，默认居中对齐 */
  align: {
    type: String,
    default: 'middle' as TdCellProps['align'],
    validator(val: TdCellProps['align']): boolean {
      if (!val) return true;
      return ['top', 'middle', 'bottom'].includes(val);
    },
  },
  /** 是否显示右侧箭头 */
  arrow: {
    type: [Boolean, Object],
    default: false as TdCellProps['arrow'],
  },
  /** 是否显示下边框 */
  bordered: {
    type: Boolean,
    default: true,
  },
  /** 下方内容描述 */
  description: {
    type: String,
  },
  /** 是否开启点击反馈 */
  hover: Boolean,
  /** 主图 */
  image: {
    type: String,
  },
  /** 链接跳转类型 */
  jumpType: {
    type: String,
    default: 'navigateTo' as TdCellProps['jumpType'],
    validator(val: TdCellProps['jumpType']): boolean {
      if (!val) return true;
      return ['switchTab', 'reLaunch', 'redirectTo', 'navigateTo'].includes(val);
    },
  },
  /** 左侧图标，出现在单元格标题的左侧 */
  leftIcon: {
    type: [String, Object],
  },
  /** 和标题同行的说明文字 */
  note: {
    type: String,
  },
  /** 说明文字自定义样式 */
  noteStyle: {
    type: [String, Object],
  },
  /** 是否显示表单必填星号 */
  required: Boolean,
  /** 最右侧图标 */
  rightIcon: {
    type: [String, Object],
  },
  /** 右侧图标自定义样式 */
  rightIconStyle: {
    type: [String, Object],
  },
  /** 标题 */
  title: {
    type: String,
  },
  /** 标题自定义样式 */
  titleStyle: {
    type: [String, Object],
  },
  /** 点击后跳转链接地址。如果值为空，则表示不需要跳转 */
  url: {
    type: String,
    default: '',
  },
  /** 右侧内容 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
};
