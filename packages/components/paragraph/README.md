:: BASE_DOC ::

## API


### Paragraph Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | String | - | 段落内容 | N
ellipsis | Boolean / Object | false | 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式。TS 类型：`boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/paragraph/type.ts) | N

### Paragraph Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容


### Text Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
code | Boolean | false | 是否添加代码样式 | N
content | String | - | 文本内容 | N
copyable | Boolean | false | 是否可复制。TS 类型：`boolean \| TypographyCopyable ` `interface TypographyCopyable { text?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/text/type.ts) | N
delete | Boolean | false | 是否添加删除线样式 | N
disabled | Boolean | false | 是否添加不可用样式 | N
ellipsis | Boolean / Object | false | 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式。TS 类型：`boolean \| TypographyEllipsis ` `interface TypographyEllipsis { collapsible?: boolean; expandable?: boolean; row?: number;}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/text/type.ts) | N
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
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | String | - | 段落内容 | N
ellipsis | Boolean / Object | false | 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式。TS 类型：`boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/title/type.ts) | N
level | String | h1 | 标题等级。可选项：h1/h2/h3/h4/h5/h6 | N

### Title Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容
