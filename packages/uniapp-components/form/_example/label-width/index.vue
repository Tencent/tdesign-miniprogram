<template>
  <view>
    <t-form class="form-demo-form" :data="formData" label-align="left">
      <t-form-item label="用户昵称" name="nickname" :label-width="80">
        <t-input
          :value="formData.nickname"
          :disabled="disabled"
          borderless
          placeholder="请输入昵称"
          style="flex: 1"
          @update:value="(e) => (formData.nickname = e)"
        />
      </t-form-item>
      <t-form-item label="工作年限" name="workAge" :label-width="80">
        <t-stepper
          :value="formData.workAge"
          :disabled="disabled"
          theme="filled"
          @change="(e) => (formData.workAge = e.value)"
        />
      </t-form-item>
    </t-form>

    <t-form class="form-demo-form" :data="formData" label-align="left">
      <t-form-item label="标签文案宽度" name="label" :label-width="112">
        <t-input
          :value="formData.label"
          :disabled="disabled"
          borderless
          placeholder="请输入内容"
          style="flex: 1"
          @update:value="(e) => (formData.label = e)"
        />
      </t-form-item>
      <t-form-item label="标签文案宽度" name="labelAge" :label-width="112">
        <t-stepper
          :value="formData.labelAge"
          :disabled="disabled"
          theme="filled"
          @change="(e) => (formData.labelAge = e.value)"
        />
      </t-form-item>
    </t-form>

    <t-form class="form-demo-form" :data="formData" label-align="left">
      <t-form-item label="标签文案宽度超长样式" name="longLabel" :label-width="176">
        <t-input
          :value="formData.longLabel"
          :disabled="disabled"
          borderless
          placeholder="请输入内容"
          style="flex: 1"
          @update:value="(e) => (formData.longLabel = e)"
        />
      </t-form-item>
      <t-form-item label="标签文案宽度超长样式" name="longLabelAge" :label-width="176">
        <t-stepper
          :value="formData.longLabelAge"
          :disabled="disabled"
          theme="filled"
          @change="(e) => (formData.longLabelAge = e.value)"
        />
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
        nickname: 'Abcdefgh',
        workAge: 3,
        label: 'Abcdefgh',
        labelAge: 3,
        longLabel: 'Abcdefgh',
        longLabelAge: 3,
      },
    };
  },
};
</script>
<style scoped>
.form-demo-form + .form-demo-form {
  margin-top: 32rpx;
}
</style>
