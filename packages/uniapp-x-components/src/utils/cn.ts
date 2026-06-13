/**
 * 类名合并工具（uts 兼容子集）
 *
 * 设计原则：
 *  - 仅接受 string | object | array | 任何 falsy
 *  - 数字（含 0）一律视为非法输入并跳过（与 uts 严格类型对齐）
 *  - 自动去重 + 保持首次出现顺序
 *  - 多余空格规范化为单空格
 *
 * 与 clsx 区别：
 *  - clsx 会输出非零数字；cn 跳过所有数字（uts 中类名只允许字符串）
 *  - cn 始终去重
 */

export type ClassValue =
  | string
  | false
  | null
  | undefined
  | ClassDictionary
  | ClassArray;

export interface ClassDictionary {
  [key: string]: unknown;
}

export type ClassArray = ClassValue[];

function pushTokens(target: string[], raw: string): void {
  // 规范化：把任意空白拆成 token 数组
  const tokens = raw.split(/\s+/);
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.length > 0 && target.indexOf(t) === -1) {
      target.push(t);
    }
  }
}

function walk(value: ClassValue, target: string[]): void {
  if (value === null || value === undefined || value === false || value === '') {
    return;
  }

  if (typeof value === 'string') {
    pushTokens(target, value);
    return;
  }

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      walk(value[i] as ClassValue, target);
    }
    return;
  }

  if (typeof value === 'object') {
    const dict = value as ClassDictionary;
    for (const key in dict) {
      if (Object.prototype.hasOwnProperty.call(dict, key) && dict[key]) {
        pushTokens(target, key);
      }
    }
    return;
  }

  // 其他类型（number、function 等）按契约跳过
}

export function cn(...inputs: ClassValue[]): string {
  const tokens: string[] = [];
  for (let i = 0; i < inputs.length; i++) {
    walk(inputs[i], tokens);
  }
  return tokens.join(' ');
}

export default cn;
