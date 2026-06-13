import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './button.vue';

describe('<TButton /> 渲染层', () => {
  describe('基础渲染', () => {
    it('默认渲染：包含 t-button + 默认变体类，并渲染 default 插槽', () => {
      const w = mount(Button, { slots: { default: '点我' } });
      expect(w.classes()).toContain('t-button');
      expect(w.classes()).toContain('t-button--variant-base');
      expect(w.classes()).toContain('t-button--theme-default');
      expect(w.classes()).toContain('t-button--medium');
      expect(w.classes()).toContain('t-button--rectangle');
      expect(w.text()).toContain('点我');
    });

    it('应用 theme=primary + size=large + shape=round', () => {
      const w = mount(Button, {
        props: { theme: 'primary', size: 'large', shape: 'round' },
      });
      expect(w.classes()).toContain('t-button--theme-primary');
      expect(w.classes()).toContain('t-button--large');
      expect(w.classes()).toContain('t-button--round');
    });
  });

  describe('点击行为', () => {
    it('正常点击触发 click 事件', async () => {
      const onClick = vi.fn();
      const w = mount(Button, { attrs: { onClick } });
      await w.trigger('click');
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('disabled=true 时不触发 click', async () => {
      const onClick = vi.fn();
      const w = mount(Button, { props: { disabled: true }, attrs: { onClick } });
      await w.trigger('click');
      expect(onClick).not.toHaveBeenCalled();
      expect(w.classes()).toContain('t-button--disabled');
    });

    it('loading=true 时不触发 click', async () => {
      const onClick = vi.fn();
      const w = mount(Button, { props: { loading: true }, attrs: { onClick } });
      await w.trigger('click');
      expect(onClick).not.toHaveBeenCalled();
      expect(w.classes()).toContain('t-button--loading');
    });
  });

  describe('loading 渲染', () => {
    it('loading=true 时渲染 .t-button__loading 节点', () => {
      const w = mount(Button, { props: { loading: true } });
      expect(w.find('.t-button__loading').exists()).toBe(true);
    });

    it('loading=false 时不渲染 loading 节点', () => {
      const w = mount(Button, { props: { loading: false } });
      expect(w.find('.t-button__loading').exists()).toBe(false);
    });
  });

  describe('插槽', () => {
    it('icon 插槽渲染在 content 之前', () => {
      const w = mount(Button, {
        slots: {
          icon: '<i class="my-icon" />',
          default: '保存',
        },
      });
      expect(w.find('.t-button__icon').exists()).toBe(true);
      expect(w.find('.my-icon').exists()).toBe(true);
      expect(w.find('.t-button__content').text()).toBe('保存');
    });

    it('无 default 插槽时不渲染 content 容器', () => {
      const w = mount(Button, { props: { shape: 'circle' } });
      expect(w.find('.t-button__content').exists()).toBe(false);
    });
  });

  describe('customClass', () => {
    it('customClass 合并到根节点', () => {
      const w = mount(Button, { props: { customClass: 'foo bar' } });
      expect(w.classes()).toContain('foo');
      expect(w.classes()).toContain('bar');
    });
  });
});
