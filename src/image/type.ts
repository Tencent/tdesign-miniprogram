/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdImageProps {
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
   * 图片圆角类型
   * @default square
   */
  shape?: {
    type: StringConstructor;
    value?: 'circle' | 'round' | 'square';
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
   * 图片裁剪、缩放的模式。<br />具体释义：<br />`scaleToFill` 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素；<br />`aspectFit` 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。；<br />`aspectFill` 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。；<br />`widthFix` 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变；<br />`heightFix` 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变；<br />`top` 裁剪模式，不缩放图片，只显示图片的顶部区域；<br />`bottom` 裁剪模式，不缩放图片，只显示图片的底部区域；<br />`center` 裁剪模式，不缩放图片，只显示图片的中间区域；<br />`left` 裁剪模式，不缩放图片，只显示图片的左边区域；<br />`right` 裁剪模式，不缩放图片，只显示图片的右边区域；<br />`top left` 裁剪模式，不缩放图片，只显示图片的左上边区域；<br />`top right` 裁剪模式，不缩放图片，只显示图片的右上边区域；<br />`bottom left` 裁剪模式，不缩放图片，只显示图片的左下边区域；<br />`bottom right` 裁剪模式，不缩放图片，只显示图片的右下边区域。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)
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
   * 默认不解析 webP 格式，只支持网络资源
   * @default false
   */
  webp?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。
   * @default false
   */
  showMenuByLongpress?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
