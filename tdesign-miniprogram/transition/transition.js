import TComponent from '../common/component';
import config from '../common/config';
import { classNames } from '../common/utils';
const { prefix } = config;
const name = `${prefix}-transition`;
TComponent({
    options: {
        styleIsolation: 'shared',
    },
    properties: {
        visible: {
            type: Boolean,
            observer(current, prev) {
                if (this.inited && current !== prev) {
                    if (current) {
                        this.enter();
                    }
                    else {
                        this.leave();
                    }
                }
            },
        },
        destroyOnHide: Boolean,
        appear: Boolean,
        customClass: String,
        name: {
            type: String,
            value: name,
        },
        durations: {
            type: Number,
            optionalTypes: [Array],
        },
    },
    data: {
        dataVisible: false,
        transitionClass: '',
        transitionDurations: 300,
        className: '',
    },
    lifetimes: {
        created() {
            this.status = '';
            this.transitionT = 0;
        },
        attached() {
            this.setClass();
            this.durations = this.getDurations();
            if (this.data.appear && this.data.visible) {
                this.enter();
            }
            else if (this.data.visible) {
                this.setData({
                    dataVisible: true,
                });
            }
            this.inited = true;
        },
        detached() {
            clearTimeout(this.transitionT);
        },
    },
    observers: {
        'customClass, transitionClass'() {
            this.setClass();
        },
    },
    methods: {
        setClass() {
            const { customClass, transitionClass } = this.data;
            const className = classNames(customClass, transitionClass);
            this.setData({
                className,
            });
        },
        getDurations() {
            const { durations } = this.data;
            if (Array.isArray(durations)) {
                return durations.map((item) => Number(item));
            }
            return [Number(durations), Number(durations)];
        },
        enter() {
            const { name } = this.data;
            const [duration] = this.durations;
            this.status = 'entering';
            this.setData({
                transitionClass: `${name}-enter ${name}-enter-active`,
                dataVisible: true,
            });
            setTimeout(() => {
                this.setData({
                    transitionClass: `${name}-enter  ${name}-enter-active ${name}-enter-to`,
                });
            }, 30);
            if (typeof duration === 'number' && duration > 0) {
                this.transitionT = setTimeout(this.entered.bind(this), duration + 30);
            }
        },
        entered() {
            this.customDuration = false;
            clearTimeout(this.transitionT);
            this.status = 'entered';
            this.setData({
                transitionClass: '',
            });
        },
        leave() {
            const { name } = this.data;
            const [, duration] = this.durations;
            this.status = 'leaving';
            this.setData({
                transitionClass: `${name}-leave  ${name}-leave-active`,
            });
            setTimeout(() => {
                this.setData({
                    transitionClass: [`${name}-leave ${name}-leave-active ${name}-leave-to`],
                });
            }, 30);
            if (typeof duration === 'number' && duration > 0) {
                this.customDuration = true;
                this.transitionT = setTimeout(this.leaved.bind(this), duration + 30);
            }
        },
        leaved() {
            this.customDuration = false;
            clearTimeout(this.transitionT);
            this.status = 'leaved';
            this.setData({
                transitionClass: '',
                dataVisible: false,
            });
        },
        onTransitionEnd() {
            if (this.customDuration) {
                return;
            }
            clearTimeout(this.transitionT);
            if (this.status === 'entering' && this.data.visible) {
                this.entered();
            }
            else if (this.status === 'leaving' && !this.data.visible) {
                this.leaved();
            }
        },
    },
});

//# sourceMappingURL=transition.js.map
