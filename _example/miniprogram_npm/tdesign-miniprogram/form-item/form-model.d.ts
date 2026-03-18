import { isDate, isEmail, isURL } from '../common/validator';
import { CustomValidator, ValueType, FormRule, AllValidateResult, Data } from '../form/type';
export declare const ValidateStatus: {
    TO_BE_VALIDATED: number;
    SUCCESS: number;
    FAIL: number;
};
export declare function isValueEmpty(val: any): boolean;
declare const VALIDATE_MAP: {
    date: typeof isDate;
    url: typeof isURL;
    email: typeof isEmail;
    required: (val: ValueType) => boolean;
    whitespace: (val: ValueType) => boolean;
    boolean: (val: ValueType) => boolean;
    max: (val: ValueType, num: number) => boolean;
    min: (val: ValueType, num: number) => boolean;
    len: (val: ValueType, num: number) => boolean;
    number: (val: ValueType) => boolean;
    enum: (val: ValueType, strs: Array<string>) => boolean;
    idcard: (val: ValueType) => boolean;
    telnumber: (val: ValueType) => boolean;
    pattern: (val: ValueType, regexp: RegExp | string) => boolean;
    validator: (val: ValueType, validate: CustomValidator, context?: {
        formData: Data;
        name: string;
    }) => ReturnType<CustomValidator>;
};
export declare type ValidateFuncType = (typeof VALIDATE_MAP)[keyof typeof VALIDATE_MAP];
export declare function validateOneRule(value: ValueType, rule: FormRule, context?: {
    formData: Data;
    name: string;
}): Promise<AllValidateResult>;
export declare function validate(value: any, rules: any[], context?: {
    formData: Data;
    name: string;
}): Promise<any[]>;
export declare const validateRules: typeof validate;
export {};
