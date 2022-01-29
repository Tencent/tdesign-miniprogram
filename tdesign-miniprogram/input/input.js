var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * @Author: rileycai
 * @Date: 2021-09-21 19:10:10
 * @LastEditTime: 2021-09-28 10:26:57
 * @LastEditors: Please set LastEditors
 * @Description: textarea从input组件拆分出去
 * @FilePath: /tdesign-miniprogram/src/input/input.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getCharacterLength } from '../common/utils';
const { prefix } = config;
const name = `${prefix}-input`;
let Input = class Input extends SuperComponent {
    constructor() {
        super(...arguments);
        this.options = {
            multipleSlots: true, // 在组件定义时的选项中启用多slot支持
        };
        this.externalClasses = ['t-class', 't-class-input', 't-class-placeholder', 't-class-error-msg'];
        this.properties = props;
        this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        this.data = {
            classPrefix: name,
            classBasePrefix: prefix,
            characterLength: 0,
        };
        this.methods = {
            onInput(event) {
                const { value } = event.detail;
                const { maxcharacter } = this.properties;
                if (maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
                    const { characters = '', length = 0 } = getCharacterLength(value, maxcharacter);
                    this._trigger('change', { value: characters });
                    this.setData({
                        characterLength: length,
                    });
                }
                else {
                    this._trigger('change', { value });
                }
            },
            onFocus(event) {
                this.triggerEvent('focus', event.detail);
            },
            onBlur(event) {
                this.triggerEvent('blur', event.detail);
            },
            onConfirm(event) {
                this.triggerEvent('enter', event.detail);
            },
            clearInput(event) {
                this.triggerEvent('clear', event.detail);
                this._trigger('change', { value: '' });
            },
        };
    }
};
Input = __decorate([
    wxComponent()
], Input);
export default Input;

//# sourceMappingURL=input.js.map
