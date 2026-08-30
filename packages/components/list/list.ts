import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { getRect, systemInfo } from '../common/utils';
import pageScrollMixin from '../mixins/page-scroll';
import usingConfig from '../mixins/using-config';
import props from './props';
import type { TdListProps } from './type';

const { prefix } = config;
const componentName = 'list';
const name = `${prefix}-${componentName}`;

export interface ListProps extends TdListProps {}

@wxComponent()
export default class List extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-loading`];

  behaviors = [usingConfig({ componentName }), pageScrollMixin()];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
  };

  methods = {
    onLoadMore() {
      if (this.properties.asyncLoading === 'load-more') {
        this.triggerEvent('load-more');
      }
    },

    onScroll(event?: { scrollTop?: number; bottomDistance?: number }) {
      const scrollTop = event?.scrollTop || 0;

      if (typeof event?.bottomDistance === 'number') {
        this.triggerEvent('scroll', { bottomDistance: event.bottomDistance, scrollTop });
        return;
      }

      getRect(this, `.${name}`).then((rect) => {
        this.triggerEvent('scroll', {
          bottomDistance: rect.bottom - systemInfo.windowHeight,
          scrollTop,
        });
      });
    },
  };
}
