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
      <TIcon
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
        <TIcon
          name="chevron-right"
          color="var(--td-text-color-placeholder)"
          aria-hidden
        />
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import TIcon from 'tdesign-uniapp/icon/icon.vue';

const itemHeight = 56 * 2;
const childBoxHeight = ref(0);
defineOptions({
  styleIsolation: 'shared',
});

const props = withDefaults(defineProps<{
  defaultOpen?: boolean;
  name?: string;
  icon?: string;
  childArr?: any[];
  tClass?: string;
}>(), {
  defaultOpen: false,
  name: '',
  icon: '',
  childArr: () => ([]),
  tClass: '',
});

const emits = defineEmits(['click']);


const switchHandle = () => {
  childBoxHeight.value = childBoxHeight.value > 0
    ? 0
    : props.childArr.length * itemHeight;
};


const clickChild = (item) => {
  emits('click', item);
};

</script>
<style lang="less" src="./index.less" scoped></style>
