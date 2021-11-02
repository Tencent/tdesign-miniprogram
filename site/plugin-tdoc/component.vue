<template>
  <td-doc-content ref="tdDocContent" slot="doc-content" page-status="hidden" platform="mobile">
    <td-doc-header slot="doc-header" ref="tdDocHeader"></td-doc-header>
    <template v-if="info.isComponent">
      <td-doc-tabs ref="tdDocTabs" :tab="tab"></td-doc-tabs>
      <div v-show="tab === 'demo'">
        <div name="DEMO" v-html="info.demoMd"></div>

        <!-- <td-doc-phone ref="tdDocPhone"> -->
          <!-- <iframe :src="info.mobileUrl" frameborder="0" width="100%" height="100%" style="border-radius: 0 0 6px 6px;"></iframe> -->
        <!-- </td-doc-phone> -->
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

  export default defineComponent({
    props: {
      docType: String,
    },

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
        }
      },
    },

    mounted() {
      const { info } = this;
      const { tdDocContent, tdDocHeader, tdDocPhone, tdDocTabs, tdContributors } = this.$refs;
      const completeUrl = location.origin + info.mobileUrl;

      if (info.isComponent) {
        tdDocTabs.onchange = ({ detail: currentTab }) => this.tab = currentTab;
        tdDocHeader.issueInfo = info.issueInfo || {};
        tdContributors.contributors = info.contributors || [];
      } else {
         Prismjs.highlightAll();
      }
      
      tdDocHeader.docType = info.docType;
      tdDocHeader.docInfo = { title: info.title, desc: info.description };

      // @ts-ignore
      document.querySelector('td-doc-content').initAnchorHighlight();

      tdDocPhone && tdDocPhone.QRCode.toCanvas(
        tdDocPhone.qrCanvas,
        completeUrl,
        { width: 84, height: 84 }
      );

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
