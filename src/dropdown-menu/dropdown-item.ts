import { RelationsOptions, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './dropdown-item-props';
import type { TdDropdownItemProps } from './type';

const { prefix } = config;
const name = `${prefix}-dropdown-item`;

export interface DropdownItemProps extends TdDropdownItemProps {}
@wxComponent()
export default class DropdownMenuItem extends SuperComponent {
  properties = {
    title: {
      type: String,
      value: '',
    },
    itemId: {
      type: String,
      value: '',
    },
    ...props,
  };

  data = {
    prefix,
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
  };

  relations: RelationsOptions = {
    './dropdown-menu': {
      type: 'parent',
      linked(target) {
        this._getParentBottom(target);
        this.setData({
          bar: target,
        });
      },
    },
  };

  lifetimes = {
    attached() {
      const { multiple } = this.data;
      const { optionsLayout } = this.data;
      const layoutCol = +this.data.optionsColumns;
      const isTree = optionsLayout === 'tree';
      const treeCol = isTree ? +this.data.treeColumns : 0;
      const contentClassesObj: Object = {
        [`${prefix}-is-tree`]: isTree,
        [`${prefix}-is-single`]: !isTree && !multiple,
        [`${prefix}-is-multi`]: !isTree && multiple,
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
  };

  methods = {
    _buildTreeOptions() {
      const { options, multiple } = this.data;
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
          const [firstChild] = list;
          if (firstChild.options) {
            // 还有子节点，当前层级作为单选处理
            this._selectTreeNode(level, firstChild.value);
            node = firstChild;
          } else {
            // 没有子节点，结束处理
            this._selectTreeNode(level, multiple ? [] : undefined);
            break;
          }
        } else {
          const child: any = !Array.isArray(thisValue) && list.find((child: any) => child.value === thisValue);
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
      const { multiple } = this.properties;

      if (this.data.isTree) {
        this._selectTreeNode(e.target.dataset.level, !multiple ? e.detail.name : e.detail.names);
      } else {
        const data = {
          selected: e.detail.value,
        };
        this.setData(data);
        if (this.data.bar && !multiple) {
          this.confirmSelect();
        }
      }

      this.updateButtonState();
    },
    updateButtonState() {
      const { multiple } = this.properties;

      if (this.data.isTree) {
        let isEmpty = false;
        if (!multiple) {
          isEmpty = this.data.treeState.selectList[this.data.treeState.leafLevel] === undefined;
        }
        if (multiple) {
          const selectList = this.data.treeState.selectList[this.data.treeState.leafLevel] as [];
          isEmpty = selectList && selectList.length <= 0;
        }
        this.setData({
          isBtnDisabled: isEmpty,
        });
      } else {
        const isEmpty = this.data.selected?.length === 0;
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
      } else {
        this.updateSelected({ detail: { names: [], name: null } });
      }
    },
    confirmSelect() {
      if (this.data.isTree) {
        this.triggerEvent('change', this.data.treeState.selectList);
      } else {
        this.triggerEvent('change', this.data.selected);
      }
      this._closeDropdown();
    },
    selectTreeNode(e) {
      this._selectTreeNode(e.target.dataset.level, e.detail.name);
      this._buildTreeOptions();
    },
  };
}
