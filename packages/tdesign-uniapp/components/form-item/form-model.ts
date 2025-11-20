// 验证结果接口
interface ValidateResult {
  result: boolean;
  message?: string;
  type?: string;
}

// 工具函数：安全获取rule属性的实际值
function getRuleValue(field: any, key?: string): any {
  if (field && typeof field === 'object' && 'type' in field) {
    // 针对type字段，过滤掉'error'和'warning'
    if (key === 'type') {
      const { value } = field;
      if (value === 'error' || value === 'warning') {
        return undefined;
      }
      return value;
    }
    return field.value;
  }
  // type字段只允许string
  if (key === 'type') {
    if (field === 'error' || field === 'warning') {
      return undefined;
    }
  }
  return field;
}

// 验证状态枚举
export const ValidateStatus = {
  TO_BE_VALIDATED: 0,
  SUCCESS: 1,
  FAIL: 2,
};

// 执行单个验证规则
async function executeRule(value: any, rule: any): Promise<ValidateResult> {
  const result: ValidateResult = {
    result: true,
  };

  // 必填验证
  const required = getRuleValue(rule.required);
  if (required && (value === undefined || value === null || value === '' || value.length === 0)) {
    result.result = false;
    result.message = getRuleValue(rule.message) || '此字段为必填项';
    result.type = 'error';
    return result;
  }

  // 如果值为空且不是必填，则跳过其他验证
  if (value === undefined || value === null || value === '' || value.length === 0) {
    return result;
  }

  // 列表最小值验证
  const min = getRuleValue(rule.min);
  if (min !== undefined) {
    const val = Array.isArray(value) ? value.length : Number(value);
    if (val < Number(min)) {
      result.result = false;
      result.message = getRuleValue(rule.message) || `不能小于 ${min}`;
      result.type = 'error';
      return result;
    }
  }

  // 列表最大值验证
  const max = getRuleValue(rule.max);
  if (max !== undefined) {
    const val = Array.isArray(value) ? value.length : Number(value);
    if (val > Number(max)) {
      result.result = false;
      result.message = getRuleValue(rule.message) || `不能大于 ${max}`;
      result.type = 'error';
      return result;
    }
  }
  // 字符串最大长度验证
  const maxLength = getRuleValue(rule.maxLength);
  if (maxLength !== undefined) {
    const len = String(value).length;
    if (len > Number(maxLength)) {
      result.result = false;
      result.message = getRuleValue(rule.message) || `长度不能超过 ${maxLength}`;
      result.type = 'error';
      return result;
    }
  }

  // 字符串最小长度验证
  const minLength = getRuleValue(rule.minLength);
  if (minLength !== undefined) {
    const len = String(value).length;
    if (len < Number(minLength)) {
      result.result = false;
      result.message = getRuleValue(rule.message) || `长度不能少于 ${minLength}`;
      result.type = 'error';
      return result;
    }
  }

  // 固定长度验证
  const len = getRuleValue(rule.len);
  if (len !== undefined) {
    const strValue = String(value);
    if (strValue.length !== Number(len)) {
      result.result = false;
      result.message = getRuleValue(rule.message) || `长度必须为 ${len}`;
      result.type = 'error';
      return result;
    }
  }

  // 正则验证
  const pattern = getRuleValue(rule.pattern);
  if (pattern) {
    let regex;
    if (pattern instanceof RegExp) {
      regex = pattern;
    } else if (typeof pattern === 'string') {
      regex = new RegExp(pattern);
    } else if (pattern && typeof pattern === 'object' && 'test' in pattern) {
      regex = pattern;
    } else {
      result.result = false;
      result.message = getRuleValue(rule.message) || '格式不正确';
      result.type = 'error';
      return result;
    }
    if (!regex.test(String(value))) {
      result.result = false;
      result.message = getRuleValue(rule.message) || '格式不正确';
      result.type = 'error';
      return result;
    }
  }

  // 类型验证
  const type = getRuleValue(rule.type, 'type');
  if (typeof type === 'string') {
    let isValid = true;
    if (type === 'email') {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value));
      if (!isValid) {
        result.result = false;
        result.message = getRuleValue(rule.message) || `${type} 格式不正确`;
        result.type = 'error';
        return result;
      }
    } else if (type === 'url') {
      try {
        const url = new URL(String(value));
        isValid = !!url;
      } catch (err) {
        isValid = false;
      }
      if (!isValid) {
        result.result = false;
        result.message = getRuleValue(rule.message) || `${type} 格式不正确`;
        result.type = 'error';
        return result;
      }
    } else if (type === 'number') {
      isValid = !Number.isNaN(Number(value));
      if (!isValid) {
        result.result = false;
        result.message = getRuleValue(rule.message) || `${type} 格式不正确`;
        result.type = 'error';
        return result;
      }
    }
  }
  // 自定义验证
  const validator = getRuleValue(rule.validator);
  if (validator) {
    const validateResult = await validator(value);
    if (!validateResult) {
      result.result = false;
      result.message = getRuleValue(rule.message) || '验证失败';
      result.type = 'error';
      return result;
    }
  }
  return result;
}

// 验证函数
export async function validate(value: any, rules: any[]): Promise<ValidateResult[]> {
  const results: ValidateResult[] = [];

  const promises = rules.map((rule) => executeRule(value, rule));
  const ruleResults = await Promise.all(promises);
  results.push(...ruleResults);

  return results;
}
