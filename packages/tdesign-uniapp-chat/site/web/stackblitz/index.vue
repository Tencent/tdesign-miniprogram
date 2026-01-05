<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <td-tooltip trigger-type="hover">
    <form
      ref="formRef"
      method="post"
      action="https://stackblitz.com/run"
      target="_blank"
      @click="submit"
    >
      <input
        type="hidden"
        name="project[files][src/pages/index/index.vue]"
        :value="code"
      >
      <input
        type="hidden"
        name="project[files][index.html]"
        :value="HTML_CONTENT"
      >
      <input
        type="hidden"
        name="project[files][src/main.js]"
        :value="MAN_JS_CONTENT"
      >
      <input
        type="hidden"
        name="project[files][src/App.vue]"
        :value="APP_VUE_CONTENT"
      >
      <input
        type="hidden"
        name="project[files][src/pages.json]"
        :value="PAGES_JSON_CONTENT"
      >
      <input
        type="hidden"
        name="project[files][src/manifest.json]"
        :value="MANIFEST_JSON_CONTENT"
      >
      <input
        type="hidden"
        name="project[files][package.json]"
        :value="PACKAGE_JSON_CONTENT"
      >
      <input
        type="hidden"
        name="project[files][vite.config.js]"
        :value="VITE_CONFIG_CONTENT"
      >
      <input
        type="hidden"
        name="project[files][.stackblitzrc]"
        :value="STACKBLITZ_RZ"
      >
      <input
        type="hidden"
        name="project[template]"
        value="node"
      >

      <div class="action-online">
        <svg
          viewBox="0 0 28 28"
          height="20"
        >
          <path
            fill="currentColor"
            d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"
          />
        </svg>
      </div>
    </form>
    <span slot="content">在 Stackblitz 中打开</span>
  </td-tooltip>
</template>

<script>
import { defineComponent, ref } from 'vue';
import {
  HTML_CONTENT,
  MAN_JS_CONTENT,
  MANIFEST_JSON_CONTENT,
  PAGES_JSON_CONTENT,
  APP_VUE_CONTENT,
  STACKBLITZ_RZ,
  VITE_CONFIG_CONTENT,
  PACKAGE_JSON_CONTENT,
} from './content';

export default defineComponent({
  name: 'Stackblitz',
  props: {
    code: String,
    demoName: String,
    componentName: String,
  },

  setup() {
    const data = {
      HTML_CONTENT,
      MAN_JS_CONTENT,
      MANIFEST_JSON_CONTENT,
      PAGES_JSON_CONTENT,
      APP_VUE_CONTENT,
      STACKBLITZ_RZ,
      VITE_CONFIG_CONTENT,
      PACKAGE_JSON_CONTENT,
    };
    const match = window.location.hostname.match(/preview-pr-(\d+)-tdesign-mobile-vue.surge.sh/);
    if (match) {
      let packageJSON = {};
      try {
        packageJSON = JSON.parse(PACKAGE_JSON_CONTENT);
      } catch (e) {
      }

      packageJSON.dependencies['tdesign-mobile-vue'] = `https://pkg.pr.new/Tencent/tdesign-mobile-vue/tdesign-mobile-vue@${match[1]}`;
      data.PACKAGE_JSON_CONTENT = JSON.stringify(packageJSON, null, 2);
    }
    const formRef = ref(null);

    const submit = () => {
      formRef.value.submit();
    };

    return { ...data, formRef, submit };
  },
});
</script>
