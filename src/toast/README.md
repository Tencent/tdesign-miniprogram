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
      message: 'toast内容',
    });
  },
});
```

## API

`<Toast>` 组件

组件路径：@tencent/tdesign-miniprogram/toast/toast

### Props

| 参数        | 说明                                            | 类型                 | 默认值   |
| ----------- | ----------------------------------------------- | -------------------- | -------- |
| icon        | 自定义图标                                      | _string_             | ``       |
| type        | 提示类型，可选值：'loading'、'success'、'fail'  | _ToastType_          | ``       |
| message     | 弹窗显示文字提示                                | _string_             | -        |
| position    | 弹窗展示位置，可选值：'top'、'middle'、'bottom' | _ToastPositionType_  | `middle` |
| duration    | 弹窗显示毫秒数                                  | _number_             | `2000`   |
| direction   | 图标排列方式，可选值：'row'、'column'           | _ToastDirectionType_ | `'row'`  |
| showOverlay | 显示背景遮罩，禁止背景点击和滚动                | _boolean_            | false    |

```js
type ToastType = 'loading' | 'success' | 'fail';
type ToastPositionType = 'top' | 'middle' | 'bottom';
type ToastDirectionType = 'row' | 'column';
```
