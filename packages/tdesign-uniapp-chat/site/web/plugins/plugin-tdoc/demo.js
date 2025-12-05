/* eslint-disable */
import path from 'path';

export default function renderDemo(md, container) {
  md.use(container, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s+([\\/.\w-]+)(\s+(.+?))?(\s+--dev)?$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const match = tokens[idx].info.trim().match(/^demo\s+([\\/.\w-]+)(\s+(.+?))?(\s+--dev)?$/);
        const [, demoPath, componentName = ''] = match;
        const demoPathOnlyLetters = demoPath.replace(/[^a-zA-Z\d]/g, '');
        const demoName = path.basename(demoPath).trim();
        const demoCodeDefName = `Demo${demoPathOnlyLetters}Code`;

        const tpl = `
          <td-doc-demo
            :code="${demoCodeDefName}"
            language="markup"
            show-code
            mode="open"
            demo-name="${demoName}"
            component-name="${componentName}"
          >
          <div slot="action">
            <Stackblitz demo-name="${demoName}" component-name="${componentName}" :code=${demoCodeDefName} />
          </div>
          </td-doc-demo>
        `;

        // eslint-disable-next-line no-param-reassign
        tokens.tttpl = tpl;

        return `<div class="tdesign-demo-wrapper tdesign-demo-item--${componentName}-${demoName} tdesign-demo-item--${componentName}">`;
      }
      if (tokens.tttpl) return `${tokens.tttpl || ''}</div>`;

      return '';
    },
  });
}
