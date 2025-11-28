/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { ImageEvent } from '../common/common';

export interface TdImageProps {
  /**
   * 加载失败时显示的内容。值为 `default` 则表示使用默认加载失败风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `error`；值为其他则表示普通文本内容，如“加载失败”
   * @default 'default'
   */
  error?: string;
  /**
   * 高度，默认单位为`px`
   */
  height?: string | number;
  /**
   * 是否开启图片懒加载
   * @default false
   */
  lazy?: boolean;
  /**
   * 加载态内容。值为 `default` 则表示使用默认加载中风格；值为其他则表示普通文本内容，如“加载中”
   * @default 'default'
   */
  loading?: string;
  /**
   * 图片裁剪、缩放的模式；[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)
   * @default scaleToFill
   */
  mode?:
    | 'scaleToFill'
    | 'aspectFit'
    | 'aspectFill'
    | 'widthFix'
    | 'heightFix'
    | 'top'
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right';
  /**
   * 图片圆角类型
   * @default square
   */
  shape?: 'circle' | 'round' | 'square';
  /**
   * 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单
   * @default false
   */
  showMenuByLongpress?: boolean;
  /**
   * 图片链接
   * @default ''
   */
  src?: string;
  /**
   * 图片标签id
   * @default ''
   */
  tId?: string;
  /**
   * 默认不解析 webP 格式，只支持网络资源
   * @default false
   */
  webp?: boolean;
  /**
   * 宽度，默认单位为`px`
   */
  width?: string | number;
  /**
   * 图片加载失败时触发
   */
  onError?: (context: { e: ImageEvent }) => void;
  /**
   * 图片加载完成时触发
   */
  onLoad?: (context: { e: ImageEvent }) => void;
}
