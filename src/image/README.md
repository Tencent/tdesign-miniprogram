# Image 图片

## 介绍

用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。

## 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](/#/ui/components/ui/README?id=按需引入)

```json
"usingComponents": {
    "t-image": "@tencent/tdesign-miniprogram/image/image"
}
```

## 代码演示

### 01 类型

#### 裁切样式

`mode`属性控制图片的缩放/裁剪模式。

```html
<t-image
  class="size-l radius-m"
  src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/image/image.jpg"
  mode="aspectFill"
></t-image>
<t-image
  class="size-l radius-m"
  src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/image/image.jpg"
  mode="heightFix"
></t-image>
<t-image
  class="size-l radius-m"
  src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/image/image.jpg"
  mode="scaleToFill"
></t-image>
```

#### 圆角样式

这里通过样式覆盖来自定义图片圆角。

```html
<t-image class="size-l" src="../../../assests-exp/image/image.jpg" mode="aspectFill"></t-image>
<t-image
  class="size-l radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></t-image>
<t-image
  class="size-l radius-round"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></t-image>
```

```less
.t-image {
  border-radius: 0;
}
.radius-m .t-image {
  border-radius: 4rpx * 2;
}
.radius-round .t-image {
  border-radius: 999px;
}
```

### 03 状态

可以通过`loading`、`load-failed`属性分别定义加载失败、加载中的提示。值为 'default' 则表示使用默认加载风格，值为空或者 'slot' 表示使用插槽渲染，值为其他则表示普通文本内容。

```html
<t-image id="loading-img" class="size-l radius-m" src="" mode="aspectFill"></t-image>
<t-image id="loading-img-custom" class="size-l radius-m" src="" mode="aspectFill" loading="slot">
  <t-loading slot="loading" theme="circular" size="40rpx" loading style="opacity: 0.6"></t-loading>
</t-image>
<t-image class="size-l radius-m" src="" mode="aspectFill" use-load-failed-slot>
  <view slot="failed" class="custom-loading-failed">加载失败</view>
</t-image>
<t-image class="size-l radius-m" src="" mode="aspectFill"></t-image>
<t-image class="size-l radius-m" src="" mode="aspectFill" loadFailed="slot">
  <view slot="loadFailed" class="custom-loading-failed">加载失败</view>
</t-image>
```

### 04 规格

这里通过样式覆盖来自定义几个常用的图片尺寸。

```html
<t-image
  class="size-m radius-m"
  src="../../../assests-exp/image/image.jpg"
  mode="aspectFill"
></t-image>
<t-image
  class="size-s radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></t-image>
<t-image
  class="size-xs radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></t-image>
<t-image
  class="size-xss radius-s"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></t-image>
<t-image
  class="size-xl radius-l"
  src="../../../assests-exp/image/image.jpg"
  mode="aspectFill"
></t-image>
<t-image
  class="size-l radius-m"
  src="../../../assests-exp/image/image-2.jpg"
  mode="aspectFill"
></t-image>
```

```less
.size-xl .t-image {
  width: 120rpx * 2;
  height: 120rpx * 2;
}

.size-l .t-image {
  width: 72rpx * 2;
  height: 72rpx * 2;
}

.size-m .t-image {
  width: 56rpx * 2;
  height: 56rpx * 2;
}

.size-s .t-image {
  width: 48rpx * 2;
  height: 48rpx * 2;
}

.size-xs .t-image {
  width: 32rpx * 2;
  height: 32rpx * 2;
}

.size-xss .t-image {
  width: 24rpx * 2;
  height: 24rpx * 2;
}
```

## API

### Image Props

| 名称                   | 类型          | 默认值      | 说明                                                                                                                                                                                                                                               | 必传 |
| ---------------------- | ------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| external-classes       | Array         | -           | 组件类名，分别用于设置加载组件外层元素，中间内容等元素类名。`['t-class', 't-class-load']`                                                                                                                                                          | N    |
| load-failed            | String / Slot | 'default'   | 加载失败时显示的内容，值为 'default' 则表示使用默认加载失败风格，值为空或者 'slot' 表示使用插槽渲染，值为其他则表示普通文本内容，如“加载失败”                                                                                                      | N    |
| loading                | String / Slot | 'default'   | 加载态内容，值为 'default' 则表示使用默认加载中风格，值为空或者 'slot' 表示使用插槽渲染，值为其他则表示普通文本内容，如“加载中”                                                                                                                    | N    |
| src                    | String        | -           | 图片资源地址                                                                                                                                                                                                                                       | N    |
| mode                   | String        | scaleToFill | 图片裁剪、缩放的模式 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)。可选项：scaleToFill/aspectFit/aspectFill/widthFix/heightFix/top/bottom/center/left/right/top left/top right/bottom left/bottom right | N    |
| webp                   | Boolean       | false       | 默认不解析 webP 格式，只支持网络资源                                                                                                                                                                                                               | N    |
| lazy-load              | Boolean       | false       | 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载                                                                                                                                                                                             | N    |
| show-menu-by-longpress | Boolean       | false       | 开启长按图片显示识别小程序码菜单                                                                                                                                                                                                                   | N    |
| binderror              | Eventhandle   | -           | 当错误发生时触发，event.detail = {errMsg}                                                                                                                                                                                                          | N    |
| bindload               | Eventhandle   | -           | 当图片载入完毕时触发，event.detail = {height, width}                                                                                                                                                                                               | N    |
