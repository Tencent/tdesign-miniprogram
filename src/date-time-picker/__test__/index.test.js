import simulate from 'miniprogram-simulate';
import path from 'path';

describe('date-time-picker', () => {
  const dateTimePicker = simulate.load(path.resolve(__dirname, `../date-time-picker`), 't-date-time-picker', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });
  const handler = (dom) => {
    const trigger = (action, x, y) =>
      dom.dispatchEvent(`touch${action}`, {
        touches: [{ x, y }],
      });
    return {
      start: (x, y) => trigger('start', x, y),
      move: (x, y) => trigger('move', x, y),
      end: () => trigger('end'),
    };
  };
  const pick = (dom, step = 1) => {
    const target = handler(dom);

    target.start(0, 0);
    target.move(0, -35 * step);
    target.end();
  };

  it(':base', () => {
    const id = simulate.load({
      template: `<t-date-time-picker
        title="选择日期"
        mode="month"
        value="{{month}}"
        format="YYYY-MM"
        visible="{{visible}}" />`,
      data: {
        month: '2021-09',
        visible: true,
      },
      usingComponents: {
        't-date-time-picker': dateTimePicker,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':second', () => {
    const id = simulate.load({
      template: `<t-date-time-picker
        mode="second"
        visible="{{visible}}" />`,
      data: {
        visible: true,
      },
      usingComponents: {
        't-date-time-picker': dateTimePicker,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it('@event', async () => {
    let pickValue = '';
    const id = simulate.load({
      template: `<t-date-time-picker
        id="base"
        title="选择日期"
        mode="minute"
        value="{{value}}"
        format="{{format}}"
        bind:pick="handlePick"
        bind:change="handleConfirm"
        visible="{{visible}}" />`,
      data: {
        value: '2021-09-01 10:00',
        visible: true,
        format: '',
      },
      methods: {
        handlePick(e) {
          pickValue = e.detail.value;
        },
        handleConfirm(e) {
          this.setData({ value: e.detail.value });
        },
      },
      usingComponents: {
        't-date-time-picker': dateTimePicker,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $items = comp.querySelectorAll('#base >>> .t-date-time-picker__item');
    const $picker = comp.querySelector('#base >>> .t-date-time-picker');
    const $YearGroup = $items[0].querySelector('.t-picker-item__group');
    const $MonthGroup = $items[1].querySelector('.t-picker-item__group');
    const $DayGroup = $items[2].querySelector('.t-picker-item__group');
    const $HourGroup = $items[3].querySelector('.t-picker-item__group');
    const $MinGroup = $items[4].querySelector('.t-picker-item__group');
    const $confirm = $picker.querySelector('.t-picker__confirm');

    // pick Year
    pick($YearGroup, 3);
    await simulate.sleep(100);

    $confirm.dispatchEvent('tap');
    await simulate.sleep();

    const date = new Date('2024-09-01 10:00');
    expect(comp.instance.data.value).toBe(date.getTime());

    comp.setData({ format: 'YYYY-MM-DD hh:mm' });

    pick($YearGroup, -3);
    await simulate.sleep(100);

    expect(pickValue).toBe('2021-09-01 10:00');

    // pick Month
    pick($MonthGroup, 1);
    await simulate.sleep(100);
    expect(pickValue).toBe('2021-10-01 10:00');

    // pick Day
    pick($DayGroup, -1);
    await simulate.sleep(100);
    expect(pickValue).toBe('2021-10-01 10:00');

    pick($DayGroup, 5);
    await simulate.sleep(100);
    expect(pickValue).toBe('2021-10-06 10:00');

    // pick Hour
    pick($HourGroup, 2);
    await simulate.sleep(100);
    expect(pickValue).toBe('2021-10-06 12:00');

    // pick Minute
    pick($MinGroup, 10);
    await simulate.sleep(100);
    expect(pickValue).toBe('2021-10-06 12:10');
  });

  it('mode', async () => {
    const id = simulate.load({
      template: `<t-date-time-picker
        id="base"
        mode="{{mode}}"
        value="{{value}}"
        format="YYYY hh"
        visible />`,
      data: {
        value: '2021 10:00',
        mode: ['year', 'hour'],
      },
      usingComponents: {
        't-date-time-picker': dateTimePicker,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    const $items = comp.querySelectorAll('#base >>> .t-date-time-picker__item');

    expect($items.length).toBe(2);

    comp.setData({ mode: ['year'] });

    await simulate.sleep();

    expect(comp.querySelectorAll('#base >>> .t-date-time-picker__item').length).toBe(1);
  });

  it('edge case', async () => {
    const id = simulate.load({
      template: `<t-date-time-picker
        id="base"
        start="2021-12-01 10:00"
        end="2021-12-01 10:10"
        mode="minute"
        value="{{value}}"
        format="YYYY hh"
        visible />`,
      data: {
        value: '2021-12-01 10:00',
      },
      usingComponents: {
        't-date-time-picker': dateTimePicker,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    const $items = comp.querySelectorAll('#base >>> .t-date-time-picker__item');

    expect($items.length).toBe(5);
  });
});
