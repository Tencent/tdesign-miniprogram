import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { canUseProxyScrollView } from '../common/version';

const { prefix } = config;

@wxComponent()
export default class ScrollView extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  behaviors = canUseProxyScrollView() ? ['wx://proxy-scroll-view'] : [];

  properties = {
    scrollIntoView: {
      type: String,
    },
  };
}
