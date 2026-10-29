import PickerItem from '../picker-item';

jest.mock('../../common/src/index', () => ({
  SuperComponent: class {},
  wxComponent: () => (component) => component,
}));

describe('picker-item mouse wheel', () => {
  const render = (count = 12) => {
    const comp = new PickerItem();
    Object.assign(comp, comp.methods);
    comp.setData = (data, callback) => {
      Object.assign(comp.data, data);
      callback?.();
    };
    comp.lifetimes.created.call(comp);
    comp.data.options = Array.from({ length: count }, (_, value) => ({ label: `${value}`, value }));
    comp.data.keys = { label: 'label', value: 'value' };
    comp.update();
    comp.$parent = { triggerColumnChange: jest.fn() };
    return comp;
  };
  const wheel = (comp, deltaY) => comp.onWheel({ detail: { deltaY } });

  it('accumulates small deltas, scrolls both ways and emits the selected index', () => {
    const comp = render();
    wheel(comp, 20);
    expect(comp.data.curIndex).toBe(0);
    wheel(comp, 20);
    expect(comp.data.curIndex).toBe(1);
    expect(comp.getCurrentSelected().value).toBe(1);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledWith({ index: 1, column: 0 });
    wheel(comp, -40);
    expect(comp.data.curIndex).toBe(0);
  });

  it('clamps at either end and responds immediately when reversing', () => {
    const comp = render();
    wheel(comp, 10000);
    expect(comp.data.curIndex).toBe(11);
    wheel(comp, -40);
    expect(comp.data.curIndex).toBe(10);
    wheel(comp, -10000);
    expect(comp.data.curIndex).toBe(0);
  });

  it('updates the virtual range beyond the initial buffer', () => {
    const comp = render(200);
    wheel(comp, 4000);
    expect(comp.data.curIndex).toBe(100);
    expect(comp.data.virtualStartIndex).toBeGreaterThan(0);
    expect(comp.data.visibleOptions.some((option) => option.value === 100)).toBe(true);
  });

  it('ignores invalid deltas and empty columns', () => {
    const comp = render(0);
    wheel(comp, 80);
    expect(comp.data.curIndex).toBe(0);
    const populated = render();
    [undefined, NaN, Infinity, 0].forEach((delta) => wheel(populated, delta));
    expect(Math.abs(populated.data.offset)).toBe(0);
    expect(populated.$parent.triggerColumnChange).not.toHaveBeenCalled();
  });

  it('clears pending wheel movement after a touch or external value update', () => {
    const comp = render();
    wheel(comp, 20);
    comp.onTouchStart({ touches: [{ clientY: 100 }] });
    wheel(comp, 20);
    expect(comp.data.curIndex).toBe(0);
    comp.update();
    wheel(comp, 20);
    expect(comp.data.curIndex).toBe(0);
  });
});
