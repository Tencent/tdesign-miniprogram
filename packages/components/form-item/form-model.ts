interface ValidateResult {
  result: boolean;
  message?: string;
  type?: string;
  [key: string]: any;
}

export const ValidateStatus = {
  TO_BE_VALIDATED: 0,
  SUCCESS: 1,
  FAIL: 2,
};

export function isEmpty(value: any): boolean {
  if (value === undefined || value === null || value === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

export function getRuleValue(field: any): any {
  if (field && typeof field === 'object' && 'value' in field) {
    return field.value;
  }
  return field;
}

export function getResultType(rule: any): string {
  const t = rule.type;
  if (t === 'warning') return 'warning';
  if (t && typeof t === 'object' && 'value' in t && t.value === 'warning') return 'warning';
  return 'error';
}

function fail(rule: any, resultType: string): ValidateResult {
  return { ...rule, result: false, message: getRuleValue(rule.message) || '', type: resultType };
}

export function getCharLength(str: string): number {
  let length = 0;
  for (let i = 0; i < str.length; i += 1) {
    const code = str.charCodeAt(i);
    const isCJK =
      (code >= 0x4e00 && code <= 0x9fff) ||
      (code >= 0x3400 && code <= 0x4dbf) ||
      (code >= 0xf900 && code <= 0xfaff) ||
      (code >= 0xff00 && code <= 0xffef);
    length += isCJK ? 2 : 1;
  }
  return length;
}

function getComparableLength(value: any): number {
  if (typeof value === 'number') return value;
  if (Array.isArray(value)) return value.length;
  return getCharLength(String(value));
}

function toRegExp(pattern: any): RegExp | null {
  if (pattern instanceof RegExp) return pattern;
  if (typeof pattern === 'string') return new RegExp(pattern);
  if (pattern && typeof pattern === 'object' && 'test' in pattern) return pattern;
  return null;
}

type ValidateFn = (value: any, ruleValue: any) => boolean;

const VALIDATE_MAP: Record<string, ValidateFn> = {
  required: (value) => !isEmpty(value),
  whitespace: (value) => !(typeof value === 'string' && value.trim() === ''),
  boolean: (value) => typeof value === 'boolean',
  number: (value) => !Number.isNaN(Number(value)),
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value)),
  url: (value) => /^https?:\/\/[^\s]+$/.test(String(value)),
  date: (value) => !Number.isNaN(new Date(value).getTime()),
  idcard: (value) => /^(\d{18}|\d{15}|\d{17}[xX])$/.test(String(value)),
  telnumber: (value) => /^1[3-9]\d{9}$/.test(String(value)),
  enum: (value, list) => !Array.isArray(list) || list.includes(value),
  min: (value, limit) => getComparableLength(value) >= Number(limit),
  max: (value, limit) => getComparableLength(value) <= Number(limit),
  len: (value, length) => getCharLength(String(value)) === Number(length),
  pattern: (value, pat) => {
    const regex = toRegExp(pat);
    return regex ? regex.test(String(value)) : false;
  },
};

export const RULE_KEYS = [...Object.keys(VALIDATE_MAP), 'validator'];

export async function executeRule(value: any, rule: any, context?: any): Promise<ValidateResult> {
  const resultType = getResultType(rule);

  if (getRuleValue(rule.required) && isEmpty(value)) return fail(rule, resultType);
  if (isEmpty(value)) return { result: true };

  const keys = Object.keys(rule);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const validateFn = VALIDATE_MAP[key];
    const ruleValue = getRuleValue(rule[key]);
    if (validateFn && ruleValue !== undefined && ruleValue !== false) {
      const options = ruleValue === true ? undefined : ruleValue;
      if (!validateFn(value, options)) return fail(rule, resultType);
    }
  }

  const validator = getRuleValue(rule.validator);
  if (validator && !(await validator(value, context))) return fail(rule, resultType);

  return { result: true };
}

export async function validateRules(value: any, rules: any[], context?: any): Promise<ValidateResult[]> {
  return Promise.all(rules.map((rule) => executeRule(value, rule, context)));
}
