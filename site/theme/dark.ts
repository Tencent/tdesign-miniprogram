const DARK_MODE_NAME = 'dark';

const darkModeCss = `
  body {
    --td-primary-color-1: #1b2f51;
    --td-primary-color-2: #173463;
    --td-primary-color-3: #143975;
    --td-primary-color-4: #103d88;
    --td-primary-color-5: #0d429a;
    --td-primary-color-6: #054bbe;
    --td-primary-color-7: #2667d4;
    --td-primary-color-8: #4582e6;
    --td-primary-color-9: #699ef5;
    --td-primary-color-10: #96bbf8;
    --td-warning-color-1: #4f2a1d;
    --td-warning-color-2: #582f21;
    --td-warning-color-3: #733c23;
    --td-warning-color-4: #a75d2b;
    --td-warning-color-5: #cf6e2d;
    --td-warning-color-6: #dc7633;
    --td-warning-color-7: #e8935c;
    --td-warning-color-8: #ecbf91;
    --td-warning-color-9: #eed7bf;
    --td-warning-color-10: #f3e9dc;
    --td-error-color-1: #472324;
    --td-error-color-2: #5e2a2d;
    --td-error-color-3: #703439;
    --td-error-color-4: #83383e;
    --td-error-color-5: #a03f46;
    --td-error-color-6: #c64751;
    --td-error-color-7: #de6670;
    --td-error-color-8: #ec888e;
    --td-error-color-9: #edb1b6;
    --td-error-color-10: #eeced0;
    --td-success-color-1: #193a2a;
    --td-success-color-2: #1a4230;
    --td-success-color-3: #17533d;
    --td-success-color-4: #0d7a55;
    --td-success-color-5: #059465;
    --td-success-color-6: #43af8a;
    --td-success-color-7: #46bf96;
    --td-success-color-8: #80d2b6;
    --td-success-color-9: #b4e1d3;
    --td-success-color-10: #deede8;
    --td-gray-color-1: #f3f3f3;
    --td-gray-color-2: #eee;
    --td-gray-color-3: #e8e8e8;
    --td-gray-color-4: #ddd;
    --td-gray-color-5: #c6c6c6;
    --td-gray-color-6: #a6a6a6;
    --td-gray-color-7: #8b8b8b;
    --td-gray-color-8: #777;
    --td-gray-color-9: #5e5e5e;
    --td-gray-color-10: #4b4b4b;
    --td-gray-color-11: #383838;
    --td-gray-color-12: #2c2c2c;
    --td-gray-color-13: #242424;
    --td-gray-color-14: #181818;

    --td-font-white-1: rgba(255, 255, 255, 90%);
    --td-font-white-2: rgba(255, 255, 255, 60%);
    --td-font-white-3: rgba(255, 255, 255, 40%);
    --td-font-white-4: rgba(255, 255, 255, 26%);
    --td-font-gray-1: rgba(0, 0, 0, 90%);
    --td-font-gray-2: rgba(0, 0, 0, 60%);
    --td-font-gray-3: rgba(0, 0, 0, 40%);
    --td-font-gray-4: rgba(0, 0, 0, 26%);

    --td-brand-color: var(--td-brand-color-8);
    --td-warning-color: var(--td-warning-color-5);
    --td-error-color: var(--td-error-color-6);
    --td-success-color: var(--td-success-color-5);

    --td-brand-color-focus: var(--td-brand-color-1);
    --td-brand-color-active: var(--td-brand-color-9);
    --td-brand-color-disabled: var(--td-brand-color-3);
    --td-brand-color-light: var(--td-brand-color-1);
    --td-brand-color-light-active: var(--td-brand-color-2);

    --td-warning-color-focus: var(--td-warning-color-2);
    --td-warning-color-active: var(--td-warning-color-4);
    --td-warning-color-disabled: var(--td-warning-color-3);
    --td-warning-color-light: var(--td-warning-color-1);
    --td-warning-color-light-active: var(--td-warning-color-2);

    --td-error-color-focus: var(--td-error-color-2);
    --td-error-color-active: var(--td-error-color-5);
    --td-error-color-disabled: var(--td-error-color-3);
    --td-error-color-light: var(--td-error-color-1);
    --td-error-color-light-active: var(--td-error-color-2);

    --td-success-color-focus: var(--td-success-color-2);
    --td-success-color-active: var(--td-success-color-4);
    --td-success-color-disabled: var(--td-success-color-3);
    --td-success-color-light: var(--td-success-color-1);
    --td-success-color-light-active: var(--td-success-color-2);

    --td-mask-active: rgba(0, 0, 0, 40%);
    --td-mask-disabled: rgba(0, 0, 0, 60%);

    --td-bg-color-page: var(--td-gray-color-14);
    --td-bg-color-container: var(--td-gray-color-13);
    --td-bg-color-secondarycontainer: var(--td-gray-color-12);
    --td-bg-color-component: var(--td-gray-color-11);
    --td-bg-color-container-active: var(--td-gray-color-12);
    --td-bg-color-secondarycontainer-active: var(--td-gray-color-11);
    --td-bg-color-component-active: var(--td-gray-color-10);
    --td-bg-color-component-disabled: var(--td-gray-color-12);

    --td-bg-color-specialcomponent: transparent;

    --td-text-color-primary: var(--td-font-white-1);
    --td-text-color-secondary: var(--td-font-white-2);
    --td-text-color-placeholder: var(--td-font-white-3);
    --td-text-color-disabled: var(--td-font-white-4);
    --td-text-color-anti: var(--td-font-gray-1);
    --td-text-color-brand: var(--td-brand-color-8);
    --td-text-color-link: var(--td-brand-color-8);

    --td-border-level-1-color: var(--td-gray-color-11);
    --td-component-stroke: var(--td-gray-color-11);
    --td-border-level-2-color: var(--td-gray-color-9);
    --td-component-border: var(--td-gray-color-9);

    --td-shadow-1: 0 4px 6px rgba(0, 0, 0, 6%), 0 1px 10px rgba(0, 0, 0, 8%), 0 2px 4px rgba(0, 0, 0, 12%);
    --td-shadow-2: 0 8px 10px rgba(0, 0, 0, 12%), 0 3px 14px rgba(0, 0, 0, 10%), 0 5px 5px rgba(0, 0, 0, 16%);
    --td-shadow-3: 0 16px 24px rgba(0, 0, 0, 14%), 0 6px 30px rgba(0, 0, 0, 12%), 0 8px 10px rgba(0, 0, 0, 20%);

    --td-shadow-inset-top: inset 0 0.5px 0 #5e5e5e;
    --td-shadow-inset-right: inset 0.5px 0 0 #5e5e5e;
    --td-shadow-inset-bottom: inset 0 -0.5px 0 #5e5e5e;
    --td-shadow-inset-left: inset -0.5px 0 0 #5e5e5e;

    --td-table-shadow-color: rgba(0, 0, 0, 55%);

    --td-scrollbar-color: rgba(255, 255, 255, 10%);
    --td-scroll-track-color: #333;

  }
`;

