import { SuperComponent } from '../common/src/index';
export default class Tabs extends SuperComponent {
    behaviors: string[];
    externalClasses: string[];
    relations: {
        './tab-panel': {
            type: "descendant";
            linked(target: any): void;
            unlinked(): void;
        };
    };
    properties: import("./type").TdTabsProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        value(name: any): void;
        animation(v: any): void;
    };
    data: {
        prefix: string;
        classPrefix: string;
        tabs: any[];
        currentIndex: number;
        trackStyle: string;
        isScrollX: boolean;
        isScrollY: boolean;
        direction: string;
        animate: {
            duration: number;
        };
    };
    created(): void;
    attached(): void;
    updateTabs(): void;
    setCurrentIndexByName(name: any): void;
    setCurrentIndex(index: number): void;
    getCurrentName(): any;
    setTrack(color?: string): void;
    onTabTap(event: any): void;
    onTouchStart(event: any): void;
    onTouchMove(event: any): void;
    onTouchEnd(): void;
    changeIndex(index: any): void;
    getAvailableTabIndex(deltaX: number): number;
}
