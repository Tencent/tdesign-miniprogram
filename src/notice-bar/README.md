---
title: NoticeBar 消息通知
description: 在导航栏下方，用于给用户显示提示消息。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-notice-bar": "tdesign-miniprogram/notice-bar/notice-bar"
}
```

## 代码演示

### 基础静态公告栏
```xml
<t-notice-bar visible="{{true}}" prefixIcon='null' content="提示文字描述提示文字描述提示文字描述" />
```

### 带图标静态公告栏
```xml
<t-notice-bar visible="{{true}}" content="带图标静态公告栏"/>
<t-notice-bar visible="{{true}}" content="提示文字描述提示文字描述提示文字描述">
  <view slot="prefixIcon">
    <t-icon name="error-circle-filled" />
  </view>
</t-notice-bar>
```

### 带操作公告栏
```xml
<t-notice-bar
  visible="{{true}}"
  suffixIcon="chevron-right"
  content="提示文字描述提示文字描述提示文字描述"
  bind:prefix-icon="handlePrefixIcon"
  bind:content="handleContent"
  bind:suffix-icon="handleSuffixIconLink"
/>

<t-notice-bar
  visible="{{visible}}"
  suffixIcon="close"
  bind:extre="handleExtreText"
  bind:suffix-icon="handleSuffixIconCloseDemo"
>
  <view slot="content"> 提示文字描述提示文字描述 </view>
  <view slot="extre" class="extre">详情</view>
</t-notice-bar>
```

### 滚动公告栏
```xml
<t-notice-bar
  visible="{{true}}"
  prefixIcon='null'
  marquee="{{marquee1}}"
  content="提示文字描述提示文字描述提示文字描述提示文字描述文"
/>

<t-notice-bar
  visible="{{true}}"
  marquee="{{marquee2}}"
  content="提示文字描述提示文字描述提示文字描述提示文字描述文"
/>
```

### 自定义样式
```xml
<t-notice-bar
  visible="{{true}}"
  prefixIcon="sound"
  content="提示文字描述提示文字描述提示文字描述"
  t-class="t-class"
/>
```

### 不同状态的公告栏
公告栏类型有普通（info）、警示（warning）、成功（success）、错误（error）

#### 默认状态公告栏
```xml
<t-notice-bar visible="{{true}}" content="默认状态公告栏默认状态公告栏"/>
```

#### 成功状态公告栏
```xml
 <t-notice-bar visible="{{true}}" theme="success" content="成功状态公告栏成功状态公告栏"/>
```

#### 警示状态公告栏
```xml
<t-notice-bar visible="{{true}}" theme="warning" content="警示状态公告栏警示状态公告栏"/>
```

#### 错误状态公告栏
```xml
<t-notice-bar visible="{{true}}" theme="error" content="错误状态公告栏错误状态公告栏" />
```

### 多行文字消息栏
```xml
<t-notice-bar
  visible="{{true}}"
  prefixIcon='null'
  content="提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述"
/>

<t-notice-bar visible="{{true}}" content="提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述"/>

<t-notice-bar
  visible="{{true}}"
  suffixIcon="chevron-right"
  bind:suffix-icon="handleSuffixIconLink"
  content="提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述"
/>

<t-notice-bar visible="{{true}}" bind:suffix-icon="handleSuffixIconClose">
  <view slot="content">
    提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述
    <view class="extre" bind:tap="clickDetail"> 详情 </view>
  </view>
  <view slot="suffixIcon">
    <t-icon name="close" />
  </view>
</t-notice-bar>
```

## API
### NoticeBar Props

| 名称 | 类型 | 默认值 | 说明 | 必传 |
| ---- | ---- | ------ | ---- | -- |
| content         | String / Slot    | -         | 文本内容  | N    |
| extra           | String / Slot    | -         | 右侧额外信息| N   |
| marquee         | Boolean / Object | false     | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：`boolean | DrawMarquee` `interface DrawMarquee { speed?: number; loop?: number; delay?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts) | N    |
| prefix-icon     | String           | -         | 左边图标  | N    |
| suffix-icon     | String           | -         | 后缀图标  | N    |
| theme           | String           | info      | 内置主题。可选项：info/success/warning/error | N    |
| visible         | Boolean          | false     | 显示/隐藏 | N    |

### NoticeBar Events

| 名称  | 参数                            | 描述                                                                                                                                                                                                   |
| ----- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| click | `（trigger: NoticeBarTrigger) ` | 点击事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' | 'content' | 'extra' | 'suffix-icon';`<br/> |
