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
<t-toast
  id="t-toast"
  show="{{show}}"
  type="{{type}}"
  position="{{position}}"
  message="{{message}}"
  icon="{{icon}}"
  showOverlay="{{showOverlay}}"
  duration="{{duration}}"
></t-toast>
```

```js
// page.js
Page({
    data: {
      show: false,
      type: '',
      position: 'middle',
      message: '',
      icon: '',
      showOverlay: true,
      duration: 1000,
    }
})
```

## API
`<Toast>` 组件

组件路径：@tencent/tdesign-miniprogram/toast/toast

#### Props

| 属性 | 值类型 | 默认值 | 说明 |
|-----|-------|-------|-----|
| show | `Boolean` | `false` | 是否显示加载 |
| type | `String` | `''` | 显示类型，可选`loading` - 加载，`success` - 成功， `fail` - 失败 |
| position | `String` | `middle` | 展示位置，可选`top` - 顶部，`middle` - 中间，`bottom` - 底部 |
| message | `String` | `''` | 文本内容 |
| icon | `String` | `''` | 自定义图标 |
| showOverlay | `Boolean` | `true` | 显示背景遮罩，禁止背景点击和滚动 |
| duration | `Number` | `1000` | 展示时长ms，值为0时不消失 |

