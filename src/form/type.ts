export interface Data {
  [key: string]: any;
}

// 基础类型定义
export type ValueType = any;

export type ValidateTriggerType = 'blur' | 'change' | 'all';

export interface IsDateOptions {
  format: string;
  strictMode: boolean;
  delimiters: string[];
}

export interface IsEmailOptions {
  allowUtf8LocalPart?: boolean;
  allowIpDomain?: boolean;
  domainSpecificValidation?: boolean;
  blacklistedChars?: string;
  hostBlacklist?: string[];
  hostWhitelist?: string[];
  allowLocal?: boolean;
  allowDisplayName?: boolean;
  requireDisplayName?: boolean;
  allowComment?: boolean;
  requireComment?: boolean;
}

export interface IsURLOptions {
  protocols?: string[];
  requireTld?: boolean;
  requireProtocol?: boolean;
  requireHost?: boolean;
  requirePort?: boolean;
  requireValidProtocol?: boolean;
  allowUnderscores?: boolean;
  allowTrailingDot?: boolean;
  allowProtocolRelativeUrls?: boolean;
  disallowAuth?: boolean;
}

export interface CustomValidateObj {
  result: boolean;
  message: string;
  type?: 'error' | 'warning' | 'success';
}

export type CustomValidateResolveType = boolean | CustomValidateObj;

export type CustomValidator = (val: ValueType) => CustomValidateResolveType | Promise<CustomValidateResolveType>;

