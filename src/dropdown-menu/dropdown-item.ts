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
    optionsLayout: {
      type: String,
      value: 'columns',
    },
    showOverlay: {
      type: Boolean,
      value: true,
    },
    selected: {
      type: String,
      value: null,
    },
  },
  data: {
    prefix: 't',
    base: 't-dropdown-item',
    show: false,
    isBtnDisabled: true,
    bar: null,
    top: 0,
  },
  relations: {
    './dropdown-menu': {
      type: 'parent',
      linked(target) {
        console.log('child linked to ', target);
        this._getParentBottom(target);
        this.setData({
          bar: target,
        });
      },
    },
  },
  methods: {
    _closeDropdown() {
      this.data.bar.setData({
        activeIdx: -1,
      });
      this.setData({
        show: false,
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
    clickOverlay() {
      this._closeDropdown();
    },
    itemSelected(e) {
      this.setData({
        selected: e.currentTarget.dataset.value,
      });
      this._closeDropdown();
    },
  },
});
