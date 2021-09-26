import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import avatarProps from './props';

const { prefix } = config;
const name = `${prefix}-avatar`;

@wxComponent()
export default class Avatar extends SuperComponent {
  externalClasses = ['t-class', 't-class-image', 't-class-icon', 't-class-alt'];

  properties = avatarProps;

  data = {
    classPrefix: name,
  };

  onLoadError(e: any) {
    this.triggerEvent('error', e.detail);
  }
}
