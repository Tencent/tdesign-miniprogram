import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import type { TdBadgeProps } from './type';

const { prefix } = config;
const name = `${prefix}-badge`;

export interface BadgeProps extends TdBadgeProps {}

@wxComponent()
export default class Badge extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  externalClasses = [`${prefix}-class`, `${prefix}-class-count`, `${prefix}-class-content`];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    value: '',
  };
}
