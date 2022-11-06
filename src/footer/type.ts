/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdFooterProps {
  /**
   * 版权信息，type 为`text`生效
   * @default ''
   */
  copyright?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 图标配置，type 为`logo`生效。`logo.icon` 表示图标链接地址，`logo.title` 表示标题文本，`logo.url` 表示链接跳转地址
   */
  logo?: {
    type: ObjectConstructor;
    value?: FooterLogo;
  };
  /**
   * 链接列表，type 为`text`生效。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式
   * @default []
   */
  textLinkList?: {
    type: ArrayConstructor;
    value?: Array<LinkObj>;
  };
  /**
   * 页脚展示类型
   * @default 'text'
   */
  theme?: {
    type: StringConstructor;
    value?: 'text' | 'logo';
  };
}

export interface FooterLogo {
  icon: string;
  title?: string;
  titleUrl?: string;
}

export interface LinkObj {
  name: string;
  url?: string;
  openType?: 'navigate' | 'redirect' | 'relaunch' | 'switchTab' | 'navigateBack';
}
