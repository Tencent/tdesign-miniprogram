import TComponent from '../common/component';

TComponent({
  properties: {},
  data: {
    prefix: 't',
    base: 't-dropdown-menu',
    nodes: null,
    titles: null,
    activeIdx: -1,
    bottom: 0,
  },
  relations: {
    './dropdown-item': {
      type: 'child',
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
    _toggleDropdown(e) {
      const idx = e.target.dataset.index;
      const { activeIdx } = this.data;
      if (activeIdx !== -1) {
        this.data.nodes[activeIdx].setData({
          show: false,
        });
      }
      if (activeIdx === idx) {
        this.setData({
          activeIdx: -1,
        });
      } else {
        this.setData({
          activeIdx: idx,
        });
        this.data.nodes[idx].setData({
          show: true,
        });
      }
    },
  },
  ready() {
    this._getAllItems();
  },
});
