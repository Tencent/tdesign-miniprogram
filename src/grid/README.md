# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
// app.json 或 index.json
"usingComponents": {
  "t-grid": "@tencent/tdesign-miniprogram/grid/grid",
  "t-grid-item": "@tencent/tdesign-miniprogram/grid-item/grid-item"
}
```

## 代码演示

### 01 基本用法

```html
<view class="demo-section__desc">一行三个</view>
<view class="demo-section__wrapper">
  <t-grid border="{{false}}" column-num="3">
    <t-grid-item text="标题文字">
      <image
        class="large-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="large-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="large-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
  </t-grid>
</view>

<view class="demo-section__desc">一行四个</view>
<view class="demo-section__wrapper">
  <t-grid border="{{false}}" column-num="4" class="column-4">
    <t-grid-item text="标题文字">
      <image
        class="middle-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="middle-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="middle-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="middle-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
  </t-grid>
</view>

<view class="demo-section__desc">一行五个</view>
<view class="demo-section__wrapper">
  <t-grid border="{{false}}" column-num="5" class="column-5">
    <t-grid-item text="标题文字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="最多四字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
  </t-grid>
  <view class="gutter-row"></view>
  <t-grid border="{{false}}" column-num="5" class="column-5" t-class="t-class-column-5">
    <t-grid-item text="标题文字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="最多四字">
      <image
        class="small-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
  </t-grid>
</view>

<view class="demo-section__desc">一行二个带说明宫格</view>
<view class="demo-section__wrapper">
  <t-grid border="{{false}}" column-num="2" class="column-2 direction-row">
    <t-grid-item text="标题文字" second-text="说明文字">
      <image
        class="large-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题最多六字" second-text="说明文字最多八字">
      <image
        class="large-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
  </t-grid>
</view>

<view class="demo-section__desc">一行三个带说明宫格</view>
<view class="demo-section__wrapper">
  <t-grid border="{{false}}" column-num="3" class="column-3">
    <t-grid-item text="标题文字" second-text="说明文字">
      <image
        class="large-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题文字" second-text="说明文字">
      <image
        class="large-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
    <t-grid-item text="标题最多六字" second-text="说明最多六字">
      <image
        class="large-icon-image"
        src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        slot="icon"
      />
    </t-grid-item>
  </t-grid>
</view>

<view class="demo-section__desc">带徽标宫格</view>
<view class="demo-section__wrapper">
  <t-grid border="{{false}}" column-num="4" class="column-4">
    <t-grid-item text="标题文字">
      <t-badge content="···" hasSlot slot="icon">
        <image
          class="middle-icon-image"
          src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        />
      </t-badge>
    </t-grid-item>
    <t-grid-item text="标题文字">
      <t-badge count="{{16}}" hasSlot slot="icon">
        <image
          class="middle-icon-image"
          src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        />
      </t-badge>
    </t-grid-item>
    <t-grid-item text="标题文字">
      <t-badge content="New" hasSlot slot="icon">
        <image
          class="middle-icon-image"
          src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        />
      </t-badge>
    </t-grid-item>
    <t-grid-item text="标题五字内">
      <t-badge content="···" hasSlot slot="icon">
        <image
          class="middle-icon-image"
          src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        />
      </t-badge>
    </t-grid-item>
  </t-grid>
</view>
```

## API

### Grid Props

| 参数       | 说明                                                                                                       | 类型               | 默认值  | 版本 |
| ---------- | ---------------------------------------------------------------------------------------------------------- | ------------------ | ------- | ---- |
| column-num | 列数                                                                                                       | _number_           | `4`     | -    |
| gutter     | 格子两侧之间的间距，默认单位为`px`                                                                         | _string \| number_ | `0`     | -    |
| gutterType | 可选值`between`、`around`，值为`around`时，grids 两侧保留与 gutter 相等的边距，值为`between`时两侧没有边距 | _string \| number_ | `0`     | -    |
| border     | 是否显示边框                                                                                               | _boolean_          | `true`  | -    |
| center     | 是否将格子内容居中显示                                                                                     | _boolean_          | `true`  | -    |
| square     | 是否将格子固定为正方形                                                                                     | _boolean_          | `false` | -    |
| hover      | 是否开启格子点击反馈                                                                                       | _boolean_          | `false` | -    |
