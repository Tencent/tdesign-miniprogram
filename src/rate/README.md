# Rate 评分

## 介绍

用于对某行为/事物进行打分。

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
<t-rate size="{{48}}" value="{{3}}" variant="filled" bind:change="onChange"></t-rate>
```

### Rate Props

| 名称           | 类型    | 默认值  | 说明                                                                                                             | 必传 |
| -------------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------------- | ---- |
| allow-half     | Boolean | false   | 是否允许半选                                                                                                     | N    |
| color          | String  | #ED7B2F | 评分图标的颜色                                                                                                   | N    |
| count          | Number  | 5       | 评分的数量                                                                                                       | N    |
| disabled       | Boolean | false   | 是否禁用评分                                                                                                     | N    |
| disabled-color | String  | #999999 | 禁用图标的颜色                                                                                                   | N    |
| gap            | Number  | 6       | 评分图标的间距                                                                                                   | N    |
| readonly       | Boolean | false   | 是否为只读                                                                                                       | N    |
| show-text      | Boolean | false   | 是否显示辅助文字                                                                                                 | N    |
| size           | String  | 48      | 评分图标的大小                                                                                                   | N    |
| texts          | Array   | -       | 自定义评分等级对应的辅助文字，组件内部默认为：['极差', '失望', '一般', '满意', '惊喜']。TS 类型：`Array<string>` | N    |
| value          | Number  | -       | 必需。选择评分的值                                                                                               | Y    |
| variant        | String  | outline | 形状类型，有描边类型和填充类型两种。可选项：outline/filled                                                       | N    |

### Rate Events

| 名称   | 参数              | 描述             |
| ------ | ----------------- | ---------------- |
| change | `(value: number)` | 评分数改变时触发 |

### rate 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| t-class | 根节点样式类 |
