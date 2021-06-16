import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-footer`;

// 页脚展示类型有两种，文本或图标，默认值为文本。
type FooterType = 'text' | 'logo';

// openType合法值
type OpenTypeVal = 'navigate' | 'redirect' | 'relaunch' | 'switchTab' | 'navigateBack';

interface LinkObj {
  name: string;
  url: string;
  openType: OpenTypeVal;
}

@wxComponent()
export default class SwiperCell extends SuperComponent {
  properties = {
    type: {
      type: String,
      value: 'logo' as FooterType,
    },
    textCopyrightInfo: {
      type: String,
      value: '',
    },
    textLinkList: {
      type: Array,
      value: [] as LinkObj[],
    },
    logoIconUrl: {
      type: String,
      value: ``,
    },
    logoTitle: {
      type: String,
      value: '',
    },
    logoTitleUrl: {
      type: String,
      value: ``,
    },
  };
  data = {
    classPrefix: name,
  };
}
