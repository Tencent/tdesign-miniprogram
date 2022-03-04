import { SuperComponent } from '../common/src/index';
export default class Divider extends SuperComponent {
    externalClasses: string[];
    options: {
        addGlobalClass: boolean;
        multipleSlots: boolean;
    };
    /**
     * 组件的属性列表
     */
    properties: import("./type").TdDividerProps;
    /**
     * 组件的初始数据
     */
    data: {
        prefix: string;
        classPrefix: string;
    };
}
