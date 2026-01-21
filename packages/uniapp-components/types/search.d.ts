import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdSearchProps } from '../search/type';

export type SearchProps = ExtractNonOnProps<TdSearchProps>;
export type SearchEmits = TransformEventHandlers<TdSearchProps, true>;
declare const SearchComponent: import('vue').DefineComponent<SearchProps, {}, {}, {}, {}, {}, {}, SearchEmits, any>;
export default SearchComponent;
