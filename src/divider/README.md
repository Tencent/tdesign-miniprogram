# Divider 分割符

## 介绍

分割线

## 引入

在`app.json`或`page.json`中引入组件

```json
"usingComponents": {
  "t-divider": "@tencent/tdesign-miniprogram/divider/divider"
}
```

## 代码演示

### 基础用法

通过 slot 传入分割线文案或者其他自定义内容，使用`content-position`属性控制 slot 是居中、偏左或者偏右。  
若要细线条，可传入`hairline`属性。  
`border-color`属性可定义线条颜色，不需要显示线条时，传入`border-color`的值为`transparent`即可。

```html
<view class="t-divider-demo">
  <view class="t-divider-demo__title">直线拉通</view>
  <t-divider hairline></t-divider>
</view>
<view class="t-divider-demo">
  <view class="t-divider-demo__title">虚线拉通</view>
  <t-divider dashed></t-divider>
</view>
<view class="t-divider-demo">
  <view class="t-divider-demo__title">左右间距</view>
  <t-divider t-class="demo-2" hairline></t-divider>
</view>
<view class="t-divider-demo">
  <view class="t-divider-demo__title">右侧拉通</view>
  <t-divider t-class="demo-3" hairline></t-divider>
</view>

<view class="t-divider-demo">
  <view class="t-divider-demo__title">自定义左侧间距</view>
  <t-divider t-class="demo-4" hairline></t-divider>
</view>
<view class="t-divider-demo">
  <view class="t-divider-demo__title">文字+直线</view>
  <t-divider
    t-class="demo-5"
    hairline
    text-color="rgba(0, 0, 0, 0.4)"
    border-color="rgba(231,231,231,1)"
    content-position="center"
    >文字信息</t-divider
  >
</view>
<view class="t-divider-demo">
  <view class="t-divider-demo__title">文字+虚线</view>
  <t-divider
    t-class="demo-5"
    dashed
    hairline
    text-color="rgba(0, 0, 0, 0.4)"
    border-color="rgba(231,231,231,1)"
    content-position="center"
    >文字信息</t-divider
  >
</view>
<view class="t-divider-demo">
  <view class="t-divider-demo__title">纯文字</view>
  <t-divider
    t-class="demo-6"
    text-color="rgba(0, 0, 0, 0.4)"
    content-position="center"
    hairline
    border-color="transparent"
    >没有更多了~</t-divider
  >
</view>
```

```less
.demo-2 {
  margin: 0 @spacer-2;
}
.demo-3 {
  margin-left: 16rpx * 2;
}

.demo-4 {
  margin-left: 76rpx * 2;
}

.demo-5 {
  margin: 0 16rpx * 2;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
}
.demo-6 {
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
}
```

## API

### Props

| 参数             | 说明                              | 类型      | 默认值 | 版本 |
| ---------------- | --------------------------------- | --------- | ------ | ---- |
| dashed           | 虚线                              | _boolean_ | false  | -    |
| hairline         | 细线                              | _boolean_ | false  | -    |
| content-position | 文本位置，`left` `center` `right` | _string_  | -      | -    |
| border-color     | 线条颜色                          | _string_  | -      | -    |
| text-color       | 文本颜色                          | _string_  | -      | -    |
| custom-style     | 自定义样式                        | _string_  | -      | -    |

### Slot

| 名称 | 说明           |
| ---- | -------------- |
| 默认 | 自定义文本内容 |
