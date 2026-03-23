<template>
  <view>
    <t-form
      ref="form"
      class="form"
      :data="formData"
      :rules="rules"
      reset-type="initial"
      show-error-message
      scroll-to-first-error="smooth"
      label-align="left"
      @reset="(e) => onReset(e, { tagId: 'form' })"
      @submit="(e) => onSubmit(e, { tagId: 'form' })"
    >
      <t-form-item
        label="用户名"
        name="name"
        help="输入用户名"
      >
        <t-input
          :value="formData.name"
          :disabled="disabled"
          borderless
          placeholder="请输入用户名"
          data-field="name"
          style="flex: 1;"
          @update:value="(e) => formData.name = e"
        />
      </t-form-item>

      <t-form-item
        label="密码"
        name="password"
      >
        <t-input
          :value="formData.password"
          :disabled="disabled"
          borderless
          type="password"
          :clearable="false"
          placeholder="请输入密码"
          data-field="password"
          style="flex: 1;"
          @change="(e) => onInputChange(e, { field: 'password' })"
        />
      </t-form-item>

      <t-form-item
        label="性别"
        name="gender"
      >
        <t-radio-group
          :value="formData.gender"
          :disabled="disabled"
          t-class="box"
          style="flex: 1;"
          borderless
          @change="onRadioChange"
        >
          <t-radio
            :block="false"
            name="radio"
            value="man"
            label="男"
          />
          <t-radio
            :block="false"
            name="radio"
            value="women"
            label="女"
          />
          <t-radio
            :block="false"
            name="radio"
            value="secret"
            label="保密"
          />
        </t-radio-group>
      </t-form-item>

      <t-form-item
        label="生日"
        name="birth"
        content-align="right"
      >
        <t-input
          :value="formData.birth"
          :disabled="disabled"
          borderless
          align="right"
          placeholder="请输入生日"
          data-field="birth"
          style="flex: 1;"
          @change="(e) => onInputChange(e, { field: 'birth' })"
        />
      </t-form-item>

      <t-form-item
        arrow
        label="籍贯"
        name="place"
        content-align="right"
      >
        <t-input
          ref="input"
          :value="formData.place"
          :disabled="disabled"
          borderless
          align="right"
          placeholder="请选择籍贯"
          :readonly="!isH5"
          style="flex: 1;"
          @click="showCascader"
        />

        <t-cascader
          :visible="visibleCascader"
          :value="address"
          title="选择地址"
          :options="options"
          @update:visible="(e) => visibleCascader = e"
          @change="onChangeCascader"
          @visible-change="onCascaderVisibleChange"
        />
      </t-form-item>

      <t-form-item
        label="年限"
        name="age"
        content-align="right"
      >
        <t-stepper
          :value="formData.age"
          :disabled="disabled"
          theme="filled"
          @change="onChangeStepper"
        />
      </t-form-item>

      <t-form-item
        label="自我评价"
        name="description"
        content-align="right"
      >
        <t-rate
          :value="formData.description"
          :disabled="disabled"
          variant="filled"
          allow-half
          :gap="rateGap"
          @change="onRateChange"
        />
      </t-form-item>

      <t-form-item
        label="个人简介"
        name="resume"
      >
        <t-textarea
          :value="formData.resume"
          :disabled="disabled"
          t-class="textarea"
          indicator
          :maxlength="50"
          placeholder="请输入个人简介"
          style="flex: 1;"
          @update:value="(e) => formData.resume = e"
        />
      </t-form-item>

      <t-form-item
        label="上传照片"
        name="photo"
      >
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
          theme="primary"
          form-type="submit"
          size="large"
          :style="!useVirtualHost ? 'flex: 1;display: flex;' : ''"
          custom-style="flex: 1;margin-right: 16px;height: 40px;"
          @click="submit"
        >
          提交
        </t-button>
        <t-button
          theme="default"
          variant="base"
          form-type="reset"
          size="large"
          :style="!useVirtualHost ? 'flex: 1;display: flex;' : ''"
          custom-style="flex: 1;height: 40px;"
          @click="reset"
        >
          重置
        </t-button>
      </view>
    </t-form>
  </view>
</template>

