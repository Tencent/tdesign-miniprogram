---
title: Typography 排版
description: 排版用于文本基础编排和样式，使用排版组件，可以快速完成页面中的文本内容制作，同时配合其他组件完成深色与浅色模式切换等风格统一的需求。
spline: base
isComponent: true
---


## 引入

推荐使用 easycom 模式引入组件，配置后无需手动 import 即可直接在模板中使用 `<t-text />`、`<t-paragraph />`、`<t-title />`。详细配置请参考 [快速开始](../getting-started)。

如需手动引入：

```js
import TText from '@tdesign/uniapp/text/text.vue';
import TParagraph from '@tdesign/uniapp/paragraph/paragraph.vue';
import TTitle from '@tdesign/uniapp/title/title.vue';
```

## 代码演示

### 基础文本

{{ base }}

### 组合用法

{{ combination }}

### 主题样式

{{ theme }}

### 可复制

{{ copyable }}

### 文本省略

{{ ellipsis }}


## API

### Paragraph Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | String | - | 段落内容 | N
ellipsis | Boolean / Object | false | 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式。TS 类型：`boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/paragraph/type.ts) | N

### Paragraph Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容


### Text Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
code | Boolean | false | 是否添加代码样式 | N
content | String | - | 文本内容 | N
copyable | Boolean / Object | false | 是否可复制。TS 类型：`boolean \| TypographyCopyable ` `interface TypographyCopyable { text?: string, suffix?: boolean; }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/text/type.ts) | N
delete | Boolean | false | 是否添加删除线样式 | N
disabled | Boolean | false | 是否添加不可用样式 | N
ellipsis | Boolean / Object | false | 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式。TS 类型：`boolean \| TypographyEllipsis ` `interface TypographyEllipsis { collapsible?: boolean; expandable?: boolean; row?: number;suffix?: boolean;}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/text/type.ts) | N
italic | Boolean | false | 文本是否为斜体 | N
keyboard | Boolean | false | 是否添加键盘样式 | N
mark | String / Boolean | false | 是否添加标记样式，默认为黄色，可通过配置颜色修改标记样式，如#0052D9 | N
strong | Boolean | false | 文本是否加粗 | N
theme | String | - | 主题。可选项：primary/secondary/success/warning/error | N
underline | Boolean | false | 是否添加下划线样式 | N

### Text Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容


### Title Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | String | - | 段落内容 | N
ellipsis | Boolean / Object | false | 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式。TS 类型：`boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/title/type.ts) | N
level | String | h1 | 标题等级。可选项：h1/h2/h3/h4/h5/h6 | N

### Title Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容
