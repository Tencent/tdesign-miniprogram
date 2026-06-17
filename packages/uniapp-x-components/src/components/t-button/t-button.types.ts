/**
 * Button 组件的类型契约
 *
 * 这些类型同时被：
 *  - vue3 SFC（button.vue，单测 + H5 端）
 *  - uts SFC（button.uvue，uni-app x App 端）共享
 *
 * 命名遵循 TDesign 现有约定（variant/theme/size/disabled/loading/...）。
 */

export type ButtonVariant = 'base' | 'outline' | 'dashed' | 'text';

export type ButtonTheme = 'default' | 'primary' | 'danger' | 'warning' | 'success';

export type ButtonSize = 'extra-small' | 'small' | 'medium' | 'large';

export type ButtonShape = 'rectangle' | 'square' | 'round' | 'circle';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  size?: ButtonSize;
  shape?: ButtonShape;
  type?: ButtonType;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  ghost?: boolean;
  /** 透传额外类名 */
  customClass?: string;

  /** 卡片id。 `open-type` 的值设置为 `liveActivity` ，设置 `activity-type` 参数为 [notify_type](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message-2.html)。当用户点击 `button` 后，可以通过 `bindcreateliveactivity` 事件回调获取到 `code` */
  activityType?: number;
  /** 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 */
  appParameter?: string;
  /** 按钮内容 */
  content?: string;
  /** 自定义 dataset，可通过 event.currentTarget.dataset.custom 获取 */
  customDataset?: string | number | boolean | object | any[];
  /** 从消息小程序入口打开小程序的路径，默认为聊天工具启动路径 */
  entrancePath?: string;
  /** 指定按钮按下去的样式类，按钮不为加载或禁用状态时有效。当 `hover-class="none"` 时，没有点击态效果 */
  hoverClass?: string;
  /** 按住后多久出现点击态，单位毫秒 */
  hoverStartTime?: number;
  /** 手指松开后点击态保留时间，单位毫秒 */
  hoverStayTime?: number;
  /** 指定是否阻止本节点的祖先节点出现点击态 */
  hoverStopPropagation?: boolean;
  /** 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` */
  icon?: string | object;
  /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。<br />具体释义：<br />`en` 英文；<br />`zh_CN` 简体中文；<br />`zh_TW` 繁体中文。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) */
  lang?: string;
  /** 转发的文本消息是否要带小程序入口 */
  needShowEntrance?: boolean;
  openType?: string;
  /** 原生按钮属性，当手机号快速验证或手机号实时验证额度用尽时，是否对用户展示“申请获取你的手机号，但该功能使用次数已达当前小程序上限，暂时无法使用”的提示，默认展示，open-type="getPhoneNumber" 或 open-type="getRealtimePhoneNumber" 时有效 */
  phoneNumberNoQuotaToast?: boolean;
  /** 会话内消息卡片图片，open-type="contact"时有效 */
  sendMessageImg?: string;
  /** 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 */
  sendMessagePath?: string;
  /** 会话内消息卡片标题，open-type="contact"时有效 */
  sendMessageTitle?: string;
  /** 会话来源，open-type="contact"时有效 */
  sessionFrom?: string;
  /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 */
  showMessageCard?: boolean;
  /** 按钮标签id */
  tId?: string;
}

export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void;
}
