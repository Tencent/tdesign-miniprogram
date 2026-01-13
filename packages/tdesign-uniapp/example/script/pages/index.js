const {
  components,
} = require('../utils/components.js');
const path = require('path');
const pagesJson = path.resolve(__dirname, '../../src/pages.json');
const { writeFileSync, readFileSync, hyphenate } = require('t-comm');
const { DEFAULT_PAGES, SHOW_SKYLINE_PAGES } = require('./config');


const {
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
} = components;

const getComponentPages = (list,  isSkyline) => list.reduce((acc, item) => [
  ...acc,
  ...(item.childArr || []).filter(page => !page.hide),
], [])
  .map((item) => {
    const name = hyphenate(item.name);
    const pagePathBaseComponent = `pages-more/${isSkyline ? `${name}/skyline` : `${name}`}/${name}`;
    const { path } = item;
    return {
      name,
      path: path ? path.replace(/^\//, '') : pagePathBaseComponent,
    };
  });

function main() {
  const list = [
    base,
    nav,
    form,
    display,
  ];

  const skylineList = SHOW_SKYLINE_PAGES ? [
    skylineChat,
    skylineBase,
    skylineNav,
    skylineForm,
    skylineDisplay,
    skylineUx,
  ] : [];

  const componentPages = getComponentPages(list, false);
  const skylinePages = getComponentPages(skylineList, true);

  const rawData = readFileSync(pagesJson, true);
  rawData.pages = [
    ...DEFAULT_PAGES,
    ...componentPages.map(item => ({
      path: item.path,
    })),
    ...skylinePages.map(item => ({
      path: item.path,
      style: {
        renderer: 'skyline',
        componentFramework: 'glass-easel',
      },
    })),
  ];
  const getSubPackages = info => info.childArr.map((item) => {
    const camelName = hyphenate(item.name);
    return {
      root: `pages-more/${camelName}`,
      pages: [
        {
          path: camelName,
        },
      ],
    };
  });
  rawData.subPackages = [
    ...getSubPackages(ux),
    ...getSubPackages(chat),
  ];

  rawData.condition = {
    current: 0,
    list: [
      ...componentPages.map(item => ({
        name: item.name,
        pathName: item.path,
      })),
      ...rawData.subPackages.reduce((acc, item) => [
        ...acc,
        ...item.pages.map(page => ({
          name: page.path,
          pathName: `${item.root}/${page.path}`,
        })),
      ], []),
    ],
  };

  rawData.preloadRule = {
    'pages/home/home': {
      network: 'all',
      packages: [
        ...getSubPackages(ux),
        ...getSubPackages(chat),
      ].map(item => item.root),
    },
  };

  writeFileSync(pagesJson, `${JSON.stringify(rawData, null, 2)}\n`, false);
  console.log('[pages.json] Wrote!');
}

main();
