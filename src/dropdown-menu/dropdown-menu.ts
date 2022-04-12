import { RelationsOptions, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import type { TdDropdownMenuProps } from './type';

const { prefix } = config;
const name = `${prefix}-dropdown-menu`;

export interface DropdownMenuProps extends TdDropdownMenuProps {}

@wxComponent()
export default class DropdownMenu extends SuperComponent {
  properties = props; // todo: zindex activeColor

  data = {
    classBasePrefix: prefix,
    classPrefix: name,
    nodes: null,
    menus: null,
    activeIdx: -1,
    bottom: 0,
  };

  relations: RelationsOptions = {
    './dropdown-item': {
      type: 'child',
    },
  };

  methods = {
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
  };

  lifetimes = {
    ready() {
      this._getAllItems();
    },
  };
}
