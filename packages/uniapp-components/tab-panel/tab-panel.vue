<template>
  <view
    v-if="!lazy || hasActivated"
    :id="id"
    :class="tClass + ' ' + classPrefix + ' ' + (active ? classPrefix + '--active' : classPrefix + '--inactive')"
    :style="tools._style([customStyle, hide ? 'display: none' : ''])"
    aria-role="tabpanel"
  >
    <view v-if="panel">
      {{ panel }}
    </view>
    <slot />
    <slot name="panel" />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import props from './props';
import { prefix } from '../common/config';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-tab-panel`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
    virtualHost: true,
  },
  externalClasses: [`${prefix}-class`],
  mixins: [ChildrenMixin(RELATION_MAP.TabPanel)],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      active: false,
      hide: true,
      id: '',
      hasActivated: false,
      tools,
    };
  },
  watch: {
    label: 'update',
    badgeProps: {
      handler() {
        this.update();
      },
      deep: true,
    },
    disabled: 'update',

    icon: 'update',
    panel: 'update',
    value: 'update',

    lazy: 'update',
  },
  methods: {
    setParent(parent) {
      this[RELATION_MAP.TabPanel] = parent;
      if (!parent.children.includes(this)) {
        parent.children.push(this);
      }
      parent.innerAfterLinked(this);
    },
    setId(id) {
      this.id = id;
    },
    getComputedName() {
      if (this.value != null) {
        return `${this.value}`;
      }
      return `${this.dataIndex}`;
    },
    update() {
      this[RELATION_MAP.TabPanel]?.updateTabs();
    },

    render(active, parent) {
      this.initialized = this.initialized || active;

      if (active && !this.hasActivated) {
        this.hasActivated = true;
      }

      this.active = active;
      this.hide = !parent.animation && !active;
    },
  },
});
</script>
<style scoped>
@import './tab-panel.css';
</style>
