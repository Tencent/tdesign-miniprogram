import path from 'path';
import simulate from 'miniprogram-simulate';

describe('TreeSelect empty options', () => {
  const id = load(path.resolve(__dirname, '../tree-select'));
  const options = [
    { label: 'First parent', value: 1, children: [{ label: 'First leaf', value: 11 }] },
    { label: 'Second parent', value: 2, children: [{ label: 'Second leaf', value: 22 }] },
  ];
  let component;

  function render(props = {}) {
    component = simulate.render(id, { options, ...props });
    component.attach(document.createElement('parent-wrapper'));
    return component;
  }

  afterEach(() => component?.detach());

  it.each([
    ['value', { value: [2, 22] }],
    ['customValue', { value: [1, 11], customValue: [2, 22] }],
    ['multiple', { value: [2, [22]], multiple: true }],
    ['defaultValue', { defaultValue: [2, 22] }],
  ])('removes rendered columns when %s options become empty', async (_, props) => {
    render(props);
    expect(component.dom.textContent).toContain('Second leaf');
    const selected = JSON.parse(JSON.stringify(component.data.innerValue));
    const change = jest.fn();
    component.addEventListener('change', change);
    component.setData({ options: [] });
    await simulate.sleep(10);
    expect(component.data.treeOptions).toEqual([]);
    expect(component.dom.textContent).not.toContain('parent');
    expect(component.dom.textContent).not.toContain('leaf');
    expect(component.data.innerValue).toEqual(selected);
    expect(change).not.toHaveBeenCalled();
  });

  it('clears columns with custom keys', async () => {
    render({
      options: [{ name: 'Named parent', id: 2, nodes: [{ name: 'Named leaf', id: 22 }] }],
      keys: { label: 'name', value: 'id', children: 'nodes' },
      value: [2, 22],
    });
    expect(component.dom.textContent).toContain('Named leaf');
    component.setData({ options: [] });
    await simulate.sleep(10);
    expect(component.data.treeOptions).toEqual([]);
    expect(component.dom.textContent).not.toContain('Named');
  });

  it('renders no options when initially empty', () => {
    render({ options: [], value: [2, 22] });
    expect(component.data.treeOptions || []).toEqual([]);
    expect(component.dom.textContent.trim()).toBe('');
  });

  it('restores the selected branch when options return', async () => {
    render({ value: [2, 22] });
    component.setData({ options: [] });
    await simulate.sleep(10);
    component.setData({ options });
    await simulate.sleep(10);
    expect(component.data.innerValue).toEqual([2, 22]);
    expect(component.dom.textContent).toContain('Second leaf');
    expect(component.dom.textContent).not.toContain('First leaf');
  });

  it('renders asynchronously supplied options', async () => {
    render({ options: [], value: [2, 22] });
    component.setData({ options });
    await simulate.sleep(10);
    expect(component.data.innerValue).toEqual([2, 22]);
    expect(component.dom.textContent).toContain('Second leaf');
  });
});
