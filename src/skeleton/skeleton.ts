import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-skeleton`;

@wxComponent()
export default class Skeleton extends SuperComponent {
  /**
   * Component properties
   */
  externalClasses = ['t-class', 't-class-avatar', 't-class-text'];

  properties = {
    animation: {
      type: String,
    },

    row: {
      type: Number,
      value: 0,
    },

    loading: {
      type: Boolean,
    },

    rowWidth: {
      type: null,
      value: '100%',
    },

    rowHeight: {
      type: Array,
      value: null,
    },

    theme: {
      type: String,
      value: 'text',
    },
  };

  observers = {
    rowWidth(this, val) {
      if (Array.isArray(val)) {
        this.setData({ rowWidthArray: val });
      }
    },
  };

  /**
   * Component initial data
   */
  data = {
    classPrefix: name,
    rowWidthArray: [],
  };
  /**
   * Component methods
   */
}
