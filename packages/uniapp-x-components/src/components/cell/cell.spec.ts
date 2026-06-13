import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Cell from './cell.vue';

describe('<TCell /> 渲染层', () => {
  describe('基础渲染', () => {
    it('title prop 渲染到 .t-cell__title', () => {
      const w = mount(Cell, { props: { title: '昵称' } });
      expect(w.find('.t-cell__title').text()).toBe('昵称');
    });

    it('description prop 渲染到 .t-cell__description', () => {
      const w = mount(Cell, { props: { title: '昵称', description: '请输入昵称' } });
      expect(w.find('.t-cell__description').text()).toBe('请输入昵称');
    });

    it('note prop 渲染到 .t-cell__note', () => {
      const w = mount(Cell, { props: { title: '昵称', note: '小王' } });
      expect(w.find('.t-cell__note').text()).toBe('小王');
    });

    it('arrow=true 时渲染 .t-cell__arrow', () => {
      const w = mount(Cell, { props: { title: '设置', arrow: true } });
      expect(w.find('.t-cell__arrow').exists()).toBe(true);
    });

    it('arrow=false 时不渲染 .t-cell__arrow', () => {
      const w = mount(Cell, { props: { title: '设置' } });
      expect(w.find('.t-cell__arrow').exists()).toBe(false);
    });
  });

  describe('插槽优先级', () => {
    it('#title 插槽优先于 title prop', () => {
      const w = mount(Cell, {
        props: { title: '应当被覆盖' },
        slots: { title: '<span class="custom-title">插槽标题</span>' },
      });
      expect(w.find('.custom-title').exists()).toBe(true);
      expect(w.find('.t-cell__title').text()).toContain('插槽标题');
      expect(w.find('.t-cell__title').text()).not.toContain('应当被覆盖');
    });

    it('#left-icon 插槽渲染在最前', () => {
      const w = mount(Cell, {
        props: { title: 'x' },
        slots: { 'left-icon': '<i class="icon-x" />' },
      });
      expect(w.find('.t-cell__left-icon .icon-x').exists()).toBe(true);
    });

    it('#right-icon 插槽存在时不再渲染默认 arrow', () => {
      const w = mount(Cell, {
        props: { title: 'x', arrow: true },
        slots: { 'right-icon': '<i class="custom-arrow" />' },
      });
      expect(w.find('.custom-arrow').exists()).toBe(true);
      expect(w.find('.t-cell__arrow').exists()).toBe(false);
    });
  });

  describe('required', () => {
    it('required=true 时显示红色星号', () => {
      const w = mount(Cell, { props: { title: '必填项', required: true } });
      expect(w.find('.t-cell__required').exists()).toBe(true);
      expect(w.find('.t-cell__required').text()).toBe('*');
    });

    it('required=false 时不显示星号', () => {
      const w = mount(Cell, { props: { title: '可选' } });
      expect(w.find('.t-cell__required').exists()).toBe(false);
    });
  });

  describe('点击行为', () => {
    it('正常点击触发 click', async () => {
      const onClick = vi.fn();
      const w = mount(Cell, { props: { title: 'x' }, attrs: { onClick } });
      await w.trigger('click');
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('disabled=true 时不触发 click', async () => {
      const onClick = vi.fn();
      const w = mount(Cell, {
        props: { title: 'x', disabled: true },
        attrs: { onClick },
      });
      await w.trigger('click');
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('class 透传', () => {
    it('customClass 合并到根节点', () => {
      const w = mount(Cell, { props: { title: 'x', customClass: 'foo bar' } });
      expect(w.classes()).toContain('foo');
      expect(w.classes()).toContain('bar');
    });
  });
});
