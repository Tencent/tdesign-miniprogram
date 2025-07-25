import props from './props';
import config from '../../../common/config';
import { SuperComponent, wxComponent } from '../../../common/src/index';

const { prefix } = config;
const name = `${prefix}-qrcode`;

@wxComponent()
export default class QRCode extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  properties = {
    ...props,
    statusRender: {
      type: Boolean,
      value: false,
    },
  };

  data = {
    prefix,
    classPrefix: name,
  };

  methods = {
    handleRefresh() {
      this.triggerEvent('refresh');
    },
  };
}
