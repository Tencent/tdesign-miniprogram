import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn (类名合并工具)', () => {
  describe('基础用法', () => {
    it('合并多个字符串', () => {
      expect(cn('a', 'b')).toBe('a b');
    });

    it('单个字符串原样返回', () => {
      expect(cn('a')).toBe('a');
    });

    it('无参数返回空串', () => {
      expect(cn()).toBe('');
    });

    it('全部 falsy 返回空串', () => {
      expect(cn(false, null, undefined, '')).toBe('');
    });
  });

  describe('忽略 falsy 值', () => {
    it('忽略 false / null / undefined / 空串', () => {
      expect(cn('a', false, null, undefined, '', 'b')).toBe('a b');
    });

    it('保留 0 与其他真值（注意：cn 中 0 视为 falsy 跳过）', () => {
      // 与 clsx 行为一致：数字 0 被忽略
      // @ts-expect-error - 数字非合法 ClassValue，验证运行时容错
      expect(cn('a', 0, 'b')).toBe('a b');
    });
  });

  describe('对象语法', () => {
    it('键为类名，值为 boolean，true 时保留', () => {
      expect(cn({ a: true, b: false, c: true })).toBe('a c');
    });

    it('与字符串混用', () => {
      expect(cn('base', { active: true, disabled: false })).toBe('base active');
    });

    it('键名为多类名（空格分隔）也保留', () => {
      expect(cn({ 'a b': true, c: false })).toBe('a b');
    });
  });

  describe('数组语法', () => {
    it('一维数组扁平化', () => {
      expect(cn(['a', 'b'], 'c')).toBe('a b c');
    });

    it('多维数组深度扁平', () => {
      expect(cn(['a', ['b', ['c', 'd']]], 'e')).toBe('a b c d e');
    });

    it('数组内可嵌对象', () => {
      expect(cn(['a', { b: true, c: false }], 'd')).toBe('a b d');
    });
  });

  describe('去重', () => {
    it('重复类名只出现一次（保持首次顺序）', () => {
      expect(cn('a', 'b', 'a', 'c', 'b')).toBe('a b c');
    });

    it('数组与对象组合后的去重', () => {
      expect(cn(['a', 'b'], { a: true, c: true }, 'b')).toBe('a b c');
    });
  });

  describe('边界', () => {
    it('字符串中含多个空格被规范化为单空格', () => {
      expect(cn('a  b', '  c  ')).toBe('a b c');
    });

    it('忽略数字 / 函数 / 对象引用等非约定输入', () => {
      // 数字不是 0 时也跳过（不像 clsx 会输出，cn 的契约是只接受 string|object|array|falsy）
      // @ts-expect-error - 故意传入非法类型来验证健壮性
      expect(cn('a', 123, 'b')).toBe('a b');
    });
  });
});
