import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-footer`;

@wxComponent()
export default class Footer extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
  };
}
