import TComponent from '../common/component';

TComponent({
  options: {
    addGlobalClass: true,
  },
  externalClasses: ['t-class'],

  relations: {
    '../collapse-panel/collapse-panel': {
      type: 'descendant',
      linked(this, target: WechatMiniprogram.Component.TrivialInstance) {
        this.children.push(target);
      },
      unlinked(this, target: WechatMiniprogram.Component.TrivialInstance) {
        this.children = this.children.filter((item) => item !== target);
      },
    },
  },

  properties: {
    value: {
      type: null,
      observer(this) {
        this.updateExpanded();
      },
    },
    accordion: {
      type: Boolean,
      observer(this) {
        this.updateExpanded();
      },
    },
    border: {
      type: Boolean,
      value: true,
    },
  },

  data: {},

  methods: {
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
      const { accordion, value }: any = this.properties;
      const changeItem = name;
      if (!accordion) {
        name = expanded
          ? (value || []).concat(name)
          : (value || []).filter((activeName) => activeName !== name);
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
  },
});
