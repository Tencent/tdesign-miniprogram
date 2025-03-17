const CUSTOM_THEME_ID = 'custom-theme';
const CUSTOM_THEME_DARK_ID = 'custom-dark-theme';

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
    backgroundCss = 'background-color: var(--td-bg-color-container);';
  }
  return backgroundCss;
}

/**
 * 提取 td-theme-generator 样式中的 --td 变量
 */
function getTdToken() {
  const isDark = document.documentElement.getAttribute('theme-mode') === 'dark';

  const styleId = isDark ? CUSTOM_THEME_DARK_ID : CUSTOM_THEME_ID;
  const customStyle = document.getElementById(styleId)?.textContent || '';

  const tdVariables = customStyle.match(/--td-[^;]+;/g);
  return tdVariables ? tdVariables.join('\n') : '';
}

/**
 * 更新 iframe 内部的主题样式
 */
function updateIframeStyle(previewIframe: HTMLIFrameElement) {
  const document = previewIframe.contentWindow?.document;
  if (!document) return;

  let customStyleEl = document.getElementById(CUSTOM_THEME_ID);

  if (!customStyleEl) {
    const style = document.createElement('style');
    style.id = CUSTOM_THEME_ID;
    style.type = 'text/css';
    document.documentElement.appendChild(style);
    customStyleEl = style;
  }

  const styleStr = `body {\n${getTdToken()} ${getCurComponentBackground()}\n}`;
  customStyleEl.textContent = styleStr;
}

export const changeThemeMode = () => {
  const parentIframe = document.querySelector('iframe');
  let previewIframeList: any = null;
  if (parentIframe && parentIframe.contentWindow) {
    previewIframeList = parentIframe.contentWindow.document.querySelectorAll('iframe');
  }
  previewIframeList?.forEach((previewIframe: any) => {
    if (previewIframe && previewIframe.contentWindow) {
      updateIframeStyle(previewIframe);
    }
  });
};

let iframeObserver: MutationObserver | null = null;
export function watchExampleRouterChange(parentIframe: any) {
  if (iframeObserver) {
    iframeObserver.disconnect();
  }

  iframeObserver = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation: MutationRecord) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node: any) => {
          // 检查是否为iframe元素
          if (node.tagName === 'DIV') {
            const previewIframe = node.querySelector('iframe');
            if (previewIframe) {
              previewIframe.onload = () => {
                updateIframeStyle(previewIframe);
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

  const targetNode = parentIframe.contentWindow.document.documentElement;
  iframeObserver.observe(targetNode, config);
}

let styleObserver: MutationObserver | null = null;
export function watchThemeColorChange() {
  if (styleObserver) {
    styleObserver.disconnect();
  }

  styleObserver = new MutationObserver(() => {
    changeThemeMode();
  });

  styleObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['style', 'theme-mode'],
  });
}
