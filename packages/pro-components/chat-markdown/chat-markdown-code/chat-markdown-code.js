import { ComponentWithComputed } from 'miniprogram-computed';

const constructorOptions = {
  options: {
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  },
  properties: {
    node: {
      type: Object,
      value: () => ({}),
    },
  },
  lifetimes: {
    created() {},
    attached() {},
    detached() {},
  },
};

ComponentWithComputed(constructorOptions);
