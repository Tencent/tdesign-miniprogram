:: BASE_DOC ::

## API
### Loading Props

name | type | default | description | required
-- | -- | -- | -- | --
delay | Number | 0 | \- | N
duration | Number | 800 | \- | N
external-classes | Array | - | `['t-class', 't-class-text', 't-class-indicator']` | N
indicator | Boolean / Slot | true | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
inherit-color | Boolean | false | \- | N
layout | String | horizontal | options：horizontal/vertical | N
loading | Boolean | true | \- | N
pause | Boolean | false | \- | N
progress | Number | - | \- | N
reverse | Boolean | - | \- | N
size | String | '40rpx' | \- | N
text | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
theme | String | circular | options：circular/spinner/dots | N


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-loading-color | @brand-color | - 
--td-loading-text-color | inherit | - 
--td-loading-text-font-size | 24rpx | - 
--td-loading-text-line-height | 40rpx | - 
