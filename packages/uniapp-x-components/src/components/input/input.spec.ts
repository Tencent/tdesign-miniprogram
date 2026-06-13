import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Input from './input.vue';

describe('<TInput /> 渲染层', () => {
  describe('基础渲染', () => {
    it('placeholder 透传到原生 input', () => {
      const w = mount(Input, { props: { placeholder: '请输入' } });
      expect(w.find('input').attributes('placeholder')).toBe('请输入');
    });

    it('type=password 应用到原生 input', () => {
      const w = mount(Input, { props: { type: 'password' } });
      expect(w.find('input').attributes('type')).toBe('password');
    });

    it('size=large 应用类名', () => {
      const w = mount(Input, { props: { size: 'large' } });
      expect(w.classes()).toContain('t-input--large');
    });
  });

  describe('v-model', () => {
    it('modelValue 同步到 input.value', async () => {
      const w = mount(Input, { props: { modelValue: '初始' } });
      expect((w.find('input').element as HTMLInputElement).value).toBe('初始');
      await w.setProps({ modelValue: '更新后' });
      expect((w.find('input').element as HTMLInputElement).value).toBe('更新后');
    });

    it('用户输入触发 update:modelValue 与 change', async () => {
      const w = mount(Input, { props: { modelValue: '' } });
      await w.find('input').setValue('hi');
      expect(w.emitted('update:modelValue')?.[0]).toEqual(['hi']);
      expect(w.emitted('change')?.[0]).toEqual(['hi']);
    });
  });

  describe('clearable', () => {
    it('有值且 clearable=true 时显示清除按钮', () => {
      const w = mount(Input, { props: { modelValue: 'x', clearable: true } });
      expect(w.find('.t-input__clear').exists()).toBe(true);
    });

    it('值为空时不显示清除按钮', () => {
      const w = mount(Input, { props: { modelValue: '', clearable: true } });
      expect(w.find('.t-input__clear').exists()).toBe(false);
    });

    it('点击清除按钮清空并 emit clear', async () => {
      const w = mount(Input, { props: { modelValue: 'abc', clearable: true } });
      await w.find('.t-input__clear').trigger('click');
      expect(w.emitted('update:modelValue')?.[0]).toEqual(['']);
      expect(w.emitted('clear')).toBeTruthy();
    });
  });

  describe('disabled / readonly', () => {
    it('disabled=true 透传到原生 input', () => {
      const w = mount(Input, { props: { disabled: true } });
      expect(w.find('input').attributes('disabled')).toBeDefined();
    });

    it('readonly=true 透传到原生 input', () => {
      const w = mount(Input, { props: { readonly: true } });
      expect(w.find('input').attributes('readonly')).toBeDefined();
    });
  });

  describe('事件', () => {
    it('focus / blur 透传', async () => {
      const w = mount(Input);
      await w.find('input').trigger('focus');
      await w.find('input').trigger('blur');
      expect(w.emitted('focus')).toHaveLength(1);
      expect(w.emitted('blur')).toHaveLength(1);
    });

    it('回车触发 enter 事件', async () => {
      const w = mount(Input, { props: { modelValue: 'go' } });
      await w.find('input').trigger('keydown', { key: 'Enter' });
      expect(w.emitted('enter')?.[0]).toEqual(['go']);
    });
  });

  describe('插槽', () => {
    it('#prefix / #suffix 渲染', () => {
      const w = mount(Input, {
        slots: { prefix: '<span class="p" />', suffix: '<span class="s" />' },
      });
      expect(w.find('.t-input__prefix .p').exists()).toBe(true);
      expect(w.find('.t-input__suffix .s').exists()).toBe(true);
    });
  });

  describe('class', () => {
    it('customClass 合并到根节点', () => {
      const w = mount(Input, { props: { customClass: 'foo' } });
      expect(w.classes()).toContain('foo');
    });
  });
});
