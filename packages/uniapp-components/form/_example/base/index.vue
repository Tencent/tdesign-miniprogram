<template>
  <view>
    <t-form
      ref="form"
      class="form"
      :data="formData"
      :rules="rules"
      reset-type="empty"
      show-error-message
      scroll-to-first-error="auto"
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
          data-field="name"
          style="flex: 1"
          @update:value="(e) => (formData.name = e)"
        />
      </t-form-item>

      <t-form-item label="密码" name="password">
        <t-input
          :value="formData.password"
          :disabled="disabled"
          borderless
          type="password"
          :clearable="false"
          placeholder="请输入密码"
          data-field="password"
          style="flex: 1"
          @update:value="(e) => (formData.password = e)"
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

      <t-form-item arrow label="籍贯" name="place">
        <t-input
          :value="formData.place"
          :disabled="disabled"
          borderless
          placeholder="请选择"
          readonly
          style="flex: 1"
          @click="showCascader"
        />
        <t-cascader
          :visible="visibleCascader"
          :value="address"
          title="选择地址"
          :options="options"
          @update:visible="(e) => (visibleCascader = e)"
          @change="onChangeCascader"
          @visible-change="onCascaderVisibleChange"
        />
      </t-form-item>

      <t-form-item label="年限" name="age">
        <t-stepper :value="formData.age" :disabled="disabled" theme="filled" @change="onChangeStepper" />
      </t-form-item>

      <t-form-item label="自我评价" name="description">
        <t-rate
          :value="formData.description"
          :disabled="disabled"
          variant="filled"
          allow-half
          :gap="rateGap"
          @change="onRateChange"
        />
      </t-form-item>

      <t-form-item label="个人简介" name="resume" t-class-label="my-label">
        <t-textarea
          :value="formData.resume"
          :disabled="disabled"
          t-class="textarea"
          indicator
          :maxlength="50"
          placeholder="请输入个人简介"
          style="flex: 1"
          @update:value="(e) => (formData.resume = e)"
        />
      </t-form-item>

      <t-form-item label="上传照片" name="photo">
        <t-upload
          t-class="upload"
          :files="formData.photo"
          :disabled="disabled"
          multiple
          :max="6"
          :action="action"
          :grid-config="gridConfig"
          @fail="onFail"
          @progress="onProgress"
          @change="onChangeUpload"
          @preview="onPreview"
          @success="onSuccess"
          @remove="onRemove"
        />
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
import TCascader from '@tdesign/uniapp/cascader/cascader.vue';
import { canUseVirtualHost } from '@tdesign/uniapp/common/version';
import TDateTimePicker from '@tdesign/uniapp/date-time-picker/date-time-picker.vue';
import TForm from '@tdesign/uniapp/form/form.vue';
import TFormItem from '@tdesign/uniapp/form-item/form-item.vue';
import TInput from '@tdesign/uniapp/input/input.vue';
import TRadio from '@tdesign/uniapp/radio/radio.vue';
import TRadioGroup from '@tdesign/uniapp/radio-group/radio-group.vue';
import TRate from '@tdesign/uniapp/rate/rate.vue';
import TStepper from '@tdesign/uniapp/stepper/stepper.vue';
import TTextarea from '@tdesign/uniapp/textarea/textarea.vue';
import TUpload from '@tdesign/uniapp/upload/upload.vue';

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
    TCascader,
    TDateTimePicker,
    TStepper,
    TRate,
    TTextarea,
    TUpload,
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
        name: 'Abcdefgh',
        password: 'Abcdefgh',
        gender: 'man',
        birth: '2022-08-10',
        place: '广东省 深圳市',
        age: 3,
        description: 3.5,
        resume: '本人性格开朗、稳重、细心，待人热情、真诚，工作认真负责，积极主动，勇于创新，具有很强的团队协作精神。',
        photo: [
          {
            url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
            name: 'uploaded1.png',
            type: 'image',
          },
          {
            url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
            name: 'uploaded2.png',
            type: 'image',
          },
        ],
      },
      visibleCascader: false,
      visibleDatePicker: false,
      address: '440300',
      rateGap: 8,
      action: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo',
      gridConfig: {
        column: 3,
      },
      options: [
        {
          label: '广东省',
          value: '440000',
          children: [{ value: '440300', label: '深圳市' }],
        },
        {
          label: '北京市',
          value: '110000',
          children: [
            {
              value: '110100',
              label: '北京市',
              children: [
                { value: '110101', label: '东城区' },
                { value: '110102', label: '西城区' },
                { value: '110105', label: '朝阳区' },
                { value: '110108', label: '海淀区' },
              ],
            },
          ],
        },
        {
          label: '天津市',
          value: '120000',
          children: [
            {
              value: '120100',
              label: '天津市',
              children: [
                { value: '120101', label: '和平区' },
                { value: '120102', label: '河东区' },
                { value: '120103', label: '河西区' },
                { value: '120104', label: '南开区' },
              ],
            },
          ],
        },
      ],
      rules: {
        name: [{ validator: (val) => val.length === 8, message: '只能输入8个字符英文' }],
        password: [{ validator: (val) => val.length > 6, message: '密码长度 6–16 位，支持字母、数字' }],
        gender: [{ validator: (val) => val !== '', message: '不能为空' }],
        birth: [{ validator: (val) => val !== '', message: '不能为空' }],
        place: [{ validator: (val) => val !== '', message: '不能为空' }],
        description: [{ validator: (val) => val > 3, message: '分数过低会影响整体评价' }],
        resume: [{ validator: (val) => val !== '', message: '不能为空' }],
      },
    };
  },
  computed: {
    useVirtualHost() {
      return canUseVirtualHost();
    },
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
    onRateChange(e) {
      this.formData.description = e.value;
    },
    onCascaderVisibleChange(e) {
      this.visibleCascader = e.value;
    },
    onChangeCascader(e) {
      const { selectedOptions } = e;
      const placeText = selectedOptions?.map((item) => item.label).join(' ');
      this.formData.place = placeText;
      this.visibleCascader = false;
    },
    showCascader() {
      this.visibleCascader = true;
      uni.hideKeyboard();
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
    onFail(e) {
      console.log('[onFail]: ', e);
    },
    onProgress(e) {
      console.log('[onProgress]: ', e);
    },
    onChangeUpload(e) {
      console.log('[onChange]: ', e);
    },
    onPreview(e) {
      console.log('[onPreview]: ', e);
    },
    onSuccess(e) {
      const { files } = e;
      this.formData.photo = [...files];
    },
    onRemove(e) {
      const { index } = e;
      const { photo } = this.formData;
      photo.splice(index, 1);
      this.formData.photo = photo;
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

:deep(.upload) {
  width: 100%;
}

:deep(.textarea) {
  height: 200rpx;
  width: 100%;
  --textarea-vertical-padding: 0;
  --td-textarea-horizontal-padding: 0;
  padding: 0 !important;
}
:deep(.textarea .t-textarea) {
  padding: 0 !important;
}

:deep(.my-label) {
  align-self: flex-start;
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
