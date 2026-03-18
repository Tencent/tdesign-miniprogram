import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class FormItem extends SuperComponent {
    externalClasses: string[];
    behaviors: string[];
    properties: import("./type").TdFormItemProps;
    data: {
        prefix: string;
        classPrefix: string;
        formClass: string;
        formItemClass: string;
        labelClass: string;
        errorClasses: string;
        errorList: any[];
        successList: any[];
        verifyStatus: number;
        needResetField: boolean;
        resetValidating: boolean;
        formRules: any[];
        form: {};
        colon: boolean;
        innerShowErrorMessage: boolean;
    };
    relations: RelationsOptions;
    lifetimes: {
        ready(): void;
        detached(): void;
    };
    methods: {
        calcErrorClasses(errorList?: any): string;
        scrollIntoView(type: string, distanceTop?: number): void;
        initFormItem(): void;
        setInitialValue(): void;
        getFormData(): any;
        getValue(): any;
        getRules(): any;
        validate(data: any, trigger: any, showErrorMessage: any): Promise<{
            [x: number]: boolean;
        }>;
        validateOnly(trigger: any): Promise<any>;
        analysisValidateResult(results: any): {
            errorList: any;
            successList: any;
            resultList: any;
        };
        updateValidateStatus(analysis: any): void;
        clearValidate(): void;
        resetField(): void;
        setValidateMessage(validateMessage: any): void;
    };
}
