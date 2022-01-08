import { SuperComponent } from '../common/src/index';
export default class CheckTag extends SuperComponent {
    data: {
        classPrefix: string;
        classBasePrefix: string;
    };
    properties: import("./type").TdCheckTagProps;
    methods: {
        onClickClose(e: WechatMiniprogram.BaseEvent): void;
    };
}
