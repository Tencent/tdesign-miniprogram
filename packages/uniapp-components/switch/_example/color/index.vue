<template>
  <view class="custom-color">
    <t-cell
      title="自定义颜色开关"
      :bordered="false"
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
    <!-- <t-cell title="自定义颜色" bordered="{{false}}">
    <t-switch loading defaultValue="{{true}}" slot="note" />
  </t-cell>
  <t-cell title="自定义颜色" bordered="{{false}}">
    <t-switch defaultValue="{{true}}" label="{{['关', '开']}}" slot="note" />
  </t-cell>
  <t-cell title="自定义颜色" bordered="{{false}}">
    <t-switch defaultValue="{{true}}" icon="{{['close', 'check']}}" slot="note" />
  </t-cell> -->
  </view>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TSwitch from '@tdesign/uniapp/switch/switch.vue';
export default {
  components: {
    TCell,
    TSwitch,
  },
  data() {
    return {
      defaultVal: true,
    };
  },
  created() {},
  methods: {
  },
};
</script>
<style>
.custom-color {
    --td-switch-checked-color: #00a870;
}
</style>
