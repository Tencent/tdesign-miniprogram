<template>
  <view>
    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
      left-icon="slot"
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
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import tSearch from 'tdesign-uniapp/search/search.vue';
export default {
  components: {
    tNavbar,
    tSearch,
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
