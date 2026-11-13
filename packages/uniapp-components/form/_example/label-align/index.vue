<template>
  <view>
    <t-form class="form-demo-form" :data="formData" label-align="left" :label-width="81">
      <t-form-item label="用户名" name="name">
        <t-input
          :value="formData.name"
          :disabled="disabled"
          borderless
          placeholder="请输入用户名"
          style="flex: 1"
          @update:value="(e) => (formData.name = e)"
        />
      </t-form-item>
      <t-form-item label="年限" name="age">
        <t-stepper :value="formData.age" :disabled="disabled" theme="filled" @change="onChangeStepper" />
      </t-form-item>
    </t-form>

    <t-form class="form-demo-form" :data="formData" label-align="right" :label-width="81">
      <t-form-item label="用户名" name="name">
        <t-input
          :value="formData.name"
          :disabled="disabled"
          borderless
          placeholder="请输入用户名"
          style="flex: 1"
          @update:value="(e) => (formData.name = e)"
        />
      </t-form-item>
      <t-form-item label="年限" name="age">
        <t-stepper :value="formData.age" :disabled="disabled" theme="filled" @change="onChangeStepper" />
      </t-form-item>
    </t-form>
  </view>
</template>

<script>
import TForm from '@tdesign/uniapp/form/form.vue';
import TFormItem from '@tdesign/uniapp/form-item/form-item.vue';
import TInput from '@tdesign/uniapp/input/input.vue';
import TStepper from '@tdesign/uniapp/stepper/stepper.vue';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TForm,
    TFormItem,
    TInput,
    TStepper,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {
        name: 'Abcdefgh',
        age: 3,
      },
    };
  },
  methods: {
    onChangeStepper(e) {
      this.formData.age = e.value;
    },
  },
};
</script>
<style scoped>
.form-demo-form + .form-demo-form {
  margin-top: 32rpx;
}
</style>
