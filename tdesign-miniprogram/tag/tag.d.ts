import { SuperComponent } from '../common/src/index';
export default class Tag extends SuperComponent {
    data: {
        classPrefix: string;
        classBasePrefix: string;
    };
    properties: import("./type").TdTagProps;
    methods: {
        onClickClose(e: WechatMiniprogram.BaseEvent): void;
    };
}
