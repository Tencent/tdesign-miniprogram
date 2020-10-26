# Progress

## 介绍

进度条

### 特性和兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-progress": "@tencent/tdesign-miniprogram/progress/progress"
}
```
## API

### `<Progress>` 组件

组件路径：`@tencent/tdesign-miniprogram/progress/progress`

#### Props

| 属性 | 值类型 | 默认值 | 说明 |
|-----|-------|-------|-----|
| percentage | `Number | String` | 0 | 百分比（必填） |
| showInfo | `Boolean` | `true ` | 是否显示进度条文字内容 |
| activeColor | `String` | `-` | 已加载进度条背景色 |
| bgColor | `String` | `-` | 进度条背景色 |
| textColor | `String` | `-` | 进度条文字内容颜色 |
| type | `String` | `info` | 进度条类型，可选`info`,`success`,`error`,`warning` |
| strokeWidth | `Number | String` | 3 | 进度条宽度，单位px |
