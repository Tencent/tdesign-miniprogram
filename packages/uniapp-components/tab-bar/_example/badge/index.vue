<template>
  <view>
    <!-- 文本 + 徽标 -->
    <view class="wrapper">
      <t-tab-bar
        t-class="t-tab-bar"
        default-value="label1"
        :fixed="false"
      >
        <t-tab-bar-item
          :badge-props="{count: 16, offset: [16, 0]} "
          aria-label="首页，有16条消息"
          value="label1"
        >
          首页
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{ dot: true, offset: [16, 0] }"
          aria-label="应用，有新的消息"
          value="label2"
        >
          应用
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{count: 'New', offset: [16, 0]}"
          aria-label="聊天，New"
          value="label3"
        >
          聊天
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{count: '···', offset: [16, 0]}"
          aria-label="我的，有很多消息"
          value="label4"
        >
          我的
        </t-tab-bar-item>
      </t-tab-bar>
    </view>

    <!-- 图标 + 徽标 -->
    <view class="wrapper">
      <t-tab-bar
        t-class="t-tab-bar"
        default-value="label1"
        :split="false"
        :fixed="false"
      >
        <t-tab-bar-item
          :badge-props="{count: 16}"
          aria-label="首页，有16条消息"
          value="label1"
          icon="home"
        />
        <t-tab-bar-item
          :badge-props="{ dot: true }"
          aria-label="应用，有新的消息"
          value="label2"
          icon="app"
        />
        <t-tab-bar-item
          :badge-props="{count: 'New'}"
          aria-label="聊天，New"
          value="label3"
          icon="chat"
        />
        <t-tab-bar-item
          :badge-props="{count: '···'}"
          aria-label="我的，有很多消息"
          value="label4"
          icon="user"
        />
      </t-tab-bar>
    </view>

    <!-- 文本 + 图标 + 徽标 -->
    <view class="wrapper">
      <t-tab-bar
        t-class="t-tab-bar"
        default-value="label1"
        :split="false"
        :fixed="false"
      >
        <t-tab-bar-item
          :badge-props="{count: 16}"
          aria-label="首页，有16条消息"
          value="label1"
          icon="home"
        >
          首页
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{ dot: true }"
          aria-label="应用，有新的消息"
          value="label2"
          icon="app"
        >
          应用
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{count: 'New'}"
          aria-label="聊天，New"
          value="label3"
          icon="chat"
        >
          聊天
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{count: '···'}"
          aria-label="我的，有很多消息"
          value="label4"
          icon="user"
        >
          我的
        </t-tab-bar-item>
      </t-tab-bar>
    </view>
  </view>
</template>

<script>
import TTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import TTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
export default {
  components: {
    TTabBar,
    TTabBarItem,
  },
  data() {
    return {
      list: [
        {
          value: 'label_1',
          label: '文字',
          icon: 'home',
        },
        {
          value: 'label_2',
          label: '文字',
          icon: 'app',
        },
        {
          value: 'label_3',
          label: '文字',
          icon: 'chat',
        },
        {
          value: 'label_4',
          label: '文字',
          icon: 'user',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.wrapper:not(:last-child) {
    margin-bottom: 32rpx;
}
</style>
