import baseData from './base.json';
import navData from './nav.json';
import displayData from './display.json';
import formData from './form.json';
import uxData from './ux.json';
import chatData from './chat.json';

const  { base, skylineBase } = baseData;
const { nav, skylineNav } = navData;
const { display, skylineDisplay } = displayData;
const { form, skylineForm } = formData;
const { ux, skylineUx } = uxData;
const { chat } = chatData;

const list = [chat, base, nav, form, display, ux];

const skylineList = [skylineBase, skylineNav, skylineForm, skylineDisplay, skylineUx];

export { list, skylineList };
