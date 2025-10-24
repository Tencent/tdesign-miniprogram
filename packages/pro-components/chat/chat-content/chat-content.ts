import { SuperComponent, wxComponent, ComponentsOptionsType } from '../common/src/index';

@wxComponent()
export default class ChatContent extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  };

  properties = {
    content: {
      type: Object,
      value: {},
    },
    role: {
      type: String,
      value: '',
    },
  };

  data = {
    COMPONENT_NAME: 't-chat',
    textInfo: '',
  };

  observers = {
    content() {
      this.setTextInfo();
    },
  };

  methods = {
    getEscapeReplacement(ch) {
      const escapeReplacements = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      };
      return escapeReplacements[ch];
    },
    escape(html, encode = false) {
      const escapeTest = /[&<>"']/;
      const escapeReplace = new RegExp(escapeTest.source, 'g');
      const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
      const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
      if (encode) {
        if (escapeTest.test(html)) {
          return html.replace(escapeReplace, this.data.getEscapeReplacement);
        }
      } else if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, this.data.getEscapeReplacement);
      }
      return html;
    },

    setTextInfo() {
      if (this.properties.content.type === 'text') {
        this.setData({
          textInfo: this.escape(this.properties.content.data || ''),
        });
      } else {
        this.setData({
          textInfo: this.properties.content.data,
        });
      }
    },
  };

  lifetimes = {
    created() {
      this.data.getEscapeReplacement = this.getEscapeReplacement.bind(this);
      this.data.escape = this.escape.bind(this);
    },
    attached() {
      this.setTextInfo();
      const mountedFn = function __anonymous() {};
      mountedFn.call(this);
    },

    detached() {},
  };
}
