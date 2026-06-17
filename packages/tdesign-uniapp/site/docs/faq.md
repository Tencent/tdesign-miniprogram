---
title: 常见问题
description: 看看有没有你想要的。
spline: explain
---

## 写在前面

TDesign UniApp 的实现原理，可参考[原理介绍](https://juejin.cn/post/7571650164844068898)。

### 事件参数

相较于 `tdesign-miniprogram`，`tdesign-uniapp` 统一去除了事件参数中的 `e.detail` 包装层。以 Picker 组件为例，在 `tdesign-miniprogram` 中获取参数的写法为：

```js
onPickerChange(e) {
  console.log(e.detail.value);
}
```

在 `tdesign-uniapp` 中，需要去掉 `.detail`，改为：

```js
onPickerChange(e) {
  console.log(e.value);
}
```

该约定适用于 `tdesign-uniapp` 全部组件，旨在简化事件参数的使用。

### v-model 写法

`tdesign-uniapp` 所有受控组件统一使用 `value` 作为双向绑定属性名，**而非 Vue 3 默认的 `modelValue`**（与 React 版、原生小程序版保持一致）。因此在使用 `v-model` 时必须带上 `:value`：

```html
<!-- ✅ 正确：使用 v-model:value -->
<t-dropdown-menu>
  <t-dropdown-item v-model:value="val" :options="options" />
</t-dropdown-menu>

<t-checkbox v-model:value="checked" />
<t-tabs v-model:value="current" />

<!-- ❌ 错误：组件没有 modelValue prop，绑定不会生效 -->
<t-dropdown-item v-model="val" :options="options" />
```

非受控场景可以使用 `defaultValue`，组件内部维护状态。该约定适用于所有带 `value` 的受控组件（如 `checkbox` / `radio` / `switch` / `tabs` / `cascader` / `dropdown-item` / `slider` / `stepper` 等）。

### visible 受控

以下组件在关闭时，需要父组件主动将 `visible` 重置为 `false`，否则无法再次打开。即这些组件的 `visible` 必须以受控方式使用，推荐使用 `v-model:visible` 语法糖，具体可参考各组件示例。

- picker
- date-time-picker
- color-picker
- cascader
- calendar
- drawer

### 外部样式类

`tdesign-miniprogram` 中的 `externalClasses` 在 `tdesign-uniapp` 中以 `props` 形式提供。

传参方式保持一致，仍为 `t-class="xxx-class"`。使用时需注意：

- 在样式文件中通过 `:deep()` 选择器穿透，否则会因 `<style scoped>` 隔离导致样式不生效；
- 在小程序平台下，若组件并非页面级组件，需要额外声明 `options: { styleIsolation: 'shared' }` 以解除组件样式隔离。

### 函数式组件如何传递 `context`

在 `<script setup>` 语法糖下，函数式调用 Toast、Dialog 等组件时，最简单的方式是在页面模板中预埋一个组件实例，无需手动传递 `context`：

```html
<!-- 页面级组件: xx.vue -->
<template>
  <view>
    <!-- ... -->
    <t-toast />
  </view>
</template>
```

后续在该页面任意位置直接调用 `Toast({ message: 'xxx' })` 即可，组件库会自动定位到当前页面预埋的实例。Dialog、Notify 等同理。

### PC 浏览器下手势 / 拖动类组件不生效

部分依赖 touch 事件的组件（如 swipe-cell、slider 等）在 PC 浏览器中无法直接通过鼠标拖动触发。可在 H5 入口加载 `touch-emulator` 进行适配：

```html
<script src="https://tdesign.gtimg.com/js/touch-emulator.js"></script>
```

建议自行下载并托管到业务自己的 CDN，避免外链可用性问题。

### onPageScroll

在小程序、App 等平台下，组件内部动态注册的页面生命周期钩子不会生效，因此需要业务方在页面中显式监听 `onPageScroll` 并将事件转发给组件库（如 Indexes、BackTop 等依赖滚动位置的组件均依赖此处理）。推荐用法如下：

```js
// 在页面 Vue 文件中引入组件库提供的监听方法
// 该方法内部通过 event-bus 将滚动事件分发到组件内部
import { handlePageScroll } from '@tdesign/uniapp/mixins/page-scroll';

// Vue3
defineOptions({
  onPageScroll(e) {
    handlePageScroll(e);
  },
});

// Vue2
export default {
  onPageScroll(e) {
    handlePageScroll(e);
  },
}
```

### slot 类型提示

uniapp 官方脚手架的默认配置中，`src/env.d.ts` 对 `vue` 模块的类型声明不完整，未导出 slot 相关类型，会导致使用组件时缺失类型提示（典型报错如 `Property 'xxx' does not exist on type '{}'`）。

解决方案：

1. 注释掉 `src/env.d.ts` 中 `declare module 'vue'` 部分；
2. 在 `tsconfig.json` 中将 `compilerOptions.moduleResolution` 设置为 `"bundler"`。

<img src="https://tdesign.gtimg.com/uniapp/docs/faq-1.png" width="700" />

<img src="https://tdesign.gtimg.com/uniapp/docs/faq-2.png" width="700" />

此外，官方脚手架自带的 `tsconfig.json` 在新版 TypeScript 下会出现类型报错，可通过将 `@vue/tsconfig` 升级至最新版本解决。

推荐使用我们提供的开箱即用模板：[tdesign-uniapp-starter](https://github.com/TDesignOteam/tdesign-uniapp-starter)，已内置自动导入、类型提示等配置。

### 微信开发者工具报 `Failed to load font`

在微信开发者工具控制台可能出现如下报错：

```
[渲染层网络层错误] Failed to load font https://tdesign.gtimg.com/icon/x.x.x/fonts/t.woff
net::ERR_CACHE_MISS
```

这是微信开发者工具自身的已知问题，不影响真机表现，可忽略。详情可参考 [`wx.loadFontFace` 文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html)。
