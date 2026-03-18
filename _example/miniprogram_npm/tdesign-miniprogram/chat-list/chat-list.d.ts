import { SuperComponent, ComponentsOptionsType } from '../../../components/common/src/index';
export default class Chat extends SuperComponent {
    options: ComponentsOptionsType;
    properties: {
        virtualList: {
            type: BooleanConstructor;
            value: boolean;
        };
        fragmentLen: {
            type: NumberConstructor;
            value: number;
        };
        animation?: {
            type: StringConstructor;
            value?: "skeleton" | "moving" | "gradient" | "dot";
        };
        data?: {
            type: ArrayConstructor;
            value?: import("./type").TdChatItemMeta[];
        };
        layout?: {
            type: StringConstructor;
            value?: "both" | "single";
        };
        reverse?: {
            type: BooleanConstructor;
            value?: boolean;
        };
    };
    data: {
        classPrefix: string;
        scrollViewTop: number;
        classes: any[];
        listClasses: any[];
        startIndex: number;
        endIndex: number;
    };
    observers: {
        data(): void;
    };
    methods: {
        setScrollTop(scrollTop?: number): void;
        scrollToBottom(): void;
        onScroll(e: any): void;
        handlerScrollToUpper(): void;
        handlerScrollToLower(): void;
        resetFragments(): void;
        addFragment(count?: number): void;
    };
    lifetimes: {
        created(): void;
    };
}
