<template>
  <view
    class="demo-block "
    :class="{'demo-block_notitle': !title}"
  >
    <view
      v-if="title || desc"
      class="demo-block__header"
    >
      <view
        v-if="title"
        class="demo-block__header-title"
      >
        {{ title }}
      </view>
      <view
        v-if="desc"
        class="demo-block__header-desc"
        :class="{'demo-block_subtitle': !title}"
      >
        {{ desc }}
      </view>
    <!-- <slot name="title-right" /> -->
    </view>
    <view
      v-for="(operItem, index) in operList"
      :key="index"
      class="demo-block__oper"
    >
      <view
        v-if="operItem.title"
        class="demo-block__oper-subtitle"
      >
        {{ operItem.title }}
      </view>
      <view
        v-for="btnItem in operItem.btns"
        :key="btnItem.text"
      >
        <TButton
          t-class="demo-block__oper-btn"
          size="large"
          block
          :data-type="btnItem.type"
          bind:tap="clickHandle"
        >
          {{ btnItem.text }}
        </TButton>
      </view>
    </view>
    <view
      class="demo-block__slot"
      :class="{'with-padding': padding}"
    >
      <slot />
    </view>
  </view>
</template>
<script>
import TButton from '../button/button.vue';


export default {
  name: 'TDemo',
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    operList: {
      type: Array,
      default: () => [],
    },
    padding: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {

    };
  },
};
</script>
<style scoped src="./index.css">
</style>
