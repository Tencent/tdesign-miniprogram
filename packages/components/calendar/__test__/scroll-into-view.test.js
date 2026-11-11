import path from 'path';
import simulate from 'miniprogram-simulate';

describe('calendar scrollIntoView', () => {
  const calendar = load(path.resolve(__dirname, `../calendar`));

  const minDate = new Date(2016, 10, 1).getTime();
  const maxDate = new Date(2026, 11, 1).getTime();
  const value = [new Date(2022, 11, 5).getTime(), new Date(2022, 11, 10).getTime()];

  let component;
  const render = (props = {}) => {
    component = simulate.render(calendar, {
      minDate,
      maxDate,
      value,
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
    render();
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
