import { wxComponent } from '../../common/src/index';
import BaseButtonGroup from '../base/button-group';

@wxComponent()
export default class ButtonGroup extends BaseButtonGroup {
  behaviors = ['wx://form-field'];
}
