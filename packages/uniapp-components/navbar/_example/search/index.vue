<template>
  <view>
    <t-navbar
      left-icon="slot"
      :fixed="false"
    >
      <template
        #left
      >
        <view
          class="search-box"
        >
          <t-search
            shape="round"
            placeholder="搜索内容"
          />
        </view>
      </template>
    </t-navbar>
  </view>
</template>

<script>
import TNavbar from '@tdesign/uniapp/navbar/navbar.vue';
import TSearch from '@tdesign/uniapp/search/search.vue';
export default {
  components: {
    TNavbar,
    TSearch,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.search-box {
    --td-search-height: 32px;
    width: 252px;
}

page {
    --td-search-font-size: 18px;
}
</style>
