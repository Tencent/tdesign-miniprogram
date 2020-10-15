# Rate

> 开发者：terrancewan(万宽红)

## 介绍

评分，输入型组件

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-rate": "@tencent/tdesign-miniprogram/rate/rate"
}
```

## 用法

### v-model基本用法

```html
<t-rate
  value="{{star1}}"
  bind:change="onChangeVal1"
/>
```

### 指定Icon size

```html
<t-rate
  value="{{star2}}"
  bind:change="onChangeVal2"
  size="20px"
/>
```

### 设置为只读

```html
<t-rate
  value="{{star3}}"
  readonly
  bind:change="onChangeVal3"
  bind:readonly="onDisableVal3"
/>
```

### 调整评分最大等级

```html
<t-rate
  value="{{star4}}"
  count="{{3}}"
  bind:change="onChangeVal4"
/>
```

### 设置为可取消

```html
<t-rate
  value="{{star5}}"
  clearable
  bind:change="onChangeVal5"
/>
```

### 显示辅助文字

```html
<t-rate
  value="{{star6}}"
  showText="{{true}}"
  textColor="#FF0000"
  bind:change="onChangeVal6"
/>
```

## API

### Props

| 属性 | 类型| 默认值| 必传| 说明|
|-----|-----|-----|-----|-----|
|**count**|Number| 5| N| 最大评分 |
|**value** |Number | 0| N| 当前评分，可与事件**change**形成 v-model |
|**readonly** |Boolean | false| N|是否只读 |
|**clearable**|Boolean | false| N|是否可以取消当前最大选择|
|**showText** |Boolean | false| N| 是否显示辅助文字 |
|**texts**|String[]|['极差', '失望', '一般', '满意', '惊喜']|对选择的评分进行辅助说明|
|**textColor**|String|'#BBBBBB'|辅助文字的颜色|
|**size**|String|'30px'|Icon尺寸|
|**ctn-class**|string| ''|N|自定义评分容器样式类|
|**star-class**|string| ''|N|自定义评分Icon样式类|
|**text-class**|string| ''|N|辅助文字的样式类|

### Slots

| 插槽名称| 说明 |
|-------|------|
|**active-icon**|选中态时的Icon|
|**default-icon**|默认态的Icon|

PS: 待`t-icon`组件完善

### Events

| 事件名称| 参数| 说明 |
|-----|-----|-----|
|**change** | {val,text} |评分组件值改变的回调 |
|**readonly**| null |组件为只读状态时点击触发的事件|
