import { SuperComponent } from '../common/src/index';
export default class CheckTag extends SuperComponent {
    data: {
        classPrefix: string;
        classBasePrefix: string;
    };
    properties: import("./type").TdCheckTagProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    methods: {
        onClickClose(e: WechatMiniprogram.BaseEvent): void;
        handleChange(): void;
    };
}
