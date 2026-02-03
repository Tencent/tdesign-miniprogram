---
title: 更新日志
spline: explain
toc: false
docClass: timeline
---

## 🌈 1.12.3 `2026-02-03`

### 🚀 Features

- `ActionSheet`: 为 `items` 子项的 `icon` 字段新增 `object` 类型，支持透传到 `TIcon` 组件 @anlyyao ([#4251](https://github.com/Tencent/tdesign-miniprogram/pull/4251))
- `Button`: 新增 `activity-type`，`entrance-path` 和 `need-show-entrance` 属性 @anlyyao ([#4220](https://github.com/Tencent/tdesign-miniprogram/pull/4220))
- `ChatActionbar`: 支持长按展示 @mimaoxiao ([#4071](https://github.com/Tencent/tdesign-miniprogram/pull/4071))
- `Icon`: 新增 217 个与人工智能、文档、徽标和文件相关的图标 @uyarn ([#4207](https://github.com/Tencent/tdesign-miniprogram/pull/4207))
- `Search`: 为 `change` 事件新增 `trigger` 参数，表示触发源 @anlyyao ([#4223](https://github.com/Tencent/tdesign-miniprogram/pull/4223))

### 🐞 Bug Fixes

- `ChatContent`: 修复英文单词在换行时被截断的问题 @mimaoxiao ([#4226](https://github.com/Tencent/tdesign-miniprogram/pull/4226))
- `Popup`: 修复 `duration` 参数无效的问题 @novlan1 ([#4201](https://github.com/Tencent/tdesign-miniprogram/pull/4201))

## 🌈 1.12.2 `2026-01-21`

### 🚀 Features

- `Cascader`: 新增 `middle-content` 插槽，用于自定义中间区域内容 @anlyyao ([#4194](https://github.com/Tencent/tdesign-miniprogram/pull/4194))
- `CollapsePanel`: 新增 `--td-collapse-disabled-color` 和 `--td-collapse-left-icon-color`，用于自定义禁用态颜色和左侧图标颜色 @anlyyao @liweijie0812 ([#4185](https://github.com/Tencent/tdesign-miniprogram/pull/4185))
- `Popover`: 新增 `--td-popover-[theme]-color` 和 `--td-popover-[theme]-bg-color` 系列 `CSS Vars` @Wesley-0808 ([#4169](https://github.com/Tencent/tdesign-miniprogram/pull/4169))
- `QRCode`: 组件新增 `init()`，用于外部调用，重新绘制二维码 @anlyyao ([#4174](https://github.com/Tencent/tdesign-miniprogram/pull/4174))
- `SideBarItem`: 完善激活项的前缀和后缀元素显示逻辑 @anlyyao ([#4175](https://github.com/Tencent/tdesign-miniprogram/pull/4175))
- `Slider`: 修复受控 + 双游标滑块模式下陷入死循环的问题 @Boomkaa ([#4170](https://github.com/Tencent/tdesign-miniprogram/pull/4170))

### 🐞 Bug Fixes

- `ChatList`: 修复 `scrollToBottom` 在 `reverse` 为 `false` 时，滑动的方向错误 @zydemail ([#4191](https://github.com/Tencent/tdesign-miniprogram/pull/4191))
- `CollapsePanel`: 
  - 修复深色模式下面板右侧图标颜色错误 @liweijie0812 ([#4185](https://github.com/Tencent/tdesign-miniprogram/pull/4185))
  - 修复左侧图标颜色错误，默认主题色，支持使用 `css vars` 自定义 @anlyyao @liweijie0812 ([#4185](https://github.com/Tencent/tdesign-miniprogram/pull/4185))
- `Picker`: 修复 `popupProps.showOverlay` 无效 @anlyyao ([#4203](https://github.com/Tencent/tdesign-miniprogram/pull/4203))
- `Popover`: 修复控制台告警问题 @Wesley-0808 ([#4169](https://github.com/Tencent/tdesign-miniprogram/pull/4169))
- `Upload`: 修复拖拽结束后拖拽元素 `zIndex` 异常 @anlyyao ([#4199](https://github.com/Tencent/tdesign-miniprogram/pull/4199))

## 🌈 1.12.1 `2025-12-31`

### 🚀 Features

- `Navbar`: 新增 `placeholder` 属性，默认值为 `false`；新增 `zIndex` 属性，默认值为 `1` @anlyyao ([#4116](https://github.com/Tencent/tdesign-miniprogram/pull/4116))
- `TabBar`: 新增 `placeholder` 属性，默认值为 `false`；新增 `zIndex` 属性，默认值为 `1` @anlyyao ([#4116](https://github.com/Tencent/tdesign-miniprogram/pull/4116))
- `Badge`: @anlyyao ([#4137](https://github.com/Tencent/tdesign-miniprogram/pull/4137))
  - `shape` 属性新增 `ribbon-right/ribbon-left/triangle-right/triangle-left` 可选项，其中 `ribbon` 与 `ribbon-right` 等效
  - 优化 `ribbon` 实现，改用 `background: linear-gradient()`，移除伪元素相关样式
- `Popover`: 新增 `fixed` API，适用于触发元素为 `fixed` 场景。⚠️ 当触发元素为 `fixed` 时，除了需要显示指定 `fixed` 属性为 `true`，还需在触发元素层添加 `t-popover-wrapper--fixed` 类，用于定位触发元素。@Wesley-0808 ([#4114](https://github.com/Tencent/tdesign-miniprogram/pull/4114))
- `Search`: @anlyyao ([#4150](https://github.com/Tencent/tdesign-miniprogram/pull/4150))
  - 确保点击清空按钮后，组件内容清空但保持聚焦
  - 新增 `cursor-color` 属性

### 🐞 Bug Fixes

- `ChatContent`: 修复角色为 `system` 时文本颜色错误 @anlyyao ([#4112](https://github.com/Tencent/tdesign-miniprogram/pull/4112))
- `Toast`: 修复 `Toast` 嵌套调用时 `close` 回调陷入循环的问题 @anlyyao ([#4110](https://github.com/Tencent/tdesign-miniprogram/pull/4110))
- `Attachments`: 修复删除按钮在华为 `pure70` 机型上显示不完整的问题 @waiterxiaoyy ([#4124](https://github.com/Tencent/tdesign-miniprogram/pull/4124))
- `DateTimePicker`: 修复插槽名重复导致的控制台告警 @anlyyao ([#4126](https://github.com/Tencent/tdesign-miniprogram/pull/4126))
- `Picker`:
  - 优化性能减少掉帧 @jarmywang @Boomkaa ([#4120](https://github.com/Tencent/tdesign-miniprogram/pull/4120))
  - 修复平铺模式 `value` 变化未能准确监听 @jarmywang ([#4120](https://github.com/Tencent/tdesign-miniprogram/pull/4120))
- `ColorPicker`: 补充 `styleIsolation` 配置项，解决外部样式无法覆盖组件样式问题 @anlyyao ([#4138](https://github.com/Tencent/tdesign-miniprogram/pull/4138))
- `SwipeCell`: 消除 `IntersectionObserver is using slowest path` 警告 @anlyyao ([#4139](https://github.com/Tencent/tdesign-miniprogram/pull/4139))
- `Tabs`: 消除 `IntersectionObserver is using slowest path` 警告 @anlyyao ([#4139](https://github.com/Tencent/tdesign-miniprogram/pull/4139))
- `Progress`: @anlyyao ([#4153](https://github.com/Tencent/tdesign-miniprogram/pull/4153))
  - 修复深色模式下环形进度条内部背景色错误
  - 修复环形进度条内部文本间距错误

## 🌈 1.12.0 `2025-12-05`

### 🚀 Features

- `ChatList`: 新增 `ChatList` 对话列表组件 @zydemail @liuding0304 @goldjunkrat @waiterxiaoyy @mimaoxiao @zhangjiaoalice ([#4010](https://github.com/Tencent/tdesign-miniprogram/pull/4010))
- `ChatSender`: 新增 `ChatSender` 对话输入组件 @zydemail @liuding0304 @goldjunkrat @waiterxiaoyy @mimaoxiao @zhangjiaoalice ([#4010](https://github.com/Tencent/tdesign-miniprogram/pull/4010))
- `ChatMessage`: 新增 `ChatMessage` 对话消息体组件 @zydemail @liuding0304 @goldjunkrat @waiterxiaoyy @mimaoxiao @zhangjiaoalice ([#4010](https://github.com/Tencent/tdesign-miniprogram/pull/4010))
- `ChatActionbar`: 新增 `ChatActionbar` 对话操作组件 @zydemail @liuding0304 @goldjunkrat @waiterxiaoyy @mimaoxiao @zhangjiaoalice ([#4010](https://github.com/Tencent/tdesign-miniprogram/pull/4010))
- `ChatMarkdown`: 新增 `ChatMarkdown` `Markdown` 内容组件 @zydemail @liuding0304 @goldjunkrat @waiterxiaoyy @mimaoxiao @zhangjiaoalice ([#4010](https://github.com/Tencent/tdesign-miniprogram/pull/4010))
- `ChatThinking`: 新增 `ChatThinking` 思考过程组件 @zydemail @liuding0304 @goldjunkrat @waiterxiaoyy @mimaoxiao @zhangjiaoalice ([#4010](https://github.com/Tencent/tdesign-miniprogram/pull/4010))
- `ChatLoading`: 新增 `ChatLoading` 对话加载组件 @zydemail @liuding0304 @goldjunkrat @waiterxiaoyy @mimaoxiao @zhangjiaoalice ([#4010](https://github.com/Tencent/tdesign-miniprogram/pull/4010))
- `Attachments`: 新增 `Attachments` 文件附件组件 @zydemail @liuding0304 @goldjunkrat @waiterxiaoyy @mimaoxiao @zhangjiaoalice ([#4010](https://github.com/Tencent/tdesign-miniprogram/pull/4010))
- `ChatContent`: 新增 `ChatContent` 对话正文组件 @zydemail @liuding0304 @goldjunkrat @waiterxiaoyy @mimaoxiao @zhangjiaoalice ([#4010](https://github.com/Tencent/tdesign-miniprogram/pull/4010))
- `Popover`: 新增 `Popover` 组件 @Wesley-0808 ([#4049](https://github.com/Tencent/tdesign-miniprogram/pull/4049))
- `ImageViewer`: 新增 `image-props` 属性 @betavs ([#4078](https://github.com/Tencent/tdesign-miniprogram/pull/4078))
- `ActionSheet`: `item` 属性补充 `description` 字段 @anlyyao ([#4096](https://github.com/Tencent/tdesign-miniprogram/pull/4096))

### 🐞 Bug Fixes

- `BackTop`: 修复文本字重错误 @anlyyao ([#4061](https://github.com/Tencent/tdesign-miniprogram/pull/4061))
- `ColorPicker`: 修复组件深色模式背景、边框、文本色错误 @anlyyao ([#4061](https://github.com/Tencent/tdesign-miniprogram/pull/4061))
- `Grid`: 修复 `column` 小于 4 或大于 4 时，文本字号大小错误 @anlyyao ([#4061](https://github.com/Tencent/tdesign-miniprogram/pull/4061))
- `Badge`: 修复 `count` 插槽异常 @anlyyao ([#4085](https://github.com/Tencent/tdesign-miniprogram/pull/4085))
- `Picker`: 修复 `keys` 动态变更时，子项列表数据不显示 @anlyyao ([#4084](https://github.com/Tencent/tdesign-miniprogram/pull/4084))
- `Upload`: @anlyyao ([#4087](https://github.com/Tencent/tdesign-miniprogram/pull/4087))
  - 修复企业微信/桌面端环境中部分机型无法唤起上传
  - 修复当 `request-method` 返回 `Promise` 时，无法上传的问题
- `ActionSheet`: @anlyyao ([#4096](https://github.com/Tencent/tdesign-miniprogram/pull/4096))
  - 修复左对齐场景下，子项 `border` 左间距错误
  - 修复 `grid` 主题 + 无 `description` 描述文本场景下，顶部间距错误
  - `list` 主题最后一项不应设置底边框
  - 修复 `item` 属性的 `disabled` 配置无效
- `Toast`: 修复弹窗与遮罩消失不同步的问题 @Boomkaa ([#4103](https://github.com/Tencent/tdesign-miniprogram/pull/4103))

### 🚧 Others

- ⚠️ chore: 改用 `Font token`，组件级 CSS Vars 有调整，涉及组件有：`ActionSheet`、`Badge`、`Calendar`、`Cascader` 等 30+ 组件
- ⚠️chore: `--td-xx-icon-font-size` 统一更名为 `--td-xx-icon-size`，涉及组件有 `BackTop`、`Button`、`Cell`、`Empty`、`Grid`、`ImageViewer`、`NoticeBar`、`Progress`、`Result`、`Search` 和 `Upload`，共计 11 个组件

## 🌈 1.11.2 `2025-11-12`

### 🚀 Features

- `Picker`:
  - ⚠️ `itemHeight` 默认单位改用 `px`，避免单位转换带来的精度问题 @anlyyao ([#4052](https://github.com/Tencent/tdesign-miniprogram/pull/4052))
  - 新增 `visibleItemCount` 属性，可自定义可视区域 `PickerItem` 的子项个数 @anlyyao ([#4052](https://github.com/Tencent/tdesign-miniprogram/pull/4052))
  - 优化大量数据时列表滚动性能 @jarmywang ([#4014](https://github.com/Tencent/tdesign-miniprogram/pull/4014))
- `Calendar`: 新增 `allowSameDay` 属性，允许 `type='range'` 场景的起止时间相同 @anlyyao ([#4045](https://github.com/Tencent/tdesign-miniprogram/pull/4045))
- `Cascader`: 支持通过 `keys` 属性定义 `children / disabled` 在 `options` 中对应的字段别名 @anlyyao ([#4044](https://github.com/Tencent/tdesign-miniprogram/pull/4044))

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
- `PickerItem`: 子项支持 `icon` 属性 @anlyyao ([#3930](https://github.com/Tencent/tdesign-miniprogram/pull/3930))
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
- `QRCode`: 修复中心二维码位置偏移 @SinzoL ([#3899](https://github.com/Tencent/tdesign-miniprogram/pull/3899))

## 🌈 1.10.1 `2025-08-22`

### 🚀 Features

- `Textarea`: 新增 `cursorColor` 属性，仅在 `Skyline` 下有效 @anlyyao ([#3832](https://github.com/Tencent/tdesign-miniprogram/pull/3832))
- `Button`:
  - 新增 `getrealtimephonenumber` 事件 @novlan1 ([#3845](https://github.com/Tencent/tdesign-miniprogram/pull/3845))
  - 新增 `createliveactivity` 事件 @anlyyao ([#3845](https://github.com/Tencent/tdesign-miniprogram/pull/3845))

### 🐞 Bug Fixes

- `ImageViewer`: 移除 `backgroundColor` 属性默认值，导航背景色固定为 `#000`，遮罩背景色使用 `@mask-active` @anlyyao ([#3843](https://github.com/Tencent/tdesign-miniprogram/pull/3843))
- `Toast`: 修复即将关闭时再次触发显示导致之后的触发无效的问题 @betavs ([#3841](https://github.com/Tencent/tdesign-miniprogram/pull/3841))
- `Stepper`: 结合 `dialog` 组件使用时，输入值后键盘弹起状态下点击弹窗确认按钮关闭弹窗后 `change` 事件才触发的问题 @betavs ([#3804](https://github.com/Tencent/tdesign-miniprogram/pull/3804))
- `Collapse`: 修复 `--td-collapse-border-color` 无效的问题 @SinzoL ([#3862](https://github.com/Tencent/tdesign-miniprogram/pull/3862))
- `PullDownRefresh`: 处理容器隐藏状态下高度计算异常的问题 @betavs ([#3863](https://github.com/Tencent/tdesign-miniprogram/pull/3863))
- `Skeleton`: 骨架屏动画`animation-delay` 属性修改为 `0s` @anlyyao ([#3853](https://github.com/Tencent/tdesign-miniprogram/pull/3853))

### 🚧 Others

- `Cell`: 组件边框样式新增 `.t-cell--bordered` 移除 `.t-cell--borderless` 类名 @SinzoL ([#3862](https://github.com/Tencent/tdesign-miniprogram/pull/3862))

## 🌈 1.10.0 `2025-08-01`

### 🚀 Features

- `QRCode`: 新增`QRCode`组件 @SinzoL ([#3780](https://github.com/Tencent/tdesign-miniprogram/pull/3780)) ⚡

### 🐞 Bug Fixes

- `Calendar`: 修复 `value` 更新后翻页模式日历面板数据不更新的问题 @anlyyao ([#3800](https://github.com/Tencent/tdesign-miniprogram/pull/3800))
- `Skeleton`: 修复 `delay` 设置较大时组件未按预期消失的问题 @betavs ([#3793](https://github.com/Tencent/tdesign-miniprogram/pull/3793))
- `Switch`: 修复 `loading` 颜色、`dot` 滑块禁用态/深色模式背景色错误 @anlyyao ([#3802](https://github.com/Tencent/tdesign-miniprogram/pull/3802))
- `ActionSheet`: 修复页面跳转返回后再点击不显示问题 @Boomkaa ([#3796](https://github.com/Tencent/tdesign-miniprogram/pull/3796))
- `Toast`: 修复 `Toast` 已隐藏，页面无法点击问题 @Boomkaa ([#3796](https://github.com/Tencent/tdesign-miniprogram/pull/3796))
- `NoticeBar`: 修正警告主题图标 @liweijie0812 ([#3812](https://github.com/Tencent/tdesign-miniprogram/pull/3812))

### 🚧 Others

- `CSS`: 重命名圆角与字体部分 `CSS Vars` ，如 `--td-radius-extra-large` 变更为 `--td-radius-extraLarge` @anlyyao ([#3809](https://github.com/Tencent/tdesign-miniprogram/pull/3809))

## 🌈 1.9.7 `2025-07-10`

### 🚀 Features

- `Calendar`: 新增 `readonly` 属性 @anlyyao ([#3752](https://github.com/Tencent/tdesign-miniprogram/pull/3752))
- `Indexes`:
  - 新增 `current` 属性，支持非受控模式，用于自定义索引列表激活项 @anlyyao ([#3761](https://github.com/Tencent/tdesign-miniprogram/pull/3761))
  - 丰富组件 `CSS Variables` @anlyyao ([#3760](https://github.com/Tencent/tdesign-miniprogram/pull/3760))
- `Popup`: 新增 `--td-popup-transition` 样式变量 @betavs ([#3775](https://github.com/Tencent/tdesign-miniprogram/pull/3775))
- `Navbar`: 新增 `--td-navbar-background` 样式变量 @anlyyao ([#3764](https://github.com/Tencent/tdesign-miniprogram/pull/3764))

### 🐞 Bug Fixes

- `PickerItem`: 解决 `options` 数据源更新后点击确认按钮 `Picker` 组件的 `change` 事件返回值不正确 @anlyyao ([#3759](https://github.com/Tencent/tdesign-miniprogram/pull/3759))
- `Calendar`: 修复因 `class` 关键字导致在 `Mpx` 框架中编译报错 @anlyyao ([#3781](https://github.com/Tencent/tdesign-miniprogram/pull/3781))

### 🚧 Others

- `site`: 修复官网组件预览二维码路径错误 @anlyyao ([#3751](https://github.com/Tencent/tdesign-miniprogram/pull/3751))

## 🌈 1.9.6 `2025-06-25`

### 🚀 Features

- `Upload`: 支持视频预览 @anlyyao ([#3741](https://github.com/Tencent/tdesign-miniprogram/pull/3741))
- `Icon`: 自定义 `icon`名称支持使用下划线 @zhonghuipro ([#3744](https://github.com/Tencent/tdesign-miniprogram/pull/3744))

### 🐞 Bug Fixes

- `CollapsePanel`: 修复部分 `css` 变量无效的问题 @betavs ([#3731](https://github.com/Tencent/tdesign-miniprogram/pull/3731))
- `Grid`: 修复 `GridItem` 项数是 `columns` 列数的非整数倍时边框样式错误 @anlyyao ([#3740](https://github.com/Tencent/tdesign-miniprogram/pull/3740))

### 🚧 Others

- `build`: 修复 `1.9.0` 版本在 `Windows` 环境下 `WXSS` 文件编译错误 @anlyyao ([#3719](https://github.com/Tencent/tdesign-miniprogram/pull/3719))
- `site`: 官网支持单组件 `Changelog` @RylanBot ([#3725](https://github.com/Tencent/tdesign-miniprogram/pull/3725))

## 🌈 1.9.5 `2025-06-13`

### 🚀 Features

- `Picker`:
  - 新增 `content` 插槽，用于处理空数据场景 @anlyyao ([#3711](https://github.com/Tencent/tdesign-miniprogram/pull/3711))
  - 支持点击选中 @anlyyao ([#3712](https://github.com/Tencent/tdesign-miniprogram/pull/3712))
- `Fab`: 未显示传入 `icon` 和 `text` 时将启用默认插槽，用于自定义悬浮按钮内容，此时 `buttonProps` 将失效 @novlan1 ([#3684](https://github.com/Tencent/tdesign-miniprogram/pull/3684))
- `Upload`: 新增 `preview` 属性，用于关闭/开启图片预览 @anlyyao ([#3714](https://github.com/Tencent/tdesign-miniprogram/pull/3714))

### 🐞 Bug Fixes

- `Toast`: 使用 `flex` 替换 `fit-content`，兼容 `skyline` 场景 @anlyyao ([#3710](https://github.com/Tencent/tdesign-miniprogram/pull/3710))
- `TreeSelect`: 修复传入非标准 `options` 数据源时组件控制台报错 @anlyyao ([#3708](https://github.com/Tencent/tdesign-miniprogram/pull/3708))
- `Rate`: 修复点选全星时弹框不显示 @Boomkaa ([#3715](https://github.com/Tencent/tdesign-miniprogram/pull/3715))

## 🌈 1.9.4 `2025-05-29`

### 🚀 Features

- `Input`: `cursor` 属性默认值取 `-1`，确保光标在 `value` 值末尾 @anlyyao ([#3672](https://github.com/Tencent/tdesign-miniprogram/pull/3672))
- `Search`: `cursor` 属性默认值取 `-1`，确保光标在 `value` 值末尾 @anlyyao ([#3672](https://github.com/Tencent/tdesign-miniprogram/pull/3672))
- `TreeSelect`: 允许 `options` 的 `children` 未定义，同时增强 `keys` 属性，支持为 `disabled / children` 字段自定义别名 @anlyyao ([#3671](https://github.com/Tencent/tdesign-miniprogram/pull/3671))

### 🐞 Bug Fixes

- `Calendar`: 修复当 `switchMode !== 'none'` 时，重置空值后选中的状态未更新的问题 @betavs ([#3676](https://github.com/Tencent/tdesign-miniprogram/pull/3676))
- `Tabs`: 修复 `1.8.8` 中 `bottomLineMode` 为 `auto/full` 时线宽计算错误 @anlyyao ([#3668](https://github.com/Tencent/tdesign-miniprogram/pull/3668))
- `ImageViewer`: 修复图片懒加载无效 。同时新增 `lazy` 属性，开启后会预加载当前图片、相邻图片 @anlyyao ([#3674](https://github.com/Tencent/tdesign-miniprogram/pull/3674))
- `Upload`: 修复 `max = 0` 时上传数量仍受限，以及 `max =  0 和 source="messageFile"` 时无法上传的问题 @anlyyao ([#3679](https://github.com/Tencent/tdesign-miniprogram/pull/3679))

## 🌈 1.9.3 `2025-05-23`

### 🐞 Bug Fixes

- `Slider`: 修复设置 `min` 值后 `marks` 刻度对应位置错误的问题 @betavs ([#3653](https://github.com/Tencent/tdesign-miniprogram/pull/3653))
- `DateTimePicker`: 修复勾选 `SWC` 编译脚本文件时组件功能异常 @Boomkaa ([#3654](https://github.com/Tencent/tdesign-miniprogram/pull/3654))
- `ColorPicker`: 修复勾选 `SWC` 编译脚本文件时组件功能异常 @betavs ([#3654](https://github.com/Tencent/tdesign-miniprogram/pull/3654))
- `Link`: 修复在 `navigatorProps` 中只指定 `appId` 或者 `shortLink` 且 `target="miniProgram"` 时样式为禁用状态的问题 @CrazyOrr @betavs ([#3643](https://github.com/Tencent/tdesign-miniprogram/pull/3643))
- `TreeSelect`: 修复 `customValue` 为空数组时多选报错 @anlyyao ([#3662](https://github.com/Tencent/tdesign-miniprogram/pull/3662))

### 🚧 Others

- `fix`: 修复 `1.9.0` 导致的组件类型丢失问题 @anlyyao ([#3661](https://github.com/Tencent/tdesign-miniprogram/pull/3661))

## 🌈 1.9.2 `2025-05-09`

### 🐞 Bug Fixes

- `PullDownRefresh`: 修复配置 `scroll-into-view` 不生效问题 @Boomkaa ([#3633](https://github.com/Tencent/tdesign-miniprogram/pull/3633))
- `DropdownItem`: 修复 `1.9.1` 带来的高度塌陷问题 @betavs ([#3635](https://github.com/Tencent/tdesign-miniprogram/pull/3635))
- `Dialog`: 修复命令式调用时`wxml` 模版中组件属性不生效 @Boomkaa ([#3622](https://github.com/Tencent/tdesign-miniprogram/pull/3622))

## 🌈 1.9.1 `2025-04-27`

### 🚀 Features

- `Icon`: 新增 `logo-miniprogram`、`logo-cnb`、`seal`、`quote` 图标 @taowensheng1997 @uyarn ([#3608](https://github.com/Tencent/tdesign-miniprogram/pull/3608))
- `Input`: 新增 `extra` 插槽，用于自定义右侧额外的信息 @Boomkaa ([#3614](https://github.com/Tencent/tdesign-miniprogram/pull/3614))
- `Cascader`: 新增 `header` 插槽，用于自定义内容头部 @anlyyao ([#3617](https://github.com/Tencent/tdesign-miniprogram/pull/3617))

### 🐞 Bug Fixes

- `Icon`: 优化多个文件相关图标的绘制效果，修复 `gesture-right-slip` 的绘制问题 @uyarn([#3608](https://github.com/Tencent/tdesign-miniprogram/pull/3608))
- `DropdownItem`: 修复动态修改 `disabled` 属性样式未更新 @Boomkaa ([#3612](https://github.com/Tencent/tdesign-miniprogram/pull/3612))

## 🌈 1.9.0 `2025-04-23`

### 🚀 Features

- `DateTimePicker`: 支持 `showWeek` 属性 @anlyyao ([#3565](https://github.com/Tencent/tdesign-miniprogram/pull/3565) [#3570](https://github.com/Tencent/tdesign-miniprogram/pull/3570))
- `Dialog`: 命令式调用返回触发器数据 @betavs ([#3579](https://github.com/Tencent/tdesign-miniprogram/pull/3579))
- `Progress`: 新增 `size` 属性，支持自定义环形进度条尺寸 @anlyyao ([#3604](https://github.com/Tencent/tdesign-miniprogram/pull/3604))
- `Divider`: 丰富 `css vars`，支持自定义分割线高度 @anlyyao ([#3603](https://github.com/Tencent/tdesign-miniprogram/pull/3603))
- `Upload`: 组件新增 `addBtn` 和 `removeBtn` 属性，并支持在文件中设置单个图片的 `removeBtn` 属性 @anlyyao ([#3605](https://github.com/Tencent/tdesign-miniprogram/pull/3605))

### 🐞 Bug Fixes

- `RadioGroup`: 修复无法在 `form` 中获取数据的问题 @Boomkaa ([#3558](https://github.com/Tencent/tdesign-miniprogram/pull/3558))
- `Switch`: 修复深色模式下禁用态背景色错误 @anlyyao ([#3564](https://github.com/Tencent/tdesign-miniprogram/pull/3564))
- `CountDown`: 异步获取 `time` 导致触发 `finish` 事件 @anlyyao ([#3580](https://github.com/Tencent/tdesign-miniprogram/pull/3580))
- `Steps`: 修复 `theme` 和 `sequence` 属性值动态更新后组件未重新渲染的问题 @betavs ([#3584](https://github.com/Tencent/tdesign-miniprogram/pull/3584))
- `Picker`: 修复 `keys` 属性无效的问题 @anlyyao ([#3585](https://github.com/Tencent/tdesign-miniprogram/pull/3585))
- `Popup`: 当 `placement` 为 `'left' | 'right'` 配合 `usingCustomNavbar` 时，容器高度溢出的问题 @betavs ([#3586](https://github.com/Tencent/tdesign-miniprogram/pull/3586))
- `DateTimePicker`: 修复 `start` 和 `end` 属性默认值错误，以系统当前时间为基准 @anlyyao ([#3594](https://github.com/Tencent/tdesign-miniprogram/pull/3594))
- `PullDownRefresh`: 动态设置容器最大高度错误的问题 @betavs ([#3592](https://github.com/Tencent/tdesign-miniprogram/pull/3592))
- `TreeSelect`: 修复多选场景下跨分支点选时选中值不完整 @anlyyao ([#3600](https://github.com/Tencent/tdesign-miniprogram/pull/3600))

### 🚧 Others

- `chore`: 移除组件对 `lodash` 的依赖，调整样式引入方式，编译产物移除 `md` 文档并加入文件压缩 @anlyyao ([#3555](https://github.com/Tencent/tdesign-miniprogram/pull/3555))
- `site`: 站点接入主题生成器 @RylanBot ([#3527](https://github.com/Tencent/tdesign-miniprogram/pull/3527))

## 🌈 1.8.8 `2025-03-23`

### 🐞 Bug Fixes

- `StepItem`: 移除页面中多余的字符内容 @runoob-coder ([#3528](https://github.com/Tencent/tdesign-miniprogram/pull/3528))
- `Tabs`: 优化指示器初始显示 @jarmywang ([#3525](https://github.com/Tencent/tdesign-miniprogram/pull/3525))
- `Picker`: 修复 `API` 文档错误，`confirmBtn` 和 `cancelBtn` 属性仅支持 `string` 和 `boolean` 类型 @anlyyao ([#3540](https://github.com/Tencent/tdesign-miniprogram/pull/3540))
- `Cascader`: 允许 `children` 为空数组，便于支持数据异步场景 @liuffff ([#3542](https://github.com/Tencent/tdesign-miniprogram/pull/3542))

### 🚧 Others

- `other(theme)`: 补充 `--td-brand-color-x` 系列色板 @anlyyao ([#3531](https://github.com/Tencent/tdesign-miniprogram/pull/3531))

## 🌈 1.8.7 `2025-03-14`

### 🚀 Features

- `Link`: 支持 `disabled` 动态变更 @anlyyao ([#3496](https://github.com/Tencent/tdesign-miniprogram/pull/3496))
- `DateTimePicker`: 新增 `formatter` 属性 @anlyyao ([#3500](https://github.com/Tencent/tdesign-miniprogram/pull/3500))
- `Tabs`: 新增 `bottomLineMode` 属性；`TabPanel` 新增 `lazy` 属性 @SkylerXie ([#3428](https://github.com/Tencent/tdesign-miniprogram/pull/3428))

### 🐞 Bug Fixes

- `Radio`: 修复横向单选框样式错误 @anlyyao ([#3497](https://github.com/Tencent/tdesign-miniprogram/pull/3497))
- `Guide`: 修复多个场景组件定位错误 @anlyyao ([#3499](https://github.com/Tencent/tdesign-miniprogram/pull/3499))
- `Picker`: 修复 `format` 属性无效 @anlyyao ([#3500](https://github.com/Tencent/tdesign-miniprogram/pull/3500))
- `StepItem`: 修复 `title` 插槽在 `skyline` 渲染下展示偏右的问题 @runoob-coder ([#3519](https://github.com/Tencent/tdesign-miniprogram/pull/3519))
- `Toast`: 新增 `warning` 主题类型 @theEfrain08 ([#3517](https://github.com/Tencent/tdesign-miniprogram/pull/3517))

### 🚧 Others

- `other`: 修复因 `button` 模版带来的控制台告警 @anlyyao ([#3523](https://github.com/Tencent/tdesign-miniprogram/pull/3523))

## 🌈 1.8.6 `2025-02-21`

### 🚀 Features

- `Textarea`:
  - 新增 `placeholderClass` 属性 @anlyyao ([#3468](https://github.com/Tencent/tdesign-miniprogram/pull/3468))
  - 新增 `readonly` 与 `allowInputOverMax` 属性 @richardji202 ([#3474](https://github.com/Tencent/tdesign-miniprogram/pull/3474))
- `Input`: 新增 `allowInputOverMax` 属性 @yangbai1991 ([#3473](https://github.com/Tencent/tdesign-miniprogram/pull/3473))
- `RadioGroup`: 新增 `readonly` 属性 @yangbai1991 ([#3470](https://github.com/Tencent/tdesign-miniprogram/pull/3470))

### 🐞 Bug Fixes

- `Dialog`: 修复圆角样式错误，并新增 `--td-dialog-border-radius` @anlyyao ([#3469](https://github.com/Tencent/tdesign-miniprogram/pull/3469))
- `Calendar`: 修复 `confirm-btn` 透传缺失部分参数的问题 @betavs ([#3464](https://github.com/Tencent/tdesign-miniprogram/pull/3464))
- `Cell`: 修复部分样式错误，并更新 `align` 属性描述 @anlyyao ([#3466](https://github.com/Tencent/tdesign-miniprogram/pull/3466))
- `Input`: 移除 `--td-input-border-radius` @betavs ([#3463](https://github.com/Tencent/tdesign-miniprogram/pull/3463))

### 🚧 Others

- `WXS`: 所有 `wxs` 文件模块命名 `this` 改为 `_this` @jarmywang ([#3488](https://github.com/Tencent/tdesign-miniprogram/pull/3488))

## 🌈 1.8.5 `2025-01-16`

### 🚀 Features

- `TreeSelect`: 新增 `customValue` 属性，自定义选中值，用于弥补 `value` 为空数组场景 @anlyyao ([#3400](https://github.com/Tencent/tdesign-miniprogram/pull/3400))
- `Loading`: 新增 `fullscreen` 属性，支持全屏加载 @TeacherDingTing ([#3427](https://github.com/Tencent/tdesign-miniprogram/pull/3427))
- `ColorPicker`: 新增 `fixed` 属性， @anlyyao ([#3426](https://github.com/Tencent/tdesign-miniprogram/pull/3426))
- `Guide`: 支持自定义计数器 @demoadminjie ([#3439](https://github.com/Tencent/tdesign-miniprogram/pull/3439))
- `Icon`: 新增 `logo-alipay`、`logo-behance-filled` 等图标，修改 `logo-wecom` 图标，移除不合理的 `logo-wecom-filled` 图标 @anlyyao ([#3434](https://github.com/Tencent/tdesign-miniprogram/pull/3434))

### 🐞 Bug Fixes

- `Guide`: 修正返回按钮出现时机，并新增 `hideBack` 属性 @anlyyao ([#3403](https://github.com/Tencent/tdesign-miniprogram/pull/3403))
- `Message`: `link` 参数类型申明缺失的问题 @betavs ([#3412](https://github.com/Tencent/tdesign-miniprogram/pull/3412))
- `SwipeCell`: 修复在 `iOS` 手机中导致 `scroll-view` 无法滚动问题 @jarmywang ([#3425](https://github.com/Tencent/tdesign-miniprogram/pull/3425))
- `Tabs`: 修复徽标激活态颜色错误 @anlyyao ([#3429](https://github.com/Tencent/tdesign-miniprogram/pull/3429))
- `TabBar`: 修复子项数量大于 3 时子项未按预期调整内边距 @anlyyao ([#3436](https://github.com/Tencent/tdesign-miniprogram/pull/3436))
- `Search`: 修复禁用态样式错误 @anlyyao ([#3437](https://github.com/Tencent/tdesign-miniprogram/pull/3437))
- `Image`: 未正确触发组件数据更新的问题 @betavs ([#3443](https://github.com/Tencent/tdesign-miniprogram/pull/3443))
- `Picker`:
  - 修复 `PickerItem` 项 `label` 超出未省略问题 @anlyyao ([#3415](https://github.com/Tencent/tdesign-miniprogram/pull/3415))
  - 规避 Skyline render 下深/浅模式透明色渲染不一致问题 @betavs ([#3449](https://github.com/Tencent/tdesign-miniprogram/pull/3449))
- `Stepper`: 修复 `Skyline` 中增加和减少按钮动态更新时禁用态样式错误 @anlyyao ([#3454](https://github.com/Tencent/tdesign-miniprogram/pull/3454))
- `ActionSheet`: 数据更新后未更新视图的问题 @betavs ([#3438](https://github.com/Tencent/tdesign-miniprogram/pull/3438))
- `Calendar`: 修复 `value` 不在 `[minDate, maxDate ]` 内时带翻页功能的日历面板空白问题 @anlyyao ([#3457](https://github.com/Tencent/tdesign-miniprogram/pull/3457))
- `Input`: `cursorColor` 属性默认值设 `#0052d9`，修复安卓在 Skyline 下光标消失的问题 @anlyyao ([#3453](https://github.com/Tencent/tdesign-miniprogram/pull/3453))
- `ColorPicker`: 修复动态设置 `value` 值无效的问题 @anlyyao ([#3426](https://github.com/Tencent/tdesign-miniprogram/pull/3426))

### 🚧 Others

- `Mpx`: 修复在 `Mpx` 框架中编译报错问题 @anlyyao ([#3416](https://github.com/Tencent/tdesign-miniprogram/pull/3416))

## 🌈 1.8.4 `2024-12-25`

### 🚀 Features

- `Calendar`: 新增 `panel-change` 事件，切换月或年时触发（`switch-mode` 不为 `none` 时有效） @anlyyao ([#3385](https://github.com/Tencent/tdesign-miniprogram/pull/3385))
- `Avatar`: `size` 属性支持 `rpx` 单位 @anlyyao ([#3387](https://github.com/Tencent/tdesign-miniprogram/pull/3387))
- `Fab`: 新增 `dragStart` 和 `dragEnd` 事件 @anlyyao ([#3388](https://github.com/Tencent/tdesign-miniprogram/pull/3388))

### 🐞 Bug Fixes

- `ColorPicker`: 修复 `alpha` 滑轨精度丢失的问题 @novlan1 ([#3390](https://github.com/Tencent/tdesign-miniprogram/pull/3390))
- `Calendar`: 修复使用 `glass-easel` 渲染框架后，组件年月日起不显示 @anlyyao ([#3392](https://github.com/Tencent/tdesign-miniprogram/pull/3392))
- `SwipeCell`: 解决 `PullDownRefresh` 包裹 `SwipeCell` 时手势冲突 @jarmywang ([#3393](https://github.com/Tencent/tdesign-miniprogram/pull/3393))
- `PullDownRefresh`: 新增 `usingCustomNavbar` 属性，修复与 `Navbar` 同用遮挡底部问题 @jarmywang ([#3394](https://github.com/Tencent/tdesign-miniprogram/pull/3394))
- `TreeSelect`: 修复 `value` 为空数组时组件未渲染，同时补齐外部样式类 @anlyyao ([#3395](https://github.com/Tencent/tdesign-miniprogram/pull/3395))

## 🌈 1.8.3 `2024-12-19`

### 🚀 Features

- `TreeSelect`: 优化组件交互，支持首次渲染时滚动到选中项位置 @anlyyao ([#3364](https://github.com/Tencent/tdesign-miniprogram/pull/3364))

### 🐞 Bug Fixes

- `Dialog`: 部分参数类型声明缺失 @betavs ([#3357](https://github.com/Tencent/tdesign-miniprogram/pull/3357))
- `SideBar`: 修复激活项图标/文本色值错误 @anlyyao ([#3364](https://github.com/Tencent/tdesign-miniprogram/pull/3364))
- `Calendar`: 修复 `switchMode` 和 `maxDate` 同时使用时，翻页按钮状态错误 @anlyyao ([#3366](https://github.com/Tencent/tdesign-miniprogram/pull/3366))
- `Icon`: 补充异常捕获，修复开发工具控制台报错 @anlyyao ([#3370](https://github.com/Tencent/tdesign-miniprogram/pull/3370))
- `Guide`: 修复 `hideSkip` 属性无效 @anlyyao ([#3371](https://github.com/Tencent/tdesign-miniprogram/pull/3371))

## 🌈 1.8.2 `2024-12-11`

### 🚀 Features

- `DropdownItem`: 新增 `placement` 属性，用于调整复选框和内容相对位置，仅单选菜单栏有效 @anlyyao ([#3327](https://github.com/Tencent/tdesign-miniprogram/pull/3327))
- `Cascader`: 新增 `checkStrictly` 属性，父子节点选中状态不再关联，可各自选中或取消 @hkaikai ([#3333](https://github.com/Tencent/tdesign-miniprogram/pull/3333))
- `Calendar`: 支持 `switchMode` 属性，支持按年/月翻页 @anlyyao ([#3326](https://github.com/Tencent/tdesign-miniprogram/pull/3326))

### 🐞 Bug Fixes

- `DropdownMenu`: 修复部分 `css vars` 命名错误 @anlyyao ([#3338](https://github.com/Tencent/tdesign-miniprogram/pull/3338))
- `TabBar`: 修复文本 + 徽标使用场景时，文本被挤压问题 @anlyyao ([#3340](https://github.com/Tencent/tdesign-miniprogram/pull/3340))
- `Rate`: 修复禁用态下组件无法向上冒泡的问题 @anlyyao ([#3329](https://github.com/Tencent/tdesign-miniprogram/pull/3329))
- `Popup`: 处理`Skyline` 模式下微信开发者工具控制台报错 @betavs ([#3315](https://github.com/Tencent/tdesign-miniprogram/pull/3315))
- `Picker`: 在 `Skyline` 模式下样式异常 @betavs ([#3317](https://github.com/Tencent/tdesign-miniprogram/pull/3317))
- `NoticeBar`: 修复重复进入页面时出现非预期动画 @anlyyao ([#3346](https://github.com/Tencent/tdesign-miniprogram/pull/3346))

## 🌈 1.8.1 `2024-11-29`

### 🚀 Features

- `Progress`: 新增环形进度条相关的 `css vars` @betavs ([#3301](https://github.com/Tencent/tdesign-miniprogram/pull/3301))
- `Input`: 新增 `--td-input-align-items` 变量，支持自定义组件内容对齐方式 @anlyyao ([#3308](https://github.com/Tencent/tdesign-miniprogram/pull/3308))
- `ColorPicker`: 新增 `header` 和 `footer` 插槽，仅在 `usePopup` 为 `true` 时有效 @anlyyao ([#3310](https://github.com/Tencent/tdesign-miniprogram/pull/3310))

### 🐞 Bug Fixes

- `DropdownItem`: 修复默认插槽无效，并补充 `footer` 具名插槽 @anlyyao ([#3309](https://github.com/Tencent/tdesign-miniprogram/pull/3309))
- `Navbar`: 修复 `getRect` 耗时过长导致 `navbar` 位置不准确问题，并兼容部分机型因精度问题导致的翻译功能完成后标题仍然隐藏的问题 @jarmywang @anlyyao @betavs ([#3286](https://github.com/Tencent/tdesign-miniprogram/pull/3286))

## 🌈 1.8.0 `2024-11-13`

### 🚀 Features

- `Icon`: 新增 907 个新图标 ⚡ 另外: `blockchain` 重命名为 `transform-1` , `gesture-pray-1` 重命名为 `gesture-open` , `gesture-ranslation-1` 重命名为 `wave-bye` , `gesture-up-1` 重命名为 `gesture-typing` , `gesture-up-2` 重命名为 `gesture-right-slip` , `logo-wechat` 重命名为 `logo-wechat-stroke-filled` ; 移除`tree-list`、`logo-adobe-photoshop-1` 图标 @anlyyao ([#3279](https://github.com/Tencent/tdesign-miniprogram/pull/3279))
- `TabPanel`: 面板高度仅由其内容决定 @anlyyao ([#3280](https://github.com/Tencent/tdesign-miniprogram/pull/3280))
- `Calendar`: 新增 `localText` 属性，支持组件国际化 @anlyyao ([#3278](https://github.com/Tencent/tdesign-miniprogram/pull/3278))

### 🐞 Bug Fixes

- `Input`: 修复 `cursorColor` 属性无默认值的问题 @anlyyao ([#3272](https://github.com/Tencent/tdesign-miniprogram/pull/3272))
- `Progress`: 修复在 `skyline` 中标签右侧间距错误 @anlyyao ([#3283](https://github.com/Tencent/tdesign-miniprogram/pull/3283))

### 🚧 Others

- `other`: `getWindowInfo` 、 `getAppBaseInfo` 、 `getDeviceInfo` 等方法兼容单页模式使用 @anlyyao ([#3281](https://github.com/Tencent/tdesign-miniprogram/pull/3281))

## 🌈 1.7.1 `2024-11-08`

### 🚀 Features

- `Stepper`: 新增 `integer` 属性，支持输入小数 @anlyyao ([#3230](https://github.com/Tencent/tdesign-miniprogram/pull/3230))
- `DropdownItem`: 优化组件样式，当 `option` 为空时选项区域不占位 @anlyyao ([#3235](https://github.com/Tencent/tdesign-miniprogram/pull/3235))
- `Input`: 支持 `readonly` 属性 @anlyyao ([#3255](https://github.com/Tencent/tdesign-miniprogram/pull/3255))
- `ColorPicker`: 新增 `usePopup`、`visible`、`autoClose`、`style` 与 `customStyle` 等属性，新增 `close` 事件 @anlyyao ([#3260](https://github.com/Tencent/tdesign-miniprogram/pull/3260))
- `DateTimePicker`: 新增 `autoClose` 属性 @anlyyao ([#3263](https://github.com/Tencent/tdesign-miniprogram/pull/3263))

### 🐞 Bug Fixes

- `Icon`: 修复动态计算图片高度异常 @betavs ([#3228](https://github.com/Tencent/tdesign-miniprogram/pull/3228))
- `ActionSheet`: 为 `cancelText` 补充默认值 @anlyyao ([#3231](https://github.com/Tencent/tdesign-miniprogram/pull/3231))
- `Stepper`: 增加输入校验，修复使用第三方键盘时带来的格式问题，并修复禁用输入框样式 @anlyyao ([#3230](https://github.com/Tencent/tdesign-miniprogram/pull/3230))
- `Search`: 修复外部样式类 `t-class-clear` 及 `t-class-left` 无法修改图标大小的问题，并丰富 `css vars` @anlyyao ([#3238](https://github.com/Tencent/tdesign-miniprogram/pull/3238)) ([#3264](https://github.com/Tencent/tdesign-miniprogram/pull/3264))
- `Cascader`: 修复动态设置 `value` 而选项内容未更新问题 @jarmywang ([#3242](https://github.com/Tencent/tdesign-miniprogram/pull/3242))
- `PullDownRefresh`: 修复在 `iOS` 部分低系统中（如 15.4、14.2、14.1 等 ），提示语隐藏不完整的问题 @anlyyao ([#3239](https://github.com/Tencent/tdesign-miniprogram/pull/3239))
- `DateTimePicker`: 支持通过 `popupProps` 透传 `usingCustomNavbar` 属性，避免遮罩层挡住自定义导航栏 @anlyyao ([#3254](https://github.com/Tencent/tdesign-miniprogram/pull/3254))
- `Button`: 修复 `danger` + `disable` 时，文本颜色错误 @anlyyao ([#3261](https://github.com/Tencent/tdesign-miniprogram/pull/3261))
- `Rate`: 修复 `gap` 单位处理异常 @jarmywang ([#3259](https://github.com/Tencent/tdesign-miniprogram/pull/3259))

## 🌈 1.7.0 `2024-10-25`

### 🚀 Features

- `ColorPicker`: 新增 `ColorPicker` 组件 @novlan1 ([#3176](https://github.com/Tencent/tdesign-miniprogram/pull/3176))⚡
- `Fab`: 新增默认插槽 @anlyyao ([#3204](https://github.com/Tencent/tdesign-miniprogram/pull/3204))
- `Input`:
  - 新增 `cursorColor` 属性 @anlyyao ([#3211](https://github.com/Tencent/tdesign-miniprogram/pull/3211))
  - 支持 `format` 属性 @anlyyao ([#3213](https://github.com/Tencent/tdesign-miniprogram/pull/3213))
- `DateTimePicker`: 新增 `filter` 属性，支持自定义列选项内容 @anlyyao ([#3220](https://github.com/Tencent/tdesign-miniprogram/pull/3220))
- `Indexeds`: 优化交互样式，索引仅展示首字符，气泡支持展示索引内容 @anlyyao ([#3222](https://github.com/Tencent/tdesign-miniprogram/pull/3222))
- `Cascader`: `pick` 事件补充 `label` 参数 @anlyyao ([#3223](https://github.com/Tencent/tdesign-miniprogram/pull/3223))

### 🐞 Bug Fixes

- `Button`: 修复深色模式的默认幽灵按钮的边框色错误 @anlyyao ([#3200](https://github.com/Tencent/tdesign-miniprogram/pull/3200))
- `Icon`: 修复使用图片链接时偶发性出现字体图标的问题 @anlyyao ([#3216](https://github.com/Tencent/tdesign-miniprogram/pull/3216))
- `Upload`: 修复 `loading` 内容未居中问题 @anlyyao ([#3219](https://github.com/Tencent/tdesign-miniprogram/pull/3219))
- `Navbar`: 修复安卓中因精度带来的标题宽度计算错误，并优化标题左侧间距 @anlyyao ([#3217](https://github.com/Tencent/tdesign-miniprogram/pull/3217))

### 📝 Documentation

- `Fab`: 文档补充 `FAQ` 部分 @anlyyao ([#3215](https://github.com/Tencent/tdesign-miniprogram/pull/3215))

### 🚧 Others

- `WX`: 更新部分不在维护的`wx`接口，并兼容低版本 @anlyyao ([#3192](https://github.com/Tencent/tdesign-miniprogram/pull/3192))

## 🌈 1.6.2 `2024-10-12`

### 🚀 Features

- `Checkbox`: 新增 keys 可配置 options 的 value 和 label 的别名 @huxinhai ([#3154](https://github.com/Tencent/tdesign-miniprogram/pull/3154))

### 🐞 Bug Fixes

- `Button`: 修复文字按钮样式错误 @anlyyao ([#3163](https://github.com/Tencent/tdesign-miniprogram/pull/3163))
- `Checkbox`: 修复 `change` 事件中参数缺失的问题 @betavs ([#3157](https://github.com/Tencent/tdesign-miniprogram/pull/3157))
- `Dialog`: 修复更新按钮属性 `openType` 未重置问题 @jarmywang ([#3178](https://github.com/Tencent/tdesign-miniprogram/pull/3178))
- `Tabs`:
  - 修复开启 `animation` 时导致的面板滚动位置不准确问题 @anlyyao ([#3188](https://github.com/Tencent/tdesign-miniprogram/pull/3188))
  - 修复在 `skyline` 中无法滚动的问题 @anlyyao ([#3187](https://github.com/Tencent/tdesign-miniprogram/pull/3187))
- `Collapse`: 修复禁用+面板展开场景下面板展开态不正确，并处理多个样式问题 @anlyyao ([#3186](https://github.com/Tencent/tdesign-miniprogram/pull/3186))
- `Cell`: 修复 `arrow` 动态变更无效的问题 @anlyyao ([#3184](https://github.com/Tencent/tdesign-miniprogram/pull/3184))
- `Switch`: 修复深色模式下文本颜色错误 @anlyyao ([#3183](https://github.com/Tencent/tdesign-miniprogram/pull/3183))
- `PullDownRefresh`: 修复禁用下拉刷新导致的滑动事件无效 @anlyyao ([#3182](https://github.com/Tencent/tdesign-miniprogram/pull/3182))

## 🌈 1.6.1 `2024-09-14`

### 🚀 Features

- `Fab`: 新增 `yEdge` 属性，支持设置垂直方向边界限制 @anlyyao ([#3125](https://github.com/Tencent/tdesign-miniprogram/pull/3125))
- `PickerItem`: 支持插槽，自定义 `label` 后缀内容 @anlyyao ([#3127](https://github.com/Tencent/tdesign-miniprogram/pull/3127))
- `AvatarGroup`: 新增 `shape` 属性，新增 `collapsed-item-click` 事件 @anlyyao ([#3134](https://github.com/Tencent/tdesign-miniprogram/pull/3134))
- `RadioGroup`: 新增 `allowUncheck` 属性 @anlyyao ([#3140](https://github.com/Tencent/tdesign-miniprogram/pull/3140))

### 🐞 Bug Fixes

- `Slider`: `dragend` 事件增加返回 `value` @jarmywang ([#3112](https://github.com/Tencent/tdesign-miniprogram/pull/3112))
- `ImageViewer`:
  - 修复 `images` 长度更新导致 `index` 显示异常 @jarmywang ([#3111](https://github.com/Tencent/tdesign-miniprogram/pull/3111))
  - 修复滚动穿透问题 @dadtakesmefly ([#3146](https://github.com/Tencent/tdesign-miniprogram/pull/3146))
- `Tabs`: 使用 `hidden` 隐藏后显示仍能够正常显示指示器；移除文档中未实现的 `destroyOnHide` 属性 @jarmywang ([#3132](https://github.com/Tencent/tdesign-miniprogram/pull/3132))
- `AvatarGroup`: 修复 `size` 属性无效的问题，优化 `zIndex` 处理 @anlyyao ([#3134](https://github.com/Tencent/tdesign-miniprogram/pull/3134))
- `Image`: 修复图片在 `loading` 态时，加载错位 @huxinhai ([#3128](https://github.com/Tencent/tdesign-miniprogram/pull/3128))
- `Progress`: 修复环形进度条首次加载时，`strokeWidth` 线宽延迟显示的问题 @huxinhai ([#3139](https://github.com/Tencent/tdesign-miniprogram/pull/3139))
- `Radio`: 修复 `allowUncheck` 属性无效 @anlyyao ([#3140](https://github.com/Tencent/tdesign-miniprogram/pull/3140))
- `Badge`: 修复 `skyline` 下角标样式异常，`ribbon` 类型徽标改用伪元素实现 @anlyyao ([#3144](https://github.com/Tencent/tdesign-miniprogram/pull/3144))
- `Cascader`: 修复 `value` 动态变更时，`options ` 选项内容未更新的问题 @huxinhai ([#3142](https://github.com/Tencent/tdesign-miniprogram/pull/3142))
- `CollapsePanel`: 修复 `expandIcon` 属性不生效问题，并支持动态设置 `disabled` 属性 @blankqwq ([#3093](https://github.com/Tencent/tdesign-miniprogram/pull/3093))

## 🌈 1.6.0 `2024-08-23`

### 🚀 Features

- `DropdownMenu`: 新增 `--td-dropdown-menu-height` @anlyyao ([#3094](https://github.com/Tencent/tdesign-miniprogram/pull/3094))

### 🐞 Bug Fixes

- `Badge`: 修复角标样式溢出，移除`t-badge__ribbon--before`元素与`t-badge__ribbon--after`元素，改用`clip-path`样式实现 @jby0107 ([#3074](https://github.com/Tencent/tdesign-miniprogram/pull/3074))
- `Dialog`: 修复命令行调用`closeOnOverlayClick`无效问题 @jarmywang ([#3066](https://github.com/Tencent/tdesign-miniprogram/pull/3066))
- `Checkbox`: 修复选中态和未选中态直径/边长大小不一致问题 @anlyyao ([#3069](https://github.com/Tencent/tdesign-miniprogram/pull/3069))
- `Dialog`: `close` 方法参数类型定义异常 @betavs ([#3071](https://github.com/Tencent/tdesign-miniprogram/pull/3071))
- `Picker`: 兼容 `Skyline` 在深色模式下遮罩显示 @jarmywang ([#3077](https://github.com/Tencent/tdesign-miniprogram/pull/3077))
- `Progress`: 修复 `label` 插槽重复 @anlyyao ([#3080](https://github.com/Tencent/tdesign-miniprogram/pull/3080))
- `Slider`: 修复 `hidden` 为 `false` 场景下，调用 `init()` 函数更新组件时点位置错误 @jby0107 ([#3085](https://github.com/Tencent/tdesign-miniprogram/pull/3085))

## 🌈 1.5.1 `2024-08-09`

### 🚀 Features

- `Input`: 新增 `--td-input-placeholder-text-font-size` 变量 @betavs ([#3018](https://github.com/Tencent/tdesign-miniprogram/pull/3018))
- `Popup`: 新增 `--td-popup-close-btn-color` @anlyyao ([#3035](https://github.com/Tencent/tdesign-miniprogram/pull/3035))
- `Message`: 支持组件通过 `visible` 属性调用 @novlan1 ([#3058](https://github.com/Tencent/tdesign-miniprogram/pull/3058))

### 🐞 Bug Fixes

- `NoticeBar`: 修复 `content` 插槽内容的底边距异常 @anlyyao ([#3025](https://github.com/Tencent/tdesign-miniprogram/pull/3025))
- `Cascader`: 修复组件高度设置错误，交互有调整 @anlyyao ([#3027](https://github.com/Tencent/tdesign-miniprogram/pull/3027))
- `Image`: 修复懒加载无效的问题 @huxinhai ([#3036](https://github.com/Tencent/tdesign-miniprogram/pull/3036))
- `Message`: 修复 `duration-end` 事件未回调 @jarmywang ([#3051](https://github.com/Tencent/tdesign-miniprogram/pull/3051))
- `Tabs`:
  - 修复 `card` 主题下`label` 显示不全 @anlyyao ([#3059](https://github.com/Tencent/tdesign-miniprogram/pull/3059))
  - 修复 `TabPanel`面板内容快速滚动时，点击 tab 切换出现偶发性页面空白 @hkaikai ([#3055](https://github.com/Tencent/tdesign-miniprogram/pull/3055))
- `PullDownRefresh`: 修复 `skyline` 下提示语占位高度计算错误 @richardji202 ([#3014](https://github.com/Tencent/tdesign-miniprogram/pull/3014))

## 🌈 1.5.0 `2024-07-26`

### 🚀 Features

- `Guide`: 新增`Guide`组件 @hkaikai ([#2998](https://github.com/Tencent/tdesign-miniprogram/pull/2998)) ⚡
- `Icon`: 新增 `list-numbered`、`lock-off-filled`、`lock-on-filled` 等 3 个图标 @anlyyao ([#2962](https://github.com/Tencent/tdesign-miniprogram/pull/2962))
- `Calendar`: 新增 `scroll` 事件 @jarmywang ([#2974](https://github.com/Tencent/tdesign-miniprogram/pull/2974))
- `Rate`: `placement` 属性可选项新增 `''`，表示不显示评分弹窗 @anlyyao ([#2980](https://github.com/Tencent/tdesign-miniprogram/pull/2980))

### 🐞 Bug Fixes

- `Icon`: 修复图标 `chart-column` 的命名错误问题 @anlyyao ([#2962](https://github.com/Tencent/tdesign-miniprogram/pull/2962))
- `Cell`: 修复动态添加 `cell` 时底部 `border` 不显示的问题 @jarmywang ([#2977](https://github.com/Tencent/tdesign-miniprogram/pull/2977))
- `Button`: 修复`skyline`渲染模式下 `hover` 态失效 @jarmywang ([#2973](https://github.com/Tencent/tdesign-miniprogram/pull/2973))
- `Grid`: 监听数据变化后未更新子组件样式 @betavs ([#2991](https://github.com/Tencent/tdesign-miniprogram/pull/2991))
- `Input`: 修复占位符禁用态样式错误 @anlyyao ([#3005](https://github.com/Tencent/tdesign-miniprogram/pull/3005))
- `Noticebar`: 移除未依赖的组件引用，修复代码质量告警 @anlyyao ([#3006](https://github.com/Tencent/tdesign-miniprogram/pull/3006))
- `Indexes`: 修复位置错乱和滑动卡顿 @jarmywang ([#3000](https://github.com/Tencent/tdesign-miniprogram/pull/3000))

### 🚧 Others

- `site`: 项目案例更新 @anlyyao ([#2964](https://github.com/Tencent/tdesign-miniprogram/pull/2964))
- `TabBarItem`: `wx:key` 从 `index` 更换为`value`属性值作为标识符 @jarmywang ([#3002](https://github.com/Tencent/tdesign-miniprogram/pull/3002))
- `Search`: `skyline` 适配 @byq1213 ([#2971](https://github.com/Tencent/tdesign-miniprogram/pull/2971))
- `Switch`: `skyline` 适配 @byq1213 ([#2967](https://github.com/Tencent/tdesign-miniprogram/pull/2967))

## 🌈 1.4.5 `2024-07-05`

### 🚀 Features

- `Progress`: `circle` 风格进度条支持自定义起始角度 @jarmywang ([#2903](https://github.com/Tencent/tdesign-miniprogram/pull/2903))
- `SwipeCell`: 新增 `dragstart` 和 `dragend` 事件 @Lyan-u ([#2904](https://github.com/Tencent/tdesign-miniprogram/pull/2904))
- `PullDownRefresh`: 新增 `disabled` 属性 @Lyan-u ([#2904](https://github.com/Tencent/tdesign-miniprogram/pull/2904))
- `Search`: 新增 `resultList` 属性，支持预览列表 @byq1213 @anlyyao ([#2520](https://github.com/Tencent/tdesign-miniprogram/pull/2520))
- `Picker`: 新增 `itemHeight` 属性，支持自定义 `PickerItem` 子项高度 @anlyyao ([#2953](https://github.com/Tencent/tdesign-miniprogram/pull/2953))

### 🐞 Bug Fixes

- `Popup`: 修复右侧弹层未适配自定义标题栏高度 @jarmywang ([#2921](https://github.com/Tencent/tdesign-miniprogram/pull/2921))
- `Navbar`: 组件内部适配 `wx.onMenuButtonBoundingClientRectWeightChange()` @jby0107 ([#2922](https://github.com/Tencent/tdesign-miniprogram/pull/2922))
- `Input`: 修复`Skyline`下点击清除图标时页面上 `bindtap` 无效 @anlyyao ([#2946](https://github.com/Tencent/tdesign-miniprogram/pull/2946))

### 🚧 Others

- `site`: 全量组件补充示例代码片段，支持导入开发者工具预览 @anlyyao ([#2939](https://github.com/Tencent/tdesign-miniprogram/pull/2939))
- `Picker`: 废弃无实际意义的 `--td-picker-item-height` @anlyyao ([#2953](https://github.com/Tencent/tdesign-miniprogram/pull/2953))

## 🌈 1.4.4 `2024-06-24`

### 🐞 Bug Fixes

- `Overlay`: 修复遮罩失效 @anlyyao ([#2887](https://github.com/Tencent/tdesign-miniprogram/pull/2887))

## 🌈 1.4.3 `2024-06-21`

### 🚀 Features

- `TabPanel`: 支持动态 `label` @anlyyao ([#2872](https://github.com/Tencent/tdesign-miniprogram/pull/2872))

### 🐞 Bug Fixes

- `Calendar`: 优化 `title` 默认值 @anlyyao ([#2858](https://github.com/Tencent/tdesign-miniprogram/pull/2858))
- `Swiper`: 修复 `navigation` 插槽无效的问题 @jarmywang ([#2859](https://github.com/Tencent/tdesign-miniprogram/pull/2859))
- `TabBar`: 修复自定义 `tabbar` 中深色模式颜色错误 @anlyyao ([#2861](https://github.com/Tencent/tdesign-miniprogram/pull/2861))
- `CheckTag`: 更正组件内部 `checked`属性类型 @anlyyao ([#2871](https://github.com/Tencent/tdesign-miniprogram/pull/2871))
- `Navbar`: 修复占位区高度错误 @jby0107 ([#2877](https://github.com/Tencent/tdesign-miniprogram/pull/2877))
- `Radio`: 修复禁用态样式错误 @anlyyao ([#2875](https://github.com/Tencent/tdesign-miniprogram/pull/2875))
- `Dialog`: `close-on-overlay-click`属性默认值从 `undefined` 改为 `false` @jarmywang ([#2874](https://github.com/Tencent/tdesign-miniprogram/pull/2874))
- `Cascader`: 优化组件性能，支持 4 级地址 @novlan1 ([#2866](https://github.com/Tencent/tdesign-miniprogram/pull/2866))

### 🚧 Others

- `site(Button)`: 支持示例代码导入开发者工具 @anlyyao ([#2883](https://github.com/Tencent/tdesign-miniprogram/pull/2883))

## 🌈 1.4.2 `2024-06-07`

### 🐞 Bug Fixes

- `Skeleton`: 修复深色模式渐变动画颜色错误 @anlyyao ([#2818](https://github.com/Tencent/tdesign-miniprogram/pull/2818))
- `Slider`: 修复禁用态样式错误 @anlyyao ([#2814](https://github.com/Tencent/tdesign-miniprogram/pull/2814))
- `TabBar`: 修复 `icon` 插槽不显示问题 @jarmywang ([#2821](https://github.com/Tencent/tdesign-miniprogram/pull/2821))
- `Tabs`:
  - 修复当改变文本大小时下划线滑动位置错误 @anlyyao ([#2822](https://github.com/Tencent/tdesign-miniprogram/pull/2822))
  - 修复部分 `css` 变量无效 @betavs ([#2843](https://github.com/Tencent/tdesign-miniprogram/pull/2843))
- `ActionSheet`: 修复控制台告警 @anlyyao ([#2838](https://github.com/Tencent/tdesign-miniprogram/pull/2838))

### 🚧 Others

- `CountDown`: 示例添加 `TCloudNumber` 字体的 `Base64` 转码 @ArcticFoxPro ([#2836](https://github.com/Tencent/tdesign-miniprogram/pull/2836))
- `Message`: 修复官网 `Message` 组件示例页面白屏 @anlyyao ([#2841](https://github.com/Tencent/tdesign-miniprogram/pull/2841))

## 🌈 1.4.1 `2024-05-28`

### 🚀 Features

- `Picker`: 新增 `use-popup` 属性 @anlyyao ([#2770](https://github.com/Tencent/tdesign-miniprogram/pull/2770))
- `DateTimePicker`: 新增 `use-popup` 属性 @anlyyao ([#2770](https://github.com/Tencent/tdesign-miniprogram/pull/2770))

### 🐞 Bug Fixes

- `Calendar`: 修复页面层无法修改组件样式的问题 @anlyyao ([#2767](https://github.com/Tencent/tdesign-miniprogram/pull/2767))
- `Layout`: 支持拆行 @anlyyao ([#2773](https://github.com/Tencent/tdesign-miniprogram/pull/2773))
- `Navbar`: 为适配右侧胶囊尺寸，恢复使用 `px` 单位 @anlyyao ([#2781](https://github.com/Tencent/tdesign-miniprogram/pull/2781))
- `Picker`: 修复子项文本尺寸自适应问题 @anlyyao ([#2782](https://github.com/Tencent/tdesign-miniprogram/pull/2782))
- `Tabs`:
  - 修复在 `Skyline` 模式下组件不能正常使用的问题 @narukeu ([#2788](https://github.com/Tencent/tdesign-miniprogram/pull/2788))
  - 修复示例文案错误 @ArcticFoxPro ([#2801](https://github.com/Tencent/tdesign-miniprogram/pull/2801))
- `CellGroup`: 修复深色模式下外边框颜色错误 @anlyyao ([#2790](https://github.com/Tencent/tdesign-miniprogram/pull/2790))
- `Slider`:
  - 优化垂直方向胶囊滑轨样式 @anlyyao ([#2796](https://github.com/Tencent/tdesign-miniprogram/pull/2796))、
  - 示例增加边距，避免与手势返回冲突 @novlan1 ([#2807](https://github.com/Tencent/tdesign-miniprogram/pull/2807))
- `Progress`: 修复环状进度条深色模式颜色错误 @anlyyao ([#2794](https://github.com/Tencent/tdesign-miniprogram/pull/2794))
- `Icon`: 修复图片资源无法正常显示的问题 @betavs ([#2806](https://github.com/Tencent/tdesign-miniprogram/pull/2806))
- `CountDown`: 改用 `TCloudNumber` 字体 @anlyyao ([#2765](https://github.com/Tencent/tdesign-miniprogram/pull/2765))
- `Button`: 更新示例，对齐视觉 @anlyyao ([#2811](https://github.com/Tencent/tdesign-miniprogram/pull/2811))

### 🚧 Others

- `site`: 修复预览窗口内部切换时不更随颜色模式问题 @zuiaiwanqian ([#2768](https://github.com/Tencent/tdesign-miniprogram/pull/2768))

## 🌈 1.4.0 `2024-05-09`

### 🚀 Features

- `TDesign`: Button、Fab 等 33 个组件完成 Skyline 适配，并新增 Skyline Page 示例页 @jin0209 @anlyyao @jarmywang ([#2659](https://github.com/Tencent/tdesign-miniprogram/pull/2659))
- `Input`: 新增 `default-value` 属性 @betavs ([#2738](https://github.com/Tencent/tdesign-miniprogram/pull/2738))
- `Textarea`: 新增 `default-value` 属性 @betavs ([#2737](https://github.com/Tencent/tdesign-miniprogram/pull/2737))

### 🐞 Bug Fixes

- `Layout`: 修复 `Col` 和 `Row` 的 `style` 与 `customStyle` 属性无效的问题 @anlyyao ([#2745](https://github.com/Tencent/tdesign-miniprogram/pull/2745))

## 🌈 1.3.1 `2024-04-29`

### 🚀 Features

- `Fab`: 新增 `using-custom-navbar` 属性 @anlyyao ([#2725](https://github.com/Tencent/tdesign-miniprogram/pull/2725))

### 🐞 Bug Fixes

- `Message`: 修复 `message` 重复进入位置异常并修正 `single` 属性值默认取 `true` @jarmywang ([#2719](https://github.com/Tencent/tdesign-miniprogram/pull/2719))
- `MessageItem`: 逻辑容错异常处理 @betavs ([#2704](https://github.com/Tencent/tdesign-miniprogram/pull/2704))
- `Skeleton`: 修复 `loading` 属性默认值无效的问题 @anlyyao ([#2714](https://github.com/Tencent/tdesign-miniprogram/pull/2714))
- `Progress`: 修复 `circle` 主题背景色缺失的问题 @anlyyao ([#2722](https://github.com/Tencent/tdesign-miniprogram/pull/2722))
- `BackTop`: 修复 `round/half-round` 主题文本和背景 `design token` 错误 @anlyyao ([#2722](https://github.com/Tencent/tdesign-miniprogram/pull/2722))
- `CheckboxGroup`: `options` 对象中 `value` 不支持 `number` 类型 @betavs ([#2731](https://github.com/Tencent/tdesign-miniprogram/pull/2731))

### 🚧 Others

- `chore`: `styleIsolation` 配置项从 `options` 迁移到 `JSON` @anlyyao ([#2718](https://github.com/Tencent/tdesign-miniprogram/pull/2718))
- `chore`: 修正包名 @betavs ([#2734](https://github.com/Tencent/tdesign-miniprogram/pull/2734))

## 🌈 1.3.0 `2024-04-19`

### 🚀 Features

- `TDesign` 微信小程序组件库提供原生深色模式适配 @zuiaiwanqian ([#2636](https://github.com/Tencent/tdesign-miniprogram/pull/2636))
- `PullDownRefresh`:
  - 新增 `header` 插槽 @betavs ([#2652](https://github.com/Tencent/tdesign-miniprogram/pull/2652))
  - 新增 `drag` 等事件 @betavs ([#2649](https://github.com/Tencent/tdesign-miniprogram/pull/2649))
- `Picker`: 新增 `footer` 插槽 @anlyyao ([#2632](https://github.com/Tencent/tdesign-miniprogram/pull/2632))
- `DateTimePicker`: 新增 `footer` 插槽 @anlyyao ([#2632](https://github.com/Tencent/tdesign-miniprogram/pull/2632))
- `CheckTag`: 新增 `shape` 和 `closable` 属性 @betavs ([#2365](https://github.com/Tencent/tdesign-miniprogram/pull/2365))
- `Image`: 新增 `t-id` 属性 @catiwang ([#2658](https://github.com/Tencent/tdesign-miniprogram/pull/2658))
- `upload`: 支持自定义上传图片后的略缩图 @dexterBo ([#2690](https://github.com/Tencent/tdesign-miniprogram/pull/2690))
- `Skeleton`: 新增 `delay` 属性 @anlyyao ([#2698](https://github.com/Tencent/tdesign-miniprogram/pull/2698))
- `Message`: 支持同时显示多条消息并自动垂直排版 @zh-huan ([#2639](https://github.com/Tencent/tdesign-miniprogram/pull/2639))

### 🐞 Bug Fixes

- `RadioGroup`: 修复 `disabled` 动态修改无效 @catiwang ([#2643](https://github.com/Tencent/tdesign-miniprogram/pull/2643))
- `Calendar`: 动态设置 `format` 无效 @betavs ([#2670](https://github.com/Tencent/tdesign-miniprogram/pull/2670))
- `CheckboxGroup`: 处理 `disabled` 动态修改无效的问题 @betavs ([#2647](https://github.com/Tencent/tdesign-miniprogram/pull/2647))
- `Slider`: 修复组件宽度失效 @anlyyao ([#2699](https://github.com/Tencent/tdesign-miniprogram/pull/2699))
- `Drawer`: 修复 `--td-drawer-item-icon-color` 名称错误 @anlyyao ([#2697](https://github.com/Tencent/tdesign-miniprogram/pull/2697))
- `TabBarItem`: 当 `tab-bar` 组件 `split` 属性为真时，样式异常 @betavs ([#2696](https://github.com/Tencent/tdesign-miniprogram/pull/2696))

### 🚧 Others

- `Footer`: 同步 `API` 文档 @liweijie0812 ([#2683](https://github.com/Tencent/tdesign-miniprogram/pull/2683))
- `Tag`: 同步 `API` 文档 @liweijie0812 ([#2684](https://github.com/Tencent/tdesign-miniprogram/pull/2684))
- `Result`: 同步 `API` 文档 @liweijie0812 ([#2685](https://github.com/Tencent/tdesign-miniprogram/pull/2685))

## 🌈 1.2.9 `2024-03-07`

### 🚀 Features

- `Cascader`: 新增 `placeholder` 属性，支持自定义未选中时的提示文案 @anlyyao ([#2597](https://github.com/Tencent/tdesign-miniprogram/pull/2597))

### 🐞 Bug Fixes

- `DropdownMenu`: 修复菜单栏展开状态向上滚动时菜单栏和内容面板分离的问题 @maureenwanmy ([#2606](https://github.com/Tencent/tdesign-miniprogram/pull/2606))
- `Swiper`: 修复意外的高频左右抖动 @betavs ([#2603](https://github.com/Tencent/tdesign-miniprogram/pull/2603))
- `Layout`: 改用 `flex` 布局，修复 `col` 高度塌陷问题 @dexterBo ([#2616](https://github.com/Tencent/tdesign-miniprogram/pull/2616))
- `Slider`:
  - 修复 `slider` 在多点触控时无法滑动的问题 @xieyushansun ([#2619](https://github.com/Tencent/tdesign-miniprogram/pull/2619))
  - 修复滑块点击偏移和点击位置定位不准确的问题 @dexterBo ([#2627](https://github.com/Tencent/tdesign-miniprogram/pull/2627))
- `Fab`: 修复拖拽模式点击不触发 @jarmywang ([#2631](https://github.com/Tencent/tdesign-miniprogram/pull/2631))
- `Navbar`: `px` 转 `rpx` 换算错误 @betavs ([#2626](https://github.com/Tencent/tdesign-miniprogram/pull/2626))

### 🚧 Others

- `TabBar`: 移除重复样式类 @Moonofweisheng ([#2630](https://github.com/Tencent/tdesign-miniprogram/pull/2630))
- `DropdownItem`: 采用 [BEM](http://getbem.com/) 命名规范优化类名 @betavs ([#2611](https://github.com/Tencent/tdesign-miniprogram/pull/2611))

## 🌈 1.2.8 `2024-02-06`

### 🚀 Features

- `Slider`: 新增 `vertical`属性 @zuiaiwanqian ([#2592](https://github.com/Tencent/tdesign-miniprogram/pull/2592))
- `Tag`: `closable` 属性补充支持 `Object` 和 `Slot`类型 @anlyyao ([#2590](https://github.com/Tencent/tdesign-miniprogram/pull/2590))
- `Cell`: `leftIcon`、 `rightIcon` 和 `arrow` 属性补充支持 `Object` 类型 @anlyyao ([#2589](https://github.com/Tencent/tdesign-miniprogram/pull/2589))

### 🐞 Bug Fixes

- `Search`: 处理 `slot` 互斥问题 @betavs ([#2569](https://github.com/Tencent/tdesign-miniprogram/pull/2569))
- `ImageViewer`: 修复图片未设置宽高时，图片预览被截断的问题 @azx1573 ([#2575](https://github.com/Tencent/tdesign-miniprogram/pull/2575))
- `Cascader`: 修复 `value` 无法响应更新的问题 @catiwang ([#2578](https://github.com/Tencent/tdesign-miniprogram/pull/2578))
- `PullDownRefresh`: 修复快速滚动时 `scrollTop` 不准确的问题 @yangbai1991 ([#2472](https://github.com/Tencent/tdesign-miniprogram/pull/2472))
- `Dialog`: 处理基础调试库在 `3.3.3` ～ `3.3.4` 版本时控制台报错 @anlyyao ([#2587](https://github.com/Tencent/tdesign-miniprogram/pull/2587))

### 🚧 Others

- `NoticeBar`: 声明 `NoticeBarTrigger` 类型 @betavs ([#2567](https://github.com/Tencent/tdesign-miniprogram/pull/2567))

## 🌈 1.2.7 `2024-01-17`

### 🚀 Features

- `Upload`: 支持拖拽排序 @zuiaiwanqian ([#2527](https://github.com/Tencent/tdesign-miniprogram/pull/2527))
- `Textarea`: `change` 事件新增 `cursor` 参数 @betavs ([#2533](https://github.com/Tencent/tdesign-miniprogram/pull/2533))

### 🐞 Bug Fixes

- `Swiper`: 修复当前项动态变化时，外部样式类 `t-class-prev-image` 和 `t-class-next-image` 无效的问题 @hkaikai ([#2540](https://github.com/Tencent/tdesign-miniprogram/pull/2540))
- `Tabs`:
  - `showBottomLine` 为 `false` 时，支持内容自动向中间滑动 @hkaikai ([#2550](https://github.com/Tencent/tdesign-miniprogram/pull/2550))
  - 修复最后一项 `disabled` 时卡死问题 @byq1213 ([#2523](https://github.com/Tencent/tdesign-miniprogram/pull/2523))
- `Fab`: 修复滚动事件穿透的问题 @anlyyao ([#2553](https://github.com/Tencent/tdesign-miniprogram/pull/2553))
- `Navbar`: 修复大屏适配问题 @anlyyao ([#2554](https://github.com/Tencent/tdesign-miniprogram/pull/2554))
- `Calendar`: 处理 `use-popup` 值为 `false` 时，动态设置 `value` 未重新渲染的问题 @delgithub ([#2552](https://github.com/Tencent/tdesign-miniprogram/pull/2552))

### 🚧 Others

- `Button`: 处理控制台警告的问题 @IronManman ([#2521](https://github.com/Tencent/tdesign-miniprogram/pull/2521))
- `ActionSheet`: 文档更新 @jin0209 ([#2541](https://github.com/Tencent/tdesign-miniprogram/pull/2541))

## 🌈 1.2.6 `2023-12-22`

### 🚀 Features

- `Upload`: 新增 `disabled` 属性，首页补充服务声明 @anlyyao ([#2489](https://github.com/Tencent/tdesign-miniprogram/pull/2489))
- `NoticeBar`: 新增 `change` 事件，仅在 `direction` 为 `vertical` 时有效 @betavs ([#2492](https://github.com/Tencent/tdesign-miniprogram/pull/2492))
- `Fab`: 悬浮按钮支持拖拽 @hkaikai ([#2478](https://github.com/Tencent/tdesign-miniprogram/pull/2478))
- `Checkbox`: `change` 事件新增参数 `context`，返回当前点击项内容 @gjl-0810 ([#2469](https://github.com/Tencent/tdesign-miniprogram/pull/2469))

### 🐞 Bug Fixes

- `Calender`: 兼容 `glass-easel` 框架真机环境 `<include>` 节点上不支持 `wx:` 指令 @jarmywang ([#2491](https://github.com/Tencent/tdesign-miniprogram/pull/2491))
- `Step`: 修复 `status` 属性变更后子项未及时更新的问题 @betavs ([#2480](https://github.com/Tencent/tdesign-miniprogram/pull/2480))
- `NoticeBar`: 处理基础库为 `3.x.x` 时控制台报错的问题 @betavs ([#2470](https://github.com/Tencent/tdesign-miniprogram/pull/2470))
- `Input`: 修复 `type` 为 `digit`、`number`时，`maxlength` 和 `maxcharacter` 属性无效的问题 @zyqq ([#2497](https://github.com/Tencent/tdesign-miniprogram/pull/2497))
- `Grid`: 修复 `hover` 属性无效的问题 @betavs ([#2508](https://github.com/Tencent/tdesign-miniprogram/pull/2508))
- `TabBar`: 修复徽标遮挡底部内容的问题 @yangbai1991 ([#2456](https://github.com/Tencent/tdesign-miniprogram/pull/2456))

### 🚧 Others

- `Icon`: 弃用 `wx.setClipboardData` 防止收集用户信息。 @anlyyao ([#2498](https://github.com/Tencent/tdesign-miniprogram/pull/2498))
- `Textarea`: 更新文档默认值 @betavs ([#2507](https://github.com/Tencent/tdesign-miniprogram/pull/2507))

## 🌈 1.2.5 `2023-12-08`

### 🚀 Features

- `Cell`: 新增外部样式类 `t-class-center` @anlyyao ([#2439](https://github.com/Tencent/tdesign-miniprogram/pull/2439))
- `Input`: 新增 `clearTrigger` 属性 @betavs ([#2372](https://github.com/Tencent/tdesign-miniprogram/pull/2372))

### 🐞 Bug Fixes

- `Calendar`: 修复 `use-popup` 为 `false` 时，组件未适应父容器宽度的问题 @yangbai1991 ([#2458](https://github.com/Tencent/tdesign-miniprogram/pull/2458))
- `Checkbox`: 修复 `checked` 属性无效的问题 @Nightmare1664 ([#2455](https://github.com/Tencent/tdesign-miniprogram/pull/2455))
- `Upload`: 处理关闭按钮溢出问题 @betavs ([#2449](https://github.com/Tencent/tdesign-miniprogram/pull/2449))
- `DateTimePicker`: 组件支持国际化。目前支持简体中文(zh)、 (tc)、 英文(en)、日语(ja)、 韩语(ko)、俄语(ru) 等六种语言 @eric-lua ([#2464](https://github.com/Tencent/tdesign-miniprogram/pull/2464))

### 🚧 Others

- `Textarea`: 修复文档 `confirm-type` 属性默认值描述错误 @betavs ([#2475](https://github.com/Tencent/tdesign-miniprogram/pull/2475))
- `BackTop`: 返回顶部按钮，增加 `iphone` 底部安全区 @leozeli ([#2457](https://github.com/Tencent/tdesign-miniprogram/pull/2457))

## 🌈 1.2.4 `2023-11-15`

### 🚀 Features

- `Rate`: 新增 `placement` 属性 @betavs ([#2359](https://github.com/Tencent/tdesign-miniprogram/pull/2359))
- `DropdownMenu`: 新增 `open` 和 `close` 事件 @betavs ([#2361](https://github.com/Tencent/tdesign-miniprogram/pull/2361))
- `Cell`: 新增 css 变量 `--td-cell-border-width` @betavs ([#2399](https://github.com/Tencent/tdesign-miniprogram/pull/2399))
- `BackTop`: 新增 `scrollTop` 和 `visibilityHeight` 属性 @betavs ([#2177](https://github.com/Tencent/tdesign-miniprogram/pull/2177))

### 🐞 Bug Fixes

- `Search`: 修复因 `input` 未设置最小高度导致异常的问题 @betavs ([#2340](https://github.com/Tencent/tdesign-miniprogram/pull/2340))
- `Picker`: 兼容 `keys` 为 `null` 的情况 @betavs ([#2358](https://github.com/Tencent/tdesign-miniprogram/pull/2358))
- `Image`: 优化组件内部函数重复执行的问题 @betavs ([#2362](https://github.com/Tencent/tdesign-miniprogram/pull/2362))
- `Checkbox`: 移除未使用的组件 `Cell` @eehhh ([#2404](https://github.com/Tencent/tdesign-miniprogram/pull/2404))
- `Radio`: 移除未使用的组件 `Cell` @eehhh ([#2405](https://github.com/Tencent/tdesign-miniprogram/pull/2405))
- `Link`: 修复跳转方式为返回或退出时链接样式为禁用的问题 @qianxuu ([#2226](https://github.com/Tencent/tdesign-miniprogram/pull/2226))
- `SideBar`: 修复子项激活态时 `prefix`与`suffix` 内容遮挡相邻项的点击热区问题 @Moonofweisheng ([#2431](https://github.com/Tencent/tdesign-miniprogram/pull/2431))

### 🚧 Others

- `Tabs`: 更新示例 @Xcyq ([#2386](https://github.com/Tencent/tdesign-miniprogram/pull/2386))

## 🌈 1.2.3 `2023-09-14`

### 🚀 Features

- `ImageViewer`：支持无障碍访问

### 🐞 Bug Fixes

- `Button`: `t-id`属性没有默认值导致控制台警告问题 @betavs ([#2337](https://github.com/Tencent/tdesign-miniprogram/pull/2337))
- `Dialog`: 修复隐私协议接口 bindagreeprivacyauthorization 回调信息丢失问题 @ElanYoung ([#2342](https://github.com/Tencent/tdesign-miniprogram/pull/2342))

## 🌈 1.2.2 `2023-08-29`

### 🚀 Features

- `Rate`: 支持第三方图标 @lixingdecai ([#2328](https://github.com/Tencent/tdesign-miniprogram/pull/2328))
- `Button`:
  - 新增 `t-id` 属性，相等于 `id` @HellyW ([#2320](https://github.com/Tencent/tdesign-miniprogram/pull/2320))
  - 属性 `open-type` 新增支持 `agreePrivacyAuthorization` @HellyW ([#2320](https://github.com/Tencent/tdesign-miniprogram/pull/2320))

### 🐞 Bug Fixes

- `Stepper`:
  - 修复无法输出小数的问题 @LeeJim ([#2314](https://github.com/Tencent/tdesign-miniprogram/pull/2314))
  - 修复输入小数后增减的精度问题 @LeeJim ([#2314](https://github.com/Tencent/tdesign-miniprogram/pull/2314))
- `TreeSelect`:
  - 解决异步 `options` 导致无法渲染的问题 @LeeJim ([#2315](https://github.com/Tencent/tdesign-miniprogram/pull/2315))
  - 解决异步数据导致的报错问题 @LeeJim ([#2315](https://github.com/Tencent/tdesign-miniprogram/pull/2315))
- `ActionSheet`: 移除未使用的组件 @betavs ([#2318](https://github.com/Tencent/tdesign-miniprogram/pull/2318))
- `SideBar`: 修复示例滚动问题 @betavs ([#2325](https://github.com/Tencent/tdesign-miniprogram/pull/2325))

## 🌈 1.2.1 `2023-08-22`

### 🚀 Features

- `Radio`: 新增 `readonly` 属性 @betavs ([#2292](https://github.com/Tencent/tdesign-miniprogram/pull/2292))

### 🐞 Bug Fixes

- `CellGroup`: 修复 `updateLastChid` 事件被多次触发的问题 @anlyyao ([#2302](https://github.com/Tencent/tdesign-miniprogram/pull/2302))
- `Popup`: 修复 `visibleChange` 事件参数错误的问题 @anlyyao ([#2303](https://github.com/Tencent/tdesign-miniprogram/pull/2303))
- `Rate`: 修复 `value = 0` 且半选时图标错误的问题 @betavs ([#2307](https://github.com/Tencent/tdesign-miniprogram/pull/2307))
- `Radio`: 修复 `tap` 事件无法冒泡的问题 @LeeJim ([#2309](https://github.com/Tencent/tdesign-miniprogram/pull/2309))
- `Checkbox`: 修复 `tap` 事件无法冒泡的问题 @LeeJim ([#2309](https://github.com/Tencent/tdesign-miniprogram/pull/2309))

## 🌈 1.2.0 `2023-08-16`

### 🚀 Features

- `Search`: 支持透传更多 `Input` 的属性 @betavs ([#2229](https://github.com/Tencent/tdesign-miniprogram/pull/2229))
- `Icon`: 图标更新，新增 `960` 个图标 @anlyyao ([#2254](https://github.com/Tencent/tdesign-miniprogram/pull/2254))
- `Input`: 新增 `--td-input-label-max-width` 和 `--td-input-label-min-width` 两个样式变量 @anlyyao ([#2259](https://github.com/Tencent/tdesign-miniprogram/pull/2259))
- `Loading`: 新增 `CSS Variable` 用于调整加载提示文案颜色 @ElanYoung ([#2273](https://github.com/Tencent/tdesign-miniprogram/pull/2273))

### 🐞 Bug Fixes

- `Swiper`: 修复图片加载中/加载错误占位符未居中的问题 @anlyyao ([#2246](https://github.com/Tencent/tdesign-miniprogram/pull/2246))
- `TabBar`: 修复示例代码展示错误 @anlyyao ([#2257](https://github.com/Tencent/tdesign-miniprogram/pull/2257))
- `Input`: 修复 `t-class-label` 外部样式类无法修改 `label` 宽度 @anlyyao ([#2259](https://github.com/Tencent/tdesign-miniprogram/pull/2259))
- `GridItem`: 修复无效的 css 变量 @betavs ([#2253](https://github.com/Tencent/tdesign-miniprogram/pull/2253))
- `Radio`: 修复调整 placement 之后的渲染抖动的问题 @LeeJim ([#2271](https://github.com/Tencent/tdesign-miniprogram/pull/2271))
- `SwipeCell`:
  - 阻止默认的垂直滚动，优化交互体验 @LeeJim ([#2281](https://github.com/Tencent/tdesign-miniprogram/pull/2281))
  - 使用 hidden 隐藏后显示仍能够正常使用 @LeeJim ([#2283](https://github.com/Tencent/tdesign-miniprogram/pull/2283))
- `Collapse`: 修复默认展开全部时，无法正常收起的问题 @LeeJim ([#2280](https://github.com/Tencent/tdesign-miniprogram/pull/2280))
- `Checkbox`: 修复 `icon` 无法使用插槽的问题 @LeeJim ([#2285](https://github.com/Tencent/tdesign-miniprogram/pull/2285))
- `Popup`: 修复滚动穿透的问题 @LeeJim ([#2290](https://github.com/Tencent/tdesign-miniprogram/pull/2290))

### 🚧 Others

- `Swiper`:
  - 修复示例错误 @anlyyao ([#2246](https://github.com/Tencent/tdesign-miniprogram/pull/2246))
  - 补充外部样式类信息 @LeeJim ([#2256](https://github.com/Tencent/tdesign-miniprogram/pull/2256))
- `Icon`: 更新图标展示 UI 组件至 0.2.0 版本 @uyarn ([#2269](https://github.com/Tencent/tdesign-miniprogram/pull/2269))

## 🌈 1.1.15 `2023-08-01`

### 🚀 Features

- `DropdownMenu`: 支持自定义箭头图标 @LeeJim ([#2240](https://github.com/Tencent/tdesign-miniprogram/pull/2240))

### 🐞 Bug Fixes

- `ActionSheet`: 修复宫格模式下无法调整选项颜色的问题 @LeeJim ([#2231](https://github.com/Tencent/tdesign-miniprogram/pull/2231))
- `SwipeCell`: 修复 `left`、`right` 没有动态响应的问题 @LeeJim ([#2239](https://github.com/Tencent/tdesign-miniprogram/pull/2239))

### 🚧 Others

- `Link`: 补充使用说明，修复文档中句号导致的链接跳转错误 @qianxuu ([#2227](https://github.com/Tencent/tdesign-miniprogram/pull/2227))

## 🌈 1.1.14 `2023-07-25`

### 🚀 Features

- `ActionSheet`: 新增 `suffixIcon`，仅在 `theme = list` 时展示 @LeeJim ([#2210](https://github.com/Tencent/tdesign-miniprogram/pull/2210))
- `TreeSelect`: `label` 内容支持文本超长省略 @anlyyao ([#2208](https://github.com/Tencent/tdesign-miniprogram/pull/2208))
- `Overlay`: 支持 `duration` 属性，用于调整背景色过渡时间 @betavs ([#2179](https://github.com/Tencent/tdesign-miniprogram/pull/2179))

### 🐞 Bug Fixes

- `Popup`: 解决自动聚焦的问题 @LeeJim ([#2209](https://github.com/Tencent/tdesign-miniprogram/pull/2209))
- `Slider`: 修复无法滑动的问题 @LeeJim ([#2211](https://github.com/Tencent/tdesign-miniprogram/pull/2211))
- `Sticky`: 当组件销毁时，正常移除滚动函数 @LeeJim ([#2215](https://github.com/Tencent/tdesign-miniprogram/pull/2215))

### 🚧 Others

- 修复 utils.wxs 的语法错误 @LeeJim ([#2217](https://github.com/Tencent/tdesign-miniprogram/pull/2217))

## 🌈 1.1.13 `2023-07-18`

### 🚀 Features

- `ActionSheet`: 新增 `show-overlay` 属性 @betavs ([#2194](https://github.com/Tencent/tdesign-miniprogram/pull/2194))

### 🐞 Bug Fixes

- `Toast`: 修复 `close` 方法类型声明错误 @betavs ([#2191](https://github.com/Tencent/tdesign-miniprogram/pull/2191))
- `Message`: 修复 `__text-nowrap` 类名前缀错误的问题 @hwaphon ([#2195](https://github.com/Tencent/tdesign-miniprogram/pull/2195))
- `Slider`: 移除错误的 `wxml` @hwaphon ([#2195](https://github.com/Tencent/tdesign-miniprogram/pull/2195))
- `DateTimePicker`: 修复动态传入 mode 时无法正确渲染的问题 @betavs ([#2188](https://github.com/Tencent/tdesign-miniprogram/pull/2188))

### 🚧 Others

- `docs`: 在 `API` 模块展示所有的 `CSS Variables` @anlyyao ([#2182](https://github.com/Tencent/tdesign-miniprogram/pull/2182))
- `docs`: 将外部样式类的内容独立展示 @ccccpj ([#2200](https://github.com/Tencent/tdesign-miniprogram/pull/2200))
- 修复一些示例/文档中的拼写错误 @anlyyao ([#2197](https://github.com/Tencent/tdesign-miniprogram/pull/2197))

## 🌈 1.1.12 `2023-07-11`

### 🚀 Features

- `PullDownRefresh`: 增加 `show-scrollbar` 属性 @lolhezihehe ([#2163](https://github.com/Tencent/tdesign-miniprogram/pull/2163))

### 🐞 Bug Fixes

- `Rate`:
  - 修复无法点击的问题 @AntzyMo ([#2158](https://github.com/Tencent/tdesign-miniprogram/pull/2158))
  - 使事件冒泡至上层元素 @LeeJim ([#2168](https://github.com/Tencent/tdesign-miniprogram/pull/2168))
- `DateTimePicker`: 修复无法选择的问题 @betavs ([#2169](https://github.com/Tencent/tdesign-miniprogram/pull/2169))
- `Tabs`: 修复超出时滚动不流畅的问题 @LeeJim ([#2170](https://github.com/Tencent/tdesign-miniprogram/pull/2170))
- `TreeSelect`: 修复多选时 `value` 使用空数组报错的问题 @LeeJim ([#2173](https://github.com/Tencent/tdesign-miniprogram/pull/2173))

### 🚧 Others

- 移除开启 `virtual-host` 场景的 `snapshot` 测试 @LeeJim ([#2161](https://github.com/Tencent/tdesign-miniprogram/pull/2161))
- 修复控制台告警 @betavs ([#2164](https://github.com/Tencent/tdesign-miniprogram/pull/2164))

## 🌈 1.1.11 `2023-07-04`

### 🚀 Features

- `CheckboxGroup`: 新增 `borderless` 属性 @betavs ([#2124](https://github.com/Tencent/tdesign-miniprogram/pull/2124))
- `Radio`: 允许取消选中 @betavs ([#2141](https://github.com/Tencent/tdesign-miniprogram/pull/2141))
- `DropdownItem`: 新增 `close` 事件 @LeeJim ([#2147](https://github.com/Tencent/tdesign-miniprogram/pull/2147))

### 🐞 Bug Fixes

- `Tabs`: 解决选项过多时样式错误的问题 @betavs ([#2123](https://github.com/Tencent/tdesign-miniprogram/pull/2123))
- `Picker`: 修复默认值无效 @betavs ([#2126](https://github.com/Tencent/tdesign-miniprogram/pull/2126))
- `Stepper`: 修复精度缺失问题 @anlyyao ([#2130](https://github.com/Tencent/tdesign-miniprogram/pull/2130))
- `Radio`: 修复自定义图标大小之后的垂直对齐问题 @betavs ([#2135](https://github.com/Tencent/tdesign-miniprogram/pull/2135))
- `Checkbox`:
  - 修复自定义图标尺寸后的垂直对齐问题 @LeeJim ([#2136](https://github.com/Tencent/tdesign-miniprogram/pull/2136))
  - 修复 disabled 优先级的问题 @LeeJim ([#2137](https://github.com/Tencent/tdesign-miniprogram/pull/2137))
- `CheckboxGroup`: 修复使用 `options` 时，disabled 不生效的问题 @LeeJim ([#2137](https://github.com/Tencent/tdesign-miniprogram/pull/2137))
- `Search`: 截获点击 `clear` 触发的 tap 事件 @LeeJim ([#2139](https://github.com/Tencent/tdesign-miniprogram/pull/2139))
- `Divider`: 修复外部样式类的位置 @LeeJim ([#2140](https://github.com/Tencent/tdesign-miniprogram/pull/2140))
- `Toast`: 解决 `close` 事件重复触发 @LeeJim ([#2146](https://github.com/Tencent/tdesign-miniprogram/pull/2146))
- `Popup`: 修复底部弹出时的宽度问题 @LeeJim ([#2152](https://github.com/Tencent/tdesign-miniprogram/pull/2152))

### 🚧 Others

- `IDE`: 解决控制台报警的问题 @LeeJim ([#2149](https://github.com/Tencent/tdesign-miniprogram/pull/2149))

## 🌈 1.1.10 `2023-06-20`

### 🚀 Features

- `Tabs`: 新增 `split` 属性 @LeeJim ([#2113](https://github.com/Tencent/tdesign-miniprogram/pull/2113))
- `NoticeBar`: 新增 `interval` 属性 @betavs ([#2097](https://github.com/Tencent/tdesign-miniprogram/pull/2097))

### 🐞 Bug Fixes

- `Grid`: 修复 `align=left` 无效的问题 @anlyyao ([#2110](https://github.com/Tencent/tdesign-miniprogram/pull/2110))
- `Fab`: 修复 `buttonProps` 中的 `hoverClass`属性透传至 `button` 无效 @anlyyao ([#2093](https://github.com/Tencent/tdesign-miniprogram/pull/2093))
- `Upload`: 修复图片尺寸超出的问题 @betavs ([#2098](https://github.com/Tencent/tdesign-miniprogram/pull/2098))
- `Slider`:
  - 修复使用 `max` 之后刻度展示错误的问题 @betavs ([#2114](https://github.com/Tencent/tdesign-miniprogram/pull/2114))
  - 修复异步展示时导致刻度渲染错误的问题 @LeeJim ([#2115](https://github.com/Tencent/tdesign-miniprogram/pull/2115))
- `Input`: 修复 `type=number` 时，`value=0` 无效的问题 @anlyyao ([#2108](https://github.com/Tencent/tdesign-miniprogram/pull/2108))
- `ActionSheet`: 修复点击 `disabled` 的选项仍触发 `close`、`visible-change` 事件 @LeeJim ([#2117](https://github.com/Tencent/tdesign-miniprogram/pull/2117))
- `Stepper`: 保证值发生变化才触发 `change` 事件 @LeeJim ([#2118](https://github.com/Tencent/tdesign-miniprogram/pull/2118))

## 🌈 1.1.9 `2023-06-13`

### 🚀 Features

- `CheckBox`: 自定义图标增加半选中态 @lolhezihehe ([#2056](https://github.com/Tencent/tdesign-miniprogram/pull/2056))
- `Search`: 新增 `cursor-spacing` 属性 @anlyyao ([#2065](https://github.com/Tencent/tdesign-miniprogram/pull/2065))

### 🐞 Bug Fixes

- `Indexes`: 索引导航无法选中问题 @lolhezihehe ([#2036](https://github.com/Tencent/tdesign-miniprogram/pull/2036))
- `Switch`:
  - 修复加载态时仍能点击的问题 @betavs ([#2061](https://github.com/Tencent/tdesign-miniprogram/pull/2061))
  - 修复 `loading` 态背景色错误 @anlyyao ([#2074](https://github.com/Tencent/tdesign-miniprogram/pull/2074))
- `Icon`: 修复命名错误的问题 @anlyyao ([#2076](https://github.com/Tencent/tdesign-miniprogram/pull/2076))
- `TreeSelect`: 修复使用 `keys` 之后无法正常使用的问题 @LeeJim ([#2085](https://github.com/Tencent/tdesign-miniprogram/pull/2085))
- `RadioGroup`: 修复使用 `options` 时值为 `falsy` 时异常的问题 @betavs ([#2082](https://github.com/Tencent/tdesign-miniprogram/pull/2082))
- `CellGroup`: 修复 `bordered` 属性无效的问题 @anlyyao ([#2089](https://github.com/Tencent/tdesign-miniprogram/pull/2089))

## 🌈 1.1.8 `2023-05-30`

### 🚀 Features

- `Textarea`: 属性 `autoSize` 支持控制最大最小高度 @anlyyao ([#2035](https://github.com/Tencent/tdesign-miniprogram/pull/2035))
- `Sticky`: 补充外部样式类 `t-class-content` @anlyyao ([#2047](https://github.com/Tencent/tdesign-miniprogram/pull/2047))

### 🐞 Bug Fixes

- `DropdownMenu`: 修复基础调试版本低于 `2.19.2` 时无法使用的问题 @anlyyao ([#2043](https://github.com/Tencent/tdesign-miniprogram/pull/2043))
- `Sticky`: 解决 `fixed` 定位时宽度错误 @anlyyao ([#2047](https://github.com/Tencent/tdesign-miniprogram/pull/2047))
- `NavBar`: 修复背景色支持渐变色 @LeeJim ([#2049](https://github.com/Tencent/tdesign-miniprogram/pull/2049))
- `Drawer`: 修复 `item-click` 参数返回错误的问题 @ElanYoung ([#2039](https://github.com/Tencent/tdesign-miniprogram/pull/2039))
- `Image`: 修复 width 和 height 无动态响应的问题 @LeeJim ([#2050](https://github.com/Tencent/tdesign-miniprogram/pull/2050))

### 🚧 Others

- 修复 `babel` 报错的问题 @zhangpaopao0609 ([#2046](https://github.com/Tencent/tdesign-miniprogram/pull/2046))

## 🌈 1.1.7 `2023-05-23`

### 🚀 Features

- `ActionSheet`: 新增 `CSS Variable `用于控制取消按钮颜色 @favouredddd ([#2007](https://github.com/Tencent/tdesign-miniprogram/pull/2007))

### 🐞 Bug Fixes

- `ActionSheet`: 解决 `ActionSheet` 引入报错 @anlyyao ([#2008](https://github.com/Tencent/tdesign-miniprogram/pull/2008))
- `Sticky`: 处理在锁定的情况下，宽度计算错误的问题 @LeeJim ([#2012](https://github.com/Tencent/tdesign-miniprogram/pull/2012))
- `SideBarItem`: 修复选中态样式问题 @betavs ([#2011](https://github.com/Tencent/tdesign-miniprogram/pull/2011))
- `TabBar`: 修正 `virtualHost` 不可用时的宽度 @LeeJim ([#2013](https://github.com/Tencent/tdesign-miniprogram/pull/2013))
- `Icon`: 更正图标命名 @anlyyao ([#2020](https://github.com/Tencent/tdesign-miniprogram/pull/2020))

## 🌈 1.1.6 `2023-05-15`

### 🚀 Features

- `Icon`: 更新版本至 `0.1.4` @anlyyao ([#1979](https://github.com/Tencent/tdesign-miniprogram/pull/1979))
- `DropdownMenu`: 选项过多时自动滚动到已选项 @jarmywang ([#1981](https://github.com/Tencent/tdesign-miniprogram/pull/1981))
- `Slider`: 属性 `step` 支持传入小数 @anlyyao ([#1990](https://github.com/Tencent/tdesign-miniprogram/pull/1990))
- `GridItem`: 新增 `click` 事件 @anlyyao ([#1993](https://github.com/Tencent/tdesign-miniprogram/pull/1993))
- `Picker`: 新增 `popupProps` 属性，透传至 `Popup` @favouredddd ([#1985](https://github.com/Tencent/tdesign-miniprogram/pull/1985))
- `DateTimePikcer`: 新增支持 `popupProps` 属性，透传至 `Popup` @favouredddd ([#1991](https://github.com/Tencent/tdesign-miniprogram/pull/1991))
- `ActionSheet`: 新增 `PopupProps` 属性，透传至 `Popup` @favouredddd ([#2002](https://github.com/Tencent/tdesign-miniprogram/pull/2002))

### 🐞 Bug Fixes

- `NavBar`: 修复 `fixed` 定位 @betavs ([#1982](https://github.com/Tencent/tdesign-miniprogram/pull/1982))
- `Slider`: 修复 `change` 事件重复触发相同值的问题 @anlyyao ([#1990](https://github.com/Tencent/tdesign-miniprogram/pull/1990))
- `Input`: 修复 `label` 为英文时无法换行 @anlyyao ([#1994](https://github.com/Tencent/tdesign-miniprogram/pull/1994))
- `PullDownRefresh`:
  - 解决 `refresh` 事件触发时机错误的问题 @LeeJim ([#1998](https://github.com/Tencent/tdesign-miniprogram/pull/1998))
  - 修复 `value` 不可控的问题 @LeeJim ([#1998](https://github.com/Tencent/tdesign-miniprogram/pull/1998))
- `Button`: 修复 `variant` 无法动态响应的问题 @favouredddd ([#2000](https://github.com/Tencent/tdesign-miniprogram/pull/2000))
- `DropdownMenu`: 单选选项行高不一致 @bitjian ([#1992](https://github.com/Tencent/tdesign-miniprogram/pull/1992))
- `Layout`: 修复 `col` 组件不换行的问题，移除 `flex` 布局 @wuping97 ([#1996](https://github.com/Tencent/tdesign-miniprogram/pull/1996))
- `Dialog`: 修复无法动态移除按钮的问题 @yuchumian ([#1986](https://github.com/Tencent/tdesign-miniprogram/pull/1986))
- `Calendar`: 修复 `type` 属性失效的问题 @LeeJim ([#2003](https://github.com/Tencent/tdesign-miniprogram/pull/2003))

### 🚧 Others

- `Steps`: 移除文档中无效的 `API` @anlyyao ([#1995](https://github.com/Tencent/tdesign-miniprogram/pull/1995))

## 🌈 1.1.5 `2023-05-08`

### 🚀 Features

- `PulldownRefresh`: 支持透传更多属性至 `scroll-view` 组件 @LeeJim ([#1959](https://github.com/Tencent/tdesign-miniprogram/pull/1959))
- `DateTimePicker`: 新增 `steps` 属性，用于调整时间间隔步数 @LeeJim ([#1961](https://github.com/Tencent/tdesign-miniprogram/pull/1961))
- `Steps`: 新增 `sequence` 属性，支持逆序展示 @LeeJim ([#1962](https://github.com/Tencent/tdesign-miniprogram/pull/1962))
- `DropdownMenu`: 新增 `CSS Variable` 用于调整边框宽度 @LeeJim ([#1967](https://github.com/Tencent/tdesign-miniprogram/pull/1967))

### 🐞 Bug Fixes

- `Tabs`: 修复 `track` 位置计算错误的问题 @LeeJim ([#1958](https://github.com/Tencent/tdesign-miniprogram/pull/1958))
- `PulldownRefresh`: 解决 `value = true` 时无法触发加载状态的问题 @LeeJim ([#1960](https://github.com/Tencent/tdesign-miniprogram/pull/1960))
- `Steps`: 修复 `icon` 插槽无法使用的问题 @LeeJim ([#1962](https://github.com/Tencent/tdesign-miniprogram/pull/1962))
- `Stepper`: 修复无法输入空值的问题 @anlyyao ([#1971](https://github.com/Tencent/tdesign-miniprogram/pull/1971))
- `Calendar`: 解决 `usePopup = false` 时，没有自动定位到当前值的问题 @LeeJim ([#1969](https://github.com/Tencent/tdesign-miniprogram/pull/1969))
- `ActionSheet`: 修复使用命令行方式点击取消按钮无法关闭的问题 @LeeJim ([#1968](https://github.com/Tencent/tdesign-miniprogram/pull/1968))

### 🚧 Others

- `Picker`: 完善文档，增加 `TS` 定义的关联链接。 @LeeJim ([#1956](https://github.com/Tencent/tdesign-miniprogram/pull/1956))

## 1.1.4 `2023-05-01`

### 🚀 Features

- `ImageViewer`: 新增 `usingCustomNavigation` 属性，处理使用自定义导航栏时被遮挡的问题 @LeeJim ([#1944](https://github.com/Tencent/tdesign-miniprogram/pull/1944))
- `Swiper`: 新增 `image-load` 事件 @LeeJim ([#1949](https://github.com/Tencent/tdesign-miniprogram/pull/1949))

### 🐞 Bug Fixes

- `Slider`: 修复 `dragstart`、`dragend` 事件没反应的问题 @LeeJim ([#1940](https://github.com/Tencent/tdesign-miniprogram/pull/1940))
- `Picker`: 解决使用 `falsy` 值导致无法正确选择的问题 @LeeJim ([#1948](https://github.com/Tencent/tdesign-miniprogram/pull/1948))
- `Toast`: 页面隐藏的时候自动关闭 @LeeJim ([#1947](https://github.com/Tencent/tdesign-miniprogram/pull/1947))

### 🚧 Others

- `Swiper`: 更新 `API` 文档 @anlyyao ([#1945](https://github.com/Tencent/tdesign-miniprogram/pull/1945))

## 🌈 1.1.3 `2023-04-26`

### 🚀 Features

- `Rate`: 支持无障碍访问 @byq1213 ([#1574](https://github.com/Tencent/tdesign-miniprogram/pull/1574))
- `Tabs`:
  - 新增外部样式类 `t-class-content` @LeeJim ([#1931](https://github.com/Tencent/tdesign-miniprogram/pull/1931))
  - 新增 middle 插槽 @LeeJim ([#1936](https://github.com/Tencent/tdesign-miniprogram/pull/1936))
- `CollapsePanel`: 新增 `headerLeftIcon` 属性，支持面板头左侧使用图标 @LeeJim ([#1933](https://github.com/Tencent/tdesign-miniprogram/pull/1933))

### 🐞 Bug Fixes

- `Upload`: 修复 `max` 属性相关的问题 @LeeJim ([#1914](https://github.com/Tencent/tdesign-miniprogram/pull/1914))
- `NavBar`:
  - 修复胶囊边框层级过高，遮挡内容点击事件的问题 @LeeJim ([#1920](https://github.com/Tencent/tdesign-miniprogram/pull/1920))
  - 解决内容垂直居中的问题 @LeeJim ([#1926](https://github.com/Tencent/tdesign-miniprogram/pull/1926))
- `Button`: 修复 `variant = outline` 状态下 `loading` 不展示的问题 @lolhezihehe ([#1922](https://github.com/Tencent/tdesign-miniprogram/pull/1922))
- `DropdownMenu`: 修复单选情况下无法使用多列的问题 @LeeJim ([#1927](https://github.com/Tencent/tdesign-miniprogram/pull/1927))
- `Link`: 修复 `disabled` 态下仍能跳转的问题 @anlyyao ([#1928](https://github.com/Tencent/tdesign-miniprogram/pull/1928))
- `Calendar`: 修复 `format` 报错的问题 @LeeJim ([#1930](https://github.com/Tencent/tdesign-miniprogram/pull/1930))
- `Input`: 修复垂直布局时样式错误 @anlyyao ([#1934](https://github.com/Tencent/tdesign-miniprogram/pull/1934))

## 🌈 1.1.2 `2023-04-17`

### 🚀 Features

- `Swiper`:
  - 支持无障碍访问 @zhangpaopao0609 ([#1598](https://github.com/Tencent/tdesign-miniprogram/pull/1598))
  - `list` 属性支持 `SwiperList[]` 类型 @zhangpaopao0609 ([#1598](https://github.com/Tencent/tdesign-miniprogram/pull/1598))
- `Divider`: 新增 `CSS Variables` 用于控制分割线样式 @favouredddd ([#1890](https://github.com/Tencent/tdesign-miniprogram/pull/1890))
- `Grid`: 补充 `CSS Variables` 以修改不同列数下的图片尺寸和文字大小 @lolhezihehe ([#1903](https://github.com/Tencent/tdesign-miniprogram/pull/1903))
- `Radio`: 新增 `CSS Variables` 用于控制内容字体大小 @favouredddd ([#1895](https://github.com/Tencent/tdesign-miniprogram/pull/1895))

### 🐞 Bug Fixes

- `Loading`: 修复 `inheritColor = true` 时，因样式问题导致组件一直处于加载状态 @Cyrus97 ([#1873](https://github.com/Tencent/tdesign-miniprogram/pull/1873))
- `Empty`: 支持描述内容超出自动换行 @favouredddd ([#1870](https://github.com/Tencent/tdesign-miniprogram/pull/1870))
- `Row`: 增加默认样式实现垂直居中 @tomcat-hz ([#1866](https://github.com/Tencent/tdesign-miniprogram/pull/1866))
- `Progress`: 优化无障碍访问体验 @yaogengzhu ([#1354](https://github.com/Tencent/tdesign-miniprogram/pull/1354))
- `Radio`: 优化样式，新增 `CSS Variables` 控制文字激活态颜色 @LeeJim ([#1889](https://github.com/Tencent/tdesign-miniprogram/pull/1889))
- `ActionSheet`: 解决 `show` 方法的 `TS` 报错 @LeeJim ([#1907](https://github.com/Tencent/tdesign-miniprogram/pull/1907))
- `Radio`: 修复图标尺寸无法调整的问题 @bitjian ([#1909](https://github.com/Tencent/tdesign-miniprogram/pull/1909))
- `Button`: 修复 `type = submit `时，disabled 未生效的问题 @bitjian ([#1878](https://github.com/Tencent/tdesign-miniprogram/pull/1878))

## 🌈 1.1.1 `2023-04-03`

### 🚀 Features

- `Button`: 新增 `hover-class` 属性 @anlyyao ([#1847](https://github.com/Tencent/tdesign-miniprogram/pull/1847))

### 🐞 Bug Fixes

- `Tabs`: 解决内容重叠的问题 @LeeJim ([#1853](https://github.com/Tencent/tdesign-miniprogram/pull/1853))
- `Message`: 处理 `loop` 产生的控制台告警 @anlyyao ([#1856](https://github.com/Tencent/tdesign-miniprogram/pull/1856))
- `Message`: 修复 `marquee = true` 时，滚动动画错误 @anlyyao ([#1856](https://github.com/Tencent/tdesign-miniprogram/pull/1856))
- `Avatar`: 修复控制台报错 @jarmywang ([#1858](https://github.com/Tencent/tdesign-miniprogram/pull/1858))
- `Drawer`: 修复 destroyOnClose 属性不生效 @jarmywang ([#1864](https://github.com/Tencent/tdesign-miniprogram/pull/1864))

## 🌈 1.1.0 `2023-03-27`

### 🚀 Features

- `Layout`: 新增布局组件，包含 `row` 和 `col` 组件 @wuping97 ([#1821](https://github.com/Tencent/tdesign-miniprogram/pull/1821))
- `Search`: 新增 `type` 属性透传至 `input`，默认为 `text` @haochenli ([#1828](https://github.com/Tencent/tdesign-miniprogram/pull/1828))

### 🐞 Bug Fixes

- `Button`: 修复 `disabled = true` 仍触发 `tap` 事件的问题 @wuping97 ([#1833](https://github.com/Tencent/tdesign-miniprogram/pull/1833))
- `NoticeBar`:
  - 修复二轮滚动初始位置不正确 @anlyyao ([#1835](https://github.com/Tencent/tdesign-miniprogram/pull/1835))
  - 修复 `loop` 为 `0` 时还会循环播放的问题 @haochenli ([#1826](https://github.com/Tencent/tdesign-miniprogram/pull/1826))
- `PullDownRefresh`:
  - 修复 `loading-texts` 默认值缺失的问题 @haochenli ([#1837](https://github.com/Tencent/tdesign-miniprogram/pull/1837))
  - 解决外部样式类 `t-class-text` 拼写错误的问题 @LeeJim ([#1839](https://github.com/Tencent/tdesign-miniprogram/pull/1839))
- `Grid`: 修复 `t-class-image` 无法赋予 `image` 样式的问题 @LeeJim ([#1842](https://github.com/Tencent/tdesign-miniprogram/pull/1842))
- `Cascader`: 修复当 `value` 发生变更时，`options` 没有更新的问题 @LeeJim ([#1841](https://github.com/Tencent/tdesign-miniprogram/pull/1841))
- `Tabs`:
  - 修复设置 `animation` 导致 `panel` 内容无法切换的问题 @LeeJim ([#1843](https://github.com/Tencent/tdesign-miniprogram/pull/1843))
  - 修复 `theme` 不等于 `line` 时，获取 track 报错的问题 @LeeJim ([#1843](https://github.com/Tencent/tdesign-miniprogram/pull/1843))
  - 移除滚动条 @LeeJim ([#1844](https://github.com/Tencent/tdesign-miniprogram/pull/1844))

## 🌈 1.0.4 `2023-03-20`

### 🚀 Features

- `PullDownRefresh`: 支持无障碍访问支持 @shinyina ([#1241](https://github.com/Tencent/tdesign-miniprogram/pull/1241))
- `Steps`: 支持无障碍访问 @tangzixuan ([#1783](https://github.com/Tencent/tdesign-miniprogram/pull/1783))

### 🐞 Bug Fixes

- `Textarea`: 修复 `autosize` 为 `true` 时，`placeholder` 上移问题 @anlyyao ([#1781](https://github.com/Tencent/tdesign-miniprogram/pull/1781))
- `Switch`: 修复 `label` 和 `icon` 渲染顺序错误的问题 @LeeJim ([#1809](https://github.com/Tencent/tdesign-miniprogram/pull/1809))
- `Loading`: 修复错误的 `style` 导致 `wxs` 报错 @LeeJim ([#1810](https://github.com/Tencent/tdesign-miniprogram/pull/1810))
- `Radio`: 修复 `placement` 优先级的问题 @LeeJim ([#1812](https://github.com/Tencent/tdesign-miniprogram/pull/1812))
- `Button`: 解决多个插槽的渲染问题 @LeeJim ([#1813](https://github.com/Tencent/tdesign-miniprogram/pull/1813))
- `Link`: 解决多个插槽无法渲染的问题 @LeeJim ([#1816](https://github.com/Tencent/tdesign-miniprogram/pull/1816))
- `TabPanel`: 解决多个插槽无法渲染的问题 @LeeJim ([#1816](https://github.com/Tencent/tdesign-miniprogram/pull/1816))
- `Upload`:
  - 修复点击事件失效问题 @yaogengzhu ([#1802](https://github.com/Tencent/tdesign-miniprogram/pull/1802))
  - 修复 limit 限制的问题 @yaogengzhu ([#1800](https://github.com/Tencent/tdesign-miniprogram/pull/1800))

## 🌈 1.0.3 `2023-03-14`

### 🚀 Features

- `Picker`: 新增支持 `keys` 属性 @LeeJim ([#1759](https://github.com/Tencent/tdesign-miniprogram/pull/1759))
- `Input`: 支持 `nicknamereview` 事件 @anlyyao ([#1755](https://github.com/Tencent/tdesign-miniprogram/pull/1755))
- `Popup`: 增加默认圆角、默认背景色、安全底边距 @jarmywang ([#1758](https://github.com/Tencent/tdesign-miniprogram/pull/1758))

### 🐞 Bug Fixes

- `DropdownMenu`:
  - 修复 `label` 的展示逻辑 @LeeJim ([#1748](https://github.com/Tencent/tdesign-miniprogram/pull/1748))
  - 修复 `radio` 图标的展示位置 @LeeJim ([#1748](https://github.com/Tencent/tdesign-miniprogram/pull/1748))
- `Popup`: 修复关闭按钮无法点击的问题 @jarmywang ([#1754](https://github.com/Tencent/tdesign-miniprogram/pull/1754))
- `Calendar`: 修复 `format` 属性不是响应式的问题 @LeeJim ([#1753](https://github.com/Tencent/tdesign-miniprogram/pull/1753))
- `Checkbox`: 修复存在 `disabled` 选项时，全选出错的问题 @LeeJim ([#1766](https://github.com/Tencent/tdesign-miniprogram/pull/1766))
- `Badge`:
  - 修复 `shape = ribbon` 时，修改 `color` 不能改变全部颜色的问题 @LeeJim ([#1764](https://github.com/Tencent/tdesign-miniprogram/pull/1764))
  - 优化和不同组件组合的无障碍访问 @yaogengzhu ([#1428](https://github.com/Tencent/tdesign-miniprogram/pull/1428))
- `Upload`:
  - 修复 `sizelimit` 不支持对象传参的问题 @LeeJim ([#1763](https://github.com/Tencent/tdesign-miniprogram/pull/1763))
  - 修复 `sizelimit` 默认单位和文档不一致的问题，从 `B` 改成 `KB` @LeeJim ([#1763](https://github.com/Tencent/tdesign-miniprogram/pull/1763))
- `Button`:
  - 取消 `loading` 态下的 `hover` 效果 @anlyyao ([#1739](https://github.com/Tencent/tdesign-miniprogram/pull/1739))
  - 事件 `tap` 仅在非加载或禁用状态时触发 @anlyyao ([#1739](https://github.com/Tencent/tdesign-miniprogram/pull/1739))
- `Cell`: 修复 `note` 内容超出被遮挡问题 @anlyyao ([#1769](https://github.com/Tencent/tdesign-miniprogram/pull/1769))
- `Progress`: 修复 `label` 插槽无效 @anlyyao ([#1771](https://github.com/Tencent/tdesign-miniprogram/pull/1771))
- `GridItem`: 修复 `image` 插槽不可用的问题，需传入 `image =  slot` 才可使用插槽 @LeeJim ([#1772](https://github.com/Tencent/tdesign-miniprogram/pull/1772))

### 🚧 Others

- `Picker`: 文档中移除 `render-label`、`columns `还不支持的属性 @LeeJim ([#1759](https://github.com/Tencent/tdesign-miniprogram/pull/1759))

## 🌈 1.0.2 `2023-03-07`

### 🐞 Bug Fixes

- `Radio`: 修复使用 `options` 时可传入的属性不齐的问题 @LeeJim ([#1707](https://github.com/Tencent/tdesign-miniprogram/pull/1707))
- `Checkbox`: 修复使用 `options` 时可传入的属性不齐的问题 @LeeJim ([#1707](https://github.com/Tencent/tdesign-miniprogram/pull/1707))
- `RadioGroup`:
  - 修复 `placement` 默认值错误的问题 @LeeJim ([#1707](https://github.com/Tencent/tdesign-miniprogram/pull/1707))
  - 修复 `icon` 消失的问题 @LeeJim ([#1707](https://github.com/Tencent/tdesign-miniprogram/pull/1707))
- `ActionSheet`: 修复点击报错的问题 @LeeJim ([#1726](https://github.com/Tencent/tdesign-miniprogram/pull/1726))
- `Swiper`:
  - 修复在真机上圆角无效问题 @anlyyao ([#1733](https://github.com/Tencent/tdesign-miniprogram/pull/1733))
  - 修复基础调试库低于 `2.19.2` 时，图片不显示问题 @anlyyao ([#1736](https://github.com/Tencent/tdesign-miniprogram/pull/1736))
- `NavBar`: 修复外部样式类不可用的问题 @LeeJim ([#1735](https://github.com/Tencent/tdesign-miniprogram/pull/1735))
- `Footer`: 补齐 `API` 文档描述 @anlyyao ([#1737](https://github.com/Tencent/tdesign-miniprogram/pull/1737))
- `ImageViewer`: 修复图片显示不全的问题 @anlyyao ([#1656](https://github.com/Tencent/tdesign-miniprogram/pull/1656))
- `Input`:
  - 修复 `maxLength` 无效问题，并将默认值变更为 `-1` @anlyyao ([#1732](https://github.com/Tencent/tdesign-miniprogram/pull/1732))
  - 修复键盘弹起时，点击 `clear` 没反应的问题 @anlyyao ([#1732](https://github.com/Tencent/tdesign-miniprogram/pull/1732))

## 🌈 1.0.1 `2023-03-01`

### 🚀 Features

- `Cascader`: 新增 `close` 事件 @LeeJim ([#1685](https://github.com/Tencent/tdesign-miniprogram/pull/1685))
- `Picker`: 新增 `close` 事件 @LeeJim ([#1687](https://github.com/Tencent/tdesign-miniprogram/pull/1687))
- `DateTimePicker`: 新增 `close` 事件 @LeeJim ([#1687](https://github.com/Tencent/tdesign-miniprogram/pull/1687))
- `Upload`: 支持无障碍访问 @zhangpaopao0609 ([#1238](https://github.com/Tencent/tdesign-miniprogram/pull/1238))

### 🐞 Bug Fixes

- `ActionSheet`: 补充 `close` 事件，增加 `trigger` 参数 @LeeJim ([#1683](https://github.com/Tencent/tdesign-miniprogram/pull/1683))
- `Cascader`:
  - 修复 pick 事件的参数 @LeeJim ([#1685](https://github.com/Tencent/tdesign-miniprogram/pull/1685))
  - 修复 radio 图标显示位置不正确的问题 @LeeJim ([#1693](https://github.com/Tencent/tdesign-miniprogram/pull/1693))
- `Drawer`: 修复 `close` 事件不生效的问题 @LeeJim ([#1686](https://github.com/Tencent/tdesign-miniprogram/pull/1686))
- `Message`:
  - 修复外部样式类 `t-class-link` 无效问题 @anlyyao ([#1690](https://github.com/Tencent/tdesign-miniprogram/pull/1690))
  - 更新内嵌 `link` 组件的属性 @anlyyao ([#1694](https://github.com/Tencent/tdesign-miniprogram/pull/1694))
- `DropdownMenu`: 修复 `radio` 图标显示位置不正确的问题 @LeeJim ([#1693](https://github.com/Tencent/tdesign-miniprogram/pull/1693))
- `TreeSelect`: 修复 `radio` 图标显示位置不正确的问题 @LeeJim ([#1693](https://github.com/Tencent/tdesign-miniprogram/pull/1693))

## 🌈 1.0.0 `2023-02-27`

### 🚨 Breaking Changes

- 主题色 `CSS Variables` 命名从 `--td-primary-color` 改成 `--td-brand-color` @LeeJim ([#1623](https://github.com/Tencent/tdesign-miniprogram/pull/1623))
- `Cell`: 调整 `hover` 状态对应的类名 @anlyyao ([#1635](https://github.com/Tencent/tdesign-miniprogram/pull/1635))
- `Checkbox`: 属性 `align` 更名为 `placement` @anlyyao ([#1629](https://github.com/Tencent/tdesign-miniprogram/pull/1629))
- `Toast`: 属性 `theme` 的枚举值 `fail` 替换成 `error` @LeeJim ([#1647](https://github.com/Tencent/tdesign-miniprogram/pull/1647))
- `Slider`: 移除 `colors` 和 disabledColor，建议使用 `CSS Variables` 修改 @LeeJim ([#1676](https://github.com/Tencent/tdesign-miniprogram/pull/1676))
- `Loading`: 移除 `theme = error` 以及 `theme = bar`，以及调整 `DOM` @LeeJim ([#1626](https://github.com/Tencent/tdesign-miniprogram/pull/1626))
- `Picker`: 移除 `footer` 插槽 @anlyyao ([#1631](https://github.com/Tencent/tdesign-miniprogram/pull/1631))
- `DateTimePicker`: 移除 `footer` 插槽 @anlyyao ([#1631](https://github.com/Tencent/tdesign-miniprogram/pull/1631))
- `Radio`: 属性 `align` 更名为 `placement` @anlyyao ([#1630](https://github.com/Tencent/tdesign-miniprogram/pull/1630))
- `RadioGroup`: 属性 `align` 更名为 `placement` @anlyyao ([#1630](https://github.com/Tencent/tdesign-miniprogram/pull/1630))
- `Search`: 移除 `right-icon` 属性相关 @anlyyao ([#1628](https://github.com/Tencent/tdesign-miniprogram/pull/1628))
- `Avatar`: 移除 `bordered` 属性 @anlyyao ([#1632](https://github.com/Tencent/tdesign-miniprogram/pull/1632))
- `AvatarGroup`: `cascading` 属性默认值变更为 `left-up` @anlyyao ([#1632](https://github.com/Tencent/tdesign-miniprogram/pull/1632))
- `Message`: 移除 `action` 属性相关，使用 `link` 代替 @anlyyao ([#1637](https://github.com/Tencent/tdesign-miniprogram/pull/1637))
- `Footer`:
  - `copyright` 更名为 `text` @anlyyao ([#1642](https://github.com/Tencent/tdesign-miniprogram/pull/1642))
  - `textLinkList` 更名为 `links` @anlyyao ([#1642](https://github.com/Tencent/tdesign-miniprogram/pull/1642))
  - 移除 `theme` 属性 @anlyyao ([#1642](https://github.com/Tencent/tdesign-miniprogram/pull/1642))
- `CountDown`: `theme` 属性移除 `hightlight` @anlyyao ([#1645](https://github.com/Tencent/tdesign-miniprogram/pull/1645))
- `Link`: 移除 `status` 属性 @anlyyao ([#1652](https://github.com/Tencent/tdesign-miniprogram/pull/1652))
- `Rate`: 移除 `variant` 属性，完全依赖 `icon` 属性来控制图标 @LeeJim ([#1674](https://github.com/Tencent/tdesign-miniprogram/pull/1674))
- `NoticeBar`: `extra` 属性更名为 `operation` @anlyyao ([#1638](https://github.com/Tencent/tdesign-miniprogram/pull/1638))

### 🚀 Features

- `Search`: 新增 `clearable`，用于启用清除控件 @anlyyao ([#1628](https://github.com/Tencent/tdesign-miniprogram/pull/1628))
- `Button`: 新增支持 `suffix` 插槽 @LeeJim ([#1624](https://github.com/Tencent/tdesign-miniprogram/pull/1624))
- `Message`: 新增 `link` 属性 @anlyyao ([#1637](https://github.com/Tencent/tdesign-miniprogram/pull/1637))
- `Link`:
  - 新增 `disabled` 属性 @anlyyao ([#1652](https://github.com/Tencent/tdesign-miniprogram/pull/1652))
  - 新增 `hover` 属性 @anlyyao ([#1652](https://github.com/Tencent/tdesign-miniprogram/pull/1652))
  - 新增 `externalClasses` 属性 @anlyyao ([#1652](https://github.com/Tencent/tdesign-miniprogram/pull/1652))
- `Drawer`: 补充 `hover` 态样式 @anlyyao ([#1673](https://github.com/Tencent/tdesign-miniprogram/pull/1673))
- `AvatarGroup`: 头像组中默认带边框 @anlyyao ([#1678](https://github.com/Tencent/tdesign-miniprogram/pull/1678))

### 🐞 Bug Fixes

- `Fab`: 修复丢失 `style` 默认值的问题 @LeeJim ([#1625](https://github.com/Tencent/tdesign-miniprogram/pull/1625))
- `Dialog`: 修复文字按钮`hover`态圆角不正确 @anlyyao ([#1633](https://github.com/Tencent/tdesign-miniprogram/pull/1633))
- `Switch`: 优化禁用态下 `loading` 的颜色 @LeeJim ([#1627](https://github.com/Tencent/tdesign-miniprogram/pull/1627))
- `Message`: 修复主题图标不正确 @anlyyao ([#1637](https://github.com/Tencent/tdesign-miniprogram/pull/1637))
- `NavBar`: 修复胶囊内部点击事件没反应的问题 @LeeJim ([#1641](https://github.com/Tencent/tdesign-miniprogram/pull/1641))
- `Dialog`:
  - 修复 `confirm` 的拼写错误 @zzzimooo ([#1644](https://github.com/Tencent/tdesign-miniprogram/pull/1644))
  - 修复命令行方式没法调整按钮布局的问题 @zzzimooo ([#1655](https://github.com/Tencent/tdesign-miniprogram/pull/1655))
- `CountDown`: 修复默认风格下时间单位分割的问题 @anlyyao ([#1645](https://github.com/Tencent/tdesign-miniprogram/pull/1645))
- `Slider`: 优化无障碍访问支持 @byq1213 ([#1388](https://github.com/Tencent/tdesign-miniprogram/pull/1388))
- `Collapse`: 修复 `disabled` 状态下标题颜色错误的问题 @LeeJim ([#1648](https://github.com/Tencent/tdesign-miniprogram/pull/1648))
- `Cell`: 修复外部样式类 `t-class-title` 放置位置错误的问题 @LeeJim ([#1648](https://github.com/Tencent/tdesign-miniprogram/pull/1648))
- `Tag`: 修复 `close` 与 `click` 事件一并触发的问题 @anlyyao ([#1669](https://github.com/Tencent/tdesign-miniprogram/pull/1669))
- `Rate`: 修复 tips 偶尔会不消失的问题 @LeeJim ([#1674](https://github.com/Tencent/tdesign-miniprogram/pull/1674))
- `BackTop`: 修复 `icon` 不显示问题 @anlyyao ([#1660](https://github.com/Tencent/tdesign-miniprogram/pull/1660))
- `NoticeBar`: 修复主题图标不正确 @anlyyao ([#1638](https://github.com/Tencent/tdesign-miniprogram/pull/1638))
- `Badge`: 调整 `display` 使用 block 替换 inline-block @anlyyao ([#1679](https://github.com/Tencent/tdesign-miniprogram/pull/1679))

## 🌈 1.0.0-rc.3 `2023-02-20`

### 🚨 Breaking Changes

- `Image`: 插槽的渲染需要传入对应 `slot` 的字符串 @LeeJim ([#1609](https://github.com/Tencent/tdesign-miniprogram/pull/1609))
- `Input`: 调整 `DOM` 以及类名 @anlyyao ([#1585](https://github.com/Tencent/tdesign-miniprogram/pull/1585))

### 🚀 Features

- 所有组件新增支持 `class` 外部样式类，仅在开启 `virtualHost` 的情况下生效 @anlyyao ([#1587](https://github.com/Tencent/tdesign-miniprogram/pull/1587))
- `Input`: 支持 `tips` 文本方向与 `align` 属性值一致 @anlyyao ([#1585](https://github.com/Tencent/tdesign-miniprogram/pull/1585))
- `CellGroup`: 默认最后一项 `cell` 无底部边框线 @anlyyao ([#1607](https://github.com/Tencent/tdesign-miniprogram/pull/1607))
- `Image`: 补充外部样式类名 `class` @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `DropdownMenu`: 新增 `reset` 事件 @LeeJim ([#1617](https://github.com/Tencent/tdesign-miniprogram/pull/1617))
- `Drawer`: 支持无障碍访问 @zhangpaopao0609 ([#1552](https://github.com/Tencent/tdesign-miniprogram/pull/1552))

### 🐞 Bug Fixes

- `Input`: 修复 `layout = 'vertical'` 时，样式不正确 @anlyyao ([#1585](https://github.com/Tencent/tdesign-miniprogram/pull/1585))
- `Swiper`: 修复图片压缩变形问题 @anlyyao ([#1607](https://github.com/Tencent/tdesign-miniprogram/pull/1607))
- `Navbar`: 修复左侧胶囊按钮在真机上上边框线消失问题 @anlyyao ([#1607](https://github.com/Tencent/tdesign-miniprogram/pull/1607))
- `Upload`: 解决因无备用值产生的告警 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `Picker`: 解决因无备用值产生的告警 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `PullDownRefresh`: 解决因无备用值产生的告警 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `NoticeBar`: 解决 `SelectorQuery` 带来的告警 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `Link`: 修复 `API` 文档错误 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `Tabs`: 修复属性不支持响应式变化的问题 @LeeJim ([#1616](https://github.com/Tencent/tdesign-miniprogram/pull/1616))
- `DropdownMenu`: 修复下拉菜单遮罩层无法点击 @RoseyW ([#1615](https://github.com/Tencent/tdesign-miniprogram/pull/1615))
- `Message`: 修复事件名称，以符合文档 @LeeJim ([#1618](https://github.com/Tencent/tdesign-miniprogram/pull/1618))
- `Dialog`: 修复事件名，从 `overlayClick` 改成 `overlay-click` @LeeJim ([#1619](https://github.com/Tencent/tdesign-miniprogram/pull/1619))
- `SwiperNav`: 修复事件名，从 `navBtnChange` 改成 `nav-btn-change` @LeeJim ([#1619](https://github.com/Tencent/tdesign-miniprogram/pull/1619))
- `TextArea`: 修复事件名，从 `lineChange` 改成 `line-change` @LeeJim ([#1619](https://github.com/Tencent/tdesign-miniprogram/pull/1619))

## 🌈 1.0.0-rc.2 `2023-02-13`

### 🚨 Breaking Changes

- `Icon`: `size` 和 `color` 属性默认值变更为 `''` @anlyyao ([#1553](https://github.com/Tencent/tdesign-miniprogram/pull/1553))

### 🚀 Features

- 所有组件同时支持 `style` 和 `customStyle` 属性 @LeeJim ([#1532](https://github.com/Tencent/tdesign-miniprogram/pull/1532))
- `Button`: 支持点击态边框颜色 CSS Variable @anlyyao ([#1530](https://github.com/Tencent/tdesign-miniprogram/pull/1530))
- `Result`: 属性 `icon` 支持对象类型，透传至图标组件 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `TabBar`: 属性 `icon` 支持对象类型，透传至图标组件 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Toast`: 属性 `icon` 支持对象类型，透传至图标组件 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Input`: 支持名为 `tips` 的插槽 @anlyyao ([#1572](https://github.com/Tencent/tdesign-miniprogram/pull/1572))

### 🐞 Bug Fixes

- 修复因 `template` 引起的控制台告警 @anlyyao ([#1548](https://github.com/Tencent/tdesign-miniprogram/pull/1548))
- 修复控制台告警 @LeeJim ([#1586](https://github.com/Tencent/tdesign-miniprogram/pull/1586))
- `NavBar`: 补充根元素缺失的高度 @LeeJim ([#1526](https://github.com/Tencent/tdesign-miniprogram/pull/1526))
- `Search`: 修复插槽命名错误 @anlyyao ([#1529](https://github.com/Tencent/tdesign-miniprogram/pull/1529))
- `Loading`: 支持无障碍访问 @yaogengzhu ([#1534](https://github.com/Tencent/tdesign-miniprogram/pull/1534))
- `Checkbox`: 修复 `--td-checkbox-icon-size` 对未选中态复选框不生效问题 @anlyyao ([#1530](https://github.com/Tencent/tdesign-miniprogram/pull/1530))
- `BackTop`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Badge`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Grid`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Image`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Input`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Link`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Loading`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Message`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `BackTop`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `CountDown`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `TabBar`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `TextArea`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Toast`: 优化插槽渲染不再需要传入 `slot` 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `CountDown`: 补充 `content` 插槽 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Drawer`: 补充 `title` 插槽 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Radio`: 补充 `label`、`content` 插槽 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `TabPanel`: 补充 `panel` 插槽 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `ImageViewer`:
  - 优化插槽渲染逻辑，不再需要传入 `slot` 字符串 @LeeJim ([#1544](https://github.com/Tencent/tdesign-miniprogram/pull/1544))
  - 修复关闭点击不生效的问题，以及 trigger 参数不对的问题 @LeeJim ([#1544](https://github.com/Tencent/tdesign-miniprogram/pull/1544))
- `Calendar`:
  - 移除 `tabindex` 元素 的 `outline` 样式 @anlyyao ([#1573](https://github.com/Tencent/tdesign-miniprogram/pull/1573))
  - 优化 `title` 插槽，不再需要传入 `slot` 字符串 @LeeJim ([#1588](https://github.com/Tencent/tdesign-miniprogram/pull/1588))
- `Button`: 修复 `CSS Variable` 变量命名错误 @anlyyao ([#1563](https://github.com/Tencent/tdesign-miniprogram/pull/1563))

## 🌈 1.0.0-rc.1 `2023-01-18`

### 🚨 Breaking Changes

- `Dialog`: 移除内置的 `input` 样式 @LeeJim ([#1516](https://github.com/Tencent/tdesign-miniprogram/pull/1516))
- `Input`: 优化 `DOM`，移除外置的 `wapper` 元素 @LeeJim ([#1516](https://github.com/Tencent/tdesign-miniprogram/pull/1516))

### 🚀 Features

- `Cell`:
  - 新增底边框左右边距 `CSS Variables` @anlyyao ([#1515](https://github.com/Tencent/tdesign-miniprogram/pull/1515))
  - 补充 `CSS Variables` @anlyyao ([#1517](https://github.com/Tencent/tdesign-miniprogram/pull/1517))
- `SideBar`: 支持传入 `Icon` @LeeJim ([#1520](https://github.com/Tencent/tdesign-miniprogram/pull/1520))
- `Tabs`: 支持传入 `Icon` @LeeJim ([#1519](https://github.com/Tencent/tdesign-miniprogram/pull/1519))

### 🐞 Bug Fixes

- `Upload`: 修复 `add-content` 不生效，并优化插槽渲染，不再需要传入 `add-content = 'slot'` @LeeJim ([#1507](https://github.com/Tencent/tdesign-miniprogram/pull/1507))
- `Cascader`: 修复 `slot` 无法使用的问题 @LeeJim ([#1508](https://github.com/Tencent/tdesign-miniprogram/pull/1508))
- `Picker`: 修复样式、优化布局以及交互体验 @LeeJim ([#1513](https://github.com/Tencent/tdesign-miniprogram/pull/1513))
- `Swiper`: 修复 `autoplay` 状态下，`swiper` 偶现左右抖动问题 @anlyyao ([#1494](https://github.com/Tencent/tdesign-miniprogram/pull/1494))

## 🌈 1.0.0-rc `2023-01-12`

### 🚨 Breaking Changes

- 全部组件开启 `vritualHost`，当基础库版本低于 `2.19.2` 自动关闭 @LeeJim ([#1495](https://github.com/Tencent/tdesign-miniprogram/pull/1495))
- 全部组件使用 `style` 属性替代 `customStyle` @LeeJim ([#1495](https://github.com/Tencent/tdesign-miniprogram/pull/1495))
- `Tabs`: 废弃 `placement` 属性，左右布局请使用 SideBar 组件 @LeeJim ([#1492](https://github.com/Tencent/tdesign-miniprogram/pull/1492))

### 🚀 Features

- `Cell`: 新增 `CSS Variables` 用于控制高度 @LeeJim ([#1482](https://github.com/Tencent/tdesign-miniprogram/pull/1482))
- `Indexes`: 新增支持 `stickyOffset` 属性，用于调整吸顶时的距离 @LeeJim ([#1485](https://github.com/Tencent/tdesign-miniprogram/pull/1485))
- `Button`: 支持` 0.5px` 边框 @anlyyao ([#1474](https://github.com/Tencent/tdesign-miniprogram/pull/1474))

### 🐞 Bug Fixes

- `Button`: 修复 `shape = 'round'` 或 `‘circle’` 时，`border`样式错误 @anlyyao ([#1491](https://github.com/Tencent/tdesign-miniprogram/pull/1491))
- `Calendar`: 修复视觉问题 @LeeJim ([#1473](https://github.com/Tencent/tdesign-miniprogram/pull/1473))
- `Collapse`:
  - 当 panel 内容为动态内容时，支持展开 @LeeJim ([#1477](https://github.com/Tencent/tdesign-miniprogram/pull/1477))
  - 面板收起时，隐藏 `header` 的边框 @LeeJim ([#1493](https://github.com/Tencent/tdesign-miniprogram/pull/1493))
- `Textarea`: 支持自适应父容器高度 @anlyyao ([#1484](https://github.com/Tencent/tdesign-miniprogram/pull/1484))
- `Dialog`: 修复 `confirmBtn` 为 `string` 类型时，样式错误 @anlyyao ([#1474](https://github.com/Tencent/tdesign-miniprogram/pull/1474))
- `Stepper`: 修复 `theme='normal'`时禁用态视觉错误 @anlyyao ([#1487](https://github.com/Tencent/tdesign-miniprogram/pull/1487))
- `Rate`: 修复半选时 tips 的图标 @LeeJim ([#1490](https://github.com/Tencent/tdesign-miniprogram/pull/1490))

## 🌈 0.x `2021-11-25 - 2023-01-09`

前往 [GitHub](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/tdesign-miniprogram/changelogs/CHANGELOG-0.x.md) 查看 `0.x` 更新日志
