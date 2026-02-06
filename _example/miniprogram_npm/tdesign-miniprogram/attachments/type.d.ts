export interface TdAttachmentsProps {
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
        value?: FileItem[];
        required?: boolean;
    };
    removable?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface FileItem {
    fileType: 'image' | 'video' | 'audio' | 'pdf' | 'doc' | 'ppt' | 'txt';
    name: string;
    url: string;
    size: number;
    status?: 'success' | 'fail' | 'pending' | 'error';
    progress?: number;
    errorMessage?: string;
    fileIcon?: string;
    width?: number;
    height?: number;
    mode?: 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'scaleToFill';
}
