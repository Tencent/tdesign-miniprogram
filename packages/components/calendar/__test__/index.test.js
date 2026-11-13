import path from 'path';
import simulate from 'miniprogram-simulate';

describe('calendar', () => {
  const calendar = load(path.resolve(__dirname, `../calendar`), 't-calendar');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-calendar class="calendar" style="{{style}}" customStyle="{{customStyle}}"></t-calendar>`,
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },

      usingComponents: {
        't-calendar': calendar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $calendar = comp.querySelector('.calendar >>> .t-calendar');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($calendar.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($calendar.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

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
    const [$disabledItem, , $activeItem] = $calendar.querySelectorAll('.t-calendar__dates-item');

    expect($calendar.instance.data.value).toBe(date.getTime());

    $disabledItem.dispatchEvent('tap');
    await simulate.sleep();

    expect($calendar.instance.data.value).toBe(date.getTime());

    $activeItem.dispatchEvent('tap');
    await simulate.sleep();

    expect($calendar.instance.data.value).toBe(date.getTime()); // 点击时不修改 value 值

    if (!VIRTUAL_HOST) {
      const $confirmBtn = $calendar.querySelector('.t-calendar__confirm-btn');
      $confirmBtn.dispatchEvent('tap');
      await simulate.sleep();

      expect(onConfirm).toHaveBeenCalled();
      expect($calendar.instance.data.value).toBe(date.getTime() + 24 * 3600 * 1000);
    }
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
    if (!VIRTUAL_HOST) {
      const $closeBtn = $calendar.querySelector('.t-calendar__close-btn');

      $closeBtn.dispatchEvent('tap');
      await simulate.sleep();

      expect($calendar.instance.visible).toBeFalsy();
    }
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

    if (!VIRTUAL_HOST) {
      const $confirmBtn = $calendar.querySelector('.t-calendar__confirm-btn');

      $confirmBtn.dispatchEvent('tap');
      await simulate.sleep();

      expect($confirmBtn.dom.textContent).toBe('ok');
    }
  });

  it(':refreshes current panel after recalculating months', async () => {
    const id = simulate.load({
      template: `<t-calendar id="base" visible switch-mode="month" value="{{value}}" minDate="{{minDate}}" maxDate="{{maxDate}}"></t-calendar>`,
      data: {
        value: +new Date(2022, 1, 15),
        minDate: +new Date(2022, 1, 1),
        maxDate: +new Date(2022, 2, 31),
      },
      usingComponents: {
        't-calendar': calendar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $calendar = comp.querySelector('#base');
    const { instance } = $calendar;

    instance.base.format = (day) => ({ ...day, suffix: 'updated' });
    instance.calcMonths();
    await simulate.sleep();

    expect(instance.data.currentMonth[0].months[0].suffix).toBe('updated');
  });

  describe('scrollIntoView', () => {
    const minDate = new Date(2016, 10, 1).getTime();
    const maxDate = new Date(2026, 11, 1).getTime();
    const rangeValue = [new Date(2022, 11, 5).getTime(), new Date(2022, 11, 10).getTime()];

    let component;
    const renderRange = (props = {}) => {
      component = simulate.render(calendar, {
        minDate,
        maxDate,
        value: rangeValue,
        type: 'range',
        usePopup: true,
        visible: false,
        ...props,
      });
      component.attach(document.createElement('parent-wrapper'));
      return component;
    };

    afterEach(() => component?.detach());

    it('positions on the selected month when opened (issue #4718)', async () => {
      renderRange();
      await simulate.sleep(20);

      const inst = component.instance;

      // 打开弹窗
      inst.setData({ visible: true });
      await simulate.sleep(30);

      const { currentMonth, scrollIntoView } = inst.data;

      // 选中区间在 2022 年 12 月，面板必须定位到该月
      expect(currentMonth[0]).toEqual(expect.objectContaining({ year: 2022, month: 11 }));
      expect(scrollIntoView).toBe('year_2022_month_11');

      // 区间标记也要落在正确的日期上，否则定位到月份但高亮仍然错位
      const days = currentMonth[0].months;
      expect(days.find((d) => d.type === 'start')?.day).toBe(5);
      expect(days.find((d) => d.type === 'end')?.day).toBe(10);
    });
  });
});
