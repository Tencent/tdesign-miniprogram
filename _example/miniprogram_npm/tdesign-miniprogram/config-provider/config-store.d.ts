import ReactiveState from './reactive-state';
export declare type Locale = Record<string, any>;
declare class ConfigStore {
    currentLocale: ReactiveState<Locale>;
    themeVars: ReactiveState<Record<string, string>>;
    private _pageInitFlags;
    private _cleanupCallbacks;
    private _deepEqual;
    switchLocale(locale: Locale, componentId?: string): void;
    updateThemeVars(vars: Record<string, string>): void;
    private _getOrInitPageFlag;
    registerCleanup(componentId: string, cleanup: () => void): void;
    resetPageState(componentId?: string): void;
}
export declare const configStore: ConfigStore;
export {};
