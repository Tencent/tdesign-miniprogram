:: BASE_DOC ::

## API

### Loading Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
delay | Number | 0 | \- | N
duration | Number | 800 | \- | N
fullscreen | Boolean | false | \- | N
indicator | Boolean | true | \- | N
inherit-color | Boolean | false | \- | N
layout | String | horizontal | options: horizontal/vertical | N
loading | Boolean | true | \- | N
pause | Boolean | false | \- | N
progress | Number | - | \- | N
reverse | Boolean | - | \- | N
size | String | '20px' | \- | N
text | String | - | \- | N
theme | String | circular | options: circular/spinner/dots/custom | N

### Loading Slots

name | Description
-- | --
\- | \-
indicator | \-
text | \-

### Loading External Classes

className | Description
-- | --
t-class | \-
t-class-indicator | \-
t-class-text | \-

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-loading-color | @brand-color | -
--td-loading-full-bg-color | rgba(255, 255, 255, 0.6) | -
--td-loading-text-color | @text-color-primary | -
--td-loading-text-font | @font-body-small | -
--td-loading-z-index | 3500 | -
