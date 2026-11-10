import PickerItem from '../../picker-item/picker-item';

jest.mock('../../common/src/index', () => ({
  SuperComponent: class {},
  wxComponent: () => (component) => component,
}));

describe('picker-item mouse wheel', () => {
  beforeEach(() => jest.useFakeTimers('modern'));
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  const render = (count = 12) => {
    const comp = new PickerItem();
    Object.assign(comp, comp.methods);
    comp.setData = jest.fn((data, callback) => {
      Object.assign(comp.data, data);
      callback?.();
    });
    comp.lifetimes.created.call(comp);
    comp.data.options = Array.from({ length: count }, (_, value) => ({ label: `${value}`, value }));
    comp.data.keys = { label: 'label', value: 'value' };
    comp.update();
    comp.$parent = { triggerColumnChange: jest.fn(), flushWheel: jest.fn() };
    return comp;
  };
  const wheel = (comp, deltaY) => comp.onWheel({ detail: { deltaX: 0, deltaY, deltaZ: 0 } });

  it('accumulates small deltas, scrolls both ways and emits the selected index', () => {
    const comp = render();
    wheel(comp, 20);
    expect(comp.data.curIndex).toBe(0);
    wheel(comp, 20);
    expect(comp.data.curIndex).toBe(1);
    expect(comp.getCurrentSelected().value).toBe(1);
    expect(comp.data.duration).toBeGreaterThan(0);
    expect(comp.$parent.triggerColumnChange).not.toHaveBeenCalled();
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

  it('keeps the animation path visible with one setData and prunes only after the animation', () => {
    const comp = render(200);
    comp.setData.mockClear();
    const computeRange = jest.spyOn(comp, 'computeVirtualRange');
    wheel(comp, 4000);
    expect(comp.data.curIndex).toBe(100);
    expect(comp.setData).toHaveBeenCalledTimes(1);
    expect(computeRange).toHaveBeenCalledWith(-4000, 200, 40, true);
    expect(comp.data.visibleOptions[0].value).toBe(0);
    expect(comp.data.visibleOptions.some((option) => option.value === 100)).toBe(true);
    jest.advanceTimersByTime(120);
    expect(comp.data.visibleOptions[0].value).toBe(0);
    jest.advanceTimersByTime(comp.data.duration);
    expect(comp.data.virtualStartIndex).toBeGreaterThan(0);
    expect(comp.data.visibleOptions.some((option) => option.value === comp.data.curIndex)).toBe(true);
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

  it('discards the remainder when reversing in either direction', () => {
    const comp = render();
    wheel(comp, 110);
    expect(comp.data.curIndex).toBe(2);
    wheel(comp, -20);
    wheel(comp, -20);
    expect(comp.data.curIndex).toBe(1);
    wheel(comp, -30);
    wheel(comp, 20);
    wheel(comp, 20);
    expect(comp.data.curIndex).toBe(2);
  });

  it('emits the exact wheel target once after a burst without adding momentum', () => {
    const comp = render(100);
    wheel(comp, 40);
    jest.advanceTimersByTime(40);
    wheel(comp, 40);
    jest.advanceTimersByTime(40);
    wheel(comp, 40);
    expect(comp.data.curIndex).toBe(3);
    expect(comp.$parent.triggerColumnChange).not.toHaveBeenCalled();
    jest.advanceTimersByTime(119);
    expect(comp.$parent.triggerColumnChange).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(comp.data.curIndex).toBe(3);
    expect(comp.data.duration).toBe(330);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledTimes(1);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledWith({ index: comp.data.curIndex, column: 0 });

    jest.advanceTimersByTime(1000);
    expect(comp.data.curIndex).toBe(3);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledTimes(1);
  });

  it('keeps touch inertia while sharing the bounded animation duration', () => {
    const touch = render(100);
    touch.onTouchStart({ touches: [{ clientY: 200 }] });
    touch.onTouchMove({ touches: [{ clientY: 80 }] });
    jest.advanceTimersByTime(200);
    touch.onTouchEnd({ changedTouches: [{ clientY: 80 }] });
    expect(touch.data.curIndex).toBe(6);
    expect(touch.data.duration).toBe(390);
    expect(touch.$parent.triggerColumnChange).toHaveBeenCalledTimes(1);
  });

  it('moves exactly one item for one wheel step and does not jump again after idle', () => {
    const comp = render(100);
    wheel(comp, 40);
    expect(comp.data.curIndex).toBe(1);
    jest.advanceTimersByTime(120);
    expect(comp.data.curIndex).toBe(1);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledWith({ index: 1, column: 0 });
    jest.advanceTimersByTime(1000);
    expect(comp.data.curIndex).toBe(1);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledTimes(1);
  });

  it('does not add inertia to a slow wheel gesture', () => {
    const comp = render();
    [40, 40, 40, 40].forEach((delta, index) => {
      if (index) jest.advanceTimersByTime(100);
      wheel(comp, delta);
    });
    jest.advanceTimersByTime(120);
    expect(comp.data.curIndex).toBe(4);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledTimes(1);
  });

  it('settles pending wheel selection before switching to touch without a delayed pick', () => {
    const comp = render();
    wheel(comp, 80);
    comp.onTouchStart({ touches: [{ clientY: 100 }] });
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledWith({ index: 2, column: 0 });
    jest.advanceTimersByTime(1000);
    expect(comp.data.curIndex).toBe(2);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledTimes(1);
  });

  it('clicking the original selected item cancels a pending wheel selection', () => {
    const comp = render();
    wheel(comp, 80);
    comp.onClickItem({ currentTarget: { dataset: { index: 0 } } });
    jest.advanceTimersByTime(1000);
    expect(comp.data.curIndex).toBe(0);
    expect(Math.abs(comp.data.offset)).toBe(0);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledTimes(1);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledWith({ index: 0, column: 0 });
  });

  it('cancels pending wheel and animation callbacks on external updates and detach', () => {
    const comp = render(200);
    wheel(comp, 4000);
    comp.data.options = [{ label: 'new', value: 999 }];
    comp.update();
    comp.setData.mockClear();
    jest.advanceTimersByTime(1000);
    expect(comp.setData).not.toHaveBeenCalled();
    expect(comp.$parent.triggerColumnChange).not.toHaveBeenCalled();
    expect(comp.getCurrentSelected().value).toBe(999);

    const detached = render(200);
    wheel(detached, 4000);
    detached.lifetimes.detached.call(detached);
    detached.setData.mockClear();
    jest.advanceTimersByTime(1000);
    expect(detached.setData).not.toHaveBeenCalled();
    expect(detached.$parent.triggerColumnChange).not.toHaveBeenCalled();
  });

  it('keeps a previous animation range when another wheel event interrupts it', () => {
    const comp = render(500);
    wheel(comp, 4000);
    jest.advanceTimersByTime(40);
    wheel(comp, 4000);
    expect(comp.data.visibleOptions[0].value).toBe(0);
    expect(comp.data.visibleOptions.some((option) => option.value === 200)).toBe(true);
  });

  it('keeps zero-duration touch momentum finite', () => {
    const comp = render();
    comp.onTouchStart({ touches: [{ clientY: 100 }] });
    comp.onTouchMove({ touches: [{ clientY: 60 }] });
    comp.onTouchEnd({ changedTouches: [{ clientY: 60 }] });
    expect(Number.isFinite(comp.data.offset)).toBe(true);
    expect(comp.data.curIndex).toBe(11);
  });

  it('settles a moved touch offset even when the final touch reports no displacement', () => {
    const comp = render();
    comp.onTouchStart({ touches: [{ clientY: 0 }] });
    comp.onTouchMove({ touches: [{ clientY: -40 }] });
    comp.onTouchEnd({ changedTouches: [{ clientY: 0 }] });
    expect(comp.data.curIndex).toBe(1);
    expect(comp.$parent.triggerColumnChange).toHaveBeenCalledWith({ index: 1, column: 0 });
  });
});
