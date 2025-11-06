---
title: 更新日志
spline: explain
toc: false
docClass: timeline
---


## 🌈 1.11.1 `2025-11-06` 
### 🐞 Bug Fixes
- `Calendar`: 修复 `value[]` 结合 `swich-mode` 时，初始化错误 @anlyyao ([#4005](https://github.com/Tencent/tdesign-miniprogram/pull/4005))
- `CheckboxGroup`: 修复无法在 `form` 中获取数据的问题 @Boomkaa ([#4017](https://github.com/Tencent/tdesign-miniprogram/pull/4017))
- `TabBar`: 修复子项背景色叠加的问题 @Boomkaa ([#4019](https://github.com/Tencent/tdesign-miniprogram/pull/4019))
- `ActionSheet`: 修复组件初始化数据重复修改导致异常的问题 @betavs ([#4013](https://github.com/Tencent/tdesign-miniprogram/pull/4013))
- `Toast`: 修复圆角样式错误 @anlyyao ([#4031](https://github.com/Tencent/tdesign-miniprogram/pull/4031))
- `Upload`: 修复 `draggable` 值变换时组件显示错误 @anlyyao ([#4030](https://github.com/Tencent/tdesign-miniprogram/pull/4030))
- `Picker`: 修复 `autoClose` 为 `false` 时，点击遮罩层会重置选项为拨动前选项值的问题 @composable-tu ([#3874](https://github.com/Tencent/tdesign-miniprogram/pull/3874))


## 🌈 1.11.0 `2025-10-20` 
### 🚀 Features
- `Watermark`: 新增 `Watermark` 水印组件 @Wesley-0808 ([#3799](https://github.com/Tencent/tdesign-miniprogram/pull/3799))
- `Textarea`: 改用伪元素实现边框，避免占位 @anlyyao ([#3878](https://github.com/Tencent/tdesign-miniprogram/pull/3878))
- `SideBarItem`: 
  - 新增默认插槽，可自定义侧边栏子项内容 @anlyyao ([#3875](https://github.com/Tencent/tdesign-miniprogram/pull/3875))
  - 支持由标签内容撑开高度 @anlyyao ([#3985](https://github.com/Tencent/tdesign-miniprogram/pull/3985))
- `Swiper`: 新增 `animationfinish` 事件 @anlyyao ([#3885](https://github.com/Tencent/tdesign-miniprogram/pull/3885))
- `Textarea`: 组件 `CSS Vars` 新增 `--td-textarea-padding` @anlyyao ([#3937](https://github.com/Tencent/tdesign-miniprogram/pull/3937))
- `PickerItem`:  子项支持 `icon` 属性 @anlyyao ([#3930](https://github.com/Tencent/tdesign-miniprogram/pull/3930))
- `Upload`: `click` 事件新增 `index` 参数 @anlyyao ([#3942](https://github.com/Tencent/tdesign-miniprogram/pull/3942))
- `Slider`: `label` 属性支持函数类型，用于自定义滑块当前值文本 @anlyyao ([#3928](https://github.com/Tencent/tdesign-miniprogram/pull/3928))
- `Drawer`: 新增 `overlayProps` 属性 @anlyyao ([#3978](https://github.com/Tencent/tdesign-miniprogram/pull/3978))
- `QRCode`: 新增外部样式类 `t-class-canvas` @anlyyao ([#3956](https://github.com/Tencent/tdesign-miniprogram/pull/3956))
### 🐞 Bug Fixes
- `DateTimePicker`: 修复 `showWeek` 模式下日（`date`）列表未正确排除 `start` 和 `end`、且 `steps` 步长无效的问题 @composable-tu ([#3861](https://github.com/Tencent/tdesign-miniprogram/pull/3861))
- `Message`: 修复 `error` 主题图标错误 @anlyyao ([#3879](https://github.com/Tencent/tdesign-miniprogram/pull/3879))
- `PullDownRefresh`: 修复 `t-class-loading` 配置不生效的问题 @betavs ([#3896](https://github.com/Tencent/tdesign-miniprogram/pull/3896))
- `Input`: 修复在 `skyline` 和 `type = 'nickname'` 场景下，`change` 事件无效的问题 @anlyyao ([#3858](https://github.com/Tencent/tdesign-miniprogram/pull/3858))
- `StepItem`: 修复 `title` 和 `description` 之间的间距错误 @anlyyao ([#3898](https://github.com/Tencent/tdesign-miniprogram/pull/3898))
- `Skeleton`: 修复 `row-col` 中的选项为数字时无法实现多列效果的问题 @betavs ([#3932](https://github.com/Tencent/tdesign-miniprogram/pull/3932))
- `TabBar`: 修复在 `Skyline` 渲染引擎下， `change` 事件无效的问题 @anlyyao ([#3926](https://github.com/Tencent/tdesign-miniprogram/pull/3926))
- `Checkbox`: 修复 `icon` 属性使用 `svg` 资源时在 `iOS` 上不显示 @anlyyao ([#3929](https://github.com/Tencent/tdesign-miniprogram/pull/3929))
- `Slider`: 修复动态更新 `value` 无效的问题 @anlyyao ([#3954](https://github.com/Tencent/tdesign-miniprogram/pull/3954))
- `DropdownItem`: 修复在 `iOS 26` 中弹窗定位不准 @anlyyao ([#3953](https://github.com/Tencent/tdesign-miniprogram/pull/3953))
- `Toast`: 修复 `showOverlay` 和 `preventScrollThrough` 均为 `true` 时，遮罩背景色错误 @anlyyao ([#3948](https://github.com/Tencent/tdesign-miniprogram/pull/3948))
- `SideBar`: 修复禁用态颜色错误 @novlan1 ([#3982](https://github.com/Tencent/tdesign-miniprogram/pull/3982))
- `Calendar`: 修复翻页按钮状态错误 @anlyyao ([#3996](https://github.com/Tencent/tdesign-miniprogram/pull/3996))
- `ImageViewer`: 修复背景色错误问题 @novlan1 ([#3881](https://github.com/Tencent/tdesign-miniprogram/pull/3881))
- `QRCode`: 修复中心二维码位置偏移  @SinzoL ([#3899](https://github.com/Tencent/tdesign-miniprogram/pull/3899))


## 🌈 首发
