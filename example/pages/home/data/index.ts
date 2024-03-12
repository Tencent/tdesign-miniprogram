import { base, skylineBase } from './base';
import nav from './nav';
import display from './display';
import form from './form';
import { ux, skylineUx } from './ux';

const list = [base, nav, form, display, ux];

const skylineList = [skylineBase, skylineUx];

export { list, skylineList };
