import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';

@wxComponent()
export default class extends SuperComponent {
  externalClasses = ['t-class', 't-class-description', 't-class-image'];

  properties = props;
}
