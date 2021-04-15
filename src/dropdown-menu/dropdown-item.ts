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
      value: 'single', // single | multi
    },
    optionsLayout: {
      type: String,
      value: 'columns', // columns | tree | slot
    },
    optionsColumns: {
      type: [Number, String],
      value: 1,
    },
    showOverlay: {
      type: Boolean,
      value: true,
    },
    selected: {
      type: [Array, String],
      value: null,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    prefix: 't',
    base: 't-dropdown-item',
    show: false,
    isBtnDisabled: true,
    bar: null,
    top: 0,
    contentClasses: '',
    treeColumns: 3,
    treeState: {
      leafLevel: 0,
      selectList: [],
      select: [],
    },
    treeOptions: [],
  },
  relations: {
    './dropdown-menu': {
      type: 'parent',
      linked(target) {
        this._getParentBottom(target);
        this.setData({
          bar: target,
        });
      },
    },
  },
  attached() {
    const { selectMode } = this.data;
    const { optionsLayout } = this.data;
    const layoutCol = +this.data.optionsColumns;
    const isTree = optionsLayout === 'tree';
    const treeCol = isTree ? +this.data.treeColumns : 0;
    const prefix = 't';
    const contentClassesObj: Object = {
      [`${prefix}-is-tree`]: isTree,
      [`${prefix}-is-single`]: !isTree && selectMode === 'single',
      [`${prefix}-is-multi`]: !isTree && selectMode === 'multi',
      [`${prefix}-is-col1`]: layoutCol === 1 || treeCol === 1,
      [`${prefix}-is-col2`]: layoutCol === 2 || treeCol === 2,
      [`${prefix}-is-col3`]: layoutCol === 3 || treeCol === 3,
    };
    const contentClasses = Object.keys(contentClassesObj)
      .filter(e => contentClassesObj[e] === true)
      .join(' ');
    this.setData({
      contentClasses,
    });
    this.updateButtonState();
    if (isTree) {
      this._buildTreeOptions();
    }
  },
  methods: {
    _buildTreeOptions() {
      const { options, selectMode } = this.data;
      const { selectList } = this.data.treeState;
      const newTreeOptions = [];
      let level = -1;
      let node = { options };
      while (node.options) {
        // 当前层级节点的列表
        const list = node.options;
        newTreeOptions.push([...list]);
        level += 1;
        // 当前层级列表选中项
        const thisValue: [] | string | number | null = selectList[level];
        if (thisValue === undefined) {
          const firstChild = list[0];
          if (firstChild.options) {
            // 还有子节点，当前层级作为单选处理
            this._selectTreeNode(level, firstChild.value);
            node = firstChild;
          } else {
            // 没有子节点，结束处理
            this._selectTreeNode(level, selectMode === 'multi' ? [] : undefined);
            break;
          }
        } else {
          const child: any =
            !Array.isArray(thisValue) && list.find((child: any) => child.value === thisValue);
          node = child;
        }
      }
      this.setData({
        'treeState.leafLevel': Math.max(0, level),
        treeOptions: newTreeOptions,
      });
    },

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

    _selectTreeNode(level: number, value: any) {
      // console.log('level:', level, 'value:', value);
      // 当前节点
      const tempValue: any = this.data.treeState.selectList.slice(0, level);
      tempValue[level] = value;
      this.setData({
        'treeState.selectList': tempValue,
      });
    },
    clickOverlay() {
      this._closeDropdown();
    },
    updateSelected(e) {
      const data = {
        selected: this.data.selectMode == 'single' ? e.detail.name : e.detail.names,
      };
      this.setData(data);
      this.triggerEvent('selected', data);
      this.updateButtonState();
      if (this.data.bar && this.data.selectMode == 'single') this._closeDropdown();
    },
    updateButtonState() {
      const isEmpty = this.data.selected?.length === 0;
      this.setData({
        isBtnDisabled: isEmpty,
      });
    },
    resetSelect() {
      this.updateSelected({ detail: { names: [], name: null } });
    },
    confirmSelect() {
      this._closeDropdown();
    },
    selectTreeNode(e) {
      this._selectTreeNode(e.target.dataset.level, e.detail.name);
      this._buildTreeOptions();
    },
  },
});
