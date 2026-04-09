---
title: Transition 过渡
description: 过渡组件。
spline: message
isComponent: true
---


## 引入

推荐使用 easycom 模式引入组件，配置后无需手动 import 即可直接在模板中使用 `<t-transition />`。详细配置请参考 [快速开始](../getting-started)。

如需手动引入：

```js
import TTransition from '@tdesign/uniapp/transition/transition.vue';
```

## 用法

### 组件方式

```xml
<!-- page.wxml -->
<t-transition
  name="transition-class"
  visible="{{ visible }}"
>
  <view class="block" style="width: 100px; height: 100px; background: red;"></view>
</t-transition>
```

## API

### Transition Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
appear | Boolean | false | 首次出现是否展示动画 | N
destoryOnHide | Boolean | false | 隐藏时是否销毁内容 | N
durations | Number / Array | - | 指定过渡时间。TS 类型：`number \| number[]` | N
name | String | t-transition | 过渡类名 | N
visible | Boolean | false | 是否显示 | N
