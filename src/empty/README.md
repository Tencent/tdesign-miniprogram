# empty 空内容

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
// app.json 或 index.json
"usingComponents": {
  "t-empty": "@tencent/tdesign-miniprogram/empty/empty"
}
```

## 代码演示

### 基础用法

```html
<t-empty t-class="empty-cls" image="{{emptyBag}}" size="224rpx" description="描述文字"></t-empty>

<t-empty t-class="empty-cls" image="{{emptyCart}}" size="224rpx" description="描述文字">
  <t-button t-class="empty-button" bind:tap="toHome">按钮</t-button>
</t-empty>
```

```js
Page({
  data: {
    emptyBag: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components/error/emptybag.png',
    emptyCart: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components/error/emptycart.png',
  },
  toHome() {
    wx.reLaunch({
      url: '/components-exp/index/index',
    });
  },
});
```

## API

### empty Props

| 参数        | 说明     | 类型     | 默认值                                                              | 版本 |
| ----------- | -------- | -------- | ------------------------------------------------------------------- | ---- |
| image       | 图片地址 | _string_ | `https://cdn.ghsmpwalmart.com/saas/market/image/empty/no_goods.png` | -    |
| size        | 图片大小 | _string_ | `100rpx`                                                            | -    |
| textSize    | 文字大小 | _string_ | `24rpx`                                                             | -    |
| textColor   | 文字颜色 | _string_ | `#969799`                                                           | -    |
| backColor   | 背景颜色 | _string_ | -                                                                   | -    |
| description | 描述文字 | _string_ | -                                                                   | -    |

### Slots

| 名称 | 说明     |
| ---- | -------- |
| -    | 底部扩展 |

### empty 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| t-class | 根节点样式类 |
