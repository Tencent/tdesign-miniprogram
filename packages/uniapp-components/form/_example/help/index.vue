<template>
  <view>
    <t-form :data="formData" :label-align="labelAlign">
      <t-form-item label="用户名" name="name" help="用户名支持大小写英文字母，最多 8 个字符">
        <t-input
          :value="formData.name"
          :disabled="disabled"
          borderless
          placeholder="请输入用户名"
          style="flex: 1"
          @update:value="(e) => (formData.name = e)"
        />
      </t-form-item>

      <t-form-item label="密码" name="password" help="密码长度 6–16 位，支持字母、数字">
        <t-input
          :value="formData.password"
          :disabled="disabled"
          borderless
          type="password"
          :clearable="false"
          placeholder="请输入密码"
          style="flex: 1"
          @update:value="(e) => (formData.password = e)"
        />
      </t-form-item>

      <t-form-item label="性别" name="gender" help="性别不能为空">
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

      <t-form-item arrow label="生日" name="birth" help="生日不能为空">
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
    </t-form>
  </view>
</template>

<script>
import TDateTimePicker from '@tdesign/uniapp/date-time-picker/date-time-picker.vue';
import TForm from '@tdesign/uniapp/form/form.vue';
import TFormItem from '@tdesign/uniapp/form-item/form-item.vue';
import TInput from '@tdesign/uniapp/input/input.vue';
import TRadio from '@tdesign/uniapp/radio/radio.vue';
import TRadioGroup from '@tdesign/uniapp/radio-group/radio-group.vue';

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
        name: 'Abcdefgh',
        password: 'Abcdefgh',
        gender: 'man',
        birth: '2022-08-10',
      },
      visibleDatePicker: false,
    };
  },
  methods: {
    onRadioChange(e) {
      this.formData.gender = e.value;
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
</style>
