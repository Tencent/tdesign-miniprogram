import { describe, it, expect } from 'vitest';
import { cva } from './cva';

describe('cva (变体管理引擎)', () => {
  const buttonVariants = cva('t-button', {
    variants: {
      variant: {
        primary: 't-button--primary',
        outline: 't-button--outline',
        ghost: 't-button--ghost',
      },
      size: {
        sm: 't-button--sm',
        md: 't-button--md',
        lg: 't-button--lg',
      },
      block: {
        true: 't-button--block',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  });

  describe('基础用法', () => {
    it('全部使用默认变体', () => {
      expect(buttonVariants({})).toBe('t-button t-button--primary t-button--md');
    });

    it('不传任何参数等价于全用默认', () => {
      expect(buttonVariants()).toBe('t-button t-button--primary t-button--md');
    });

    it('覆盖单个变体', () => {
      expect(buttonVariants({ variant: 'outline' })).toBe(
        't-button t-button--outline t-button--md',
      );
    });

    it('覆盖多个变体', () => {
      expect(buttonVariants({ variant: 'ghost', size: 'lg' })).toBe(
        't-button t-button--ghost t-button--lg',
      );
    });
  });

  describe('boolean 变体', () => {
    it('block=true 应用 true 分支', () => {
      expect(buttonVariants({ block: true })).toBe(
        't-button t-button--primary t-button--md t-button--block',
      );
    });

    it('block=false 不应用任何分支', () => {
      expect(buttonVariants({ block: false })).toBe(
        't-button t-button--primary t-button--md',
      );
    });
  });

  describe('容错', () => {
    it('未知 variant 值降级到默认', () => {
      // @ts-expect-error - 故意传入非法值
      expect(buttonVariants({ variant: 'xxx' })).toBe(
        't-button t-button--primary t-button--md',
      );
    });

    it('某变体没有默认且未传，则跳过该变体', () => {
      const v = cva('t-card', {
        variants: { shadow: { sm: 'shadow-sm', md: 'shadow-md' } },
      });
      expect(v({})).toBe('t-card');
      expect(v({ shadow: 'sm' })).toBe('t-card shadow-sm');
    });

    it('base 为空字符串也能正常工作', () => {
      const v = cva('', {
        variants: { color: { red: 'text-red', blue: 'text-blue' } },
        defaultVariants: { color: 'red' },
      });
      expect(v({})).toBe('text-red');
    });
  });

  describe('额外类名透传（class）', () => {
    it('支持通过 class 透传额外类名（与 shadcn 一致）', () => {
      expect(buttonVariants({ class: 'mt-2' })).toBe(
        't-button t-button--primary t-button--md mt-2',
      );
    });

    it('class 透传也参与去重', () => {
      expect(buttonVariants({ class: 't-button mt-2' })).toBe(
        't-button t-button--primary t-button--md mt-2',
      );
    });
  });

  describe('compoundVariants（复合变体）', () => {
    const advanced = cva('t-btn', {
      variants: {
        variant: { primary: 'bg-primary', danger: 'bg-danger' },
        size: { sm: 'text-sm', lg: 'text-lg' },
      },
      compoundVariants: [
        { variant: 'danger', size: 'lg', class: 'font-bold' },
      ],
      defaultVariants: { variant: 'primary', size: 'sm' },
    });

    it('完全匹配复合变体时追加', () => {
      expect(advanced({ variant: 'danger', size: 'lg' })).toBe(
        't-btn bg-danger text-lg font-bold',
      );
    });

    it('部分匹配复合变体时不追加', () => {
      expect(advanced({ variant: 'danger', size: 'sm' })).toBe('t-btn bg-danger text-sm');
    });
  });
});
