import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Form extends SuperComponent {
    behaviors: string[];
    externalClasses: string[];
    properties: import("./type").TdFormProps<import("./type").Data>;
    options: {
        multipleSlots: boolean;
    };
    relations: RelationsOptions;
    data: {
        prefix: string;
        classPrefix: string;
        initialData: {};
        fields: any[];
    };
    observers: {
        'labelAlign, labelWidth, colon, contentAlign, requiredMark, requiredMarkPosition, showErrorMessage, rules'(): void;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        initFormData(): void;
        getChildren(): any;
        syncLastChildFlags(): void;
        validate(): Promise<any>;
        scrollToError(validateResult: any): void;
        validateOnly(params: any): Promise<any>;
        formatValidateResult(validateResultList: any): {};
        getFirstError(validateResult: any): any;
        submit(): Promise<any>;
        getValidate(): Promise<false | {
            validateResult: any;
            firstError: any;
        }>;
        getEmptyValue(name: any): {};
        reset(): void;
        clearValidate(fields: any): void;
        setValidateMessage(validateMessage: any): void;
        onSubmit(): void;
        onReset(): void;
    };
}
