import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-avatar`;

@wxComponent()
export default class Avatar extends SuperComponent {
  externalClasses = ['t-class'];
  properties = {
    image: String,
    imgMode: {
      type: String,
      value: 'aspectFill',
    },
    defaultImageUrl: {
      type: String,
      value:
        'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components/avatar/detaul_avatar.jpg',
    },
    shape: {
      type: String,
      value: 'round',
    },
    size: {
      type: String,
      value: 'l',
    },
    alt: String,
    icon: String,
    iconClassPrefix: {
      type: String,
      value: 't',
    },
    radius: String,
    borderWidth: String,
    borderColor: String,
    color: String,
    backgroundColor: String,
    info: String,
    dot: Boolean,
  };
  data = {
    classPrefix: name
  }
}
