import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import avatarProps from './props';
const { prefix } = config;
const name = `${prefix}-avatar`;

@wxComponent()
export default class Avatar extends SuperComponent {
  externalClasses = ['t-class', 't-image-class', 't-icon-class', 't-alt-class'];
  properties = avatarProps;
  data = {
    classPrefix: name,
  };
  onLoadError(e: any) {
    this.triggerEvent('error', e.detail);
  }
}
