import { SuperComponent, ComponentsOptionsType } from '../../../../components/common/src/index';
export default class ChatMarkdownCode extends SuperComponent {
    options: ComponentsOptionsType;
    properties: {
        node: {
            type: ObjectConstructor;
            value: () => {};
        };
    };
    data: {
        classPrefix: string;
    };
}
