import { SuperComponent } from '../common/src/index';
export default class Avatar extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdAvatarProps;
    data: {
        prefix: string;
        classPrefix: string;
        isShow: boolean;
        zIndex: number;
        isChild: boolean;
    };
    relations: {
        './avatar-group': {
            type: "ancestor";
            linked(this: Avatar, target: WechatMiniprogram.Component.TrivialInstance): void;
        };
    };
    methods: {
        /**
         * @description avatar-group子节点缩紧，avatar无
         * @param isChild 是否为avatar-group子节点
         */
        updateIsChild(isChild: any): void;
        /**
         * @description 控制avatar显隐
         */
        updateShow(): void;
        /**
         * @description 控制avatar尺寸
         */
        updateSize(size: any): void;
        /**
         * @description 控制avatar左侧在上/右侧在上
         */
        updateCascading(zIndex: any): void;
    };
    onLoadError(e: any): void;
}
