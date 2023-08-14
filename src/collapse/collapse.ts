import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';
import type { CollapseValue, TdCollapseProps } from './type';

const { prefix } = config;
const name = `${prefix}-collapse`;

export interface CollapseProps extends TdCollapseProps {}

@wxComponent()
export default class Collapse extends SuperComponent {
  options = {
    addGlobalClass: true,
  };

  externalClasses = [`${prefix}-class`];

  relations: RelationsOptions = {
    '../collapse-panel/collapse-panel': {
      type: 'descendant',
    },
  };

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
  };

  observers = {
    'value, expandMutex '() {
      this.updateExpanded();
    },
  };

  methods = {
    updateExpanded() {
      this.$children.forEach((child: WechatMiniprogram.Component.TrivialInstance) => {
        child.updateExpanded(this.properties.value);
      });
    },

    switch(panelValue: CollapseValue) {
      const { expandMutex, value: activeValues } = this.properties;
      let value = [];
      const hit = activeValues.indexOf(panelValue);

      if (hit > -1) {
        value = activeValues.filter((item) => item !== panelValue);
      } else {
        value = expandMutex ? [panelValue] : activeValues.concat(panelValue);
      }

      this._trigger('change', { value });
    },
  };
}
