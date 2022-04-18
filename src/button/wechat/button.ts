import { wxComponent } from '../../common/src/index';
import BaseButton from '../base/button';
import props from './props';
import { canIUseFormFieldButton } from '../../common/version';

@wxComponent()
export default class Button extends BaseButton {
  // 组件的对外属性
  properties = props;

  behaviors = canIUseFormFieldButton() ? ['wx://form-field-button'] : [];

  methods = {
    ...this.methods,
    getphonenumber(e) {
      this.triggerEvent('getphonenumber', e.detail);
    },
  };
}
