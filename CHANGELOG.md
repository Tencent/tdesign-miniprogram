---
title: 更新日志
spline: explain
toc: false
docClass: timeline
---

## 0.4.1 `2021-1-6`
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
