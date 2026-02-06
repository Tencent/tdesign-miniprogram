/// <reference types="miniprogram-api-typings" />
import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class TabPanel extends SuperComponent {
    externalClasses: string[];
    relations: RelationsOptions;
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdTabPanelProps;
    data: {
        prefix: string;
        classPrefix: string;
        active: boolean;
        hide: boolean;
        id: string;
        hasActivated: boolean;
    };
    setId(id: any): void;
    observers: {
        'label, badgeProps, disabled, icon, panel, value, lazy'(): void;
    };
    getComputedName(): string;
    update(): void;
    render(active: Boolean, parent: WechatMiniprogram.Component.TrivialInstance): void;
}
