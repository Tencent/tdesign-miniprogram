import path from 'path';
import simulate from 'miniprogram-simulate';

describe('tree-select switch parent', () => {
  const treeSelect = load(path.resolve(__dirname, `../tree-select`));

  // 三层：父级 -> 中间层 -> 叶子层
  const options = [
    {
      label: 'A',
      value: 'a',
      children: [
        { label: 'A1', value: 'a1', children: [{ label: 'A1x', value: 'a1x' }] },
        { label: 'A2', value: 'a2', children: [{ label: 'A2x', value: 'a2x' }] },
      ],
    },
    {
      label: 'B',
      value: 'b',
      children: [
        { label: 'B1', value: 'b1', children: [{ label: 'B1x', value: 'b1x' }] },
        { label: 'B2', value: 'b2', children: [{ label: 'B2x', value: 'b2x' }] },
      ],
    },
  ];

  let component;
  const render = (props = {}) => {
    component = simulate.render(treeSelect, { options, ...props });
    component.attach(document.createElement('parent-wrapper'));
    return component;
  };

  afterEach(() => component?.detach());

  it('rebuilds the child columns when switching parent (issue #4664)', async () => {
    render({ value: ['a', 'a2', 'a2x'] });
    await simulate.sleep(10);

    const inst = component.instance;
    // 初始：A 下面是 A1/A2
    let level1 = inst.data.treeOptions[1].map((item) => item.value);
    expect(level1).toEqual(['a1', 'a2']);
    expect(inst.data.innerValue[1]).toBe('a2');

    // 切到父级 B
    inst.onRootChange({ detail: { value: 'b' } });
    await simulate.sleep(10);

    // 切父级后，第二列必须换成 B 的子级
    level1 = inst.data.treeOptions[1].map((item) => item.value);
    expect(level1).toEqual(['b1', 'b2']);
  });

  it('keeps intermediate highlight valid after switching parent (issue #4664)', async () => {
    render({ value: ['a', 'a2', 'a2x'] });
    await simulate.sleep(10);

    const inst = component.instance;
    inst.onRootChange({ detail: { value: 'b' } });
    await simulate.sleep(10);

    // 中间层高亮取决于 item.value === innerValue[level]。
    // 切到 B 之后，innerValue[1] 必须落在 B 的子级里，
    // 仍是旧父级的 'a2' 就意味着高亮对不上任何一项。
    const level1Values = inst.data.treeOptions[1].map((item) => item.value);
    expect(level1Values).toEqual(['b1', 'b2']);
    expect(inst.data.innerValue[1]).toBe('b1');
    expect(inst.data.innerValue[0]).toBe('b');
  });
});
