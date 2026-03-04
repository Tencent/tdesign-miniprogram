---
title: 更新日志
spline: explain
toc: false
docClass: timeline
---

## 🌈 0.7.3 `2026-03-04`

### 🚀 Features

- `Theme`: 修复 `index.css` 尺寸值错误的问题 @liweijie0812 ([#4290](https://github.com/Tencent/tdesign-miniprogram/pull/4290))

### 🐞 Bug Fixes

- `Button`: 去除多余动画效果 @novlan1 ([#4305](https://github.com/Tencent/tdesign-miniprogram/pull/4305))
- `Dialog`: 修复确认/取消按钮不显示问题 @novlan1 ([#4305](https://github.com/Tencent/tdesign-miniprogram/pull/4305))

## 🌈 0.7.2 `2026-02-26`

### 🚀 Features

- `Calendar`: 新增 `PopupProps` 属性，透传至 `Popup` @novlan1 ([#4264](https://github.com/Tencent/tdesign-miniprogram/pull/4264))
- `Navbar`: 支持监听页面变化，重新计算尺寸 @novlan1 ([#4282](https://github.com/Tencent/tdesign-miniprogram/pull/4282))

### 🐞 Bug Fixes

- `Button`: 修复 `icon.size` 不生效问题 @novlan1 ([#4264](https://github.com/Tencent/tdesign-miniprogram/pull/4264))
- `Form`: 修改边距错误问题 @novlan1 ([#4282](https://github.com/Tencent/tdesign-miniprogram/pull/4282))
- `Search`: 修复 `value` 未监听问题 @novlan1 ([#4264](https://github.com/Tencent/tdesign-miniprogram/pull/4264))

## 🌈 0.7.1 `2026-02-04`

### 🚀 Features

- `ActionSheet`: 为 `items` 子项的 `icon` 字段新增 `object` 类型，支持透传到 `TIcon` 组件 @novlan1 ([#4255](https://github.com/Tencent/tdesign-miniprogram/pull/4255))
- `Button`: 新增 `activity-type`，`entrance-path` 和 `need-show-entrance` 属性 @novlan1 ([#4255](https://github.com/Tencent/tdesign-miniprogram/pull/4255))
- `Icon`: 新增 217 个与人工智能、文档、徽标和文件相关的图标 @novlan1 ([#4255](https://github.com/Tencent/tdesign-miniprogram/pull/4255))
- `Search`: 为 `change` 事件新增 `trigger` 参数，表示触发源 @novlan1 ([#4255](https://github.com/Tencent/tdesign-miniprogram/pull/4255))

## 🌈 0.7.0 `2026-01-30`

### 🚀 Features

- `ActionSheet`: `item` 属性补充 `description` 字段 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Badge`: 
  - `shape` 属性新增 `ribbon-right/ribbon-left/triangle-right/triangle-left` 可选项，其中 `ribbon` 与 `ribbon-right` 等效 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 优化 `ribbon` 实现，改用 `background: linear-gradient()`，移除伪元素相关样式 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Calendar`: 新增 `allowSameDay` 属性，允许 `type='range'` 场景的起止时间相同 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Cascader`: 
  - 支持通过 `keys` 属性定义 `children / disabled` 在 `options` 中对应的字段别名 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 新增 `middle-content` 插槽，用于自定义中间区域内容  @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `CollapsePanel`: 新增 `--td-collapse-disabled-color` 和 `--td-collapse-left-icon-color`，用于自定义禁用态颜色和左侧图标颜色 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `ImageViewer`: 新增 `image-props` 属性 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Navbar`: 新增 `placeholder` 属性，默认值为 `false`；新增 `zIndex` 属性，默认值为 `1` @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Picker`: 
  - 优化性能减少掉帧 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 优化大量数据时列表滚动性能 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - `itemHeight` 默认单位改用 `px`，避免单位转换带来的精度问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 新增 `visibleItemCount` 属性，可自定义可视区域 `PickerItem` 的子项个数 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Popover`: 
  - 新增 `fixed` API，适用于触发元素为 `fixed` 场景。⚠️ 当触发元素为 `fixed` 时，除了需要显示指定 `fixed` 属性为 `true`，还需在触发元素层添加 `t-popover-wrapper--fixed` 类，用于定位触发元素 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 新增 `--td-popover-[theme]-color` 和 `--td-popover-[theme]-bg-color` 系列 `CSS Vars` @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `QRCode`: 组件新增 `init()`，用于外部调用，重新绘制二维码 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Search`: 
  - 确保点击清空按钮后，组件内容清空但保持聚焦 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 新增 `cursor-color` 属性 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `SidebarItem`: 
  - 新增默认插槽，可自定义侧边栏子项内容 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 支持由标签内容撑开高度 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 完善激活项的前缀和后缀元素显示逻辑 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `TabBar`: 新增 `placeholder` 属性，默认值为 `false`；新增 `zIndex` 属性，默认值为 `1` @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))

### 🐞 Bug Fixes

- `ActionSheet`: 
  - 修复左对齐场景下，子项 `border` 左间距错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复 `grid` 主题 + 无 `description` 描述文本场景下，顶部间距错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - `list` 主题最后一项不应设置底边框 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复 `item` 属性的 `disabled` 配置无效 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `BackTop`: 修复文本字重错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Badge`: 修复 `count` 插槽异常 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Calendar`: 
  - 修复 `value[]` 结合 `swich-mode` 时，初始化错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复翻页按钮状态错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Checkbox`: 修复 `icon` 属性使用 `svg` 资源时在 `iOS` 上不显示 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `CollapsePanel`: 
  - 修复深色模式下面板右侧图标颜色错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复左侧图标颜色错误，默认主题色，支持使用 `css vars` 自定义 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `ColorPicker`: 修复组件深色模式背景、边框、文本色错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `DateTimePicker`: 修复插槽名重复导致的控制台告警 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `DropdownItem`: 修复在 `iOS 26` 中弹窗定位不准 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Fab`: 修复 `yBounds` 未传值时，控制台报错问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Grid`: 修复 `column` 小于 4 或大于 4 时，文本字号大小错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Message`: 修复 `error` 主题图标错误  @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Picker`: 
  - 修复 `autoClose` 为 `false` 时，点击遮罩层会重置选项为拨动前选项值的问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复平铺模式 `value` 变化未能准确监听 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复 `keys` 动态变更时，子项列表数据不显示 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复 `popupProps.showOverlay` 无效 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Popup`: 修复 `duration` 参数无效的问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Progress`: 
  - 修复深色模式下环形进度条内部背景色错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复环形进度条内部文本间距错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复深色模式下环形进度条内部背景色错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复环形进度条内部文本间距错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Slider`: 修复受控 + 双游标滑块模式下陷入死循环的问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `SwipeCell`: 消除 `IntersectionObserver is using slowest path` 警告 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `TabBar`: 修复子项背景色叠加的问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Tabs`: 消除 `IntersectionObserver is using slowest path` 警告 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Toast`: 
  - 修复 `Toast` 嵌套调用时 `close` 回调陷入循环的问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复弹窗与遮罩消失不同步的问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复圆角样式错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复 `showOverlay` 和 `preventScrollThrough` 均为 `true` 时，遮罩背景色错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `Upload`: 
  - 修复企业微信/桌面端环境中部分机型无法唤起上传 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复当 `request-method` 返回 `Promise` 时，无法上传的问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复 `draggable` 值变换时组件显示错误 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
  - 修复拖拽结束后拖拽元素 `zIndex` 异常 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))

### 🚧 Others

- `改用 Font token`，调整部分组件的 CSS Vars @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))
- `--td-xx-icon-font-size` 统一更名为 `--td-xx-icon-size` @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))

## 🌈 0.6.3 `2026-01-05`

### 🚀 Features

- `Form`: 支持 `change` 类型 `trigger` @novlan1 ([#143](https://github.com/novlan1/tdesign-uniapp/pull/143))
- `Image`: 点击事件不禁用冒泡 @novlan1 ([#142](https://github.com/novlan1/tdesign-uniapp/pull/142))

## 🌈 0.6.2 `2025-12-30`

### 🐞 Bug Fixes

- `DateTimePicker`: 修复滚动日期时其他列向上跳动问题 @novlan1 ([#138](https://github.com/novlan1/tdesign-uniapp/pull/138))

## 🌈 0.6.1 `2025-12-29`

### 🚀 Features

- `Navbar`: 增加 `right` 插槽 @novlan1 ([#136](https://github.com/novlan1/tdesign-uniapp/pull/136))

### 🐞 Bug Fixes

- `Upload`: 修复小程序下图片点击事件不触发问题 @novlan1 ([#136](https://github.com/novlan1/tdesign-uniapp/pull/136))

## 🌈 0.6.0 `2025-12-17` 

### 🚀 Features

- `Popover`: 新增组件 @novlan1 ([#126](https://github.com/novlan1/tdesign-uniapp/pull/126))

## 🌈 0.5.9 `2025-12-11`

### 🐞 Bug Fixes

- `Input`: 修复数据回显问题 @novlan1 ([#121](https://github.com/novlan1/tdesign-uniapp/pull/121))

## 🌈 0.5.8 `2025-12-01`

### 🚀 Features

- `Form`: 新增 `contentAlign` 属性 @novlan1 ([#115](https://github.com/novlan1/tdesign-uniapp/pull/115))

### 🐞 Bug Fixes

- `SwipeCell`: 修复多个组件共存时的复位问题 @novlan1 ([#114](https://github.com/novlan1/tdesign-uniapp/pull/114))
- `Form`: 修复 `help/label` 插槽不存在的问题 @novlan1 ([#115](https://github.com/novlan1/tdesign-uniapp/pull/115))

## 🌈 0.5.7 `2025-11-27`

### 🚀 Features

- `Textarea`: 支持 `v-model:value` @novlan1 ([#102](https://github.com/novlan1/tdesign-uniapp/pull/102))
- `Toast`: 函数式调用组件时，支持组件 Dom 预埋在页面下 @novlan1 ([#103](https://github.com/novlan1/tdesign-uniapp/pull/103))

### 🐞 Bug Fixes

- `Input`: 修复 `clear` 事件的意外冒泡问题 @novlan1 ([#100](https://github.com/novlan1/tdesign-uniapp/pull/100))
- `Calendar`: 修复 `switchMode` 为 `year-month` 时的编译问题 @novlan1 ([#106](https://github.com/novlan1/tdesign-uniapp/pull/106))

## 🌈 0.5.6 `2025-11-25`

### 🚀 Features

- `Popup`: 支持 `v-model:visible` @novlan1 ([#90](https://github.com/novlan1/tdesign-uniapp/pull/90))
- `Form`: 支持 `validate` 方法传参 @novlan1 ([#90](https://github.com/novlan1/tdesign-uniapp/pull/90))
- `Input`: 支持 `v-model:value` @novlan1 ([#89](https://github.com/novlan1/tdesign-uniapp/pull/89))

### 🐞 Bug Fixes

- `Form`: 修复深色模式背景错误问题 @novlan1 ([#91](https://github.com/novlan1/tdesign-uniapp/pull/91))

## 🌈 0.5.5 `2025-11-17`

### 🚀 Features

- `Picker`: 支持 `v-model:visible` 语法糖 @novlan1 ([#77](https://github.com/novlan1/tdesign-uniapp/pull/77))
- `PullDownRefresh`: 修改 `dragstart/dragging/dragend` 事件参数为 `TouchEvent` @novlan1 ([#63](https://github.com/novlan1/tdesign-uniapp/pull/63))

### 🐞 Bug Fixes

- `Input`: 修复 `readonly` 时点击无效问题 @novlan1 ([#76](https://github.com/novlan1/tdesign-uniapp/pull/76))
- `PullDownRefresh`: 修复加载中再次点击时触发的 `value` 变化问题 @novlan1 ([#63](https://github.com/novlan1/tdesign-uniapp/pull/63))

## 🌈 0.5.4 `2025-11-14`

### 🐞 Bug Fixes

- `DropdownMenu`: 修复使用自带导航栏时的高度错误 @novlan1 ([#56](https://github.com/novlan1/tdesign-uniapp/pull/56))

## 🌈 0.5.3 `2025-11-12`

### 🐞 Bug Fixes

- `Form`: 修复 `FormItem` 中 `padding` 错误问题 @novlan1

### 🚧 Others

- site: 使用 `history` 模式 @novlan1 ([#35](https://github.com/novlan1/tdesign-uniapp/pull/35))
- ci: 使用多种 CI @novlan1 ([#42](https://github.com/novlan1/tdesign-uniapp/pull/42))

## 🌈 0.5.2 `2025-11-10`

### 🐞 Bug Fixes

- `Popup`: 修复滚动穿透问题 @novlan1 ([#33](https://github.com/novlan1/tdesign-uniapp/pull/33))
- `Tabs`: 修复 `scroll-view` 事件参数问题 @novlan1 ([#32](https://github.com/novlan1/tdesign-uniapp/pull/32))

## 🌈 0.5.1 `2025-11-07`

### 🚀 Features

- `PullDownRefresh`: 支持 `successDuration` 属性 @novlan1 ([#29](https://github.com/novlan1/tdesign-uniapp/pull/29))
