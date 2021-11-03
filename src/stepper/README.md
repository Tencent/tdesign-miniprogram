# stepper 数量选择

## 介绍

用于数量的增减。

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "stepper": "@tencent/tdesign-miniprogram/stepper/stepper"
}
```

## 代码演示

### 类型

带单位步进器。

<img src="https://tdesign.gtimg.com/miniprogram/readme/stepper.png" width="50%" height="50%" style="margin-top: 10px">

```html
<t-stepper label="标题文字（单位）" step="2" />
```

## API

### Stepper Props

| 名称          | 类型            | 默认值 | 说明                          | 必传 |
| ------------- | --------------- | ------ | ----------------------------- | ---- |
| disabled      | Boolean         | false  | 禁用                          | N    |
| disable-input | Boolean         | false  | 禁用输入框                    | N    |
| input-width   | Number          | -      | 输入框宽度                    | N    |
| label         | String          | -      | 标签                          | N    |
| max           | Number          | 100    | 最大值                        | N    |
| min           | Number          | 0      | 最小值                        | N    |
| step          | Number          | 1      | 步进                          | N    |
| theme         | String          | normal | 组件风格。可选项：normal/mode | N    |
| value         | String / Number | 0      | 值                            | N    |
