import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-cell-group`;

TComponent({
  data: {
    classPrefix: name,
  },
  properties: {
    title: String,
    bordered: {
      type: Boolean,
      value: true,
    },
  },
});
