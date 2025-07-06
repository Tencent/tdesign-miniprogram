import path from 'path';
import simulate from 'miniprogram-simulate';

describe('countdown', () => {
  const countdown = load(path.resolve(__dirname, `../count-down`), 't-count-down');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-count-down class="countdown" style="{{style}}" customStyle="{{customStyle}}"></t-count-down>`,
      usingComponents: {
        't-count-down': countdown,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $countdown = comp.querySelector('.countdown >>> .t-count-down');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect(
        $countdown.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
      ).toBeTruthy();
    } else {
      expect($countdown.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':base', async () => {
    const id = simulate.load({
      template: `<t-count-down time="{{1000}}"></t-count-down>`,
      usingComponents: {
        't-count-down': countdown,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();

    await simulate.sleep(1010);

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':millisecond', async () => {
    const id = simulate.load({
      template: `<t-count-down id="cd" time="{{1000}}" millisecond></t-count-down>`,
      usingComponents: {
        't-count-down': countdown,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep(500);

    expect(comp.toJSON()).toMatchSnapshot();

    comp.detach();

    const $cd = comp.querySelector('#cd');
    expect($cd.instance.timeoutId).toBeNull();
  });

  it(':autoStart', async () => {
    const id = simulate.load({
      template: `<t-count-down time="{{1000}}" autoStart="{{false}}"></t-count-down>`,
      usingComponents: {
        't-count-down': countdown,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep(1000);

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
