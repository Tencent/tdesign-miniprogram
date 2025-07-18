<template>
  <td-doc-content ref="tdDocContent" platform="mobile" page-status="hidden">
    <td-doc-header v-if="info.tdDocHeader" platform="mobile" slot="doc-header" ref="tdDocHeader"></td-doc-header>
    <template v-if="info.isComponent">
      <td-doc-tabs ref="tdDocTabs" :tab="tab"></td-doc-tabs>
      <div class="td-doc-main" v-show="tab === 'demo'">
        <div name="DEMO" v-html="info.demoMd"></div>
        <td-doc-phone>
          <div class="qrcode__wrapper" slot="qrcode">
            <img class="qrcode" :src="qrcode" />
          </div>
          <iframe
            :src="liveUrl"
            frameborder="0"
            width="100%"
            height="100%"
            class="mobile-iframe"
            style="box-sizing: border-box; border-radius: 0 0 6px 6px; overflow: hidden"
            @load="onIframeLoaded"
            ref="parentIframe"
          ></iframe>
        </td-doc-phone>
        <td-contributors platform="miniprogram" framework="wx" :component-name="name"></td-contributors>
      </div>
      <div v-show="tab === 'api'" name="API" v-html="info.apiMd"></div>
      <div v-show="tab === 'design'" name="DESIGN" v-html="info.designMd"></div>
    </template>
    <div name="DOC" :class="info.docClass" v-else v-html="info.docMd"></div>
    <div style="margin-top: 48px">
      <td-doc-history :time="info.lastUpdated"></td-doc-history>
    </div>
    <td-doc-footer slot="doc-footer" platform="mobile"></td-doc-footer>
  </td-doc-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Prismjs from 'prismjs';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-json.js';

export default defineComponent({
  inject: ['info', 'demos'],

  computed: {
    tab: {
      get() {
        return this.$route.query.tab || 'demo';
      },
      set(v) {
        if (this.$route.query.tab !== v) {
          this.$router.push({ query: { tab: v } });
        }
      },
    },
    name() {
      const { path } = this.$route;
      const name = path.slice(path.lastIndexOf('/') + 1);

      return name.replace('layout', 'col');
    },
    liveUrl() {
      const componentName = this.name.split('-en')[0];
      return `//tdesign.tencent.com/miniprogram-live/m2w/program/miniprogram/#!pages/${componentName}/${componentName}.html`;
    },
    qrcode() {
      const componentName = this.name.split('-en')[0];
      return `//tdesign.tencent.com/miniprogram/assets/qrcode/${componentName}.png`;
    },
  },

  mounted() {
    const { info } = this;
    const { tdDocContent, tdDocHeader, tdDocTabs } = this.$refs;

    if (info.isComponent) {
      tdDocTabs.onchange = ({ detail: currentTab }) => (this.tab = currentTab);
      tdDocHeader.componentName = info.componentName;
    }
    Prismjs.highlightAll();
    tdDocHeader.spline = info.spline;
    tdDocHeader.docInfo = { title: info.title, desc: info.description };

    this.$emit('loaded', () => {
      tdDocContent.pageStatus = 'show';
    });
  },
});
</script>

<style lang="less">
:root[theme-mode='dark'] {
  --mobile-border-color: #181818;
}
.mobile-iframe {
  border-top: 8px solid var(--mobile-border-color, #f8f8f8);
}
.td-doc {
  // &-main {
  //   position: relative;
  // }

  &__image-wrapper {
    margin: 16px 0 -1px;
    padding: 24px 0;
    text-align: center;
    background-color: #fff;
    border-radius: 6px 6px 0 0;
    border: 1px solid #dcdcdc;

    &--gray {
      background-color: #eee;
    }

    :root[theme-mode='dark'] & img {
      filter: unset;
    }

    div[name='DEMO'] & + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}

.qrcode {
  width: 100%;

  &__wrapper {
    width: 128px;
    height: 128px;
    padding: 4px;
    box-sizing: border-box;
  }
}
</style>
