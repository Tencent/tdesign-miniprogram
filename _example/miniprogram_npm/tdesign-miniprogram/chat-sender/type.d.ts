import { AttachmentsProps, FileItem } from '../attachments/index';
export interface TdChatSenderProps {
    adjustPosition?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    attachmentsProps?: {
        type: ObjectConstructor;
        value?: AttachmentsProps;
    };
    autoRiseWithKeyboard?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    fileList?: {
        type: ArrayConstructor;
        value?: FileItem[];
    };
    loading?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    placeholder?: {
        type: StringConstructor;
        value?: string;
    };
    renderPresets?: {
        type: ArrayConstructor;
        value?: ChatActionButtons;
    };
    textareaProps?: {
        type: null;
        value?: boolean | object;
    };
    value?: {
        type: StringConstructor;
        value?: string;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export declare type ChatActionButtons = Array<ChatActionButton>;
export declare type ChatActionButton = UploadButton | SendButton;
export interface UploadButton {
    name: 'upload';
    presets: string[];
    status?: string;
}
export interface SendButton {
    name: 'send';
    type: 'icon' | 'text';
}
