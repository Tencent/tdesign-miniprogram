import { SuperComponent } from '../common/src/index';
import { TdConfigProviderProps } from './type';
export interface ConfigProviderProps extends TdConfigProviderProps {
}
export default class ConfigProvider extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: TdConfigProviderProps;
    data: {
        prefix: string;
        classPrefix: string;
        cssVars: {};
    };
    _unsubscribeLocale?: () => void;
    _componentId?: string;
    observers: {
        'themeVars, globalConfig'(): void;
    };
    lifetimes: {
        attached(): void;
        detached(): void;
    };
    methods: {
        initStore(): void;
        updateConfig(): void;
        applyTheme(): void;
    };
}
