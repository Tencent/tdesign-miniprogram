<template>
  <td-doc-content ref="tdDocContent" platform="mobile" page-status="hidden">
    <td-doc-header platform="mobile" slot="doc-header" ref="tdDocHeader"></td-doc-header>
    <div class="content">
      <h3>上线项目案例</h3>
      <p>目前已上线 400+ 个小程序，部分小程序二维码如下。如果你也在使用 TDesign 搭建你的小程序，也欢迎添加你的项目: <a
          href="https://github.com/Tencent/tdesign-miniprogram/discussions/1094" target="_blank">添加项目</a></p>

      <div class="projects">
        <div v-for="p in projects" :key="p.name" class="card">
          <div class="card__infos">
            <div class="card__title">
              <a v-if="p.url" :href="p.url" class="card__link" target="_blank">{{ p.name }}</a>
              <template v-else>{{ p.name }}</template>
            </div>
            <ul class="card__tags">
              <li class="card__tag" v-for="t in p.tags">{{ t }}</li>
            </ul>
          </div>
          <div class="card__imgs">
            <div class="card__preview">
              <img :src="p.preview[0]" :alt="p.name + '预览图'">
            </div>
            <div class="card__qrcode">
              <img :src="p.qrcode" :alt="p.name + '二维码'">
            </div>
          </div>
        </div>
      </div>
    </div>
  </td-doc-content>
</template>

<script lang="ts">
import projects from '../data/projects'

export default {
  data() {
    return {
      projects,
    }
  },
  mounted() {
    const { tdDocContent, tdDocHeader, tdDocTabs } = this.$refs;

    this.$emit('loaded', () => {
      tdDocHeader.docInfo = {
        title: '谁在用', desc: ''
      }
      tdDocContent.pageStatus = 'show';
    });
  }
}
</script>

<style lang="less" scoped>
h1 {
  padding: 30px 40px;
  font-size: 20px;
  color: #000;
  border-bottom: 1px solid #dcdcdc;
}

ul {
  list-style: none;
}

.content {
  padding: 46px 0;
  color: #181818;

  h3 {
    font-size: 20px;
    line-height: 28px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    font-weight: 500;
  }
}

.projects {
  width: 864px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.card {
  position: relative;
  width: 420px;
  border-radius: 12px;
  background: linear-gradient(-1.8deg, #f1f2f5 0%, #f1f2f5 100%);
  padding: 32px 44px 0;
  box-sizing: border-box;

  &__link {
    text-decoration: none;

    &:visited {
      color: #181818;
    }

    &:hover {
      color: var(--brand-main);
    }
  }

  &__infos {
    display: flex;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
  }

  &__tag {
    padding: 2px 8px;
    border-radius: 3px;
    background: #fff;
    font-size: 12px;
    cursor: pointer;
    margin-left: 8px;

    &s {
      margin-left: auto;
      display: flex;
    }
  }

  &__imgs {
    margin: 20px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__preview {
    width: 180px;
    box-sizing: border-box;
    height: 260px;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    border: 8px solid #f7f7f9;
    border-bottom: 0;

    img {
      width: 100%;
    }
  }

  &__qrcode {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 14.74px 22.11px 0 #e3e6eb;
    padding: 16px;
    box-sizing: border-box;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}
</style>