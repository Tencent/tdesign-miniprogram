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
    selectMode: {
      type: String,
      value: 'single',
    },
    showOverlay: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    prefix: 't',
    base: 't-dropdown-item',
    show: false,
    top: 0,
  },
  relations: {
    './dropdown-menu': {
      type: 'parent',
      linked(target) {
        console.log('child linked to ', target);
        this._getParentBottom(target);
      },
    },
  },
  methods: {
    _toggleDropdown() {
      this.setData({
        show: !this.data.show,
      });
    },
    _getParentBottom(parent) {
      const query = wx.createSelectorQuery().in(parent);
      query
        .select('#t-bar')
        .boundingClientRect((res) => {
          this.setData({
            top: res.bottom,
          });
        })
        .exec();
    },
  },
});
