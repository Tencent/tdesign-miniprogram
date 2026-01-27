<template>
  <!-- #ifdef VUE2 -->
  <view>
    <!-- #endif -->
    <!-- #ifndef H5 -->
    <!-- #ifndef MP-ALIPAY -->
    <t-demo-navbar title="TDesign UI" />
    <!-- #endif -->
    <!-- #endif -->
    <view class="main">
      <view class="title-wrap">
        <image
          class="title-icon"
          mode="aspectFit"
          :src="`https://image-1251917893.file.myqcloud.com/next-svr/images/2025/10/${theme === 'dark' ? 'TDesign-logo_dark' : 'TDesign-logo_light'}.png`"
          aria-label="TDesign Logo"
        />
      </view>
      <view class="desc">
        TDesign 适配 uni-app 的组件库{{ isSkyline?' (skyline render)':'' }}
        <text
          v-if="!isSkyline && showTrySkyline"
          class="skyline-entry"
          @click="goSkyline"
        >
          try skyline
        </text>
      </view>
      <pull-down-list
        v-for="item of list"
        :key="item.name"
        :name="item.name"
        :icon="item.icon"
        :child-arr="item.childArr"
        @click="clickHandle"
      />
    </view>
    <view class="footer">
      <view
        class="show_privacy"
        @click="showPrivacyWin"
      >
        《TDesign组件库服务声明》
      </view>
      <t-footer text="该小程序仅演示示例，不收集个人信息。" />
      <t-footer :text="`Copyright © 1998 - ${currentYear} All Rights Reserved`" />
    </view>
    <trd-privacy
      ref="trdPrivacy"
      name="TDesign组件库"
      date="2023年11月14日"
      :win-style="winStyle"
    />
  <!-- #ifdef VUE2-->
  </view>
  <!-- #endif -->
</template>

<script>
import { themeMixin } from 'tdesign-uniapp/mixins/theme-change';
import TFooter from 'tdesign-uniapp/footer/footer.vue';
import { list as dataList, skylineList } from './data/index';
import PullDownList from '../../components/pull-down-list/index.vue';
import TrdPrivacy from '../../components/trd-privacy/index.vue';

const SHARE_INFO = {
  title: 'TDesign UI',
  path: '/pages/home/home',
};

export default {
  name: 'Home',
  onShareAppMessage() {
    return SHARE_INFO;
  },
  onShareTimeline() {
    return SHARE_INFO;
  },
  components: {
    TFooter,
    PullDownList,
    TrdPrivacy,
  },
  mixins: [
    themeMixin,
  ],
  data() {
    return {
      list: [],
      currentYear: new Date().getFullYear(),
      isSkyline: false,
      showTrySkyline: false,
      winStyle: false,
    };
  },
  onLoad(options) {
    const { q, skyline: querySkyline } = options || {};

    let compList = [];
    this.isSkyline = !!querySkyline;

    if (querySkyline) {
      compList = skylineList;
    } else {
      compList = dataList;
    }

    this.list = compList;

    // 小程序跳转各个小程序组件库
    if (q) {
      const str = this.getQueryByUrl(decodeURIComponent(q));
      uni.navigateTo({
        url: `/pages/${str.page}/${str.page}`,
      });
    }
  },
  methods: {
    getQueryByUrl(url) {
      const data = {};
      const queryArr = `${url}`.match(/([^=&#?]+)=[^&#]+/g) || [];
      // 必须是合法字符串
      if (queryArr.length) {
        queryArr.forEach((para) => {
          const d = para.split('=');
          const val = decodeURIComponent(d[1]);
          if (data[d[0]] !== undefined) {
            data[d[0]] += `,${val}`;
          } else {
            data[d[0]] = val;
          }
        });
      }
      return data;
    },


    goSkyline() {
      uni.navigateTo({
        url: '/pages/home/home?skyline=1',
      });
    },

    showPrivacyWin()  {
      this.$refs.trdPrivacy?.showPrivacyWin();
    },

    clickHandle(item) {
      if (!item) {
        console.error('clickHandle: item is undefined');
        return;
      }

      let { name, path = '' } = item;
      // 确保name存在
      if (!name) {
        console.error('clickHandle: name is undefined', item);
        return;
      }

      if (!path) {
        name = name.replace(/^[A-Z]/, match => `${match}`.toLocaleLowerCase());
        name = name.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);

        path = `/pages-more/${name}/${this.isSkyline ? 'skyline/' : ''}${name}`;
      }

      uni.navigateTo({
        url: path,
        fail: () => {
          uni.navigateTo({
            url: '/pages/home/navigate-fail/index',
          });
        },
      });
    },
  },
};
</script>
<style lang="less" scoped src="./home.less"></style>
