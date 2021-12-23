---
title: PullDownRefresh 下拉刷新
description: 用于快速刷新页面信息，刷新可以是整页刷新也可以是页面的局部刷新。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-pull-down-refresh": "tdesign-miniprogram/pull-down-refresh/pull-down-refresh"
}
```

## 代码演示

### 基础下拉刷新

由于组件内无法监听页面滚动，需要由页面获取组件实例，并将页面滚动事件传递到组件。

<img src="https://tdesign.gtimg.com/miniprogram/readme/pullDownRefresh-1.png" width="35%" height="35%">
<img src="https://tdesign.gtimg.com/miniprogram/readme/pullDownRefresh-2.png" width="35%" height="35%">

```html
<t-pull-down-refresh
  id="pull-down-refresh"
  normal-bar-height="{{200}}"
  max-bar-height="{{272}}"
  refreshTimeout="{{3000}}"
  background="#f5f5f5"
  use-loading-slot
  loading-size="60rpx"
  loading-texts="{{['下拉刷新', '松手刷新', '正在刷新', '刷新完成', '']}}"
  bindrefresh="onPullDownRefresh"
>
  <t-loading
    slot="loading"
    type="circular-ext"
    color="#306AFF"
    background-color="#f5f5f5"
    size="60rpx"
    paused
  />

  <view class="text">拖拽该区域下拉刷新</view>
</t-pull-down-refresh>
```

```js
Page({
  pullDownRefresh: null as WechatMiniprogram.Component.TrivialInstance | null,
  data: {},
  onLoad() {
    this.pullDownRefresh = this.selectComponent('#pull-down-refresh');
  },
  // 监听页面滚动事件，并调用pull-down-refresh组件的onPageScroll方法
  // 组件内根据页面滚动距离来判定页面是否到顶部，页面回到顶部后才能下拉刷新
  onPageScroll(e) {
    this.pullDownRefresh && this.pullDownRefresh.onPageScroll(e);
  },
  onPullDownRefresh(e: WechatMiniprogram.Event<{ callback: () => void }>) {
    // 模拟1秒刷新完成
    const { callback } = e.detail;
    setTimeout(() => {
      callback && callback();
    }, 1000);
  },
});
```

## API

### PullDownRefresh Props

| 名称               | 类型   | 默认值 | 说明                                                                                                                                                         | 必传 |
| ------------------ | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| external-classes   | Array  | -      | 加载 loading 样式。`['t-class', 't-class-loading','t-class-text', 't-class-indicator']`                                                                      | N    |
| loading-bar-height | Number | 200    | 加载中下拉高度                                                                                                                                               | N    |
| loading-props      | Object | -      | 加载 loading 样式。TS 类型：`TdLoadingProps`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/pull-down-refresh/type.ts) | N    |
| loading-texts      | Array  | []     | 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成']。TS 类型：`string[]`                                                               | N    |
| max-bar-height     | Number | 272    | 最大下拉高度                                                                                                                                                 | N    |
| refresh-timeout    | Number | 3000   | 刷新超时时间                                                                                                                                                 | N    |

### PullDownRefresh Events

| 名称    | 参数 | 描述           |
| ------- | ---- | -------------- |
| refresh | -    | 结束下拉时触发 |
| timeout | -    | 刷新超时触发   |
