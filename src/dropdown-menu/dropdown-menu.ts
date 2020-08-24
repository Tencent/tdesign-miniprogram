import TComponent from '../common/component';

TComponent({
  properties: {
    menus: {
      type: Array,
      value: [],
    },
  },
  data: {
    prefix: 't-dropdown-menu',
    nodes: null,
    titles: null,
  },
  relations: {
    './dropdown-item': {
      type: 'child',
      linked(target) {
        console.log('[dropdown-item] a child is linked: ', target);
      },
    },
  },
  methods: {
    _getAllItems() {
      const nodes = this.getRelationNodes('./dropdown-item');
      const titles = nodes.map(a => a.data.title);
      this.setData({
        nodes,
        titles,
      });
    },
  },
  ready() {
    this._getAllItems();
  },
});
