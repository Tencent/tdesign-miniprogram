---
title: Indexes 索引
description: 用于页面中信息快速检索，可以根据目录中的页码快速找到所需的内容。
spline: navigation
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-indexes": "tdesign-miniprogram/indexes/indexes"
}
```

## 代码演示

### 基础索引

<img src="https://tdesign.gtimg.com/miniprogram/readme/indexes.png" width="375px" height="50%">

```html
<t-indexes list="{{letter}}" bind:select="onSelect"> </t-indexes>
```

```js
Page({
  data: {
    letter: [
      {
        title: 'A开头',
        index: 'A',
        children: [{ title: '阿坝' }, { title: '阿拉善' }, { title: '阿里' }, { title: '安康' }],
      },
      {
        title: 'B开头',
        index: 'B',
        children: [{ title: '北京' }, { title: '白银' }, { title: '保定' }],
      },
    ],
  },
  onSelect(e) {
    const { indexes } = e.detail;
    const group = this.data.letter[indexes[0]];
    const city = group.children[indexes[1]];
    wx.showToast({ icon: 'none', title: `你选择了: ${group.title}>${city.title}` });
  },
});
```

### API

### Indexes Props

| 名称   | 类型   | 默认值 | 说明                                                                                                                                                                                                                                                                                                                                                             | 必传 |
| ------ | ------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| height | Number | -      | 列表高度，未设置默认占满设备高度                                                                                                                                                                                                                                                                                                                                 | N    |
| list   | Array  | []     | 必需。索引列表的列表数据。每个元素包含三个字元素，index(string)：索引值，例如 1，2，3，...或 A，B，C 等；title(string): 索引标题，可不填将默认设为索引值；children(Array<{title: string}>): 子元素列表，title 为子元素的展示文案。。TS 类型：`ListItem[] `。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/indexes/type.ts) | Y    |

### Indexes Events

| 名称   | 参数                                                       | 描述                 |
| ------ | ---------------------------------------------------------- | -------------------- |
| select | `(indexes: { groupIndex: string; childrenIndex: number })` | 点击行元素时触发事件 |
