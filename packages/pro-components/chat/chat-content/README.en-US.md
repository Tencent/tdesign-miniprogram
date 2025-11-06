
## API

### ChatContent Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
content | Object | {} | required | Y
markdown-props | Object | {options: { gfm: true, pedantic: false, breaks: true }} | \- | N
role | String | - | required。options: user/assistant/system | Y
status | String | - | options: error / '' | N
