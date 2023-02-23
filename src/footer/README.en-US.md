:: BASE_DOC ::

## API
### Footer Props

name | type | default | description | required
-- | -- | -- | -- | --
text | String | '' | \- | N
logo | Object | - | Typescript：`FooterLogo` `interface FooterLogo { icon: string; title?: string; titleUrl?: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/footer/type.ts) | N
links | Array | [] | Typescript：`Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/footer/type.ts) | N
