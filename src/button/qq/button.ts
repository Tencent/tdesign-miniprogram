import { wxComponent } from '../../common/src/index';
import BaseButton from '../base/button';
import props from './props';

@wxComponent()
export default class Button extends BaseButton {
  // 组件的对外属性
  properties = props;

  behaviors = ['wx://form-field'];

  methods = {
    ...this.methods,
    addfriend(e) {
      this.triggerEvent('addfriend', e.detail);
    },
    addgroupapp(e) {
      this.triggerEvent('addgroupapp', e.detail);
    },
  };
}
