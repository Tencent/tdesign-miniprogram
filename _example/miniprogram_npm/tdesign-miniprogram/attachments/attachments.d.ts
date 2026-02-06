import { SuperComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import { TdAttachmentsProps } from './type';
export interface AttachmentsProps extends TdAttachmentsProps {
}
export default class Attachments extends SuperComponent {
    options: ComponentsOptionsType;
    properties: {
        inChat: {
            type: BooleanConstructor;
            value: boolean;
        };
        addable?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        imageViewer?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        items: {
            type: ArrayConstructor;
            value?: import("./type").FileItem[];
            required?: boolean;
        };
        removable?: {
            type: BooleanConstructor;
            value?: boolean;
        };
    };
    data: {
        classPrefix: string;
        files: any[];
    };
    observers: {
        items(): void;
    };
    methods: {
        onFileWrapTap(e: any): void;
        onRemoveTap(e: any): void;
        handleFileClick(item: any): void;
        handleRemove(item: any, index: any): void;
        renderDesc(item: any): string;
        renderIcon(item: any): any;
        renderFileType(item: any): any;
        renderExtension(item: any): any;
        setFiles(): void;
    };
    lifetimes: {
        created(): void;
        attached(): void;
        detached(): void;
    };
}
