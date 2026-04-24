interface InlineCodeMask {
    marker: string;
    raw: string;
    text: string;
}
export declare function maskInlineCodes(markdown: string): {
    source: string;
    masks: InlineCodeMask[];
};
export declare function restoreMaskedInlineCodes(tokens: any[], masks: InlineCodeMask[]): void;
export declare function hasLeakedInlineFormatting(tokens: any[]): boolean;
export {};
