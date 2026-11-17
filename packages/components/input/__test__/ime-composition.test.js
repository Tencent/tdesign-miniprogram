// issue #4606: IME 组合输入（韩语等）时不应把中间态回写给原生控件，
// 否则输入法组合态被打断导致内容闪烁。本测试模拟连续组合中间态 input 事件，
// 验证 change 事件始终携带最新值、外部受控更新仍可同步。
import path from 'path';
import simulate from 'miniprogram-simulate';

describe(`input ime composition (issue #4606)`, () => {
  const input = load(path.resolve(__dirname, `../input`), 't-input');

  it(`: 韩语组合输入过程中 change 事件携带最新中间态`, async () => {
    const handleChange = jest.fn();
    const id = simulate.load({
      template: `<t-input class="base" value="{{value}}" bind:change="handleChange"></t-input>`,
      data: { value: `` },
      methods: { handleChange },
      usingComponents: {
        't-input': input,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $input = comp.querySelector('.base >>> .t-input__control');

    // 模拟韩语 IME 组合序列：ㄱ -> 가 -> 각
    $input.dispatchEvent('input', { detail: { value: 'ㄱ' } });
    await simulate.sleep(0);
    $input.dispatchEvent('input', { detail: { value: '가' } });
    await simulate.sleep(0);
    $input.dispatchEvent('input', { detail: { value: '각' } });
    await simulate.sleep(0);

    expect(handleChange).toHaveBeenCalledTimes(3);
    expect(handleChange.mock.calls[2][0].detail.value).toBe('각');
  });

  it(`: 外部更新 value 属性同步到内部展示`, async () => {
    const id = simulate.load({
      template: `<t-input class="base" value="{{value}}"></t-input>`,
      data: { value: 'a' },
      usingComponents: {
        't-input': input,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const component = comp.querySelector('.base');

    comp.setData({ value: 'hello' });
    await simulate.sleep(0);
    expect(component.instance.data.value).toBe('hello');
  });
});