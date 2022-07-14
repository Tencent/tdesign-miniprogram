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
  value="{{selectedCityValue}}"
  bindchange="onPickerConfirm"
  bindpick="onColumnChange"
  bindcancel="onPickerCancel"
>
  <t-picker-item options="{{citys}}"  />
</t-picker>
```

```js
Page({
  data: {
    selectedCityValue: [],
    citys: [
      { label: '广州市', value: '广州市' },
      { label: '韶关市', value: '韶关市' },
      { label: '深圳市', value: '深圳市' },
      { label: '珠海市', value: '珠海市' },
      { label: '汕头市', value: '汕头市' },
    ],
  },
  onPickerConfirm(e) {
    console.log('picker confirm:', e.detail);
    this.setData({
      selectedCityValue:  e.detail.value,
    });
  },
  onColumnChange(e) {
    console.log('picker pick:', e);
  },
});
```

## API
### Picker Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
auto-close | Boolean | true | 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible | N
cancel-btn | String / Boolean / Object | true | 取消按钮文字。TS 类型：`boolean | string | ButtonProps` | N
columns | Array / Function | [] | 必需。配置每一列的选项。TS 类型：`Array<PickerColumn> | ((item: Array<PickerValue>)  => Array<PickerColumn>)` `type PickerColumn = PickerColumnItem[]` `interface PickerColumnItem { label: string,value: string}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | Y
confirm-btn | String / Boolean / Object | true | 确定按钮文字。TS 类型：`boolean | string | ButtonProps`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
footer | Slot | - | 底部内容 | N
header | Boolean / Slot | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容 | N
render-label | String / Function | - | 自定义label。TS 类型：`(item: PickerColumnItem) => string` | N
title | String | '' | 标题 | N
value | Array | - | 选中值。TS 类型：`Array<PickerValue>` `type PickerValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`Array<PickerValue>` `type PickerValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### Picker Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 点击取消按钮时触发
change | `(detail: { value: Array<PickerValue>; columns: Array<{ column: number; index: number }> })` | 选中变化时候触发，即确认变化时触发
confirm | `(value: Array<PickerValue>, context: {index: number[] })` | 点击确认按钮时触发
pick | `(value: Array<PickerValue>,context: PickerContext)` | 任何一列选中都会触发，不同的列参数不同。`context.column` 表示第几列变化，`context.index` 表示变化那一列的选中项下标
