import { describe, it, expect } from 'vitest';
import { cellVariants } from './cell.variants';

describe('cellVariants (Cell 变体)', () => {
  describe('默认值', () => {
    it('不传任何参数 → 仅 t-cell + 默认 align-middle', () => {
      expect(cellVariants({})).toBe('t-cell t-cell--align-middle');
    });
  });

  describe('align', () => {
    it.each([
      ['top', 't-cell--align-top'],
      ['middle', 't-cell--align-middle'],
      ['bottom', 't-cell--align-bottom'],
    ] as const)('align=%s', (align, cls) => {
      expect(cellVariants({ align })).toContain(cls);
    });
  });

  describe('boolean 修饰', () => {
    it('bordered=true 加 bordered 类', () => {
      expect(cellVariants({ bordered: true })).toContain('t-cell--bordered');
    });
    it('hover=true 加 hover 类', () => {
      expect(cellVariants({ hover: true })).toContain('t-cell--hover');
    });
    it('disabled=true 加 disabled 类', () => {
      expect(cellVariants({ disabled: true })).toContain('t-cell--disabled');
    });
    it('arrow=true 加 arrow 类', () => {
      expect(cellVariants({ arrow: true })).toContain('t-cell--arrow');
    });
  });

  describe('class 透传', () => {
    it('支持 class 字段追加', () => {
      expect(cellVariants({ class: 'foo' })).toContain('foo');
    });
  });
});
