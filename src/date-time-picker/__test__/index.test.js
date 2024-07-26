import path from 'path';
import simulate from 'miniprogram-simulate';

describe('date-time-picker', () => {
  const id = load(path.resolve(__dirname, `./index`));
  jest.resetModules();
  const dateTimePicker = load(path.resolve(__dirname, `../date-time-picker`), 't-date-time-picker');
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
    target.move(0, -34 * step); // itemHeight / 1.2
    target.end();
  };

  it(': style && customStyle', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    comp.setData({ monthVisible: true });

    const $picker = comp.querySelector('#month >>> .t-picker');

    if (VIRTUAL_HOST) {
      expect($picker.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    }
  });

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

    // expect(comp.toJSON()).toMatchSnapshot();
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

  describe('controlled or not', () => {
    it('controlled', async () => {
      let enableChange = true;
      const id = simulate.load({
        template: `<t-date-time-picker
          id="base"
          start="2020"
          end="2030"
          mode="year"
          value="{{value}}"
          bind:change="onChange"
          visible />`,
        data: {
          value: '2020-12-01',
        },
        methods: {
          onChange(e) {
            if (enableChange) {
              this.setData({ value: e.detail.value });
            }
          },
        },
        usingComponents: {
          't-date-time-picker': dateTimePicker,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const [$item] = comp.querySelectorAll('#base >>> .t-date-time-picker__item');
      const $YearGroup = $item.querySelector('.t-picker-item__group');
      const $picker = comp.querySelector('#base >>> .t-date-time-picker');
      const $confirm = $picker.querySelector('.t-picker__confirm');
      const $cancel = $picker.querySelector('.t-picker__cancel');

      const mockScroll = async () => {
        pick($YearGroup, 2);
        await simulate.sleep(100);
      };

      // case1: 滚动完取消，应该回到原点
      await mockScroll();
      expect($item.data.offset).toBe(-2 * 40);

      $cancel.dispatchEvent('tap');
      await simulate.sleep();

      expect($item.data.offset).toBe(-0);

      // case2: 滚动完确认，如果修改了value，应该保留滚动的位置
      await mockScroll();

      $confirm.dispatchEvent('tap');
      await simulate.sleep();

      expect($item.data.offset).toBe(-2 * 40);

      // case3: 滚动完确认，没修改value，应该维持在上次滚动的位置
      enableChange = false;
      await mockScroll();
      // 模拟确认
      $confirm.dispatchEvent('tap');
      await simulate.sleep();
      expect($item.data.offset).toBe(-2 * 40);
    });

    it('uncontrolled', async () => {
      const id = simulate.load({
        template: `<t-date-time-picker
          id="base"
          start="2020"
          end="2030"
          mode="year"
          default-value="2020"
          visible />`,
        usingComponents: {
          't-date-time-picker': dateTimePicker,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const [$item] = comp.querySelectorAll('#base >>> .t-date-time-picker__item');
      const $YearGroup = $item.querySelector('.t-picker-item__group');
      const $picker = comp.querySelector('#base >>> .t-date-time-picker');
      const $confirm = $picker.querySelector('.t-picker__confirm');
      const $cancel = $picker.querySelector('.t-picker__cancel');

      const mockScroll = async () => {
        pick($YearGroup, 2);
        await simulate.sleep(100);
      };

      // case1: 滚动完取消，应该回到原点
      await mockScroll();

      $cancel.dispatchEvent('tap');
      await simulate.sleep();

      expect($item.data.offset).toBe(-0);

      // case2: 滚动完确认，因为是非受控，应该保留滚动的位置
      await mockScroll();

      $confirm.dispatchEvent('tap');
      await simulate.sleep();

      expect($item.data.offset).toBe(-2 * 40);
    });
  });
});
