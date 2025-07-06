import path from 'path';
import simulate from 'miniprogram-simulate';

describe('radio', () => {
  // test('comp should trigger change events', async () => {
  //   const container = simulate.render(radio);
  //   const comp = container.instance;
  //   comp.triggerEvent = jest.fn();
  //   comp.doChange();
  //   expect(comp.triggerEvent).toHaveBeenCalled();
  // });
  const id = load(path.resolve(__dirname, `./index`));

  it(`: style && customStyle`, async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $radioGroup = comp.querySelector('.group >>> .t-radio-group');
    const $radio = comp.querySelector('.a >>> .t-radio');

    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect(
        $radioGroup.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
      ).toBeTruthy();
      expect($radio.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($radioGroup.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      expect($radio.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':base', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const radio = comp.querySelector('.single');

    expect(radio.data.checked).not.toBeTruthy();

    radio.querySelector('.t-radio__icon').dispatchEvent('tap');
    await simulate.sleep(10);

    expect(radio.data.checked).toBeTruthy();
  });

  it(':disabled', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const radio = comp.querySelector('.disable');

    expect(radio.data.checked).not.toBeTruthy();

    radio.querySelector('.t-radio__icon').dispatchEvent('tap');
    await simulate.sleep(10);

    expect(radio.data.checked).not.toBeTruthy();
  });

  describe('with group', () => {
    it(`:base`, async () => {
      // const id = simulate.load({
      //   template: `
      //   <t-radio-group class="group" value="1">
      //     <t-radio class="a" value="1"></t-radio>
      //   </t-radio-group>
      //   `,
      //   usingComponents: {
      //     't-radio': './radio',
      //     't-radio-group': '../../radio-group/radio-group',
      //   },
      //   rootPath: path.resolve(__dirname, '../..'),
      //   compiler: 'official',
      // });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // const group = comp.querySelector('.group')
      const a = comp.querySelector('.a');

      expect(a.data.checked).toBeTruthy();

      const b = comp.querySelector('.b >>> .t-radio__icon');

      b.dispatchEvent('tap');

      await simulate.sleep(10);

      expect(comp.data.value).toBe('2');
    });

    it(`:disabled content`, async () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const a = comp.querySelector('.a');

      expect(a.data.checked).toBeTruthy();

      const b = comp.querySelector('.b >>> .t-radio__icon');

      b.dispatchEvent('tap');

      await simulate.sleep(10);

      expect(comp.data.value).toBe('2');

      const contentOfC = comp.querySelector('.c >>> .t-radio__content');
      contentOfC.dispatchEvent('tap');
      await simulate.sleep(10);

      expect(comp.data.value).toBe('2');

      const iconOfC = comp.querySelector('.c >>> .t-radio__icon');
      iconOfC.dispatchEvent('tap');
      await simulate.sleep(10);

      expect(comp.data.value).toBe('3');
    });

    it(':with options', () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const group = comp.querySelector('#optionsGroup');
      group.instance.handleRadioChange({
        detail: { checked: false },
        target: {
          dataset: { value: 'b' },
        },
      });

      expect(group.data.value).toBe('b');
    });
  });
});
