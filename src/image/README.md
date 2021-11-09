# Image 图片

用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
    "t-image": "@tencent/tdesign-miniprogram/image/image"
}
```

## 代码演示

### 类型

`mode`属性控制图片的缩放/裁剪模式，并可通过`class`设置图片圆角样式

<img src="https://tdesign.gtimg.com/miniprogram/readme/image-1.png" width="50%" height="50%">

```html
<!-- 裁切样式 裁切 -->
<t-image class="size-l radius-m" src="xxx.jpg" mode="aspectFill"></t-image>

<!-- 圆角样式 圆角方形 -->
<t-image class="size-l radius-m" src="xxx.jpg" mode="aspectFill"></t-image>
```

### 状态

加载中/加载失败提示

<img src="https://tdesign.gtimg.com/miniprogram/readme/image-2.png" width="50%" height="50%">

```html
<!-- 加载中 默认提示 -->
<t-image id="loading-img" class="size-l radius-m" src="" mode="aspectFill"></t-image>

<!-- 加载中 自定义提示 -->
<t-image id="loading-img-custom" class="size-l radius-m" src="" mode="aspectFill" loading="slot">
  <t-loading
    slot="loading"
    theme="circular"
    size="40rpx"
    loading
    style="opacity: 0.6"
    t-class-text="loading-text"
    t-class="loading-container"
    class="custom-loading"
  ></t-loading>
</t-image>

<!-- 加载失败 默认提示 -->
<t-image class="size-l radius-m" src="" mode="aspectFill"></t-image>

<!-- 加载失败 自定义提示 -->
<t-image class="size-l radius-m" src="" mode="aspectFill" loadFailed="slot">
  <view slot="loadFailed" class="custom-loading-failed">加载失败</view>
</t-image>
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
