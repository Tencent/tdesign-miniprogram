### Divider Props

| 名称            | 类型          | 默认值     | 说明                                                                                                          | 必传 |
| --------------- | ------------- | ---------- | ------------------------------------------------------------------------------------------------------------- | ---- |
| align           | String        | center     | 文本位置（仅在水平分割线有效）。可选值：left/right/center                                                     | N    |
| content         | String / Slot | -          | 子元素。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N    |
| dashed          | Boolean       | false      | 是否虚线（仅在水平分割线有效）                                                                                | N    |
| externalClasses | Array         | -          | 组件类名，分别用于设置 组件外层类名、分隔线类名 等。`['t-class', 't-class-line', 't-class-content']`          | N    |
| lineColor       | String        | -          | 分隔线颜色                                                                                                    | N    |
| theme           | String        | horizontal | 分隔线类型有两种：水平和垂直。可选值：horizontal/vertical                                                     | N    |
| tStyle          | Object        | -          | 组件样式。TS 类型：`Record<string, any>`                                                                      | N    |
