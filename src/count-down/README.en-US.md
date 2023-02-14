:: BASE_DOC ::

## API

### CountDown Props

name | type | default | description | required
-- | -- | -- | -- | --
auto-start | Boolean | true | \- | N
content | String / Slot | 'default' | \- | N
format | String | HH:mm:ss | \- | N
millisecond | Boolean | false | \- | N
size | String `v0.5.1` | 'small' | options：small/medium/large | N
split-with-unit `v0.5.1` | Boolean | false | \- | N
theme | String `v0.5.1` | 'default' | options：default/round/square | N
time | Number | - | required | Y

### CountDown Events

name | params | description
-- | -- | --
change | `(time: TimeData)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/count-down/type.ts)。<br/>`interface TimeData {  days: number; hours: number; minutes: number; seconds: number; milliseconds: number }`<br/>
finish | \- | \-
