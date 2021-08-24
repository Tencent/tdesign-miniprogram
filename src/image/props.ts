/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-18 11:06:33
 * */

import { TdImageProps } from './type';
const props: TdImageProps = {
  /** 组件类名，分别用于设置加载组件外层元素，中间内容等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 加载失败时显示的内容，值为 'default' 则表示使用默认加载失败风格，值为空或者 'slot' 表示使用插槽渲染，值为其他则表示普通文本内容，如“加载失败” */
  loadFailed: {
    type: String,
    value: 'default',
  },
  /** 加载态内容，值为 'default' 则表示使用默认加载中风格，值为空或者 'slot' 表示使用插槽渲染，值为其他则表示普通文本内容，如“加载中” */
  loading: {
    type: String,
    value: 'default',
  },
  /** 图片资源地址 */
  src: {
    type: String,
    value: '',
  },
  /** 图片裁剪、缩放的模式 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) */
  mode: {
    type: String,
    value: 'scaleToFill',
  },
  /** 默认不解析 webP 格式，只支持网络资源 */
  webp: {
    type: Boolean,
    value: false,
  },
  /** 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载 */
  lazyLoad: {
    type: Boolean,
    value: false,
  },
  /** 开启长按图片显示识别小程序码菜单 */
  showMenuByLongpress: {
    type: Boolean,
    value: false,
  },
};

export default props;