export interface FormRule {
  /** 内置校验方法，校验值类型是否为布尔类型 */
  boolean?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 内置校验方法，校验值是否为日期格式 */
  date?: {
    type: BooleanConstructor | IsDateOptions;
    value?: boolean | IsDateOptions;
  };
  /** 内置校验方法，校验值是否为邮件格式 */
  email?: {
    type: BooleanConstructor | IsEmailOptions;
    value?: boolean | IsEmailOptions;
  };
  /** 内置校验方法，校验值是否属于枚举值中的值 */
  enum?: Array<string>;
  /** 内置校验方法，校验值是否为身份证号码 */
  idcard?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 内置校验方法，校验值固定长度 */
  len?: {
    type: NumberConstructor | BooleanConstructor;
    value?: number | boolean;
  };
  /** 内置校验方法，校验值最大长度 */
  max?: {
    type: NumberConstructor | BooleanConstructor;
    value?: number | boolean;
  };
  /** 校验未通过时呈现的错误信息 */
  message?: {
    type: StringConstructor;
    value?: string;
  };
  /** 内置校验方法，校验值最小长度 */
  min?: {
    type: NumberConstructor | BooleanConstructor;
    value?: number | boolean;
  };
  /** 内置校验方法，校验值是否为数字 */
  number?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 内置校验方法，校验值是否符合正则表达式匹配结果 */
  pattern?: {
    type: RegExpConstructor;
    value?: RegExp;
  };
  /** 内置校验方法，校验值是否已经填写 */
  required?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 校验触发方式 */
  trigger?: {
    type: StringConstructor;
    value?: 'change' | 'blur';
  };
  /** 校验未通过时呈现的错误信息类型 */
  type?: {
    type: StringConstructor;
    value?: 'error' | 'warning';
  };
  /** 内置校验方法，校验值是否为网络链接地址 */
  url?: {
    type: BooleanConstructor | IsURLOptions;
    value?: boolean | IsURLOptions;
  };
  /** 内置校验方法，校验值是否为空格 */
  whitespace?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export interface FormErrorMessage {
  /** 布尔类型校验不通过时的表单项显示文案 */
  boolean?: {
    type: StringConstructor;
    value?: string;
  };
  /** 日期校验规则不通过时的表单项显示文案 */
  date?: {
    type: StringConstructor;
    value?: string;
  };
  /** 枚举值校验规则不通过时的表单项显示文案 */
  enum?: {
    type: StringConstructor;
    value?: string;
  };
  /** 身份证号码校验不通过时的表单项显示文案 */
  idcard?: {
    type: StringConstructor;
    value?: string;
  };
  /** 值长度校验不通过时的表单项显示文案 */
  len?: {
    type: StringConstructor;
    value?: string;
  };
  /** 值的长度太长或值本身太大时，校验不通过的表单项显示文案 */
  max?: {
    type: StringConstructor;
    value?: string;
  };
  /** 值的长度太短或值本身太小时，校验不通过的表单项显示文案 */
  min?: {
    type: StringConstructor;
    value?: string;
  };
  /** 数字类型校验不通过时的表单项显示文案 */
  number?: {
    type: StringConstructor;
    value?: string;
  };
  /** 正则表达式校验不通过时的表单项显示文案 */
  pattern?: {
    type: StringConstructor;
    value?: string;
  };
  /** 没有填写必填项时的表单项显示文案 */
  required?: {
    type: StringConstructor;
    value?: string;
  };
  /** 手机号号码校验不通过时的表单项显示文案 */
  telnumber?: {
    type: StringConstructor;
    value?: string;
  };
  /** 自定义校验规则校验不通过时的表单项显示文案 */
  validator?: {
    type: StringConstructor;
    value?: string;
  };
}

export type FormRules<T extends Data> = { [field in keyof T]?: Array<FormRule> };

export interface ValidateResultType extends FormRule {
  result: boolean;
}

export type ErrorList = Array<FormRule>;

export type AllValidateResult = CustomValidateObj | ValidateResultType;

export type ValidateResultList = Array<AllValidateResult>;

export type ValidateResultObj<T> = { [key in keyof T]: boolean | ValidateResultList };

export type FormValidateResult<T> = boolean | ValidateResultObj<T>;

export interface SubmitContext<T extends Data = Data> {
  validateResult: FormValidateResult<T>;
  firstError?: string;
  fields?: any;
}

export type ValidateResult<T> = { [key in keyof T]: boolean | ErrorList };

export type ValidateResultContext<T extends Data> = Omit<SubmitContext<T>, 'e'>;

export interface FormResetParams<FormData> {
  type?: 'initial' | 'empty';
  fields?: Array<keyof FormData>;
}

export interface FormItemValidateMessage {
  type: 'warning' | 'error';
  message: string;
}

export type FormValidateMessage<FormData> = { [field in keyof FormData]: FormItemValidateMessage[] };

export interface FormValidateParams {
  fields?: Array<string>;
  showErrorMessage?: boolean;
  trigger?: ValidateTriggerType;
}

export interface TdFormProps<FormData extends Data = Data> {
  /** 表单底部按钮组样式 */
  buttonGroupStyle?: {
    type: ObjectConstructor;
    value?: Object;
  };
  /** 是否在表单标签字段右侧显示冒号 */
  colon?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 表单内容对齐方式：左对齐、右对齐 */
  contentAlign?: {
    type: StringConstructor;
    value?: 'left' | 'right';
  };
  /** 表单数据 */
  data?: {
    type: ObjectConstructor;
    value?: FormData;
  };
  /** 是否禁用整个表单 */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 表单错误信息配置 */
  errorMessage?: {
    type: ObjectConstructor;
    value?: FormErrorMessage;
  };
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐 */
  labelAlign?: {
    type: StringConstructor;
    value?: 'left' | 'right' | 'top';
  };
  /** 可以整体设置label标签宽度，默认为81px */
  labelWidth?: string | number;
  /** 是否阻止表单提交默认事件 */
  preventSubmitDefault?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 是否显示必填符号（*），默认显示 */
  requiredMark?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 重置表单的方式，值为 empty 表示重置表单为空，值为 initial 表示重置表单数据为初始值 */
  resetType?: {
    type: StringConstructor;
    value?: 'empty' | 'initial';
  };
  /** 表单字段校验规则 */
  rules?: {
    type: ObjectConstructor;
    value?: FormRules<FormData>;
  };
  /** 表单校验不通过时，是否自动滚动到第一个校验不通过的字段 */
  scrollToFirstError?: {
    type: StringConstructor;
    value?: 'smooth' | 'auto';
  };
  /** 校验不通过时，是否显示错误提示信息 */
  showErrorMessage?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /** 当校验结果只有告警信息时，是否触发 submit 提交事件 */
  submitWithWarningMessage?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
