# back-top

## 介绍

回到顶部

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
// app.json 或 index.json
"usingComponents": {
  "back-top": "@tencent/tdesign-miniprogram/back-top/back-top"
}
```

## 代码演示

### 基础用法

直接引入, 回到页面顶部, 可传入 isIphoneX 兼容页面展示, 可传文字，图标；可定制字体、图标颜色

```html
<t-button type="weak" block bindclick="onBtnClick" data-index="{{0}}"
  >点击演示BackTop-圆白底</t-button
>
<t-button type="weak" block bindclick="onBtnClick" data-index="{{1}}"
  >点击演示BackTop-圆黑底</t-button
>
<t-button type="weak" block bindclick="onBtnClick" data-index="{{2}}"
  >点击演示BackTop-半圆白底</t-button
>
<t-button type="weak" block bindclick="onBtnClick" data-index="{{3}}"
  >点击演示BackTop-半圆黑底</t-button
>

<t-skeleton
  wx:for="{{8}}"
  wx:key="index"
  row="4"
  loading-class="skeletion-item"
  row-width="{{skeleton.rowWidth}}"
  rowHeight="{{skeleton.rowHeight}}"
  animate
/>
```

```javascript
const backTopDemos = [
  { text: '顶部', type: 'round' },
  { text: '顶部', type: 'round-dark' },
  { text: '', type: 'round' },
  { text: '', type: 'round-dark' },
  { text: '返回顶部', type: 'half-round' },
  { text: '返回顶部', type: 'half-round-dark' },
];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    backTopDemo: backTopDemos[0],
    showBackTop: false,
  },

  windowHeight: null as null | number,

  onPageScroll(e) {
    if (!this.windowHeight) {
      this.windowHeight = wx.getSystemInfoSync().windowHeight;
    }
    const showBackTop = e.scrollTop > this.windowHeight;
    if (showBackTop !== this.data.showBackTop) {
      this.setData({ showBackTop });
    }
  },

  onBtnClick(e: any) {
    const index = e.currentTarget.dataset.index as number;
    switch (index) {
      case 0: {
        this.setData({ backTopDemo: backTopDemos[0] });
        break;
      }
      case 1: {
        this.setData({ backTopDemo: backTopDemos[1] });
        break;
      }
      case 2: {
        this.setData({ backTopDemo: backTopDemos[2] });
        break;
      }
      case 3: {
        this.setData({ backTopDemo: backTopDemos[3] });
        break;
      }
    }
    wx.pageScrollTo({ duration: 300, scrollTop: 1000 });
  },
});
```

## API

### tab Props

| 参数        | 说明                                                                       | 类型      | 默认值  | 版本 |
| ----------- | -------------------------------------------------------------------------- | --------- | ------- | ---- |
| show        | 是否显示组件                                                               | _boolean_ | `false` | -    |
| type        | 预设的样式类型，可选值 `round` `hafl-round` `round-dark` `half-round-dark` | _String_  | -       | -    |
| fixed       | 是否绝对定位固定到屏幕右下方                                               | _boolean_ | `true`  | -    |
| text        | 文案                                                                       | _String_  | -       | -    |
| icon        | 图标                                                                       | _String_  | -       | -    |
| classPrefix | 图标 iconfont 前缀                                                         | _String_  | `t`     | -    |
| iconColor   | 图标颜色                                                                   | _String_  | -       | -    |
| iconSize    | 图标尺寸                                                                   | _String_  | -       | -    |
| textSize    | 文字尺寸                                                                   | _String_  | -       | -    |
| textColor   | 文字颜色                                                                   | _String_  | -       | -    |

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
