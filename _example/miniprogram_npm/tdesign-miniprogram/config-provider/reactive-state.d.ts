export default class ReactiveState<T> {
    private _value;
    private _listeners;
    constructor(initialValue: T);
    get value(): T;
    set value(newValue: T);
    subscribe(listener: (value: T) => void): () => void;
    private _notify;
}
