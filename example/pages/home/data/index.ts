import { base, skylineBase } from './base';
import { nav, skylineNav } from './nav';
import { display, skylineDisplay } from './display';
import { form, skylineForm } from './form';
import { ux, skylineUx } from './ux';

const list = [base, nav, form, display, ux];

const skylineList = [skylineBase, skylineNav, skylineForm, skylineDisplay, skylineUx];

export { list, skylineList };
