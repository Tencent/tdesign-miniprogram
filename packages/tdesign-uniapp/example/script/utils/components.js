const { base, skylineBase } = require('../../src/pages/home/data/base.json');
const { chat, skylineChat } = require('../../src/pages/home/data/chat.json');
const { display, skylineDisplay } = require('../../src/pages/home/data/display.json');
const { form, skylineForm } = require('../../src/pages/home/data/form.json');
const { nav, skylineNav } = require('../../src/pages/home/data/nav.json');
const { other, skylineOther } = require('../../src/pages/home/data/other.json');
const { ux, skylineUx } = require('../../src/pages/home/data/ux.json');


module.exports = {
  components: {
    base,
    skylineBase,
    nav,
    skylineNav,
    display,
    skylineDisplay,
    form,
    skylineForm,
    ux,
    skylineUx,
    chat,
    skylineChat,
    other,
    skylineOther,
  },
};
