import path from 'path';
import simulate from 'miniprogram-simulate';

describe('TreeSelect falsy node values', () => {
  const treeSelect = load(path.resolve(__dirname, '../tree-select'));
  let component;

  const options = [
    { label: 'Other parent', value: 1, children: [{ label: 'Other leaf', value: 11 }] },
    { label: 'Zero parent', value: 0, children: [{ label: 'Zero leaf', value: 5 }] },
  ];

  function mount(data = {}) {
    const id = simulate.load({
      template: `<t-tree-select id="tree" options="{{options}}" value="{{value}}" custom-value="{{customValue}}" keys="{{keys}}" multiple="{{multiple}}" bind:change="onChange" />`,
      usingComponents: { 't-tree-select': treeSelect },
      data: { options, value: [0, 5], ...data },
      methods: {
        onChange(event) {
          this.setData({ value: event.detail.value });
        },
      },
    });
    component = simulate.render(id);
    component.attach(document.createElement('parent-wrapper'));
    return component.querySelector('#tree');
  }

  afterEach(() => {
    component?.detach();
  });

  it.each([0, ''])('renders the matching children for value %p', (value) => {
    const tree = mount({
      options: [options[0], { ...options[1], value }],
      value: [value, 5],
    });
    expect(tree.data.treeOptions[1].map((item) => item.value)).toEqual([5]);
    expect(tree.data.innerValue).toEqual([value, 5]);
    expect(component.dom.textContent).toContain('Zero leaf');
    expect(component.dom.textContent).not.toContain('Other leaf');
  });

  it('keeps a zero customValue ahead of a nonzero value', () => {
    const tree = mount({ value: [1, 11], customValue: [0, 5] });
    expect(tree.data.treeOptions[1].map((item) => item.value)).toEqual([5]);
    expect(tree.data.innerValue).toEqual([0, 5]);
    expect(component.dom.textContent).toContain('Zero leaf');
  });

  it('follows a zero value in the middle column', () => {
    const tree = mount({ options: [{ label: 'Root', value: 7, children: options }], value: [7, 0, 5] });
    expect(tree.data.treeOptions[2].map((item) => item.value)).toEqual([5]);
    expect(tree.data.innerValue).toEqual([7, 0, 5]);
    expect(component.dom.textContent).toContain('Zero leaf');
  });

  it('supports zero values with custom keys', () => {
    const tree = mount({
      keys: { value: 'id', label: 'name', children: 'items' },
      options: [
        { name: 'Other parent', id: 1, items: [{ name: 'Other leaf', id: 11 }] },
        { name: 'Zero parent', id: 0, items: [{ name: 'Zero leaf', id: 5 }] },
      ],
    });
    expect(tree.data.treeOptions[1].map((item) => item.value)).toEqual([5]);
    expect(component.dom.textContent).toContain('Zero leaf');
  });

  it('preserves the selected leaf array in multiple mode', () => {
    const tree = mount({ value: [0, [5]], multiple: true });
    expect(tree.data.treeOptions[1].map((item) => item.value)).toEqual([5]);
    expect(tree.data.innerValue).toEqual([0, [5]]);
    expect(component.dom.textContent).toContain('Zero leaf');
  });

  it('updates the rendered children after clicking the zero parent', async () => {
    const tree = mount({ value: [1, 11] });
    expect(component.dom.textContent).toContain('Other leaf');
    const zeroParent = component.querySelector('#tree >>> #scroll-to-0');
    expect(zeroParent).toBeTruthy();
    zeroParent.dispatchEvent('tap');
    await simulate.sleep(10);
    expect(tree.data.innerValue[0]).toBe(0);
    expect(tree.data.treeOptions[1].map((item) => item.value)).toEqual([5]);
    expect(component.dom.textContent).toContain('Zero leaf');
    expect(component.dom.textContent).not.toContain('Other leaf');
  });

  it.each([[], null, undefined, [99]])('retains the first branch fallback for %p', (value) => {
    const tree = mount({ value });
    expect(tree.data.treeOptions[1].map((item) => item.value)).toEqual([11]);
    expect(component.dom.textContent).toContain('Other leaf');
  });

  it('keeps customValue=[] unselected instead of applying default values', () => {
    const tree = mount({ value: [], customValue: [] });
    expect(tree.data.innerValue).toEqual([]);
    expect(tree.data.treeOptions[1].map((item) => item.value)).toEqual([11]);
  });
});
