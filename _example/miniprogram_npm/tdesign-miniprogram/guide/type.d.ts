/// <reference types="miniprogram-api-typings" />
import { ButtonProps } from '../button/index';
export interface TdGuideProps {
    backButtonProps?: {
        type: ObjectConstructor;
        value?: ButtonProps;
    };
    counter?: {
        type: StringConstructor;
        value?: string | ((params: {
            total: number;
            current: number;
        }) => string);
    };
    current?: {
        type: NumberConstructor;
        value?: number;
    };
    defaultCurrent?: {
        type: NumberConstructor;
        value?: number;
    };
    finishButtonProps?: {
        type: ObjectConstructor;
        value?: ButtonProps;
    };
    hideBack?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    hideCounter?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    hideSkip?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    highlightPadding?: {
        type: NumberConstructor;
        value?: number;
    };
    mode?: {
        type: StringConstructor;
        value?: 'popover' | 'dialog';
    };
    nextButtonProps?: {
        type: ObjectConstructor;
        value?: ButtonProps;
    };
    showOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    skipButtonProps?: {
        type: ObjectConstructor;
        value?: ButtonProps;
    };
    steps?: {
        type: ArrayConstructor;
        value?: Array<GuideStep>;
    };
    usingCustomNavbar?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}
export interface GuideStep {
    backButtonProps?: ButtonProps;
    body?: string;
    element: StepElement;
    finishButtonProps?: ButtonProps;
    highlightPadding?: number;
    mode?: 'popover' | 'dialog';
    nextButtonProps?: ButtonProps;
    offset?: Array<string | number>;
    placement?: StepPopoverPlacement;
    showOverlay?: boolean;
    skipButtonProps?: ButtonProps;
    title?: string;
}
export declare type StepElement = () => Promise<WechatMiniprogram.BoundingClientRectCallbackResult>;
export declare type StepPopoverPlacement = 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' | 'center';
