---
title: ChatRecord
description: A component for displaying chat conversation history with features like time grouping, scroll loading, and message interactions.
spline: base
isComponent: true
---

## Import

For global import, configure in `app.json` in the miniprogram root directory. For local import, configure in the `index.json` of the page or component where you need to import.

```json
"usingComponents": {
  "t-chat-record": "tdesign-miniprogram/chat-record/chat-record"
}
```

## Usage

### 01 Component Types

#### Basic Type

Display a basic chat record list.

```xml
<t-chat-record records="{{records}}" />
```

#### With Time Grouping

Support automatic time grouping display based on time intervals.

```xml
<t-chat-record 
  records="{{records}}" 
  show-time-group="{{true}}"
  time-group-interval="{{5}}"
/>
```

#### Scroll Load More

Support loading more history when scrolling to the top.

```xml
<t-chat-record 
  records="{{records}}"
  loading="{{loading}}"
  finished="{{finished}}"
  bind:loadmore="handleLoadMore"
/>
```

#### Custom Message Rendering

Support custom message rendering through slots.

```xml
<t-chat-record records="{{records}}">
  <view slot="message" slot-scope="record">
    <!-- Custom message content -->
  </view>
</t-chat-record>
```

## API

### ChatRecord Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
auto-send | Boolean | false | \- | N
bottom-height | Number | 0 | \- | N
duration | Number | 60000 | \- | N
lang | String | zh_CN | \- | N

### ChatRecord Events

name | params | description
-- | -- | --
cancel | \- | \-
error | `(err: any)` | \-
recognize | `(detail: { voicePath: string, voiceText: string, duration: number })` | \-

### ChatRecord Slots

name | Description
-- | --
speech-input | \-
speech-no-auth | \-
