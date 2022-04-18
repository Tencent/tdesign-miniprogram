import { wxComponent } from '../../common/src/index';
import { canIUseFormFieldButton } from '../../common/version';
import BaseButtonGroup from '../base/button-group';

@wxComponent()
export default class ButtonGroup extends BaseButtonGroup {
  behaviors = canIUseFormFieldButton() ? ['wx://form-field-button'] : [];
}
