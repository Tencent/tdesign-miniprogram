# stepper 数量选择

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
// app.json 或 index.json
"usingComponents": {
  "stepper": "@tencent/tdesign-miniprogram/stepper/stepper"
}
```

## 代码演示

#### 基础用法

![default](./readme-assests/3.png)

```html
<stepper value="{{value}}" classname="steper-cls" bind:change="onChange"></stepper>
```

```

## API

### stepper Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| modelValue | 初始输入值 | *string* | 0 | - |
| disabled | 是否禁用 | *boolean* | `false` | - |
| disableInput | 是否禁止输入 | *boolean* | `false` | - |
| inputWidth | input框长度 | *number* | null | - |
| label | 标题 | *string* | '' | - |
| min | 允许最小值 | *boolean* | `0` | - |
| max | 允许最大值 | *infinity* | `0` | - |
| step | 步长 | *number* | 1 | - |
| iconPrefix | 自定义icon前缀 | *string* | '' | - |
| minusIcon | 自定义减少按钮的icon | *string* | `stepper-minus` | - |
| plusIcon | 自定义增加按钮的icon | *string* | `stepper-plus` | - |
| pureMode | 是否启用纯步进器 | *boolean* | `false` | - |

### stepper Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| blur | 输入框失去焦点 | 当前输入的值 |
| overlimit | 当前值超出范围 | 无 |
| change | 当绑定值变化时触发的事件 | 返回event,event.detail: 当前输入的值 |

### stepper 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| classname | 根节点样式类 |
```
