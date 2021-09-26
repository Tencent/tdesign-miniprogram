# BackTop 返回顶部

## 介绍

用于展示用户头像信息，除了纯展示也可点击进入个人详情等操作。

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
// app.json 或 index.json
"usingComponents": {
"t-back-top": "@tencent/tdesign-miniprogram/back-top/back-top",
}
```

### Props

| 参数  | 说明                                                                       | 类型    | 默认值 | 版本      |
| ----- | -------------------------------------------------------------------------- | ------- | ------ | --------- |
| theme | 预设的样式类型，可选值 `round` `hafl-round` `round-dark` `half-round-dark` | String  | -      | -         |
| fixed | 是否绝对定位固定到屏幕右下方                                               | boolean | `true` | -         |
| text  | 文案                                                                       | String  | -      | -         |
| icon  | 图标                                                                       | String  | -      | `backtop` |

### tab Event

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| toTop  | 点击触发 | 无   |

### Slots

| 名称 | 说明                     |
| ---- | ------------------------ |
| -    | 默认插槽，可以自定义内容 |

### 外部样式类

| 类名         | 说明            |
| ------------ | --------------- |
| t-class      | 根节点样式类    |
| t-class-icon | icon 部分样式类 |
| t-class-text | 文字部分样式类  |
