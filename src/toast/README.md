# Toast

## 介绍

轻提示

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
      text: 'toast内容',
    });
  },
});
```

## API

`<Toast>` 组件

组件路径：@tencent/tdesign-miniprogram/toast/toast

#### Props

| 参数      | 说明                             | 类型     | 默认值    |
| --------- | -------------------------------- | -------- | --------- |
| icon      | 弹窗显示 icon 类型名称           | _string_ | `success` |
| iconColor | 弹窗显示 icon 颜色               | _string_ | `#fff`    |
| iconSize  | 弹窗显示 icon 大小               | _string_ | -         |
| text      | 弹窗显示文字提示                 | _string_ | -         |
| textColor | 弹窗显示文字颜色                 | _string_ | ``        |
| zIndex    | 当前弹窗所在的层级值             | _number_ | `10`      |
| fontSize  | 弹窗显示文字大小                 | _number_ | -         |
| duration  | 弹窗显示毫秒数                   | _number_ | `2000`    |
| direction | 按钮排列方式:`'row'`\|`'column'` | _string_ | `'row'`   |
