# Search 搜索框

## 介绍

用于用户输入搜索信息，并进行页面内容搜索。

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-search": "@tencent/tdesign-miniprogram/search/search"
}
```

## 用法

### 组件方式

```html
<view class="demo">
  <view class="demo-title">Search 搜索</view>
  <view class="demo-desc">
    很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字
  </view>
  <t-demo title="01 类型">
    <view class="demo-section__desc">基础搜索框</view>
    <view class="demo-section__wrapper">
      <t-search placeholder="搜索预设文案" center="{{true}}" />
    </view>
  </t-demo>

  <t-demo title="01 状态">
    <block wx:for="{{searchBoxGroup}}" wx:key="id">
      <view class="demo-section__desc">{{item.title}}</view>
      <view class="demo-section__wrapper">
        <t-search
          t-class-cancel="t-class-cancel"
          keyword="{{item.keyword}}"
          placeholder="{{item.placeholder}}"
          action-text="{{item.actionText}}"
          data-idx="{{index}}"
          bind:blur="blurHandle"
          bind:focus="focusHandle"
          bind:cancel="cancelHandle"
        />
      </view>
    </block>
  </t-demo>
</view>
```

```js
const placeholder = '搜索预设文案';
const actionText = '取消';
Page({
  data: {
    searchBoxGroup: [
      {
        id: `${Math.random()}`,
        keyword: '',
        placeholder,
        actionText: '',
      },
      {
        id: `${Math.random()}`,
        keyword: '',
        placeholder,
        actionText: '取消',
      },
      {
        id: `${Math.random()}`,
        keyword: '关键词',
        placeholder,
        actionText: '取消',
      },
    ],
  },

  changeHandle({
    detail,
    currentTarget: {
      dataset: { idx },
    },
  }) {
    this.setData({
      [`searchBoxGroup[${idx}].keyword`]: detail,
    });
  },

  focusHandle({
    currentTarget: {
      dataset: { idx },
    },
  }) {
    this.data.searchBoxGroup.forEach((_, index) => {
      this.setData({
        [`searchBoxGroup[${index}].actionText`]: '',
      });
    });

    this.setData({
      [`searchBoxGroup[${idx}].actionText`]: actionText,
      [`searchBoxGroup[${idx}].focus`]: true,
    });
  },

  cancelHandle({
    currentTarget: {
      dataset: { idx },
    },
  }) {
    this.setData({
      [`searchBoxGroup[${idx}].actionText`]: '',
    });
  },

  clearHandle({
    currentTarget: {
      dataset: { idx },
    },
  }) {
    this.setData({
      [`searchBoxGroup[${idx}].keyword`]: '',
    });
  },
});
```

```less
page {
  .demo-section__wrapper {
    margin: 32rpx 0;
    padding: 16rpx 32rpx;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
  }

  .t-class-cancel {
    color: rgba(0, 82, 217, 1);
    font-weight: 400;
  }
}
```

## API

### Props

| 参数            | 说明                                                                                                          | 类型         | 默认值                                                                        | 版本                  |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------- | --------------------- | --- |
| keyword         | 值                                                                                                            | String       | -                                                                             | -                     |
| placeholder     | 占位符                                                                                                        | String       | -                                                                             | -                     |
| disabled        | 是否禁用搜索框                                                                                                | Boolean      | `false`                                                                       | -                     |
| action-text     | 自定义右侧 cancel 文字                                                                                        | String       | -                                                                             | -                     |
| focus           | 是否聚焦                                                                                                      | Boolean      | `false`                                                                       | -                     | -   |
| center          | 是否居中                                                                                                      | Boolean      | `false`                                                                       | -                     | -   |
| shape           | 搜索框形状                                                                                                    | String       | `square`                                                                      | 可选值，square、round |
| label           | 搜索框左侧文本                                                                                                | String       | -                                                                             |
| left-icon       | 搜索框左侧图标                                                                                                | TNode/String | `tick_fill`,icon 组件完成后更换为`serach`                                     | 可选值见 Icon 组件    |
| right-icon      | 搜索框右侧图标                                                                                                | TNode/String | `close`                                                                       |
| externalClasses | 组件外部样式类名，分别用于设置组件外层类名、组件 input 类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型 | Array        | `['t-class','t-class-input','t-class-cancel','t-class-left','t-class-right']` |

### Event

| 事件名 | 说明                       | 类型   | 参数                                            |
| ------ | -------------------------- | ------ | ----------------------------------------------- | ------------- |
| change | 搜索框值发生变化时触发     | Events | (value: InputValue, context?: { e?: InputEvent  | MouseEvent }) |
| focus  | 搜索框聚焦触发             | Events | (value: InputValue, context: { e: FocusEvent }) |
| blur   | 搜索框失去焦点触发         | Events | (value: InputValue, context: { e: FocusEvent }) |
| clear  | 点击清除时触发             | Events | (value: InputValue, context: { e: MouseEvent }) |
| submit | 点击完成时时触发           | Events | (value: InputValue, context?: { e?: InputEvent  | MouseEvent }) |
| cancel | 点击右侧 cancel 文字时触发 | Events | (context: { e: MouseEvent })                    |

### 外部样式

| class          | 说明                   |
| -------------- | ---------------------- |
| t-class        | root                   |
| t-class-input  | input 组件的 class     |
| t-class-cancel | 右侧 cancel 按钮 class |
| t-class-left   | 左侧图标 class         |
| t-class-right  | 右侧图标 class         |

### Slot

| name        | 说明               |
| ----------- | ------------------ |
| action-text | 在 actionText 前方 |
| label       | 搜索框左侧文本     |
| left-icon   | 左侧图标           |
| right-icon  | 右侧图标           |
