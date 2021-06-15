# Sticky 吸顶容器

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
// app.json 或 index.json
"usingComponents": {
  "t-sticky": "@tencent/tdesign-miniprogram/sticky/sticky"
}
```

## 代码演示

### 基础用法

将内容包裹在`Sticky`组件内

```html
<t-sticky>
  <view class="box box1">基础用法</view>
</t-sticky>
```

### 吸顶距离

通过`offset-top`属性可以设置组件在吸顶时与顶部的距离

```html
<t-sticky offset-top="{{ 60 }}">
  <view class="box box2">吸顶距离</view>
</t-sticky>
```

### 指定容器

通过`container`属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置

```html
<view class="box-c">
  <t-sticky container="{{ container }}">
    <view class="box box3">指定容器</view>
  </t-sticky>
</view>
```

```js
Page({
  data: {
    container: null,
  },

  onReady() {
    this.setData({
      container: () => wx.createSelectorQuery().select('.box-c'),
    });
  },
});
```

### Sticky Props

| 参数       | 说明                                                         | 类型       | 默认值 |
| ---------- | ------------------------------------------------------------ | ---------- | ------ |
| offset-top | 吸顶时与顶部的距离，单位`px`                                 | _number_   | `0`    |
| z-index    | 吸顶时的 z-index                                             | _number_   | `99`   |
| container  | 一个函数，返回容器对应的 NodesRef 节点                       | _function_ | -      |
| scroll-top | 当前滚动区域的滚动位置，非 `null` 时会禁用页面滚动事件的监听 | _number_   | -      |

### Sticky Events

| 事件名 | 说明       | 回调参数                                       |
| ------ | ---------- | ---------------------------------------------- |
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

### Sticky 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| t-class | 根节点样式类 |
