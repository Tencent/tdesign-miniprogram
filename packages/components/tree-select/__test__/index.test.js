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
});
