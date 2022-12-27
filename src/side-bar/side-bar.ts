import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-side-bar`;
const relationsPath = '../side-bar-item/side-bar-item';

@wxComponent()
export default class SideBar extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  childs = [];

  relations: RelationsOptions = {
    [relationsPath]: {
      type: 'child',
      linked(child) {
        this.childs.push(child);
      },
      unlinked(child) {
        const index = this.childs.findIndex((item) => item === child);
        this.childs.splice(index, 1);
      },
    },
  };

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  properties = props;

  observers = {
    value(v) {
      this.$children.forEach((item) => {
        item.updateActive(v);
      });
    },
  };

  data = {
    classPrefix: name,
    prefix,
  };

  methods = {
    doChange({ value, label }) {
      this._trigger('change', { value, label });
    },
  };
}
