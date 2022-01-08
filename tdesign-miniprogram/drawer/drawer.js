import TComponent from '../common/component';
const sizeKeywordMap = {
    small: '30%',
    middle: '50%',
    large: '70%',
};
TComponent({
    properties: {
        visible: Boolean,
        closeBtn: {
            type: Boolean,
            value: true,
        },
        size: {
            type: String,
            optionalTypes: [Number],
            value: 'large',
        },
        position: {
            type: String,
            value: 'left', // top | bottom | left | right
        },
        sidebar: {
            type: Array,
            value: [],
        },
    },
    data: {
        drawerSize: '',
    },
    observers: {
        size(val) {
            this._calcDrawerSize(val);
        },
    },
    attached() { },
    methods: {
        /**
         * @description size的值可传large/middle/small/300px/500px/80%/50%/120/150, 将传入的size根据不同模式做相应转换
         * @param size
         */
        _calcDrawerSize(size) {
            let drawerSize = '';
            if (typeof size === 'number') {
                drawerSize = `${size}px;`;
            }
            if (typeof size === 'string') {
                const pxReg = /[0-9]+px$/g;
                const percentReg = /[0-9]+%$/g;
                const isVerticle = this.properties.position === 'left' || this.properties.position === 'right';
                if (pxReg.test(size)) {
                    drawerSize = size;
                }
                else if (percentReg.test(size)) {
                    const val = size.replace('%', '');
                    drawerSize = isVerticle
                        ? `calc(100vw * ${Number(val) / 100})`
                        : `calc(100vh * ${Number(val) / 100})`;
                }
                else {
                    const currentVal = sizeKeywordMap[size] || '70%';
                    const val = currentVal.replace('%', '');
                    drawerSize = isVerticle
                        ? `calc(100vw * ${Number(val) / 100})`
                        : `calc(100vh * ${Number(val) / 100})`;
                }
            }
            this.setData({
                drawerSize,
            });
        },
        onClose(e) {
            this.triggerEvent('close', e);
            this.setData({
                visible: false,
            });
        },
        onClickOverlay(e) {
            this.triggerEvent('clickOverlay', e);
            this.setData({
                visible: false,
            });
        },
    },
});

//# sourceMappingURL=drawer.js.map
