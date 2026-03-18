import { SuperComponent, ComponentsOptionsType } from '../../../components/common/src/index';
export default class ChatLoading extends SuperComponent {
    options: ComponentsOptionsType;
    properties: import("./type").TdChatLoadingProps;
    data: {
        classPrefix: string;
    };
}
