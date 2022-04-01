import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-collapse`;

@wxComponent()
export default class CountDown extends SuperComponent {
  options = {
    addGlobalClass: true,
  };

  externalClasses = [`${prefix}-class`];

  relations: RelationsOptions = {
    './collapse-panel': {
      type: 'descendant',
      linked(this, target: WechatMiniprogram.Component.TrivialInstance) {
        this.children.push(target);
      },
      unlinked(this, target: WechatMiniprogram.Component.TrivialInstance) {
        this.children = this.children.filter((item) => item !== target);
      },
    },
  };

  properties = props;

  observers = {
    value() {
      this.updateExpanded();
    },
    expandMutex() {
      // accordion
      this.updateExpanded();
    },
  };

  data = {
    classPrefix: name,
  };

  methods = {
    created() {
      this.children = [];
    },
    updateExpanded() {
      this.children = this.getRelationNodes('../collapse-panel/collapse-panel');
      this.children.forEach((child: WechatMiniprogram.Component.TrivialInstance) => {
        child.updateExpanded();
      });
    },
    switch(name: any = null, expanded: any = null) {
      const { expandMutex, value }: any = this.properties;
      const changeItem = name;
      if (!expandMutex) {
        name = expanded ? (value || []).concat(name) : (value || []).filter((activeName) => activeName !== name);
      } else {
        name = expanded ? name : '';
      }
      if (expanded) {
        this.triggerEvent('open', changeItem);
      } else {
        this.triggerEvent('close', changeItem);
      }
      this.triggerEvent('change', name);
      this.triggerEvent('input', name);
    },
  };
}
