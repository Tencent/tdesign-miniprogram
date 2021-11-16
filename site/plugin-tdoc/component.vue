<template>
  <td-doc-content ref="tdDocContent" page-status="hidden">
    <td-doc-header slot="doc-header" ref="tdDocHeader"></td-doc-header>
    <template v-if="info.isComponent">
      <td-doc-tabs ref="tdDocTabs" :tab="tab"></td-doc-tabs>
      <div class="td-doc-main" v-show="tab === 'demo'">
        <div name="DEMO" v-html="info.demoMd"></div>
        <QrCode :src="`https://tdesign.gtimg.com/miniprogram/qrcode/${compName}.png`" />
        <td-contributors ref="tdContributors"></td-contributors>
      </div>
      <div v-show="tab === 'api'" name="API" v-html="info.apiMd"></div>
      <div v-show="tab === 'design'" name="DESIGN" v-html="info.designMd"></div>
    </template>
    <div name="DOC" v-else v-html="info.docMd"></div>
    <td-doc-footer slot="doc-footer"></td-doc-footer>
  </td-doc-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Prismjs from 'prismjs';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-json.js';
import '@common/site/src/styles/prism-theme.less';
import '@common/site/src/styles/prism-theme-dark.less';

import QrCode from '@components/qrcode.vue';

export default defineComponent({
  props: {
    docType: String,
  },

  data() {
    return {
      compName: 'button',
    };
  },

  inject: ['info', 'demos'],

  components: {
    QrCode,
  },

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
  },

  mounted() {
    const { info } = this;
    const { tdDocContent, tdDocHeader, tdDocTabs, tdContributors } = this.$refs;

    if (info.isComponent) {
      tdDocTabs.onchange = ({ detail: currentTab }) => this.tab = currentTab;
      tdDocHeader.issueInfo = info.issueInfo || {};
      tdContributors.contributors = info.contributors || [];
    }
    
    Prismjs.highlightAll();

    const { path } = this.$route;
    this.compName = path.slice(path.lastIndexOf('/'));
    
    tdDocHeader.docType = this.docType;
    tdDocHeader.docInfo = { title: info.title, desc: info.description };

    // @ts-ignore
    document.querySelector('td-doc-content').initAnchorHighlight();

    this.$emit('loaded', () => {
      tdDocContent.pageStatus = 'show';
    });
  },

  beforeDestroy() {
    // @ts-ignore
    document.querySelector('td-doc-content').resetAnchorHighlight();
  },
  });
</script>

<style lang="less">
.td-doc {
  &-main {
    position: relative;
  }

  &__image-wrapper {
    margin: 16px 0 -1px;
    padding: 24px 0;
    text-align: center;
    background-color: #fff;
    border-radius: 6px 6px 0 0;
    border: 1px solid #DCDCDC;
    
    &--gray {
      background-color: #eee;
    }

    div[name=DEMO] & + pre {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}
</style>
