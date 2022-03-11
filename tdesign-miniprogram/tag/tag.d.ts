import { SuperComponent } from '../common/src/index';
export default class Tag extends SuperComponent {
    data: {
        classPrefix: string;
        classBasePrefix: string;
    };
    externalClasses: string[];
    properties: import("./type").TdTagProps;
    methods: {
        hangleClose(e: WechatMiniprogram.BaseEvent): void;
    };
}
