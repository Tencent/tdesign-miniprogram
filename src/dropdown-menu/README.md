---
title: DropdownMenu 下拉菜单
description: 菜单呈现数个并列的选项类目，用于整个页面的内容筛选，由菜单面板和菜单选项组成。
spline: message
isComponent: true
---

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-dropdown-menu": "tdesign-miniprogram/dropdown-menu/dropdown-menu",
  "t-dropdown-item": "tdesign-miniprogram/dropdown-menu/dropdown-item"
}
```

## 用法

### 基础使用

```html
<t-dropdown-menu>
  <!-- 受控 -->
  <t-dropdown-item
    label="菜单"
    options="{{singleSelect.options}}"
    value="{{singleSelect.value}}"
    bindchange="handleSingleSelect"
  />
  <!-- 非受控 -->
  <t-dropdown-item label="菜单" options="{{singleSelect.options}}" defaultValue="option_3" />
  <t-dropdown-item label="菜单" options="{{singleSelect.options}}" defaultValue="option_3" />
  <t-dropdown-item label="两字溢出" options="{{singleSelect.options}}" defaultValue="option_3" />
</t-dropdown-menu>
```

```js
const singleSelectOptions = new Array(8).fill(null).map((_, i) => ({
  label: `选项 ${i + 1}`,
  value: `option_${i + 1}`,
  disabled: false,
}));

Page({
  data: {
    singleSelect: {
      value: 'option_3',
      options: singleSelectOptions,
    },
  },

  handleSingleSelect(e) {
    this.setData({
      'singleSelect.value': e.detail.value,
    });
  },
});
```

### 多列多选

```html
<t-dropdown-menu>
  <!-- 受控 -->
  <t-dropdown-item
    label="单列多选"
    options="{{options}}"
    value="{{value}}"
    bindchange="handleMultipleSelect"
    multiple
  />
  <!-- 非受控 -->
  <t-dropdown-item
    label="双列多选"
    optionsColumns="2"
    options="{{options}}"
    defaultValue="{{['option_1', 'option_2']}}"
    multiple
  />
  <t-dropdown-item
    label="最多四字三列"
    optionsColumns="3"
    options="{{options}}"
    defaultValue="{{['option_1', 'option_2', 'option_3']}}"
    multiple
  />
</t-dropdown-menu>
```

```js
const options = new Array(8).fill(null).map((_, i) => ({
  label: `选项 ${i + 1}`,
  value: `option_${i + 1}`,
  disabled: false,
}));

Page({
  data: {
    value: ['option_1'],
    options,
  },

  handleMultipleSelect(e) {
    this.setData({
      'multipleSelect.value': e.detail.value,
    });
  },
});
```

### 树形选择

```html
<t-dropdown-menu>
  <t-dropdown-item
    label="树形双列单选"
    optionsLayout="tree"
    options="{{doubleColumnsTree.options}}"
    value="{{doubleColumnsTree.value}}"
    bindchange="handleTreeSelect"
  />
  <t-dropdown-item
    label="树形三列多选"
    optionsLayout="tree"
    options="{{tripleColumnsTree.options}}"
    defaultValue="{{tripleColumnsTree.value}}"
    multiple
  />
</t-dropdown-menu>
```

```js
const generateTree = function (deep = 0, count = 10, prefix?: string) {
  const ans = [];

  for (let i = 0; i < count; i += 1) {
    const value = prefix ? `${prefix}-${i}` : `${i}`;
    const rect: any = {
      label: `选项${chineseNumber[i]}`,
      value,
    };

    if (deep > 0) {
      rect.options = generateTree(deep - 1, 10, value);
    }
    ans.push(rect);
  }

  return ans;
};

Page({
  data: {
    doubleColumnsTree: {
      options: generateTree(1),
      value: ['0', '0-0'],
    },
    tripleColumnsTree: {
      options: generateTree(2),
      value: ['0', '0-0', ['0-0-0', '0-0-1']],
    },
  },
  handleTreeSelect(e) {
    this.setData({
      'doubleColumnsTree.value': e.detail.value,
    });
  },
})
```

## API
### DropdownMenu Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
active-color | String | - | 【讨论中】菜单标题和选项的选中态颜色 | N
close-on-click-overlay | Boolean | true | 是否在点击遮罩层后关闭菜单 | N
duration | String / Number | 200 | 动画时长 | N
overlay | Boolean | true | 是否显示遮罩层 | N
z-index | Number | 11600 | 菜单栏 z-index 层级 | N

### DropdownItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
disabled | Boolean | false | 是否禁用 | N
label | String | - | 标题 | N
multiple | Boolean | false | 是否多选 | N
options | Array | [] | 选项数据。TS 类型：`Array<TdDropdownItemOption>` `interface TdDropdownItemOption { label: string;disabled: boolean;value: TdDropdownItemOptionValueType; [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-menu/type.ts) | N
options-columns | String / Number | 1 | 选项分栏（1-3） | N
options-layout | String | columns | 选项排列。可选项：columns/tree | N
value | String / Number / Array | undefined | 选中值。TS 类型：`TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType> ` `type TdDropdownItemOptionValueType = string | number;`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-menu/type.ts) | N
default-value | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：`TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType> ` `type TdDropdownItemOptionValueType = string | number;`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-menu/type.ts) | N

### DropdownItem Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>)` | 值改变时触发
confirm | `(value: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>)` | 点击确认时触发
