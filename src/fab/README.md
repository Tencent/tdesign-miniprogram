# Fab

悬浮按钮。

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-fab": "@tencent/tdesign-miniprogram/fab/fab"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-fab icon="add" text="记录" />
```

## API

### `<t-fab>` 组件

组件路径：`@tencent/tdesign-miniprogram/fab/fab`

#### Props

| 属性   | 值类型   | 默认值 | 必传  | 说明               |
| ------ | -------- | ------ | ----- | ------------------ |
| icon   | 'string' | 'add'  | false | 图标               |
| text   | 'string' | ''     | false | 文字               |
| bottom | 'string' | '32px' | false | 离屏幕底部的距离   |
| right  | 'string' | '16px' | false | 离屏幕右边缘的距离 |

#### Events

无
