import { SuperComponent } from '../common/src/index';
export default class TabPanel extends SuperComponent {
    relations: {
        './tabs': {
            type: "ancestor";
        };
    };
    properties: import("./type").TdTabPanelProps;
    data: {
        prefix: string;
        classPrefix: string;
        active: boolean;
        hide: boolean;
    };
    observers: {
        label(): void;
    };
    getComputedName(): string;
    update(): void;
    render(active: Boolean, parent: any): void;
}
