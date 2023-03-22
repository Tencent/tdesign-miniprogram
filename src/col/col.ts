import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-col`;

@wxComponent()
export default class Col extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = props;

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
