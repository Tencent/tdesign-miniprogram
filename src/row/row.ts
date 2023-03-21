import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';

@wxComponent()
export default class Row extends SuperComponent {
  externalClasses = [];

  properties = {
    gutter: {
      type: Number,
    },
  };

  data = {};

  relations: RelationsOptions = {
    '../col/col': {
      type: 'child',
      linked(target) {
        const { gutter } = this.data;
        if (gutter) {
          target.setData({ gutter });
        }
      },
    },
  };

  observers = {
    gutter() {
      this.setGutter();
    },
  };

  methods = {
    setGutter() {
      const { gutter } = this.data;
      const cols = this.$children;
      cols.forEach((col) => {
        col.setData({ gutter });
      });
    },
  };
}
