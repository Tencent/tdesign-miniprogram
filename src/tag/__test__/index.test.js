import simulate from 'miniprogram-simulate';

import path from 'path';

describe('tag', () => {
  const Tag = load(path.resolve(__dirname, `../tag`));
  const CheckTag = load(path.resolve(__dirname, `../check-tag`));

  describe('tag', () => {
    describe('props', () => {
      it(`: theme`, async () => {
        const id = simulate.load({
          template: `
            <t-tag
              class="base"
              theme="{{theme}}"
            >危险</t-tag>`,

          data: {
            theme: '',
          },
          methods: {},
          usingComponents: {
            't-tag': Tag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $tag = comp.querySelector('.base >>> .t-tag');
        expect($tag.dom.getAttribute('class').includes('t-tag--default')).toBeTruthy();

        comp.setData({
          theme: 'warning',
        });
        expect($tag.dom.getAttribute('class').includes('t-tag--warning')).toBeTruthy();
      });

      it(`: variant`, async () => {
        const id = simulate.load({
          template: `
            <t-tag
              class="base"
              variant="{{variant}}"
            >危险</t-tag>`,

          data: {
            variant: 'dark',
          },
          methods: {},
          usingComponents: {
            't-tag': Tag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $tag = comp.querySelector('.base >>> .t-tag');
        expect($tag.dom.getAttribute('class').includes('t-tag--dark')).toBeTruthy();

        comp.setData({
          variant: 'outline',
        });
        expect($tag.dom.getAttribute('class').includes('t-tag--outline')).toBeTruthy();
      });

      it(`: size`, async () => {
        const id = simulate.load({
          template: `
            <t-tag
              class="base"
              size="{{size}}"
            >危险</t-tag>`,

          data: {
            size: 'medium',
          },
          methods: {},
          usingComponents: {
            't-tag': Tag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $tag = comp.querySelector('.base >>> .t-tag');
        expect($tag.dom.getAttribute('class').includes('t-tag--medium')).toBeTruthy();

        comp.setData({
          size: 'large',
        });
        expect($tag.dom.getAttribute('class').includes('t-tag--large')).toBeTruthy();
      });

      it(`: shape`, async () => {
        const id = simulate.load({
          template: `
            <t-tag
              class="base"
              shape="{{shape}}"
            >危险</t-tag>`,

          data: {
            shape: 'square',
          },
          methods: {},
          usingComponents: {
            't-tag': Tag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $tag = comp.querySelector('.base >>> .t-tag');
        expect($tag.dom.getAttribute('class').includes('t-tag--square')).toBeTruthy();

        comp.setData({
          shape: 'round',
        });
        expect($tag.dom.getAttribute('class').includes('t-tag--round')).toBeTruthy();
      });

      it(`: closable && disabled`, async () => {
        const id = simulate.load({
          template: `
            <t-tag
              class="base"
              closable="{{closable}}"
              disabled="{{disabled}}"
            >危险</t-tag>`,

          data: {
            closable: false,
            disabled: false,
          },
          methods: {},
          usingComponents: {
            't-tag': Tag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $tag = comp.querySelector('.base >>> .t-tag');
        expect($tag.dom.getAttribute('class').includes('t-tag--closable')).not.toBeTruthy();
        expect($tag.dom.getAttribute('class').includes('t-tag--disabled')).not.toBeTruthy();

        comp.setData({
          disabled: true,
          closable: true,
        });

        expect($tag.dom.getAttribute('class').includes('t-tag--closable')).toBeTruthy();
        expect($tag.dom.getAttribute('class').includes('t-tag--disabled')).toBeTruthy();
      });

      it(`: maxWidth`, async () => {
        const id = simulate.load({
          template: `
            <t-tag
              class="base"
              maxWidth="{{maxWidth}}"
            >危险</t-tag>`,

          data: {
            maxWidth: null,
          },
          methods: {},
          usingComponents: {
            't-tag': Tag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        // maxWidth值为80时，预期:80px
        comp.setData({
          maxWidth: 80,
        });

        const component = comp.querySelector('.base >>> .t-tag');
        expect(window.getComputedStyle(component.dom).maxWidth).toBe('80px');

        comp.setData({
          maxWidth: '120px',
        });
        // maxWidth值为`120px`时，预期: `120px`
        expect(window.getComputedStyle(component.dom).maxWidth).toBe('120px');

        comp.setData({
          maxWidth: '28',
        });
        // maxWidth值为 '28' ，预期: `128x`
        expect(window.getComputedStyle(component.dom).maxWidth).toBe('28px');
      });
    });

    describe('event', () => {
      it(`: mutiple`, async () => {
        const handleClick = jest.fn();
        const handleClose = jest.fn();
        const id = simulate.load({
          template: `
            <t-tag
              class="base"
              closable="{{closable}}"
              disabled="{{disabled}}"
              bind:click="handleClick"
              bind:close="handleClose"
            >危险</t-tag>`,

          data: {
            closable: true,
            disabled: true,
          },
          methods: {
            handleClick,
            handleClose,
          },
          usingComponents: {
            't-tag': Tag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $click = comp.querySelector('.base >>> .t-tag');
        const $close = comp.querySelector('.base >>> .t-tag__icon-close');

        // 禁用态：event 不会触发
        $click.dispatchEvent('tap');
        await simulate.sleep(10);
        expect(handleClick).toHaveBeenCalledTimes(0);
        $close.dispatchEvent('tap');
        await simulate.sleep(10);
        expect(handleClose).toHaveBeenCalledTimes(0);

        // 非禁用态：event
        comp.setData({
          disabled: false,
        });

        $click.dispatchEvent('tap');
        await simulate.sleep(10);
        expect(handleClick).toHaveBeenCalledTimes(1);
        $close.dispatchEvent('tap');
        await simulate.sleep(10);
        expect(handleClose).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('check-tag', () => {
    describe('props', () => {
      it(`: size`, async () => {
        const id = simulate.load({
          template: `
            <t-check-tag
              class="base"
              size="{{size}}"
            >选中</t-check-tag>`,

          data: {
            size: 'medium',
          },
          methods: {},
          usingComponents: {
            't-check-tag': CheckTag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $CheckTag = comp.querySelector('.base >>> .t-tag');

        // size预期值为 `medium`,
        expect($CheckTag.dom.getAttribute('class').includes('t-tag--medium')).toBeTruthy();

        comp.setData({
          size: 'large',
        });
        expect($CheckTag.dom.getAttribute('class').includes('t-tag--large')).toBeTruthy();
      });

      it(`:disabled`, async () => {
        const id = simulate.load({
          template: `
            <t-check-tag
              class="base"
              disabled="{{disabled}}"
            >危险</t-check-tag>`,

          data: {
            disabled: false,
          },
          methods: {},
          usingComponents: {
            't-check-tag': Tag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $CheckTag = comp.querySelector('.base >>> .t-tag');
        expect($CheckTag.dom.getAttribute('class').includes('t-tag--disabled')).not.toBeTruthy();

        comp.setData({
          disabled: true,
        });

        expect($CheckTag.dom.getAttribute('class').includes('t-tag--disabled')).toBeTruthy();
      });

      it(`: checked`, async () => {
        const id = simulate.load({
          template: `
            <t-check-tag
              class="base"
              checked
            >选中</t-check-tag>`,

          data: {
            size: '',
          },
          methods: {},
          usingComponents: {
            't-check-tag': CheckTag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $CheckTag = comp.querySelector('.base >>> .t-tag');

        expect($CheckTag.dom.getAttribute('class').includes('t-tag--checked')).toBeTruthy();
      });
    });

    describe('event', () => {
      it(`: mutiple`, async () => {
        const handleChange = jest.fn();
        const id = simulate.load({
          template: `
            <t-check-tag
              class="base"
              closable="{{closable}}"
              disabled="{{disabled}}"
              checked="{{checked}}"
              bind:change="handleChange"
            >选中</t-check-tag>`,

          data: {
            disabled: true,
            closable: true,
            checked: false,
          },
          methods: {
            handleChange,
          },
          usingComponents: {
            't-check-tag': CheckTag,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));

        const $CheckTag = comp.querySelector('.base');
        const $click = $CheckTag.querySelector('.t-tag');

        $click.dispatchEvent('tap');
        await simulate.sleep(10);
        expect(handleChange).toHaveBeenCalledTimes(0);
        expect($CheckTag.data.checked).toBe(false);

        $CheckTag.setData({
          disabled: false,
        });

        $click.dispatchEvent('tap');
        await simulate.sleep(10);
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect($CheckTag.data.checked).toBe(false);
      });
    });
  });
});
