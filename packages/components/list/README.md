:: BASE_DOC ::

## API

### List Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
async-loading | String / Slot | - | 自定义加载中。值为空不显示加载中，值为 `'loading'` 显示加载中状态，值为 `'load-more'` 显示加载更多状态。值类型为 Slot，则表示自定义加载状态呈现内容 | N
footer | String | - | 底部 | N
header | String | - | 头部 | N

### List Events

名称 | 参数 | 描述
-- | -- | --
load-more | \- | 点击加载更多时触发
scroll | `(bottomDistance: number, scrollTop: number)` | 列表滚动时触发，bottomDistance 表示底部距离；scrollTop 表示顶部滚动距离

### List Slots

名称 | 描述
-- | --
async-loading | 自定义 `async-loading` 显示内容
footer | 自定义 `footer` 显示内容
header | 自定义 `header` 显示内容

### List External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-loading | 加载状态样式类
