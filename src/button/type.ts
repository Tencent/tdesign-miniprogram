/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { LoadingProps } from '../loading/index';
import { SizeEnum } from '../common/common';

export interface TdButtonProps {
    /**按钮id */
    tId?: {
      type: StringConstructor;
      value?: string;
    };
  /**
   * 是否为块级元素
   * @default false
   */
  block?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 按钮内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义 dataset，可通过 event.currentTarget.dataset.custom 获取
   */
  customDataset?: {
    type: ObjectConstructor;
    value?: any;
  };
  /**
   * 禁用状态
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-icon', 't-class-loading'];
  };
  /**
   * 是否为幽灵按钮（镂空按钮）
   * @default false
   */
  ghost?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 图标名称
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 是否显示为加载状态
   * @default false
   */
  loading?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 透传至 Loading 组件
   */
  loadingProps?: {
    type: ObjectConstructor;
    value?: LoadingProps;
  };
  /**
   * 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形
   * @default rectangle
   */
  shape?: {
    type: StringConstructor;
    value?: 'rectangle' | 'square' | 'round' | 'circle';
  };
  /**
   * 组件尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: SizeEnum;
  };
  /**
   * 组件风格，依次为品牌色、危险色
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'primary' | 'danger';
  };
  /**
   * 同小程序的 formType
   */
  type?: {
    type: StringConstructor;
    value?: 'submit' | 'reset';
  };
  /**
   * 按钮形式，基础、线框、文字
   * @default base
   */
  variant?: {
    type: StringConstructor;
    value?: 'base' | 'outline' | 'text';
  };
  /**
   * 微信开放能力。<br />具体释义：<br />`contact` 打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html">具体说明</a> （*小程序插件中不能使用*）；<br />`share` 触发用户转发，使用前建议先阅读<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#使用指引">使用指引</a>；<br />`getPhoneNumber` 获取用户手机号，可以从 bindgetphonenumber 回调中获取到用户信息，<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html">具体说明</a> （*小程序插件中不能使用*）；<br />`getUserInfo` 获取用户信息，可以从 bindgetuserinfo 回调中获取到用户信息 （*小程序插件中不能使用*）；<br />`launchApp` 打开APP，可以通过 app-parameter 属性设定向 APP 传的参数<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html">具体说明</a>；<br />`openSetting` 打开授权设置页；<br />`feedback` 打开“意见反馈”页面，用户可提交反馈内容并上传<a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html">日志</a>，开发者可以登录<a href="https://mp.weixin.qq.com/">小程序管理后台</a>后进入左侧菜单“客服反馈”页面获取到反馈内容；<br />`chooseAvatar` 获取用户头像，可以从 bindchooseavatar 回调中获取到头像信息。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  openType?: {
    type: StringConstructor;
    value?:
      | 'contact'
      | 'share'
      | 'getPhoneNumber'
      | 'getUserInfo'
      | 'launchApp'
      | 'openSetting'
      | 'feedback'
      | 'chooseAvatar'
      | 'agreePrivacyAuthorization';
  };
  /**
   * 指定按钮按下去的样式类，按钮不为加载或禁用状态时有效。当 `hover-class="none"` 时，没有点击态效果
   * @default ''
   */
  hoverClass?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 指定是否阻止本节点的祖先节点出现点击态
   * @default false
   */
  hoverStopPropagation?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 按住后多久出现点击态，单位毫秒
   * @default 20
   */
  hoverStartTime?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 手指松开后点击态保留时间，单位毫秒
   * @default 70
   */
  hoverStayTime?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。。<br />具体释义：<br />`en` 英文；<br />`zh_CN` 简体中文；<br />`zh_TW` 繁体中文。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   * @default en
   */
  lang?: {
    type: StringConstructor;
    value?: 'en' | 'zh_CN' | 'zh_TW';
  };
  /**
   * 会话来源，open-type="contact"时有效
   * @default ''
   */
  sessionFrom?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 会话内消息卡片标题，open-type="contact"时有效
   * @default 当前标题
   */
  sendMessageTitle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
   * @default 当前分享路径
   */
  sendMessagePath?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 会话内消息卡片图片，open-type="contact"时有效
   * @default 截图
   */
  sendMessageImg?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
   * @default ''
   */
  appParameter?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
   * @default false
   */
  showMessageCard?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
