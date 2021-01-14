import simulate from 'miniprogram-simulate';
import getDemoPath from '../../../test/utils/getDemoPath';

describe('radio-group', () => {
  let id;
  beforeAll(() => {
    id = simulate.load(getDemoPath('radio', 'group'), {
      less: true,
    });
  });
  test('value should update correctly', async () => {
    const items = [
      {
        name: 'radio1',
        title: '单行标题',
        bordered: true,
      },
      {
        name: 'radio2',
        title: '双行标题，长文本自动换行，该选项的描述是一段很长的内容',
        bordered: true,
      },
      {
        name: 'radio3',
        title: '双行标题，长文本自动换行，该选项的描述是一段很长的内容',
        label: '一段很长很长的内容文字，一段很长很长的内容文字，一段很长很长的内容文字',
        bordered: false,
      },
    ];
    const container = simulate.render(id, {
      items,
      value: 'radio1',
    });
    container.attach(document.createElement('parent-wrapper'));
    const radioGroup = container.querySelector('.radio-group');
    radioGroup.dispatchEvent('change', {
      detail: {
        name: 'radio2',
        checked: true,
      },
    });
    await simulate.sleep(10);
    expect(container.data.currentValue).toBe('radio2');
    radioGroup.dispatchEvent('change', {
      detail: {
        name: 'radio3',
        checked: true,
      },
    });
    await simulate.sleep(10);
    expect(container.data.currentValue).toBe('radio3');
  });
});
