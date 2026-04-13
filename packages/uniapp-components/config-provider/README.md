---
title: ConfigProvider 全局特性配置
description: 全局特性配置包含各个组件的文本语言配置及其他通用配置，可以减少重复的通用配置。
spline: explain
isComponent: true
---


## 引入

推荐使用 easycom 模式引入组件，配置后无需手动 import 即可直接在模板中使用 `<t-config-provider />`。详细配置请参考 [快速开始](../getting-started)。

如需手动引入：

```js
import TConfigProvider from '@tdesign/uniapp/config-provider/config-provider.vue';
```

## 代码演示

### 国际化配置

TDesign 支持国际化/多语言配置，目前支持的语言包括:

| 语言     | 对应文件 |
| -------- | -------- |
| 简体中文 | `zh_CN`  |
| 繁体中文 | `zh_TW`  |
| 英语     | `en_US`  |
| 韩语     | `ko_KR`  |
| 日语     | `ja_JP`  |
| 俄语     | `ru_RU`  |
| 意大利语 | `it_IT`  |
| 阿拉伯语 | `ar_KW`  |

如果你想贡献更多语言包，欢迎参考 [如何新增语言包](https://github.com/Tencent/tdesign-common/blob/develop/js/global-config/locale/CONTRIBUTING.md) 发起 PR。

### 01 配置示例

### Upload

{{ upload-en }}

### Chat

[@tdesign/uniapp-chat](https://tdesign.tencent.com/uniapp-chat) 组件与 `@tdesign-uniapp` 复用 `config-provider`。

{{ chat-en }}

### 其他组件

{{ other-en }}


## API

### ConfigProvider Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
global-config | Object | - | 全局配置。TS 类型：`GlobalConfigProvider` | N
theme-vars | Object | - | 全局配置 | N

### GlobalConfigProvider

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
action-sheet | Object | - | 动作面板全局配置。TS 类型：`ActionSheetConfig` | N
calendar | Object | - | 日历组件全局配置。TS 类型：`CalendarConfig` | N
cascader | Object | - | 级联选择器全局配置。TS 类型：`CascaderConfig` | N
class-prefix | String | t | CSS 类名前缀 | N
date-time-picker | Object | - | 时间选择器全局配置。TS 类型：`DateTimePickerConfig` | N
dropdown-menu | Object | - | 下拉菜单全局配置。TS 类型：`DropdownMenuConfig` | N
guide | Object | - | 引导全局配置。TS 类型：`GuideConfig` | N
picker | Object | - | 选择器全局配置。TS 类型：`PickerConfig` | N
pull-down-refresh | Object | - | 下拉刷新全局配置。TS 类型：`PullDownRefreshConfig` | N
qrcode | Object | - | 二维码全局配置。TS 类型：`QRCodeConfig` | N
rate | Object | - | 评分全局配置。TS 类型：`RateConfig` | N
tab-bar | Object | - | 标签栏全局配置。TS 类型：`TabBarConfig` | N
upload | Object | - | 上传组件全局配置。TS 类型：`UploadConfig` | N

### ActionSheetConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
cancel | String | - | 语言配置，“取消” 按钮描述文本 | N

### AttachmentsConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
status | Object | - | 语言配置，附件上传状态描述文本。TS 类型：`{ pending: string; fail: string; }` | N

### CalendarConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
confirm | String | - | 语言配置，“确定” 按钮描述文本 | N
month-title | String | - | 语言配置，日期月面板标题描述文本。示例：“{year} / {month}” | N
months | Array | - | 月文本描述，默认值：['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月']。TS 类型：`string[]` | N
title | String | - | 语言配置，组件标题“请选择日期”描述文本 | N
weekdays | Array | - | 星期文本描述，默认值：['日', '一', '二', '三', '四', '五', '六']。TS 类型：`string[]` | N

### CascaderConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
placeholder | String | - | 语言配置，未选中时的提示文案“选择选项”描述文本 | N
title | String | - | 语言配置，组件标题“选择地址”描述文本 | N

### ChatActionbarConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
action-bar | Object | - | 语言配置，对话操作栏描述文本。TS 类型：`{ replay: string; copy: string; good: string; bad: string; share: string; quote: string; }` | N

### ChatSenderConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
placeholder | String | - | 语言配置，占位符描述文本 | N
send-text | String | - | 语言配置，发送按钮描述文本 | N
stop-text | String | - | 语言配置，停止发送按钮描述文本 | N

### ChatThinkingConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
status | Object | - | 语言配置，思考状态描述文本。TS 类型：`{ pending: string; complete: string; stop: string; }` | N

### DateTimePickerConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
cancel | String | - | 语言配置，“取消”按钮描述文本 | N
confirm | String | - | 语言配置，“确定”按钮描述文本 | N
date-label | String | - | 语言配置，“日” 描述文本 | N
format | String | 'YYYY-MM-DD HH:mm:ss' | 日期格式化规则 | N
hour-label | String | - | 语言配置，“时” 描述文本 | N
minute-label | String | - | 语言配置，“分” 描述文本 | N
month-label | String | - | 语言配置，“月” 描述文本 | N
second-label | String | - | 语言配置，“秒” 描述文本 | N
title | String | - | 语言配置，组件标题“选择时间”描述文本 | N
year-label | String | - | 语言配置，“年” 描述文本 | N

### DropdownMenuConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
confirm | String | - | 语言配置，“确定” 按钮描述文本 | N
reset | String | - | 语言配置，“重置” 按钮描述文本 | N

### FormConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
colon-text | String | - | 字段旁边的冒号，中文为“：” | N
error-message | Object | - | 表单错误信息配置，示例：`{ idcard: '请输入正确的身份证号码', max: '字符长度不能超过 ${max}' }`。TS 类型：`FormErrorMessage`，[Form API Documents](./form?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/config-provider/type.ts) | N
required-mark | Boolean | true | 是否显示必填符号（*），默认显示 | N
required-mark-position | String | left | 表单必填符号（*）显示位置。可选项：left/right | N

### GuideConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
back | String | - | 语言配置， “返回” 描述文本 | N
finish | String | - | 语言配置， “完成” 描述文本 | N
next | String | - | 语言配置， “下一步” 描述文本 | N
skip | String | - | 语言配置， “跳过” 描述文本 | N

### ImageConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
error-text | String | - | 图片加载失败显示的文本，中文默认为“图片无法显示” | N
loading-text | String | - | 图片加载中显示的文本，中文默认为“图片加载中” | N
replace-image-src | Function | - | 统一替换图片 `src` 地址，参数为组件的全部属性，返回值为新的图片地址。TS 类型：`(params: ImageProps) => string`，[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/config-provider/type.ts) | N

### InputConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
placeholder | String | - | 语言配置，“请输入”占位符描述文本 | N

### PickerConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
cancel | String | - | 语言配置，“取消” 按钮描述文本 | N
confirm | String | - | 语言配置，“确认” 按钮描述文本 | N

### PullDownRefreshConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
loading-texts | Array | - | 提示文本描述，默认值：['下拉刷新', '松手刷新', '正在刷新', '刷新完成']。TS 类型：`string[]` | N

### QRCodeConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
expired-text | String | - | 语言配置，“二维码过期”描述文本 | N
refresh-text | String | - | 语言配置，“点击刷新”描述文本 | N
scanned-text | String | - | 语言配置，“已扫描”描述文本 | N

### RateConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
no-value-text | String | - | 语言配置，“未评分”描述文本 | N
value-text | String | - | 语言配置，评分值描述文本。示例：“{value} 分” | N

### TabBarConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
have-more-news-aria-label | String | - | 语言配置，“有n+条新的消息”描述文本。示例：“有 {value}+ 条消息” | N
have-news-aria-label | String | - | 语言配置，“有n条新的消息”描述文本。示例：“有 {value} 条消息” | N
more-news-aria-label | String | - | 语言配置，“有很多消息”描述文本 | N
news-aria-label | String | - | 语言配置，“有新的消息”描述文本 | N

### UploadConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
progress | Object | - | 语言配置，上传进度相关。示例：{ uploadText: '上传中', waitingText: '待上传', 'failText': '上传失败', successText: '上传成功' }。TS 类型：`UploadConfigProgress` | N

### UploadConfigProgress

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
fail-text | String | - | 语言配置，“上传失败”文本描述 | N
success-text | String | - | 语言配置，“上传成功”文本描述 | N
uploading-text | String | - | 语言配置，“上传中”文本描述 | N
waiting-text | String | - | 语言配置，“待上传”文本描述 | N
