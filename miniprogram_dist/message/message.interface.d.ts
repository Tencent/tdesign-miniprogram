export declare enum MessageType {
    info = "info",
    success = "success",
    warning = "warning",
    error = "error"
}
export interface MessageMarquee {
    speed?: number;
    loop?: number;
    delay?: number;
}
export interface MessageProps {
    visible?: boolean;
    content: string;
    align?: string;
    theme?: MessageType;
    icon?: boolean | string;
    closeBtn?: boolean;
    action?: string;
    marquee?: MessageMarquee;
    offset?: object;
    duration?: number;
    zIndex?: number;
}
