import { SuperComponent } from '../../../components/common/src/index';
declare type VoiceInfo = {
    voicePath: string;
    voiceText: string;
    duration: number;
};
export default class ChatRecord extends SuperComponent {
    behaviors: string[];
    options: {
        multipleSlots: boolean;
    };
    properties: import("./type").TdChatRecordProps;
    data: {
        classPrefix: string;
        recordAuthSetting: boolean;
        recordAuthStatus: boolean;
        recordAuthDenied: boolean;
        showMask: boolean;
        activeBtnCancel: boolean;
        activeBtnSend: boolean;
        processStatus: "error" | "idle" | "recording" | "processing" | "confirm";
        interactStatus: "normal" | "release_cancel" | "release_convert";
        voiceInfo: VoiceInfo;
        translateResult: string;
        startTouch: {
            x: number;
            y: number;
        };
        isStarted: boolean;
        isManagerBusy: boolean;
        ignoreNextOnStop: boolean;
        managerRecording: boolean;
        waveList: number[];
    };
    private manager;
    methods: {
        clearStartRecordTimer(timer: number | null): void;
        initRecordManager(): void;
        getVoiceAuthSetting(): Promise<boolean>;
        requestRecordAuth(): Promise<void>;
        applyAuth(): Promise<boolean>;
        checkSystemMicPermission(): Promise<boolean>;
        showSystemMicGuide(): void;
        openVoiceSetting(): Promise<void>;
        onOpenSetting(e: WechatMiniprogram.OpenSettingSuccessCallbackResult): void;
        startRecord(e: WechatMiniprogram.TouchEvent): Promise<void>;
        touchmove(e: WechatMiniprogram.TouchEvent): void;
        stopRecord(): void;
        touchcancel(): void;
        cancelRecord(): void;
        convertToText(): void;
        sendVoice(): void;
        handleSendVoiceMsg(): void;
        handleCancelSend(): void;
        onTranslateInput(e: WechatMiniprogram.Input): void;
        resetState(): void;
    };
    lifetimes: {
        created(): void;
        attached(): void;
        detached(): void;
    };
}
export {};
