<template>
  <view>
    <t-form
      ref="form"
      :data="formData"
      :rules="rules"
      show-error-message
      :label-align="labelAlign"
      @reset="onReset"
      @submit="onSubmit"
    >
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

      <t-form-item label="性别" name="gender">
        <t-radio-group
          :value="formData.gender"
          :disabled="disabled"
          t-class="box"
          style="flex: 1"
          borderless
          @change="onRadioChange"
        >
          <t-radio :block="false" name="radio" value="man" label="男" />
          <t-radio :block="false" name="radio" value="women" label="女" />
          <t-radio :block="false" name="radio" value="secret" label="保密" />
        </t-radio-group>
      </t-form-item>

      <t-form-item arrow label="生日" name="birth">
        <t-input
          :value="formData.birth"
          :disabled="disabled"
          borderless
          placeholder="请选择"
          readonly
          style="flex: 1"
          @click="showDatePicker"
        />
        <t-date-time-picker
          :visible="visibleDatePicker"
          auto-close
          title="选择日期"
          mode="date"
          :default-value="formData.birth"
          format="YYYY-MM-DD"
          @update:visible="(e) => (visibleDatePicker = e)"
          @change="onChangeDatePicker"
        />
      </t-form-item>

      <t-form-item label="年限" name="age">
        <t-stepper :value="formData.age" :disabled="disabled" theme="filled" @change="onChangeStepper" />
      </t-form-item>

      <view class="button-group">
        <t-button
          theme="light"
          form-type="reset"
          size="large"
          :style="!useVirtualHost ? 'flex: 1;display: flex;' : ''"
          custom-style="flex: 1;margin-right: 16px;height: 40px;"
          @click="reset"
        >
          重置
        </t-button>
        <t-button
          theme="primary"
          form-type="submit"
          size="large"
          :style="!useVirtualHost ? 'flex: 1;display: flex;' : ''"
          custom-style="flex: 1;height: 40px;"
          @click="submit"
        >
          提交
        </t-button>
      </view>
    </t-form>
  </view>
</template>

<script>
import TButton from '@tdesign/uniapp/button/button.vue';
import { canUseVirtualHost } from '@tdesign/uniapp/common/version';
import TDateTimePicker from '@tdesign/uniapp/date-time-picker/date-time-picker.vue';
import TForm from '@tdesign/uniapp/form/form.vue';
import TFormItem from '@tdesign/uniapp/form-item/form-item.vue';
import TInput from '@tdesign/uniapp/input/input.vue';
import TRadio from '@tdesign/uniapp/radio/radio.vue';
import TRadioGroup from '@tdesign/uniapp/radio-group/radio-group.vue';
import TStepper from '@tdesign/uniapp/stepper/stepper.vue';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TForm,
    TFormItem,
    TInput,
    TRadioGroup,
    TRadio,
    TDateTimePicker,
    TStepper,
    TButton,
  },
  props: {
    labelAlign: {
      type: String,
      default: 'top',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {
        name: 'Abcdefghijk',
        gender: '',
        birth: '',
        age: 3,
      },
      visibleDatePicker: false,
      rules: {
        name: [{ validator: (val) => val.length === 8, message: '只能输入8个字符英文' }],
        gender: [{ validator: (val) => val !== '', message: '不能为空' }],
        birth: [{ validator: (val) => val !== '', message: '不能为空' }],
        age: [{ validator: (val) => val <= 2, message: '输入的数字不能大于用户所填生日对应的年龄' }],
      },
    };
  },
  computed: {
    useVirtualHost() {
      return canUseVirtualHost();
    },
  },
  mounted() {
    setTimeout(() => {
      const { form } = this.$refs;
      form && form.validate();
    });
  },
  methods: {
    onReset(e) {
      this.formData = e.formData;
    },
    onSubmit(e) {
      console.log('[onSubmit]: ', e);
    },
    submit() {
      const { form } = this.$refs;
      form.submit();
    },
    reset() {
      const { form } = this.$refs;
      form.reset();
    },
    onRadioChange(e) {
      this.formData.gender = e.value;
    },
    onChangeStepper(e) {
      this.formData.age = e.value;
    },
    showDatePicker() {
      this.visibleDatePicker = true;
      uni.hideKeyboard();
    },
    onChangeDatePicker(e) {
      this.formData.birth = e.value;
      this.visibleDatePicker = false;
    },
  },
};
</script>
<style scoped>
:deep(.box) {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.button-group {
  background-color: var(--bg-color-demo, #fff);
  box-sizing: border-box;
  padding: 32rpx;
  display: flex;
  justify-content: space-between;
  position: relative;
}
</style>
