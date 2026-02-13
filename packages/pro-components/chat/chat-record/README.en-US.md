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

Name | Type | Default | Description | Required
-- | -- | -- | -- | --
style | Object | - | Style | N
custom-style | Object | - | Style, generally used for virtualized component node scenarios | N
records | Array | [] | Chat record data list. TS Type: `ChatRecordItem[]` | N
loading | Boolean | false | Whether to show loading state | N
finished | Boolean | false | Whether all data has been loaded | N
loading-text | String | Loading... | Loading prompt text | N
finished-text | String | No more data | Finished loading prompt text | N
empty-text | String | No chat records | Empty state prompt text | N
show-time-group | Boolean | true | Whether to show time grouping | N
time-group-interval | Number | 5 | Time grouping interval (minutes) | N
virtual-scroll | Boolean | false | Whether to enable virtual scrolling | N
scroll-view-height | String | 100vh | Scroll view height | N
auto-scroll-to-bottom | Boolean | true | Whether to auto scroll to bottom | N

### ChatRecord Events

Name | Parameters | Description
-- | -- | --
loadmore | - | Triggered when scrolling to the top, used to load more history
scroll | `(detail: ScrollDetail)` | Triggered when scrolling
message-click | `(detail: { record: ChatRecordItem })` | Triggered when clicking a message
message-long-press | `(detail: { record: ChatRecordItem })` | Triggered when long-pressing a message

### ChatRecord Slots

Name | Description
-- | --
empty | Custom empty state content
message | Custom message content, receives record parameter

### ChatRecord External Style Classes

Class Name | Description
-- | --
t-class | Root node style class
t-class-empty | Empty state style class
t-class-time | Time grouping style class
t-class-message | Message item style class
