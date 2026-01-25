<template>
  <view>
    <t-row>
      <t-col
        span="8"
        t-class="dark"
      >
        col-8
      </t-col>
      <t-col
        span="8"
        t-class="light"
      >
        col-8
      </t-col>
      <t-col
        span="8"
        t-class="dark"
      >
        col-8
      </t-col>
    </t-row>

    <t-row>
      <t-col
        span="4"
        t-class="dark"
      >
        col-4
      </t-col>
      <t-col
        span="16"
        offset="4"
        t-class="light"
      >
        col-16 col-offset-4
      </t-col>
    </t-row>

    <t-row>
      <t-col
        offset="12"
        span="12"
        t-class="dark"
      >
        col-12 col-offset-12
      </t-col>
    </t-row>
  </view>
</template>

<script>
import TCol from 'tdesign-uniapp/col/col.vue';
import TRow from 'tdesign-uniapp/row/row.vue';
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
    background-clip: content-box;
    color: #fff;
    font-size: 28rpx;
    line-height: 96rpx;
    margin-bottom: 32rpx;
    text-align: center;
}
</style>
