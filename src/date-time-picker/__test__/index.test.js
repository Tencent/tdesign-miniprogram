import simulate from 'miniprogram-simulate';
import path from 'path';

describe('date-time-picker', () => {
  const dateTimePicker = simulate.load(path.resolve(__dirname, `../date-time-picker`), 't-date-time-picker', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
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

  it('@event', () => {
    const id = simulate.load({
      template: `<t-date-time-picker
        title="选择日期"
        mode="minute"
        value="{{value}}"
        format="YYYY-MM"
        visible="{{visible}}" />`,
      data: {
        value: '2021-09-01 10:00',
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
});
