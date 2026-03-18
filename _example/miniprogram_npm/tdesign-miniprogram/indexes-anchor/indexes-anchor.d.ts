import { RelationsOptions, SuperComponent } from '../common/src/index';
export default class IndexesAnchor extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdIndexesAnchorProps;
    data: {
        prefix: string;
        classPrefix: string;
        anchorStyle: string;
        sticky: boolean;
        active: boolean;
    };
    relations: RelationsOptions;
}
