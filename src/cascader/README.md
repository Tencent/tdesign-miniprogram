---
title: Cascader 级联选择器
description: 级联选择器适用于有清晰层级结构的数据集合，用户可以通过逐级查看并选择。
spline: form
isComponent: true
---

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.23.0 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-cascader": "tdesign-miniprogram/cascader/cascader"
}
```

## 代码演示

### 基础用法

{{ base }}

### 选项卡风格

{{ theme-tab }}

### 进阶

#### 带初始值

{{ with-value }}

#### 自定义 keys

{{ keys }}

#### 使用次级标题

{{ with-title }}

## API
### Cascader Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
close-btn | Boolean / Slot | true | 关闭按钮 | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType` | N
options | Array | [] | 可选项数据源。TS 类型：`Array<CascaderOption>` | N
sub-titles | Array | [] | 每级展示的次标题。TS 类型：`Array<string>` | N
theme | String | step | 展示风格。可选项：step/tab | N
title | String / Slot | - | 标题 | N
value | String / Number | null | 选项值 | N
default-value | String / Number | undefined | 选项值。非受控属性 | N
visible | Boolean | false | 是否展示 | N

### Cascader Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: string \| number, selectedOptions: string[])` | `1.0.1`。值发生变更时触发
close | `(trigger: TriggerSource)` | `1.0.1`。关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/>
pick | `(value: string \| number, index: number)` | `1.0.1`。选择后触发
