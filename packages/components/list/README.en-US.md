:: BASE_DOC ::

## API

### List Props

name | type | default | description | required
-- | -- | -- | -- | --
async-loading | String / Slot | - | Custom loading content. Empty value hides loading content. `'loading'` shows loading state. `'load-more'` shows load-more state. Slot value customizes loading content | N
footer | String | - | Footer | N
header | String | - | Header | N

### List Events

name | params | description
-- | -- | --
load-more | \- | \-
scroll | `(bottomDistance: number, scrollTop: number)` | Triggered when the list scrolls. bottomDistance means the distance from the bottom; scrollTop means the scroll distance from the top

### List Slots

name | Description
-- | --
async-loading | Custom `async-loading` content
footer | Custom `footer` content
header | Custom `header` content

### List External Classes

class | description
-- | --
t-class | Root class
t-class-loading | Loading state class
