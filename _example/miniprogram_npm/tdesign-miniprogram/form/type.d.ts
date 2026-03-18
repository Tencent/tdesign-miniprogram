import { IsEmailOptions } from 'validator/es/lib/isEmail';
import { IsURLOptions } from 'validator/es/lib/isURL';
export interface TdFormProps<FormData extends Data = Data> {
    colon?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    data?: {
        type: ObjectConstructor;
        value?: FormData;
    };
    errorMessage?: {
        type: ObjectConstructor;
        value?: FormErrorMessage;
    };
    labelAlign?: {
        type: StringConstructor;
        value?: 'left' | 'right' | 'top';
    };
    labelWidth?: {
        type: null;
        value?: string | number;
    };
    requiredMark?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    requiredMarkPosition?: {
        type: StringConstructor;
        value?: 'left' | 'right';
    };
    resetType?: {
        type: StringConstructor;
        value?: 'empty' | 'initial';
    };
    rules?: {
        type: ObjectConstructor;
        value?: FormRules<FormData>;
    };
    scrollToFirstError?: {
        type: StringConstructor;
        value?: '' | 'smooth' | 'auto';
    };
    showErrorMessage?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    submitWithWarningMessage?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface FormInstanceFunctions<FormData extends Data = Data> {
    clearValidate: {
        type: undefined;
        value?: (fields?: Array<keyof FormData>) => void;
        required?: boolean;
    };
    reset: {
        type: undefined;
        value?: (params?: FormResetParams<FormData>) => void;
        required?: boolean;
    };
    setValidateMessage: {
        type: undefined;
        value?: (message: FormValidateMessage<FormData>) => void;
        required?: boolean;
    };
    submit: {
        type: undefined;
        value?: (params?: {
            showErrorMessage?: boolean;
        }) => void;
        required?: boolean;
    };
    validate: {
        type: undefined;
        value?: (params?: FormValidateParams) => Promise<FormValidateResult<FormData>>;
        required?: boolean;
    };
}
export interface FormRule {
    boolean?: boolean;
    date?: boolean | IsDateOptions;
    email?: boolean | IsEmailOptions;
    enum?: Array<string>;
    idcard?: boolean;
    len?: number | boolean;
    max?: number | boolean;
    message?: string;
    min?: number | boolean;
    number?: boolean;
    pattern?: RegExp | string;
    required?: boolean;
    telnumber?: boolean;
    trigger?: ValidateTriggerType;
    type?: 'error' | 'warning';
    url?: boolean | IsURLOptions;
    validator?: CustomValidator;
    whitespace?: boolean;
}
export interface FormErrorMessage {
    boolean?: string;
    date?: string;
    enum?: string;
    idcard?: string;
    len?: string;
    max?: string;
    min?: string;
    number?: string;
    pattern?: string;
    required?: string;
    telnumber?: string;
    url?: string;
    validator?: string;
    whitespace?: string;
}
export declare type FormRules<T extends Data = any> = {
    [field in keyof T]?: Array<FormRule>;
};
export interface FormResetParams<FormData> {
    type?: 'initial' | 'empty';
    fields?: Array<keyof FormData>;
}
export declare type FormValidateMessage<FormData> = {
    [field in keyof FormData]: FormItemValidateMessage[];
};
export interface FormItemValidateMessage {
    type: 'warning' | 'error';
    message: string;
}
export interface FormValidateParams {
    fields?: Array<string>;
    showErrorMessage?: boolean;
    trigger?: ValidateTriggerType;
}
export declare type ValidateTriggerType = 'blur' | 'change' | 'submit' | 'all';
export declare type FormValidateResult<T> = boolean | ValidateResultObj<T>;
export declare type ValidateResultObj<T> = {
    [key in keyof T]: boolean | ValidateResultList;
};
export declare type ValidateResultList = Array<AllValidateResult>;
export declare type AllValidateResult = CustomValidateObj | ValidateResultType;
export interface ValidateResultType extends FormRule {
    result: boolean;
}
export declare type Data = {
    [key: string]: any;
};
export interface IsDateOptions {
    format: string;
    strictMode: boolean;
    delimiters: string[];
}
export declare type CustomValidator = (val: ValueType, context?: {
    formData: Data;
    name: string;
}) => CustomValidateResolveType | Promise<CustomValidateResolveType>;
export declare type CustomValidateResolveType = boolean | CustomValidateObj;
export interface CustomValidateObj {
    result: boolean;
    message: string;
    type?: 'error' | 'warning' | 'success';
}
export declare type ValueType = any;
