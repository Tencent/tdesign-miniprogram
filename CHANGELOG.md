---
title: 更新日志
spline: explain
toc: false
docClass: timeline
---
## 0.6.0 `2022-3-8`
### Bug Fixes
- Stepper: 修复 Stepper 组件事件向上冒泡 [#216](https://github.com/Tencent/tdesign-miniprogram/pull/216) [@zhenzhencai](https://github.com/zhenzhencai)
- Checkbox: 修复 prefix 问题 [#218](https://github.com/Tencent/tdesign-miniprogram/pull/218) [@amberlwan](https://github.com/amberlwan)
- Popup: 支持默认 slot [#219](https://github.com/Tencent/tdesign-miniprogram/pull/219) [@Perisiguiendo](https://github.com/Perisiguiendo)
- Image: 记录 Image 组件传入的 src, 防止 src 相同时重复刷新 [#221](https://github.com/Tencent/tdesign-miniprogram/pull/221) [@xihangzhou](https://github.com/xihangzhou)
- Tag: 增加外部样式类 [#223](https://github.com/Tencent/tdesign-miniprogram/pull/223) [@xihangzhou](https://github.com/xihangzhou)
- Button: 修改对 Button 组件的使用 demo [#229](https://github.com/Tencent/tdesign-miniprogram/pull/229) [@anlyyao](https://github.com/anlyyao)
- Toast: 
  - 修改未传入的参数为默认值 [#230](https://github.com/Tencent/tdesign-miniprogram/pull/230) [@scshsy](https://github.com/scshsy)
  -  修复z-index 低于 Popup 问题 [#233](https://github.com/Tencent/tdesign-miniprogram/pull/233) [@LeeJim](https://github.com/LeeJim)
- Dialog: 
  - 修复调用时没重复默认值问题 [#235](https://github.com/Tencent/tdesign-miniprogram/pull/235) [@scshsy](https://github.com/scshsy)
  - 修复 dialog 内 Button 样式错误 [#236](https://github.com/Tencent/tdesign-miniprogram/pull/236) [@anlyyao](https://github.com/anlyyao)
- Upload: 修复在 iOS 上无法选择的问题 [#239](https://github.com/Tencent/tdesign-miniprogram/pull/239) [@LeeJim](https://github.com/LeeJim)

### BREAKING CHANGES
- Button: [#212](https://github.com/Tencent/tdesign-miniprogram/pull/212) [@anlyyao](https://github.com/anlyyao) [#240](https://github.com/Tencent/tdesign-miniprogram/pull/240) [@anlyyao](https://github.com/anlyyao)
  - 重构 shape 的实现，新增支持 rectangle、circle 类型
  - 修复 shape = round 样式不对的问题
  - 支持纯图标按钮
  - shape 默认值为 rectangle

## 0.5.4 `2022-3-4`
### Bug Fixes
- Slider: 视觉调整 & demo无法滑动问题修复[#200](https://github.com/Tencent/tdesign-miniprogram/pull/200) [@anlyyao](https://github.com/anlyyao)
- Search: 修复圆角样式不生效问题[#208](https://github.com/Tencent/tdesign-miniprogram/pull/208) [@JJunYang](https://github.com/JJunYang)
- Tab-bar: 修复value不生效问题[#211](https://github.com/Tencent/tdesign-miniprogram/pull/211) [@LeeJim](https://github.com/LeeJim)
### Feature
- Picker: 支持渐进式滚动[#203](https://github.com/Tencent/tdesign-miniprogram/pull/203) [@wutianSweet](https://github.com/wutianSweet)
- Tabs: 添加滚动条外部样式类[#213](https://github.com/Tencent/tdesign-miniprogram/pull/213) [@JJunYang](https://github.com/JJunYang)
  
## 0.5.3 `2022-2-24`
### Bug Fixes
- Input: 修复 label 不生效的问题 [#190](https://github.com/Tencent/tdesign-miniprogram/pull/190) [@zhenzhencai](https://github.com/zhenzhencai)
- Slider: 修复 value 不受控的问题 [#193](https://github.com/Tencent/tdesign-miniprogram/pull/193) [@LeeJim](https://github.com/LeeJim)
- Search: [#195](https://github.com/Tencent/tdesign-miniprogram/pull/195) [@LeeJim](https://github.com/LeeJim)
  - 移除受控用法
  - 支持双向绑定
  - 修复 placeholder 展示错误的问题
## 0.5.2 `2022-2-15`

### Bug Fixes
- Stepper: 修复标签过长时的遮挡问题 [#175](https://github.com/Tencent/tdesign-miniprogram/pull/175) [@GAOGAO1994](https://github.com/GAOGAO1994)
- Upload: 修复 success 事件，返回当前选择的所有文件 [#181](https://github.com/Tencent/tdesign-miniprogram/pull/181) [@LeeJim](https://github.com/LeeJim)
- Checkbox: 修复选择异常的问题 [#181](https://github.com/Tencent/tdesign-miniprogram/pull/181) [@LeeJim](https://github.com/LeeJim)
### Feature
- Upload: 新增 add 事件，返回当前选择的文件 [#181](https://github.com/Tencent/tdesign-miniprogram/pull/181) [@LeeJim](https://github.com/LeeJim)

## 0.5.1 `2022-2-15`

### Bug Fixes

- Stepper 
  - 修复外部样式类失效的问题 [#168](https://github.com/Tencent/tdesign-miniprogram/pull/168) [@walkerliu01](https://github.com/walkerliu01)
  - 修复点击热区过于小的问题 [#169](https://github.com/Tencent/tdesign-miniprogram/pull/169) [@LeeJim](https://github.com/LeeJim)
- Cell: 修复基础样式丢失的问题 [#171](https://github.com/Tencent/tdesign-miniprogram/pull/171) [@LeeJim](https://github.com/LeeJim)
- CountDown: 修复基础样式丢失的问题 [#172](https://github.com/Tencent/tdesign-miniprogram/pull/172) [@LeeJim](https://github.com/LeeJim)
- Divider: 修复基础样式丢失的问题 [#173](https://github.com/Tencent/tdesign-miniprogram/pull/173) [@LeeJim](https://github.com/LeeJim)
- Checkbox: 修复禁用状态下的选中态 [#175](https://github.com/Tencent/tdesign-miniprogram/pull/175) [@amberlwan](https://github.com/amberlwan)
### Feature

- Steps: 升级新版视觉 [#167](https://github.com/Tencent/tdesign-miniprogram/pull/167) [@LeeJim](https://github.com/LeeJim)
- Dialog: 新增外部样式类 [#170](https://github.com/Tencent/tdesign-miniprogram/pull/170) [@LeeJim](https://github.com/LeeJim)
- CountDown: 新增 3 个属性：`size`、`theme`、`splitWithUnit` [#172](https://github.com/Tencent/tdesign-miniprogram/pull/172) [@LeeJim](https://github.com/LeeJim)

## 0.5.0 `2022-1-28`

### Bug Fixes

- 修复基础样式丢失的问题：
  - Loading [#140](https://github.com/Tencent/tdesign-miniprogram/pull/140) [@JJunYang](https://github.com/JJunYang)
  - Badge [#131](https://github.com/Tencent/tdesign-miniprogram/pull/131) [@Perisiguiendo](https://github.com/Perisiguiendo)
  - Avatar [#116](https://github.com/Tencent/tdesign-miniprogram/pull/116) [@Perisiguiendo](https://github.com/Perisiguiendo)
- Button: 修复 Disabled 失效的问题 [#134](https://github.com/Tencent/tdesign-miniprogram/pull/134) [@LeeJim](https://github.com/LeeJim)
- Search: 修复事件参数错误的问题 [#132](https://github.com/Tencent/tdesign-miniprogram/pull/132) [@Perisiguiendo](https://github.com/Perisiguiendo)
- Dialog: 修复 Dialog.action 显示错误的问题 [#124](https://github.com/Tencent/tdesign-miniprogram/pull/124) [@LeeJim](https://github.com/LeeJim)

### BREAKING CHANGES

- 组件支持受控用法，对应的非受控属性增加了 `default` 前缀。支持受控的组件如下：
  - Checkbox [#158](https://github.com/Tencent/tdesign-miniprogram/pull/158) [@amberlwan](https://github.com/amberlwan)
  - Upload [#156](https://github.com/Tencent/tdesign-miniprogram/pull/156) [@LeeJim](https://github.com/LeeJim)
  - Search [#152](https://github.com/Tencent/tdesign-miniprogram/pull/152) [@LeeJim](https://github.com/LeeJim)
  - Slider [#151](https://github.com/Tencent/tdesign-miniprogram/pull/151) [@LeeJim](https://github.com/LeeJim)
  - Stepper [#150](https://github.com/Tencent/tdesign-miniprogram/pull/150) [@LeeJim](https://github.com/LeeJim)
  - Rate [#149](https://github.com/Tencent/tdesign-miniprogram/pull/149) [@LeeJim](https://github.com/LeeJim)
  - Tabbar [#148](https://github.com/Tencent/tdesign-miniprogram/pull/148) [@LeeJim](https://github.com/LeeJim)
  - Tabs [#147](https://github.com/Tencent/tdesign-miniprogram/pull/147) [@LeeJim](https://github.com/LeeJim)
  - Steps [#146](https://github.com/Tencent/tdesign-miniprogram/pull/146) [@LeeJim](https://github.com/LeeJim)
  - Radio [#143](https://github.com/Tencent/tdesign-miniprogram/pull/143) [@LeeJim](https://github.com/LeeJim)
  - Tag [#130](https://github.com/Tencent/tdesign-miniprogram/pull/130) [@LeeJim](https://github.com/LeeJim)
  - Dialog [#124](https://github.com/Tencent/tdesign-miniprogram/pull/124) [@LeeJim](https://github.com/LeeJim)
  - Switch [#122](https://github.com/Tencent/tdesign-miniprogram/pull/122) [@LeeJim](https://github.com/LeeJim)
- Textarea: 属性变更：`name` -> `label` [#157](https://github.com/Tencent/tdesign-miniprogram/pull/157) [@LeeJim](https://github.com/LeeJim)
- Input: 属性变更：`name` -> `label` [#153](https://github.com/Tencent/tdesign-miniprogram/pull/153) [@LeeJim](https://github.com/LeeJim)
- Search: 属性变更：[#152](https://github.com/Tencent/tdesign-miniprogram/pull/152) [@LeeJim](https://github.com/LeeJim)
  - `actionText` -> `action`
  - `keyword` -> `value`


### Feature

- Input: 支持双向绑定 [#133](https://github.com/Tencent/tdesign-miniprogram/pull/133) [@LeeJim](https://github.com/LeeJim)
- Tabbar:  新增 split 属性控制是否展示分割线 [#126](https://github.com/Tencent/tdesign-miniprogram/pull/126) [@LeeJim](https://github.com/LeeJim)
- Icon: 支持自定义 prefix [#117](https://github.com/Tencent/tdesign-miniprogram/pull/117) [@vhxubo](https://github.com/vhxubo)
## 0.4.2 `2022-1-10`

### Bug Fixes

- Popup: 修复事件参数错误的问题 [#91](https://github.com/Tencent/tdesign-miniprogram/pull/91) [@LeeJim](https://github.com/LeeJim)
- Checkbox: 完善缺失的插槽(label、content) [#95](https://github.com/Tencent/tdesign-miniprogram/pull/95) [@LeeJim](https://github.com/LeeJim)
- Dialog: 修复按钮宽度计算错误的问题 [#100](https://github.com/Tencent/tdesign-miniprogram/pull/100) [@LeeJim](https://github.com/LeeJim)
- Button: 修复在 `{ style: "v2" }` 的情况下，按钮宽度异常的问题 [#79](https://github.com/Tencent/tdesign-miniprogram/pull/79) [@vhxubo](https://github.com/vhxubo)

## 0.4.1 `2022-1-6`
### Bug Fixes

- Tabs: 修复滑动切换时，不会触发 `change` 事件的问题 [#65](https://github.com/Tencent/tdesign-miniprogram/pull/65)  [@BeanCookie](https://github.com/BeanCookie)
- Message: 未正确引入组件时，抛出的错误信息 [#73](https://github.com/Tencent/tdesign-miniprogram/pull/73) [@LeeJim](https://github.com/LeeJim) 
- Dialog: 修复样式异常的问题 [#83](https://github.com/Tencent/tdesign-miniprogram/pull/83) [@LeeJim](https://github.com/LeeJim)

### Feature

- Button: 支持 Content 属性，代表按钮内容 [#83](https://github.com/Tencent/tdesign-miniprogram/pull/83) [@LeeJim](https://github.com/LeeJim)
- Dialog: `cancelBtn` 和 `confirmBtn` 支持所有 `t-button` 的属性 [#83](https://github.com/Tencent/tdesign-miniprogram/pull/83) [@LeeJim](https://github.com/LeeJim)

## 0.4.0 `2021-12-30`

### BREAKING CHANGES
- CSS 类名规范：
  - Slider [#45](https://github.com/Tencent/tdesign-miniprogram/pull/45) [@JJunYang](https://github.com/JJunYang)
  - Stepper [#46](https://github.com/Tencent/tdesign-miniprogram/pull/46) [@JJunYang](https://github.com/JJunYang)
  - Button [#51](https://github.com/Tencent/tdesign-miniprogram/pull/51) [@LeeJim](https://github.com/LeeJim)
  - Search [#54](https://github.com/Tencent/tdesign-miniprogram/pull/54) [@JJunYang](https://github.com/JJunYang)
  - Upload [#55](https://github.com/Tencent/tdesign-miniprogram/pull/55) [@JJunYang](https://github.com/JJunYang)
  - Radio [#56](https://github.com/Tencent/tdesign-miniprogram/pull/56) [@LeeJim](https://github.com/LeeJim)
### Bug Fixes

- Input: 移除了废弃属性 `auto-focus`，详情可关注小程序官方文档  [@LeeJim](https://github.com/LeeJim)
- Tabs: 
  - 修复选项卡底部滑条丢失的问题 [#52](https://github.com/Tencent/tdesign-miniprogram/pull/52)  [@LeeJim](https://github.com/LeeJim)
  - 补充了初始化样式 [#68](https://github.com/Tencent/tdesign-miniprogram/pull/68)  [@LeeJim](https://github.com/LeeJim)

## 0.3.0 `2021-12-23`

### BREAKING CHANGES
- CSS 类名规范：
  - Textarea [#26](https://github.com/Tencent/tdesign-miniprogram/pull/26) [@JJunYang](https://github.com/JJunYang)
  - Toast [#27](https://github.com/Tencent/tdesign-miniprogram/pull/27) [@jin0209](https://github.com/jin0209)
  - Sticky [#24](https://github.com/Tencent/tdesign-miniprogram/pull/24) [@jin0209](https://github.com/jin0209)
  - Search [#28](https://github.com/Tencent/tdesign-miniprogram/pull/28) [@JJunYang](https://github.com/JJunYang)
  - Tabbar [#34](https://github.com/Tencent/tdesign-miniprogram/pull/34) [@LeeJim](https://github.com/LeeJim)
  - Backtop [#35](https://github.com/Tencent/tdesign-miniprogram/pull/35) [@LeeJim](https://github.com/LeeJim)
  - Skeleton [#20](https://github.com/Tencent/tdesign-miniprogram/pull/20) [@jin0209](https://github.com/jin0209)
  - PullDownRefresh [#38](https://github.com/Tencent/tdesign-miniprogram/pull/38) [@jin0209](https://github.com/jin0209)

### Feature

- Steps: 支持通过 slot 的方式传入 icon [#22](https://github.com/Tencent/tdesign-miniprogram/pull/22) [@LeeJim](https://github.com/LeeJim)

### Bug Fixes

- 修复开发者工具进行 NPM 构建时报错的问题 [@LeeJim](https://github.com/LeeJim)

## 0.2.0 `2021-12-20`
### BREAKING CHANGES

- CSS 类名规范：
  - Cell [[4a0db04]](https://github.com/Tencent/tdesign-miniprogram/commit/4a0db04768f56016b27405090890d8fcb113c38b) [@jin0209](https://github.com/jin0209)
  - Grid [[13c77c9]](https://github.com/Tencent/tdesign-miniprogram/commit/13c77c93f55e04d7fac144ba5a0b16d336642080) [@jin0209](https://github.com/jin0209)
  - Tabs [[e064d8e]](https://github.com/Tencent/tdesign-miniprogram/commit/e064d8e7fd6c33e81b399bf0b5c15f21ebc7c38e) [@jin0209](https://github.com/jin0209)
  - NavBar [[249af24]](https://github.com/Tencent/tdesign-miniprogram/commit/249af24a8dc05eb868d63138069ad13858a586eb) [@jin0209](https://github.com/jin0209)
  - CountDown [[c6ce131]](https://github.com/Tencent/tdesign-miniprogram/commit/c6ce131cdfd453c8250124d874d6a705a4332a07) [@jin0209](https://github.com/jin0209)
  - Image [[707f9ec]](https://github.com/Tencent/tdesign-miniprogram/commit/707f9ec91cf95a70db86c6dc519d0c4ad869a9c0) [@jin0209](https://github.com/jin0209)
  - Footer [[15036a7]](https://github.com/Tencent/tdesign-miniprogram/commit/15036a75f47244fb859f067309a8a8288b4b606d) [@jin0209](https://github.com/jin0209)
  - Divider [[4cad692]](https://github.com/Tencent/tdesign-miniprogram/commit/4cad69212ab4d71fc84014a82a43440ac9c47592) [@jin0209](https://github.com/jin0209)
  - Avatar [[b7ef036]](https://github.com/Tencent/tdesign-miniprogram/commit/b7ef036106a662275941c4217c4e870a2460736f) [@jin0209](https://github.com/jin0209)
  - Badge [[154a087]](https://github.com/Tencent/tdesign-miniprogram/commit/154a0870f8565f42168990af207051b0c2e427d4) [@jin0209](https://github.com/jin0209)
  - Indexes [[bf0ae0]](https://github.com/Tencent/tdesign-miniprogram/commit/bf0ae05dc0f419aa0a50904f0d22221f67526b18) [@jin0209](https://github.com/jin0209)
  - Input [[6201113]](https://github.com/Tencent/tdesign-miniprogram/commit/6201113a3a7d114b75ca7813ac4c6cb74ccbbf1f) [@JJunYang](https://github.com/JJunYang)
  - Checkbox [[6bf8fc8]](https://github.com/Tencent/tdesign-miniprogram/commit/6bf8fc8c49abf9084c4f968374896ae63270c0a7) [@JJunYang](https://github.com/JJunYang)
- Tabs: 移除 `click` 事件 [[5973c8a]](https://github.com/Tencent/tdesign-miniprogram/commit/5973c8a76e18fe68bfba81a26ff78a30f11cd5eb) [@JJunYang](https://github.com/JJunYang)

### Bug Fixes

- 修复图标不对齐的问题 [[97e1b7f]](https://github.com/Tencent/tdesign-miniprogram/commit/97e1b7f86cb406e49fc73f154a90a1107ddb17e3) [@LeeJim](https://github.com/LeeJim)
- Rate: 修复展示错乱的问题 [[8c5fe61]](https://github.com/Tencent/tdesign-miniprogram/commit/8c5fe61d4fe00ffe86996743414a738d6e8b2407) [@LeeJim](https://github.com/LeeJim)
- Tabs: 修复初始化时触发 `change` 的问题 [[1411217]](https://github.com/Tencent/tdesign-miniprogram/commit/141121785f6d7ca2458425aa5fcf10d2419ec248) [@JJunYang](https://github.com/JJunYang)

### Feature

- Tag: 支持不同尺寸的 icon [[574cc3c]](https://github.com/Tencent/tdesign-miniprogram/commit/6eee831f4308d205cc2e7187886909922) [@LeeJim](https://github.com/LeeJim)

## 0.1.0-alpha.1 `2021-12-8`

### Bug Fixes

- Swiper: 修复无法切换的问题
- Picker: 修复默认按钮没显示的问题

## 0.1.0 (2021-11-25)

### BREAKING CHANGES

- Badege: `visible` 更名为 `showZero`
- Steps: `direction` 更名为 `layout`

### Bug Fixes

- DateTimePicker: 修复初始值为空时，取消筛选的问题
