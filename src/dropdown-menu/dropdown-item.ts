import TComponent from '../common/component';

TComponent({
  properties: {
    title: {
      type: String,
      value: '',
    },
    options: {
      type: Array,
      value: [],
    },
  },
  data: {
    prefix: 't-dropdown-item',
  },
  relations: {
    './dropdown-menu': {
      type: 'parent',
      linked(target) {
        console.log('child linked to ', target);
      },
    },
  },
});
