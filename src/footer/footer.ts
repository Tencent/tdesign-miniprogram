import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-footer`;

@wxComponent()
export default class Footer extends SuperComponent {
  properties = props;
  data = {
    classPrefix: name,
  };
}
