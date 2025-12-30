:: BASE_DOC ::

## API

### GridItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
badgeProps | Object | null | 透传至 Badge 属性。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/grid-item/type.ts) | N
description | String / TNode | - | 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` | N
image | String / TNode | - | 图片，可以是图片地址，也可以自定义图片节点，值为 slot 的时候才能使用插槽。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
imageProps | Object | - | 透传至 Image 组件。TS 类型：`ImageProps`，[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/grid-item/type.ts) | N
jumpType | String | navigate-to | 链接跳转类型。可选项：redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | 内容布局方式。可选项：vertical/horizontal | N
text | String / TNode | - | 文本，可以通过 Props 传入文本，也可以自定义标题节点。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
url | String | - | 点击后的跳转链接 | N
onClick | Function |  | TS 类型：`() => void`<br/>点击子项后触发 | N

### GridItem Events

名称 | 参数 | 描述
-- | -- | --
click | \- | 点击子项后触发

### GridItem Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容
description | 自定义 `description` 模块内容
image | 自定义 `image` 模块内容
text | 自定义 `text` 模块内容

### GridItem External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-description | 描述样式类
t-class-image | 图片样式类
t-class-text | 文本样式类
