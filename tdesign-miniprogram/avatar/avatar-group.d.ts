import { SuperComponent } from '../common/src/index';
export default class AvatarGroup extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdAvatarGroupProps;
    data: {
        prefix: string;
        classPrefix: string;
        hasChild: boolean;
        length: number;
    };
    options: {
        multipleSlots: boolean;
    };
    relations: {
        './avatar': {
            type: "descendant";
            linked(this: AvatarGroup): void;
        };
    };
    ready(): void;
    methods: {
        /**
         * @param children avatar-group的所有avatar子节点
         * @param hasChild 是否为子节点（slot插槽以及默认的avatar折叠元素没有parent）
         * @description
         */
        handleHasChild(children: any, hasChild: any): void;
        /**
         *
         * @param max 最大avatar数量
         * @param children avatar-group的所有avatar子节点
         * @param f handleChildMax函数
         * @description 判断是否传入自定义折叠元素
         */
        handleChildSlot(max: any, children: any, f: any): void;
        /**
         *
         * @param max 最大avatar数量
         * @param children avatar-group的所有avatar子节点
         * @param isSlotElement 是否传入自定义折叠元素（res[0].width不为空表示传入）
         * @description avatar-group的最大数量处理
         *              + 如果未传入自定义折叠元素，当超出max数量时，显示默认折叠元素
         */
        handleChildMax(max: any, children: any, isSlotElement: any): void;
        /**
         * @param size 尺寸，优先级低于avatar自身设置的size
         * @param children avatar-group的所有avatar子节点
         * @description 更新avatar节点的size属性
         */
        handleChildSize(size: any, children: any): void;
        /**
         * @param cascading 层叠关系
         * @param children avatar-group的所有avatar子节点
         * @description 右侧图片在上可用css直接实现，左侧图片在上，通过设置z-index实现
         */
        handleChildCascading(cascading: any, children: any): void;
    };
}
