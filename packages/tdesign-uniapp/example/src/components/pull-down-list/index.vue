<template>
  <view
    class="pullDownList"
    :class="[tClass, {
      'actived': childBoxHeight > 0
    }]"
  >
    <view
      v-if="!!childArr.length"
      class="switchBox"
      aria-role="button"
      :aria-expanded="!!childBoxHeight"
      @click.stop="switchHandle"
    >
      <view class="name">
        {{ name }}
      </view>
      <t-icon
        :name="icon"
        size="48rpx"
        color="#A6A6A6"
        t-class="icon"
        aria-hidden
      />
    </view>
    <view
      class="childBox"
      :style="''+`height: ${ childBoxHeight }rpx`"
      :aria-hidden="!childBoxHeight"
    >
      <view
        v-for="item of childArr"
        :key="item.name"
        class="child"
        aria-role="button"
        @click="() => clickChild(item)"
      >
        {{ item.name }} {{ item.label }}
        <t-icon
          name="chevron-right"
          color="var(--td-text-color-placeholder)"
          aria-hidden
        />
      </view>
    </view>
  </view>
</template>
<script>
import TIcon from '@tdesign/uniapp/icon/icon.vue';
const itemHeight = 56 * 2;

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TIcon,
  },
  props: {
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    childArr: {
      type: Array,
      default: () => ([]),
    },
    tClass: {
      type: String,
      default: '',
    },
  },
  emits: [
    'click',
  ],
  data() {
    return {
      childBoxHeight: 0,
    };
  },
  methods: {
    switchHandle() {
      this.childBoxHeight = this.childBoxHeight > 0
        ? 0
        : this.childArr.length * itemHeight;
    },


    clickChild(item) {
      this.$emit('click', item);
    },
  },
};


</script>
<style lang="less" src="./index.less" scoped></style>