const lightModeCss = `
  body {
    --td-primary-color-1: #f2f3ff;
    --td-primary-color-2: #d9e1ff;
    --td-primary-color-3: #b5c7ff;
    --td-primary-color-4: #8eabff;
    --td-primary-color-5: #618dff;
    --td-primary-color-6: #366ef4;
    --td-primary-color-7: #0052d9;
    --td-primary-color-8: #003cab;
    --td-primary-color-9: #002a7c;
    --td-primary-color-10: #001a57;

    --td-warning-color-1: #fff1e9;
    --td-warning-color-2: #ffd9c2;
    --td-warning-color-3: #ffb98c;
    --td-warning-color-4: #fa9550;
    --td-warning-color-5: #e37318;
    --td-warning-color-6: #be5a00;
    --td-warning-color-7: #954500;
    --td-warning-color-8: #713300;
    --td-warning-color-9: #532300;
    --td-warning-color-10: #3b1700;

    --td-error-color-1: #fff0ed;
    --td-error-color-2: #ffd8d2;
    --td-error-color-3: #ffb9b0;
    --td-error-color-4: #ff9285;
    --td-error-color-5: #f6685d;
    --td-error-color-6: #d54941;
    --td-error-color-7: #ad352f;
    --td-error-color-8: #881f1c;
    --td-error-color-9: #68070a;
    --td-error-color-10: #490002;

    --td-success-color-1: #e3f9e9;
    --td-success-color-2: #c6f3d7;
    --td-success-color-3: #92dab2;
    --td-success-color-4: #56c08d;
    --td-success-color-5: #2ba471;
    --td-success-color-6: #008858;
    --td-success-color-7: #006c45;
    --td-success-color-8: #005334;
    --td-success-color-9: #003b23;
    --td-success-color-10: #002515;

    --td-gray-color-1: #f3f3f3;
    --td-gray-color-2: #eeeeee;
    --td-gray-color-3: #e7e7e7;
    --td-gray-color-4: #dcdcdc;
    --td-gray-color-5: #c5c5c5;
    --td-gray-color-6: #a6a6a6;
    --td-gray-color-7: #8b8b8b;
    --td-gray-color-8: #777777;
    --td-gray-color-9: #5e5e5e;
    --td-gray-color-10: #4b4b4b;
    --td-gray-color-11: #383838;
    --td-gray-color-12: #2c2c2c;
    --td-gray-color-13: #242424;
    --td-gray-color-14: #181818;

    --td-font-white-1: rgba(255, 255, 255, 1);
    --td-font-white-2: rgba(255, 255, 255, 0.55);
    --td-font-white-3: rgba(255, 255, 255, 0.35);
    --td-font-white-4: rgba(255, 255, 255, 0.22);
    --td-font-gray-1: rgba(0, 0, 0, 0.9);
    --td-font-gray-2: rgba(0, 0, 0, 0.6);
    --td-font-gray-3: rgba(0, 0, 0, 0.4);
    --td-font-gray-4: rgba(0, 0, 0, 0.26);

    --td-brand-color: var(--td-primary-color-7);
    --td-warning-color: var(--td-warning-color-5);
    --td-error-color: var(--td-error-color-6);
    --td-success-color: var(--td-success-color-5);

    --td-brand-color-focus: var(--td-primary-color-1);
    --td-brand-color-active: var(--td-primary-color-8);
    --td-brand-color-disabled: var(--td-primary-color-3);
    --td-brand-color-light: var(--td-primary-color-1);
    --td-brand-color-light-active: var(--td-primary-color-2);

    --td-warning-color-active: var(--td-warning-color-6);
    --td-warning-color-disabled: var(--td-warning-color-3);
    --td-warning-color-focus: var(--td-warning-color-2);
    --td-warning-color-light: var(--td-warning-color-1);
    --td-warning-color-light-active: var(--td-warning-color-2);

    --td-error-color-focus: var(--td-error-color-2);
    --td-error-color-active: var(--td-error-color-7);
    --td-error-color-disabled: var(--td-error-color-3);
    --td-error-color-light: var(--td-error-color-1);
    --td-error-color-light-active: var(--td-error-color-2);

    --td-success-color-focus: var(--td-success-color-2);
    --td-success-color-active: var(--td-success-color-6);
    --td-success-color-disabled: var(--td-success-color-3);
    --td-success-color-light: var(--td-success-color-1);
    --td-success-color-light-active: var(--td-success-color-2);

    --td-mask-active: rgba(0, 0, 0, 60%);
    --td-mask-disabled: rgba(255, 255, 255, 60%);

    --td-bg-color-page: var(--td-gray-color-1);
    --td-bg-color-container: var(--td-font-white-1);
    --td-bg-color-container-active: var(--td-gray-color-3);
    --td-bg-color-secondarycontainer: var(--td-gray-color-1);
    --td-bg-color-secondarycontainer-active: var(--td-gray-color-4);
    --td-bg-color-component: var(--td-gray-color-3);
    --td-bg-color-component-active: var(--td-gray-color-6);
    --td-bg-color-component-disabled: var(--td-gray-color-2);
    --td-bg-color-secondarycomponent: var(--td-gray-color-4);
    --td-bg-color-secondarycomponent-active: var(--td-gray-color-6);

    --td-bg-color-specialcomponent: #fff;

    --td-text-color-primary: var(--td-font-gray-1);
    --td-text-color-secondary: var(--td-font-gray-2);
    --td-text-color-placeholder: var(--td-font-gray-3);
    --td-text-color-disabled: var(--td-font-gray-4);
    --td-text-color-anti: var(--td-font-white-1);
    --td-text-color-brand: var(--td-brand-color);
    --td-text-color-link: var(--td-brand-color);

    --td-border-level-1-color: var(--td-gray-color-3);
    --td-component-stroke: var(--td-gray-color-3);
    --td-border-level-2-color: var(--td-gray-color-4);
    --td-component-border: var(--td-gray-color-4);

    --td-shadow-1: 0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);
    --td-shadow-2: 0 3px 14px 2px rgba(0, 0, 0, 5%), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%);
    --td-shadow-3: 0 6px 30px 5px rgba(0, 0, 0, 5%), 0 16px 24px 2px rgba(0, 0, 0, 4%),
      0 8px 10px -5px rgba(0, 0, 0, 8%);
    --td-shadow-4: 0 2px 8px 0 rgba(0, 0, 0, 0.06);

    --td-shadow-inset-top: inset 0 0.5px 0 #dcdcdc;
    --td-shadow-inset-right: inset 0.5px 0 0 #dcdcdc;
    --td-shadow-inset-bottom: inset 0 -0.5px 0 #dcdcdc;
    --td-shadow-inset-left: inset -0.5px 0 0 #dcdcdc;

    --td-table-shadow-color: rgba(0, 0, 0, 8%);

    --td-scrollbar-color: rgba(0, 0, 0, 10%);
    --td-scrollbar-hover-color: rgba(0, 0, 0, 30%);
    --td-scroll-track-color: #fff;

  }
`;

