import { isNumber, isBoolean, isObject, isEmpty, isDate, isEmail, isURL } from '../common/validator';

export const ValidateStatus = {
  TO_BE_VALIDATED: 0,
  SUCCESS: 1,
  FAIL: 2,
};

/**
 * 计算字符串字符的长度并可以截取字符串。
 * @param str 传入字符串
 * @param maxCharacter 规定最大字符串长度
 * @returns 当没有传入maxCharacter时返回字符串字符长度，当传入maxCharacter时返回截取之后的字符串和长度。
 */
function getCharacterLength(str: string, maxCharacter?: number) {
  const hasMaxCharacter = isNumber(maxCharacter);
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str,
      };
    }
    return 0;
  }
  let len = 0;
  for (let i = 0; i < str.length; i += 1) {
    let currentStringLength = 0;
    if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
      currentStringLength = 2;
    } else {
      currentStringLength = 1;
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i),
      };
    }
    len += currentStringLength;
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str,
    };
  }
  return len;
}

// `{} / [] / '' / undefined / null` 等内容被认为是空； 0 和 false 被认为是正常数据，部分数据的值就是 0 或者 false
export function isValueEmpty(val: any): boolean {
  const type: string = Object.prototype.toString.call(val);
  const typeMap: Record<string, any> = {
    Date: '[object Date]',
  };
  if (type === typeMap.Date) {
    return false;
  }
  return isObject(val) ? isEmpty(val) : ['', undefined, null].includes(val);
}

const VALIDATE_MAP = {
  date: isDate,
  url: isURL,
  email: isEmail,
  required: (val: any): boolean => !isValueEmpty(val),
  whitespace: (val: any): boolean => !(/^\s+$/.test(val) || val === ''),
  boolean: (val: any): boolean => isBoolean(val),
  max: (val: any, num: number): boolean => (isNumber(val) ? val <= num : (getCharacterLength(val) as number) <= num),
  min: (val: any, num: number): boolean => (isNumber(val) ? val >= num : (getCharacterLength(val) as number) >= num),
  len: (val: any, num: number): boolean => getCharacterLength(val) === num,
  number: (val: any): boolean => isNumber(val),
  enum: (val: any, strs: Array<string>): boolean => strs.includes(val),
  idcard: (val: any): boolean => /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i.test(val),
  telnumber: (val: any): boolean => /^1[3-9]\d{9}$/.test(val),
  pattern: (val: any, regexp: RegExp | string): boolean => {
    const reg = typeof regexp === 'string' ? new RegExp(regexp) : regexp;
    return reg.test(val);
  },
  // 自定义校验规则，可能是异步校验
  validator: (
    val: any,
    validate: Function,
    context?: { formData: any; name: string },
  ): any => validate(val, context),
};

/**
 * 校验某一条数据的某一条规则，一种校验规则不满足则不再进行校验。
 * @param value 值
 * @param rule 校验规则
 * @param context 表单上下文，包含 formData 和 name，供自定义校验器使用
 * @returns 两种校验结果，一种是内置校验规则的校验结果，二种是自定义校验规则（validator）的校验结果
 */
export async function validateOneRule(
  value: any,
  rule: any,
  context?: { formData: any; name: string },
): Promise<any> {
  let validateResult: any = { result: true };
  const keys = Object.keys(rule);
  let vOptions: any;
  let vValidateFun: any;
  let isValidatorRule = false;
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    // 非必填选项，值为空，非自定义规则：无需校验，直接返回 true
    if (!rule.required && isValueEmpty(value) && !rule.validator) {
      return validateResult;
    }
    const validateRule = (VALIDATE_MAP as any)[key];
    const ruleItem = rule[key];
    // 找到一个校验规则，则无需再找，因为参数只允许对一个规则进行校验
    if (validateRule && (ruleItem || ruleItem === 0)) {
      // rule 值为 true 则表示没有校验参数，只是对值进行默认规则校验
      vOptions = ruleItem === true ? undefined : ruleItem;
      vValidateFun = validateRule;
      isValidatorRule = key === 'validator';
      break;
    }
  }
  if (vValidateFun) {
    validateResult = isValidatorRule
      ? await vValidateFun(value, vOptions, context)
      : await vValidateFun(value, vOptions);
    // 如果校验不通过，则返回校验不通过的规则
    if (isBoolean(validateResult)) {
      return { ...rule, result: validateResult };
    }
    // 校验结果为对象，只有自定义校验规则会存在这种情况
    if (isObject(validateResult)) {
      return validateResult;
    }
  }
  return validateResult;
}

/**
 * 单个数据进行全规则校验
 * 保留 validateRules 别名以兼容已有调用
 */
export async function validate(value: any, rules: any[], context?: { formData: any; name: string }): Promise<any[]> {
  const all = rules.map(rule => validateOneRule(value, rule, context));
  const r = await Promise.all(all);
  return r;
}

// 兼容已有导入
export const validateRules = validate;
