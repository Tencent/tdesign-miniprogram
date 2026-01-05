import { base, skylineBase } from './base.json';
import { nav, skylineNav } from './nav.json';
import { display, skylineDisplay } from './display.json';
import { form, skylineForm } from './form.json';
import { ux, skylineUx } from './ux.json';
import { chat } from './chat.json';

const list = [chat, base, nav, form, display, ux];

const skylineList = [skylineBase, skylineNav, skylineForm, skylineDisplay, skylineUx];

export { list, skylineList };
