import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './check-tag-props';

const { prefix } = config;
const name = `${prefix}-tag`;

@wxComponent()
export default class CheckTag extends SuperComponent {
  data = {
    classPrefix: name,
    classBasePrefix: prefix,
  };

  properties = props;

  controlledProps = [
    {
      key: 'checked',
      event: 'change',
    },
  ];

  methods = {
    onClickClose(e: WechatMiniprogram.BaseEvent) {
      this.triggerEvent('close', e);
    },

    handleChange() {
      if (this.data.disabled) return;

      this._trigger('change', { checked: !this.data.checked });
    },
  };
}
