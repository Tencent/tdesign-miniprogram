import { describe, it, expect } from 'vitest';
import { buttonVariants } from './button.variants';

describe('buttonVariants (Button 变体)', () => {
  describe('默认值', () => {
    it('不传任何参数 → variant=base + theme=default + size=medium + shape=rectangle', () => {
      expect(buttonVariants({})).toBe(
        't-button t-button--variant-base t-button--theme-default t-button--medium t-button--rectangle',
      );
    });
  });

  describe('variant', () => {
    it.each([
      ['base', 't-button--variant-base'],
      ['outline', 't-button--variant-outline'],
      ['dashed', 't-button--variant-dashed'],
      ['text', 't-button--variant-text'],
    ] as const)('variant=%s', (variant, cls) => {
      expect(buttonVariants({ variant })).toContain(cls);
    });
  });

  describe('theme', () => {
    it.each([
      ['default', 't-button--theme-default'],
      ['primary', 't-button--theme-primary'],
      ['danger', 't-button--theme-danger'],
      ['warning', 't-button--theme-warning'],
      ['success', 't-button--theme-success'],
    ] as const)('theme=%s', (theme, cls) => {
      expect(buttonVariants({ theme })).toContain(cls);
    });
  });

  describe('size', () => {
    it.each([
      ['extra-small', 't-button--extra-small'],
      ['small', 't-button--small'],
      ['medium', 't-button--medium'],
      ['large', 't-button--large'],
    ] as const)('size=%s', (size, cls) => {
      expect(buttonVariants({ size })).toContain(cls);
    });
  });

  describe('shape', () => {
    it.each([
      ['rectangle', 't-button--rectangle'],
      ['square', 't-button--square'],
      ['round', 't-button--round'],
      ['circle', 't-button--circle'],
    ] as const)('shape=%s', (shape, cls) => {
      expect(buttonVariants({ shape })).toContain(cls);
    });
  });

  describe('boolean 修饰', () => {
    it('block=true 应用 block 类', () => {
      expect(buttonVariants({ block: true })).toContain('t-button--block');
    });

    it('block=false 不出现 block 类', () => {
      expect(buttonVariants({ block: false })).not.toContain('t-button--block');
    });

    it('disabled=true 应用 disabled 类', () => {
      expect(buttonVariants({ disabled: true })).toContain('t-button--disabled');
    });

    it('loading=true 应用 loading 类', () => {
      expect(buttonVariants({ loading: true })).toContain('t-button--loading');
    });

    it('ghost=true 应用 ghost 类', () => {
      expect(buttonVariants({ ghost: true })).toContain('t-button--ghost');
    });
  });

  describe('customClass 透传', () => {
    it('追加用户传入的类名', () => {
      const cls = buttonVariants({ class: 'my-extra' });
      expect(cls).toContain('t-button');
      expect(cls).toContain('my-extra');
    });

    it('class 与 customClass 同义（组件层将 customClass 映射到 class）', () => {
      // 这里仅验证 cva 接受 class；customClass→class 的映射在 SFC 层做
      const cls = buttonVariants({ class: 'a b' });
      expect(cls).toContain('a');
      expect(cls).toContain('b');
    });
  });

  describe('组合与顺序', () => {
    it('variant + theme + size + shape 同时设置全部生效', () => {
      const cls = buttonVariants({
        variant: 'outline',
        theme: 'primary',
        size: 'large',
        shape: 'round',
      });
      expect(cls).toBe(
        't-button t-button--variant-outline t-button--theme-primary t-button--large t-button--round',
      );
    });

    it('未知变体值降级到默认', () => {
      // @ts-expect-error - 故意非法值
      expect(buttonVariants({ variant: 'xxx' })).toContain('t-button--variant-base');
    });
  });
});