<script>
import TForm from '@tdesign/uniapp/form/form.vue';
import TFormItem from '@tdesign/uniapp/form-item/form-item.vue';
import TInput from '@tdesign/uniapp/input/input.vue';
import TRadioGroup from '@tdesign/uniapp/radio-group/radio-group.vue';
import TRadio from '@tdesign/uniapp/radio/radio.vue';
// import TPopup from '@tdesign/uniapp/popup/popup.vue';
import TCascader from '@tdesign/uniapp/cascader/cascader.vue';
import TStepper from '@tdesign/uniapp/stepper/stepper.vue';
import TRate from '@tdesign/uniapp/rate/rate.vue';
import TTextarea from '@tdesign/uniapp/textarea/textarea.vue';
import TUpload from '@tdesign/uniapp/upload/upload.vue';
import TButton from '@tdesign/uniapp/button/button.vue';
import { canUseVirtualHost } from '@tdesign/uniapp/common/version';

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
    // TPopup,
    TCascader,
    TStepper,
    TRate,
    TTextarea,
    TUpload,
    TButton,
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
        name: '',
        password: '',
        gender: '',
        birth: '',
        place: '',
        age: 3,
        description: 2,
        resume: '',
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
      address: '120119',
      rateGap: 8,
      action: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo',
      gridConfig: {
        column: 3,
      },
      options: [
        {
          label: '北京市',
          value: '110000',
          children: [
            {
              value: '110100',
              label: '北京市',
              children: [
                {
                  value: '110101',
                  label: '东城区',
                },
                {
                  value: '110102',
                  label: '西城区',
                },
                {
                  value: '110105',
                  label: '朝阳区',
                },
                {
                  value: '110106',
                  label: '丰台区',
                },
                {
                  value: '110107',
                  label: '石景山区',
                },
                {
                  value: '110108',
                  label: '海淀区',
                },
                {
                  value: '110109',
                  label: '门头沟区',
                },
                {
                  value: '110111',
                  label: '房山区',
                },
                {
                  value: '110112',
                  label: '通州区',
                },
                {
                  value: '110113',
                  label: '顺义区',
                },
                {
                  value: '110114',
                  label: '昌平区',
                },
                {
                  value: '110115',
                  label: '大兴区',
                },
                {
                  value: '110116',
                  label: '怀柔区',
                },
                {
                  value: '110117',
                  label: '平谷区',
                },
                {
                  value: '110118',
                  label: '密云区',
                },
                {
                  value: '110119',
                  label: '延庆区',
                },
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
                {
                  value: '120101',
                  label: '和平区',
                },
                {
                  value: '120102',
                  label: '河东区',
                },
                {
                  value: '120103',
                  label: '河西区',
                },
                {
                  value: '120104',
                  label: '南开区',
                },
                {
                  value: '120105',
                  label: '河北区',
                },
                {
                  value: '120106',
                  label: '红桥区',
                },
                {
                  value: '120110',
                  label: '东丽区',
                },
                {
                  value: '120111',
                  label: '西青区',
                },
                {
                  value: '120112',
                  label: '津南区',
                },
                {
                  value: '120113',
                  label: '北辰区',
                },
                {
                  value: '120114',
                  label: '武清区',
                },
                {
                  value: '120115',
                  label: '宝坻区',
                },
                {
                  value: '120116',
                  label: '滨海新区',
                },
                {
                  value: '120117',
                  label: '宁河区',
                },
                {
                  value: '120118',
                  label: '静海区',
                },
                {
                  value: '120119',
                  label: '蓟州区',
                },
              ],
            },
          ],
        },
      ],
      rules: {
        name: [
          { pattern: '[a-zA-Z]{8}', validator: val => val.length === 8, message: '只能输入8个字符英文' },
        ],
        password: [
          { validator: val => val.length > 6, message: '长度大于6个字符' },
        ],
        description: [
          { validator: val => val > 3, message: '分数过低会影响整体评价' },
        ],
        gender: [
          { validator: val => val !== '', message: '不能为空' },
        ],
        birth: [
          { validator: val => val !== '', message: '不能为空' },
        ],
        place: [
          { validator: val => val !== '', message: '不能为空' },
        ],
        resume: [
          { validator: val => val !== '', message: '不能为空' },
        ],
      },
    };
  },
  computed: {
    useVirtualHost() {
      return canUseVirtualHost();
    },
  },
  created() {},
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
    onInputChange(e, { field }) {
      this.formData[`${field}`] = e.value;
    },
    onRadioChange(e) {
      this.formData.gender = e.value;
    },
    onRateChange(e) {
      this.formData.description = e.value;
    },
    onTextareaChange(e) {
      this.formData.resume = e.value;
    },
    groupChangeFn(e) {
      console.log('groupChange:', e.value);
    },
    onCascaderVisibleChange(e) {
      this.formData.visibleCascader = e.value;
    },
    onChangeCascader(e) {
      const { selectedOptions } = e;
      const placeText = selectedOptions?.map(item => item.label).join('/');
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

.form {
}

:deep(.upload) {
    width: 100%;
}

/* .upload {
    width: 100%;
} */

:deep(.textarea) {
    height: 200rpx;
    width: 100%;
    --textarea-vertical-padding: 0;
    --td-textarea-horizontal-padding: 0;
    padding:0 !important;
}
:deep(.textarea .t-textarea) {
    padding: 0 !important;
}

.button-group {
    background-color: var(--bg-color-demo, #fff);
    box-sizing: border-box;
    padding: 32rpx;
    display: flex;
    justify-content: space-between;
    position: relative;
    border-bottom: 1rpx solid #e7e7e7;
}

/* .button-group :deep(.t-button) {
    height: 80rpx;
    flex: 1;
}

.button-group :deep(.t-button:not(:last-child)) {
    margin-right: 32rpx;
} */

</style>
