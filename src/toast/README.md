# Toast 轻提示

## 介绍

用于轻量级反馈或提示，不会打断用户操作。

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-toast": "@tencent/tdesign-miniprogram/toast/toast"
}
```

### 组件方式调用

以组件的形式调用，可选属性 `show` 赋值为`true`指示是否正在加载，或加载失败

#### 默认布局

```html
<t-toast id="t-toast"></t-toast>
```

```js
import Toast from '@tencent/tdesign-miniprogram/toast/index';
// page.js
Page({
  data: {},
  handleTap(e) {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'toast内容',
    });
  },
});
```

## API

### Toast Props

| 名称         | 类型    | 默认值 | 说明                                     | 必传 |
| ------------ | ------- | ------ | ---------------------------------------- | ---- |
| direction    | String  | -      | 图标排列方式。可选项：row/column         | N    |
| duration     | Number  | 2000   | 弹窗显示毫秒数                           | N    |
| icon         | Slot    | -      | 自定义图标                               | N    |
| message      | String  | -      | 弹窗显示文字                             | N    |
| position     | String  | middle | 弹窗展示位置。可选项： top/middle/bottom | N    |
| show-overlay | Boolean | -      | 是否显示背景遮罩，禁止背景点击和滚动     | N    |
| type         | String  | -      | 提示类型。可选项：loading/success/fail   | N    |
