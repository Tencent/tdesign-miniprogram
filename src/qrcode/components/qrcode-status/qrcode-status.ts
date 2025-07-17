import props from './props';
import config from '../../../common/config';
import { QRCodeStatusProps} from './type';
import { SuperComponent, wxComponent } from '../../../common/src/index';

const { prefix } = config;
const name = `${prefix}-qrcode`;

@wxComponent()
export default class QRCode extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  properties = {
    ...props,
    statusRender: {
      type: Boolean,
      value: false
    }
  };

  data = {
    classPrefix: name,
  };

  methods = {
    handleRefresh() {
      this.triggerEvent('refresh');
    },
  };
}