import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-dropdown-item`;
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
            type: Number,
            optionalTypes: [String],
            value: 1,
        },
        value: {
            type: Array,
            optionalTypes: [String, Number],
            value: [],
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        itemId: {
            type: String,
            value: '',
        },
    },
    data: {
        classBasePrefix: prefix,
        classPrefix: name,
        show: false,
        isBtnDisabled: true,
        bar: null,
        top: 0,
        contentClasses: '',
        treeColumns: 3,
        selected: [],
        treeState: {
            leafLevel: 0,
            selectList: [],
            select: [],
        },
        treeOptions: [],
        isTree: false,
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
        const contentClassesObj = {
            [`${prefix}-is-tree`]: isTree,
            [`${prefix}-is-single`]: !isTree && selectMode === 'single',
            [`${prefix}-is-multi`]: !isTree && selectMode === 'multi',
            [`${prefix}-is-col1`]: layoutCol === 1 || treeCol === 1,
            [`${prefix}-is-col2`]: layoutCol === 2 || treeCol === 2,
            [`${prefix}-is-col3`]: layoutCol === 3 || treeCol === 3,
        };
        const contentClasses = Object.keys(contentClassesObj)
            .filter((e) => contentClassesObj[e] === true)
            .join(' ');
        this.setData({
            contentClasses,
            isTree,
            selected: this.data.value,
        });
        if (isTree) {
            this.data.treeState.selectList = this.data.selected || [];
            this._buildTreeOptions();
        }
        this.updateButtonState();
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
                const thisValue = selectList[level];
                if (thisValue === undefined) {
                    const [firstChild] = list;
                    if (firstChild.options) {
                        // 还有子节点，当前层级作为单选处理
                        this._selectTreeNode(level, firstChild.value);
                        node = firstChild;
                    }
                    else {
                        // 没有子节点，结束处理
                        this._selectTreeNode(level, selectMode === 'multi' ? [] : undefined);
                        break;
                    }
                }
                else {
                    const child = !Array.isArray(thisValue) && list.find((child) => child.value === thisValue);
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
                .select(`#${prefix}-bar`)
                .boundingClientRect((res) => {
                this.setData({
                    top: res.bottom,
                });
            })
                .exec();
        },
        _selectTreeNode(level, value) {
            // console.log('level:', level, 'value:', value);
            // 当前节点
            const tempValue = this.data.treeState.selectList.slice(0, level);
            tempValue[level] = value;
            this.setData({
                'treeState.selectList': tempValue,
            });
        },
        clickOverlay() {
            this._closeDropdown();
        },
        updateSelected(e) {
            if (this.data.isTree) {
                this._selectTreeNode(e.target.dataset.level, this.data.selectMode === 'single' ? e.detail.name : e.detail.names);
            }
            else {
                const data = {
                    selected: this.data.selectMode === 'single' ? e.detail.name : e.detail.names,
                };
                this.setData(data);
                if (this.data.bar && this.data.selectMode === 'single') {
                    this.confirmSelect();
                }
            }
            this.updateButtonState();
        },
        updateButtonState() {
            var _a;
            if (this.data.isTree) {
                let isEmpty = false;
                if (this.data.selectMode === 'single') {
                    isEmpty = this.data.treeState.selectList[this.data.treeState.leafLevel] === undefined;
                }
                if (this.data.selectMode === 'multi') {
                    const selectList = this.data.treeState.selectList[this.data.treeState.leafLevel];
                    isEmpty = selectList && selectList.length <= 0;
                }
                this.setData({
                    isBtnDisabled: isEmpty,
                });
            }
            else {
                const isEmpty = ((_a = this.data.selected) === null || _a === void 0 ? void 0 : _a.length) === 0;
                this.setData({
                    isBtnDisabled: isEmpty,
                });
            }
        },
        resetSelect() {
            if (this.data.isTree) {
                this.setData({
                    treeState: {
                        leafLevel: 0,
                        selectList: [],
                        select: [],
                    },
                });
                this._buildTreeOptions();
                this.updateButtonState();
            }
            else {
                this.updateSelected({ detail: { names: [], name: null } });
            }
        },
        confirmSelect() {
            if (this.data.isTree) {
                this.triggerEvent('change', this.data.treeState.selectList);
            }
            else {
                this.triggerEvent('change', this.data.selected);
            }
            this._closeDropdown();
        },
        selectTreeNode(e) {
            this._selectTreeNode(e.target.dataset.level, e.detail.name);
            this._buildTreeOptions();
        },
    },
});

//# sourceMappingURL=dropdown-item.js.map
