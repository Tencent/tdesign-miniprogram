:: BASE_DOC ::

## API

### ChatRecord Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
adapter | Object | - | Typescript: `Adapter` `type AdapterStartOptions = { duration: number; lang: string;}` `type AdapterStopResult = {tempFilePath: string;  duration: number;result: string;}` `type AdapterPartialResult = {result: string}` `type AdapterEventType = 'start' \| 'partial' \| 'stop' \| 'error'` `type Adapter = {    checkAuth(): Promise<boolean>;    requestAuth(): Promise<boolean>;    start(opts: AdapterStartOptions): Promise<void>;     stop(): Promise<void>;    on<E extends AdapterEventType>(event: E, cb: AdapterEventMap[E]): void;    off<E extends AdapterEventType>(event: E, cb?: AdapterEventMap[E]): void;   destroy(): void; }` `type AdapterEventMap = {  start: () => void;partial: (payload: AdapterPartialResult) => void;stop: (payload: AdapterStopResult) => void;error: (err: unknown) => void;}`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-record/type.ts) | N
auto-send | Boolean | false | \- | N
bottom-height | Number | 0 | \- | N
duration | Number | 60000 | \- | N
lang | String | zh_CN | \- | N

### ChatRecord Events

name | params | description
-- | -- | --
cancel | \- | \-
error | `(err: any)` | \-
recognize | `(context: { voicePath: string, voiceText: string, duration: number })` | \-

### ChatRecord Slots

name | Description
-- | --
speech-input | \-
speech-no-auth | \-
