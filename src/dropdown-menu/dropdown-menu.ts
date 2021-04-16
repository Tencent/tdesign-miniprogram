import TComponent from '../common/component';

TComponent({
  properties: {
    overlay: {
      type: Boolean,
      value: true,
    },
    duration: {
      type: Number,
      value: 200,
    },
    closeOnClickOverlay: {
      type: Number,
      value: true,
    },
  },
  data: {
    prefix: 't',
    base: 't-dropdown-menu',
    nodes: null,
    menus: null,
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
      const menus = nodes.map((a) => {
        const { title, disabled } = a.data;
        return { title, disabled };
      });
      this.setData({
        nodes,
        menus,
      });
    },
    _toggleDropdown(e) {
      const idx = e.target.dataset.index;
      const { activeIdx } = this.data;
      if (activeIdx !== -1) {
        this.triggerEvent('close');
        this.data.nodes[activeIdx].setData({
          show: false,
        });
        this.triggerEvent('closed');
      }
      if (activeIdx === idx) {
        this.setData({
          activeIdx: -1,
        });
      } else {
        this.triggerEvent('open');
        this.setData({
          activeIdx: idx,
        });
        this.data.nodes[idx].setData({
          show: true,
        });
        this.triggerEvent('opened');
      }
    },
  },
  ready() {
    this._getAllItems();
  },
});
