import { SuperComponent } from '../common/src/index';
export default class extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdResultProps;
    data: {
        prefix: string;
        classPrefix: string;
    };
    lifetimes: {
        ready(): void;
    };
    observers: {
        'icon, theme'(): void;
    };
    methods: {
        initIcon(): void;
    };
}
