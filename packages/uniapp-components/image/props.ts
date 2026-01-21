/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdImageProps } from './type';
export default {
  /** 加载失败时显示的内容。值为 `default` 则表示使用默认加载失败风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `error`；值为其他则表示普通文本内容，如“加载失败” */
  error: {
    type: String,
    default: 'default' as TdImageProps['error'],
  },
  /** 高度，默认单位为`px` */
  height: {
    type: [String, Number],
  },
  /** 是否开启图片懒加载 */
  lazy: Boolean,
  /** 加载态内容。值为 `default` 则表示使用默认加载中风格；值为其他则表示普通文本内容，如“加载中” */
  loading: {
    type: String,
    default: 'default' as TdImageProps['loading'],
  },
  /** 图片裁剪、缩放的模式；[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) */
  mode: {
    type: String,
    default: 'scaleToFill' as TdImageProps['mode'],
    validator(val: TdImageProps['mode']): boolean {
      if (!val) return true;
      return ['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'heightFix', 'top', 'bottom', 'center', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'].includes(val);
    },
  },
  /** 图片圆角类型 */
  shape: {
    type: String,
    default: 'square' as TdImageProps['shape'],
    validator(val: TdImageProps['shape']): boolean {
      if (!val) return true;
      return ['circle', 'round', 'square'].includes(val);
    },
  },
  /** 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单 */
  showMenuByLongpress: Boolean,
  /** 图片链接 */
  src: {
    type: String,
    default: '',
  },
  /** 图片标签id */
  tId: {
    type: String,
    default: '',
  },
  /** 默认不解析 webP 格式，只支持网络资源 */
  webp: Boolean,
  /** 宽度，默认单位为`px` */
  width: {
    type: [String, Number],
  },
  /** 图片加载失败时触发 */
  onError: {
    type: Function,
    default: () => ({}),
  },
  /** 图片加载完成时触发 */
  onLoad: {
    type: Function,
    default: () => ({}),
  },
};
