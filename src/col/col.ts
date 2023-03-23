import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-col`;

@wxComponent()
export default class Col extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = {
    span: {
      type: Number,
      optionalTypes: [String],
    },
    offset: {
      type: Number,
      optionalTypes: [String],
    },
  };

  data = {
    prefix,
    classPrefix: name,
  };

  relations: RelationsOptions = {
    '../row/row': {
      type: 'parent',
    },
  };
}
