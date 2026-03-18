import { FormErrorMessage } from '../form/index';
import { ImageProps } from '../image/index';
export interface TdConfigProviderProps {
    globalConfig?: {
        type: ObjectConstructor;
        value?: GlobalConfigProvider;
    };
    themeVars?: {
        type: ObjectConstructor;
        value?: object;
    };
}
export interface GlobalConfigProvider {
    actionSheet?: ActionSheetConfig;
    calendar?: CalendarConfig;
    cascader?: CascaderConfig;
    classPrefix?: string;
    dateTimePicker?: DateTimePickerConfig;
    dropdownMenu?: DropdownMenuConfig;
    guide?: GuideConfig;
    picker?: PickerConfig;
    pullDownRefresh?: PullDownRefreshConfig;
    qrcode?: QRCodeConfig;
    rate?: RateConfig;
    tabBar?: TabBarConfig;
    upload?: UploadConfig;
}
export interface ActionSheetConfig {
    cancel?: string;
}
export interface AttachmentsConfig {
    status?: {
        pending: string;
        fail: string;
    };
}
export interface CalendarConfig {
    confirm?: string;
    monthTitle?: string;
    months?: string[];
    title?: string;
    weekdays?: string[];
}
export interface CascaderConfig {
    placeholder?: string;
    title?: string;
}
export interface ChatActionbarConfig {
    actionBar?: {
        replay: string;
        copy: string;
        good: string;
        bad: string;
        share: string;
        quote: string;
    };
}
export interface ChatSenderConfig {
    placeholder?: string;
    sendText?: string;
    stopText?: string;
}
export interface ChatThinkingConfig {
    status?: {
        pending: string;
        complete: string;
        stop: string;
    };
}
export interface DateTimePickerConfig {
    cancel?: string;
    confirm?: string;
    dateLabel?: string;
    format?: string;
    hourLabel?: string;
    minuteLabel?: string;
    monthLabel?: string;
    secondLabel?: string;
    title?: string;
    yearLabel?: string;
}
export interface DropdownMenuConfig {
    confirm?: string;
    reset?: string;
}
export interface FormConfig {
    colonText?: string;
    errorMessage?: FormErrorMessage;
    requiredMark?: boolean;
    requiredMarkPosition?: 'left' | 'right';
}
export interface GuideConfig {
    back?: string;
    finish?: string;
    next?: string;
    skip?: string;
}
export interface ImageConfig {
    errorText?: string;
    loadingText?: string;
    replaceImageSrc?: (params: ImageProps) => string;
}
export interface InputConfig {
    placeholder?: string;
}
export interface PickerConfig {
    cancel?: string;
    confirm?: string;
}
export interface PullDownRefreshConfig {
    loadingTexts?: string[];
}
export interface QRCodeConfig {
    expiredText?: string;
    refreshText?: string;
    scannedText?: string;
}
export interface RateConfig {
    noValueText?: string;
    valueText?: string;
}
export interface TabBarConfig {
    haveMoreNewsAriaLabel?: string;
    haveNewsAriaLabel?: string;
    moreNewsAriaLabel?: string;
    newsAriaLabel?: string;
}
export interface UploadConfig {
    progress?: UploadConfigProgress;
}
export interface UploadConfigProgress {
    failText?: string;
    successText?: string;
    uploadingText?: string;
    waitingText?: string;
}
