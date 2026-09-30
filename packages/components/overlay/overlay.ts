import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import transition from '../mixins/transition';
import useCustomNavbar from '../mixins/using-custom-navbar';
import { TdOverlayProps } from './type';

const { prefix } = config;
const name = `${prefix}-overlay`;

export interface OverlayProps extends TdOverlayProps {}

@wxComponent()
export default class Overlay extends SuperComponent {
  properties = props;

  behaviors = [transition(), useCustomNavbar];

  data = {
    prefix,
    classPrefix: name,
  };

  methods = {
    handleClick() {
      this.triggerEvent('click', { visible: !this.properties.visible });
    },
    noop() {},
  };
}
