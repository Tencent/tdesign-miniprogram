---
title: 更新日志
spline: explain
toc: false
docClass: timeline
---


## 🌈 1.8.6 `2025-02-21` 
### 🚀 Features
- `Textarea`: 新增 `placeholderClass` 属性 @anlyyao ([#3468](https://github.com/Tencent/tdesign-miniprogram/pull/3468))
- `Textarea`: 新增 `readonly` 与 `allowInputOverMax` 属性 @richardji202 ([#3474](https://github.com/Tencent/tdesign-miniprogram/pull/3474))
- `Input`: 新增 `allowInputOverMax` 属性 @yangbai1991 ([#3473](https://github.com/Tencent/tdesign-miniprogram/pull/3473))
- `Radiogroup`: 新增 `readonly` 属性 @yangbai1991 ([#3470](https://github.com/Tencent/tdesign-miniprogram/pull/3470))
### 🐞 Bug Fixes

- `Dialog`: 修复圆角样式错误，并新增 `--td-dialog-border-radius` @anlyyao ([#3469](https://github.com/Tencent/tdesign-miniprogram/pull/3469))
- `Calendar`: 修复 `confirm-btn` 透传缺失部分参数的问题 @betavs ([#3464](https://github.com/Tencent/tdesign-miniprogram/pull/3464))
- `Cell`: 修复部分样式错误，并更新 `align` 属性描述 @anlyyao ([#3466](https://github.com/Tencent/tdesign-miniprogram/pull/3466))
- `Input`: 移除 `--td-input-border-radius`  @betavs ([#3463](https://github.com/Tencent/tdesign-miniprogram/pull/3463))
### 🚧 Others
- `WXS`: 所有 `wxs` 文件模块命名 `this` 改为 `_this` @jarmywang  ([#3488](https://github.com/Tencent/tdesign-miniprogram/pull/3488))


## 🌈 1.8.5 `2025-01-16` 
### 🚀 Features
- `TreeSelect`: 新增 `customValue` 属性，自定义选中值，用于弥补 `value` 为空数组场景 @anlyyao ([#3400](https://github.com/Tencent/tdesign-miniprogram/pull/3400))
- `Loading`: 新增 `fullscreen` 属性，支持全屏加载  @TeacherDingTing ([#3427](https://github.com/Tencent/tdesign-miniprogram/pull/3427))
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
- `Picker`: 修复 `PickerItem` 项 `label` 超出未省略问题 @anlyyao ([#3415](https://github.com/Tencent/tdesign-miniprogram/pull/3415))
- `Picker`: 规避 Skyline render 下深/浅模式透明色渲染不一致问题 @betavs ([#3449](https://github.com/Tencent/tdesign-miniprogram/pull/3449))
- `Stepper`: 修复 `Skyline` 中增加和减少按钮动态更新时禁用态样式错误 @anlyyao ([#3454](https://github.com/Tencent/tdesign-miniprogram/pull/3454))
- `ActionSheet`: 数据更新后未更新视图的问题 @betavs ([#3438](https://github.com/Tencent/tdesign-miniprogram/pull/3438))
- `Calendar`: 修复 `value` 不在 `[minDate, maxDate ]` 内时带翻页功能的日历面板空白问题 @anlyyao ([#3457](https://github.com/Tencent/tdesign-miniprogram/pull/3457))
- `Input`: `cursorColor` 属性默认值设 `#0052d9`，修复安卓在 Skyline 下光标消失的问题 @anlyyao ([#3453](https://github.com/Tencent/tdesign-miniprogram/pull/3453))
- `ColorPicker`: 修复动态设置 `value` 值无效的问题 @anlyyao ([#3426](https://github.com/Tencent/tdesign-miniprogram/pull/3426))
### 🚧 Others
- `Mpx`: 修复在 `Mpx` 框架中编译报错问题 @anlyyao ([#3416](https://github.com/Tencent/tdesign-miniprogram/pull/3416))


## 🌈 1.8.4 `2024-12-25` 
### 🚀 Features
- `Calendar`: 新增 `panel-change`  事件，切换月或年时触发（`switch-mode` 不为 `none` 时有效） @anlyyao ([#3385](https://github.com/Tencent/tdesign-miniprogram/pull/3385))
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
- `DropdownMenuItem`: 新增 `placement` 属性，用于调整复选框和内容相对位置，仅单选菜单栏有效 @anlyyao ([#3327](https://github.com/Tencent/tdesign-miniprogram/pull/3327))
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
- `Progress`: 新增环形进度条相关的  `css vars` @betavs ([#3301](https://github.com/Tencent/tdesign-miniprogram/pull/3301))
- `Input`: 新增 `--td-input-align-items` 变量，支持自定义组件内容对齐方式 @anlyyao ([#3308](https://github.com/Tencent/tdesign-miniprogram/pull/3308))
- `ColorPicker`: 新增 `header` 和 `footer` 插槽，仅在 `usePopup` 为 `true` 时有效 @anlyyao ([#3310](https://github.com/Tencent/tdesign-miniprogram/pull/3310))
### 🐞 Bug Fixes
- `DropdownMenuItem`: 修复默认插槽无效，并补充 `footer` 具名插槽 @anlyyao ([#3309](https://github.com/Tencent/tdesign-miniprogram/pull/3309))
- `Navbar`: 修复 `getRect` 耗时过长导致 `navbar` 位置不准确问题，并兼容部分机型因精度问题导致的翻译功能完成后标题仍然隐藏的问题 @jarmywang @anlyyao @betavs  ([#3286](https://github.com/Tencent/tdesign-miniprogram/pull/3286))


## 🌈 1.8.0 `2024-11-13` 
### 🚀 Features
- `Icon`: 新增 907 个新图标⚡ 另外: `blockchain` 重命名为 `transform-1` , `gesture-pray-1` 重命名为 `gesture-open` , `gesture-ranslation-1` 重命名为 `wave-bye` , `gesture-up-1` 重命名为 `gesture-typing` , `gesture-up-2` 重命名为 `gesture-right-slip` , `logo-wechat` 重命名为 `logo-wechat-stroke-filled` ; 移除`tree-list`、`logo-adobe-photoshop-1` 图标 @anlyyao ([#3279](https://github.com/Tencent/tdesign-miniprogram/pull/3279))
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
- `DropdownMenuItem`: 优化组件样式，当 `option` 为空时选项区域不占位 @anlyyao ([#3235](https://github.com/Tencent/tdesign-miniprogram/pull/3235))
- `Input`: 支持 `readonly` 属性 @anlyyao ([#3255](https://github.com/Tencent/tdesign-miniprogram/pull/3255))
- `ColorPicker`: 新增 `usePopup`、`visible`、`autoClose`、`style` 与 `customStyle` 等属性，新增 `close` 事件 @anlyyao ([#3260](https://github.com/Tencent/tdesign-miniprogram/pull/3260))
- `DateTimePicker`: 新增 `autoClose` 属性 @anlyyao ([#3263](https://github.com/Tencent/tdesign-miniprogram/pull/3263))
### 🐞 Bug Fixes
- `Icon`: 修复动态计算图片高度异常 @betavs ([#3228](https://github.com/Tencent/tdesign-miniprogram/pull/3228))
- `ActionSheet`: 为 `cancelText` 补充默认值 @anlyyao ([#3231](https://github.com/Tencent/tdesign-miniprogram/pull/3231))
- `Stepper`: 增加输入校验，修复使用第三方键盘时带来的格式问题，并修复禁用输入框样式 @anlyyao ([#3230](https://github.com/Tencent/tdesign-miniprogram/pull/3230))
- `Search`: 修复外部样式类 `t-class-clear` 及 `t-class-left` 无法修改图标大小的问题，并丰富 `css vars` @anlyyao ([#3238](https://github.com/Tencent/tdesign-miniprogram/pull/3238)) ([#3264](https://github.com/Tencent/tdesign-miniprogram/pull/3264))
- `Cascader`: 修复动态设置 `value` 而选项内容未更新问题 @jarmywang ([#3242](https://github.com/Tencent/tdesign-miniprogram/pull/3242))
- `PullDownRefresh`: 修复在 `iOS` 部分低系统中（如15.4、14.2、14.1等 ），提示语隐藏不完整的问题 @anlyyao ([#3239](https://github.com/Tencent/tdesign-miniprogram/pull/3239))
- `DateTimePicker`: 支持通过 `popupProps` 透传 `usingCustomNavbar` 属性，避免遮罩层挡住自定义导航栏 @anlyyao ([#3254](https://github.com/Tencent/tdesign-miniprogram/pull/3254))
- `Button`: 修复 `danger` + `disable` 时，文本颜色错误 @anlyyao ([#3261](https://github.com/Tencent/tdesign-miniprogram/pull/3261))
- `Rate`: 修复 `gap` 单位处理异常 @jarmywang ([#3259](https://github.com/Tencent/tdesign-miniprogram/pull/3259))


## 🌈 1.7.0 `2024-10-25` 
### 🚀 Features
- `ColorPicker`: 新增 `ColorPicker` 组件 @novlan1 ([#3176](https://github.com/Tencent/tdesign-miniprogram/pull/3176))⚡
- `Fab`:  新增默认插槽 @anlyyao ([#3204](https://github.com/Tencent/tdesign-miniprogram/pull/3204))
- `Input`: 新增 `cursorColor` 属性 @anlyyao ([#3211](https://github.com/Tencent/tdesign-miniprogram/pull/3211))
- `Input`: 支持 `format` 属性 @anlyyao ([#3213](https://github.com/Tencent/tdesign-miniprogram/pull/3213))
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
- `Weixin`: 更新部分不在维护的`wx`接口，并兼容低版本 @anlyyao ([#3192](https://github.com/Tencent/tdesign-miniprogram/pull/3192))


## 🌈 1.6.2 `2024-10-12` 
### 🚀 Features
- `Checkbox`: 新增keys可配置options的value和label的别名 @huxinhai ([#3154](https://github.com/Tencent/tdesign-miniprogram/pull/3154))
### 🐞 Bug Fixes
- `Button`: 修复文字按钮样式错误 @anlyyao ([#3163](https://github.com/Tencent/tdesign-miniprogram/pull/3163))
- `Checkbox`: 修复 `change` 事件中参数缺失的问题 @betavs ([#3157](https://github.com/Tencent/tdesign-miniprogram/pull/3157))
- `Dialog`: 修复更新按钮属性 `openType` 未重置问题 @jarmywang ([#3178](https://github.com/Tencent/tdesign-miniprogram/pull/3178))
- `Tabs`: 修复开启 `animation` 时导致的面板滚动位置不准确问题 @anlyyao ([#3188](https://github.com/Tencent/tdesign-miniprogram/pull/3188))
- `Tabs`: 修复在 `skyline` 中无法滚动的问题 @anlyyao ([#3187](https://github.com/Tencent/tdesign-miniprogram/pull/3187))
- `Collapse`: 修复禁用+面板展开场景下面板展开态不正确，并处理多个样式问题 @anlyyao ([#3186](https://github.com/Tencent/tdesign-miniprogram/pull/3186))
- `Cell`: 修复 `arrow` 动态变更无效的问题 @anlyyao ([#3184](https://github.com/Tencent/tdesign-miniprogram/pull/3184))
- `Switch`: 修复深色模式下文本颜色错误 @anlyyao ([#3183](https://github.com/Tencent/tdesign-miniprogram/pull/3183))
- `PullDownRefresh`: 修复禁用下拉刷新导致的滑动事件无效 @anlyyao ([#3182](https://github.com/Tencent/tdesign-miniprogram/pull/3182))


## 🌈 1.6.1 `2024-09-14` 
### 🚀 Features
- `Fab`: 新增 `yEdge` 属性，支持设置垂直方向边界限制 @anlyyao ([#3125](https://github.com/Tencent/tdesign-miniprogram/pull/3125))
- `PickerItem`: 支持插槽，自定义 `label` 后缀内容 @anlyyao ([#3127](https://github.com/Tencent/tdesign-miniprogram/pull/3127))
- `AvatarGroup`: 新增 `shape` 属性，新增 `collapsed-item-click` 事件 @anlyyao ([#3134](https://github.com/Tencent/tdesign-miniprogram/pull/3134))
- `radioGroup`: 新增 `allowUncheck` 属性 @anlyyao ([#3140](https://github.com/Tencent/tdesign-miniprogram/pull/3140))
### 🐞 Bug Fixes
- `Slider`: `dragend` 事件增加返回 `value` @jarmywang ([#3112](https://github.com/Tencent/tdesign-miniprogram/pull/3112))
- `ImageViewer`: 修复 `images` 长度更新导致 `index` 显示异常 @jarmywang ([#3111](https://github.com/Tencent/tdesign-miniprogram/pull/3111))
- `ImageViewer`: 修复滚动穿透问题 @dadtakesmefly ([#3146](https://github.com/Tencent/tdesign-miniprogram/pull/3146))
- `Tabs`: 使用 `hidden` 隐藏后显示仍能够正常显示指示器；移除文档中未实现的 `destroyOnHide` 属性 @jarmywang ([#3132](https://github.com/Tencent/tdesign-miniprogram/pull/3132))
- `AvatarGroup`: 修复 `size` 属性无效的问题，优化 `zIndex` 处理 @anlyyao ([#3134](https://github.com/Tencent/tdesign-miniprogram/pull/3134))
- `Image`: 修复图片在 `loading` 态时，加载错位 @huxinhai ([#3128](https://github.com/Tencent/tdesign-miniprogram/pull/3128))
- `Progress`: 修复环形进度条首次加载时，`strokeWidth` 线宽延迟显示的问题 @huxinhai ([#3139](https://github.com/Tencent/tdesign-miniprogram/pull/3139))
- `Radio`: 修复 `allowUncheck` 属性无效 @anlyyao ([#3140](https://github.com/Tencent/tdesign-miniprogram/pull/3140))
- `Badge`:  修复 `skyline` 下角标样式异常，`ribbon` 类型徽标改用伪元素实现 @anlyyao ([#3144](https://github.com/Tencent/tdesign-miniprogram/pull/3144))
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
- `Tabs`: 修复 `card` 主题下`label` 显示不全 @anlyyao ([#3059](https://github.com/Tencent/tdesign-miniprogram/pull/3059))
- `Tabs`: 修复 `TabPanel`面板内容快速滚动时，点击tab切换出现偶发性页面空白 @hkaikai ([#3055](https://github.com/Tencent/tdesign-miniprogram/pull/3055))
- `PullDownRefresh`: 修复 `skyline` 下提示语占位高度计算错误 @richardji202 ([#3014](https://github.com/Tencent/tdesign-miniprogram/pull/3014))


## 🌈 1.5.0 `2024-07-26` 
### 🚀 Features
- `Guide`: 新增`Guide`组件 @hkaikai ([#2998](https://github.com/Tencent/tdesign-miniprogram/pull/2998)) ⚡
- `Icon`: 新增 `list-numbered`、`lock-off-filled`、`lock-on-filled` 等 3 个图标 @anlyyao ([#2962](https://github.com/Tencent/tdesign-miniprogram/pull/2962))
- `Calendar`:  新增 `scroll` 事件 @jarmywang ([#2974](https://github.com/Tencent/tdesign-miniprogram/pull/2974))
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
- `官网`: 项目案例更新 @anlyyao ([#2964](https://github.com/Tencent/tdesign-miniprogram/pull/2964))
- `TabBarItem`: `wx:key` 从 `index` 更换为`value`属性值作为标识符 @jarmywang ([#3002](https://github.com/Tencent/tdesign-miniprogram/pull/3002))
- `Search`: `skyline` 适配 @byq1213 ([#2971](https://github.com/Tencent/tdesign-miniprogram/pull/2971))
- `Switch`:  `skyline` 适配 @byq1213 ([#2967](https://github.com/Tencent/tdesign-miniprogram/pull/2967))


## 🌈 1.4.5 `2024-07-05` 
### 🚀 Features
- `Progress`: `circle` 风格进度条支持自定义起始角度 @jarmywang ([#2903](https://github.com/Tencent/tdesign-miniprogram/pull/2903))
- `SwipeCell`: 新增 `dragstart` 和 `dragend` 事件 @Lyan-u ([#2904](https://github.com/Tencent/tdesign-miniprogram/pull/2904))
- `PullDownRefresh`: 新增 `disabled` 属性 @Lyan-u ([#2904](https://github.com/Tencent/tdesign-miniprogram/pull/2904))
- `Search`: 新增 `resultList` 属性，支持预览列表  @byq1213  @anlyyao ([#2520](https://github.com/Tencent/tdesign-miniprogram/pull/2520))
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
- `Calendar`:  优化 `title` 默认值 @anlyyao ([#2858](https://github.com/Tencent/tdesign-miniprogram/pull/2858))
- `Swiper`: 修复 `navigation` 插槽无效的问题 @jarmywang ([#2859](https://github.com/Tencent/tdesign-miniprogram/pull/2859))
- `TabBar`: 修复自定义 `tabbar` 中深色模式颜色错误 @anlyyao ([#2861](https://github.com/Tencent/tdesign-miniprogram/pull/2861))
- `CheckTag`:  更正组件内部 `checked`属性类型 @anlyyao ([#2871](https://github.com/Tencent/tdesign-miniprogram/pull/2871))
- `Navbar`: 修复占位区高度错误 @jby0107 ([#2877](https://github.com/Tencent/tdesign-miniprogram/pull/2877))
- `Radio`: 修复禁用态样式错误 @anlyyao ([#2875](https://github.com/Tencent/tdesign-miniprogram/pull/2875))
- `Dialog`:  `close-on-overlay-click`属性默认值从 `undefined` 改为 `false` @jarmywang ([#2874](https://github.com/Tencent/tdesign-miniprogram/pull/2874))
- `Cascader`: 优化组件性能，支持4级地址 @novlan1 ([#2866](https://github.com/Tencent/tdesign-miniprogram/pull/2866))
### 🚧 Others
- `site(Button)`: 支持示例代码导入开发者工具 @anlyyao ([#2883](https://github.com/Tencent/tdesign-miniprogram/pull/2883))


## 🌈 1.4.2 `2024-06-07`
### 🐞 Bug Fixes
- `Skeleton`: 修复深色模式渐变动画颜色错误 @anlyyao ([#2818](https://github.com/Tencent/tdesign-miniprogram/pull/2818))
- `Slider`: 修复禁用态样式错误 @anlyyao ([#2814](https://github.com/Tencent/tdesign-miniprogram/pull/2814))
- `TabBar`: 修复 `icon` 插槽不显示问题 @jarmywang ([#2821](https://github.com/Tencent/tdesign-miniprogram/pull/2821))
- `Tabs`: 修复当改变文本大小时下划线滑动位置错误 @anlyyao ([#2822](https://github.com/Tencent/tdesign-miniprogram/pull/2822))
- `ActionSheet`:  修复控制台告警 @anlyyao ([#2838](https://github.com/Tencent/tdesign-miniprogram/pull/2838))
- `Tabs`: 修复部分 `css` 变量无效 @betavs ([#2843](https://github.com/Tencent/tdesign-miniprogram/pull/2843))
### 🚧 Others
- `CountDown`: 示例添加 `TCloudNumber` 字体的 `Base64` 转码 @ArcticFoxPro ([#2836](https://github.com/Tencent/tdesign-miniprogram/pull/2836))
- `Message`: 修复官网 `Message` 组件示例页面白屏 @anlyyao ([#2841](https://github.com/Tencent/tdesign-miniprogram/pull/2841))


## 🌈 1.4.1 `2024-05-28` 
### 🚀 Features
- `Picker`: 新增 `use-popup` 属性 @anlyyao ([#2770](https://github.com/Tencent/tdesign-miniprogram/pull/2770))
- `DateTimePicker`: 新增 `use-popup` 属性 @anlyyao ([#2770](https://github.com/Tencent/tdesign-miniprogram/pull/2770))

### 🐞 Bug Fixes
- `Calendar`:  修复页面层无法修改组件样式的问题 @anlyyao ([#2767](https://github.com/Tencent/tdesign-miniprogram/pull/2767))
- `Layout`:  支持拆行 @anlyyao ([#2773](https://github.com/Tencent/tdesign-miniprogram/pull/2773))
- `Navbar`:  为适配右侧胶囊尺寸，恢复使用 `px` 单位 @anlyyao ([#2781](https://github.com/Tencent/tdesign-miniprogram/pull/2781))
- `Picker`: 修复子项文本尺寸自适应问题 @anlyyao ([#2782](https://github.com/Tencent/tdesign-miniprogram/pull/2782))
- `Tabs`: 修复在 Skyline 模式下组件不能正常使用的问题 @narukeu ([#2788](https://github.com/Tencent/tdesign-miniprogram/pull/2788))
- `Tabs`: 修复示例文案错误 @ArcticFoxPro ([#2801](https://github.com/Tencent/tdesign-miniprogram/pull/2801))
- `CellGroup`: 修复深色模式下外边框颜色错误 @anlyyao ([#2790](https://github.com/Tencent/tdesign-miniprogram/pull/2790))
- `Slider`: 优化垂直方向胶囊滑轨样式 @anlyyao ([#2796](https://github.com/Tencent/tdesign-miniprogram/pull/2796))、
- `Slider`: 示例增加边距，避免与手势返回冲突 @novlan1 ([#2807](https://github.com/Tencent/tdesign-miniprogram/pull/2807))
- `Progress`: 修复环状进度条深色模式颜色错误 @anlyyao ([#2794](https://github.com/Tencent/tdesign-miniprogram/pull/2794))
- `Icon`: 修复图片资源无法正常显示的问题 @betavs ([#2806](https://github.com/Tencent/tdesign-miniprogram/pull/2806))
- `CountDown`: 改用 `TCloudNumber` 字体 @anlyyao ([#2765](https://github.com/Tencent/tdesign-miniprogram/pull/2765))
- `Button`: 更新示例，对齐视觉 @anlyyao ([#2811](https://github.com/Tencent/tdesign-miniprogram/pull/2811))
 
### 🚧 Others
- fix(Site): 修复预览窗口内部切换时不更随颜色模式问题 @zuiaiwanqian ([#2768](https://github.com/Tencent/tdesign-miniprogram/pull/2768))



## 🌈 1.4.0 `2024-05-09`
### 🚀 Features
- `Tdesign`: Button、Fab等 33 个组件完成 Skyline 适配，并新增 Skyline Page 示例页 @jin0209 @anlyyao @jarmywang ([#2659](https://github.com/Tencent/tdesign-miniprogram/pull/2659))
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
- `Skeleton`:  修复 `loading` 属性默认值无效的问题 @anlyyao ([#2714](https://github.com/Tencent/tdesign-miniprogram/pull/2714))
- `Progress`: 修复 `circle` 主题背景色缺失的问题 @anlyyao ([#2722](https://github.com/Tencent/tdesign-miniprogram/pull/2722))
- `BackTop`: 修复 `round/half-round` 主题文本和背景 `design token` 错误 @anlyyao ([#2722](https://github.com/Tencent/tdesign-miniprogram/pull/2722))
- `CheckboxGroup`: `options` 对象中 `value` 不支持 `number` 类型 @betavs ([#2731](https://github.com/Tencent/tdesign-miniprogram/pull/2731))
### 🚧 Others
- chore: `styleIsolation` 配置项从 `options` 迁移到 `JSON` @anlyyao ([#2718](https://github.com/Tencent/tdesign-miniprogram/pull/2718))
- chore: 修正包名 @betavs ([#2734](https://github.com/Tencent/tdesign-miniprogram/pull/2734))


## 🌈 1.3.0 `2024-04-19`
### 🚀 Features
- `TDesign` 微信小程序组件库提供原生深色模式适配 @zuiaiwanqian ([#2636](https://github.com/Tencent/tdesign-miniprogram/pull/2636))
- `PullDownRefresh`: 新增 `header` 插槽 @betavs ([#2652](https://github.com/Tencent/tdesign-miniprogram/pull/2652))
- `PullDownRefresh`: 新增 `drag` 等事件 @betavs ([#2649](https://github.com/Tencent/tdesign-miniprogram/pull/2649))
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
- `Footer`: sync api @liweijie0812 ([#2683](https://github.com/Tencent/tdesign-miniprogram/pull/2683))
- `Tag`: sync api @liweijie0812 ([#2684](https://github.com/Tencent/tdesign-miniprogram/pull/2684))
- `Result`: sync api @liweijie0812 ([#2685](https://github.com/Tencent/tdesign-miniprogram/pull/2685))


## 🌈 1.2.9 `2024-03-07`
### 🚀 Features
- `Cascader`: 新增 `placeholder` 属性，支持自定义未选中时的提示文案 @anlyyao ([#2597](https://github.com/Tencent/tdesign-miniprogram/pull/2597))
### 🐞 Bug Fixes
- `DropdownMenu`: 修复菜单栏展开状态向上滚动时菜单栏和内容面板分离的问题 @maureenwanmy ([#2606](https://github.com/Tencent/tdesign-miniprogram/pull/2606))
- `Swiper`: 修复意外的高频左右抖动 @betavs ([#2603](https://github.com/Tencent/tdesign-miniprogram/pull/2603))
- `Layout`: 改用 `flex` 布局，修复 `col` 高度塌陷问题 @dexterBo ([#2616](https://github.com/Tencent/tdesign-miniprogram/pull/2616))
- `Slider`: 修复 `slider` 在多点触控时无法滑动的问题  @xieyushansun ([#2619](https://github.com/Tencent/tdesign-miniprogram/pull/2619))
- `Slider`: 修复滑块点击偏移和点击位置定位不准确的问题 @dexterBo ([#2627](https://github.com/Tencent/tdesign-miniprogram/pull/2627))
- `Fab`: 修复拖拽模式点击不触发 @jarmywang ([#2631](https://github.com/Tencent/tdesign-miniprogram/pull/2631))
- `Navbar`: `px` 转 `rpx` 换算错误 @betavs ([#2626](https://github.com/Tencent/tdesign-miniprogram/pull/2626))
### 🚧 Others
- `Tabbar`: 移除重复样式类 @Moonofweisheng ([#2630](https://github.com/Tencent/tdesign-miniprogram/pull/2630))
- `DropdownItem`: 采用 [BEM](http://getbem.com/) 命名规范优化类名 @betavs ([#2611](https://github.com/Tencent/tdesign-miniprogram/pull/2611))


## 🌈 1.2.8 `2024-02-06`
### 🚀 Features
- `Slider`: 新增 `vertical`属性 @zuiaiwanqian ([#2592](https://github.com/Tencent/tdesign-miniprogram/pull/2592))
- `Tag`:  `closable` 属性补充支持 `Object` 和 `Slot`类型 @anlyyao ([#2590](https://github.com/Tencent/tdesign-miniprogram/pull/2590))
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
- `Tabs`: `showBottomLine` 为 `false` 时，支持内容自动向中间滑动 @hkaikai ([#2550](https://github.com/Tencent/tdesign-miniprogram/pull/2550))
- `Fab`: 修复滚动事件穿透的问题 @anlyyao ([#2553](https://github.com/Tencent/tdesign-miniprogram/pull/2553))
- `Navbar`: 修复大屏适配问题 @anlyyao ([#2554](https://github.com/Tencent/tdesign-miniprogram/pull/2554))
- `Tabs`: 修复最后一项 `disabled` 时卡死问题 @byq1213 ([#2523](https://github.com/Tencent/tdesign-miniprogram/pull/2523))
- `Calendar`: 处理 `use-popup` 值为 `false` 时，动态设置 `value` 未重新渲染的问题 @delgithub ([#2552](https://github.com/Tencent/tdesign-miniprogram/pull/2552))
### 🚧 Others
- `Button`: 处理控制台警告的问题 @IronManman ([#2521](https://github.com/Tencent/tdesign-miniprogram/pull/2521))
- `ActionSheet`: 文档更新 @jin0209 ([#2541](https://github.com/Tencent/tdesign-miniprogram/pull/2541))


## 🌈 1.2.6 `2023-12-22`
### 🚀 Features
- `Upload`: 新增 `disabled` 属性，首页补充服务声明 @anlyyao ([#2489](https://github.com/Tencent/tdesign-miniprogram/pull/2489))
- `NoticeBar`: 新增 `change` 事件，仅在 `direction` 为 `vertical` 时有效 @betavs ([#2492](https://github.com/Tencent/tdesign-miniprogram/pull/2492))
- `Fab`: 悬浮按钮支持拖拽 @hkaikai ([#2478](https://github.com/Tencent/tdesign-miniprogram/pull/2478))
- `Checkbox`:  `change` 事件新增参数 `context`，返回当前点击项内容 @gjl-0810 ([#2469](https://github.com/Tencent/tdesign-miniprogram/pull/2469))
### 🐞 Bug Fixes
- `Calender`: 兼容 `glass-easel` 框架真机环境 `<include>` 节点上不支持 `wx:` 指令 @jarmywang ([#2491](https://github.com/Tencent/tdesign-miniprogram/pull/2491))
- `Step`: 修复 `status` 属性变更后子项未及时更新的问题 @betavs ([#2480](https://github.com/Tencent/tdesign-miniprogram/pull/2480))
- `NoticeBar`: 处理基础库为 `3.x.x` 时控制台报错的问题 @betavs ([#2470](https://github.com/Tencent/tdesign-miniprogram/pull/2470))
- `Input`: 修复 `type` 为 `digit`、`number`时，`maxlength` 和 `maxcharacter` 属性无效的问题 @zyqq ([#2497](https://github.com/Tencent/tdesign-miniprogram/pull/2497))
- `Grid`: 修复 `hover` 属性无效的问题 @betavs ([#2508](https://github.com/Tencent/tdesign-miniprogram/pull/2508))
- `Tabbar`: 修复徽标遮挡底部内容的问题 @yangbai1991 ([#2456](https://github.com/Tencent/tdesign-miniprogram/pull/2456))
### 🚧 Others
- `Icon`: 弃用 `wx.setClipboardData` 防止收集用户信息。 @anlyyao ([#2498](https://github.com/Tencent/tdesign-miniprogram/pull/2498))
- `Textarea`: 更新文档默认值 @betavs ([#2507](https://github.com/Tencent/tdesign-miniprogram/pull/2507))


## 🌈 1.2.5 `2023-12-08`
### 🚀 Features
- `Cell`: 新增外部样式类 `t-class-center` @anlyyao ([#2439](https://github.com/Tencent/tdesign-miniprogram/pull/2439))
- `Input`: 新增 `clearTrigger` 属性 @betavs ([#2372](https://github.com/Tencent/tdesign-miniprogram/pull/2372))
### 🐞 Bug Fixes
- `Calendar`: 修复 `use-popup` 为 `false` 时，组件未适应父容器宽度的问题 @yangbai1991 ([#2458](https://github.com/Tencent/tdesign-miniprogram/pull/2458))
- `Checkbox`:  修复 `checked` 属性无效的问题 @Nightmare1664 ([#2455](https://github.com/Tencent/tdesign-miniprogram/pull/2455))
- `Upload`: 处理关闭按钮溢出问题 @betavs ([#2449](https://github.com/Tencent/tdesign-miniprogram/pull/2449))
- `DateTimePicker`: 组件支持国际化。目前支持简体中文(zh)、 (tc)、 英文(en)、日语(ja)、 韩语(ko)、俄语(ru) 等六种语言 @eric-lua ([#2464](https://github.com/Tencent/tdesign-miniprogram/pull/2464))
### 🚧 Others
- `Textarea`:  修复文档 `confirm-type` 属性默认值描述错误 @betavs ([#2475](https://github.com/Tencent/tdesign-miniprogram/pull/2475))
- `BackTop`: 返回顶部按钮，增加 `iphone` 底部安全区 @leozeli ([#2457](https://github.com/Tencent/tdesign-miniprogram/pull/2457))

## 🌈 1.2.4 `2023-11-15`
### 🚀 Features
- `Rate`: 新增 `placement` 属性 @betavs ([#2359](https://github.com/Tencent/tdesign-miniprogram/pull/2359))
- `DropdownMenu`: 新增 `open` 和 `close` 事件 @betavs ([#2361](https://github.com/Tencent/tdesign-miniprogram/pull/2361))
- `Cell`: 新增css变量 `--td-cell-border-width` @betavs ([#2399](https://github.com/Tencent/tdesign-miniprogram/pull/2399))
- `BackTop`: 新增 `scrollTop` 和 `visibilityHeight` 属性 @betavs ([#2177](https://github.com/Tencent/tdesign-miniprogram/pull/2177))
### 🐞 Bug Fixes
- `Search`: 修复因 `input` 未设置最小高度导致异常的问题 @betavs ([#2340](https://github.com/Tencent/tdesign-miniprogram/pull/2340))
- `Picker`: 兼容 keys 为 null 的情况 @betavs ([#2358](https://github.com/Tencent/tdesign-miniprogram/pull/2358))
- `Image`:  优化组件内部函数重复执行的问题 @betavs ([#2362](https://github.com/Tencent/tdesign-miniprogram/pull/2362))
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
- `Button`: 新增 `t-id` 属性，相等于 `id` @HellyW ([#2320](https://github.com/Tencent/tdesign-miniprogram/pull/2320))
- `Button`: 属性 `open-type` 新增支持 `agreePrivacyAuthorization` @HellyW ([#2320](https://github.com/Tencent/tdesign-miniprogram/pull/2320))

### 🐞 Bug Fixes
- `Stepper`: 修复无法输出小数的问题 @LeeJim ([#2314](https://github.com/Tencent/tdesign-miniprogram/pull/2314))
- `Stepper`: 修复输入小数后增减的精度问题 @LeeJim ([#2314](https://github.com/Tencent/tdesign-miniprogram/pull/2314))
- `TreeSelect`: 解决异步 options 导致无法渲染的问题 @LeeJim ([#2315](https://github.com/Tencent/tdesign-miniprogram/pull/2315))
- `TreeSelect`: 解决异步数据导致的报错问题 @LeeJim ([#2315](https://github.com/Tencent/tdesign-miniprogram/pull/2315))
- `ActionSheet`: 移除未使用的组件 @betavs ([#2318](https://github.com/Tencent/tdesign-miniprogram/pull/2318))
- `SideBar`: 修复示例滚动问题 @betavs ([#2325](https://github.com/Tencent/tdesign-miniprogram/pull/2325))

## 🌈 1.2.1 `2023-08-22`
### 🚀 Features
- `Radio`: 新增 `readonly` 属性 @betavs ([#2292](https://github.com/Tencent/tdesign-miniprogram/pull/2292))
### 🐞 Bug Fixes
- `CellGroup`: 修复 `updateLastChid` 事件被多次触发的问题 @anlyyao ([#2302](https://github.com/Tencent/tdesign-miniprogram/pull/2302))
- `Popup`: 修复 `visibleChange` 事件参数错误的问题 @anlyyao ([#2303](https://github.com/Tencent/tdesign-miniprogram/pull/2303))
- `Rate`: 修复value = 0 且半选时图标错误的问题 @betavs ([#2307](https://github.com/Tencent/tdesign-miniprogram/pull/2307))
- `Radio`: 修复 tap 事件无法冒泡的问题 @LeeJim ([#2309](https://github.com/Tencent/tdesign-miniprogram/pull/2309))
- `Checkbox`: 修复 tap 事件无法冒泡的问题 @LeeJim ([#2309](https://github.com/Tencent/tdesign-miniprogram/pull/2309))


## 🌈 1.2.0 `2023-08-16`
### 🚀 Features
- `Search`: 支持透传更多 Input 的属性 @betavs ([#2229](https://github.com/Tencent/tdesign-miniprogram/pull/2229))
- `Icon`: 图标更新，新增 `960` 个图标 @anlyyao ([#2254](https://github.com/Tencent/tdesign-miniprogram/pull/2254))
- `Input`: 新增  `--td-input-label-max-width` 和 `--td-input-label-min-width` 两个样式变量 @anlyyao ([#2259](https://github.com/Tencent/tdesign-miniprogram/pull/2259))
- `Loading`: 新增 CSS Variable 用于调整加载提示文案颜色 @ElanYoung ([#2273](https://github.com/Tencent/tdesign-miniprogram/pull/2273))

### 🐞 Bug Fixes
- `Swiper`: 修复图片加载中/加载错误占位符未居中的问题 @anlyyao ([#2246](https://github.com/Tencent/tdesign-miniprogram/pull/2246))
- `TabBar`: 修复示例代码展示错误 @anlyyao ([#2257](https://github.com/Tencent/tdesign-miniprogram/pull/2257))
- `Input`: 修复 `t-class-label` 外部样式类无法修改 `label` 宽度 @anlyyao ([#2259](https://github.com/Tencent/tdesign-miniprogram/pull/2259))
- `GridItem`: 修复无效的css变量 @betavs ([#2253](https://github.com/Tencent/tdesign-miniprogram/pull/2253))
- `Radio`: 修复调整 placement 之后的渲染抖动的问题 @LeeJim ([#2271](https://github.com/Tencent/tdesign-miniprogram/pull/2271))
- `SwipeCell`: 阻止默认的垂直滚动，优化交互体验 @LeeJim ([#2281](https://github.com/Tencent/tdesign-miniprogram/pull/2281))
- `Collapse`: 修复默认展开全部时，无法正常收起的问题 @LeeJim ([#2280](https://github.com/Tencent/tdesign-miniprogram/pull/2280))
- `SwipeCell`: 使用 hidden 隐藏后显示仍能够正常使用 @LeeJim ([#2283](https://github.com/Tencent/tdesign-miniprogram/pull/2283))
- `Checkbox`: 修复 icon 无法使用插槽的问题 @LeeJim ([#2285](https://github.com/Tencent/tdesign-miniprogram/pull/2285))
- `Popup`: 修复滚动穿透的问题 @LeeJim ([#2290](https://github.com/Tencent/tdesign-miniprogram/pull/2290))

### 🚧 Others
- `Swiper`: 修复示例错误 @anlyyao ([#2246](https://github.com/Tencent/tdesign-miniprogram/pull/2246))
- `Swiper`: 补充外部样式类信息 @LeeJim ([#2256](https://github.com/Tencent/tdesign-miniprogram/pull/2256))
- `Icon`: 更新图标展示UI组件至 0.2.0 版本 @uyarn ([#2269](https://github.com/Tencent/tdesign-miniprogram/pull/2269))

## 🌈 1.1.15 `2023-08-01`
### 🚀 Features
- `DropdownMenu`: 支持自定义箭头图标 @LeeJim ([#2240](https://github.com/Tencent/tdesign-miniprogram/pull/2240))

### 🐞 Bug Fixes
- `ActionSheet`: 修复宫格模式下无法调整选项颜色的问题 @LeeJim ([#2231](https://github.com/Tencent/tdesign-miniprogram/pull/2231))
- `SwipeCell`: 修复 left、right 没有动态响应的问题 @LeeJim ([#2239](https://github.com/Tencent/tdesign-miniprogram/pull/2239))

### 🚧 Others
- `link`: 补充使用说明，修复文档中句号导致的链接跳转错误 @qianxuu ([#2227](https://github.com/Tencent/tdesign-miniprogram/pull/2227))


## 🌈 1.1.14 `2023-07-25`
### 🚀 Features
- `ActionSheet`: 新增 suffixIcon，仅在 `theme = list` 时展示 @LeeJim ([#2210](https://github.com/Tencent/tdesign-miniprogram/pull/2210))
- `TreeSelect`:  `label` 内容支持文本超长省略 @anlyyao ([#2208](https://github.com/Tencent/tdesign-miniprogram/pull/2208))
- `Overlay`: 支持 duration 属性，用于调整背景色过渡时间 @betavs ([#2179](https://github.com/Tencent/tdesign-miniprogram/pull/2179))
### 🐞 Bug Fixes
- `Popup`: 解决自动聚焦的问题 @LeeJim ([#2209](https://github.com/Tencent/tdesign-miniprogram/pull/2209))
- `Slider`: 修复无法滑动的问题 @LeeJim ([#2211](https://github.com/Tencent/tdesign-miniprogram/pull/2211))
- `Sticky`: 当组件销毁时，正常移除滚动函数 @LeeJim ([#2215](https://github.com/Tencent/tdesign-miniprogram/pull/2215))
### 🚧 Others
- 修复 utils.wxs 的语法错误 @LeeJim ([#2217](https://github.com/Tencent/tdesign-miniprogram/pull/2217))

## 🌈 1.1.13 `2023-07-18`
### 🚀 Features
- `ActionSheet`: 新增 show-overlay 属性 @betavs ([#2194](https://github.com/Tencent/tdesign-miniprogram/pull/2194))
### 🐞 Bug Fixes
- `Toast`: 修复close方法类型声明错误 @betavs ([#2191](https://github.com/Tencent/tdesign-miniprogram/pull/2191))
- `Message`: 修复 `__text-nowrap` 类名前缀错误的问题 @hwaphon ([#2195](https://github.com/Tencent/tdesign-miniprogram/pull/2195))
- `Slider`: 移除错误的 wxml @hwaphon ([#2195](https://github.com/Tencent/tdesign-miniprogram/pull/2195))
- `DateTimePicker`: 修复动态传入 mode 时无法正确渲染的问题 @betavs ([#2188](https://github.com/Tencent/tdesign-miniprogram/pull/2188))

### 🚧 Others
- `docs`: 在 API 模块展示所有的 CSS Variables @anlyyao ([#2182](https://github.com/Tencent/tdesign-miniprogram/pull/2182))
- `docs`: 将外部样式类的内容独立展示 @ccccpj ([#2200](https://github.com/Tencent/tdesign-miniprogram/pull/2200))
- 修复一些示例/文档中的拼写错误 @anlyyao ([#2197](https://github.com/Tencent/tdesign-miniprogram/pull/2197))


## 🌈 1.1.12 `2023-07-11`
### 🚀 Features
- `PullDownRefresh`: 增加 show-scrollbar 属性 @lolhezihehe ([#2163](https://github.com/Tencent/tdesign-miniprogram/pull/2163))
### 🐞 Bug Fixes
- `Rate`: 修复无法点击的问题 @AntzyMo ([#2158](https://github.com/Tencent/tdesign-miniprogram/pull/2158))
- `Rate`: 使事件冒泡至上层元素 @LeeJim ([#2168](https://github.com/Tencent/tdesign-miniprogram/pull/2168))
- `DateTimePicker`: 修复无法选择的问题 @betavs ([#2169](https://github.com/Tencent/tdesign-miniprogram/pull/2169))
- `Tabs`: 修复超出时滚动不流畅的问题 @LeeJim ([#2170](https://github.com/Tencent/tdesign-miniprogram/pull/2170))
- `TreeSelect`: 修复多选时 value 使用空数组报错的问题 @LeeJim ([#2173](https://github.com/Tencent/tdesign-miniprogram/pull/2173))
### 🚧 Others
- 移除开启 virtual-host 场景的 snapshot 测试 @LeeJim ([#2161](https://github.com/Tencent/tdesign-miniprogram/pull/2161))
- 修复控制台告警 @betavs ([#2164](https://github.com/Tencent/tdesign-miniprogram/pull/2164))

## 🌈 1.1.11 `2023-07-04`
### 🚀 Features
- `CheckboxGroup`: 新增 borderless 属性 @betavs ([#2124](https://github.com/Tencent/tdesign-miniprogram/pull/2124))
- `Radio`: 允许取消选中 @betavs ([#2141](https://github.com/Tencent/tdesign-miniprogram/pull/2141))
- `DropdownItem`: 新增 close 事件 @LeeJim ([#2147](https://github.com/Tencent/tdesign-miniprogram/pull/2147))
### 🐞 Bug Fixes
- `Tabs`: 解决选项过多时样式错误的问题 @betavs ([#2123](https://github.com/Tencent/tdesign-miniprogram/pull/2123))
- `Picker`: 修复默认值无效 @betavs ([#2126](https://github.com/Tencent/tdesign-miniprogram/pull/2126))
- `Stepper`: 修复精度缺失问题 @anlyyao ([#2130](https://github.com/Tencent/tdesign-miniprogram/pull/2130))
- `Radio`: 修复自定义图标大小之后的垂直对齐问题 @betavs ([#2135](https://github.com/Tencent/tdesign-miniprogram/pull/2135))
- `Checkbox`: 修复自定义图标尺寸后的垂直对齐问题 @LeeJim ([#2136](https://github.com/Tencent/tdesign-miniprogram/pull/2136))
- `CheckboxGroup`: 修复使用 options 时，disabled 不生效的问题 @LeeJim ([#2137](https://github.com/Tencent/tdesign-miniprogram/pull/2137))
- `Checkbox`: 修复 disabled 优先级的问题 @LeeJim ([#2137](https://github.com/Tencent/tdesign-miniprogram/pull/2137))
- `Search`: 截获点击 clear 触发的 tap 事件 @LeeJim ([#2139](https://github.com/Tencent/tdesign-miniprogram/pull/2139))
- `Divider`: 修复外部样式类的位置 @LeeJim ([#2140](https://github.com/Tencent/tdesign-miniprogram/pull/2140))
- `Toast`: 解决 close 事件重复触发 @LeeJim ([#2146](https://github.com/Tencent/tdesign-miniprogram/pull/2146))
- `Popup`: 修复底部弹出时的宽度问题 @LeeJim ([#2152](https://github.com/Tencent/tdesign-miniprogram/pull/2152))

### 🚧 Others

- 解决控制台报警的问题 @LeeJim ([#2149](https://github.com/Tencent/tdesign-miniprogram/pull/2149))

## 🌈 1.1.10 `2023-06-20`
### 🚀 Features
- `Tabs`: 新增 split 属性 @LeeJim ([#2113](https://github.com/Tencent/tdesign-miniprogram/pull/2113))
- `NoticeBar`: 新增 interval 属性 @betavs ([#2097](https://github.com/Tencent/tdesign-miniprogram/pull/2097))
### 🐞 Bug Fixes
- `Grid`: 修复 `align=left` 无效的问题 @anlyyao ([#2110](https://github.com/Tencent/tdesign-miniprogram/pull/2110))
- `Fab`: 修复 `buttonProps` 中的 `hoverClass`属性透传至 `button` 无效 @anlyyao ([#2093](https://github.com/Tencent/tdesign-miniprogram/pull/2093))
- `Upload`: 修复图片尺寸超出的问题 @betavs ([#2098](https://github.com/Tencent/tdesign-miniprogram/pull/2098))
- `Slider`: 修复使用 max 之后刻度展示错误的问题 @betavs ([#2114](https://github.com/Tencent/tdesign-miniprogram/pull/2114))
- `Input`: 修复 `type=number` 时，`value=0` 无效的问题 @anlyyao ([#2108](https://github.com/Tencent/tdesign-miniprogram/pull/2108))
- `Slider`: 修复异步展示时导致刻度渲染错误的问题 @LeeJim ([#2115](https://github.com/Tencent/tdesign-miniprogram/pull/2115))
- `ActionSheet`: 修复点击 disabled 的选项仍触发 close、visible-change 事件 @LeeJim ([#2117](https://github.com/Tencent/tdesign-miniprogram/pull/2117))
- `Stepper`: 保证值发生变化才触发 change 事件 @LeeJim ([#2118](https://github.com/Tencent/tdesign-miniprogram/pull/2118))


## 🌈 1.1.9 `2023-06-13`
### 🚀 Features
- `CheckBox`: 自定义图标增加半选中态  @lolhezihehe ([#2056](https://github.com/Tencent/tdesign-miniprogram/pull/2056))
- `Search`: 新增 `cursor-spacing` 属性 @anlyyao ([#2065](https://github.com/Tencent/tdesign-miniprogram/pull/2065))
### 🐞 Bug Fixes
- `indexes`: 索引导航无法选中问题 @lolhezihehe ([#2036](https://github.com/Tencent/tdesign-miniprogram/pull/2036))
- `Switch`: 修复加载态时仍能点击的问题 @betavs ([#2061](https://github.com/Tencent/tdesign-miniprogram/pull/2061))
- `Switch`: 修复 `loading` 态背景色错误 @anlyyao ([#2074](https://github.com/Tencent/tdesign-miniprogram/pull/2074))
- `Icon`: 修复命名错误的问题 @anlyyao ([#2076](https://github.com/Tencent/tdesign-miniprogram/pull/2076))
- `TreeSelect`: 修复使用 keys 之后无法正常使用的问题 @LeeJim ([#2085](https://github.com/Tencent/tdesign-miniprogram/pull/2085))
- `RadioGroup`: 修复使用 options 时值为 falsy 时异常的问题 @betavs ([#2082](https://github.com/Tencent/tdesign-miniprogram/pull/2082))
- `CellGroup`: 修复 `bordered` 属性无效的问题 @anlyyao ([#2089](https://github.com/Tencent/tdesign-miniprogram/pull/2089))


## 🌈 1.1.8 `2023-05-30`
### 🚀 Features
- `Textarea`:  属性 autoSize 支持控制最大最小高度 @anlyyao ([#2035](https://github.com/Tencent/tdesign-miniprogram/pull/2035))
- `Sticky`:  补充外部样式类 `t-class-content` @anlyyao ([#2047](https://github.com/Tencent/tdesign-miniprogram/pull/2047))
### 🐞 Bug Fixes
- `DropdownMenu`: 修复基础调试版本低于 2.19.2时无法使用的问题 @anlyyao ([#2043](https://github.com/Tencent/tdesign-miniprogram/pull/2043))
- `Sticky`: 解决 fixed 定位时宽度错误 @anlyyao ([#2047](https://github.com/Tencent/tdesign-miniprogram/pull/2047))
- `NavBar`: 修复背景色支持渐变色 @LeeJim ([#2049](https://github.com/Tencent/tdesign-miniprogram/pull/2049))
- `Drawer`: 修复 item-click 参数返回错误的问题 @ElanYoung ([#2039](https://github.com/Tencent/tdesign-miniprogram/pull/2039))
- `Image`: 修复 width 和 height 无动态响应的问题 @LeeJim ([#2050](https://github.com/Tencent/tdesign-miniprogram/pull/2050))
- `Drawer`: 修复 item-click 参数返回错误的问题 @ElanYoung ([#2039](https://github.com/Tencent/tdesign-miniprogram/pull/2039))
### 🚧 Others
- 修复 babel 报错的问题 @zhangpaopao0609 ([#2046](https://github.com/Tencent/tdesign-miniprogram/pull/2046))

## 🌈 1.1.7 `2023-05-23`
### 🚀 Features
- `ActionSheet`: 新增 CSS Variable 用于控制取消按钮颜色 @favouredddd ([#2007](https://github.com/Tencent/tdesign-miniprogram/pull/2007))
### 🐞 Bug Fixes
- `ActionSheet`: 解决 ActionSheet 引入报错 @anlyyao ([#2008](https://github.com/Tencent/tdesign-miniprogram/pull/2008))
- `Sticky`: 处理在锁定的情况下，宽度计算错误的问题 @LeeJim ([#2012](https://github.com/Tencent/tdesign-miniprogram/pull/2012))
- `SideBarItem`: 修复选中态样式问题 @betavs ([#2011](https://github.com/Tencent/tdesign-miniprogram/pull/2011))
- `TabBar`: 修正 virtualHost 不可用时的宽度 @LeeJim ([#2013](https://github.com/Tencent/tdesign-miniprogram/pull/2013))
- `Icon`: 更正图标命名 @anlyyao ([#2020](https://github.com/Tencent/tdesign-miniprogram/pull/2020))

## 🌈 1.1.6 `2023-05-15`
### 🚀 Features
- `Icon`: 更新版本至 v0.1.4 @anlyyao ([#1979](https://github.com/Tencent/tdesign-miniprogram/pull/1979))
- `DropdownMenu`: 选项过多时自动滚动到已选项 @jarmywang ([#1981](https://github.com/Tencent/tdesign-miniprogram/pull/1981))
- `Slider`: 属性 `step` 支持传入小数 @anlyyao ([#1990](https://github.com/Tencent/tdesign-miniprogram/pull/1990))
- `GridItem`: 新增 click 事件 @anlyyao ([#1993](https://github.com/Tencent/tdesign-miniprogram/pull/1993))
- `Picker`: 新增 popupProps 属性，透传至 Popup @favouredddd ([#1985](https://github.com/Tencent/tdesign-miniprogram/pull/1985))
- `DateTimePikcer`: 新增支持 popupProps 属性，透传至 Popup @favouredddd ([#1991](https://github.com/Tencent/tdesign-miniprogram/pull/1991))
- `ActionSheet`: 新增 PopupProps 属性，透传至 Popup @favouredddd ([#2002](https://github.com/Tencent/tdesign-miniprogram/pull/2002))

### 🐞 Bug Fixes
- `NavBar`: 修复 fixed 定位 @betavs ([#1982](https://github.com/Tencent/tdesign-miniprogram/pull/1982))
- `Slider`: 修复 change 事件重复触发相同值的问题 @anlyyao ([#1990](https://github.com/Tencent/tdesign-miniprogram/pull/1990))
- `Input`: 修复 label 为英文时无法换行 @anlyyao ([#1994](https://github.com/Tencent/tdesign-miniprogram/pull/1994))
- `PullDownRefresh`: 解决 refresh 事件触发时机错误的问题 @LeeJim ([#1998](https://github.com/Tencent/tdesign-miniprogram/pull/1998))
- `PullDownRefresh`: 修复 value 不可控的问题 @LeeJim ([#1998](https://github.com/Tencent/tdesign-miniprogram/pull/1998))
- `Button`: 修复 variant 无法动态响应的问题 @favouredddd ([#2000](https://github.com/Tencent/tdesign-miniprogram/pull/2000))
- `DropdownMenu`: 单选选项行高不一致 @bitjian ([#1992](https://github.com/Tencent/tdesign-miniprogram/pull/1992))
- `Layout`: 修复 col 组件不换行的问题，移除 flex 布局 @wuping97 ([#1996](https://github.com/Tencent/tdesign-miniprogram/pull/1996))
- `Dialog`: 修复无法动态移除按钮的问题 @yuchumian ([#1986](https://github.com/Tencent/tdesign-miniprogram/pull/1986))
- `Calendar`: 修复 type 属性失效的问题 @LeeJim ([#2003](https://github.com/Tencent/tdesign-miniprogram/pull/2003))

### 🚧 Others
- `Steps`: 移除文档中无效的 API @anlyyao ([#1995](https://github.com/Tencent/tdesign-miniprogram/pull/1995))

## 🌈 1.1.5 `2023-05-08`
### 🚀 Features
- `PulldownRefresh`: 支持透传更多属性至 scroll-view 组件 @LeeJim ([#1959](https://github.com/Tencent/tdesign-miniprogram/pull/1959))
- `DateTimePicker`: 新增 steps 属性，用于调整时间间隔步数 @LeeJim ([#1961](https://github.com/Tencent/tdesign-miniprogram/pull/1961))
- `Steps`: 新增 sequence 属性，支持逆序展示 @LeeJim ([#1962](https://github.com/Tencent/tdesign-miniprogram/pull/1962))
- `DropdownMenu`: 新增 CSS Variable 用于调整边框宽度 @LeeJim ([#1967](https://github.com/Tencent/tdesign-miniprogram/pull/1967))
### 🐞 Bug Fixes
- `Tabs`: 修复 track 位置计算错误的问题 @LeeJim ([#1958](https://github.com/Tencent/tdesign-miniprogram/pull/1958))
- `PulldownRefresh`: 解决 value = true 时无法触发加载状态的问题 @LeeJim ([#1960](https://github.com/Tencent/tdesign-miniprogram/pull/1960))
- `Steps`: 修复 icon 插槽无法使用的问题 @LeeJim ([#1962](https://github.com/Tencent/tdesign-miniprogram/pull/1962))
- `Stepper`: 修复无法输入空值的问题 @anlyyao ([#1971](https://github.com/Tencent/tdesign-miniprogram/pull/1971))
- `Calendar`: 解决 usePopup = false 时，没有自动定位到当前值的问题 @LeeJim ([#1969](https://github.com/Tencent/tdesign-miniprogram/pull/1969))
- `ActionSheet`: 修复使用命令行方式点击取消按钮无法关闭的问题 @LeeJim ([#1968](https://github.com/Tencent/tdesign-miniprogram/pull/1968))
### 🚧 Others
- `Picker`: 完善文档，增加 TS 定义的关联链接。 @LeeJim ([#1956](https://github.com/Tencent/tdesign-miniprogram/pull/1956))

## 🌈 1.1.4 `2023-05-01`
### 🚀 Features
- `ImageViewer`: 新增 usingCustomNavigation 属性，处理使用自定义导航栏时被遮挡的问题 @LeeJim ([#1944](https://github.com/Tencent/tdesign-miniprogram/pull/1944))
- `Swiper`: 新增 image-load 事件 @LeeJim ([#1949](https://github.com/Tencent/tdesign-miniprogram/pull/1949))

### 🐞 Bug Fixes
- `Slider`: 修复 dragstart、dragend 事件没反应的问题 @LeeJim ([#1940](https://github.com/Tencent/tdesign-miniprogram/pull/1940))
- `Picker`: 解决使用 falsy 值导致无法正确选择的问题 @LeeJim ([#1948](https://github.com/Tencent/tdesign-miniprogram/pull/1948))
- `Toast`: 页面隐藏的时候自动关闭 @LeeJim ([#1947](https://github.com/Tencent/tdesign-miniprogram/pull/1947))

### 🚧 Others
- `Swiper`: 更新 swiper 组件 API 文档 @anlyyao ([#1945](https://github.com/Tencent/tdesign-miniprogram/pull/1945))

## 🌈 1.1.3 `2023-04-26`
### 🚀 Features
- `Rate`: 支持无障碍访问 @byq1213 ([#1574](https://github.com/Tencent/tdesign-miniprogram/pull/1574))
- `Tabs`: 新增外部样式类 `t-class-content` @LeeJim ([#1931](https://github.com/Tencent/tdesign-miniprogram/pull/1931))
- `CollapsePanel`: 新增 headerLeftIcon 属性，支持面板头左侧使用图标 @LeeJim ([#1933](https://github.com/Tencent/tdesign-miniprogram/pull/1933))
- `Tabs`: 新增 middle 插槽 @LeeJim ([#1936](https://github.com/Tencent/tdesign-miniprogram/pull/1936))
### 🐞 Bug Fixes
- `Upload`: 修复 max 属性相关的问题 @LeeJim ([#1914](https://github.com/Tencent/tdesign-miniprogram/pull/1914))
- `NavBar`: 修复胶囊边框层级过高，遮挡内容点击事件的问题 @LeeJim ([#1920](https://github.com/Tencent/tdesign-miniprogram/pull/1920))
- `Button`: 修复 variant=outline 状态下 loading 不展示的问题 @lolhezihehe ([#1922](https://github.com/Tencent/tdesign-miniprogram/pull/1922))
- `NavBar`: 解决内容垂直居中的问题 @LeeJim ([#1926](https://github.com/Tencent/tdesign-miniprogram/pull/1926))
- `DropdownMenu`: 修复单选情况下无法使用多列的问题 @LeeJim ([#1927](https://github.com/Tencent/tdesign-miniprogram/pull/1927))
- `Link`: 修复 disabled 态下仍能跳转的问题 @anlyyao ([#1928](https://github.com/Tencent/tdesign-miniprogram/pull/1928))
- `Calendar`: 修复 format 报错的问题 @LeeJim ([#1930](https://github.com/Tencent/tdesign-miniprogram/pull/1930))
- `Input`: 修复垂直布局时样式错误 @anlyyao ([#1934](https://github.com/Tencent/tdesign-miniprogram/pull/1934))

## 🌈 1.1.2 `2023-04-17`
### 🚀 Features
- `Swiper`: 支持无障碍访问 @zhangpaopao0609 ([#1598](https://github.com/Tencent/tdesign-miniprogram/pull/1598))
- `Swiper`: list 属性支持 SwiperList[] 类型 @zhangpaopao0609 ([#1598](https://github.com/Tencent/tdesign-miniprogram/pull/1598))
- `Divider`: 新增 CSS Variables 用于控制分割线样式 @favouredddd ([#1890](https://github.com/Tencent/tdesign-miniprogram/pull/1890))
- `Grid`: 补充 CSS Variables 以修改不同列数下的图片尺寸和文字大小 @lolhezihehe ([#1903](https://github.com/Tencent/tdesign-miniprogram/pull/1903))
- `Radio`: 新增 CSS Variables 用于控制内容字体大小 @favouredddd ([#1895](https://github.com/Tencent/tdesign-miniprogram/pull/1895))

### 🐞 Bug Fixes
- `loading`: 修复  `inheritColor = true` 时，因样式问题导致组件一直处于加载状态 @Cyrus97 ([#1873](https://github.com/Tencent/tdesign-miniprogram/pull/1873))
- `Empty`: 支持描述内容超出自动换行 @favouredddd ([#1870](https://github.com/Tencent/tdesign-miniprogram/pull/1870))
- `Row`: 增加默认样式实现垂直居中 @tomcat-hz ([#1866](https://github.com/Tencent/tdesign-miniprogram/pull/1866))
- `Progress`: 优化无障碍访问体验 @yaogengzhu ([#1354](https://github.com/Tencent/tdesign-miniprogram/pull/1354))
- `Radio`: 优化样式，新增 CSS Variables 控制文字激活态颜色 @LeeJim ([#1889](https://github.com/Tencent/tdesign-miniprogram/pull/1889))
- `ActionSheet`: 解决 show 方法的 TS 报错 @LeeJim ([#1907](https://github.com/Tencent/tdesign-miniprogram/pull/1907))
- `Radio`: 修复图标尺寸无法调整的问题 @bitjian ([#1909](https://github.com/Tencent/tdesign-miniprogram/pull/1909))
- Button: 修复 type = submit 时，disabled 未生效的问题 @bitjian ([#1878](https://github.com/Tencent/tdesign-miniprogram/pull/1878))


## 🌈 1.1.1 `2023-04-03`
### 🚀 Features
- `Button`: 新增 hover-class 属性 @anlyyao ([#1847](https://github.com/Tencent/tdesign-miniprogram/pull/1847))
### 🐞 Bug Fixes
- `Tabs`: 解决内容重叠的问题 @LeeJim ([#1853](https://github.com/Tencent/tdesign-miniprogram/pull/1853))
- `Message`: 处理 `loop` 产生的控制台告警 @anlyyao ([#1856](https://github.com/Tencent/tdesign-miniprogram/pull/1856))
- `Message`: 修复 `marquee = true` 时，滚动动画错误 @anlyyao ([#1856](https://github.com/Tencent/tdesign-miniprogram/pull/1856))
- `Avatar`: 修复控制台报错 @jarmywang ([#1858](https://github.com/Tencent/tdesign-miniprogram/pull/1858))
- `Drawer`: 修复 destroyOnClose 属性不生效  @jarmywang ([#1864](https://github.com/Tencent/tdesign-miniprogram/pull/1864))

## 🌈 1.1.0 `2023-03-27`
### 🚀 Features
- `Layout`: 新增布局组件，包含 row 和 col 组件 @wuping97 ([#1821](https://github.com/Tencent/tdesign-miniprogram/pull/1821))
- `Search`:  新增 type 属性透传至 input，默认为 text @haochenli ([#1828](https://github.com/Tencent/tdesign-miniprogram/pull/1828))

### 🐞 Bug Fixes
- `Button`: 修复 disabled = true 仍触发 tap 事件的问题 @wuping97 ([#1833](https://github.com/Tencent/tdesign-miniprogram/pull/1833))
- `NoticeBar`: 修复二轮滚动初始位置不正确 @anlyyao ([#1835](https://github.com/Tencent/tdesign-miniprogram/pull/1835))
- `PullDownRefresh`: 修复 loading-texts 默认值缺失的问题 @haochenli ([#1837](https://github.com/Tencent/tdesign-miniprogram/pull/1837))
- `PullDownRefresh`: 解决外部样式类 t-class-text 拼写错误的问题 @LeeJim ([#1839](https://github.com/Tencent/tdesign-miniprogram/pull/1839))
- `Grid`: 修复 t-class-image 无法赋予 image 样式的问题 @LeeJim ([#1842](https://github.com/Tencent/tdesign-miniprogram/pull/1842))
- `NoticeBar`: 修复 loop 为 0 时还会循环播放的问题 @haochenli ([#1826](https://github.com/Tencent/tdesign-miniprogram/pull/1826))
- `Cascader`: 修复当 value 发生变更时，options 没有更新的问题 @LeeJim ([#1841](https://github.com/Tencent/tdesign-miniprogram/pull/1841))
- `Tabs`: 修复设置 animation 导致 panel 内容无法切换的问题 @LeeJim ([#1843](https://github.com/Tencent/tdesign-miniprogram/pull/1843))
- `Tabs`: 修复 theme 不等于 line 时，获取 track 报错的问题 @LeeJim ([#1843](https://github.com/Tencent/tdesign-miniprogram/pull/1843))
- `Tabs`: 移除滚动条 @LeeJim ([#1844](https://github.com/Tencent/tdesign-miniprogram/pull/1844))


## 🌈 1.0.4 `2023-03-20`
### 🚀 Features
- `PullDownRefresh`: 支持无障碍访问支持 @shinyina ([#1241](https://github.com/Tencent/tdesign-miniprogram/pull/1241))
- `Steps`: 支持无障碍访问 @tangzixuan ([#1783](https://github.com/Tencent/tdesign-miniprogram/pull/1783))

### 🐞 Bug Fixes
- `Textarea`: 修复 `autosize` 为 `true` 时，`placeholder` 上移问题 @anlyyao ([#1781](https://github.com/Tencent/tdesign-miniprogram/pull/1781))
- `Switch`: 修复 label 和 icon 渲染顺序错误的问题 @LeeJim ([#1809](https://github.com/Tencent/tdesign-miniprogram/pull/1809))
- `Loading`: 修复错误的 style 导致 wxs 报错 @LeeJim ([#1810](https://github.com/Tencent/tdesign-miniprogram/pull/1810))
- `Radio`: 修复 placement 优先级的问题 @LeeJim ([#1812](https://github.com/Tencent/tdesign-miniprogram/pull/1812))
- `Button`: 解决多个插槽的渲染问题 @LeeJim ([#1813](https://github.com/Tencent/tdesign-miniprogram/pull/1813))
- `Link`: 解决多个插槽无法渲染的问题 @LeeJim ([#1816](https://github.com/Tencent/tdesign-miniprogram/pull/1816))
- `TabPanel`: 解决多个插槽无法渲染的问题 @LeeJim ([#1816](https://github.com/Tencent/tdesign-miniprogram/pull/1816))
- `Upload`: 修复点击事件失效问题 @yaogengzhu ([#1802](https://github.com/Tencent/tdesign-miniprogram/pull/1802))
- `Upload`: 修复 limit 限制的问题 @yaogengzhu ([#1800](https://github.com/Tencent/tdesign-miniprogram/pull/1800))


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
- `Cell`: 新增 CSS Variables 用于控制高度 @LeeJim ([#1482](https://github.com/Tencent/tdesign-miniprogram/pull/1482))
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
