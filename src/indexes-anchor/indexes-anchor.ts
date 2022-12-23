import { RelationsOptions, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-indexes-anchor`;

@wxComponent()
export default class IndexesAnchor extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    anchorStyle: '',
    sticky: false,
    active: false,
  };

  relations: RelationsOptions = {
    '../indexes/indexes': {
      type: 'parent',
    },
  };
}
