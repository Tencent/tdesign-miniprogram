# Grid 宫格

### 介绍

用于功能入口布局，将页面或特定区域切分成若干等大的区块，形成若干功能入口。

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
      <t-badge content="···" slot="icon">
        <image
          class="middle-icon-image"
          src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        />
      </t-badge>
    </t-grid-item>
    <t-grid-item text="标题文字">
      <t-badge count="{{16}}" slot="icon">
        <image
          class="middle-icon-image"
          src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        />
      </t-badge>
    </t-grid-item>
    <t-grid-item text="标题文字">
      <t-badge content="New" slot="icon">
        <image
          class="middle-icon-image"
          src="https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/placeholder/quartet.svg"
        />
      </t-badge>
    </t-grid-item>
    <t-grid-item text="标题五字内">
      <t-badge content="···" slot="icon">
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

| 名称             | 类型             | 默认值       | 说明                                                                                                | 必传                                              |
| ---------------- | ---------------- | ------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------- | -------- | -------- | -------- | ------- | ----------- | --- |
| align            | String           | center       | 内容对齐方式。可选项：left/center                                                                   | N                                                 |
| border           | Boolean / Object | false        | 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式。TS 类型：`boolean | { color?: string; width?: string; style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' }` | N   |
| external-classes | Array            | -            | 组件类名，用于设置组件外层元素类名。`['t-class']`                                                   | N                                                 |
| gutter           | String / Number  | -            | 间隔大小，`justify-content` 值为 `start/center/end` 时有效                                          | N                                                 |
| hover            | Boolean          | false        | 是否开启点击反馈                                                                                    | N                                                 |
| justify-content  | String           | space-around | 间隔分布模式。可选项：space-between/space-around/start/center/end                                   | N                                                 |

### GridItem Props

| 名称             | 类型          | 默认值      | 说明                                                                                                                                  | 必传 |
| ---------------- | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| description      | String / Slot | -           | 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点                                                           | N    |
| external-classes | Array         | -           | 组件类名，分别用于设置组件外层元素、图片、文本、描述等元素类名。`['t-class', 't-class-image', 't-class-text', 't-class-description']` | N    |
| image            | String / Slot | -           | 图片，可以是图片地址，也可以自定义图片节点                                                                                            | N    |
| jump-type        | String        | navigate-to | 链接跳转类型。可选项：redirect-to/switch-tab/relaunch/navigate-to                                                                     | N    |
| text             | String / Slot | -           | 文本，可以通过 Props 传入文本，也可以自定义标题节点                                                                                   | N    |
| url              | String        | -           | 点击后的跳转链接                                                                                                                      | N    |
