# Divider 分割符

## 介绍

用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。

## 引入

在`app.json`或`page.json`中引入组件

```json
"usingComponents": {
  "t-divider": "@tencent/tdesign-miniprogram/divider/divider"
}
```

## 代码演示

### 基础用法

通过 slot 传入分割线文案或者其他自定义内容，使用`align`属性控制文本是居中、偏左或者偏右。  
`line-color`属性可定义线条颜色，不需要显示线条时，传入`border-color`的值为`transparent`即可。

```html
<view class="t-divider-list">
  <view class="t-divider-demo">
    <view class="t-divider-demo__title">直线拉通</view>
    <t-divider dashed></t-divider>
  </view>
  <view class="t-divider-demo">
    <view class="t-divider-demo__title">虚线拉通</view>
    <t-divider dashed></t-divider>
  </view>
  <view class="t-divider-demo">
    <view class="t-divider-demo__title">左右间距</view>
    <t-divider t-class="demo-2"></t-divider>
  </view>
  <view class="t-divider-demo">
    <view class="t-divider-demo__title">右侧拉通</view>
    <t-divider t-class="demo-3"></t-divider>
  </view>

  <view class="t-divider-demo">
    <view class="t-divider-demo__title">自定义左侧间距</view>
    <t-divider t-class="demo-4"></t-divider>
  </view>
  <view class="t-divider-demo">
    <view class="t-divider-demo__title">文字+直线</view>
    <t-divider t-class="demo-5" t-class-content="t-class-content">
      <text slot="content">文字信息</text>
    </t-divider>
  </view>
  <view class="t-divider-demo">
    <view class="t-divider-demo__title">文字+虚线</view>
    <t-divider t-class="demo-5" t-class-content="t-class-content" dashed content="文字信息">
    </t-divider>
  </view>
  <view class="t-divider-demo">
    <view class="t-divider-demo__title">纯文字</view>
    <t-divider lineColor="transparent">
      <text slot="content">没有更多了~</text>
    </t-divider>
  </view>
  <view class="t-divider-demo">
    <view class="t-divider-demo__title">垂直分割</view>
    <view class="demo-6">
      <text>雨纷纷</text>
      <t-divider theme="vertical"></t-divider>
      <text>雨纷纷</text>
      <t-divider theme="vertical"></t-divider>
      <text>雨纷纷</text>
      <t-divider theme="vertical"></t-divider>
      <text>雨纷纷</text>
    </view>
  </view>
</view>
```

```less
.t-divider-demo {
  margin: 0 0 32rpx;
  font-size: 24rpx;

  &__title {
    color: #000;
    opacity: 40%;
    margin: 0 32rpx 36rpx;
  }
}

.t-class-content {
  margin-right: 20rpx;
  margin-left: 20rpx;
}

.demo-2 {
  margin: 0 32rpx;
}

.demo-3 {
  margin-left: 32rpx;
}

.demo-4 {
  margin-left: 152rpx;
}

.demo-5 {
  margin: 0 32rpx;
}

.demo-6 {
  display: flex;
  margin: 0 32rpx;
  font-size: 12px;
  color: #000;
  opacity: 40%;
}
```

## API

### Props

| 参数            | 类型          | 默认值     | 说明                                                                                 | 必传 |
| --------------- | ------------- | ---------- | ------------------------------------------------------------------------------------ | ---- |
| align           | String        | center     | 文本位置（仅在水平分割线有效）。可选值：left/right/center                            | N    |
| content         | String / Slot | -          | 子元素。                                                                             | N    |
| dashed          | Boolean       | false      | 是否虚线（仅在水平分割线有效）                                                       | N    |
| lineColor       | String        | -          | 分隔线颜色                                                                           | N    |
| theme           | String        | horizontal | 分隔线类型有两种：水平和垂直。可选值：horizontal/vertical                            | N    |
| externalClasses | Array         | -          | 组件类名，分别用于设置 组件外层类名、分隔线类名 等。`['t-class', 't-class-content']` | N    |

### Slot

| 名称    | 说明           |
| ------- | -------------- |
| content | 自定义文本内容 |

### 外部样式类

| 类名            | 说明               |
| --------------- | ------------------ |
| t-class         | 根节点样式类       |
| t-class-content | content 部分样式类 |
