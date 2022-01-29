/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
export interface TdTextareaProps {
    /**
     * 键盘弹起时，是否自动上推页面
     * @default true
     */
    adjustPosition?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 自动聚焦，拉起键盘
     * @default false
     */
    autofocus?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 是否自动增高，值为 autosize 时，style.height 不生效
     * @default false
     */
    autosize?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 点击键盘右下角按钮时是否保持键盘不收起点
     * @default false
     */
    confirmHold?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 设置键盘右下角按钮的文字，仅在 type='text'时生效
     * @default done
     */
    confirmType?: {
        type: StringConstructor;
        value?: 'send' | 'search' | 'next' | 'go' | 'done';
        required?: boolean;
    };
    /**
     * 是否禁用文本框
     * @default false
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于表示组件外层元素、输入框、占位符、标签名等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-textarea', 't-class-placeholder', 't-class-name'];
        required?: boolean;
    };
    /**
     * 自动聚焦
     * @default false
     */
    focus?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 左侧文本
     */
    label?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度
     */
    maxcharacter?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 用户最多可以输入的字符个数
     */
    maxlength?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    /**
     * 占位符
     */
    placeholder?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 文本框值
     * @default ''
     */
    value?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
}
