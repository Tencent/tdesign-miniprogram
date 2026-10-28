import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { transformSync } from '@babel/core';
import { parse } from '@vue/compiler-sfc';
import { createApp, h, nextTick, reactive } from 'vue';

global.uni = {
  getWindowInfo: () => ({}),
  getAppBaseInfo: () => ({}),
  getDeviceInfo: () => ({}),
  getSystemInfoSync: () => ({}),
};

// Jest has no Vue transformer. Run the actual SFC script and Vue watchers while
// stubbing presentation-only imports; the component's helpers remain unchanged.
const filename = path.resolve(__dirname, '../tree-select.vue');
const { descriptor } = parse(fs.readFileSync(filename, 'utf8'));
const { code } = transformSync(descriptor.script.content, {
  filename,
  configFile: false,
  babelrc: false,
  plugins: ['@babel/plugin-transform-modules-commonjs'],
});
const componentModule = { exports: {} };
vm.runInThisContext(`(function(require, module, exports) { ${code}\n })`, { filename })(
  (id) => {
    if (/^\.\.\/(checkbox|radio|scroll-view|side-bar)/.test(id) || id.endsWith('.wxs')) return {};
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(path.resolve(path.dirname(filename), id));
  },
  componentModule,
  componentModule.exports,
);
const TreeSelect = { ...componentModule.exports.default, render: () => null };

const options = [
  { label: 'First', value: 1, children: [{ value: 11 }, { value: 12 }] },
  { label: 'Second', value: 2, children: [{ value: 22 }, { value: 23 }] },
];

describe('uniapp TreeSelect external values', () => {
  let app;
  let tree;
  let state;
  let container;
  let change;
  let update;

  async function mount(props, model = false) {
    state = reactive({ options, ...props });
    change = jest.fn();
    update = jest.fn((value) => {
      if (model) state.value = value;
    });
    app = createApp({
      render: () =>
        h(TreeSelect, {
          ...state,
          ref: (instance) => {
            tree = instance;
          },
          onChange: change,
          'onUpdate:value': update,
        }),
    });
    container = document.createElement('div');
    document.body.appendChild(container);
    app.mount(container);
    await nextTick();
  }

  afterEach(() => {
    app?.unmount();
    container?.remove();
  });

  function selection() {
    return { value: tree.innerValue, leaves: tree.treeOptions[1].map((item) => item.value) };
  }

  it.each(['value', 'customValue'])('responds to replaced %s without emitting a change', async (key) => {
    await mount({ [key]: [1, 11] });
    state[key] = [2, 22];
    await nextTick();
    expect(selection()).toEqual({ value: [2, 22], leaves: [22, 23] });
    expect(change).not.toHaveBeenCalled();
    expect(update).not.toHaveBeenCalled();
  });

  it.each(['value', 'customValue'])('responds to nested mutations of %s', async (key) => {
    await mount({ [key]: [1, 11] });
    state[key].splice(0, 2, 2, 23);
    await nextTick();
    expect(selection()).toEqual({ value: [2, 23], leaves: [22, 23] });
  });

  it('resets value to the default first selection', async () => {
    await mount({ value: [2, 22] });
    state.value = [];
    await nextTick();
    expect(selection()).toEqual({ value: [1, 11], leaves: [11, 12] });
  });

  it('keeps an empty customValue unselected', async () => {
    await mount({ value: [1, 11], customValue: [2, 22] });
    state.customValue = [];
    await nextTick();
    expect(selection()).toEqual({ value: [], leaves: [11, 12] });
  });

  it('keeps customValue priority and restores the latest value when removed', async () => {
    await mount({ value: [1, 11], customValue: [2, 22] });
    state.value = [1, 12];
    await nextTick();
    expect(selection()).toEqual({ value: [2, 22], leaves: [22, 23] });
    state.customValue = undefined;
    await nextTick();
    expect(selection()).toEqual({ value: [1, 12], leaves: [11, 12] });
    expect(change).not.toHaveBeenCalled();
  });

  it('restores defaultValue when customValue is removed without a value', async () => {
    await mount({ defaultValue: [1, 12], customValue: [2, 22] });
    state.customValue = undefined;
    await nextTick();
    expect(selection()).toEqual({ value: [1, 12], leaves: [11, 12] });
  });

  it('preserves uncontrolled selection after an interaction and options update', async () => {
    await mount({ defaultValue: [1, 11] });
    tree.handleChange({ value: 12, level: 1, type: 'single' });
    await nextTick();
    state.options = [...options];
    await nextTick();
    expect(selection()).toEqual({ value: [1, 12], leaves: [11, 12] });
    expect(state.value).toBeUndefined();
    expect(change).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledTimes(1);
  });

  it('does not turn defaultValue into a controlled prop', async () => {
    await mount({ defaultValue: [1, 11] });
    state.defaultValue = [2, 22];
    await nextTick();
    expect(selection()).toEqual({ value: [1, 11], leaves: [11, 12] });
  });

  it('restores the uncontrolled selection after a temporary customValue override', async () => {
    await mount({ defaultValue: [1, 11] });
    tree.handleChange({ value: 12, level: 1, type: 'single' });
    await nextTick();
    state.customValue = [2, 22];
    await nextTick();
    expect(selection()).toEqual({ value: [2, 22], leaves: [22, 23] });
    state.defaultValue = [2, 23];
    state.customValue = undefined;
    await nextTick();
    expect(selection()).toEqual({ value: [1, 12], leaves: [11, 12] });
    expect(change).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledTimes(1);
  });

  it('does not emit again when a v-model update reaches the value watcher', async () => {
    await mount({ value: [1, 11] }, true);
    tree.onRootChange({ value: 2 });
    await nextTick();
    expect(tree.treeOptions[1].map((item) => item.value)).toEqual([22, 23]);
    expect(state.value[0]).toBe(2);
    expect(change).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledTimes(1);
  });

  it.each(['value', 'customValue'])('preserves multiple selection when %s changes', async (key) => {
    await mount({ multiple: true, [key]: [1, [11]] });
    state[key] = [2, [22, 23]];
    await nextTick();
    expect(selection()).toEqual({ value: [2, [22, 23]], leaves: [22, 23] });
  });

  it('uses the latest value when asynchronous options arrive', async () => {
    await mount({ options: [], value: [1, 11] });
    state.value = [2, 22];
    await nextTick();
    state.options = options;
    await nextTick();
    expect(selection()).toEqual({ value: [2, 22], leaves: [22, 23] });
  });
});
