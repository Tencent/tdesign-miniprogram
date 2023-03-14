---
title: 更新日志
spline: explain
toc: false
docClass: timeline
---

## 🌈 1.0.3 `2023-03-14` 
### 🚀 Features
- `Picker`: 新增支持 keys 属性 @LeeJim ([#1759](https://github.com/Tencent/tdesign-miniprogram/pull/1759))
- `Input`: 支持 `nicknamereview` 事件 @anlyyao ([#1755](https://github.com/Tencent/tdesign-miniprogram/pull/1755))
- `Popup`: 增加默认圆角、默认背景色、安全底边距 @jarmywang ([#1758](https://github.com/Tencent/tdesign-miniprogram/pull/1758))
### 🐞 Bug Fixes
- `DropdownMenu`: 修复 label 的展示逻辑 @LeeJim ([#1748](https://github.com/Tencent/tdesign-miniprogram/pull/1748))
- `DropdownMenu`: 修复 radio 图标的展示位置 @LeeJim ([#1748](https://github.com/Tencent/tdesign-miniprogram/pull/1748))
- `Popup`: 修复关闭按钮无法点击的问题 @jarmywang ([#1754](https://github.com/Tencent/tdesign-miniprogram/pull/1754))
- `Calendar`: 修复 format 属性不是响应式的问题 @LeeJim ([#1753](https://github.com/Tencent/tdesign-miniprogram/pull/1753))
- `Checkbox`: 修复存在 disabled 选项时，全选出错的问题 @LeeJim ([#1766](https://github.com/Tencent/tdesign-miniprogram/pull/1766))
- `Badge`: 修复 shape = ribbon 时，修改 color 不能改变全部颜色的问题 @LeeJim ([#1764](https://github.com/Tencent/tdesign-miniprogram/pull/1764))
- `Upload`: 修复 sizelimit 不支持对象传参的问题 @LeeJim ([#1763](https://github.com/Tencent/tdesign-miniprogram/pull/1763))
- `Upload`: 修复 sizelimit 默认单位和文档不一致的问题，从 `B` 改成 `KB` @LeeJim ([#1763](https://github.com/Tencent/tdesign-miniprogram/pull/1763))
- `Button`: 取消 `loading` 态下的 hover 效果 @anlyyao ([#1739](https://github.com/Tencent/tdesign-miniprogram/pull/1739))
- `Button`: 事件 `tap` 仅在非加载或禁用状态时触发 @anlyyao ([#1739](https://github.com/Tencent/tdesign-miniprogram/pull/1739))
- `Badge`: 优化和不同组件组合的无障碍访问 @yaogengzhu ([#1428](https://github.com/Tencent/tdesign-miniprogram/pull/1428))
- `Cell`: 修复 `note` 内容超出被遮挡问题 @anlyyao ([#1769](https://github.com/Tencent/tdesign-miniprogram/pull/1769))
- `Progress`: 修复 label 插槽无效 @anlyyao ([#1771](https://github.com/Tencent/tdesign-miniprogram/pull/1771))
- `Grid`: 修复 grid-item 的 image 插槽不可用的问题，需传入 image =  slot 才可使用插槽 @LeeJim ([#1772](https://github.com/Tencent/tdesign-miniprogram/pull/1772))

### 🚧 Others
- `Picker`: 文档中移除 render-label、columns 还不支持的属性 @LeeJim ([#1759](https://github.com/Tencent/tdesign-miniprogram/pull/1759))


## 🌈 1.0.2 `2023-03-07` 
### 🐞 Bug Fixes
- `Radio`: 修复使用 options 时可传入的属性不齐的问题 @LeeJim ([#1707](https://github.com/Tencent/tdesign-miniprogram/pull/1707))
- `Checkbox`: 修复使用 options 时可传入的属性不齐的问题 @LeeJim ([#1707](https://github.com/Tencent/tdesign-miniprogram/pull/1707))
- `RadioGroup`: 修复 placement 默认值错误的问题 @LeeJim ([#1707](https://github.com/Tencent/tdesign-miniprogram/pull/1707))
- `RadioGroup`: 修复 icon 消失的问题 @LeeJim ([#1707](https://github.com/Tencent/tdesign-miniprogram/pull/1707))
- `ActionSheet`: 修复点击报错的问题 @LeeJim ([#1726](https://github.com/Tencent/tdesign-miniprogram/pull/1726))
- `Swiper`: 修复在真机上圆角无效问题 @anlyyao ([#1733](https://github.com/Tencent/tdesign-miniprogram/pull/1733))
- `NavBar`: 修复外部样式类不可用的问题 @LeeJim ([#1735](https://github.com/Tencent/tdesign-miniprogram/pull/1735))
- `Footer`: 补齐 API 文档描述 @anlyyao ([#1737](https://github.com/Tencent/tdesign-miniprogram/pull/1737))
- `Swiper`: 修复基础调试库低于2.19.2时，图片不显示问题 @anlyyao ([#1736](https://github.com/Tencent/tdesign-miniprogram/pull/1736))
- `ImageViewer`: 修复图片显示不全的问题 @anlyyao ([#1656](https://github.com/Tencent/tdesign-miniprogram/pull/1656))
- `Input`: 修复 `maxLength` 无效问题，并将默认值变更为 -1 @anlyyao ([#1732](https://github.com/Tencent/tdesign-miniprogram/pull/1732))
- `Input`: 修复键盘弹起时，点击 clear 没反应的问题 @anlyyao ([#1732](https://github.com/Tencent/tdesign-miniprogram/pull/1732))

## 🌈 1.0.1 `2023-03-01` 
### 🚀 Features
- `Cascader`: 新增 close 事件 @LeeJim ([#1685](https://github.com/Tencent/tdesign-miniprogram/pull/1685))
- `Picker`: 新增 close 事件 @LeeJim ([#1687](https://github.com/Tencent/tdesign-miniprogram/pull/1687))
- `DateTimePicker`: 新增 close 事件 @LeeJim ([#1687](https://github.com/Tencent/tdesign-miniprogram/pull/1687))
- `Upload`: 支持无障碍访问 @zhangpaopao0609 ([#1238](https://github.com/Tencent/tdesign-miniprogram/pull/1238))
### 🐞 Bug Fixes
- `ActionSheet`: 补充 close 事件，增加 trigger 参数 @LeeJim ([#1683](https://github.com/Tencent/tdesign-miniprogram/pull/1683))
- `Cascader`: 修复 pick 事件的参数 @LeeJim ([#1685](https://github.com/Tencent/tdesign-miniprogram/pull/1685))
- `drawer`: 修复 close 事件不生效的问题 @LeeJim ([#1686](https://github.com/Tencent/tdesign-miniprogram/pull/1686))
- `Message`: 修复外部样式类 `t-class-link` 无效问题 @anlyyao ([#1690](https://github.com/Tencent/tdesign-miniprogram/pull/1690))
- `Cascader`: 修复 radio 图标显示位置不正确的问题 @LeeJim ([#1693](https://github.com/Tencent/tdesign-miniprogram/pull/1693))
- `DropdownMenu`: 修复 radio 图标显示位置不正确的问题 @LeeJim ([#1693](https://github.com/Tencent/tdesign-miniprogram/pull/1693))
- `TreeSelect`: 修复 radio 图标显示位置不正确的问题 @LeeJim ([#1693](https://github.com/Tencent/tdesign-miniprogram/pull/1693))
- `Message`:  更新内嵌 `link` 组件的属性 @anlyyao ([#1694](https://github.com/Tencent/tdesign-miniprogram/pull/1694))

## 🌈 1.0.0 `2023-02-27` 
### ❗ Breaking Changes
- 主题色 CSS Variables 命名从 `--td-primary-color` 改成 `--td-brand-color` @LeeJim ([#1623](https://github.com/Tencent/tdesign-miniprogram/pull/1623))
- `Cell`: 调整 hover 状态对应的类名 @anlyyao ([#1635](https://github.com/Tencent/tdesign-miniprogram/pull/1635))
- `Checkbox`: 属性 align 更名为 placement @anlyyao ([#1629](https://github.com/Tencent/tdesign-miniprogram/pull/1629))
- `Toast`: 属性 theme 的枚举值 fail 替换成 error @LeeJim ([#1647](https://github.com/Tencent/tdesign-miniprogram/pull/1647))
- `Slider`: 移除 colors 和 disabledColor，建议使用 CSS Variables 修改 @LeeJim ([#1676](https://github.com/Tencent/tdesign-miniprogram/pull/1676))
- `Loading`: 移除 theme = error 以及 theme = bar，以及调整 DOM @LeeJim ([#1626](https://github.com/Tencent/tdesign-miniprogram/pull/1626))
- `Picker`: 移除 `footer` 插槽 @anlyyao ([#1631](https://github.com/Tencent/tdesign-miniprogram/pull/1631))
- `DateTimePicker`: 移除 `footer` 插槽 @anlyyao ([#1631](https://github.com/Tencent/tdesign-miniprogram/pull/1631))
- `Radio`: 属性 align 更名为 placement @anlyyao ([#1630](https://github.com/Tencent/tdesign-miniprogram/pull/1630))
- `RadioGroup`: 属性 align 更名为 placement @anlyyao ([#1630](https://github.com/Tencent/tdesign-miniprogram/pull/1630))
- `Search`:  移除 `right-icon` 属性相关 @anlyyao ([#1628](https://github.com/Tencent/tdesign-miniprogram/pull/1628))
- `Avatar`: 移除 `bordered` 属性 @anlyyao ([#1632](https://github.com/Tencent/tdesign-miniprogram/pull/1632))
- `AvatarGroup`: `cascading` 属性默认值变更为 `left-up` @anlyyao ([#1632](https://github.com/Tencent/tdesign-miniprogram/pull/1632))
- `Message`: 移除 `action` 属性相关，使用 `link` 代替 @anlyyao ([#1637](https://github.com/Tencent/tdesign-miniprogram/pull/1637))
- `Footer`: `copyright` 更名为 `text` @anlyyao ([#1642](https://github.com/Tencent/tdesign-miniprogram/pull/1642))
- `Footer`: `textLinkList` 更名为 `links` @anlyyao ([#1642](https://github.com/Tencent/tdesign-miniprogram/pull/1642))
- `Footer`:  移除 `theme` 属性 @anlyyao ([#1642](https://github.com/Tencent/tdesign-miniprogram/pull/1642))
- `CountDown`: `theme` 属性移除 `hightlight` @anlyyao ([#1645](https://github.com/Tencent/tdesign-miniprogram/pull/1645))
- `Link`: 移除 `status` 属性 @anlyyao ([#1652](https://github.com/Tencent/tdesign-miniprogram/pull/1652))
- `Rate`: 移除 variant 属性，完全依赖 icon 属性来控制图标 @LeeJim ([#1674](https://github.com/Tencent/tdesign-miniprogram/pull/1674))
- `NoticeBar`:  `extra` 属性更名为 `operation` @anlyyao ([#1638](https://github.com/Tencent/tdesign-miniprogram/pull/1638))

### 🚀 Features
- `Search`: 新增 `clearable`，用于启用清除控件 @anlyyao ([#1628](https://github.com/Tencent/tdesign-miniprogram/pull/1628))
- `Button`: 新增支持 suffix 插槽 @LeeJim ([#1624](https://github.com/Tencent/tdesign-miniprogram/pull/1624))
- `Message`: 新增 `link` 属性 @anlyyao ([#1637](https://github.com/Tencent/tdesign-miniprogram/pull/1637))
- `Link`: 新增 `disabled` 属性 @anlyyao ([#1652](https://github.com/Tencent/tdesign-miniprogram/pull/1652))
- `Link`: 新增 `hover` 属性 @anlyyao ([#1652](https://github.com/Tencent/tdesign-miniprogram/pull/1652))
- `Link`: 新增 `externalClasses` 属性 @anlyyao ([#1652](https://github.com/Tencent/tdesign-miniprogram/pull/1652))
- `Drawer`: 补充 `hover` 态样式 @anlyyao ([#1673](https://github.com/Tencent/tdesign-miniprogram/pull/1673))
- `AvatarGroup`: 头像组中默认带边框 @anlyyao ([#1678](https://github.com/Tencent/tdesign-miniprogram/pull/1678))
### 🐞 Bug Fixes
- `Fab`: 修复丢失style 默认值的问题 @LeeJim ([#1625](https://github.com/Tencent/tdesign-miniprogram/pull/1625))
- `Dialog`: 修复文字按钮`hover`态圆角不正确 @anlyyao ([#1633](https://github.com/Tencent/tdesign-miniprogram/pull/1633))
- `Switch`: 优化禁用态下 loading 的颜色 @LeeJim ([#1627](https://github.com/Tencent/tdesign-miniprogram/pull/1627))
- `Message`: 修复主题图标不正确 @anlyyao ([#1637](https://github.com/Tencent/tdesign-miniprogram/pull/1637))
- `NavBar`: 修复胶囊内部点击事件没反应的问题 @LeeJim ([#1641](https://github.com/Tencent/tdesign-miniprogram/pull/1641))
- `Dialog`: 修复 confirm 的拼写错误 @zzzimooo ([#1644](https://github.com/Tencent/tdesign-miniprogram/pull/1644))
- `CountDown`: 修复默认风格下时间单位分割的问题 @anlyyao ([#1645](https://github.com/Tencent/tdesign-miniprogram/pull/1645))
- `Slider`: 优化无障碍访问支持 @byq1213 ([#1388](https://github.com/Tencent/tdesign-miniprogram/pull/1388))
- `Collapse`: 修复 disabled 状态下标题颜色错误的问题 @LeeJim ([#1648](https://github.com/Tencent/tdesign-miniprogram/pull/1648))
- `Cell`: 修复外部样式类 t-class-title 放置位置错误的问题 @LeeJim ([#1648](https://github.com/Tencent/tdesign-miniprogram/pull/1648))
- `Tag`: 修复 `close` 与 `click` 事件一并触发的问题 @anlyyao ([#1669](https://github.com/Tencent/tdesign-miniprogram/pull/1669))
- `Rate`: 修复 tips 偶尔会不消失的问题 @LeeJim ([#1674](https://github.com/Tencent/tdesign-miniprogram/pull/1674))
- `BackTop`: 修复 `icon` 不显示问题 @anlyyao ([#1660](https://github.com/Tencent/tdesign-miniprogram/pull/1660))
- `NoticeBar`: 修复主题图标不正确 @anlyyao ([#1638](https://github.com/Tencent/tdesign-miniprogram/pull/1638))
- `Badge`: 调整 display 使用 block 替换 inline-block  @anlyyao ([#1679](https://github.com/Tencent/tdesign-miniprogram/pull/1679))
- `Dialog`: 修复命令行方式没法调整按钮布局的问题 @zzzimooo ([#1655](https://github.com/Tencent/tdesign-miniprogram/pull/1655))
## 🌈 1.0.0-rc.3 `2023-02-20` 
### ❗ Breaking Changes
- `Image`: 插槽的渲染需要传入对应 slot 的字符串 @LeeJim ([#1609](https://github.com/Tencent/tdesign-miniprogram/pull/1609))
- `Input`: 调整 DOM 以及类名 @anlyyao ([#1585](https://github.com/Tencent/tdesign-miniprogram/pull/1585))

### 🚀 Features
- 所有组件新增支持 class 外部样式类，仅在开启 virtualHost 的情况下生效 @anlyyao ([#1587](https://github.com/Tencent/tdesign-miniprogram/pull/1587))
- `Input`: 支持 `tips` 文本方向与 `align` 属性值一致 @anlyyao ([#1585](https://github.com/Tencent/tdesign-miniprogram/pull/1585))
- `CellGroup`: 默认最后一项 `cell` 无底部边框线 @anlyyao ([#1607](https://github.com/Tencent/tdesign-miniprogram/pull/1607))
- `Image`: 补充外部样式类名 `class` @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `DropdownMenu`: 新增 `reset` 事件 @LeeJim ([#1617](https://github.com/Tencent/tdesign-miniprogram/pull/1617))
- `Drawer`: 支持无障碍访问 @zhangpaopao0609 ([#1552](https://github.com/Tencent/tdesign-miniprogram/pull/1552))

### 🐞 Bug Fixes
- `Input`: 修复 `layout = 'vertical'` 时，样式不正确 @anlyyao ([#1585](https://github.com/Tencent/tdesign-miniprogram/pull/1585))
- `Swiper`:  修复图片压缩变形问题 @anlyyao ([#1607](https://github.com/Tencent/tdesign-miniprogram/pull/1607))
- `Navbar`: 修复左侧胶囊按钮在真机上上边框线消失问题 @anlyyao ([#1607](https://github.com/Tencent/tdesign-miniprogram/pull/1607))
- `Upload`: 解决因无备用值产生的告警 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `Picker`: 解决因无备用值产生的告警 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `PullDownRefresh`: 解决因无备用值产生的告警 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `NoticeBar`: 解决 `SelectorQuery` 带来的告警 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `Link`: 修复 API 文档错误 @anlyyao ([#1611](https://github.com/Tencent/tdesign-miniprogram/pull/1611))
- `Tabs`: 修复属性不支持响应式变化的问题 @LeeJim ([#1616](https://github.com/Tencent/tdesign-miniprogram/pull/1616))
- `DropdownMenu`: 修复下拉菜单遮罩层无法点击 @RoseyW ([#1615](https://github.com/Tencent/tdesign-miniprogram/pull/1615))
- `Message`: 修复事件名称，以符合文档 @LeeJim ([#1618](https://github.com/Tencent/tdesign-miniprogram/pull/1618))
- `Dialog`: 修复事件名，从 `overlayClick` 改成 `overlay-click` @LeeJim ([#1619](https://github.com/Tencent/tdesign-miniprogram/pull/1619))
- `SwiperNav`: 修复事件名，从 `navBtnChange` 改成 `nav-btn-change` @LeeJim ([#1619](https://github.com/Tencent/tdesign-miniprogram/pull/1619))
- `TextArea`: 修复事件名，从 `lineChange` 改成 `line-change` @LeeJim ([#1619](https://github.com/Tencent/tdesign-miniprogram/pull/1619))

## 🌈 1.0.0-rc.2 `2023-02-13` 
### ❗ Breaking Changes
- `Icon`: `size` 和 `color` 属性默认值变更为 `''` @anlyyao ([#1553](https://github.com/Tencent/tdesign-miniprogram/pull/1553))
### 🚀 Features
- 所有组件同时支持 `style` 和 `customStyle` 属性 @LeeJim ([#1532](https://github.com/Tencent/tdesign-miniprogram/pull/1532))
- `Button`: 支持点击态边框颜色 CSS Variable @anlyyao ([#1530](https://github.com/Tencent/tdesign-miniprogram/pull/1530))
- `Result`: 属性 icon 支持对象类型，透传至图标组件 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `TabBar`: 属性 icon 支持对象类型，透传至图标组件 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Toast`: 属性 icon 支持对象类型，透传至图标组件 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
### 🐞 Bug Fixes
- 修复因 template 引起的控制台告警 @anlyyao ([#1548](https://github.com/Tencent/tdesign-miniprogram/pull/1548))
- 修复控制台告警 @LeeJim ([#1586](https://github.com/Tencent/tdesign-miniprogram/pull/1586))
- `NavBar`: 补充根元素缺失的高度 @LeeJim ([#1526](https://github.com/Tencent/tdesign-miniprogram/pull/1526))
- `Search`:  修复插槽命名错误 @anlyyao ([#1529](https://github.com/Tencent/tdesign-miniprogram/pull/1529))
- `Loading`: 支持无障碍访问 @yaogengzhu ([#1534](https://github.com/Tencent/tdesign-miniprogram/pull/1534))
- `Checkbox`:  修复 `--td-checkbox-icon-size` 对未选中态复选框不生效问题 @anlyyao ([#1530](https://github.com/Tencent/tdesign-miniprogram/pull/1530))
- `BackTop`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Badge`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Grid`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Image`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Input`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Link`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Loading`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Message`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `BackTop`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `CountDown`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `TabBar`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `TextArea`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Toast`: 优化插槽渲染不再需要传入 slot 字符串 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `CountDown`: 补充 content 插槽 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Drawer`: 补充 title 插槽 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `Radio`: 补充 label、content 插槽 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `TabPanel`: 补充 panel 插槽 @LeeJim ([#1539](https://github.com/Tencent/tdesign-miniprogram/pull/1539))
- `ImageViewer`: 优化插槽渲染逻辑，不再需要传入 slot 字符串 @LeeJim ([#1544](https://github.com/Tencent/tdesign-miniprogram/pull/1544))
- `ImageViewer`: 修复关闭点击不生效的问题，以及 trigger 参数不对的问题 @LeeJim ([#1544](https://github.com/Tencent/tdesign-miniprogram/pull/1544))
- `Calendar`:  移除 `tabindex` 元素 的 `outline` 样式 @anlyyao ([#1573](https://github.com/Tencent/tdesign-miniprogram/pull/1573))
- `Input`: 支持名为 `tips` 的插槽 @anlyyao ([#1572](https://github.com/Tencent/tdesign-miniprogram/pull/1572))
- `Button`: 修复 CSS Variable 变量命名错误 @anlyyao ([#1563](https://github.com/Tencent/tdesign-miniprogram/pull/1563))
- `Calendar`: 优化 title 插槽，不再需要传入 slot 字符串 @LeeJim ([#1588](https://github.com/Tencent/tdesign-miniprogram/pull/1588))

## 🌈 1.0.0-rc.1 `2023-01-18` 
### ❗ BREAKING CHANGES
- `Dialog`: 移除内置的 input 样式 @LeeJim ([#1516](https://github.com/Tencent/tdesign-miniprogram/pull/1516))
- `Input`: 优化 DOM，移除外置的 wapper 元素 @LeeJim ([#1516](https://github.com/Tencent/tdesign-miniprogram/pull/1516))

### 🚀 Features
- `Cell`: 新增底边框左右边距 CSS Variables @anlyyao ([#1515](https://github.com/Tencent/tdesign-miniprogram/pull/1515))
- `Cell`: 补充 CSS Variables @anlyyao ([#1517](https://github.com/Tencent/tdesign-miniprogram/pull/1517))
- `SideBar`: 支持传入 Icon @LeeJim ([#1520](https://github.com/Tencent/tdesign-miniprogram/pull/1520))
- `Tabs`: 支持传入 icon @LeeJim ([#1519](https://github.com/Tencent/tdesign-miniprogram/pull/1519))
### 🐞 Bug Fixes
- `Upload`: 修复 add-content 不生效的问题 @LeeJim ([#1507](https://github.com/Tencent/tdesign-miniprogram/pull/1507))
- `Upload`: 优化插槽渲染，不再需要传入 add-content = 'slot' @LeeJim ([#1507](https://github.com/Tencent/tdesign-miniprogram/pull/1507))
- `Cascader`: 修复 slot 无法使用的问题 @LeeJim ([#1508](https://github.com/Tencent/tdesign-miniprogram/pull/1508))
- `Picker`: 修复样式、优化布局以及交互体验 @LeeJim ([#1513](https://github.com/Tencent/tdesign-miniprogram/pull/1513))
- `Swiper`: 修复 `autoplay` 状态下，`swiper` 偶现左右抖动问题 @anlyyao ([#1494](https://github.com/Tencent/tdesign-miniprogram/pull/1494))

## 🌈 1.0.0-rc `2023-01-12` 
### ❗ Breaking Changes
- 全部组件开启 vritualHost，当基础库版本低于 2.19.2 自动关闭 @LeeJim ([#1495](https://github.com/Tencent/tdesign-miniprogram/pull/1495))
- 全部组件使用 style 属性替代 customStyle @LeeJim ([#1495](https://github.com/Tencent/tdesign-miniprogram/pull/1495))
- `Tabs`: 废弃 placement 属性，左右布局请使用 SideBar 组件 @LeeJim ([#1492](https://github.com/Tencent/tdesign-miniprogram/pull/1492))

### 🚀 Features
- `Cell`: 新增 CSS Varialbes 用于控制高度 @LeeJim ([#1482](https://github.com/Tencent/tdesign-miniprogram/pull/1482))
- `Indexes`: 新增支持 stickyOffset 属性，用于调整吸顶时的距离 @LeeJim ([#1485](https://github.com/Tencent/tdesign-miniprogram/pull/1485))
- `Button`: 支持 0.5px 边框 @anlyyao ([#1474](https://github.com/Tencent/tdesign-miniprogram/pull/1474))

### 🐞 Bug Fixes
- `Button`: 修复 `shape = 'round'` 或 `‘circle’` 时，`border`样式错误 @anlyyao ([#1491](https://github.com/Tencent/tdesign-miniprogram/pull/1491))
- `Calendar`: 修复视觉问题 @LeeJim ([#1473](https://github.com/Tencent/tdesign-miniprogram/pull/1473))
- `Collapse`: 当 panel 内容为动态内容时，支持展开 @LeeJim ([#1477](https://github.com/Tencent/tdesign-miniprogram/pull/1477))
- `Textarea`: 支持自适应父容器高度 @anlyyao ([#1484](https://github.com/Tencent/tdesign-miniprogram/pull/1484))
- `Dialog`: 修复 confirmBtn 为 string 类型时，样式错误 @anlyyao ([#1474](https://github.com/Tencent/tdesign-miniprogram/pull/1474))
- `Stepper`: 修复 `theme='normal'`时禁用态视觉错误 @anlyyao ([#1487](https://github.com/Tencent/tdesign-miniprogram/pull/1487))
- `Rate`: 修复半选时 tips 的图标 @LeeJim ([#1490](https://github.com/Tencent/tdesign-miniprogram/pull/1490))
- `Collapse`:  面板收起时，隐藏 header 的边框 @LeeJim ([#1493](https://github.com/Tencent/tdesign-miniprogram/pull/1493))

## 🌈 0.34.0 `2023-01-09` 
### ❗ Breaking Changes
- `Avatar`: 优化类名，符合 BEM 规范 @LeeJim ([#1441](https://github.com/Tencent/tdesign-miniprogram/pull/1441))
- `Button`: 优化类名，符合 BEM 规范 @anlyyao ([#1352](https://github.com/Tencent/tdesign-miniprogram/pull/1352))
- `Input`: 移除 size 属性 @anlyyao ([#1381](https://github.com/Tencent/tdesign-miniprogram/pull/1381))
- `Input`: 属性 borderless 默认值变更为 false @anlyyao ([#1381](https://github.com/Tencent/tdesign-miniprogram/pull/1381))
- `Avatar`: 将 avatar-group 的路径调整为 `tdesign-miniprogram/avatar-group/avatar-group` @LeeJim ([#1452](https://github.com/Tencent/tdesign-miniprogram/pull/1452))
- `Collapse`: 将 collapse-panel 的路径调整为 `tdesign-miniprogram/collapse-panel/collapse-panel` @LeeJim ([#1453](https://github.com/Tencent/tdesign-miniprogram/pull/1453))
- `DropdownMenu`: 将 dropdown-item 的路径调整为 `tdesign-miniprogram/dropdown-item/dropdown-item` @LeeJim ([#1454](https://github.com/Tencent/tdesign-miniprogram/pull/1454))
- `Picker`: 将 picker-item 的路径调整为 `tdesign-miniprogram/picker-item/picker-item` @LeeJim ([#1455](https://github.com/Tencent/tdesign-miniprogram/pull/1455))
- `Steps`: 将 step-item 的路径调整为 `tdesign-miniprogram/step-item/step-item` @LeeJim ([#1456](https://github.com/Tencent/tdesign-miniprogram/pull/1456))
- `Swiper`: 将 swiper-nav 的路径调整为 `tdesign-miniprogram/swiper-nav/swiper-nav` @LeeJim ([#1457](https://github.com/Tencent/tdesign-miniprogram/pull/1457))
- `Grid`: 将 grid-item 的路径调整为 `tdesign-miniprogram/grid-item/grid-item` @LeeJim ([#1459](https://github.com/Tencent/tdesign-miniprogram/pull/1459))
- `TabBar`: 将 tab-bar-item 的路径调整为 `tdesign-miniprogram/tab-bar-item/tab-bar-item` @LeeJim ([#1460](https://github.com/Tencent/tdesign-miniprogram/pull/1460))
- `Tabs`: 将 tab-panel 的路径调整为 `tdesign-miniprogram/tab-panel/tab-panel` @LeeJim ([#1462](https://github.com/Tencent/tdesign-miniprogram/pull/1462))
- `Tag`: 将 check-tag 的路径调整为 `tdesign-miniprogram/check-tag/check-tag` @LeeJim ([#1466](https://github.com/Tencent/tdesign-miniprogram/pull/1466))

### 🚀 Features
- `ActionSheet`: 支持透传 image 至 Grid 组件 @LeeJim ([#1382](https://github.com/Tencent/tdesign-miniprogram/pull/1382))
- `Swiper`: 属性 navigation 支持 boolean，默认值为 true @LeeJim ([#1387](https://github.com/Tencent/tdesign-miniprogram/pull/1387))
- `SwiperNav`: 新增属性用于单独控制 @LeeJim ([#1387](https://github.com/Tencent/tdesign-miniprogram/pull/1387))
- `Indexes`: 增加 change 事件 @LeeJim ([#1403](https://github.com/Tencent/tdesign-miniprogram/pull/1403))
- `Indexes`: 修复视觉问题 @LeeJim ([#1403](https://github.com/Tencent/tdesign-miniprogram/pull/1403))
- `Swiper`: 新增 image-props 属性 @LeeJim ([#1411](https://github.com/Tencent/tdesign-miniprogram/pull/1411))
- `Button`: 新增部分 CSS Variables @anlyyao ([#1407](https://github.com/Tencent/tdesign-miniprogram/pull/1407))
- `Swiper`: 增加 click 事件 @LeeJim ([#1420](https://github.com/Tencent/tdesign-miniprogram/pull/1420))
- `PullDownRefresh`: 新增 scroll 事件 @LeeJim ([#1424](https://github.com/Tencent/tdesign-miniprogram/pull/1424))
- `BackTop`: 放置 pull-down-refresh 内部时，将会滚动该容器到顶部 @LeeJim ([#1424](https://github.com/Tencent/tdesign-miniprogram/pull/1424))
- `Swiper`: 增加 click 事件 @LeeJim ([#1435](https://github.com/Tencent/tdesign-miniprogram/pull/1435))
- `Collapse`: 新增 placment 属性，支持内容面板在上方 @LeeJim ([#1446](https://github.com/Tencent/tdesign-miniprogram/pull/1446))
- `Calendar`: 新增 auto-close 属性，以及 close 事件 @LeeJim ([#1448](https://github.com/Tencent/tdesign-miniprogram/pull/1448))
- `Textarea`: 补充 cursor、disableDefaultPadding、showConfirmBar、 selection-Start、 selectionEnd、holdKeyboard 等属性 @anlyyao ([#1463](https://github.com/Tencent/tdesign-miniprogram/pull/1463))
- `Textarea`: 补充 keyboardheightchange 事件 @anlyyao ([#1463](https://github.com/Tencent/tdesign-miniprogram/pull/1463))

### 🐞 Bug Fixes
- `ActionSheet`: 修复视觉问题 @LeeJim ([#1382](https://github.com/Tencent/tdesign-miniprogram/pull/1382))
- `SideBar`: 支持选项标题换行 @LeeJim ([#1392](https://github.com/Tencent/tdesign-miniprogram/pull/1392))
- `TreeSelect`: 修复视觉问题 @LeeJim ([#1401](https://github.com/Tencent/tdesign-miniprogram/pull/1401))
- `Avatar`: 修复 cascading = ‘left-up' 时，位置不正确问题 @anlyyao ([#1413](https://github.com/Tencent/tdesign-miniprogram/pull/1413))
- `Radio`: 修复 a11y 的点击事件 @LeeJim ([#1416](https://github.com/Tencent/tdesign-miniprogram/pull/1416))
- `Checkbox`: 修复 a11y 的点击事件 @LeeJim ([#1416](https://github.com/Tencent/tdesign-miniprogram/pull/1416))
- `Dialog`: 修复 Dialog 的按钮不能使用 ghost 和 shape 属性的问题 @anlyyao ([#1407](https://github.com/Tencent/tdesign-miniprogram/pull/1407))
- `ActionSheet`: 移除 focus 样式 @byq1213 ([#1427](https://github.com/Tencent/tdesign-miniprogram/pull/1427))
- `Badge`: 修复样式问题 @LeeJim ([#1429](https://github.com/Tencent/tdesign-miniprogram/pull/1429))
- `Toast`: 禁止 toast 区域滑动 @LeeJim ([#1430](https://github.com/Tencent/tdesign-miniprogram/pull/1430))
- `Icon`: 移除无效的 behaviors @LeeJim ([#1434](https://github.com/Tencent/tdesign-miniprogram/pull/1434))
- `Slider`: 优化刻度样式，以及默认风格时滑动的距离 @LeeJim ([#1440](https://github.com/Tencent/tdesign-miniprogram/pull/1440))
- `Collapse`: 修复在 Android 下部分机型收起延迟的问题 @LeeJim ([#1445](https://github.com/Tencent/tdesign-miniprogram/pull/1445))
- `SwipeCell`: 修复滑动距离计算错误 @anlyyao ([#1449](https://github.com/Tencent/tdesign-miniprogram/pull/1449))
- `Textarea`: 修复 model:value 无效的问题 @anlyyao ([#1463](https://github.com/Tencent/tdesign-miniprogram/pull/1463))

## 🌈 0.33.0 `2023-01-02` 
### ❗ Breaking Changes
- `Swiper`: 增加 `18rpx` 的圆角，并支持 CSS Variables，移除了图片的 shape @LeeJim ([#1327](https://github.com/Tencent/tdesign-miniprogram/pull/1327))
- `Rate`: 修复 gap 取值错误，移除 disabled 的样式 @LeeJim ([#1350](https://github.com/Tencent/tdesign-miniprogram/pull/1350))
- `Avatar`: 移除 iconProps 属性，属性 icon 支持传入对象 @anlyyao ([#1295](https://github.com/Tencent/tdesign-miniprogram/pull/1295))
- `Button`: 移除 iconProps 属性，属性 icon 支持传入对象 @anlyyao ([#1295](https://github.com/Tencent/tdesign-miniprogram/pull/1295))
- `Empty`: 移除 iconProps 属性，属性 icon 支持传入对象 @anlyyao ([#1295](https://github.com/Tencent/tdesign-miniprogram/pull/1295))
- `GridItem`: 移除 iconProps 属性，属性 icon 支持传入对象 @anlyyao ([#1295](https://github.com/Tencent/tdesign-miniprogram/pull/1295))
- `ImageViewer`: 移除 deleteIconProps、closeIconProps 属性，属性 delete-btn、close-btn 支持传入对象 @anlyyao ([#1295](https://github.com/Tencent/tdesign-miniprogram/pull/1295))
- `Result`: 移除 iconProps 属性，属性 icon 支持传入对象 @anlyyao ([#1295](https://github.com/Tencent/tdesign-miniprogram/pull/1295))
- docs: 文档 button 属性使用错误 @AuYuHui ([#1347](https://github.com/Tencent/tdesign-miniprogram/pull/1347))
- `NavBar`: 胶囊相关 CSS Variables 命名变更 @LeeJim ([#1372](https://github.com/Tencent/tdesign-miniprogram/pull/1372))

### 🚀 Features
- `Cascader`: 自动定位到已选的 radio 项 @LeeJim ([#1326](https://github.com/Tencent/tdesign-miniprogram/pull/1326))
- `tag`: 属性 icon 支持对象，透传至 icon 组件 @LeeJim ([#1358](https://github.com/Tencent/tdesign-miniprogram/pull/1358))
- `CheckTag`: 属性 content 支持数组类型，用于显示已选/未选文案 @LeeJim ([#1358](https://github.com/Tencent/tdesign-miniprogram/pull/1358))
- `Cell`: 支持无障碍访问 @lsdyi ([#1212](https://github.com/Tencent/tdesign-miniprogram/pull/1212))
- `DropdownMenu`: 支持无障碍访问 @Lindddt ([#1285](https://github.com/Tencent/tdesign-miniprogram/pull/1285))
- `Indexes`: 支持无障碍访问 @Leon-z ([#1237](https://github.com/Tencent/tdesign-miniprogram/pull/1237))
- `Cell`: 支持无障碍访问 @lsdyi ([#1212](https://github.com/Tencent/tdesign-miniprogram/pull/1212))
- `Indexes`: 支持无障碍访问 @Leon-z ([#1237](https://github.com/Tencent/tdesign-miniprogram/pull/1237))
- `Badge`: 支持无障碍访问 @yaogengzhu ([#1196](https://github.com/Tencent/tdesign-miniprogram/pull/1196))
- `Progress`: 支持无障碍访问 @yaogengzhu ([#1283](https://github.com/Tencent/tdesign-miniprogram/pull/1283))
- `TreeSelect): 支持无障碍访问 @Leon-z ([#1355](https://github.com/Tencent/tdesign-miniprogram/pull/1355))
- `ActionSheet`: 支持无障碍访问 @byq1213 ([#1235](https://github.com/Tencent/tdesign-miniprogram/pull/1235))
- `Switch`: 支持无障碍访问 @byq1213 ([#1279](https://github.com/Tencent/tdesign-miniprogram/pull/1279))
- `Slider`: 支持无障碍访问 @byq1213 ([#1360](https://github.com/Tencent/tdesign-miniprogram/pull/1360))

### 🐞 Bug Fixes
- `Empty`: 移除无用示例，更新占位图片 @anlyyao ([#1314](https://github.com/Tencent/tdesign-miniprogram/pull/1314))
- `NoticeBar`: 修复示例样式问题 @anlyyao ([#1314](https://github.com/Tencent/tdesign-miniprogram/pull/1314))
- `Cascader`: 修复视觉问题 @LeeJim ([#1326](https://github.com/Tencent/tdesign-miniprogram/pull/1326))
- `Result`: 修复视觉问题 @anlyyao ([#1325](https://github.com/Tencent/tdesign-miniprogram/pull/1325))
- `PullDownRefresh`: 修复示例视觉错误，并移除无关示例 @anlyyao ([#1333](https://github.com/Tencent/tdesign-miniprogram/pull/1333))
- `Progress`: 修复视觉问题 @anlyyao ([#1328](https://github.com/Tencent/tdesign-miniprogram/pull/1328))
- `Tabs`: 修复视觉问题 @LeeJim ([#1339](https://github.com/Tencent/tdesign-miniprogram/pull/1339))
- `Tabs`: 修复激活项定位的问题 @LeeJim ([#1339](https://github.com/Tencent/tdesign-miniprogram/pull/1339))
- `Steps`: 修复垂直样式不对齐的问题 @LeeJim ([#1351](https://github.com/Tencent/tdesign-miniprogram/pull/1351))
- `Stepper`: 修复组件视觉错误 @anlyyao ([#1356](https://github.com/Tencent/tdesign-miniprogram/pull/1356))
- `CheckTag`: 修复非受控用法 @LeeJim ([#1358](https://github.com/Tencent/tdesign-miniprogram/pull/1358))
- `CheckTag`: 修复 content 不可用的问题 @LeeJim ([#1358](https://github.com/Tencent/tdesign-miniprogram/pull/1358))
- `Drawer`: 修复样式问题 @LeeJim ([#1359](https://github.com/Tencent/tdesign-miniprogram/pull/1359))
- `Upload`: 修复样式问题 @LeeJim ([#1365](https://github.com/Tencent/tdesign-miniprogram/pull/1365))
- `DropdownMenu`: 修复重置逻辑，调整字体大小 @LeeJim ([#1363](https://github.com/Tencent/tdesign-miniprogram/pull/1363))
- `TabBar`: 修复视觉问题 @LeeJim ([#1369](https://github.com/Tencent/tdesign-miniprogram/pull/1369))
- `Checkbox`: 修复水平布局时垂直居中的问题 @LeeJim ([#1371](https://github.com/Tencent/tdesign-miniprogram/pull/1371))
- `NavBar`: 修复视觉问题 @LeeJim ([#1372](https://github.com/Tencent/tdesign-miniprogram/pull/1372))
- `Navbar`: 修复 custom-style 属性的响应式问题 @LeeJim ([#1374](https://github.com/Tencent/tdesign-miniprogram/pull/1374))

## 🌈 0.32.0 `2022-12-27` 
### ❗ Breaking Changes
- 全局修正插槽名称，保持和文档一致，使用 kebab-case @LeeJim ([#1277](https://github.com/Tencent/tdesign-miniprogram/pull/1277))
- `ButtonGroup`: 移除该组件 @LeeJim ([#1289](https://github.com/Tencent/tdesign-miniprogram/pull/1289))
- `DropdownMenu`: 调整外部样式类命名、DOM @LeeJim ([#1259](https://github.com/Tencent/tdesign-miniprogram/pull/1259))
- `DropdownMenu`: 废弃 optionsLayout 属性，移除 tree 相关逻辑，独立出 treeSelect 组件 @LeeJim ([#1265](https://github.com/Tencent/tdesign-miniprogram/pull/1265))
- `DropdownMenu`:  变更外部样式类命名 @LeeJim ([#1265](https://github.com/Tencent/tdesign-miniprogram/pull/1265))
- `Indexes`: 不再依赖 Cell ，独立出锚点组件，可自定义内容 @LeeJim ([#1267](https://github.com/Tencent/tdesign-miniprogram/pull/1267))
- `Indexes`: 移除 height 属性 @LeeJim ([#1271](https://github.com/Tencent/tdesign-miniprogram/pull/1271))
- `Indexes`: 移除 scroll-view，使用全局滚动 @LeeJim ([#1271](https://github.com/Tencent/tdesign-miniprogram/pull/1271))
- `CheckTag`: 移除 closable、shape 属性，以及 close 事件 @LeeJim ([#1274](https://github.com/Tencent/tdesign-miniprogram/pull/1274))
- `Swiper`: 基于原生 swiper 组件改造，移除 t-swiper-item 组件，新增 list 属性。 @LeeJim ([#1282](https://github.com/Tencent/tdesign-miniprogram/pull/1282))
- `SwiperNav`: 属性 show-nav-btn 更名为 show-controls @LeeJim ([#1282](https://github.com/Tencent/tdesign-miniprogram/pull/1282))
- `Input`: 移除聚焦相关样式 @anlyyao ([#1247](https://github.com/Tencent/tdesign-miniprogram/pull/1247))

### 🚀 Features
- `Link`: 新增链接组件 @anlyyao ([#1236](https://github.com/Tencent/tdesign-miniprogram/pull/1236))
- `TreeSelect`: 新增树形选择组件 @LeeJim ([#1262](https://github.com/Tencent/tdesign-miniprogram/pull/1262))
- `IndexesAnchor`: 新增索引锚点组件 @LeeJim ([#1267](https://github.com/Tencent/tdesign-miniprogram/pull/1267))
- `DropdownMenu`: 视觉升级 @LeeJim ([#1259](https://github.com/Tencent/tdesign-miniprogram/pull/1259))
- `Indexes`: 视觉升级 @LeeJim ([#1267](https://github.com/Tencent/tdesign-miniprogram/pull/1267))
- `Calendar`: 支持 CSS Variables，可自定义主题 @LeeJim ([#1252](https://github.com/Tencent/tdesign-miniprogram/pull/1252))
- `Collapse`: 支持 CSS Variables，可自定义主题 @LeeJim ([#1273](https://github.com/Tencent/tdesign-miniprogram/pull/1273))
- `Swiper`: 支持 CSS Variables，可自定义主题 @LeeJim ([#1282](https://github.com/Tencent/tdesign-miniprogram/pull/1282))
- `Overlay`: 支持 CSS Variables，可自定义主题 @LeeJim ([#1258](https://github.com/Tencent/tdesign-miniprogram/pull/1258))
- `DropdownMenu`: 支持 CSS Variables，可自定义主题 @LeeJim ([#1259](https://github.com/Tencent/tdesign-miniprogram/pull/1259))
- `Calendar`: 新增 usePopup 属性，支持不使用弹出层用法 @LeeJim ([#1252](https://github.com/Tencent/tdesign-miniprogram/pull/1252))
- `DropdownMenu`: 可通过 value 和 options 自动切换 label @LeeJim ([#1265](https://github.com/Tencent/tdesign-miniprogram/pull/1265))
- `CheckTag`: 新增 click 事件 @LeeJim ([#1274](https://github.com/Tencent/tdesign-miniprogram/pull/1274))
- `Input`: 新增 click 事件 @anlyyao ([#1247](https://github.com/Tencent/tdesign-miniprogram/pull/1247))
- `Popup`: 支持无障碍访问 @zhangpaopao0609 ([#1189](https://github.com/Tencent/tdesign-miniprogram/pull/1189))
- `Input`: 支持无障碍访问 @szu-bee ([#1246](https://github.com/Tencent/tdesign-miniprogram/pull/1246))
- `Empty`: 支持无障碍访问 @huaiyinfeilong ([#1187](https://github.com/Tencent/tdesign-miniprogram/pull/1187))
- `Tag`: 支持无障碍访问 @huaiyinfeilong ([#1220](https://github.com/Tencent/tdesign-miniprogram/pull/1220))
- `Link`: 支持无障碍访问 @byq1213 ([#1263](https://github.com/Tencent/tdesign-miniprogram/pull/1263))

### 🐞 Bug Fixes
- `Popup`: 修复 placement 不支持响应式的问题 @LeeJim ([#1257](https://github.com/Tencent/tdesign-miniprogram/pull/1257))
- `Checkbox`: 修复图标右侧显示时 border 样式错误的问题 @LeeJim ([#1259](https://github.com/Tencent/tdesign-miniprogram/pull/1259))
- `Radio`: 修复图标右侧显示时 border 样式错误的问题 @LeeJim ([#1259](https://github.com/Tencent/tdesign-miniprogram/pull/1259))
- `Search`: 修复 CSS Variables 命名错误的问题 @LeeJim ([#1272](https://github.com/Tencent/tdesign-miniprogram/pull/1272))
- `Radio`: 修复 icon = line 时，图标错误的问题 @LeeJim ([#1284](https://github.com/Tencent/tdesign-miniprogram/pull/1284))
- `Checkbox`: 修复 icon = line 时，图标错误的问题 @LeeJim ([#1284](https://github.com/Tencent/tdesign-miniprogram/pull/1284))
- `Textarea`: 支持 value 变更时更新字符长度 @anlyyao ([#1280](https://github.com/Tencent/tdesign-miniprogram/pull/1280))
- `Textarea`: 修复 less 变量使用错误 @anlyyao ([#1280](https://github.com/Tencent/tdesign-miniprogram/pull/1280))
- `NoticeBar`: 修复右侧额外信息行高不正确问题 @anlyyao ([#1281](https://github.com/Tencent/tdesign-miniprogram/pull/1281))
- `Message`: 修复间距、颜色样式错误问题 @anlyyao ([#1286](https://github.com/Tencent/tdesign-miniprogram/pull/1286))

## 🌈 0.31.0 `2022-12-19` 
### ❗ BREAKING CHANGES
- `Input`: 移除 clearableIconProps、prefixIconProps、suffixIconProps 属性 @anlyyao ([#1188](https://github.com/Tencent/tdesign-miniprogram/pull/1188))
- `SwipeCell`: 调整 DOM @anlyyao ([#1201](https://github.com/Tencent/tdesign-miniprogram/pull/1201))
- `Dialog`: 属性 closeOnOverlayClick 默认值从 true 改成 undefined @LeeJim ([#1240](https://github.com/Tencent/tdesign-miniprogram/pull/1240))
- `Dialog`: 调整 DOM @LeeJim ([#1240](https://github.com/Tencent/tdesign-miniprogram/pull/1240))

### 🚀 Features
- `Steps`: 视觉升级 @LeeJim ([#1225](https://github.com/Tencent/tdesign-miniprogram/pull/1225))
- `Picker`: 视觉升级 @LeeJim ([#1248](https://github.com/Tencent/tdesign-miniprogram/pull/1248))
- `Dialog`: 视觉升级 @LeeJim ([#1240](https://github.com/Tencent/tdesign-miniprogram/pull/1240))
- `Dialog`: 新增 closeBtn 属性，支持关闭按钮 @LeeJim ([#1240](https://github.com/Tencent/tdesign-miniprogram/pull/1240))
- `Dialog`: 支持 CSS Variables，支持主题定制 @LeeJim ([#1240](https://github.com/Tencent/tdesign-miniprogram/pull/1240))
- `Picker`: 支持 CSS Variables，支持主题定制 @LeeJim ([#1248](https://github.com/Tencent/tdesign-miniprogram/pull/1248))
- `DateTimePicker`: 支持 CSS Variables，支持主题定制 @LeeJim ([#1248](https://github.com/Tencent/tdesign-miniprogram/pull/1248))
- `Input`:  clearable、prefixIcon、suffixIcon等属性新增 Object 类型，透传至 icon 组件 @anlyyao ([#1188](https://github.com/Tencent/tdesign-miniprogram/pull/1188))
- `SwipeCell`: 属性 right 和 left 支持使用 icon @anlyyao ([#1201](https://github.com/Tencent/tdesign-miniprogram/pull/1201))
- `Overlay`: 支持无障碍访问 @szu-bee ([#1205](https://github.com/Tencent/tdesign-miniprogram/pull/1205))
- `BackTop`: 支持无障碍访问 @szu-bee ([#1206](https://github.com/Tencent/tdesign-miniprogram/pull/1206))
- `CountDown`: 支持无障碍访问 @szu-bee ([#1207](https://github.com/Tencent/tdesign-miniprogram/pull/1207))
- `Button`: 支持无障碍访问 @zhangpaopao0609 ([#1149](https://github.com/Tencent/tdesign-miniprogram/pull/1149))
- `Collapse`: 支持无障碍访问 @gzzhanghao ([#1224](https://github.com/Tencent/tdesign-miniprogram/pull/1224))
- `Calendar`: 支持无障碍访问 @gzzhanghao ([#1217](https://github.com/Tencent/tdesign-miniprogram/pull/1217))
- `Fab`: 支持无障碍访问 @zhangpaopao0609 ([#1231](https://github.com/Tencent/tdesign-miniprogram/pull/1231))
- `Tabs`: 支持无障碍访问 @zhangpaopao0609 ([#1227](https://github.com/Tencent/tdesign-miniprogram/pull/1227))
- `Overlay`: 支持无障碍访问 @szu-bee ([#1205](https://github.com/Tencent/tdesign-miniprogram/pull/1205))
- `Toast`: 支持无障碍访问 @huaiyinfeilong ([#1210](https://github.com/Tencent/tdesign-miniprogram/pull/1210))

### 🐞 Bug Fixes
- `TabBar`: 修复圆角下开启安全距离时视觉错误的问题 @LeeJim ([#1223](https://github.com/Tencent/tdesign-miniprogram/pull/1223))


## 🌈 0.30.0 `2022-12-12` 
### ❗ BREAKING CHANGE
- `Rate`: 属性 gap 默认值由 8 调整成 4 @LeeJim ([#1177](https://github.com/Tencent/tdesign-miniprogram/pull/1177))
- `Rate`: 属性 size 默认值由 20 调整成 24 @LeeJim ([#1177](https://github.com/Tencent/tdesign-miniprogram/pull/1177))
- `Stepper`:  属性 theme 的 gray 名为 filled，并新增 outline 主题 @anlyyao ([#1191](https://github.com/Tencent/tdesign-miniprogram/pull/1191))
- `Slider`:  属性 colors 和 disabledColor 移除默认值 @LeeJim ([#1192](https://github.com/Tencent/tdesign-miniprogram/pull/1192))
- `Calendar`: 按钮的插槽变更成和文档一致：`confirm-btn` @LeeJim ([#1204](https://github.com/Tencent/tdesign-miniprogram/pull/1204))

### 🚀 Features
- `Rate`: 视觉升级 @LeeJim ([#1177](https://github.com/Tencent/tdesign-miniprogram/pull/1177))
- `Slider`: 视觉升级 @LeeJim ([#1192](https://github.com/Tencent/tdesign-miniprogram/pull/1192))
- `Rate`: 新增 color 属性，并支持 CSS Variables @LeeJim ([#1177](https://github.com/Tencent/tdesign-miniprogram/pull/1177))
- `Rate`: 新增 icon 属性，可自定义图标 @LeeJim ([#1177](https://github.com/Tencent/tdesign-miniprogram/pull/1177))
- `NoticeBar`: 新增 direction 属性，新支持垂直方向滚动 @anlyyao ([#1036](https://github.com/Tencent/tdesign-miniprogram/pull/1036))
- `Slider`: 新增 theme 属性，新增胶囊风格 @LeeJim ([#1192](https://github.com/Tencent/tdesign-miniprogram/pull/1192))
- `Message`: 属性 icon 和 closeBtn 新增 Object 类型透传至 icon 组件 @anlyyao ([#1153](https://github.com/Tencent/tdesign-miniprogram/pull/1153))
- `BackTop`: 属性 icon 新增支持 Object 类型透传至图标组件，并支持同名插槽 @anlyyao ([#1151](https://github.com/Tencent/tdesign-miniprogram/pull/1151))
- `NoticeBar`: 属性 content 新增 Array 类型 @anlyyao ([#1036](https://github.com/Tencent/tdesign-miniprogram/pull/1036))
- `NoticeBar`: 属性 suffixIcon 新增 Object 类型透传至图标组件 @anlyyao ([#1036](https://github.com/Tencent/tdesign-miniprogram/pull/1036))
- `NoticeBar`: 属性 prefixIcon 新增 Boolean、Object 类型 @anlyyao ([#1036](https://github.com/Tencent/tdesign-miniprogram/pull/1036))
- `Stepper`: input-width 属性默认单位更新为 px @anlyyao ([#1191](https://github.com/Tencent/tdesign-miniprogram/pull/1191))
- `Progress`: 属性 theme 支持 plump  和 circle 类型 @anlyyao ([#1178](https://github.com/Tencent/tdesign-miniprogram/pull/1178))
- `Message`: 新增 CSS Variables， 用于调整信息通知文本、背景颜色 @anlyyao ([#1153](https://github.com/Tencent/tdesign-miniprogram/pull/1153))
- `BackTop`: 新增 CSS Variables @anlyyao ([#1151](https://github.com/Tencent/tdesign-miniprogram/pull/1151))
- `Slider`: 支持 CSS Variables @LeeJim ([#1192](https://github.com/Tencent/tdesign-miniprogram/pull/1192))
- `NoticeBar`: 新增 CSS Variables， 用于调整公告栏文本、背景颜色 @anlyyao ([#1036](https://github.com/Tencent/tdesign-miniprogram/pull/1036))
- `Stepper`: 新增 CSS Variables， 用于调整步进器文本/图标颜色等 @anlyyao ([#1191](https://github.com/Tencent/tdesign-miniprogram/pull/1191))
- `Progress`: 新增 CSS Variables， 用于调整进度条背景颜色 @anlyyao ([#1178](https://github.com/Tencent/tdesign-miniprogram/pull/1178))
- `Grid`: 支持无障碍访问 @zhangpaopao0609 ([#1138](https://github.com/Tencent/tdesign-miniprogram/pull/1138))
- `NavBar`: 支持无障碍访问 @Lindddt ([#1140](https://github.com/Tencent/tdesign-miniprogram/pull/1140))
- `TabBar`: 支持无障碍访问 @Isabella327 ([#1148](https://github.com/Tencent/tdesign-miniprogram/pull/1148))


### 🐞 Bug Fixes

- `Message`: 修复入场动画错误 @anlyyao ([#1153](https://github.com/Tencent/tdesign-miniprogram/pull/1153))
- `Calendar`: 修复 `max-date`, `min-date`, `firstDayOfWeek` 无法动态修改的问题 @LeeJim ([#1172](https://github.com/Tencent/tdesign-miniprogram/pull/1172))
- `Switch`: 修复视觉问题 @LeeJim ([#1186](https://github.com/Tencent/tdesign-miniprogram/pull/1186))
- `Calendar`: 修复小屏幕适配的问题 @LeeJim ([#1203](https://github.com/Tencent/tdesign-miniprogram/pull/1203))
- `Calendar`: 修复按钮传入 text 不生效，以及不支持响应式的问题 @LeeJim ([#1204](https://github.com/Tencent/tdesign-miniprogram/pull/1204))


## 🌈 0.29.0 `2022-12-05` 
### ❗ BREAKING CHANGES
- `Loading`: `theme = spinner` 默认颜色改成黑色 @LeeJim ([#1152](https://github.com/Tencent/tdesign-miniprogram/pull/1152))
- `Loading`: 简化 DOM @LeeJim ([#1152](https://github.com/Tencent/tdesign-miniprogram/pull/1152))

### 🚀 Features
- `ActionSheet`: 视觉升级 @LeeJim ([#1142](https://github.com/Tencent/tdesign-miniprogram/pull/1142))
- `Drawer`: 视觉升级 @LeeJim ([#1147](https://github.com/Tencent/tdesign-miniprogram/pull/1147))
- `Search`: 支持无障碍访问 @Isabella327 ([#1132](https://github.com/Tencent/tdesign-miniprogram/pull/1132))
- `Message`: 支持无障碍访问 @zhangpaopao0609 ([#1150](https://github.com/Tencent/tdesign-miniprogram/pull/1150))
- `Stepper`: 支持无障碍访问 @zhangpaopao0609 ([#1144](https://github.com/Tencent/tdesign-miniprogram/pull/1144))
- `Progress`: 支持无障碍访问 @yaogengzhu ([#1156](https://github.com/Tencent/tdesign-miniprogram/pull/1156))
- `Image`: 支持无障碍访问 @zhangpaopao0609 ([#1136](https://github.com/Tencent/tdesign-miniprogram/pull/1136))
- `Radio`: 支持无障碍访问 @byq1213 ([#1139](https://github.com/Tencent/tdesign-miniprogram/pull/1139))
- `Avatar`: 支持无障碍访问 @byq1213 ([#1137](https://github.com/Tencent/tdesign-miniprogram/pull/1137))
- `ActionSheet`: 新增 description 和 align 属性 @LeeJim ([#1142](https://github.com/Tencent/tdesign-miniprogram/pull/1142))
- `Loading`: 支持默认插槽、CSS Variables @LeeJim ([#1152](https://github.com/Tencent/tdesign-miniprogram/pull/1152))
- `Drawer`: 新增支持 titile 属性，footer 插槽 @LeeJim ([#1147](https://github.com/Tencent/tdesign-miniprogram/pull/1147))
- `ActionSheet`: 新增支持 CSS Variables @LeeJim ([#1142](https://github.com/Tencent/tdesign-miniprogram/pull/1142))

### 🐞 Bug Fixes
- `Checkbox`: 修复数组图标无法使用的问题 @LeeJim ([#1135](https://github.com/Tencent/tdesign-miniprogram/pull/1135))
- `Cascader`: 修复重置 `options = []` 时报错的问题 @LeeJim ([#1163](https://github.com/Tencent/tdesign-miniprogram/pull/1163))

## 🌈 0.28.0 `2022-11-28` 
### ❗ BREAKING CHANGES
- `Radio`:  调整 icon 属性，新增 dot 类型，并简化原有命名 @LeeJim ([#1098](https://github.com/Tencent/tdesign-miniprogram/pull/1098))
- `Checkbox`: 移除 color 属性，使用 CSS Variables 代替 @LeeJim ([#1100](https://github.com/Tencent/tdesign-miniprogram/pull/1100))
- `Search`: 移除 label 属性 @LeeJim ([#1103](https://github.com/Tencent/tdesign-miniprogram/pull/1103))
- `Textarea`: 类名变更，默认不展示计数器，需设置 indicator = true @anlyyao ([#1097](https://github.com/Tencent/tdesign-miniprogram/pull/1097))
- `CountDown`: size 属性默认值变更为 `medium` @anlyyao ([#1085](https://github.com/Tencent/tdesign-miniprogram/pull/1085))
- `Calendar`: 事件返回参数改成时间戳，保持和 value 一致 @LeeJim ([#1120](https://github.com/Tencent/tdesign-miniprogram/pull/1120))
- `Input`: 外部样式类 t-class-icon 变更为 t-class-prefix-icon @anlyyao ([#1109](https://github.com/Tencent/tdesign-miniprogram/pull/1109))
- `Input`: size 属性默认值变更为 medium @anlyyao ([#1109](https://github.com/Tencent/tdesign-miniprogram/pull/1109))

### 🚀 Features
- `Radio`: 视觉更新 @LeeJim ([#1098](https://github.com/Tencent/tdesign-miniprogram/pull/1098))
- `Checkbox`: 视觉升级 @LeeJim ([#1100](https://github.com/Tencent/tdesign-miniprogram/pull/1100))
- `Search`: 视觉升级 @LeeJim ([#1103](https://github.com/Tencent/tdesign-miniprogram/pull/1103))
- `Radio`: 新增 block 属性，支持横向布局 @LeeJim ([#1098](https://github.com/Tencent/tdesign-miniprogram/pull/1098))
- `Radio`: 支持 icon 同名插槽 @LeeJim ([#1098](https://github.com/Tencent/tdesign-miniprogram/pull/1098))
- `Checkbox`: 新增 block 属性，支持横向布局 @LeeJim ([#1100](https://github.com/Tencent/tdesign-miniprogram/pull/1100))
- `Checkbox`:  属性 icon 新增 string 类型，可选值为 circle/line/rectangle @LeeJim ([#1100](https://github.com/Tencent/tdesign-miniprogram/pull/1100))
- `Search`: 支持更多 CSS Variables @LeeJim ([#1103](https://github.com/Tencent/tdesign-miniprogram/pull/1103))
- `Textarea`: 新增 placeholderStyle、fixed 、bordered、 indicator 等属性 @anlyyao ([#1097](https://github.com/Tencent/tdesign-miniprogram/pull/1097))
- `Textarea`: 新增 CSS Variables， 用于调整文本框背景、输入文本颜色 @anlyyao ([#1097](https://github.com/Tencent/tdesign-miniprogram/pull/1097))
- `Textarea`: 外部样式类新增  t-class-indicator  @anlyyao ([#1097](https://github.com/Tencent/tdesign-miniprogram/pull/1097))
- `CountDown`: 外部样式类新增 `t-class-count` 和 `t-class-split` @anlyyao ([#1085](https://github.com/Tencent/tdesign-miniprogram/pull/1085))
- `CountDown`: 新增 CSS Variables， 用于调整倒计时背景、文本颜色 @anlyyao ([#1085](https://github.com/Tencent/tdesign-miniprogram/pull/1085))
- `Input`: 新增支持 type = nickname @LeeJim ([#1115](https://github.com/Tencent/tdesign-miniprogram/pull/1115))
- `Calendar`: 自动滚动到 value 对应的月份 @LeeJim ([#1119](https://github.com/Tencent/tdesign-miniprogram/pull/1119))
- `Calendar`: 新增 change 事件，在不显示确认按钮时使用 @LeeJim ([#1120](https://github.com/Tencent/tdesign-miniprogram/pull/1120))
- `Checkbox`: 无障碍支持 @Isabella327 ([#1105](https://github.com/Tencent/tdesign-miniprogram/pull/1105))
- `Grid`: 新增 iconProps 属性 @anlyyao ([#1123](https://github.com/Tencent/tdesign-miniprogram/pull/1123))
- `Icon`: 新增支持 `aira-*` 属性 @LeeJim ([#1127](https://github.com/Tencent/tdesign-miniprogram/pull/1127))
- `Input`: 完成 status 和 tips 属性开发 @anlyyao ([#1109](https://github.com/Tencent/tdesign-miniprogram/pull/1109))
- `Input`: 新增 layout、clearableIconProps、suffixIconProps、 prefixIconProps属性 @anlyyao ([#1109](https://github.com/Tencent/tdesign-miniprogram/pull/1109))
- `Input`: 新增 CSS Variables @anlyyao ([#1109](https://github.com/Tencent/tdesign-miniprogram/pull/1109))
- `Input`: 外部样式新增 t-class-tips @anlyyao ([#1109](https://github.com/Tencent/tdesign-miniprogram/pull/1109))
### 🐞 Bug Fixes
- `Tabs`: 修复渲染 panel 时闪烁的问题 @LeeJim ([#1093](https://github.com/Tencent/tdesign-miniprogram/pull/1093))
- `Result`: 修复装饰性图标获取焦点的问题 @aomnisz ([#1082](https://github.com/Tencent/tdesign-miniprogram/pull/1082))
- `Tabs`: 修复 placement=left 时，面板内容不显示问题 @anlyyao ([#1099](https://github.com/Tencent/tdesign-miniprogram/pull/1099))
- `Toast`: 支持文字换行 @LeeJim ([#1107](https://github.com/Tencent/tdesign-miniprogram/pull/1107))
- `Tabs`: 修复 panel 切换的问题 @LeeJim ([#1106](https://github.com/Tencent/tdesign-miniprogram/pull/1106))
- `Textarea`: maxlength 默认值变更为 -1 @anlyyao ([#1097](https://github.com/Tencent/tdesign-miniprogram/pull/1097))
- `Tabs`: 修复下标不显示的问题 @LeeJim ([#1111](https://github.com/Tencent/tdesign-miniprogram/pull/1111))
- `Footer`: 支持无障碍 @Isabella327 ([#1104](https://github.com/Tencent/tdesign-miniprogram/pull/1104))
- `NavBar`: 修复背景色失效的问题 @LeeJim ([#1116](https://github.com/Tencent/tdesign-miniprogram/pull/1116))
- `Calendar`: 修复受控用法 @LeeJim ([#1119](https://github.com/Tencent/tdesign-miniprogram/pull/1119))
- `Calendar`: 修复 confirm-btn = null 时仍显示按钮的问题 @LeeJim ([#1120](https://github.com/Tencent/tdesign-miniprogram/pull/1120))
- `Cell`: 新增支持 CSS Variables @LeeJim ([#1117](https://github.com/Tencent/tdesign-miniprogram/pull/1117))
- `Popup`: 修复 Popup 以及底层依赖 Popup 的组件无法滚动的问题 @LeeJim ([#1125](https://github.com/Tencent/tdesign-miniprogram/pull/1125))
- `Loading`: 修复尺寸问题 @LeeJim ([#1128](https://github.com/Tencent/tdesign-miniprogram/pull/1128))
- `Result`: 修复装饰性图标获取焦点的问题 @aomnisz ([#1082](https://github.com/Tencent/tdesign-miniprogram/pull/1082))
- `Footer`: 支持无障碍 @Isabella327 ([#1104](https://github.com/Tencent/tdesign-miniprogram/pull/1104))

## 🌈 0.27.0 `2022-11-21` 
### ❗️BREAKING CHANGES
- `Divider`: 移除 line-color 属性，使用 CSS Variables 代替 @LeeJim ([#1035](https://github.com/Tencent/tdesign-miniprogram/pull/1035))
- `Upload`: 数据对象 file 新增 status 字段，不再以 percent 区分 @LeeJim ([#1034](https://github.com/Tencent/tdesign-miniprogram/pull/1034))
- `Switch`: 移除 colors 属性，使用 CSS Variables 代替 @LeeJim ([#1080](https://github.com/Tencent/tdesign-miniprogram/pull/1080))
- `Switch`: 调整 label 的类型，改成 Array 类型，同时调整显示位置 @LeeJim ([#1080](https://github.com/Tencent/tdesign-miniprogram/pull/1080))
- `Badge`: 移除 shape 属性的 square 类型，新增 bubble 类型 @LeeJim ([#1004](https://github.com/Tencent/tdesign-miniprogram/pull/1004))

### 🚀 Features
- `Divider`: 视觉升级 @LeeJim ([#1035](https://github.com/Tencent/tdesign-miniprogram/pull/1035))
- `Upload`: 视觉升级 @LeeJim ([#1034](https://github.com/Tencent/tdesign-miniprogram/pull/1034))
- `Image`: 视觉升级 @LeeJim ([#1038](https://github.com/Tencent/tdesign-miniprogram/pull/1038))
- `Toast`: 视觉升级 @LeeJim ([#1073](https://github.com/Tencent/tdesign-miniprogram/pull/1073))
- `Skeleton`: 视觉升级 @anlyyao ([#1037](https://github.com/Tencent/tdesign-miniprogram/pull/1037))
- `Switch`: 视觉升级 @LeeJim ([#1080](https://github.com/Tencent/tdesign-miniprogram/pull/1080))
- `Badge`: 视觉升级 @LeeJim ([#1004](https://github.com/Tencent/tdesign-miniprogram/pull/1004))
- `Collapse`: 新增 theme 属性，支持 card 风格 @LeeJim ([#1039](https://github.com/Tencent/tdesign-miniprogram/pull/1039))
- `Image`: 新增 `width` 和 `height` 属性用于控制图片尺寸 @LeeJim ([#1038](https://github.com/Tencent/tdesign-miniprogram/pull/1038))
- `Empty`: 新增 iconProps 属性 @anlyyao ([#1041](https://github.com/Tencent/tdesign-miniprogram/pull/1041))
- `Empty`: 新增 CSS Variables， 用于调整描述、操作内容文本颜色和间距等 @anlyyao ([#1041](https://github.com/Tencent/tdesign-miniprogram/pull/1041))
- `Result`: 新增 iconProps 属性 @anlyyao ([#1040](https://github.com/Tencent/tdesign-miniprogram/pull/1040))
- `Result`: 新增 CSS Variables， 用于调整标题、描述文本颜色 @anlyyao ([#1040](https://github.com/Tencent/tdesign-miniprogram/pull/1040))
- `Skeleton`: 新增 CSS Variables， 用于调整骨架屏背景颜色、行间距等 @anlyyao ([#1037](https://github.com/Tencent/tdesign-miniprogram/pull/1037))
- `ImageViewer`: 新增 closeIconProps 和 deleteIconProps 属性 @anlyyao ([#1074](https://github.com/Tencent/tdesign-miniprogram/pull/1074))
- `ImageViewer`: 新增 CSS Variables， 用于调整操作条背景、文本颜色等 @anlyyao ([#1074](https://github.com/Tencent/tdesign-miniprogram/pull/1074))
- `Footer`: 新增 CSS Variables， 用于调整页脚文本大小、颜色等 @anlyyao ([#1042](https://github.com/Tencent/tdesign-miniprogram/pull/1042))
- `Switch`: 新增 icon 属性，用于显示开关的图标 @LeeJim ([#1080](https://github.com/Tencent/tdesign-miniprogram/pull/1080))
- `Avatar`: 新增 CSS Variables， 用于调整头像背景、文本颜色 @anlyyao ([#1076](https://github.com/Tencent/tdesign-miniprogram/pull/1076))
- `Avatar`: 支持 imageProps，并新增 iconProps 和 bordered 属性 @anlyyao ([#1076](https://github.com/Tencent/tdesign-miniprogram/pull/1076))

### 🐞 Bug Fixes
- `Switch`: 修复 size、loading 不生效的问题 @LeeJim ([#1080](https://github.com/Tencent/tdesign-miniprogram/pull/1080))
- `Avatar`: 修复 alt 属性无效 @anlyyao ([#1076](https://github.com/Tencent/tdesign-miniprogram/pull/1076))
- `NavBar`: 使用正确的状态栏高度 @LeeJim ([#1083](https://github.com/Tencent/tdesign-miniprogram/pull/1083))
- `Search`: 修复插槽需要对应值为空时才渲染的问题 @LeeJim ([#1087](https://github.com/Tencent/tdesign-miniprogram/pull/1087))

## 🌈 0.26.0 `2022-11-14` 
### ❗ Breaking Changes
- `Textarea`: 调整 confirm-type 的默认值为 return @LeeJim ([#1007](https://github.com/Tencent/tdesign-miniprogram/pull/1007))
- `Navbar`: 移除 background 使用 CSS Variables 代替 @LeeJim ([#1010](https://github.com/Tencent/tdesign-miniprogram/pull/1010))
- `Navbar`: 属性 left-icon 更名为 left-arrow，只保留 Boolean 类型 @LeeJim ([#1010](https://github.com/Tencent/tdesign-miniprogram/pull/1010))
- `Navbar`: 移除 home-icon，新增名为 left 和 capsule 的插槽 @LeeJim ([#1010](https://github.com/Tencent/tdesign-miniprogram/pull/1010))
- `Navbar`: 移除 go-home 事件 @LeeJim ([#1010](https://github.com/Tencent/tdesign-miniprogram/pull/1010))

### 🚀 Features
- `Button`: 视觉升级 @LeeJim ([#993](https://github.com/Tencent/tdesign-miniprogram/pull/993))
- `Fab`: 视觉升级 @LeeJim ([#995](https://github.com/Tencent/tdesign-miniprogram/pull/995))
- `Tag`: 视觉升级 @LeeJim ([#997](https://github.com/Tencent/tdesign-miniprogram/pull/997))
- `Cell`: 视觉升级 @LeeJim ([#1003](https://github.com/Tencent/tdesign-miniprogram/pull/1003))
- `Grid`: 视觉升级 @LeeJim ([#1006](https://github.com/Tencent/tdesign-miniprogram/pull/1006))
- `Navbar`: 视觉升级 @LeeJim ([#1010](https://github.com/Tencent/tdesign-miniprogram/pull/1010))
- `Button`: 新增 light 主题 @LeeJim ([#993](https://github.com/Tencent/tdesign-miniprogram/pull/993))
- `Tag`: 属性 size 新增 extra-large 加大尺寸 @LeeJim ([#997](https://github.com/Tencent/tdesign-miniprogram/pull/997))
- `CheckTag`: 新增支持 variant 支持 4 种变体 @LeeJim ([#997](https://github.com/Tencent/tdesign-miniprogram/pull/997))
- `NoticeBar`: 支持 prefixIcon 、theme 属性动态更新 @anlyyao ([#999](https://github.com/Tencent/tdesign-miniprogram/pull/999))
- `CellGroup`: 新增 theme 属性，支持 card 风格 @LeeJim ([#1003](https://github.com/Tencent/tdesign-miniprogram/pull/1003))
- `Grid`: 新增 theme 属性，增加 card 风格 @LeeJim ([#1006](https://github.com/Tencent/tdesign-miniprogram/pull/1006))
- `Grid`: 新增 BadgeProps 属性，透传至徽章组件 @LeeJim ([#1006](https://github.com/Tencent/tdesign-miniprogram/pull/1006))
- `Grid`: 新增 icon 属性，支持传入图标 @LeeJim ([#1006](https://github.com/Tencent/tdesign-miniprogram/pull/1006))
- `Grid`: 支持当 column = 0 时，将不平分空间，支持滑动 @LeeJim ([#1006](https://github.com/Tencent/tdesign-miniprogram/pull/1006))

### 🐞 Bug Fixes
- `Button`: 修复有主题的幽灵按钮颜色丢失的问题 @LeeJim ([#993](https://github.com/Tencent/tdesign-miniprogram/pull/993))
- `NoticeBar`: 修复 content 动态更新时， 滚动动画计算错误。 @anlyyao ([#999](https://github.com/Tencent/tdesign-miniprogram/pull/999))
- `TabBar`: 修复绝对定位时，宽度没有撑开的问题 @LeeJim ([#1001](https://github.com/Tencent/tdesign-miniprogram/pull/1001))
- `Cascader`: 修复异步获取 options 时，无法使用 value 初始化已选选项 @LeeJim ([#1011](https://github.com/Tencent/tdesign-miniprogram/pull/1011))

## 🌈 0.25.0 `2022-11-07` 
### ❗ Breaking Changes
- `Badge`: 修复 offset 的顺序，首值应该调整水平方向 @LeeJim ([#971](https://github.com/Tencent/tdesign-miniprogram/pull/971))
- `Tabs`: 调整非 BEM 的类名，此变更属于破坏性变更 @LeeJim ([#970](https://github.com/Tencent/tdesign-miniprogram/pull/970))
### 🚀 Features
- 全部组件支持 `customStyle` 属性，作为 style 传入根元素 @anlyyao ([#985](https://github.com/Tencent/tdesign-miniprogram/pull/985))
- `SideBar`: 新增侧边导航组件 @LeeJim ([#974](https://github.com/Tencent/tdesign-miniprogram/pull/974))
- `RadioGroup`: 新增支持 keys 属性，使用 options 时有效 @LeeJim ([#964](https://github.com/Tencent/tdesign-miniprogram/pull/964))
- `Tabs`: 新增 space-evenly 属性，默认均分选项卡片的空间 @LeeJim ([#965](https://github.com/Tencent/tdesign-miniprogram/pull/965))
- `Cascader`: 视觉全新升级 @LeeJim ([#966](https://github.com/Tencent/tdesign-miniprogram/pull/966))
- `Cascader`: 新增 theme 属性，新增 tab 风格 @LeeJim ([#966](https://github.com/Tencent/tdesign-miniprogram/pull/966))
- `Cascader`: 新增 keys 属性，支持映射 optiosn 属性名 @LeeJim ([#966](https://github.com/Tencent/tdesign-miniprogram/pull/966))
- `Cascader`: 新增 sub-titles 属性，显示每级的次标题 @LeeJim ([#966](https://github.com/Tencent/tdesign-miniprogram/pull/966))
- `Button`: 新增 CSS Variable 调整文本、边框、背景等颜色，具体查看文档 @anlyyao ([#947](https://github.com/Tencent/tdesign-miniprogram/pull/947))
- `GridItem`: 新增 image-props 透传至 image 组件 @LeeJim ([#976](https://github.com/Tencent/tdesign-miniprogram/pull/976))
- `TabBar`: 视觉升级 @LeeJim ([#987](https://github.com/Tencent/tdesign-miniprogram/pull/987))
- `TabBar`: 新增 shape 属性，新增悬浮胶囊形状的标签栏 @LeeJim ([#987](https://github.com/Tencent/tdesign-miniprogram/pull/987))
- `TabBar`: 新增 theme 属性，新增 tag 风格 @LeeJim ([#987](https://github.com/Tencent/tdesign-miniprogram/pull/987))
- `DropdownMenu`: 新增 `external-classes` 属性 @anlyyao ([#991](https://github.com/Tencent/tdesign-miniprogram/pull/991))
- `Csacader`: 支持 CSS Variables 进行自定义主题 @LeeJim ([#990](https://github.com/Tencent/tdesign-miniprogram/pull/990))
### 🐞 Bug Fixes
- 修复没传值时不支持非受控的问题 @LeeJim ([#977](https://github.com/Tencent/tdesign-miniprogram/pull/977))
- `RadioGroup`: 修复使用 options 时无法选中的问题 @LeeJim ([#964](https://github.com/Tencent/tdesign-miniprogram/pull/964))
- `Tabs`: 修复动态 label 无法生效的问题 @LeeJim ([#963](https://github.com/Tencent/tdesign-miniprogram/pull/963))
- `Tabs`: 优化样式细节 @LeeJim ([#965](https://github.com/Tencent/tdesign-miniprogram/pull/965))
- `Cascader`: 修复传入 value 不会渲染选项的问题 @LeeJim ([#966](https://github.com/Tencent/tdesign-miniprogram/pull/966))
- `Button`: 修复 variant=text 时，文本颜色样式错误 @anlyyao ([#947](https://github.com/Tencent/tdesign-miniprogram/pull/947))
- `Input`: 修复 `--td-input-disabled-text-color` 无效的问题 @anlyyao ([#960](https://github.com/Tencent/tdesign-miniprogram/pull/960))
- `Calendar`: 修复无法滚动的问题 @LeeJim ([#989](https://github.com/Tencent/tdesign-miniprogram/pull/989))
- `Calandar`: 修复在布局不兼容的问题 @LeeJim ([#989](https://github.com/Tencent/tdesign-miniprogram/pull/989))

## 🌈 0.24.0 `2022-10-31` 
### ❗️BREAKING CHANGES
- `Radio`: 移除 color 属性，使用 CSS Variable 替代 @anlyyao ([#944](https://github.com/Tencent/tdesign-miniprogram/pull/944))

### 🚀 Features
- `Tabs`: 视觉全新升级 @LeeJim ([#957](https://github.com/Tencent/tdesign-miniprogram/pull/957))
- `Tabs`: 新增 theme 属性，支持 line/tag/card @LeeJim ([#957](https://github.com/Tencent/tdesign-miniprogram/pull/957))
- `Tabs`: 新增 CSS Variables，用于调整滑块尺寸 @LeeJim ([#957](https://github.com/Tencent/tdesign-miniprogram/pull/957))
- `TabPanel`: 新增 badgeProps 属性，支持使用徽章 @LeeJim ([#957](https://github.com/Tencent/tdesign-miniprogram/pull/957))
- `CheckTag`:  支持外部样式类 @anlyyao ([#945](https://github.com/Tencent/tdesign-miniprogram/pull/945))
- `Radio`: 新增 CSS Variable 调整文案、图标等颜色，具体查看文档 @anlyyao ([#944](https://github.com/Tencent/tdesign-miniprogram/pull/944))

### 🐞 Bug Fixes
- `Popup`: 阻止内容区域滑动穿透 @LeeJim ([#943](https://github.com/Tencent/tdesign-miniprogram/pull/943))
- `Cascader`: 调整 `usingComponents` 中的绝对路径为相对路径 @miauyo ([#938](https://github.com/Tencent/tdesign-miniprogram/pull/938))
- `Icon`: 修复 customStyle 属性无效的问题 @anlyyao ([#950](https://github.com/Tencent/tdesign-miniprogram/pull/950))
- `DateTimePicker`: 修复 mode = second 不生效的问题 @LeeJim ([#952](https://github.com/Tencent/tdesign-miniprogram/pull/952))
### 🚧 Others
- `Textarea`: 修复 "带标题多行文本框" 示例不显示 @anlyyao ([#937](https://github.com/Tencent/tdesign-miniprogram/pull/937))

## 🌈 0.23.1 `2022-10-24` 
### 🐞 Bug Fixes

- `Steps`: 修复内存溢出的问题 @LeeJim ([#928](https://github.com/Tencent/tdesign-miniprogram/pull/928))
- `tabBar`: 使用正确的备用初始值 @anlyyao ([#930](https://github.com/Tencent/tdesign-miniprogram/pull/930))

### 🚧 Others
- `Input`: 修复 `demo`中 `value` 属性拼写错误 @anlyyao ([#923](https://github.com/Tencent/tdesign-miniprogram/pull/923))
- `Cascader`: 修改文档导入示例错误 @miauyo ([#924](https://github.com/Tencent/tdesign-miniprogram/pull/924))
- `Message`: 新增示例演示如何在自定义导航栏时使用 message @LeeJim ([#932](https://github.com/Tencent/tdesign-miniprogram/pull/932))
- 修复因 buffer 超出限制导致单元测试报错的问题 @LeeJim ([#925](https://github.com/Tencent/tdesign-miniprogram/pull/925))
- 更新官网 Demo 示例的二维码 @anlyyao ([#917](https://github.com/Tencent/tdesign-miniprogram/pull/917))


## 🌈 0.23.0 `2022-10-17` 
### 🚀 Features
- `Cascader`: 新增级联选择器 @LeeJim ([#912](https://github.com/Tencent/tdesign-miniprogram/pull/912))
- `RadioGroup`: 新增 align 和 icon 属性，当使用 options 渲染子项时有效 @LeeJim ([#912](https://github.com/Tencent/tdesign-miniprogram/pull/912))
### 🐞 Bug Fixes
- `PulldownRefresh`: 修复高度无法自适应外容器的问题 @LeeJim ([#909](https://github.com/Tencent/tdesign-miniprogram/pull/909))
- `Tabs`: 修复 placement = left 时， Nav 不可见且不居左的问题 @LeeJim ([#908](https://github.com/Tencent/tdesign-miniprogram/pull/908))
- `TabBar`: 修复 item 不传 value 时无法自动生成备用值的问题 @LeeJim ([#914](https://github.com/Tencent/tdesign-miniprogram/pull/914))
### 🚧 Others
- `Calendar`: 修复动态数据导致测试用例一直报错的问题 @LeeJim ([#916](https://github.com/Tencent/tdesign-miniprogram/pull/916))

## 🌈 0.22.0 `2022-10-10` 
### 🚀 Features
- `Calendar`: 新增日历组件 @LeeJim ([#896](https://github.com/Tencent/tdesign-miniprogram/pull/896))
### 🐞 Bug Fixes
- `Dialog`: 函数式`Dialog.close()` 关闭窗体支持自定义  `selector` @anlyyao ([#894](https://github.com/Tencent/tdesign-miniprogram/pull/894))
- `Message`: 函数式`Dialog.hide()` 关闭窗体支持自定义  `selector` @anlyyao ([#894](https://github.com/Tencent/tdesign-miniprogram/pull/894))

## 🌈 0.21.2 `2022-09-26` 
### 🐞 Bug Fixes
- `Input`: 修复 `clearable` 的显示和隐藏问题 @anlyyao ([#874](https://github.com/Tencent/tdesign-miniprogram/pull/874))
- `Tabbar`: 使用 fallback value 保证颜色展示正确 @LeeJim ([#875](https://github.com/Tencent/tdesign-miniprogram/pull/875))
- `Icon`: 移除 `CSS` 属性 `speak` @anlyyao ([#885](https://github.com/Tencent/tdesign-miniprogram/pull/885))
- `Textarea`: 修复 maxLength 情况下，显示值和实际值不一致问题 @anlyyao ([#883](https://github.com/Tencent/tdesign-miniprogram/pull/883))
- `Textarea`: 修复 maxcharacter 情况下，输入值超出 maxcharacter 的问题 @anlyyao ([#883](https://github.com/Tencent/tdesign-miniprogram/pull/883))
- `Input`: 修复 maxcharacter 情况下，输入值超出 maxcharacter 的问题 @anlyyao ([#883](https://github.com/Tencent/tdesign-miniprogram/pull/883))
- `DateTimePicker`: 修复选项重置错误的问题 @LeeJim ([#888](https://github.com/Tencent/tdesign-miniprogram/pull/888))
### 🚧 Others
- NPM 包中保留 dts，更好得支持 TypeScript  @AntzyMo ([#682](https://github.com/Tencent/tdesign-miniprogram/pull/682))

## 🌈 0.21.1 `2022-09-19` 
### 🚀 Features
- `Toast`: 使用 Transition 实现淡入淡出动画 @LeeJim ([#863](https://github.com/Tencent/tdesign-miniprogram/pull/863))
- `Upload`: 新增 source 属性，支持从聊天会话中读取文件 @LeeJim ([#868](https://github.com/Tencent/tdesign-miniprogram/pull/868))
### 🐞 Bug Fixes
- `Toast`: 重构 DOM 以及代码逻辑 @LeeJim ([#863](https://github.com/Tencent/tdesign-miniprogram/pull/863))
- `ActionSheet`: 修复 theme = list 时点击选项之后报错的问题 @LeeJim ([#866](https://github.com/Tencent/tdesign-miniprogram/pull/866))
- `Tabs`: 修复嵌套使用时样式错误的问题 @LeeJim ([#869](https://github.com/Tencent/tdesign-miniprogram/pull/869))
### 🚧 Others
- `Indexes`: 新增单元测试 @CodingOnStar ([#850](https://github.com/Tencent/tdesign-miniprogram/pull/850))
- `Message`: 新增单元测试 @anlyyao ([#859](https://github.com/Tencent/tdesign-miniprogram/pull/859))
- `SwipeCell`: 新增单元测试 @webwyb ([#861](https://github.com/Tencent/tdesign-miniprogram/pull/861))
- `Swiper`: 新增单元测试 @anlyyao ([#864](https://github.com/Tencent/tdesign-miniprogram/pull/864))

## 🌈 0.21.0 `2022-09-13` 
### ❗️BREAKING CHANGES
- `TabBar`: 点击 subTabBar 选项时，返回的值从数组改成选项的值 @LeeJim ([#846](https://github.com/Tencent/tdesign-miniprogram/pull/846))
### 🚀 Features
- `Slider`: 属性 marks 支持动态响应 @LeeJim ([#853](https://github.com/Tencent/tdesign-miniprogram/pull/853))
### 🐞 Bug Fixes
- `TabBar`: 修复子选项激活时，父选项未展示激活的问题 @LeeJim ([#846](https://github.com/Tencent/tdesign-miniprogram/pull/846))
- `Slider`: 修复 disabled 状态下点击报错的问题 @LeeJim ([#853](https://github.com/Tencent/tdesign-miniprogram/pull/853))
### 🚧 Others
- `TabBar`: 新增单元测试 @LeeJim ([#846](https://github.com/Tencent/tdesign-miniprogram/pull/846))
- `Upload`: 新增单元测试 @anlyyao ([#847](https://github.com/Tencent/tdesign-miniprogram/pull/847))
- `DropdownMenu`: 新增单元测试 @LeeJim ([#848](https://github.com/Tencent/tdesign-miniprogram/pull/848))
- `Slider`: 新增单元测试 @LeeJim ([#853](https://github.com/Tencent/tdesign-miniprogram/pull/853))
- `Picker`: 新增单元测试 @LeeJim ([#854](https://github.com/Tencent/tdesign-miniprogram/pull/854))
- `DateTimePicker`: 新增单元测试 @LeeJim ([#855](https://github.com/Tencent/tdesign-miniprogram/pull/855))
- `Sticky`: 新增单元测试 @Perisiguiendo ([#852](https://github.com/Tencent/tdesign-miniprogram/pull/852))

## 🌈 0.20.0 `2022-09-05` 
### ❗️BREKING CHANGES
- `Icon`: `size` 不在支持 `middle`、`small`等关键字，默认单位 `px` @anlyyao ([#828](https://github.com/Tencent/tdesign-miniprogram/pull/828))
### 🚀 Features
- `Textarea`: 更新演示代码文档 @anlyyao ([#817](https://github.com/Tencent/tdesign-miniprogram/pull/817))
- `Dialog`: 新增 overlayProps 属性透传至 Overlay 组件 @LeeJim ([#822](https://github.com/Tencent/tdesign-miniprogram/pull/822))
- `Icon`:  `name` 支持图片链接 @anlyyao ([#828](https://github.com/Tencent/tdesign-miniprogram/pull/828))
- `Tabs`: change 和 click 事件返回 label 的值 @LeeJim ([#841](https://github.com/Tencent/tdesign-miniprogram/pull/841))
- `Icon`: 新增更多的图标 @anlyyao ([#838](https://github.com/Tencent/tdesign-miniprogram/pull/838))

### 🐞 Bug Fixes
- `Tab`: 修复滑块定位错误的问题 @CodingOnStar ([#781](https://github.com/Tencent/tdesign-miniprogram/pull/781))
- `NoticeBar`: 解决函数同名导致控制台报错  @anlyyao ([#814](https://github.com/Tencent/tdesign-miniprogram/pull/814))
- `tabs`: 修复无法正常移除 tab panel 的问题 @LeeJim ([#830](https://github.com/Tencent/tdesign-miniprogram/pull/830))
- `DropdownMenu`: 修复下拉菜单定位错误的问题 @LeeJim ([#836](https://github.com/Tencent/tdesign-miniprogram/pull/836))
- `Tabs`: 修复垂直模式下内容区域绑定事件无效的问题 @anlyyao ([#837](https://github.com/Tencent/tdesign-miniprogram/pull/837))
- `Fab`: 修复悬浮按钮随页面滚动的问题 @anlyyao ([#842](https://github.com/Tencent/tdesign-miniprogram/pull/842))
### 🚧 Others
- `ActionSheet`: 新增单元测试 @anlyyao ([#832](https://github.com/Tencent/tdesign-miniprogram/pull/832))
- `Dialog`: 新增单元测试 @LeeJim ([#816](https://github.com/Tencent/tdesign-miniprogram/pull/816))
- `Overlay`: 新增单元测试 @LeeJim ([#818](https://github.com/Tencent/tdesign-miniprogram/pull/818))
- `Avatar`: 新增单元测试 @Perisiguiendo ([#812](https://github.com/Tencent/tdesign-miniprogram/pull/812))
- `Image`: 新增单元测试 @LeeJim ([#820](https://github.com/Tencent/tdesign-miniprogram/pull/820))
- `NoticeBar`: 新增单元测试 @anlyyao ([#821](https://github.com/Tencent/tdesign-miniprogram/pull/821))
- `CountDown`: 新增单元测试 @LeeJim ([#824](https://github.com/Tencent/tdesign-miniprogram/pull/824))
- `Collapse`: 新增单元测试 @LeeJim ([#825](https://github.com/Tencent/tdesign-miniprogram/pull/825))
- `Navbar`: 新增单元测试 @LeeJim ([#829](https://github.com/Tencent/tdesign-miniprogram/pull/829))
- `ImageViewer`: 新增单元测试 @LeeJim ([#826](https://github.com/Tencent/tdesign-miniprogram/pull/826))
- `Tabs`: 新增单元测试 @LeeJim ([#831](https://github.com/Tencent/tdesign-miniprogram/pull/831))
- `PullDownRefresh`: 新增单元测试 @anlyyao ([#835](https://github.com/Tencent/tdesign-miniprogram/pull/835))

## 🌈 0.19.3 `2022-08-29` 
### 🚀 Features
- `Toast`: 新增 close 事件 @AntzyMo ([#680](https://github.com/Tencent/tdesign-miniprogram/pull/680))
- `Toast`: 新增 destory 事件 @LeeJim ([#796](https://github.com/Tencent/tdesign-miniprogram/pull/796))
### 🐞 Bug Fixes
- `Picker`: 修复 `Picker` 示例显示不全 @anlyyao ([#804](https://github.com/Tencent/tdesign-miniprogram/pull/804))
### 🚧 Others
- `Toast`: 新增单元测试 @LeeJim ([#797](https://github.com/Tencent/tdesign-miniprogram/pull/797))
- `Footer`: 新增单元测试 @zhangpaopao0609 ([#794](https://github.com/Tencent/tdesign-miniprogram/pull/794))
- `Step`: 新增单元测试 @isanxia ([#792](https://github.com/Tencent/tdesign-miniprogram/pull/792))
- `Search`: 新增单元测试 @Perisiguiendo ([#790](https://github.com/Tencent/tdesign-miniprogram/pull/790))
- `Switch`: 新增单元测试 @Perisiguiendo ([#791](https://github.com/Tencent/tdesign-miniprogram/pull/791))
- `Empty`: 新增单元测试 @AntzyMo ([#801](https://github.com/Tencent/tdesign-miniprogram/pull/801))
- `Skeleton`: 新增单元测试 @Perisiguiendo ([#803](https://github.com/Tencent/tdesign-miniprogram/pull/803))

## 🌈 0.19.2 `2022-08-22` 
### 🚀 Features
- `Badge`:  新增单元测试 @Perisiguiendo ([#776](https://github.com/Tencent/tdesign-miniprogram/pull/776))
- `Input`: 新增单元测试 @anlyyao ([#775](https://github.com/Tencent/tdesign-miniprogram/pull/775))
- `Textarea`: 新增单元测试 @anlyyao ([#774](https://github.com/Tencent/tdesign-miniprogram/pull/774))
- `Stepper`: 新增单元测试 @anlyyao ([#773](https://github.com/Tencent/tdesign-miniprogram/pull/773))
- `Divider`:  新增单元测试 @Perisiguiendo ([#771](https://github.com/Tencent/tdesign-miniprogram/pull/771))
- `Result`:  新增单元测试 @CodingOnStar ([#769](https://github.com/Tencent/tdesign-miniprogram/pull/769))
- `Progress`:  `strokeWidth` 支持字符类型 @anlyyao ([#772](https://github.com/Tencent/tdesign-miniprogram/pull/772))
- `Progress`: 更新测试用例 @anlyyao ([#772](https://github.com/Tencent/tdesign-miniprogram/pull/772))
- `Rate`: 新增单元测试 @isanxia ([#767](https://github.com/Tencent/tdesign-miniprogram/pull/767))
- `ImageViewer`: 更新 `demo` 示例图片 @anlyyao ([#782](https://github.com/Tencent/tdesign-miniprogram/pull/782))
- `Rate`: 新增单元测试 @isanxia ([#767](https://github.com/Tencent/tdesign-miniprogram/pull/767))
### 🐞 Bug Fixes
- `Badge`: 修复 `showZero` && `offset` 无单位情况 @Perisiguiendo ([#776](https://github.com/Tencent/tdesign-miniprogram/pull/776))
- `Popup`: 修复 `zIndex` 无效问题 @anlyyao ([#784](https://github.com/Tencent/tdesign-miniprogram/pull/784))
- `ImageViewer`: 修复图片宽高都小于屏幕宽高时的拉伸问题 @anlyyao ([#782](https://github.com/Tencent/tdesign-miniprogram/pull/782))

## 🌈 0.19.1 `2022-08-15` 
### 🚀 Features
- `Upload`: 新增 click 事件 @LeeJim ([#762](https://github.com/Tencent/tdesign-miniprogram/pull/762))

### 🐞 Bug Fixes
- `Tag`: 修复 click 事件不生效 @anlyyao ([#738](https://github.com/Tencent/tdesign-miniprogram/pull/738))
- `Tag`: 修复行内元素基线对齐不正确 @anlyyao ([#738](https://github.com/Tencent/tdesign-miniprogram/pull/738))
- `Grid`: 修复垂直布局时间，align 无效 @anlyyao ([#739](https://github.com/Tencent/tdesign-miniprogram/pull/739))
- `Tag`: 修复 disabled 为true时，closable 无效的问题 @anlyyao ([#743](https://github.com/Tencent/tdesign-miniprogram/pull/743))
- `Tag`: 修复 maxWidth 输入为字符时，宽度计算错误问题 @anlyyao ([#743](https://github.com/Tencent/tdesign-miniprogram/pull/743))
- `Upload`: 修复自定义上传没有关联成功/失败状态 @Winfans ([#758](https://github.com/Tencent/tdesign-miniprogram/pull/758))
- `Swiper`: 修复动态修改 `swiper-item` 时，视图响应不正确问题 @anlyyao ([#761](https://github.com/Tencent/tdesign-miniprogram/pull/761))
- `Tabs`: 修复垂直布局时，内容区域不正确。 @anlyyao ([#760](https://github.com/Tencent/tdesign-miniprogram/pull/760))

### 🚧 Others
- `Fab`: 新增单元测试 @LeeJim ([#740](https://github.com/Tencent/tdesign-miniprogram/pull/740))
- `Icon`: 新增单元测试 @LeeJim ([#741](https://github.com/Tencent/tdesign-miniprogram/pull/741))
- `Cell`: 新增单元测试 @LeeJim ([#742](https://github.com/Tencent/tdesign-miniprogram/pull/742))
- `Popup`: 完善单元测试 @LeeJim ([#746](https://github.com/Tencent/tdesign-miniprogram/pull/746))
- `Progress`: 新增单元测试 @anlyyao ([#731](https://github.com/Tencent/tdesign-miniprogram/pull/731))
- `Drawer`: 新增单元测试 @anlyyao ([#732](https://github.com/Tencent/tdesign-miniprogram/pull/732))
- `Loading`: 新增单元测试 @anlyyao ([#733](https://github.com/Tencent/tdesign-miniprogram/pull/733))
- `Tag`: 修复文档 CheckTag 事件名称不正确 @anlyyao ([#738](https://github.com/Tencent/tdesign-miniprogram/pull/738))
- `Tag`: 完善单元测试 @anlyyao ([#743](https://github.com/Tencent/tdesign-miniprogram/pull/743))
- `Grid`: 新增单元测试 @LeeJim ([#752](https://github.com/Tencent/tdesign-miniprogram/pull/752))

## 🌈 0.19.0 `2022-08-08` 
### 🚀 Features
- `Skeleton`: 新增 `t-class-row` 外部样式类 @anlyyao ([#699](https://github.com/Tencent/tdesign-miniprogram/pull/699))
- `Cell`: 新增 `t-class-left-icon` 外部样式类 @anlyyao ([#703](https://github.com/Tencent/tdesign-miniprogram/pull/703))
- `Tabs`: 新增 sticky 和 stickyProps 属性透传至 Sticky 组件 @anlyyao ([#725](https://github.com/Tencent/tdesign-miniprogram/pull/725))
- `Tabs`: 新增 CSS Variable 调整选项卡背景色 @anlyyao ([#725](https://github.com/Tencent/tdesign-miniprogram/pull/725))
- `Tabs`: 新增 scroll 事件 @anlyyao ([#725](https://github.com/Tencent/tdesign-miniprogram/pull/725))
- `PulldownRefresh`: 新增 ScrollToTop 方法，手动调用滚动到顶部 @LeeJim ([#730](https://github.com/Tencent/tdesign-miniprogram/pull/730))
- `Checkbox`: 新增单元测试 @LeeJim ([#724](https://github.com/Tencent/tdesign-miniprogram/pull/724))
- `Button`: 新增单元测试 @LeeJim ([#726](https://github.com/Tencent/tdesign-miniprogram/pull/726))
- `Radio`: 新增单元测试 @LeeJim ([#729](https://github.com/Tencent/tdesign-miniprogram/pull/729))
- `BackTop`: 新增单元测试 @anlyyao ([#728](https://github.com/Tencent/tdesign-miniprogram/pull/728))
### 🐞 Bug Fixes
- `Cell`: 修复 `image` 插槽无效问题 @anlyyao ([#703](https://github.com/Tencent/tdesign-miniprogram/pull/703))
- `Tag`: 改用 `display: inline-flex`，宽度自适应 @anlyyao ([#723](https://github.com/Tencent/tdesign-miniprogram/pull/723))
### 🚧 Others
- 新增单元测试 @LeeJim ([#700](https://github.com/Tencent/tdesign-miniprogram/pull/700))
- `SwipeCell`: 更新示例代码 @anlyyao ([#698](https://github.com/Tencent/tdesign-miniprogram/pull/698))
- `Message`: 更新示例代码 @AntzyMo ([#695](https://github.com/Tencent/tdesign-miniprogram/pull/695))
- `Dialog`: 更新示例代码 @AntzyMo ([#704](https://github.com/Tencent/tdesign-miniprogram/pull/704))
- `Input`: 修复文档描述错误 @anlyyao ([#706](https://github.com/Tencent/tdesign-miniprogram/pull/706))
- `Checkbox`: 更新示例代码 @wangyuan0108 ([#668](https://github.com/Tencent/tdesign-miniprogram/pull/668))
- `Radio`: 更新示例代码 @wangyuan0108 ([#667](https://github.com/Tencent/tdesign-miniprogram/pull/667))
- `Toast`: 更新示例代码 @CodingOnStar ([#676](https://github.com/Tencent/tdesign-miniprogram/pull/676))
- `Empty`: 更新示例代码 @AntzyMo ([#709](https://github.com/Tencent/tdesign-miniprogram/pull/709))
- `Toast`: 优化示例代码 @LeeJim ([#711](https://github.com/Tencent/tdesign-miniprogram/pull/711))
- `BackTop`: 更新示例代码 @anlyyao ([#710](https://github.com/Tencent/tdesign-miniprogram/pull/710))
- `ActionSheet`: 更新示例代码 @LeeJim ([#716](https://github.com/Tencent/tdesign-miniprogram/pull/716))
- `DropdownMenu`: 更新示例代码 @LeeJim ([#721](https://github.com/Tencent/tdesign-miniprogram/pull/721))
- `ImageViewer`: 更新示例代码 @anlyyao ([#712](https://github.com/Tencent/tdesign-miniprogram/pull/712))
- `Sticky`: 更新示例代码 @anlyyao ([#720](https://github.com/Tencent/tdesign-miniprogram/pull/720))
- `Countdown`: 更新示例代码 @AntzyMo ([#714](https://github.com/Tencent/tdesign-miniprogram/pull/714))
- `Badge`: 更新示例代码 @wangyuan0108 ([#717](https://github.com/Tencent/tdesign-miniprogram/pull/717))
- `Message`: 更新示例代码 @AntzyMo ([#695](https://github.com/Tencent/tdesign-miniprogram/pull/695))

## 🌈 0.18.0 `2022-08-01` 

### ❗️ BREAKING CHANGES
- `Tabbar`: CSS Variables 命名规则由 `--t` 改成 `--td` 开头 @LeeJim ([#663](https://github.com/Tencent/tdesign-miniprogram/pull/663))
- `Avatar`: 头像组的样式内置进组件内 @anlyyao ([#665](https://github.com/Tencent/tdesign-miniprogram/pull/665))
### 🚀 Features
- `Avatar`: 新增 CSS Variable 调整 Avatar 背景、内容（文本或图标）颜色 @anlyyao ([#665](https://github.com/Tencent/tdesign-miniprogram/pull/665))
- `Swiper`: 新增 `paginationPosition` 属性，用于调整页码信息的位置 @anlyyao ([#669](https://github.com/Tencent/tdesign-miniprogram/pull/669))
- `Swiper`: 新增 CSS Variable 调整 Swiper 导航器背景、内容颜色 @anlyyao ([#669](https://github.com/Tencent/tdesign-miniprogram/pull/669))
- `Button`: 新增 loadingProps 属性透传至 Loading 组件 @anlyyao ([#673](https://github.com/Tencent/tdesign-miniprogram/pull/673))
- `Tabs`: 新增 CSS Variables 调整字体、滑块颜色等，具体查看文档 @LeeJim ([#684](https://github.com/Tencent/tdesign-miniprogram/pull/684))
- `Toast`: 支持 `duration` 传入 0 的时候，toast 不消失 @LeeJim ([#683](https://github.com/Tencent/tdesign-miniprogram/pull/683))
### 🐞 Bug Fixes
- `Tabbar`: 修复因 CSS Variables 没有写 fallback 导致样式丢失的问题 @LeeJim ([#663](https://github.com/Tencent/tdesign-miniprogram/pull/663))
- `Avatar`: 修复组件类名错误 @anlyyao ([#665](https://github.com/Tencent/tdesign-miniprogram/pull/665))
- `upload`: 修复组件中图片被挤压问题 @anlyyao ([#666](https://github.com/Tencent/tdesign-miniprogram/pull/666))
- `Button`: 修复 loading 无效的问题 @anlyyao ([#673](https://github.com/Tencent/tdesign-miniprogram/pull/673))
- `DropdownMenu`: 修复树形选择时，点击单选仍自动关闭的问题 @LeeJim ([#686](https://github.com/Tencent/tdesign-miniprogram/pull/686))
- `DropdownMenu`: 修复 `closeOnClickOverlay` 不生效的问题 @LeeJim ([#685](https://github.com/Tencent/tdesign-miniprogram/pull/685))
- `Cell`: 优化 slot 的渲染逻辑 @LeeJim ([#688](https://github.com/Tencent/tdesign-miniprogram/pull/688))

### 🚧 Others
- `Avatar`: 更新示例代码 @anlyyao ([#665](https://github.com/Tencent/tdesign-miniprogram/pull/665))
- `Swiper`: 更新示例代码 @anlyyao ([#669](https://github.com/Tencent/tdesign-miniprogram/pull/669))
- `Stepper`: 更新示例代码 @anlyyao ([#670](https://github.com/Tencent/tdesign-miniprogram/pull/670))
- `Progress`: 更新示例代码 @anlyyao ([#690](https://github.com/Tencent/tdesign-miniprogram/pull/690))
- `Loading`: 更新示例代码 @anlyyao ([#691](https://github.com/Tencent/tdesign-miniprogram/pull/691))
- `Slider`: 更新示例代码 @anlyyao ([#671](https://github.com/Tencent/tdesign-miniprogram/pull/671))
- `Cell`: 更新示例代码 @CodingOnStar ([#675](https://github.com/Tencent/tdesign-miniprogram/pull/675))
- `tabbar`: 修复文档中主题定制前缀错误的问题 @anlyyao ([#674](https://github.com/Tencent/tdesign-miniprogram/pull/674))

## 🌈 0.17.0 `2022-07-25` 
### ❗️BREAKING CHANGES
- `Tabbar`: 移除 color 属性，使用 CSS Variable 替代 @LeeJim ([#650](https://github.com/Tencent/tdesign-miniprogram/pull/650))
- `Rate`: 移除 color 属性，使用 CSS Variable 替代 @anlyyao ([#653](https://github.com/Tencent/tdesign-miniprogram/pull/653))
- `Rate`: `external-classes` 属性中的 `t-class-desc` 更名为 `t-class-text` @anlyyao ([#653](https://github.com/Tencent/tdesign-miniprogram/pull/653))
- `Search`:  将 `external-classes` 属性中的 `t-class-cancel` 更名为 `t-class-action`。 @anlyyao ([#654](https://github.com/Tencent/tdesign-miniprogram/pull/654))

### 🚀 Features
- `Tabs`: 超过屏幕时，自动将激活的选项滚动到中间 @LeeJim ([#633](https://github.com/Tencent/tdesign-miniprogram/pull/633))
- `Tabs`: 新增 `swipeable` 属性，用于控制是否滑动切换 @LeeJim ([#634](https://github.com/Tencent/tdesign-miniprogram/pull/634))
- `PullDownRefresh`: 新增 `scrolltolower` 事件 @ws2003gq ([#641](https://github.com/Tencent/tdesign-miniprogram/pull/641))
- `Button`:  `variant` 属性新增 `dashed` @anlyyao ([#648](https://github.com/Tencent/tdesign-miniprogram/pull/648))
- `Tabbar`: 新增 CSS Variable 调整标签栏字体和图标颜色，具体查看文档 @LeeJim ([#650](https://github.com/Tencent/tdesign-miniprogram/pull/650))
- `Grid`: `external-classes` 属性增加 `t-class-content` @anlyyao ([#635](https://github.com/Tencent/tdesign-miniprogram/pull/635))
- `Grid`: 新增 CSS Variable 调整宫格背景、文本等颜色，具体查看文档 @anlyyao ([#635](https://github.com/Tencent/tdesign-miniprogram/pull/635))
- `Search`: 新增 CSS Variable 调整 `Search` 字体、背景、图标等颜色，具体查看文档 @anlyyao ([#654](https://github.com/Tencent/tdesign-miniprogram/pull/654))
- `Rate`: 新增 CSS Variable 调整 Rate 辅助文本、选中、未选中及禁用态图标颜色，具体查看文档 @anlyyao ([#653](https://github.com/Tencent/tdesign-miniprogram/pull/653))
- `Input`:  移除 `external-classes` 属性中的 `t-class-placeholder`。 @anlyyao ([#651](https://github.com/Tencent/tdesign-miniprogram/pull/651))
- `Input`:  `external-classes` 属性新增 `t-class-icon`, `t-class-label`,  `t-class-clearable`,  `t-class-suffix`, `t-class-suffix-icon` @anlyyao ([#651](https://github.com/Tencent/tdesign-miniprogram/pull/651))
- `Input`: 新增 CSS Variable 调整 `Input` 字体、背景、图标等颜色，具体查看文档 @anlyyao ([#651](https://github.com/Tencent/tdesign-miniprogram/pull/651))
- `Divider`: 新增 CSS Variable 调整分割线、文本颜色，具体查看文档 @anlyyao ([#656](https://github.com/Tencent/tdesign-miniprogram/pull/656))
- `Indexes`: 新增 CSS Variable 调整 标题、背景、文本等颜色，具体查看文档 @anlyyao ([#649](https://github.com/Tencent/tdesign-miniprogram/pull/649))
- `Drawer`: 新增 CSS Variable 调整抽屉背景、列表项标题、列表项图标、列表项下边框颜色，具体查看文档 @anlyyao ([#658](https://github.com/Tencent/tdesign-miniprogram/pull/658))

### 🐞 Bug Fixes
- `Tabs`: 修复值等于 0 时不能正常切换的问题 @LeeJim ([#632](https://github.com/Tencent/tdesign-miniprogram/pull/632))
- `Textarea`: 修复超出 `maxcharacter` 后，仍能继续输入的问题 @anlyyao ([#625](https://github.com/Tencent/tdesign-miniprogram/pull/625))
- `Picker`: 修复因重复定义 `options` 导致告警的问题 @LeeJim ([#638](https://github.com/Tencent/tdesign-miniprogram/pull/638))
- `Image`: 补充缺失的 `shape = square` 样式 @anlyyao ([#637](https://github.com/Tencent/tdesign-miniprogram/pull/637))
- `Button`: 修复 `variant=outline`无效 @anlyyao ([#648](https://github.com/Tencent/tdesign-miniprogram/pull/648))

### 🚧 Others
- `Navbar`: 更新示例代码 @anlyyao ([#636](https://github.com/Tencent/tdesign-miniprogram/pull/636))
- `Textarea`: 更新示例代码 @anlyyao ([#625](https://github.com/Tencent/tdesign-miniprogram/pull/625))
- `Icon`: 更新示例代码 @anlyyao ([#642](https://github.com/Tencent/tdesign-miniprogram/pull/642))
- `Image`: 更新示例代码 @anlyyao ([#637](https://github.com/Tencent/tdesign-miniprogram/pull/637))
- `Fab`: 更新示例代码 @wangyuan0108 ([#602](https://github.com/Tencent/tdesign-miniprogram/pull/602))
- `Tabbar`: 新增自定义主题示例代码 @LeeJim ([#650](https://github.com/Tencent/tdesign-miniprogram/pull/650))
- `Divider`: 更新示例代码 @wangyuan0108 ([#608](https://github.com/Tencent/tdesign-miniprogram/pull/608))
- `Overlay`: 更新示例代码 @LeeJim ([#655](https://github.com/Tencent/tdesign-miniprogram/pull/655))
- `Grid`: 更新示例代码 @anlyyao ([#635](https://github.com/Tencent/tdesign-miniprogram/pull/635))
- `Search`: 更新示例代码 @anlyyao ([#654](https://github.com/Tencent/tdesign-miniprogram/pull/654))
- `Rate`: 更新示例代码 @anlyyao ([#653](https://github.com/Tencent/tdesign-miniprogram/pull/653))
- `DateTimePicker`: 更新示例代码 @anlyyao ([#652](https://github.com/Tencent/tdesign-miniprogram/pull/652))
- `Button`: 更新示例代码 @wangyuan0108 ([#607](https://github.com/Tencent/tdesign-miniprogram/pull/607))
- `Drawer`: 更新示例代码 @wangyuan0108 ([#613](https://github.com/Tencent/tdesign-miniprogram/pull/613))
- `Tabs`: 更新示例代码 @wangyuan0108 ([#616](https://github.com/Tencent/tdesign-miniprogram/pull/616))
- `Input`: 更新示例代码 @anlyyao ([#651](https://github.com/Tencent/tdesign-miniprogram/pull/651))
- `Indexes`: 更新示例代码 @anlyyao ([#649](https://github.com/Tencent/tdesign-miniprogram/pull/649))

## 🌈 0.16.0 `2022-07-18` 
### ❗ BREAKING CHANGES
- `Drawer`: 调整 `placement` 属性，只支持 `left` 和 `right` @LeeJim ([#619](https://github.com/Tencent/tdesign-miniprogram/pull/619))
- `Button`: `tap` 事件返回值更新为 `event` 对象 @anlyyao ([#603](https://github.com/Tencent/tdesign-miniprogram/pull/603))
- `Skeleton`: 属性 `theme` 移除 `avatar-text`；新增 `avatar` 、`image` 、`paragraph` @anlyyao ([#617](https://github.com/Tencent/tdesign-miniprogram/pull/617))
- `Skeleton`:  外部样式类移除 `t-class-avatar` 、`t-class-image` 、`t-class-text` ；新增 `t-class-col`  @anlyyao ([#617](https://github.com/Tencent/tdesign-miniprogram/pull/617))
- `Skeleton`: 属性 `rowCol ` 移除默认值 `[1, 1, 1, { width: 70% }]` @anlyyao ([#617](https://github.com/Tencent/tdesign-miniprogram/pull/617))
### 🚀 Features
- `Picker`: 增加 `autoClose` 属性，点击确认、取消、遮罩层时自动关闭 @LeeJim ([#614](https://github.com/Tencent/tdesign-miniprogram/pull/614))
- `Result`: 新增组件 @anlyyao ([#589](https://github.com/Tencent/tdesign-miniprogram/pull/589))
### 🐞 Bug Fixes
- `Picker`: 修复 `pick` 事件返回的 `label `不正确的问题 @LeeJim ([#612](https://github.com/Tencent/tdesign-miniprogram/pull/612))
- `Picker`: `confirm-btn` 和 `cancel-btn` 增加 `boolean` 类型，值为 `true` 时使用默认文案 @LeeJim ([#614](https://github.com/Tencent/tdesign-miniprogram/pull/614))
- `DropdownMenu`: 移除冗余的 `z-index` @LeeJim ([#623](https://github.com/Tencent/tdesign-miniprogram/pull/623))
- `Loading`: 修复 `text` 为空时仍渲染非空节点的问题 @wanpan11 ([#621](https://github.com/Tencent/tdesign-miniprogram/pull/621))
### 🚧 Others
- `Switch`: 更新示例代码 @wangyuan0108 ([#615](https://github.com/Tencent/tdesign-miniprogram/pull/615))
- `NoticeBar`: 更新示例代码 @anlyyao ([#610](https://github.com/Tencent/tdesign-miniprogram/pull/610))
- `Picker`: 展示示例代码 @anlyyao ([#606](https://github.com/Tencent/tdesign-miniprogram/pull/606))
- `Tag`: 更新示例代码 @anlyyao ([#622](https://github.com/Tencent/tdesign-miniprogram/pull/622))
- `Steps`: 更新示例代码 @anlyyao ([#609](https://github.com/Tencent/tdesign-miniprogram/pull/609))
- `Skeleton`: 更新示例代码 @anlyyao ([#617](https://github.com/Tencent/tdesign-miniprogram/pull/617))

## 🌈 0.15.1 `2022-07-13` 
### 🚀 Features
- `TabBar`: 支持使用 CSS Variable 定制颜色 @LeeJim ([#601](https://github.com/Tencent/tdesign-miniprogram/pull/601))
### 🐞 Bug Fixes
- `DropdownMenu`: 优化按钮样式 @LeeJim ([#592](https://github.com/Tencent/tdesign-miniprogram/pull/592))
- `DropdownMenu`: 修复切换菜单时出现漂移的问题 @LeeJim ([#592](https://github.com/Tencent/tdesign-miniprogram/pull/592))
- `Dialog`: 修复无法展示的问题以及过渡动画 @LeeJim ([#596](https://github.com/Tencent/tdesign-miniprogram/pull/596))
- `DropdownMenu`: 修复下拉菜单无法展开的问题 @LeeJim ([#604](https://github.com/Tencent/tdesign-miniprogram/pull/604))
### 🚧 Others
- 官网文档升级更新: 展示所有代码（WXML、JS、WXSS、JSON），并且 DEMO 与 示例代码保持一致 @LeeJim ([#590](https://github.com/Tencent/tdesign-miniprogram/pull/590))
- `Popup`: 展示示例代码 @LeeJim ([#599](https://github.com/Tencent/tdesign-miniprogram/pull/599))
- `Upload`:  展示示例代码 @anlyyao ([#595](https://github.com/Tencent/tdesign-miniprogram/pull/595))
- `TabBar`: 更新示例代码 @LeeJim ([#601](https://github.com/Tencent/tdesign-miniprogram/pull/601))
- `Footer`: 更新示例代码 @wangyuan0108 ([#593](https://github.com/Tencent/tdesign-miniprogram/pull/593))

## 0.15.0 `2022-7-11`

### BREAKING CHANGES

- DropdownMenu: 属性 overlay 更名为 showOverlay [#582](https://github.com/Tencent/tdesign-miniprogram/pull/582) [@LeeJim](https://github.com/LeeJim)
- Popup: 移除 transitionProps 属性 [#585](https://github.com/Tencent/tdesign-miniprogram/pull/585) [@LeeJim](https://github.com/LeeJim)
### Bug Fixes

- Tabs: 修复选项卡不存在时滑动报错问题 [#573](https://github.com/Tencent/tdesign-miniprogram/pull/573) [@anlyyao](https://github.com/anlyyao)
- DropdownMenu: 修复关闭时无动画的问题 [#587](https://github.com/Tencent/tdesign-miniprogram/pull/587) [@LeeJim](https://github.com/LeeJim) 
### Features

- Fab: 支持文本自适应 [#575](https://github.com/Tencent/tdesign-miniprogram/pull/575) [@anlyyao](https://github.com/anlyyao)
- Tag: [#581](https://github.com/Tencent/tdesign-miniprogram/pull/581) [@anlyyao](https://github.com/anlyyao)
  - 视觉更新
  - 支持图标
- DropdownMenu: 新增 toggle 示例方法，用于切换下拉菜单 [#584](https://github.com/Tencent/tdesign-miniprogram/pull/584) [@LeeJim](https://github.com/LeeJim)
- DropdownMenu: 新增 keys 属性以支持自定义 label 和 value 的字段名 [#582](https://github.com/Tencent/tdesign-miniprogram/pull/582) [@LeeJim](https://github.com/LeeJim)
- Popup: [#585](https://github.com/Tencent/tdesign-miniprogram/pull/585) [@LeeJim](https://github.com/LeeJim)
  - 新增 duration 属性，控制动画过渡时间
  - 新增 customStyle 透传样式至根节点
  - 新增 overlayProps 属性，透传至 overlay 组件

## 0.14.0 `2022-7-1`

### BREAKING CHANGES

- TextArea: 移除不生效的外部样式类 `t-class-placeholder`, 建议使用类名 `t-textarea__placeholder` 进行样式覆盖 [#541](https://github.com/Tencent/tdesign-miniprogram/pull/541) [@anlyyao](https://github.com/anlyyao)
### Bug Fixes

- Tabbar: 修复具名插槽无法使用的问题 [#548](https://github.com/Tencent/tdesign-miniprogram/pull/548) [@LeeJim](https://github.com/LeeJim)
- 修复默认层级问题 [#553](https://github.com/Tencent/tdesign-miniprogram/pull/553) [@webwyb](https://github.com/webwyb) 
  - Dialog
  - DropdownMenu
  - Drawer
  - Message
  - Popup
- Fab: 修复 `text` 属性不生效的问题 [#561](https://github.com/Tencent/tdesign-miniprogram/pull/561) [@LeeJim](https://github.com/LeeJim)
- NoticeBar: 修复公告不滚动问题 [#562](https://github.com/Tencent/tdesign-miniprogram/pull/562) [@LeeJim](https://github.com/LeeJim)
- Dialog: 修复点击遮罩层不会触发 `close` 事件的问题 [#566](https://github.com/Tencent/tdesign-miniprogram/pull/566) [@LeeJim](https://github.com/LeeJim)

### Features

- ActionSheet: 新增 `t-class-content`、`t-class-cancel` 外部样式类 [#557](https://github.com/Tencent/tdesign-miniprogram/pull/557) [@webwyb](https://github.com/webwyb) 
- Progress: 新增 `t-class-bar` 外部样式类 [#558](https://github.com/Tencent/tdesign-miniprogram/pull/558) [@anlyyao](https://github.com/anlyyao) 
- Picker: [#565](https://github.com/Tencent/tdesign-miniprogram/pull/565) [@LeeJim](https://github.com/LeeJim) 
  - 新增 `confirm` 事件，返回参数和 `change` 一致
  - `confirm`、`change`、`pick` 事件均返回 `label` 参数

## 0.13.2 `2022-6-16`

### Bug Fixes

- Dialog: 修复取消按钮传递 Object 显示不正确的问题 [#510](https://github.com/Tencent/tdesign-miniprogram/pull/510) [@weihongyu12](https://github.com/weihongyu12)
- Checkbox: 修复外部样式类无法使用的问题 [#535](https://github.com/Tencent/tdesign-miniprogram/pull/535) [@LeeJim](https://github.com/LeeJim)

### Features

- DropdownMenu: 单选的情况下，选择之后直接关闭 [#539](https://github.com/Tencent/tdesign-miniprogram/pull/539) [@LeeJim](https://github.com/LeeJim)

## 0.13.1 `2022-6-10`

### Bug Fixes

- Textarea: 修复字数统计不生效的问题 [#510](https://github.com/Tencent/tdesign-miniprogram/pull/510) [@anlyyao](https://github.com/anlyyao)
- Textarea: 移除无用的组件依赖  [#520](https://github.com/Tencent/tdesign-miniprogram/pull/520) [@LeeJim](https://github.com/LeeJim)

### Features

- Textarea: 支持 `cursor-spacing` 属性 [#512](https://github.com/Tencent/tdesign-miniprogram/pull/512) [@anlyyao](https://github.com/anlyyao)
- Toast: 新增 `showToast` 和 `hideToast` 方法 [#514](https://github.com/Tencent/tdesign-miniprogram/pull/514) [@webwyb](https://github.com/webwyb)

### Others

- 支持微信开发者工具可视化编程

## 0.13.0 `2022-6-1`
### BREAKING CHANGES

- Picker: [#462](https://github.com/Tencent/tdesign-miniprogram/pull/462) [@wutianSweet](https://github.com/wutianSweet)
  - 事件 `change` 更名为 `pick`
  - 事件 `confirm` 更名为 `change`
- PickerItem: [#462](https://github.com/Tencent/tdesign-miniprogram/pull/462) [@wutianSweet](https://github.com/wutianSweet)
   - 移除 `value` 属性
- DateTimePicker: [#462](https://github.com/Tencent/tdesign-miniprogram/pull/462) [@wutianSweet](https://github.com/wutianSweet)
  - 新增 `start` 和 `end` 属性用于替代 `disable-date` 属性
  - 移除 `disable-date` 属性
  - 事件 `change` 更名为 `pick`
  - 事件 `confirm` 更名为 `change`
  - 移除 `column-change` 事件
  - 属性 `format` 默认值改成 `''`
  - 重构了事件返回参数，在传入了 `format` 属性时，`value` 则是格式化之后的值，否则就是 `picker-item` 的值

### Bug Fixes

- Tabs: 修复在 `popup` 中使用时丢失 `tab-nav` 的问题 [#491](https://github.com/Tencent/tdesign-miniprogram/pull/491) [@LeeJim](https://github.com/LeeJim)
- Input: 修复 `max-character` 不生效的问题 [#495](https://github.com/Tencent/tdesign-miniprogram/pull/495) [@LeeJim](https://github.com/LeeJim)
- PullDownRefresh: 修复使用组件之后无法滚动的问题 [#502](https://github.com/Tencent/tdesign-miniprogram/pull/502) [@LeeJim](https://github.com/LeeJim)

### Features

- Tabbar: 新增支持 `icon` 插槽 [#485](https://github.com/Tencent/tdesign-miniprogram/pull/485) [@LeeJim](https://github.com/LeeJim)
- Button: 新增 `iconProps` 属性透传至 `icon` [#492](https://github.com/Tencent/tdesign-miniprogram/pull/492) [@LeeJim](https://github.com/LeeJim)
- Collapse: 新增 `t-class-header` & `t-class-content` 外部样式类 [#496](https://github.com/Tencent/tdesign-miniprogram/pull/496) [@LeeJim](https://github.com/LeeJim)
- Input: 新增 `prefixIcon` 属性和插槽 [#498](https://github.com/Tencent/tdesign-miniprogram/pull/498) [@LeeJim](https://github.com/LeeJim)

## 0.12.1 `2022-5-27`
### Bug Fixes

- Dialog: 修复按钮传入 `openType` 不生效的问题 [#470](https://github.com/Tencent/tdesign-miniprogram/pull/470) [@LeeJim](https://github.com/LeeJim)
- Collapse: 修复 `t-class` 外部样式类无法使用的问题 [#473](https://github.com/Tencent/tdesign-miniprogram/pull/473) [@LeeJim](https://github.com/LeeJim)
- DropdownMenu: 修复 `label` 无法实时更新的问题 [#474](https://github.com/Tencent/tdesign-miniprogram/pull/474) [@LeeJim](https://github.com/LeeJim)
- Sticky: 修复吸顶后 `tabs` 无法滑动的问题 [#475](https://github.com/Tencent/tdesign-miniprogram/pull/475) [@LeeJim](https://github.com/LeeJim)
- Tabbar: 补充缺失的 `icon` 插槽 [#485](https://github.com/Tencent/tdesign-miniprogram/pull/485) [@LeeJim](https://github.com/LeeJim)

## 0.12.0 `2022-5-24`

### BREAKING CHANGES

- Collapse: `expandIcon` 默认值从 `true` 改成 `null` [#462](https://github.com/Tencent/tdesign-miniprogram/pull/462) [@LeeJim](https://github.com/LeeJim)
- Collapse: `headerRightContent` 移除 `boolean` 类型 [#462](https://github.com/Tencent/tdesign-miniprogram/pull/462) [@LeeJim](https://github.com/LeeJim)
### Bug Fixes

- Tabbar: 优化代码避免在 setData 里传输不必要的页面实例 [#448](https://github.com/Tencent/tdesign-miniprogram/pull/448) [@1977474741](https://github.com/1977474741)
- Sticky: 修复在无法获取页面实例时报错的问题 [#449](https://github.com/Tencent/tdesign-miniprogram/pull/449) [@JJunYang](https://github.com/JJunYang)
- Skeleton: 添加组件基础默认样式 [#453](https://github.com/Tencent/tdesign-miniprogram/pull/453) [@JJunYang](https://github.com/JJunYang)
- DropdownMenu: 修正遮罩层的位置，以及下拉菜单的高度 [#456](https://github.com/Tencent/tdesign-miniprogram/pull/456) [@LeeJim](https://github.com/LeeJim)
- DropdownMenu: 修复菜单选项点击区域过小的问题 [#457](https://github.com/Tencent/tdesign-miniprogram/pull/457) [@LeeJim](https://github.com/LeeJim)
- BackTop: 修复丢失的 `to-top` 事件 [#460](https://github.com/Tencent/tdesign-miniprogram/pull/460) [@JJunYang](https://github.com/JJunYang)
- Collapse: 修复 `header`、`expand-icon`、`header-right-content` 插槽无法使用的问题 [#462](https://github.com/Tencent/tdesign-miniprogram/pull/462) [@LeeJim](https://github.com/LeeJim)
### Features

- Steps: 节点支持自定义样式 [#437](https://github.com/Tencent/tdesign-miniprogram/pull/437) [@anlyyao](https://github.com/anlyyao)

## 0.11.2 `2022-5-15`

### Bug Fixes

- Picker: 修复在没有取消和确认按钮的时候，标题没居中对齐的问题 [#435](https://github.com/Tencent/tdesign-miniprogram/pull/435) [@LeeJim](https://github.com/LeeJim)
- Sticky: 修复在极端情况下报错的问题 [#440](https://github.com/Tencent/tdesign-miniprogram/pull/440) [@JJunYang](https://github.com/JJunYang)

### Features

- 完善 Input 原生属性: [#434](https://github.com/Tencent/tdesign-miniprogram/pull/434) [@LeeJim](https://github.com/LeeJim)
  - 完善 `change` 事件，增加返回 `cursor` 和 `keyCode` 数据
  - 增加 `keyboardheightchange` 事件，键盘高度发生变化的时候触发
  - 增加占位符相关属性：`placehoderStyle` 和 `placeholderClass`
  - 增加光标相关属性：`cursor`、`selection-start`、`selection-end`
  - 增加 `hold-keyboard` 属性
  - 增加安全键盘相关属性
- Button: 增加 `bindchooseavatar` 原生事件，用户选择头像 [#443](https://github.com/Tencent/tdesign-miniprogram/pull/443) [@anlyyao](https://github.com/anlyyao)
- Input: 支持 `borderless` 属性 [3cd7d58](https://github.com/Tencent/tdesign-miniprogram/commit/3cd7d58beed539914382784701e1b611293ad257) [@LeeJim](https://github.com/LeeJim)
## 0.11.1 `2022-5-10`

### Bug Fixes

- 依赖错误的问题 [#438](https://github.com/Tencent/tdesign-miniprogram/pull/438) [@LeeJim](https://github.com/LeeJim)

## 0.11.0 `2022-5-7`

### BREAKING CHANGES

- Tabs: 不再支持 slot 类型的 `label` [#423](https://github.com/Tencent/tdesign-miniprogram/pull/423) [@LeeJim](https://github.com/LeeJim)

### Bug Fixes

- Picker: 修复滑动延迟的问题 [#415](https://github.com/Tencent/tdesign-miniprogram/pull/415) [@LeeJim](https://github.com/LeeJim)
- Avatar: 修复图标大小不随尺寸变化的问题 [#424](https://github.com/Tencent/tdesign-miniprogram/pull/424) [@Perisiguiendo](https://github.com/Perisiguiendo)
- Tabbar: 修复样式告警问题 [#426](https://github.com/Tencent/tdesign-miniprogram/pull/426) [@anlyyao](https://github.com/anlyyao)
- 修复样式告警问题: [#431](https://github.com/Tencent/tdesign-miniprogram/pull/431) [@anlyyao](https://github.com/anlyyao)
  - ActionSheet
  - ImageViewer
  - Picker
  - Steps
## 0.10.0 `2022-4-29`

### BREAKING CHANGES

- Picker: 子组件名称从 `t-picker-column` 改成 `t-picker-item` [#392](https://github.com/Tencent/tdesign-miniprogram/pull/392) [@LeeJim](https://github.com/LeeJim)
- DateTimePicker: `value` 从非受控改成受控 [#413](https://github.com/Tencent/tdesign-miniprogram/pull/413) [@LeeJim](https://github.com/LeeJim)
### Bug Fixes

- Drawer: 修复 `items` 标题无法显示的问题 [#388](https://github.com/Tencent/tdesign-miniprogram/pull/388) [@anlyyao](https://github.com/anlyyao)
- PullDownRefresh: 修复无法使用的问题 [#400](https://github.com/Tencent/tdesign-miniprogram/pull/400) [@LeeJim](https://github.com/LeeJim)
- Toast: 更正 `Loading` 标志的颜色 [#405](https://github.com/Tencent/tdesign-miniprogram/pull/405) [@LeeJim](https://github.com/LeeJim)
- DateTimePicker: 修复 `defaultValue` 无法使用的问题 [#413](https://github.com/Tencent/tdesign-miniprogram/pull/413) [@LeeJim](https://github.com/LeeJim)

### Features

- Overlay: 新增遮罩层组件 [#407](https://github.com/Tencent/tdesign-miniprogram/pull/407) [@LeeJim](https://github.com/LeeJim)
- ImageViewer: 新增图片预览组件 [#408](https://github.com/Tencent/tdesign-miniprogram/pull/408) [@NuoHui](https://github.com/NuoHui)
- Tabs: 新增 `click` 事件 [#384](https://github.com/Tencent/tdesign-miniprogram/pull/384) [@JJunYang](https://github.com/JJunYang)
- Grid: 新增 default `slot` [#395](https://github.com/Tencent/tdesign-miniprogram/pull/395) [@LeeJim](https://github.com/LeeJim)
- Loading: 新增 `inheritColor` 属性，加载标志的颜色继承外部 [#404](https://github.com/Tencent/tdesign-miniprogram/pull/404) [@LeeJim](https://github.com/LeeJim)
- Toast: 新增遮罩层，通过 `showOverlay` 和 `overlayProps` 控制 [#409](https://github.com/Tencent/tdesign-miniprogram/pull/409) [@LeeJim](https://github.com/LeeJim)

## 0.9.0 `2022-4-21`

### BREAKING CHANGES

- Steps: 子组件名称从 `t-step` 改成 `t-step-item` [#373](https://github.com/Tencent/tdesign-miniprogram/pull/373) [@anlyyao](https://github.com/anlyyao)
### Bug Fixes

- Checkbox: 优化渲染性能 [#358](https://github.com/Tencent/tdesign-miniprogram/pull/358) [@LeeJim](https://github.com/LeeJim)
- Switch: 修复无法选择的问题 [#362](https://github.com/Tencent/tdesign-miniprogram/pull/362) [@LeeJim](https://github.com/LeeJim)

### Features

- ActionSheet: 新增动作面板组件 [#347](https://github.com/Tencent/tdesign-miniprogram/pull/347) [@NuoHui](https://github.com/NuoHui)
- NoticeBar: 新增公告栏组件 [#354](https://github.com/Tencent/tdesign-miniprogram/pull/354) [@anlyyao](https://github.com/anlyyao)

## 0.8.0 `2022-4-15`

### BREAKING CHANGES

- CheckboxGroup: change 事件返回的 value 将会过滤非 checkbox 的值 [#347](https://github.com/Tencent/tdesign-miniprogram/pull/347) [@LeeJim](https://github.com/LeeJim)
### Bug Fixes

- Steps: 修复子步骤条不支持 status 的问题 [#334](https://github.com/Tencent/tdesign-miniprogram/pull/334) [@anlyyao](https://github.com/anlyyao)
- Picker: 修复出现空白的取消和确认按钮 [#342](https://github.com/Tencent/tdesign-miniprogram/pull/342) [@jin0209](https://github.com/jin0209)
- Swiper: 修复点击误触发翻页问题 [#343](https://github.com/Tencent/tdesign-miniprogram/pull/343) [@esky](https://github.com/esky)
- Radio: 修复 label 错误的渲染位置 [#347](https://github.com/Tencent/tdesign-miniprogram/pull/347) [@LeeJim](https://github.com/LeeJim)
- Checkbox: 修复 label 错误的渲染位置 [#347](https://github.com/Tencent/tdesign-miniprogram/pull/347) [@LeeJim](https://github.com/LeeJim)
- Textarea: 
    - 修复缺失的 label 插槽 [#348](https://github.com/Tencent/tdesign-miniprogram/pull/348) [@anlyyao](https://github.com/anlyyao)
    - 修复传入 adjust-position 不生效的问题 [#349](https://github.com/Tencent/tdesign-miniprogram/pull/349) [@anlyyao](https://github.com/anlyyao)
- Transition: 修复动画过程中触发 leave 会导致界面卡死的问题 [#356](https://github.com/Tencent/tdesign-miniprogram/pull/356) [@esky](https://github.com/esky)
### Features

- DropdownMenu: 新增下拉菜单组件 [#347](https://github.com/Tencent/tdesign-miniprogram/pull/347) [@LeeJim](https://github.com/LeeJim)
- Radio: 新增 borderless 属性 [#347](https://github.com/Tencent/tdesign-miniprogram/pull/347) [@LeeJim](https://github.com/LeeJim)
- Checkbox: 
    - 新增 borderless 属性 [#347](https://github.com/Tencent/tdesign-miniprogram/pull/347) [@LeeJim](https://github.com/LeeJim)
    - 新增 theme 属性，添加 tag 类型，默认值为 default [#347](https://github.com/Tencent/tdesign-miniprogram/pull/347) [@LeeJim](https://github.com/LeeJim)
- CheckboxGroup: 新增 customStyle 属性，透传 style 至根元素 [#347](https://github.com/Tencent/tdesign-miniprogram/pull/347) [@LeeJim](https://github.com/LeeJim)



## 0.7.3 `2022-4-7`

### Bug Fixes

- Cell: 修复传入 String 类型的 `right-icon` 不生效的问题 [#321](https://github.com/Tencent/tdesign-miniprogram/pull/321) [@LeeJim](https://github.com/LeeJim)
- Tabs: 属性 `label` 支持 slot [#327](https://github.com/Tencent/tdesign-miniprogram/pull/327) [@LeeJim](https://github.com/LeeJim)
- Dialog: 完善 `close` 事件返回的参数 [#332](https://github.com/Tencent/tdesign-miniprogram/pull/332) [@LeeJim](https://github.com/LeeJim)
- 受控优化：支持不传值时默认为非受控用法 [#329](https://github.com/Tencent/tdesign-miniprogram/pull/329) [#331](https://github.com/Tencent/tdesign-miniprogram/pull/331) [@LeeJim](https://github.com/LeeJim)
### Features

- 新增组件：
  - Collapse 折叠面板 [#322](https://github.com/Tencent/tdesign-miniprogram/pull/322) [@LeeJim](https://github.com/LeeJim)
  - Progress 进度条 [#318](https://github.com/Tencent/tdesign-miniprogram/pull/318) [@anlyyao](https://github.com/anlyyao)
- Picker: 新增属性 `header` 以及 `header` 和 `footer` 的插槽 [#323](https://github.com/Tencent/tdesign-miniprogram/pull/323) [@jin0209](https://github.com/jin0209)
- DateTimePicker: 新增属性 `header` 以及 `header` 和 `footer` 的插槽 [#323](https://github.com/Tencent/tdesign-miniprogram/pull/323) [@jin0209](https://github.com/jin0209)

## 0.7.2 `2022-3-31`

### Bug Fixes

- Search: 修复 `submit` 事件返回参数错误的问题 [#291](https://github.com/Tencent/tdesign-miniprogram/pull/291) [@anlyyao](https://github.com/anlyyao)
- Toast: 修复最大宽度和文案没对齐的问题 [#301](https://github.com/Tencent/tdesign-miniprogram/pull/301) [@zhenzhencai](https://github.com/zhenzhencai)
- Input: 修复设置 `clearable` ，点击不清除内容的问题 [#303](https://github.com/Tencent/tdesign-miniprogram/pull/303) [@LeeJim](https://github.com/LeeJim)
- Dialog: 修复 1px 边框在 iOS 上消失的问题 [#304](https://github.com/Tencent/tdesign-miniprogram/pull/304) [@jin0209](https://github.com/jin0209)
- Swiper: 修复延迟设置地址时，显示不正常的问题 [#305](https://github.com/Tencent/tdesign-miniprogram/pull/305) [@esky](https://github.com/esky)
- Button: 修复文案没有垂直居中的问题 [#311](https://github.com/Tencent/tdesign-miniprogram/pull/311) [@anlyyao](https://github.com/anlyyao)

### Features

- 新增组件：
  - Fab 悬浮按钮 [#310](https://github.com/Tencent/tdesign-miniprogram/pull/310) [@LeeJim](https://github.com/LeeJim)
  - Drawer 抽屉 [#308](https://github.com/Tencent/tdesign-miniprogram/pull/308) [@anlyyao](https://github.com/anlyyao)

## 0.7.1 `2022-3-25`
### Bug Fixes

- Loading: 修复 `loading` 默认值为 `true` 但不显示的问题 [#272](https://github.com/Tencent/tdesign-miniprogram/pull/272) [@JJunYang](https://github.com/JJunYang)
- Stepper: 修复图标偏移的问题 [#280](https://github.com/Tencent/tdesign-miniprogram/pull/280) [@Winfans](https://github.com/Winfans)
- Search: 修复 `action-click` 事件不生效的问题 [#283](https://github.com/Tencent/tdesign-miniprogram/pull/283) [@LeeJim](https://github.com/LeeJim)
- Textarea: 修复 `Form` 无法获取值的问题 [#284](https://github.com/Tencent/tdesign-miniprogram/pull/284) [@anlyyao](https://github.com/anlyyao)

### Feature

- 增加点击态：[#279](https://github.com/Tencent/tdesign-miniprogram/pull/279) [@Perisiguiendo](https://github.com/Perisiguiendo)
  - Grid
  - Tabbar
- Upload: 使用 `t-image` 封装，并支持 `image-props` 用于属性透传 [#289](https://github.com/Tencent/tdesign-miniprogram/pull/289) [@xihangzhou](https://github.com/xihangzhou)

## 0.7.0 `2022-3-18`

### BREAKING CHANGES

- Image:
  - 属性 `load-failed` 变更为 `error` [#265](https://github.com/Tencent/tdesign-miniprogram/pull/265) [@xihangzhou](https://github.com/xihangzhou)
  - 属性 `lazy-load` 变更为 `lazy` [#269](https://github.com/Tencent/tdesign-miniprogram/pull/269) [@LeeJim](https://github.com/LeeJim)

### Bug Fixes

- Button: 样式调整 [#262](https://github.com/Tencent/tdesign-miniprogram/pull/262) [@anlyyao](https://github.com/anlyyao)
- Tag: 修复样式文件冗余的问题 [#267](https://github.com/Tencent/tdesign-miniprogram/pull/267) [@LeeJim](https://github.com/LeeJim)
- Steps: 修复样式文件冗余的问题 [#268](https://github.com/Tencent/tdesign-miniprogram/pull/268) [@LeeJim](https://github.com/LeeJim)

### Feature

- Image: 新增 `shape` 属性 [#265](https://github.com/Tencent/tdesign-miniprogram/pull/265) [@xihangzhou](https://github.com/xihangzhou)

## 0.6.2 `2022-3-14`

### Bug Fixes

- Button: 
  - 兼容不支持 `wx://form-field-button` 的版本 [#249](https://github.com/Tencent/tdesign-miniprogram/pull/249) [@anlyyao](https://github.com/anlyyao)
  - 修正 type 属性的正确实现 [#250](https://github.com/Tencent/tdesign-miniprogram/pull/250) [@anlyyao](https://github.com/anlyyao)
- 修复在 `form` 下无法获取值的问题:
  - Input [#256](https://github.com/Tencent/tdesign-miniprogram/pull/256) [@anlyyao](https://github.com/anlyyao)
  - Checkbox、Radio、Switch [#257](https://github.com/Tencent/tdesign-miniprogram/pull/257) [@anlyyao](https://github.com/anlyyao)
- Upload: 修复关闭按钮层级过低的问题 [#246](https://github.com/Tencent/tdesign-miniprogram/pull/246) [@Winfans ](https://github.com/Winfans )
- Toast: 修复层级过低的问题 [f4f6b5b](https://github.com/Tencent/tdesign-miniprogram/commit/f4f6b5be9c0f770c54c9c3ac976dce3f57ca2591) [@LeeJim](https://github.com/LeeJim)
- Rate: 修复 iOS 下颜色失效的问题 [#244](https://github.com/Tencent/tdesign-miniprogram/pull/244) [@zhenzhencai ](https://github.com/zhenzhencai )
### Feature

- Button: 新增 `customDataset` 属性，可通过 `event.currentTarget.dataset.custom` 获取 [#259](https://github.com/Tencent/tdesign-miniprogram/pull/259) [@anlyyao](https://github.com/anlyyao)
- Upload: 支持对图片和视频的同时上传 [#245](https://github.com/Tencent/tdesign-miniprogram/pull/245) [@xihangzhou](https://github.com/xihangzhou)

## 0.6.1 `2022-3-10`

### Bug Fixes
- Dialog: 
  - 修复调用时没重复默认值问题 [#235](https://github.com/Tencent/tdesign-miniprogram/pull/235) [@scshsy](https://github.com/scshsy)
  - 修复内部 `Button` 样式错误 [#236](https://github.com/Tencent/tdesign-miniprogram/pull/236) [@anlyyao](https://github.com/anlyyao)
- Upload: 修复在 iOS 上无法选择的问题 [#239](https://github.com/Tencent/tdesign-miniprogram/pull/239) [@LeeJim](https://github.com/LeeJim)
- Button: 属性 shape 的默认值改为 rectangle [#240](https://github.com/Tencent/tdesign-miniprogram/pull/240) [@anlyyao](https://github.com/anlyyao)
- Rate: 修复 `value = 0` 时无法点击的问题 [#242](https://github.com/Tencent/tdesign-miniprogram/pull/242) [@zhenzhencai](https://github.com/zhenzhencai)
- Grid: 修复样式问题 [#243](https://github.com/Tencent/tdesign-miniprogram/pull/243) [@xihangzhou](https://github.com/xihangzhou)

## 0.6.0 `2022-3-8`

### BREAKING CHANGES

- Button: [#212](https://github.com/Tencent/tdesign-miniprogram/pull/212) [@anlyyao](https://github.com/anlyyao)
  - 重构 `shape` 的实现，新增支持 `rectangle`、`circle` 类型
  - 修复 `shape = round` 样式不对的问题
  - 支持纯图标按钮
### Bug Fixes

- Stepper: 修复 `Stepper` 组件事件向上冒泡 [#216](https://github.com/Tencent/tdesign-miniprogram/pull/216) [@zhenzhencai](https://github.com/zhenzhencai)
- Checkbox: 修复 `prefix` 问题 [#218](https://github.com/Tencent/tdesign-miniprogram/pull/218) [@amberlwan](https://github.com/amberlwan)
- Popup: 支持默认 `slot` [#219](https://github.com/Tencent/tdesign-miniprogram/pull/219) [@Perisiguiendo](https://github.com/Perisiguiendo)
- Image: 记录 `Image` 组件传入的 src, 防止 src 相同时重复刷新 [#221](https://github.com/Tencent/tdesign-miniprogram/pull/221) [@xihangzhou](https://github.com/xihangzhou)
- Tag: 增加外部样式类 [#223](https://github.com/Tencent/tdesign-miniprogram/pull/223) [@xihangzhou](https://github.com/xihangzhou)
- Button: 修改对 `Button` 组件的使用 demo [#229](https://github.com/Tencent/tdesign-miniprogram/pull/229) [@anlyyao](https://github.com/anlyyao)
- Toast: 
  - 修改未传入的参数为默认值 [#230](https://github.com/Tencent/tdesign-miniprogram/pull/230) [@scshsy](https://github.com/scshsy)
  -  修复 `z-index` 低于 `Popup` 问题 [#233](https://github.com/Tencent/tdesign-miniprogram/pull/233) [@LeeJim](https://github.com/LeeJim)

## 0.5.4 `2022-3-4`
### Bug Fixes
- Slider: 视觉调整 & demo无法滑动问题修复 [#200](https://github.com/Tencent/tdesign-miniprogram/pull/200) [@anlyyao](https://github.com/anlyyao)
- Search: 修复圆角样式不生效问题 [#208](https://github.com/Tencent/tdesign-miniprogram/pull/208) [@JJunYang](https://github.com/JJunYang)
- Tab-bar: 修复 `value` 不生效问题 [#211](https://github.com/Tencent/tdesign-miniprogram/pull/211) [@LeeJim](https://github.com/LeeJim)
### Feature
- Picker: 支持渐进式滚动 [#203](https://github.com/Tencent/tdesign-miniprogram/pull/203) [@wutianSweet](https://github.com/wutianSweet)
- Tabs: 添加滚动条外部样式类 [#213](https://github.com/Tencent/tdesign-miniprogram/pull/213) [@JJunYang](https://github.com/JJunYang)
  
## 0.5.3 `2022-2-24`
### Bug Fixes
- Input: 修复 `label` 不生效的问题 [#190](https://github.com/Tencent/tdesign-miniprogram/pull/190) [@zhenzhencai](https://github.com/zhenzhencai)
- Slider: 修复 `value` 不受控的问题 [#193](https://github.com/Tencent/tdesign-miniprogram/pull/193) [@LeeJim](https://github.com/LeeJim)
- Search: [#195](https://github.com/Tencent/tdesign-miniprogram/pull/195) [@LeeJim](https://github.com/LeeJim)
  - 移除受控用法
  - 支持双向绑定
  - 修复 `placeholder` 展示错误的问题
## 0.5.2 `2022-2-15`

### Bug Fixes
- Stepper: 修复标签过长时的遮挡问题 [#175](https://github.com/Tencent/tdesign-miniprogram/pull/175) [@GAOGAO1994](https://github.com/GAOGAO1994)
- Upload: 修复 `success` 事件，返回当前选择的所有文件 [#181](https://github.com/Tencent/tdesign-miniprogram/pull/181) [@LeeJim](https://github.com/LeeJim)
- Checkbox: 修复选择异常的问题 [#181](https://github.com/Tencent/tdesign-miniprogram/pull/181) [@LeeJim](https://github.com/LeeJim)
### Feature
- Upload: 新增 `add` 事件，返回当前选择的文件 [#181](https://github.com/Tencent/tdesign-miniprogram/pull/181) [@LeeJim](https://github.com/LeeJim)

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
- Textarea: 属性 `name` 变更为 `label` [#157](https://github.com/Tencent/tdesign-miniprogram/pull/157) [@LeeJim](https://github.com/LeeJim)
- Input: 属性 `name` 变更为 `label` [#153](https://github.com/Tencent/tdesign-miniprogram/pull/153) [@LeeJim](https://github.com/LeeJim)
- Search: [#152](https://github.com/Tencent/tdesign-miniprogram/pull/152) [@LeeJim](https://github.com/LeeJim)
  - 属性 `actionText` 变更为 `action`
  - 属性 `keyword` 变更为 `value`

### Bug Fixes

- 修复基础样式丢失的问题：
  - Loading [#140](https://github.com/Tencent/tdesign-miniprogram/pull/140) [@JJunYang](https://github.com/JJunYang)
  - Badge [#131](https://github.com/Tencent/tdesign-miniprogram/pull/131) [@Perisiguiendo](https://github.com/Perisiguiendo)
  - Avatar [#116](https://github.com/Tencent/tdesign-miniprogram/pull/116) [@Perisiguiendo](https://github.com/Perisiguiendo)
- Button: 修复 `disabled` 失效的问题 [#134](https://github.com/Tencent/tdesign-miniprogram/pull/134) [@LeeJim](https://github.com/LeeJim)
- Search: 修复事件参数错误的问题 [#132](https://github.com/Tencent/tdesign-miniprogram/pull/132) [@Perisiguiendo](https://github.com/Perisiguiendo)
- Dialog: 修复 `Dialog.action` 显示错误的问题 [#124](https://github.com/Tencent/tdesign-miniprogram/pull/124) [@LeeJim](https://github.com/LeeJim)

### Feature

- Input: 支持双向绑定 [#133](https://github.com/Tencent/tdesign-miniprogram/pull/133) [@LeeJim](https://github.com/LeeJim)
- Tabbar:  新增 `split` 属性控制是否展示分割线 [#126](https://github.com/Tencent/tdesign-miniprogram/pull/126) [@LeeJim](https://github.com/LeeJim)
- Icon: 支持自定义 `prefix` [#117](https://github.com/Tencent/tdesign-miniprogram/pull/117) [@vhxubo](https://github.com/vhxubo)
## 0.4.2 `2022-1-10`

### Bug Fixes

- Popup: 修复事件参数错误的问题 [#91](https://github.com/Tencent/tdesign-miniprogram/pull/91) [@LeeJim](https://github.com/LeeJim)
- Checkbox: 完善缺失的插槽(`label`、`content`) [#95](https://github.com/Tencent/tdesign-miniprogram/pull/95) [@LeeJim](https://github.com/LeeJim)
- Dialog: 修复按钮宽度计算错误的问题 [#100](https://github.com/Tencent/tdesign-miniprogram/pull/100) [@LeeJim](https://github.com/LeeJim)
- Button: 修复在 `{ style: "v2" }` 的情况下，按钮宽度异常的问题 [#79](https://github.com/Tencent/tdesign-miniprogram/pull/79) [@vhxubo](https://github.com/vhxubo)

## 0.4.1 `2022-1-6`
### Bug Fixes

- Tabs: 修复滑动切换时，不会触发 `change` 事件的问题 [#65](https://github.com/Tencent/tdesign-miniprogram/pull/65)  [@BeanCookie](https://github.com/BeanCookie)
- Message: 未正确引入组件时，抛出的错误信息 [#73](https://github.com/Tencent/tdesign-miniprogram/pull/73) [@LeeJim](https://github.com/LeeJim) 
- Dialog: 修复样式异常的问题 [#83](https://github.com/Tencent/tdesign-miniprogram/pull/83) [@LeeJim](https://github.com/LeeJim)

### Feature

- Button: 支持 `content` 属性，代表按钮内容 [#83](https://github.com/Tencent/tdesign-miniprogram/pull/83) [@LeeJim](https://github.com/LeeJim)
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

### Bug Fixes

- 修复开发者工具进行 NPM 构建时报错的问题 [@LeeJim](https://github.com/LeeJim)

### Feature

- Steps: 支持通过 `slot` 的方式传入 `icon` [#22](https://github.com/Tencent/tdesign-miniprogram/pull/22) [@LeeJim](https://github.com/LeeJim)

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

- Icon: 修复没有垂直居中的问题 [[97e1b7f]](https://github.com/Tencent/tdesign-miniprogram/commit/97e1b7f86cb406e49fc73f154a90a1107ddb17e3) [@LeeJim](https://github.com/LeeJim)
- Rate: 修复展示错乱的问题 [[8c5fe61]](https://github.com/Tencent/tdesign-miniprogram/commit/8c5fe61d4fe00ffe86996743414a738d6e8b2407) [@LeeJim](https://github.com/LeeJim)
- Tabs: 修复初始化时触发 `change` 的问题 [[1411217]](https://github.com/Tencent/tdesign-miniprogram/commit/141121785f6d7ca2458425aa5fcf10d2419ec248) [@JJunYang](https://github.com/JJunYang)

### Feature

- Tag: 支持不同尺寸的 `icon` [[574cc3c]](https://github.com/Tencent/tdesign-miniprogram/commit/6eee831f4308d205cc2e7187886909922) [@LeeJim](https://github.com/LeeJim)

## 0.1.0-alpha.1 `2021-12-8`

### Bug Fixes

- Swiper: 修复无法切换的问题
- Picker: 修复默认按钮没显示的问题

## 0.1.0 (2021-11-25)

### BREAKING CHANGES

- Badege: 属性 `visible` 更名为 `showZero`
- Steps: 属性 `direction` 更名为 `layout`

### Bug Fixes

- DateTimePicker: 修复初始值为空时，取消筛选的问题
