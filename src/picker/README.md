---
title: Picker 选择器
description: 用于一组预设数据中的选择。
spline: form
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-picker": "tdesign-miniprogram/picker/picker",
  "t-picker-item": "tdesign-miniprogram/picker/picker-item",
}
```

## 代码演示

### 基础选择器

<img src="https://tdesign.gtimg.com/miniprogram/readme/picker.png" width="375px" height="50%">

```html
<t-picker
  visible="{{true}}"
  title="请选择城市"
  bindchange="onPickerChange"
  bindconfirm="onPicker1Confirm"
  bindcancel="onPicker1Cancel"
>
  <t-picker-item options="{{citys}}" value="{{selectedCityValue}}" />
</t-picker>
```

```js
Page({
  data: {
    citys: [
      { label: '广州市', value: '广州市' },
      { label: '韶关市', value: '韶关市' },
      { label: '深圳市', value: '深圳市' },
      { label: '珠海市', value: '珠海市' },
      { label: '汕头市', value: '汕头市' },
    ],
  },
  onPicker1Confirm(e) {
    console.log('picker1 confirm:', e.detail);
    this.setData({
      selectedCityValue: e.detail.value?.value,
    });
  },
});
```

## API
### Picker Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cancel-btn | String | '' | 取消按钮文字 | N
confirm-btn | String | '' | 确定按钮文字 | N
footer | Slot | - | 底部内容 | N
header | Boolean / Slot | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容 | N
title | String | '' | 标题 | N
value | Array | - | 选中值。TS 类型：`Array<PickerValue>` `type PickerValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`Array<PickerValue>` `type PickerValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### Picker Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 点击取消按钮时触发
change | `(value: Array<PickerValue>)` | 选中变化时候触发
confirm | `(index: number, value: Array<PickerValue>)` | 点击确认确认按钮时触发

### PickerItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
options | Array | [] | 数据源。TS 类型：`Array<PickerItemOption>` `interface PickerItemOption { label: string; value: string | number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
value | String / Number | - | 默认选中的选项 | N
