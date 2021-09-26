<!--
 * @Author: shiyanzhang
 * @Date: 2021-08-24 15:56:07
 * @Description:
 * @FilePath: /tdesign-miniprogram/src/empty/README.md
-->

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

### Empty Props

| 名称             | 类型          | 默认值  | 说明                                                                                                                             | 必传 |
| ---------------- | ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- | ---- |
| action           | Slot          | -       | 操作按钮                                                                                                                         | N    |
| description      | String / Slot | -       | 描述文字                                                                                                                         | N    |
| external-classes | Array         | -       | 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名。`['t-class', 't-class-description', 't-class-image']` | N    |
| image            | String / Slot | -       | 图片地址                                                                                                                         | N    |
| theme            | String        | default | 空页面风格类型。可选项：default/primary/warning/error                                                                            | N    |
