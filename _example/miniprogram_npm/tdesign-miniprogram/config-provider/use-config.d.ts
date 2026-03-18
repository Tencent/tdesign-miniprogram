export declare function getComponentLocale<T extends Record<string, any>>(component: any, componentName: string, defaultLocale: T, localePropName?: string): T;
export declare function useConfig(componentName: string): {
    getLocale<T extends Record<string, any>>(defaultLocale: T, component: any): T;
    subscribeLocale(component: any, callback: (locale: Record<string, any>) => void): () => void;
};
