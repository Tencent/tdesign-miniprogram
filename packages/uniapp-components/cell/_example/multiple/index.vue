<template>
  <view>
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      hover
      arrow
    />
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      hover
      arrow
      required
    />
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      hover
      arrow
    >
      <template
        #note
      >
        <t-badge
          :count="16"
          style="display: inline-flex;"
        />
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      hover
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      note="辅助信息"
      hover
      arrow
    />
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      left-icon="app"
      hover
      arrow
    />
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容"
      hover
    />
    <t-cell
      title="单行标题"
      description="一段很长很长很长的内容文字"
      hover
      arrow
    >
      <template
        #left-icon
      >
        <view
          class="avatar"
        >
          <!-- #ifdef MP-WEIXIN -->
          <open-data type="userAvatarUrl" />
          <!-- #endif -->

          <!-- #ifndef MP-WEIXIN -->
          <t-icon
            name="user"
            size="36"
          />
        <!-- #endif -->
        </view>
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      align="top"
      image="https://tdesign.gtimg.com/mobile/demos/avatar1.png"
      hover
      :bordered="false"
    />
  </view>
</template>

<script>
import TCell from 'tdesign-uniapp/cell/cell.vue';
import TBadge from 'tdesign-uniapp/badge/badge.vue';
import TSwitch from 'tdesign-uniapp/switch/switch.vue';
import TIcon from 'tdesign-uniapp/icon/icon.vue';


export default {
  components: {
    TCell,
    TBadge,
    TSwitch,
    TIcon,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.avatar {
    width: 96rpx;
    height: 96rpx;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-self: center;
}
</style>
