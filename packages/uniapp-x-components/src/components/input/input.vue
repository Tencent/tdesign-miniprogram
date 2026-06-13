<template>
  <div :class="rootClass">
    <span v-if="$slots.prefix" class="t-input__prefix">
      <slot name="prefix" />
    </span>

    <input
      class="t-input__inner"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength > 0 ? maxlength : undefined"
      @input="onInput"
      @change="onNativeChange"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
    />

    <span
      v-if="clearable && modelValue && !disabled && !readonly"
      class="t-input__clear"
      @click="onClear"
    >×</span>

    <span v-if="$slots.suffix" class="t-input__suffix">
      <slot name="suffix" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { inputVariants } from './input.variants';
import type { InputProps } from './input.types';

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  placeholder: '',
  type: 'text',
  size: 'medium',
  status: 'default',
  disabled: false,
  readonly: false,
  clearable: false,
  maxlength: 0,
  customClass: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'clear'): void;
  (e: 'enter', value: string): void;
}>();

const slots = useSlots();
void slots;

const rootClass = computed(() =>
  inputVariants({
    size: props.size,
    status: props.status,
    disabled: props.disabled,
    readonly: props.readonly,
    class: props.customClass,
  }),
);

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
  emit('change', value);
}

function onNativeChange(_e: Event) {
  // 原生 change 仅在 blur 时触发；我们已在 input 中触发 change，这里不重复
}

function onFocus(e: FocusEvent) {
  emit('focus', e);
}

function onBlur(e: FocusEvent) {
  emit('blur', e);
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    emit('enter', props.modelValue);
  }
}

function onClear() {
  emit('update:modelValue', '');
  emit('change', '');
  emit('clear');
}
</script>
