import { SuperComponent, wxComponent } from '../../../components/common/src/index';
// import config from '../../../components/common/config';
import props from './props';

// const { prefix } = config;
// const name = `${prefix}-chat-record`;

@wxComponent()
export default class ChatRecord extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
  };

  observers = {
  };

  methods = {};

  lifetimes = {
  };
}
