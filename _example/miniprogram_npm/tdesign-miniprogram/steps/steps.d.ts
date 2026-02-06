import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Steps extends SuperComponent {
    relations: RelationsOptions;
    externalClasses: string[];
    properties: import("./type").TdStepsProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    data: {
        prefix: string;
        classPrefix: string;
    };
    observers: {
        'current, theme, sequence'(): void;
    };
    methods: {
        updateChildren(): void;
        updateLastChid(): void;
        handleClick(index: any): void;
    };
}
