# Load

### Loading Props

| 名称             | 类型          | 默认值     | 说明                                                                                                                     | 必传 |
| ---------------- | ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------ | ---- |
| delay            | Number        | 0          | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒                                                   | N    |
| duration         | Number        | 800        | 加载动画执行完成一次的时间，单位：毫秒                                                                                   | N    |
| external-classes | Array         | -          | 组件类名，分别用于设置加载组件外层元素，加载组件文本，加载组件指示符。`['t-class', 't-class-text', 't-class-indicator']` | N    |
| indicator        | Boolean       | true       | 是否显示加载指示符                                                                                                       | N    |
| layout           | String        | horizontal | 对齐方式。可选项：horizontal/vertical                                                                                    | N    |
| loading          | Boolean       | true       | 是否处于加载状态                                                                                                         | N    |
| pause            | Boolean       | false      | 是否暂停动画                                                                                                             | N    |
| progress         | Number        | -          | 加载进度                                                                                                                 | N    |
| reverse          | Boolean       | -          | 加载动画是否反向                                                                                                         | N    |
| size             | String        | '40rpx'    | 尺寸，示例：40rpx/20px                                                                                                   | N    |
| text             | String / Slot | -          | 加载提示文案                                                                                                             | N    |
| theme            | String        | circular   | 加载组件类型。可选项：circular/spinner/bar/error/dots                                                                    | N    |
