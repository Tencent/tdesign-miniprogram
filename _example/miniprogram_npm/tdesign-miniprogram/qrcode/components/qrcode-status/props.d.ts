declare const _default: {
    status: {
        type: StringConstructor;
        value: "loading" | "expired" | "scanned" | "active";
    };
    locale: {
        type: ObjectConstructor;
        value: {
            expiredText?: string;
            refreshText?: string;
            scannedText?: string;
        };
    };
    statusRender: {
        type: BooleanConstructor;
        value: boolean;
    };
};
export default _default;
