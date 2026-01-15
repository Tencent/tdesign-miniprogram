/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdLinkProps } from './type';
export default {
  /** 链接内容 */
  content: {
    type: String,
  },
  /** 是否为禁用态 */
  disabled: Boolean,
  /** 是否开启点击反馈 */
  hover: Boolean,
  /** 与 navigator 原生组件属性保持一致，具体使用参考：[微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)。使用时请将形如 `open-type` 风格的属性名改为 `openType` 风格 */
  navigatorProps: {
    type: Object,
    default: () => ({}),
  },
  /** 前置图标 */
  prefixIcon: {
    type: [String, Object],
  },
  /** 尺寸 */
  size: {
    type: String,
    default: 'medium' as TdLinkProps['size'],
    validator(val: TdLinkProps['size']): boolean {
      if (!val) return true;
      return ['small', 'medium', 'large'].includes(val);
    },
  },
  /** 后置图标 */
  suffixIcon: {
    type: [String, Object],
  },
  /** 组件风格，依次为默认色、品牌色、危险色、警告色、成功色 */
  theme: {
    type: String,
    default: 'default' as TdLinkProps['theme'],
    validator(val: TdLinkProps['theme']): boolean {
      if (!val) return true;
      return ['default', 'primary', 'danger', 'warning', 'success'].includes(val);
    },
  },
  /** 是否显示链接下划线 */
  underline: Boolean,
  /** 页面链接执行完成后触发（失败或成功均会触发） */
  onComplete: {
    type: Function,
    default: () => ({}),
  },
  /** 页面链接跳转失败后触发 */
  onFail: {
    type: Function,
    default: () => ({}),
  },
  /** 页面链接跳转成功后触发 */
  onSuccess: {
    type: Function,
    default: () => ({}),
  },
};
