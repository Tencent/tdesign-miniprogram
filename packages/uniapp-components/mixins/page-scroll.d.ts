interface Bus {
  on(evtName: string, listener: (...args: any[]) => void): void;
  once(evtName: string, listener: (...args: any[]) => void): void;
  emit(evtName: string, ...args: any[]): void;
  off(evtName: string, listener?: (...args: any[]) => void): void;
}

export declare const bus: Bus;
export declare const PAGE_SCROLL_EVENT_NAME: string;

declare function pageScrollMixin(
  funcName?: string,
  useBus?: boolean,
): Record<string, any>;

export default pageScrollMixin;

export declare function getScroller(el: Element, root?: Window): Element | Window;
export declare function handlePageScroll(e: any): Bus;
