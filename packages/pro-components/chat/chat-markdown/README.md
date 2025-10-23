---
title: ChatMarkdown 聊天 Markdown 渲染器
description: 用于聊天场景中渲染 Markdown 格式文本的组件，内置 marked 解析器，支持多种 Markdown 语法和配置选项。
spline: base
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-markdown": "tdesign-miniprogram/chat-markdown/chat-markdown"
}
```

## 代码演示

### 01 基础用法

#### 基础 Markdown 渲染

{{ base }}

### 02 自定义配置

#### 不同 marked 配置选项

{{ config }}

### 03 主题样式

#### 不同主题效果

{{ theme }}

## API

### ChatMarkdown Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
content | String | '' | Markdown 格式的文本内容 | N
isMarkdown | Boolean | true | 是否启用 Markdown 解析，false 时作为普通文本显示 | N
markedOptions | Object | 见下方说明 | marked 解析器的配置选项 | N

### markedOptions 配置

```javascript
{
  gfm: true,        // GitHub风格Markdown
  pedantic: false,  // 不遵循严格规范
  smartLists: true, // 智能列表
  breaks: false     // 不自动换行
}
```

### ChatMarkdown Events

名称 | 参数 | 描述
-- | -- | --
link-tap | `(context: { event: Event, node: Token })` | 点击链接时触发

### ChatMarkdown Slots

名称 | 描述
-- | --
default | 自定义内容插槽

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。

名称 | 默认值 | 描述
-- | -- | --
--t-chat-markdown-text-color | rgba(0, 0, 0, 0.9) | 文本颜色
--t-chat-markdown-heading-color | rgba(0, 0, 0, 0.9) | 标题颜色
--t-chat-markdown-link-color | #0052d9 | 链接颜色
--t-chat-markdown-code-bg | #f5f5f5 | 代码背景色
--t-chat-markdown-code-color | #e34d59 | 代码文字颜色
--t-chat-markdown-blockquote-border | #ddd | 引用边框色
--t-chat-markdown-blockquote-bg | #f9f9f9 | 引用背景色

### External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-heading | 标题样式类
t-class-paragraph | 段落样式类
t-class-list | 列表样式类
t-class-code | 代码样式类
t-class-blockquote | 引用样式类
t-class-link | 链接样式类

## 支持的 Markdown 语法

### 基础语法

- **标题**: `# H1`, `## H2`, `### H3`, `#### H4`, `##### H5`, `###### H6`
- **粗体**: `**粗体文本**` 或 `__粗体文本__`
- **斜体**: `*斜体文本*` 或 `_斜体文本_`
- **删除线**: `~~删除线文本~~`
- **行内代码**: `` `行内代码` ``
- **代码块**: ``` ```代码块``` ```
- **链接**: `[链接文本](URL)`
- **图片**: `![图片描述](图片URL)`
- **无序列表**: `* 列表项` 或 `- 列表项`
- **有序列表**: `1. 列表项`
- **引用**: `> 引用文本`
- **分割线**: `---` 或 `***`
- **任务列表**: `- [ ] 未完成任务` 或 `- [x] 已完成任务`

### 高级语法

- **表格**: 支持基本的表格语法
- **脚注**: `[^1]` 和 `[^1]: 脚注内容`
- **数学公式**: 行内 `$E=mc^2$` 和块级 `$$E=mc^2$$`
- **HTML**: 支持内联 HTML 标签

## 使用示例

### 基础用法

```html
<t-chat-markdown
  content="# 标题\n这是一段**粗体**文本。"
  theme="normal"
/>
```

### 自定义配置

```html
<t-chat-markdown
  content="{{markdownText}}"
  marked-options="{{{
    gfm: true,
    pedantic: false,
    smartLists: true,
    breaks: false
  }}}"
/>
```

### 禁用 Markdown 解析

```html
<t-chat-markdown
  content="这是普通文本，不会被解析为 Markdown"
  is-markdown="{{false}}"
/>
```

### 复杂 Markdown 内容

```html
<t-chat-markdown
  content="{{complexMarkdown}}"
  theme="normal"
/>
```

## 设计指南

### 使用场景

- 聊天应用中的 Markdown 消息渲染
- 文档展示和阅读
- 技术博客和文章
- 代码片段分享
- 富文本内容展示

### 最佳实践

1. **性能优化**:
   - 对于长文本内容，建议分页或虚拟滚动
   - 避免频繁更新 content 属性

2. **主题适配**:
   - 根据应用主题自动切换明暗主题
   - 使用 CSS 变量自定义样式

3. **错误处理**:
   - 组件内置错误处理，解析失败时降级为普通文本
   - 建议对用户输入进行长度限制

4. **无障碍访问**:
   - 确保渲染后的内容对屏幕阅读器友好
   - 提供适当的语义化标签

### 注意事项

1. **依赖要求**: 组件依赖 `marked` 库进行 Markdown 解析
2. **样式隔离**: 使用 `styleIsolation: 'shared'` 模式
3. **解析性能**: 复杂 Markdown 内容可能影响渲染性能
4. **安全考虑**: 注意 XSS 攻击，对用户输入进行过滤
5. **兼容性**: 支持微信小程序基础库 2.6.5 及以上版本

## 更新日志

- 内置 marked 解析器，支持标准 Markdown 语法
- 支持自定义 marked 配置选项
- 支持主题样式切换
- 内置错误处理和降级方案
- 支持多种 Markdown 语法特性
- 优化渲染性能和用户体验