const LIGHT_WHITE_BACKGROUND_COMPONENTS = [
  'button',
  'divider',
  'fab',
  'icon',
  'back-top',
  'drawer',
  'indexes',
  'side-bar',
  'avatar',
  'count-down',
  'empty',
  'footer',
  'image',
  'image-viewer',
  'progress',
  'result',
  'skeleton',
  'swiper',
  'tag',
  'action-sheet',
  'dialog',
  'loading',
  'notice-bar',
  'overlay',
  'popup',
  'pull-down-refresh',
  'toast',
  'guide',
];

function getCurComponentBackground() {
  const url = window.location.href;
  const lastUnderscoreIndex = url.lastIndexOf('/');
  const lastSegment = url.substring(lastUnderscoreIndex + 1);
  let backgroundCss = '';
  if (LIGHT_WHITE_BACKGROUND_COMPONENTS.includes(lastSegment)) {
    backgroundCss = 'body{ background-color: var(--td-bg-color-container); }';
  }
  return backgroundCss;
}

function getDarkStyle() {
  const curComponentBackground = getCurComponentBackground();
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.textContent = darkModeCss + curComponentBackground;
  styleElement.id = 'dark';
  return styleElement;
}

function getLightStyle() {
  const curComponentBackground = getCurComponentBackground();
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.textContent = lightModeCss + curComponentBackground;
  styleElement.id = 'light';
  return styleElement;
}

