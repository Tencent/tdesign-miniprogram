<template>
  <button
    :class="rootClass"
    :type="type"
    :disabled="disabled || loading"
    @click="onClick"
  >
    <span v-if="loading" class="t-button__loading">
      <slot name="loading">
        <span class="t-button__spinner" />
      </slot>
    </span>
    <span v-else-if="$slots.icon" class="t-button__icon">
      <slot name="icon" />
    </span>
    <span v-if="$slots.default" class="t-button__content">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { buttonVariants } from './button.variants';
import type { ButtonProps } from './button.types';

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'base',
  theme: 'default',
  size: 'medium',
  shape: 'rectangle',
  type: 'button',
  block: false,
  disabled: false,
  loading: false,
  ghost: false,
  customClass: '',
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const slots = useSlots();
void slots; // 让 ESLint 知道使用了 useSlots（模板里有 $slots 调用）

const rootClass = computed(() =>
  buttonVariants({
    variant: props.variant,
    theme: props.theme,
    size: props.size,
    shape: props.shape,
    block: props.block,
    disabled: props.disabled,
    loading: props.loading,
    ghost: props.ghost,
    class: props.customClass,
  }),
);

function onClick(event: MouseEvent) {
  if (props.disabled || props.loading) return;
  emit('click', event);
}
</script>
