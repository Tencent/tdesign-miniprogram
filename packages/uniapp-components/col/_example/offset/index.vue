<template>
  <view>
    <t-row gutter="16">
      <t-col span="8">
        <view class="dark">
          col-8
        </view>
      </t-col>
      <t-col span="8">
        <view class="dark">
          col-8
        </view>
      </t-col>
      <t-col span="8">
        <view class="dark">
          col-8
        </view>
      </t-col>
    </t-row>
  </view>
</template>

<script>
import TCol from '@tdesign/uniapp/col/col.vue';
import TRow from '@tdesign/uniapp/row/row.vue';
export default {
  components: {
    TCol,
    TRow,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.dark {
    background-color: #0052d9;
}

.light {
    background-color: #366ef4;
}

.dark,
.light {
    color: #fff;
    font-size: 28rpx;
    line-height: 96rpx;
    margin-bottom: 32rpx;
    text-align: center;
}
</style>
