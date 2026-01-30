<template>
  <view>
    <view>
      <view class="main-title">
        <view class="title-major">
          用户引导标题
        </view>
        <view class="title-sub">
          按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。
        </view>
      </view>
      <view class="field label-field">
        <t-input
          label="标签文字"
          layout="vertical"
          placeholder="请输入文字"
        />
      </view>
      <view class="field">
        <t-input
          label="标签文字"
          layout="vertical"
          placeholder="请输入文字"
        />
      </view>
      <view class="action">
        <t-button
          block
          theme="light"
          size="large"
        >
          重置
        </t-button>
        <t-button
          block
          theme="primary"
          size="large"
        >
          确定
        </t-button>
      </view>
    </view>

    <t-guide
      :current="current"
      :steps="steps"
      @skip="close"
      @finish="close"
    >
      <template
        #content-0
      >
        <view
          class="content"
        >
          <t-icon
            name="arrow-up"
            size="64rpx"
            color="#fff"
            t-class="icon"
          />
          <p class="text">
            1、自定义的图形或说明文案，用来解释或指导该功能使用。
          </p>
          <view class="footer">
            <t-button
              v-if="current < steps.length - 1"
              theme="light"
              content="跳过"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="skip"
            />
            <t-button
              v-else
              theme="light"
              content="返回"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="back"
            />
            <t-button
              v-if="current < steps.length - 1"
              theme="primary"
              content="下一步"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="next"
            />
            <t-button
              v-else
              theme="primary"
              content="完成"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="finish"
            />
          </view>
        </view>
      </template>
      <template
        #content-1
      >
        <view
          class="content"
        >
          <t-icon
            name="arrow-up"
            size="64rpx"
            color="#fff"
            t-class="icon"
          />
          <p class="text">
            2、自定义的图形或说明文案，用来解释或指导该功能使用。
          </p>
          <view class="footer">
            <t-button
              v-if="current < steps.length - 1"
              theme="light"
              content="跳过"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="skip"
            />
            <t-button
              v-else
              theme="light"
              content="返回"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="back"
            />
            <t-button
              v-if="current < steps.length - 1"
              theme="primary"
              content="下一步"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="next"
            />
            <t-button
              v-else
              theme="primary"
              content="完成"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="finish"
            />
          </view>
        </view>
      </template>

      <template
        #content-2
      >
        <view
          class="content"
        >
          <t-icon
            name="arrow-up"
            size="64rpx"
            color="#fff"
            t-class="icon"
          />
          <p class="text">
            3、自定义的图形或说明文案，用来解释或指导该功能使用。
          </p>
          <view class="footer">
            <t-button
              v-if="current < steps.length - 1"
              theme="light"
              content="跳过"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="skip"
            />
            <t-button
              v-else
              theme="light"
              content="返回"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="back"
            />
            <t-button
              v-if="current < steps.length - 1"
              theme="primary"
              content="下一步"
              size="extra-small"
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              @click="next"
            />
            <t-button
              v-else
              :t-class="useVirtualHost ? btn : ''"
              :class="!useVirtualHost ? btn : ''"
              theme="primary"
              content="完成"
              size="extra-small"
              @click="finish"
            />
          </view>
        </view>
      </template>
    </t-guide>
  </view>
</template>

<script>
import TGuide from '@tdesign/uniapp/guide/guide.vue';
import TInput from '@tdesign/uniapp/input/input.vue';
import TIcon from '@tdesign/uniapp/icon/icon.vue';
import TButton from '@tdesign/uniapp/button/button.vue';
import { getRect } from '@tdesign/uniapp/common/utils';
import { canUseVirtualHost } from '@tdesign/uniapp/common/version';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TGuide,
    TInput,
    TButton,
    TIcon,
  },
  data() {
    return {
      current: -1,
      steps: [],

      ml12: 'margin-left: 12px;',
      useVirtualHost: canUseVirtualHost(),
      btn: 'guide-demo-button',
    };
  },
  mounted() {
    // 处理小程序 attached 生命周期
    setTimeout(() => {
      this.attached();
    }, 33);
  },
  created() {},
  methods: {
    attached() {
      this.current = 0;

      this.steps = [
        {
          element: () => getRect(this, '.main-title', false, true),

          placement: 'center',
        },
        {
          element: () => getRect(this, '.label-field', false, true),
          placement: 'bottom',
          highlightPadding: 0,
        },
        {
          element: () => getRect(this, '.action', false, true),
          placement: 'bottom-right',
        },
      ];
    },

    close() {
      this.$emit('close');
    },

    skip() {
      this.current = -1;
      this.close();
    },

    back() {
      this.current = 0;
    },

    next() {
      this.current = this.current + 1;
    },

    finish() {
      this.current = -1;
      this.close();
    },
  },
};
</script>
<style>
.main-title {
    margin: 32rpx;
    display: inline-block;
}

.title-major {
    font-size: 48rpx;
    font-weight: 600;
    line-height: 72rpx;
}

.title-sub {
    font-size: 32rpx;
    font-weight: 400;
    line-height: 48rpx;
    margin-top: 8rpx;
}

.action {
    margin: 64rpx;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 64rpx;
}

.content {
    width: 480rpx;
}

.content :deep(.icon) {
    font-weight: 700;
    width: 64rpx;
}

.content .text {
    margin-top: 32rpx;
    color: #fff;
    font-size: 32rpx;
    font-weight: 600;
    text-align: left;
    line-height: 48rpx;
}

.content .footer {
    text-align: right;
    margin-top: 32rpx;
}

.content .footer :deep(.guide-demo-button + .guide-demo-button){
    margin-left: 24rpx;
}
</style>
