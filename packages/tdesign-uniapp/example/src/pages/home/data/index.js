import baseData from './base.json';
import navData from './nav.json';
import displayData from './display.json';
import formData from './form.json';
import uxData from './ux.json';
import chatData from './chat.json';
import otherData from './other.json';

const  { base, skylineBase } = baseData;
const { nav, skylineNav } = navData;
const { display, skylineDisplay } = displayData;
const { form, skylineForm } = formData;
const { ux, skylineUx } = uxData;
const { chat } = chatData;
const { other, skylineOther } = otherData;

const list = [chat, base, nav, form, display, ux, other];

const skylineList = [skylineBase, skylineNav, skylineForm, skylineDisplay, skylineUx, skylineOther];

export { list, skylineList };
