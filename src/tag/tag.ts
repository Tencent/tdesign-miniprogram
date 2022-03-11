import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-tag`;

@wxComponent()
export default class Tag extends SuperComponent {
  data = {
    classPrefix: name,
    classBasePrefix: prefix,
  };

  externalClasses = [`${prefix}-class`];

  properties = props;

  methods = {
    hangleClose(e: WechatMiniprogram.BaseEvent) {
      this.triggerEvent('close', e);
    },
  };
}
