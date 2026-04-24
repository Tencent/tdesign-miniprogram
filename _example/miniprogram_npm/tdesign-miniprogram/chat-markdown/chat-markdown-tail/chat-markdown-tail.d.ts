import { SuperComponent, ComponentsOptionsType } from '../../../../components/common/src/index';
export default class ChatMarkdownTail extends SuperComponent {
    options: ComponentsOptionsType;
    properties: {
        content: {
            type: StringConstructor;
            value: string;
        };
    };
    data: {
        classPrefix: string;
    };
}
