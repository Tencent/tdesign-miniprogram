:: BASE_DOC ::

## API
### Progress Props

name | type | default | description | required
-- | -- | -- | -- | --
color | String / Object / Array | '' | Typescript：`string \| Array<string> \| Record<string, string>` | N
external-classes `v0.25.0` | Array | - | `['t-class', 't-class-bar', 't-class-label']` | N
label | String / Boolean / Slot | true | \- | N
percentage | Number | 0 | \- | N
status | String | - | options：success/error/warning/active。Typescript：`StatusEnum` `type StatusEnum = 'success' \| 'error' \| 'warning' \| 'active'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/progress/type.ts) | N
stroke-width | String / Number | - | \- | N
theme | String | line | options：line/plump/circle。Typescript：`ThemeEnum` `type ThemeEnum = 'line' \| 'plump' \| 'circle'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/progress/type.ts) | N
track-color | String | '' | \- | N