function addDarkStyle(previewIframe: any) {
  const targetNode = document.documentElement;
  const mode = targetNode.getAttribute('theme-mode');
  const iframeDom = previewIframe.contentWindow.document.documentElement;
  const darkStyleElement = previewIframe.contentWindow.document.getElementById('dark');
  const lightStyleElement = previewIframe.contentWindow.document.getElementById('light');
  // 需要重新加载不同背景的组件，所以每次都要删除重新添加
  if (lightStyleElement) {
    iframeDom.removeChild(lightStyleElement);
  }
  if (mode === DARK_MODE_NAME) {
    if (!darkStyleElement) {
      const styleElement = getDarkStyle();
      iframeDom.appendChild(styleElement);
    }
  } else {
    if (darkStyleElement) {
      iframeDom.removeChild(darkStyleElement);
    }
    // 需要重新加载不同背景的组件 #fff #f6f6f6
    const styleElement = getLightStyle();
    iframeDom.appendChild(styleElement);
  }
}

export const changeThemeMode = () => {
  const parentIframe = document.querySelector('iframe');
  let previewIframeList: any = null;
  if (parentIframe && parentIframe.contentWindow) {
    previewIframeList = parentIframe.contentWindow.document.querySelectorAll('iframe');
  }
  previewIframeList?.forEach((previewIframe: any) => {
    if (previewIframe && previewIframe.contentWindow) {
      addDarkStyle(previewIframe);
    }
  });
};

let observer: any = null;

export function watchExampleRouterChange(parentIframe: any) {
  if (observer) {
    observer.disconnect();
  }
  const targetNode = parentIframe.contentWindow.document.documentElement;
  observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation: MutationRecord) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node: any) => {
          // 检查是否为iframe元素
          if (node.tagName === 'DIV') {
            const previewIframe = node.querySelector('iframe');
            if (previewIframe) {
              previewIframe.onload = () => {
                addDarkStyle(previewIframe);
              };
            }
          }
        });
      }
    });
  });
  const config = {
    childList: true, // 观察目标节点的子节点的变化，包括添加或者删除
    subtree: true, // 观察后代节点
  };
  observer.observe(targetNode, config);
}
