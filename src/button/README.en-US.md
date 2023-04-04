:: BASE_DOC ::

## API
### Button Props

name | type | default | description | required
-- | -- | -- | -- | --
block | Boolean | false | make button to be a block-level element | N
content | String / Slot | - | button's children elements | N
custom-dataset | Object | - | Typescript：`any` | N
disabled | Boolean | false | disable the button, make it can not be clicked | N
external-classes | Array | - | `['t-class', 't-class-icon', 't-class-loading']` | N
ghost | Boolean | false | make background-color to be transparent | N
icon | String / Object | - | icon name | N
loading | Boolean | false | set button to be loading state | N
loading-props | Object | - | Typescript：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/button/type.ts) | N
shape | String | rectangle | button shape。options：rectangle/square/round/circle | N
size | String | medium | a button has three size。options：small/medium/large。Typescript：`SizeEnum` | N
suffix | Slot | - | \- | N
theme | String | default | button theme。options：default/primary/danger | N
type | String | - | type of button element, same as formType of Miniprogram。options：submit/reset | N
variant | String | base | button variant。options：base/outline/text | N
open-type | String | - | options：contact/share/getPhoneNumber/getUserInfo/launchApp/openSetting/feedback/chooseAvatar | N
hover-stop-propagation | Boolean | false | \- | N
hover-start-time | Number | 20 | \- | N
hover-stay-time | Number | 70 | \- | N
lang | String | en | options：en/zh_CN/zh_TW | N
session-from | String | - | \- | N
send-message-title | String | 当前标题 | \- | N
send-message-path | String | 当前分享路径 | \- | N
send-message-img | String | 截图 | \- | N
app-parameter | String | - | \- | N
show-message-card | Boolean | false | \- | N
bindgetuserinfo | Eventhandle | - | \- | N
bindcontact | Eventhandle | - | \- | N
bindgetphonenumber | Eventhandle | - | \- | N
binderror | Eventhandle | - | \- | N
bindopensetting | Eventhandle | - | \- | N
bindlaunchapp | Eventhandle | - | \- | N
bindchooseavatar | Eventhandle | - | \- | N

### Button Events

name | params | description
-- | -- | --
tap | `(e: MouseEvent)` | trigger on click
