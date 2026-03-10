<template>
  <view>
    <t-input
      label="输入密码"
      type="password"
      :value="textPassword"
      :suffix-icon="{ name: 'browse-off', ariaLabel: '密码' }"
    />

    <t-input
      placeholder="输入验证码"
      label="验证码"
    >
      <template
        #suffix
      >
        <view
          class="suffix"
        >
          <view class="suffix--line" />
          <image
            class="image"
            src="https://wwcdn.weixin.qq.com/node/wework/images/202010241547.ac6876be9c.png"
            mode="heightFix"
            aria-role="img"
            aria-label="验证码"
          />
        </view>
      </template>
    </t-input>

    <t-input
      label="手机号"
      placeholder="输入手机号码"
      :value="phoneNumber"
      type="number"
      :tips="phoneError ? '手机号输入不正确' : ''"
      @change="onPhoneInput"
    >
      <template
        #suffix
      >
        <view
          style="display: flex; align-items: center"
        >
          <view class="suffix--line" />
          <view
            class="verify"
            aria-role="button"
          >
            发送验证码
          </view>
        </view>
      </template>
    </t-input>

    <t-input
      label="价格"
      placeholder="0.00"
      suffix="元"
      align="right"
      type="number"
      :format="priceFormat"
      :tips="priceError ? '请输入正确的价格' : ''"
      t-class-tips="tips"
      @change="onPriceInput"
    />

    <t-input
      label="数量"
      placeholder="填写个数"
      suffix="个"
      align="right"
      type="number"
    />
  </view>
</template>

<script>
import TInput from '@tdesign/uniapp/input/input.vue';
export default {
  components: {
    TInput,
  },
  data() {
    return {
      textPassword: '123456',
      phoneError: false,
      phoneNumber: '17600600600',
      priceError: false,
      priceFormat: (v) => {
        const isNumber = /^\d+(\.\d+)?$/.test(v);
        if (isNumber) {
          return parseFloat(v).toFixed(2);
        }
        return v;
      },
    };
  },
  created() {},
  methods: {
    onPhoneInput(e) {
      const { phoneError } = this;
      const isPhoneNumber = /^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.value);
      if (phoneError === isPhoneNumber) {
        this.phoneError = !isPhoneNumber;
      }
    },
    onPriceInput(e) {
      const { priceError } = this;
      const isNumber = /^\d+(\.\d+)?$/.test(e.value);
      if (priceError === isNumber) {
        this.priceError = !isNumber;
      }
    },
  },
};
</script>
<style>
.suffix {
    display: flex;
    align-items: center;
}

.suffix--line {
    width: 1px;
    height: 24px;
    background-color: var(--td-component-stroke, #f3f3f3);
    margin-right: 16px;
}

.image {
    width: 72px;
    height: 36px;
    display: block;
    margin-top: -6px;
    margin-bottom: -6px;
}

.tips {
    text-align: right !important;
}

.verify {
    color: var(--td-brand-color, #0052d9);
    font-size: 32rpx;
}
</style>
