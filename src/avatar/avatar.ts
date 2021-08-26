import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-avatar`;

@wxComponent()
export default class Avatar extends SuperComponent {
  externalClasses = ['t-class', 't-image-class', 't-icon-class', 't-alt-class'];
  properties = {
    alt: String,
    icon: String,
    image: {
      type: String,
      value: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components/avatar/detaul_avatar.jpg',
    },
    shape: {
      type: String,
      value: 'circle',
    },
    size: {
      type: String,
      value: 'm',
    },
    badgeProps: {
      type: Object,
    },
  };
  data = {
    classPrefix: name,
  };
  onLoadError(e: any) {
    this.triggerEvent('error', e.detail);
  }
}
