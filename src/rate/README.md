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

| 参数          | 说明               | 类型      | 默认值                                   | 版本 |
| ------------- | ------------------ | --------- | ---------------------------------------- | ---- |
| count         | star 总数          | _number_  | 默认 5 个                                | -    |
| size          | star 图标大小      | _number_  | 48                                       | -    |
| gap           | star 图标间距      | _number_  | 6                                        | -    |
| allowHalf     | 是否允许半选       | _boolean_ | false                                    |
| value         | 值                 | _number_  | -                                        | -    |
| color         | 激活图标颜色       | _string_  | #ffc51c                                  | -    |
| disabledColor | 禁用图标颜色       | _string_  | #999                                     | -    |
| readonly      | 是否只读           | _boolean_ | false                                    | -    |
| disabled      | 是否禁用           | _boolean_ | false                                    | -    |
| icon          | 激活图标 icon name | _string_  | -                                        | -    |
| voidIcon      | 默认图标 icon name | _string_  | -                                        | -    |
| halfIcon      | 半图标 icon name   | _string_  | -                                        | -    |
| showText      | 是否展示描述文本   | _string_  | false                                    | -    |
| texts         | 描述文本数组       | _string_  | ['极差', '失望', '一般', '满意', '惊喜'] | -    |

### rate Event

| 事件名 | 说明                 | 参数 |
| ------ | -------------------- | ---- |
| change | 点击 star 组件时触发 | -    |

### rate 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| t-class | 根节点样式类 |
