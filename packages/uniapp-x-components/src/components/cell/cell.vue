<template>
  <div :class="rootClass" @click="onClick">
    <span v-if="$slots['left-icon']" class="t-cell__left-icon">
      <slot name="left-icon" />
    </span>

    <div class="t-cell__main">
      <div class="t-cell__title">
        <span v-if="required" class="t-cell__required">*</span>
        <slot name="title">{{ title }}</slot>
      </div>
      <div
        v-if="$slots.description || description"
        class="t-cell__description"
      >
        <slot name="description">{{ description }}</slot>
      </div>
    </div>

    <div v-if="$slots.note || note" class="t-cell__note">
      <slot name="note">{{ note }}</slot>
    </div>

    <span v-if="$slots['right-icon']" class="t-cell__right-icon">
      <slot name="right-icon" />
    </span>
    <span v-else-if="arrow" class="t-cell__arrow">›</span>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { cellVariants } from './cell.variants';
import type { CellProps } from './cell.types';

const props = withDefaults(defineProps<CellProps>(), {
  title: '',
  description: '',
  note: '',
  arrow: false,
  bordered: false,
  hover: false,
  disabled: false,
  required: false,
  align: 'middle',
  customClass: '',
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const slots = useSlots();
void slots;

const rootClass = computed(() =>
  cellVariants({
    align: props.align,
    bordered: props.bordered,
    hover: props.hover,
    disabled: props.disabled,
    arrow: props.arrow,
    class: props.customClass,
  }),
);

function onClick(event: MouseEvent) {
  if (props.disabled) return;
  emit('click', event);
}
</script>
