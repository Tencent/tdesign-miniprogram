import { SuperComponent } from '../common/src/index';
import { UploadMpConfig, UploadFile } from './type';
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
        config: UploadMpConfig;
        files: UploadFile[];
        max: number;
        sizeLimit: number;
        requestMethod: any;
        gridItemStyle: string;
        column: number;
    };
    properties: import("./type").TdUploadProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
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
    /** 选择媒体素材 */
    chooseMedia(mediaType: any): void;
    /**
     * 由于小程序暂时在ios上不支持返回上传文件的fileType，这里用文件的后缀来判断
     * @param mediaType
     * @param tempFilePath
     * @returns string
     * @link https://developers.weixin.qq.com/community/develop/doc/00042820b28ee8fb41fc4d0c254c00
     */
    getFileType(mediaType: string[], tempFilePath: string, fileType?: string): string;
    getRandFileName(filePath: any): string;
    closePop(): void;
    onAddTap(): void;
    onChooseImage(): void;
    onChooseVideo(): void;
    onDelete(e: any): void;
    deleteHandle(index: number): void;
    updateGrid(): void;
}
