import { SuperComponent } from '../../../components/common/src/index';
export default class ChatSender extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdChatSenderProps;
    data: {
        classPrefix: string;
        scrollViewTop: number;
        focusFlag: boolean;
        isSending: boolean;
        inputStyle: string;
        originalMarginBottom: number;
        files: any[];
        uploadPlacement: string;
        uploadConfig: {
            uploadCamera: {
                iconClass: string;
                text: string;
                handler: string;
                handlerArg: string;
            };
            uploadImage: {
                iconClass: string;
                text: string;
                handler: string;
                handlerArg: string;
            };
            uploadAttachment: {
                iconClass: string;
                text: string;
                handler: string;
                handlerArg: string;
            };
        };
        uploadNames: any[];
    };
    observers: {
        fileList(newVal: any): void;
        renderPresets(newVal: any): void;
    };
    methods: {
        onkeyboardheightchange(e: any): void;
        handleSendClick(e: any): void;
        handleOutsideClick(): void;
        sendClick(e: any): void;
        handleStop(e: any): void;
        handlerClick(): void;
        focusFn(e: any): void;
        blurFn(e: any): void;
        textChange(e: any): void;
        handleUploadClick(e: any): void;
        handleFileClick(e: any): void;
        handleFileRemove(e: any): void;
        handleFileAdd(): void;
        handleImageUpload(e: any): Promise<void>;
        handleWechatFileUpload(e: any): Promise<void>;
        handleUploadEntryClick(e: any): void;
    };
    lifetimes: {
        created(): void;
        attached(): void;
        detached(): void;
    };
}
