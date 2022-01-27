import { SuperComponent } from '../common/src/index';
export default class CellGroup extends SuperComponent {
    externalClasses: string[];
    options: {
        addGlobalClass: boolean;
    };
    /**
     * 组件的属性列表
     */
    properties: import("./type").TdCellGroupProps;
    /**
     * 组件的初始数据
     */
    data: {
        classPrefix: string;
    };
}
