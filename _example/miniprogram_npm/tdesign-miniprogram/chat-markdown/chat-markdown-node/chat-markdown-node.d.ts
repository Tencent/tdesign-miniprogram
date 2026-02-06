import { SuperComponent, ComponentsOptionsType } from '../../../../components/common/src/index';
export default class ChatMarkdownNode extends SuperComponent {
    options: ComponentsOptionsType;
    properties: {
        nodes: {
            type: ArrayConstructor;
            value: () => any[];
        };
    };
    data: {
        classPrefix: string;
    };
    methods: {
        linkClick(e: any): void;
        getCareMarkdown(): any;
        handleClick(event: any, type: any, token: any): void;
    };
    lifetimes: {
        created(): void;
        attached(): void;
        detached(): void;
    };
}
