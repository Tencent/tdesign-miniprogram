<template>
  <div ref="wrapper" :class="wrapperClass" :style="{ '--fixed-pos-top': fixedPos.top, '--fixed-pos-left': fixedPos.left }">
    <h3 class="tdesign-doc-qrcode__title">扫码体验组件</h3>
    <img :src="src" alt="qrcode" class="tdesign-doc-qrcode__img" />
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, onUnmounted, ref, reactive } from 'vue';

export default defineComponent({
  props: {
    src: String,
  },

  setup() {
    const isFixed = ref(false);
    const wrapper = ref(null);
    const fixedPos = reactive({});
    const wrapperClass = computed(() => ([
      'tdesign-doc-qrcode',
      {
        'tdesign-doc-qrcode--fixed': isFixed.value
      }
    ]))

    const handleScroll = () => {
      const { scrollTop } = document.documentElement;

      if (scrollTop > 258) {
        if (!isFixed.value && !fixedPos.top) {
          const { top, left } = wrapper.value.getBoundingClientRect();
          fixedPos.top = 150 + 'px';
          fixedPos.left = left + 'px';
        }
        isFixed.value = true;
      } else {
        isFixed.value = false;
      }
    }

    onMounted(() => {
      document.addEventListener('scroll', handleScroll);
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll);
    })

    return {
      isFixed,
      wrapper,
      fixedPos,
      wrapperClass,
    }
  }
})
</script>

<style lang="less">

.tdesign-doc-qrcode {
  position: absolute;
  top: 0;
  left: calc(100% + 48px);
  width: 252px;

  &--fixed {
    position: fixed;
    top: var(--fixed-pos-top);
    left: var(--fixed-pos-left);
  }

  &__title {
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 16px;
  }

  &__img {
    padding: 16px;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    width: 200px;
    box-sizing: border-box;
  }
}
</style>