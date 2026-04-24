/// <reference types="miniprogram-api-typings" />
import { SuperComponent } from '../common/src/index';
import TCalendar from '../common/shared/calendar/index';
import type { TCalendarValue } from '../common/shared/calendar/type';
import { TdCalendarProps } from './type';
declare type CalendarMonth = ReturnType<TCalendar['getMonths']>[number];
export interface CalendarProps extends TdCalendarProps {
}
export default class Calendar extends SuperComponent {
    behaviors: string[];
    externalClasses: string[];
    options: WechatMiniprogram.Component.ComponentOptions;
    properties: TdCalendarProps;
    data: {
        prefix: string;
        classPrefix: string;
        months: any[];
        scrollIntoView: string;
        innerConfirmBtn: {};
        realLocalText: {};
        currentMonth: {};
        actionButtons: {
            preYearBtnDisable: boolean;
            prevMonthBtnDisable: boolean;
            nextMonthBtnDisable: boolean;
            nextYearBtnDisable: boolean;
        };
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    lifetimes: {
        created(): void;
        ready(): void;
    };
    observers: {
        localeText(): void;
        globalConfig(): void;
        type(v: any): void;
        allowSameDay(v: any): void;
        confirmBtn(v: any): void;
        'firstDayOfWeek,minDate,maxDate'(firstDayOfWeek: any, minDate: any, maxDate: any): void;
        value(v: any): void;
        visible(v: any): void;
        format(v: any): void;
    };
    methods: {
        initialValue(): void;
        scrollIntoView(): void;
        getCurrentYearAndMonth(v: TCalendarValue): {
            year: number;
            month: number;
        };
        updateActionButton(value: Date): void;
        getCurrentMonth(newValue?: TCalendarValue, months?: CalendarMonth[]): {
            date: any;
            currentMonth: any[];
        };
        calcCurrentMonth(newValue?: TCalendarValue): void;
        calcMonths(newValue?: TCalendarValue): void;
        close(trigger: any): void;
        onVisibleChange(): void;
        handleClose(): void;
        handleSelect(e: any): void;
        onTplButtonTap(): void;
        toTime(val: any): any;
        onScroll(e: any): void;
        getCurrentDate(): any;
        handleSwitchModeChange(e: any): void;
    };
}
export {};
