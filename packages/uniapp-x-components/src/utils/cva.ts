/**
 * cva（class-variance-authority）的极简实现，针对 uts/uvue 场景适配。
 *
 * 与社区 cva 的差异：
 *  - 不依赖 clsx，直接用本包的 cn
 *  - 类型签名更窄，避免 uts 不支持的复杂条件类型
 *  - boolean 变体通过 'true' / 'false' 字符串键映射
 *
 * 使用：
 *   const button = cva('t-button', {
 *     variants: {
 *       variant: { primary: 't-button--primary', outline: 't-button--outline' },
 *       size:    { sm: 't-button--sm', md: 't-button--md' },
 *       block:   { true: 't-button--block' },
 *     },
 *     compoundVariants: [
 *       { variant: 'primary', size: 'lg', class: 'font-bold' }
 *     ],
 *     defaultVariants: { variant: 'primary', size: 'md' }
 *   });
 *   button({ variant: 'outline', class: 'mt-2' });
 */

import { cn, type ClassValue } from './cn';

export type VariantsConfig = Record<string, Record<string, string>>;

export type VariantProps<C extends VariantsConfig> = {
  [K in keyof C]?: keyof C[K] | boolean;
} & {
  class?: ClassValue;
};

export interface CvaConfig<C extends VariantsConfig> {
  variants?: C;
  defaultVariants?: { [K in keyof C]?: keyof C[K] | boolean };
  compoundVariants?: Array<
    { [K in keyof C]?: keyof C[K] | boolean } & { class: ClassValue }
  >;
}

export type CvaFn<C extends VariantsConfig> = (props?: VariantProps<C>) => string;

function normalizeKey(value: unknown): string {
  if (value === true) return 'true';
  if (value === false) return 'false';
  return String(value);
}

export function cva<C extends VariantsConfig>(
  base: string,
  config: CvaConfig<C> = {},
): CvaFn<C> {
  const variants = (config.variants ?? {}) as VariantsConfig;
  const defaults = (config.defaultVariants ?? {}) as Record<string, unknown>;
  const compounds = config.compoundVariants ?? [];

  return (props?: VariantProps<C>): string => {
    const p = (props ?? {}) as Record<string, unknown>;
    const tokens: ClassValue[] = [base];

    // 1. 基础变体
    for (const variantKey in variants) {
      if (!Object.prototype.hasOwnProperty.call(variants, variantKey)) continue;
      const variantMap = variants[variantKey];

      const passed = p[variantKey];
      let chosenKey: string | undefined;

      if (passed !== undefined && variantMap[normalizeKey(passed)] !== undefined) {
        chosenKey = normalizeKey(passed);
      } else if (defaults[variantKey] !== undefined) {
        chosenKey = normalizeKey(defaults[variantKey]);
      }

      if (chosenKey !== undefined && variantMap[chosenKey] !== undefined) {
        tokens.push(variantMap[chosenKey]);
      }
    }

    // 2. 复合变体
    for (let i = 0; i < compounds.length; i++) {
      const rule = compounds[i] as Record<string, unknown> & { class: ClassValue };
      let matched = true;
      for (const k in rule) {
        if (k === 'class') continue;
        const expected = normalizeKey(rule[k]);
        const actualRaw = p[k] !== undefined ? p[k] : defaults[k];
        if (actualRaw === undefined || normalizeKey(actualRaw) !== expected) {
          matched = false;
          break;
        }
      }
      if (matched) {
        tokens.push(rule.class);
      }
    }

    // 3. 透传 class
    if (p.class !== undefined) {
      tokens.push(p.class as ClassValue);
    }

    return cn(...tokens);
  };
}

export default cva;
