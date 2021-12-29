import { SuperComponent } from '../common/src/index';
import { MediaType, UploadMpConfig, UploadFile } from './type';
export default class Upload extends SuperComponent {
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    data: {
        classPrefix: string;
        prefix: string;
        current: boolean;
        proofs: any[];
        customFiles: UploadFile[];
        customLimit: number;
        mediaType: MediaType[];
        config: UploadMpConfig;
        files: UploadFile[];
        max: number;
        sizeLimit: number;
        requestMethod: any;
        gridItemStyle: string;
        column: number;
    };
    properties: import("./type").TdUploadProps;
    observers: {
        files(files: UploadFile): void;
        max(max: any): void;
        gridConfig(): void;
    };
    onProofTap(e: any): void;
    ready(): void;
    handleLimit(customFiles: UploadFile[], max: number): void;
    uploadFiles(files: UploadFile[]): Promise<unknown>;
    startUpload(files: UploadFile[]): Promise<unknown>;
    /** 选择图片 */
    chooseImg(): void;
    /** 选择视频 */
    chooseVideo(): void;
    getRandFileName(filePath: any): string;
    closePop(): void;
    onAddTap(): void;
    onChooseImage(): void;
    onChooseVideo(): void;
    onDelete(e: any): void;
    deleteHandle(index: number): void;
    updateGrid(): void;
}
