/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdImageProps {
  /**
   * 自定义组件id
   * @default null
   */
  tId?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 加载失败时显示的内容。值为 `default` 则表示使用默认加载失败风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `error`；值为其他则表示普通文本内容，如“加载失败”
   * @default 'default'
   */
  error?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，分别用于设置加载组件外层元素，中间内容等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-load'];
  };
  /**
   * 高度，默认单位为`px`
   */
  height?: {
    type: null;
    value?: string | number;
  };
  /**
   * 是否开启图片懒加载
   * @default false
   */
  lazy?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 加载态内容。值为 `default` 则表示使用默认加载中风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `loading`；值为其他则表示普通文本内容，如“加载中”
   * @default 'default'
   */
  loading?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 图片裁剪、缩放的模式；[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)
   * @default scaleToFill
   */
  mode?: {
    type: StringConstructor;
    value?:
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
  };
  /**
   * 图片圆角类型
   * @default square
   */
  shape?: {
    type: StringConstructor;
    value?: 'circle' | 'round' | 'square';
  };
  /**
   * 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。
   * @default false
   */
  showMenuByLongpress?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 图片链接
   * @default ''
   */
  src?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 默认不解析 webP 格式，只支持网络资源
   * @default false
   */
  webp?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 宽度，默认单位为`px`
   */
  width?: {
    type: null;
    value?: string | number;
  };
}
