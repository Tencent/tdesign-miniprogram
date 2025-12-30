import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdNoticeBarProps } from '../notice-bar/type';

export type NoticeBarProps = ExtractNonOnProps<TdNoticeBarProps>;
export type NoticeBarEmits = TransformEventHandlers<TdNoticeBarProps, true>;
declare const NoticeBarComponent: import('vue').DefineComponent<NoticeBarProps, {}, {}, {}, {}, {}, {}, NoticeBarEmits, any>;
export default NoticeBarComponent;
