import path from 'path';
import simulate from 'miniprogram-simulate';

describe('cell', () => {
  const cell = load(path.resolve(__dirname, `../cell`));

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-cell class="cell" style="{{style}}" customStyle="{{customStyle}}"></t-cell>`,
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },

      usingComponents: {
        't-cell': cell,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $cell = comp.querySelector('.cell >>> .t-cell');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($cell.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($cell.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(`:base`, () => {
    const id = load({
      template: `<t-cell id="cell"></t-cell>`,
      usingComponents: {
        't-cell': cell,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(`:event`, async () => {
    const handleClick = jest.fn();
    const id = load({
      template: `<t-cell id="cell" bind:click="handleClick"></t-cell>`,
      usingComponents: {
        't-cell': cell,
      },
      methods: {
        handleClick,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.querySelector('#cell >>> .t-cell').dispatchEvent('tap');

    await simulate.sleep(10);

    expect(handleClick).toHaveBeenCalled();
  });

  it(`:jump`, async () => {
    const handleClick = jest.fn();
    const jumpType = 'navigateTo';
    const id = load({
      template: `<t-cell id="cell" jumpType="{{jumpType}}" url="mockUrl" bind:click="handleClick"></t-cell>`,
      usingComponents: {
        't-cell': cell,
      },
      data: {
        jumpType,
      },
      methods: {
        handleClick,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.querySelector('#cell >>> .t-cell').dispatchEvent('tap');

    await simulate.sleep(10);

    expect(handleClick).toHaveBeenCalled();
  });

  it(`:with group`, () => {
    const group = load(path.resolve(__dirname, `../../cell-group/cell-group`));
    const id = load({
      template: `<t-cell-group></t-cell-group>`,
      usingComponents: {
        't-cell-group': group,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
