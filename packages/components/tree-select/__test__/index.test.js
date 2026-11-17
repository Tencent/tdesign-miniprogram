import path from 'path';
import simulate from 'miniprogram-simulate';

describe('tree-select', () => {
  const treeSelect = load(path.resolve(__dirname, `../tree-select`));
  const options = [
    { label: 'First parent', value: 1, children: [{ label: 'First leaf', value: 11 }] },
    { label: 'Second parent', value: 2, children: [{ label: 'Second leaf', value: 22 }] },
  ];
  const falsyOptions = [
    { label: 'Other parent', value: 1, children: [{ label: 'Other leaf', value: 11 }] },
    { label: 'Zero parent', value: 0, children: [{ label: 'Zero leaf', value: 5 }] },
  ];
  let component;

  function render(props = {}) {
    component = simulate.render(treeSelect, { options, ...props });
    component.attach(document.createElement('parent-wrapper'));
    return component;
  }

  afterEach(() => component?.detach());

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const id = simulate.load({
        template: `<t-tree-select class="tree-select" style="{{style}}" customStyle="{{customStyle}}"></t-tree-select>`,
        usingComponents: {
          't-tree-select': treeSelect,
        },
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $treeSelect = comp.querySelector('.tree-select >>> .t-tree-select');
      // expect(comp.toJSON()).toMatchSnapshot();
      if (VIRTUAL_HOST) {
        expect(
          $treeSelect.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
        ).toBeTruthy();
      } else {
        expect($treeSelect.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it.each([0, ''])(': value renders the matching children for falsy value %p', (value) => {
      const zeroOptions = [falsyOptions[0], { ...falsyOptions[1], value }];
      render({ options: zeroOptions, value: [value, 5] });
      expect(component.data.treeOptions[1].map((item) => item.value)).toEqual([5]);
      expect(component.data.innerValue).toEqual([value, 5]);
      expect(component.dom.textContent).toContain('Zero leaf');
      expect(component.dom.textContent).not.toContain('Other leaf');
    });

    it(': customValue keeps a zero customValue ahead of a nonzero value', () => {
      render({ options: falsyOptions, value: [1, 11], customValue: [0, 5] });
      expect(component.data.treeOptions[1].map((item) => item.value)).toEqual([5]);
      expect(component.data.innerValue).toEqual([0, 5]);
      expect(component.dom.textContent).toContain('Zero leaf');
    });

    it(': value follows a zero value in the middle column', () => {
      render({ options: [{ label: 'Root', value: 7, children: falsyOptions }], value: [7, 0, 5] });
      expect(component.data.treeOptions[2].map((item) => item.value)).toEqual([5]);
      expect(component.data.innerValue).toEqual([7, 0, 5]);
      expect(component.dom.textContent).toContain('Zero leaf');
    });

    it(': value falls back to the first branch for an unmatched value', () => {
      render({ value: [99] });
      expect(component.data.treeOptions[1].map((item) => item.value)).toEqual([11]);
      expect(component.dom.textContent).toContain('First leaf');
    });

    it(': value=[] falls back to the first branch', () => {
      render({ value: [] });
      expect(component.data.innerValue).toEqual([1, 11]);
      expect(component.dom.textContent).toContain('First leaf');
      expect(component.dom.textContent).not.toContain('Second leaf');
    });

    it(': customValue=[] stays unselected', () => {
      render({ value: [2, 22], customValue: [] });
      expect(component.data.innerValue).toEqual([]);
      expect(component.data.treeOptions[1].map((item) => item.value)).toEqual([22]);
    });

    it(': value=[] falls back to the first branch in multiple mode', () => {
      render({ value: [], multiple: true });
      expect(component.data.innerValue).toEqual([1, [11]]);
    });

    it(': options clears the rendered columns when becoming empty, and rebuilds after restore', async () => {
      render({ value: [2, 22] });
      const selected = JSON.parse(JSON.stringify(component.data.innerValue));
      const change = jest.fn();
      component.addEventListener('change', change);

      component.setData({ options: [] });
      await simulate.sleep(10);
      expect(component.data.treeOptions).toEqual([]);
      expect(component.dom.textContent.trim()).toBe('');
      expect(component.data.innerValue).toEqual(selected);
      expect(change).not.toHaveBeenCalled();

      component.setData({ options });
      await simulate.sleep(10);
      expect(component.data.innerValue).toEqual([2, 22]);
      expect(component.dom.textContent).toContain('Second leaf');
      expect(component.dom.textContent).not.toContain('First leaf');
    });
  });

  describe('switch parent', () => {
    // 三层：父级 -> 中间层 -> 叶子层
    const deepOptions = [
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

    it('rebuilds the child columns when switching parent (issue #4664)', async () => {
      render({ options: deepOptions, value: ['a', 'a2', 'a2x'] });
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
      render({ options: deepOptions, value: ['a', 'a2', 'a2x'] });
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
});
