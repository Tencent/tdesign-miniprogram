# Search 搜索框

用于用户输入搜索信息，并进行页面内容搜索。

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-search": "tdesign-miniprogram/search/search"
}
```

## 代码演示

### 基础搜索框

<img src="https://tdesign.gtimg.com/miniprogram/readme/search.png" width="375px" height="50%">

```html
<t-search placeholder="搜索预设文案" center="{{true}}" />
```

## API

### Props

| 参数            | 说明                                                                                                          | 类型         | 默认值                                                                        | 版本                  |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------- | --------------------- | --- |
| keyword         | 值                                                                                                            | String       | -                                                                             | -                     |
| placeholder     | 占位符                                                                                                        | String       | -                                                                             | -                     |
| disabled        | 是否禁用搜索框                                                                                                | Boolean      | `false`                                                                       | -                     |
| action-text     | 自定义右侧 cancel 文字                                                                                        | String       | -                                                                             | -                     |
| focus           | 是否聚焦                                                                                                      | Boolean      | `false`                                                                       | -                     | -   |
| center          | 是否居中                                                                                                      | Boolean      | `false`                                                                       | -                     | -   |
| shape           | 搜索框形状                                                                                                    | String       | `square`                                                                      | 可选值，square、round |
| label           | 搜索框左侧文本                                                                                                | String       | -                                                                             |
| left-icon       | 搜索框左侧图标                                                                                                | TNode/String | `tick_fill`,icon 组件完成后更换为`serach`                                     | 可选值见 Icon 组件    |
| right-icon      | 搜索框右侧图标                                                                                                | TNode/String | `close`                                                                       |
| externalClasses | 组件外部样式类名，分别用于设置组件外层类名、组件 input 类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型 | Array        | `['t-class','t-class-input','t-class-cancel','t-class-left','t-class-right']` |

### Event

| 事件名 | 说明                       | 类型   | 参数                                            |
| ------ | -------------------------- | ------ | ----------------------------------------------- | ------------- |
| change | 搜索框值发生变化时触发     | Events | (value: InputValue, context?: { e?: InputEvent  | MouseEvent }) |
| focus  | 搜索框聚焦触发             | Events | (value: InputValue, context: { e: FocusEvent }) |
| blur   | 搜索框失去焦点触发         | Events | (value: InputValue, context: { e: FocusEvent }) |
| clear  | 点击清除时触发             | Events | (value: InputValue, context: { e: MouseEvent }) |
| submit | 点击完成时时触发           | Events | (value: InputValue, context?: { e?: InputEvent  | MouseEvent }) |
| cancel | 点击右侧 cancel 文字时触发 | Events | (context: { e: MouseEvent })                    |

### 外部样式

| class          | 说明                   |
| -------------- | ---------------------- |
| t-class        | root                   |
| t-class-input  | input 组件的 class     |
| t-class-cancel | 右侧 cancel 按钮 class |
| t-class-left   | 左侧图标 class         |
| t-class-right  | 右侧图标 class         |

### Slot

| name        | 说明               |
| ----------- | ------------------ |
| action-text | 在 actionText 前方 |
| label       | 搜索框左侧文本     |
| left-icon   | 左侧图标           |
| right-icon  | 右侧图标           |
