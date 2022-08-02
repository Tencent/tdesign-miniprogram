import { SuperComponent, wxComponent } from '../common/src/index';
import transition from '../mixins/transition';

@wxComponent()
export default class Transition extends SuperComponent {
  behaviors = [transition()];
}
