/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-18 11:06:33
 * */

export interface TdImageProps {
  /**
   * 组件类名，分别用于设置加载组件外层元素，中间内容等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-load'];
    required?: boolean;
  };
  /**
   * 加载失败时显示的内容，值为 'default' 则表示使用默认加载失败风格，值为空或者 'slot' 表示使用插槽渲染，值为其他则表示普通文本内容，如“加载失败”
   * @default 'default'
   */
  loadFailed?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 加载态内容，值为 'default' 则表示使用默认加载中风格，值为空或者 'slot' 表示使用插槽渲染，值为其他则表示普通文本内容，如“加载中”
   * @default 'default'
   */
  loading?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 图片资源地址
   * @default ''
   */
  src?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 图片裁剪、缩放的模式 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)
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
    required?: boolean;
  };
  /**
   * 默认不解析 webP 格式，只支持网络资源
   * @default false
   */
  webp?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载
   * @default false
   */
  lazyLoad?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 开启长按图片显示识别小程序码菜单
   * @default false
   */
  showMenuByLongpress?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
}
