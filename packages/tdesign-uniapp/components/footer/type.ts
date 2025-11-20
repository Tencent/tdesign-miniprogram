/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdFooterProps {
  /**
   * 链接列表。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式
   * @default []
   */
  links?: Array<LinkObj>;
  /**
   * 图标配置。`logo.icon` 表示图标链接地址，`logo.title` 表示标题文本，`logo.url` 表示链接
   */
  logo?: FooterLogo;
  /**
   * 版权信息
   * @default ''
   */
  text?: string;
}

export interface LinkObj {
  name: string;
  url?: string;
  openType?: 'navigate' | 'redirect' | 'relaunch' | 'switchTab' | 'navigateBack';
}

export interface FooterLogo {
  icon: string;
  title?: string;
  url?: string;
}
