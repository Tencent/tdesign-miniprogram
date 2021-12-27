import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Steps extends SuperComponent {
    relations: RelationsOptions;
    externalClasses: string[];
    properties: import("./type").TdStepsProps;
    data: {
        classPrefix: string;
    };
    methods: {
        updateChildren(): void;
        handleClick(index: any): void;
    };
}
