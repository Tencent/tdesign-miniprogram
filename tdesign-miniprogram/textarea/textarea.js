var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * @Author: rileycai
 * @Date: 2021-09-22 10:33:54
 * @LastEditTime: 2021-09-28 10:26:44
 * @LastEditors: Please set LastEditors
 * @Description: 新增textarea组件
 * @FilePath: /tdesign-miniprogram/src/textarea/textarea.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength } from '../common/utils';
const { prefix } = config;
const name = `${prefix}-textarea`;
let Textarea = class Textarea extends SuperComponent {
    constructor() {
        super(...arguments);
        this.options = {
            multipleSlots: true, // 在组件定义时的选项中启用多slot支持
        };
        this.externalClasses = ['t-class', 't-class-textarea', 't-class-placeholder', 't-class-name'];
        this.properties = props;
        this.data = {
            inputValue: '',
            classPrefix: name,
            characterLength: 0,
        };
        /* 组件生命周期 */
        this.lifetimes = {
            ready() {
                this.setData({ inputValue: this.data.value });
            },
        };
        this.methods = {
            onInput(event) {
                const { value } = event.detail;
                const { maxcharacter } = this.properties;
                if (maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
                    const { characters = '', length = 0 } = getCharacterLength(value, maxcharacter);
                    this.setData({
                        value: characters,
                        characterLength: length,
                    });
                }
                else {
                    this.setData({ inputValue: value });
                }
                this.triggerEvent('change', Object.assign({}, event.detail));
            },
            onFocus(event) {
                this.triggerEvent('focus', Object.assign({}, event.detail));
            },
            onBlur(event) {
                this.triggerEvent('blur', Object.assign({}, event.detail));
            },
            onConfirm(event) {
                this.triggerEvent('enter', Object.assign({}, event.detail));
            },
            onLineChange(event) {
                this.triggerEvent('lineChange', Object.assign({}, event.detail));
            },
        };
    }
};
Textarea = __decorate([
    wxComponent()
], Textarea);
export default Textarea;

//# sourceMappingURL=textarea.js.map
