import simulate from 'miniprogram-simulate';
import path from 'path';

describe('calendar', () => {
  const calendar = load(path.resolve(__dirname, `../calendar`), 't-calendar');

  it(':base', () => {
    const id = simulate.load({
      template: `<t-calendar value="{{value}}" minDate="{{minDate}}" maxDate="{{maxDate}}" visible></t-calendar>`,
      data: {
        minDate: +new Date(2022, 9, 1),
        maxDate: +new Date(2022, 9, 31),
        value: +new Date(2022, 9, 16),
      },
      usingComponents: {
        't-calendar': calendar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':action', async () => {
    const date = new Date(2022, 0, 2);
    const onConfirm = jest.fn();
    const id = simulate.load({
      template: `<t-calendar minDate="{{min}}" bind:confirm="onConfirm" id="base" visible></t-calendar>`,
      data: {
        min: date.getTime(),
      },
      methods: {
        onConfirm,
      },
      usingComponents: {
        't-calendar': calendar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $calendar = comp.querySelector('#base');
    const [$disbledItem, , $activeItem] = $calendar.querySelectorAll('.t-calendar__dates-item');
    const $confirmBtn = $calendar.querySelector('.t-calendar__confirm-btn');

    expect($calendar.instance.data.value).toBe(date.getTime());

    $disbledItem.dispatchEvent('tap');
    await simulate.sleep();

    expect($calendar.instance.data.value).toBe(date.getTime());

    $activeItem.dispatchEvent('tap');
    await simulate.sleep();

    expect($calendar.instance.data.value).toBe(date.getTime()); // 点击时不修改 value 值

    $confirmBtn.dispatchEvent('tap');
    await simulate.sleep();

    expect(onConfirm).toHaveBeenCalled();
    expect($calendar.instance.data.value).toBe(date.getTime() + 24 * 3600 * 1000);
  });

  it(':without-button', async () => {
    const date = new Date(2022, 0, 1);
    const id = simulate.load({
      template: `<t-calendar minDate="{{min}}" confirm-btn="{{null}}" id="base" visible></t-calendar>`,
      data: {
        min: date.getTime(),
      },
      usingComponents: {
        't-calendar': calendar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $calendar = comp.querySelector('#base');
    const [, $activeItem] = $calendar.querySelectorAll('.t-calendar__dates-item');

    expect($calendar.instance.data.value).toBe(date.getTime());

    $activeItem.dispatchEvent('tap');
    await simulate.sleep();

    expect($calendar.instance.data.value).toBe(date.getTime() + 24 * 3600 * 1000);
  });

  it(':confirm', async () => {
    const date = new Date(2022, 0, 1);
    const id = simulate.load({
      template: `<t-calendar minDate="{{min}}" id="base" visible></t-calendar>`,
      data: {
        min: date.getTime(),
      },
      usingComponents: {
        't-calendar': calendar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $calendar = comp.querySelector('#base');
    const $closeBtn = $calendar.querySelector('.t-calendar__close-btn');

    $closeBtn.dispatchEvent('tap');
    await simulate.sleep();

    expect($calendar.instance.visible).toBeFalsy();
  });

  it(':custom button', async () => {
    const id = simulate.load({
      template: `<t-calendar confirm-btn="{{confirmBtn}}" id="base" visible></t-calendar>`,
      data: {
        confirmBtn: { content: 'ok' },
      },
      usingComponents: {
        't-calendar': calendar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $calendar = comp.querySelector('#base');
    const $confirmBtn = $calendar.querySelector('.t-calendar__confirm-btn');

    $confirmBtn.dispatchEvent('tap');
    await simulate.sleep();

    expect($confirmBtn.dom.textContent).toBe('ok');
  });
});
