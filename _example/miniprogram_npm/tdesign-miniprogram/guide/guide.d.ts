/// <reference types="miniprogram-api-typings" />
import { SuperComponent } from '../common/src/index';
import { TdGuideProps, GuideStep } from './type';
export interface GuideProps extends TdGuideProps {
}
export { GuideStep };
export default class Guide extends SuperComponent {
    externalClasses: string[];
    properties: TdGuideProps;
    options: WechatMiniprogram.Component.ComponentOptions;
    data: {
        prefix: string;
        classPrefix: string;
        visible: boolean;
        _current: number;
        _steps: any[];
        buttonProps: {};
        referenceStyle: string;
        popoverStyle: string;
        title: string;
        body: string;
        nonOverlay: boolean;
        modeType: string;
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        'steps, current, showOverlay'(): Promise<void>;
    };
    lifetimes: {
        created(): void;
        attached(): void;
    };
    methods: {
        init(): Promise<any>;
        placementOffset({ placement, offset }: GuideStep, place: CSSStyleDeclaration): Promise<string>;
        buttonProps(step: any, mode: any): {
            skipButton: any;
            nextButton: any;
            backButton: any;
            finishButton: any;
        };
        renderCounter(): any;
        buttonContent(button: any): string;
        onTplButtonTap(e: any): void;
        getPlacement(): {
            center: (rect: any, place: any, offset: any) => {
                top: string;
                left: string;
            };
            bottom: (rect: any, place: any, offset: any) => {
                top: string;
                left: string;
            };
            'bottom-left': (rect: any, place: any, offset: any) => {
                top: string;
                left: string;
            };
            'bottom-right': (rect: any, place: any, offset: any) => {
                top: string;
                right: string;
            };
            left: (rect: any, place: any, offset: any) => {
                top: string;
                right: string;
            };
            'left-top': (rect: any, place: any, offset: any) => {
                top: string;
                right: string;
            };
            'left-bottom': (rect: any, place: any, offset: any) => {
                top: string;
                right: string;
            };
            right: (rect: any, place: any, offset: any) => {
                top: string;
                left: string;
            };
            'right-top': (rect: any, place: any, offset: any) => {
                top: string;
                left: string;
            };
            'right-bottom': (rect: any, place: any, offset: any) => {
                top: string;
                left: string;
            };
            top: (rect: any, place: any, offset: any) => {
                top: string;
                left: string;
            };
            'top-left': (rect: any, place: any, offset: any) => {
                top: string;
                left: string;
            };
            'top-right': (rect: any, place: any, offset: any) => {
                top: string;
                right: string;
            };
        };
    };
}
