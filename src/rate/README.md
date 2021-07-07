# 评分

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
// app.json 或 index.json
{
  "usingComponents": {
    "t-rate": "@tencent/tdesign-miniprogram/rate/rate"
  }
}
```

### 基础（实心样式）：

```html
<t-rate size="{{48}}" value="{{3}}" bind:change="onChange"></t-rate>
```

### rate Props

| 参数          | 说明                | 类型      | 默认值                                   | 版本    |
| ------------- | ------------------- | --------- | ---------------------------------------- | ------- |
| count         | star 总数           | _number_  | 默认 5 个                                | -       |
| size          | star 图标大小       | _number_  | 48                                       | -       |
| size          | star 图标间距       | _number_  | 6                                        | -       |
| half          | 是否存在个 半个星星 | _boolean_ | false                                    |
| value         | 值                  | _number_  | -                                        | > v0.25 |
| color         | 激活图标颜色        | _string_  | #ffc51c                                  | > v0.25 |
| voidColor     | 默认图标颜色        | _string_  | #ddd                                     | > v0.25 |
| disabledColor | 禁用图标颜色        | _string_  | #999                                     | > v0.25 |
| touchable     | 是否滑动            | _boolean_ | false                                    | > v0.25 |
| readonly      | 是否只读            | _boolean_ | false                                    | > v0.25 |
| disabled      | 是否禁用            | _boolean_ | false                                    | > v0.25 |
| icon          | 激活图标 icon name  | _string_  | -                                        | > v0.25 |
| voidIcon      | 默认图标 icon name  | _string_  | -                                        | > v0.25 |
| halfIcon      | 半图标 icon name    | _string_  | -                                        | > v0.25 |
| showText      | 是否展示描述文本    | _string_  | false                                    | > v0.25 |
| texts         | 描述文本数组        | _string_  | ['极差', '失望', '一般', '满意', '惊喜'] | > v0.25 |

### rate Event

| 事件名 | 说明                 | 参数 |
| ------ | -------------------- | ---- |
| change | 点击 star 组件时触发 | -    |

### rate 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| t-class | 根节点样式类 |
