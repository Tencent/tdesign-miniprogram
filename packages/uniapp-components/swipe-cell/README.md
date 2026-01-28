---
title: SwipeCell 滑动操作
description: 用于承载列表中的更多操作，通过左右滑动来展示，按钮的宽度固定高度根据列表高度而变化。
spline: message
isComponent: true
---



## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TSwipeCell from '@tdesign/uniapp/swipe-cell/swipe-cell.vue';
```

### 组件类型

左滑单操作

{{ left }}

右滑单操作

{{ right }}

左右滑操作

{{ double }}

带图标的滑动操作

{{ icon }}

## FAQ
### `SwipeCell` 组件在真机上无法滑动？
移除全局配置项: "componentFramework": "glass-easel"，详情见： [issue 2524](https://github.com/Tencent/tdesign-miniprogram/issues/2524)。如需使用 `skyline render`，建议页面级粒度开启。

## API

### SwipeCell Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
disabled | Boolean | - | 是否禁用滑动 | N
left | Array | - | 左侧滑动操作项。所有行为同 `right`。TS 类型：`Array<SwipeActionItem>` | N
opened | Boolean / Array | false | 操作项是否呈现为打开态，值为数组时表示分别控制左右滑动的展开和收起状态。TS 类型：`boolean \| Array<boolean>` | N
right | Array | - | 右侧滑动操作项。有两种定义方式，一种是使用数组，二种是使用插槽。`right.text` 表示操作文本，`right.className` 表示操作项类名，`right.style` 表示操作项样式，`right.onClick` 表示点击操作项后执行的回调函数。示例：`[{ text: '删除', icon: 'delete', style: 'background-color: red', onClick: () => {} }]`。TS 类型：`Array<SwipeActionItem>` `interface SwipeActionItem {text?: string; icon?: string \| object, className?: string; style?: string; onClick?: () => void; [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/swipe-cell/type.ts) | N

### SwipeCell Events

名称 | 参数 | 描述
-- | -- | --
click | `(action: SwipeActionItem, source: SwipeSource)` | 操作项点击时触发（插槽写法组件不触发，业务侧自定义内容和事件）。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/swipe-cell/type.ts)。<br/>`type SwipeSource = 'left' \| 'right'`<br/>
dragend | \- | 滑动结束事件
dragstart | \- | 滑动开始事件

### SwipeCell Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容
left | 左侧滑动操作项
right | 右侧滑动操作项
