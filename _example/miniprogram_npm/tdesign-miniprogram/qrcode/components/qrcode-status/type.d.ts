export interface QRCodeStatusProps {
    status?: 'active' | 'expired' | 'loading' | 'scanned';
    locale?: {
        expiredText?: string;
        refreshText?: string;
        scannedText?: string;
    };
    statusRender?: boolean;
}
