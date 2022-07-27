:: BASE_DOC ::

## API

### Calendar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cell | Array / Function | - | 日期单元。TS 类型：`DateCellDescription[] | ((data: Date) => string)` `interface DateCellDescription { date: Date; label: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
confirm-btn | String / Function / Slot | - | 确认按钮 | N
first-day-of-week | Number | - | 第一天从星期几开始，仅在日历展示维度为月份时（mode = month）有效。默认为 1。可选项：1/2/3/4/5/6/7 | N
head | String / Slot | - | 头部插槽（左上角处，默认不显示任何内容） | N
value | String / Date | - | 当前高亮的日期。TS 类型：`CalendarValue` `type CalendarValue = string | Date`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N

### Calendar Events

名称 | 参数 | 描述
-- | -- | --
cell-click | `(options: { cell: CalendarCell;})` | 日历单元格点击时触发
confirm | `(options: { value: Date;})` | 确认按钮点击时触发
