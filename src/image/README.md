# Image 图片

## 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](/#/ui/components/ui/README?id=按需引入)

```json
"usingComponents": {
  "wr-image": "@tencent/retailwe-ui-image/index"
}
```

## 代码演示

### 01 基本用法

`mode`属性控制图片的缩放/裁剪模式。

```html
<wr-image
  class="size-l radius-m"
  src="../../../assests-exp/image/image.jpg"
  mode="aspectFill"
></wr-image>
<wr-image
  class="size-l radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="heightFix"
></wr-image>
<wr-image
  class="size-l radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="scaleToFill"
></wr-image>
```

示例:
![示例](./readme-assests/base.png)

### 02 类型

这里通过样式覆盖来自定义图片圆角。

```html
<wr-image class="size-l" src="../../../assests-exp/image/image.jpg" mode="aspectFill"></wr-image>
<wr-image
  class="size-l radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></wr-image>
<wr-image
  class="size-l radius-round"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></wr-image>
```

```less
.wr-image {
  border-radius: 0;
}
.radius-m .wr-image {
  border-radius: 4rpx * 2;
}
.radius-round .wr-image {
  border-radius: 999px;
}
```

示例:
![示例](./readme-assests/type.png)

### 03 状态

可以通过`load-failed-image`、`loading-image`属性分别定义加载失败、加载中的展位图，支持 icon 或者图片连接。
属性`use-loading-slot`、`use-load-failed-slot`的值为`true`时，也可以通过 slot 来自定义加载中和加载失败时的占位元素。

```html
<wr-image
  class="size-l radius-m"
  src=""
  mode="aspectFill"
  load-failed-image="../../../assests-exp/image/empty.png"
></wr-image>
<wr-image id="loading-img" class="size-l radius-m" src="" mode="aspectFill" use-loading-slot>
  <view slot="loading" class="dots">
    <view class="dot dot1"></view>
    <view class="dot dot2"></view>
    <view class="dot dot3"></view>
  </view>
</wr-image>
<wr-image class="size-l radius-m" src="" mode="aspectFill" use-load-failed-slot>
  <view slot="failed" class="custom-loading-failed">加载失败</view>
</wr-image>
```

示例:
![示例](./readme-assests/status.png)

### 04 规格

这里通过样式覆盖来自定义几个常用的图片尺寸。

```html
<wr-image
  class="size-m radius-m"
  src="../../../assests-exp/image/image.jpg"
  mode="aspectFill"
></wr-image>
<wr-image
  class="size-s radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></wr-image>
<wr-image
  class="size-xs radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></wr-image>
<wr-image
  class="size-xss radius-s"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></wr-image>
<wr-image
  class="size-xl radius-l"
  src="../../../assests-exp/image/image.jpg"
  mode="aspectFill"
></wr-image>
<wr-image
  class="size-l radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></wr-image>
```

```less
.size-xl .wr-image {
  width: 120rpx * 2;
  height: 120rpx * 2;
}

.size-l .wr-image {
  width: 72rpx * 2;
  height: 72rpx * 2;
}

.size-m .wr-image {
  width: 56rpx * 2;
  height: 56rpx * 2;
}

.size-s .wr-image {
  width: 48rpx * 2;
  height: 48rpx * 2;
}

.size-xs .wr-image {
  width: 32rpx * 2;
  height: 32rpx * 2;
}

.size-xss .wr-image {
  width: 24rpx * 2;
  height: 24rpx * 2;
}
```

示例:
![示例](./readme-assests/size.png)

## API

### Image Props

| 参数                 | 说明                                                                | 类型             | 默认值         | 版本  |
| -------------------- | ------------------------------------------------------------------- | ---------------- | -------------- | ----- |
| src                  | 图片地址，经过处理后透传给原生 image                                | _string_         | -              | -     |
| img-style            | 图片自定义样式                                                      | _string_         | -              | -     |
| mode                 | 填充样式，透传给原生 image，可参考小程序官方文档                    | _string_         | `scaleToFill`  | -     |
| webp                 | 透传给原生 image，可参考小程序官方文档                              | _boolean_        | `true`         | -     |
| width                | 图片的宽度，会自动拼接到 src，单位 rpx                              | _string\|number_ | -              | -     |
| height               | 图片的高度，会自动拼接到 src，单位 rpx                              | _string\|number_ | -              | -     |
| lazy-load            | 是否启用懒加载，透传给原生 image，可参考小程序官方文档              | _boolean_        | -              | -     |
| loading-image        | 自定义加载中状态图片/icon, 传入值带`/`就认为是图片, 否则默认为 icon | _string_         | -              | -     |
| use-loading-slot     | 使用 loading slot, 这时会忽略 loading-image 的传值                  | _boolean_        | -              | -     |
| load-failed-image    | 自定义加载中状态图片/icon, 传入值带`/`就认为是图片, 否则默认为 icon | _string_         | `jiazaishibai` | -     |
| use-load-failed-slot | 使用 failed slot, 这时会忽略 load-failed-image 的传值               | _boolean_        | -              | -     |
| no-img-mogr          | 设置为 true 后不对传入的 src 拼接多媒体处理指令                     | _boolean_        | `false`        | 0.1.0 |
| no-inline-size       | 设置为 true 后不将传入的 width/height 写入 style                    | _boolean_        | `false`        | 0.1.0 |

### Image Event

| 事件名 | 说明               | 参数                          |
| ------ | ------------------ | ----------------------------- |
| load   | 图片加载完毕后触发 | event.detail: {height, width} |
| error  | 图片加载失败后触发 | event.detail: {errMsg}        |

### Image Slot

| 名称    | 说明                     |
| ------- | ------------------------ |
| loading | 图片加载完成前的占位内容 |
| failed  | 图片加载失败后的占位内容 |

### 外部样式类

| 类名     | 说明             |
| -------- | ---------------- |
| wr-class | 根节点外部样式类 |
