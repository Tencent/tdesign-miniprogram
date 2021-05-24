# Loading

## 介绍

加载

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-loading": "@tencent/tdesign-miniprogram/loading/loading"
}
```

### 组件方式调用

以组件的形式调用，可选传入 `loading` 值指示是否正在加载，或加载失败

#### 默认布局

```html
<!-- page.wxml -->
<t-loading
  loading="{{ loading }}"
  title="加载中"
  layout="default"
  size="40px"
  textSize="14px"
  vertical="{{ true }}"
  error="{{ loadError }}"
  showType="all"
  bind:reload="reloadEvent"
>
</t-loading>
```

```js
// page.js
Page({
  data: {
    loading: true,
    loadError: false,
  },
  reloadEvent() {
    // 失败后重新加载
    this.setData({ loading: true, loadError: false });
  },
});
```

#### 顶部进度条布局

```html
<!-- page.wxml -->
<t-loading loading="{{ loading }}" layout="bar" progress="{{ progress }}"> </t-loading>
```

```js
// page.js
Page({
  data: {
    loading: true,
    progress: 50,
    // 可不声明 progress，即进度条会自动渐进到90%后等待 loading 值为 false 结束
  },
});
```

## API

### `<Loading>` 组件

组件路径：`@tencent/tdesign-miniprogram/loading/loading`

#### Props

| 属性        | 值类型    | 默认值    | 说明                                                                       |
| ----------- | --------- | --------- | -------------------------------------------------------------------------- |
| loading     | `Boolean` | `true`    | 是否显示加载                                                               |
| layout      | `String`  | `default` | 显示类型，可选`default` - 默认，`full` - 整页，`bar` - 顶部进度条          |
| size        | `String`  | `40px`    | 加载圆圈大小，带单位                                                       |
| textSize    | `String`  | `14px`    | 加载文字大小，带单位                                                       |
| textPadding | `String`  | `0`       | 加载文字 padding 大小，带单位                                              |
| vertical    | `Boolean` | `true`    | 是否纵向排版，否则横向排版                                                 |
| type        | `String`  | `circle`  | 加载图标类型                                                               |
| error       | `Boolean` | `false`   | 是否显示加载错误                                                           |
| showType    | `String`  | `all`     | 显示类型，可选`text-only` - 仅文字，`icon-only` - 仅图标，`all` - 全部显示 |
| title       | `String`  | `加载中`  | 加载文字                                                                   |
| progress    | `Number`  | `-1`      | 顶部进度条加载进度（选填）                                                 |

#### Events

| 事件        | event.detail | 说明                     |
| ----------- | ------------ | ------------------------ |
| bind:reload | -            | 点击失败页面刷新按钮触发 |
