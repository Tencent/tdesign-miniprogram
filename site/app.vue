<template>
  <td-doc-layout>
    <td-header ref="tdHeader" slot="header">
      <td-doc-search slot="search" ref="tdDocSearch"></td-doc-search>
    </td-header>
    <td-doc-aside ref="tdDocAside" title="WeChat MiniProgram"></td-doc-aside>

    <router-view :style="contentStyle" @loaded="contentLoaded" :docType="docType" />
  </td-doc-layout>
</template>

<script>
import siteConfig from './site.config';
import { changeThemeMode } from './theme/dark';

import { defineComponent } from 'vue';

const { docs: routerList } = JSON.parse(JSON.stringify(siteConfig).replace(/component:.+/g, ''));

routerList.forEach((item) => {
  if (item.type === 'component') {
    item.children = item.children.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
});

function watchHtmlMode(callback = () => {}) {
  const targetNode = document.documentElement;
  const config = { attributes: true };

  const observerCallback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.attributeName === 'theme-mode') {
        const themeMode = mutation.target.getAttribute('theme-mode') || 'light';
        if (themeMode) callback(themeMode);
      }
    }
  };

  const observer = new MutationObserver(observerCallback);
  observer.observe(targetNode, config);

  return observer;
}

export default defineComponent({
  data() {
    return {
      docType: '',
      loaded: false,
    };
  },

  computed: {
    contentStyle() {
      const { loaded } = this;
      return { visibility: loaded ? 'visible' : 'hidden' };
    },
  },

  mounted() {
    this.docType = this.$route.meta.docType;
    this.$refs.tdHeader.framework = 'miniprogram';
    this.$refs.tdDocAside.routerList = routerList;
    this.$refs.tdDocAside.onchange = ({ detail }) => {
      if (this.$route.path === detail) return;
      this.loaded = false;
      this.$router.push({ path: detail });
      window.scrollTo(0, 0);
    };
    this.$refs.tdDocSearch.docsearchInfo = { indexName: 'tdesign_doc_miniprogram' };
    watchHtmlMode(changeThemeMode);
  },

  watch: {
    $route(route) {
      if (!route.meta.docType) return;
      this.docType = route.meta.docType;
    },
  },

  methods: {
    contentLoaded(callback) {
      requestAnimationFrame(() => {
        this.loaded = true;
        callback();
      });
    },
  },
});
</script>
