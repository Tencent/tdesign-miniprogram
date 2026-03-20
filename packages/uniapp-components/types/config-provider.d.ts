import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdConfigProviderProps } from '../config-provider/type';

export type ConfigProviderProps = ExtractNonOnProps<TdConfigProviderProps>;
export type ConfigProviderEmits = TransformEventHandlers<TdConfigProviderProps, true>;
declare const ConfigProviderComponent: import('vue').DefineComponent<ConfigProviderProps, {}, {}, {}, {}, {}, {}, ConfigProviderEmits, any>;
export default ConfigProviderComponent;
