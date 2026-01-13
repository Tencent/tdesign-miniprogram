---
title: 常见问题
description: 看看有没有你想要的。
spline: explain
---

## 写在前面

TDesign UniApp 的实现原理，可以查看[这篇文章](https://juejin.cn/post/7571650164844068898)。

尽管 TDesign UniApp 已尽最大可能让开发者减少心智负担，但实际上，受限于 [uniapp](https://github.com/dcloudio/uni-app) 自己的[问题](https://github.com/dcloudio/uni-app/issues)就比较多，加上各个平台差异很大，所以做 uniapp 项目前就应该想到会踩一些坑。不过，我还是尽量解答大家疑惑，给一些业务合适的解决方案。

> 虽然 uniapp 仍存在一些问题，但不妨碍它是一个伟大的框架，节省了大量开发者的大量工作量（国内百花齐放的环境），使用条件编译，适配多平台而不增加包体积。理解 uniapp，成为 uniapp。从心里认可 uniapp 的实现方式和价值，是我做这个库的原因之一。

### 外部样式类

`tdesign-miniprogram` 中的 `externalClasses`，在 `tdesign-uniapp` 中被转成了 `props`。

传参方式不变，都是 `t-class="xxx-class"`。使用的时候要在样式文件中增加 `:deep` 标记，否则会因为 `scoped` 而失败，如果是非页面级别组件，需要增加 `options: { styleIsolation: 'shared' }`。

### 事件参数

`tdesign-miniprogram` 中的事件参数，在 `tdesign-uniapp` 中都被去掉了 `detail` 一层。以 Picker 组件为例，在 `tdesign-miniprogram` 中，这样获取参数

```js
onPickerChange(e) {
  console.log(e.detail.value);
}
```

在 `tdesign-uniapp` 中，需要去掉 `.detail`，即

```js
onPickerChange(e) {
  console.log(e.value);
}
```

这样做是为了简化使用。`tdesign-uniapp` 中很多组件都采用了这种方式。

### onPageScroll

APP-PLUS 下，需要业务自己在页面中监听 `pageScroll` 事件，这是因为动态的监听不生效。这里给出一个最佳实践之一。

```js
// 页面 Vue 文件下，引入组件库提供的监听方法
// 该方法内部会通过 event-bus，传递参数给对应的组件
import { handlePageScroll } from 'tdesign-uniapp/mixins/page-scroll';

export default {
  onPageScroll(e) {
    handlePageScroll(e);
  },
}
```

### slot 类型提示

uniapp 给的脚手架工程配置有问题，`src/env.d.ts` 文件的 `vue` 声明不对，没有声明 `slot` 的类型。

解决方案：

1. 注释掉 `src/env.d.ts` 文件中 `vue` 的声明
2. `tsconfig.json` 中配置 `"moduleResolution": "bundler"`

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2025/11/own_mike_XeC8BMxSQKPdc2GY.png" width="600" />

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2025/11/own_mike_Askm5PSWT8rMmh3G.png" width="600" />

另外，它这个脚手架太老了，自己的 `tsconfig.json` 还飘红，升级下 `@vue/tsconfig` 可解决。

这里有一个开箱即用的 uniapp Vue3 [脚手架项目](https://github.com/novlan1/tdesign-uniapp-demo-cli)，支持自动导入、类型提示等，你可以打开看看。

### visible 受控

下面几个组件在关闭时，需要父组件中设置 `visible` 为 `false`，否则无法再次开启。也就是 `visible` 只能是受控的。可以用 `v-model:visible` 语法糖，可参考对应组件示例。

- picker
- date-time-picker
- color-picker
- cascader
- calendar
- drawer
