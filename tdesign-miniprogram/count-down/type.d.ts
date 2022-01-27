/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdCountDownProps {
    /**
     * 是否自动开始倒计时
     * @default true
     */
    autoStart?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 最终倒计时的展示内容，值为'default'时使用默认的格式，否则使用自定义样式插槽
     * @default 'default'
     */
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
     * @default HH:mm:ss
     */
    format?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 是否开启毫秒级渲染
     * @default false
     */
    millisecond?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 倒计时时长，单位毫秒
     */
    time: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
}
