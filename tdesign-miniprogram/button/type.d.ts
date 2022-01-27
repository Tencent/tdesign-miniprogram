/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
import { SizeEnum } from '../common/common';
export interface TdButtonProps {
    /**
     * 是否为块级元素
     * @default false
     */
    block?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 按钮内容
     */
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 是否禁用按钮
     * @default false
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
        required?: boolean;
    };
    /**
     * 是否为幽灵按钮（镂空按钮）
     * @default false
     */
    ghost?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 图标名称
     * @default ''
     */
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 是否显示为加载状态
     * @default false
     */
    loading?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 按钮形状，有二种：方形、圆角方形
     * @default square
     */
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round';
        required?: boolean;
    };
    /**
     * 组件尺寸
     * @default medium
     */
    size?: {
        type: StringConstructor;
        value?: SizeEnum;
        required?: boolean;
    };
    /**
     * 组件风格，依次为品牌色、危险色
     */
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'primary' | 'danger';
        required?: boolean;
    };
    /**
     * 同小程序的 formType
     */
    type?: {
        type: StringConstructor;
        value?: 'submit' | 'reset';
        required?: boolean;
    };
    /**
     * 按钮形式，基础、线框、文字
     * @default base
     */
    variant?: {
        type: StringConstructor;
        value?: 'base' | 'outline' | 'text';
        required?: boolean;
    };
    /**
     * 微信开放能力 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
     */
    openType?: {
        type: StringConstructor;
        value?: 'contact' | 'share' | 'getPhoneNumber' | 'getUserInfo' | 'launchApp' | 'openSetting' | 'feedback';
        required?: boolean;
    };
    /**
     * 指定是否阻止本节点的祖先节点出现点击态
     * @default false
     */
    hoverStopPropagation?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 按住后多久出现点击态，单位毫秒
     * @default 20
     */
    hoverStartTime?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 手指松开后点击态保留时间，单位毫秒
     * @default 70
     */
    hoverStayTime?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
     * @default en
     */
    lang?: {
        type: StringConstructor;
        value?: 'en' | 'zh_CN' | 'zh_TW';
        required?: boolean;
    };
    /**
     * 会话来源，open-type=contact时有效
     * @default ''
     */
    sessionFrom?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 会话内消息卡片标题，open-type=contact时有效
     * @default 当前标题
     */
    sendMessageTitle?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 会话内消息卡片点击跳转小程序路径，open-type=contact时有效
     * @default 当前分享路径
     */
    sendMessagePath?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 会话内消息卡片图片，open-type=contact时有效
     * @default 截图
     */
    sendMessageImg?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
     * @default ''
     */
    appParameter?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示可能要发送的小程序提示，用户点击后可以快速发送小程序消息，open-type=contact时有效
     * @default false
     */
    showMessageCard?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
}
