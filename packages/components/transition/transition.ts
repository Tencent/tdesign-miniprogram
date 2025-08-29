import { SuperComponent, wxComponent } from '../common/src/index';
import transition from '../mixins/transition';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-transition`;

@wxComponent()
export default class Transition extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  behaviors = [transition()];

  data = {
    classPrefix: name,
  };
}
