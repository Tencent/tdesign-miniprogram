:: BASE_DOC ::

## API

### FormItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
arrow | Boolean | false | \- | N
help | String | - | \- | N
label | String | '' | \- | N
label-align | String | - | options: left/right/top | N
label-width | String / Number | - | \- | N
name | String | - | \- | N
required-mark | Boolean | true | Whether to display the required symbol (*), which has a higher priority than Form.requiredMark | N
show-error-message | Boolean | true | When the validation fails, whether to display the error message, which has a higher priority than `Form.showErrorMessage` | N
