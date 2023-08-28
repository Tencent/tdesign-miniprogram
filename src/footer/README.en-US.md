:: BASE_DOC ::

## API
### Footer Props

name | type | default | description | required
-- | -- | -- | -- | --
copyright | String | '' | \- | N
text | String | '' | \- | N
logo | Object | - | Typescript：`FooterLogo` `interface FooterLogo { icon: string; title?: string; titleUrl?: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/footer/type.ts) | N
text-link-list | Array | [] | Typescript：`Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/footer/type.ts) | N
links | Array | [] | Typescript：`Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/footer/type.ts) | N
theme | String | 'text' | options：text/logo | N


### CSS Variables
The component provides the following CSS variables, which can be used to customize styles.
Name | Default Value | Description 
-- | -- | --
--td-footer-link-color | @brand-color | - 
--td-footer-link-dividing-line-color | @font-gray-3 | - 
--td-footer-link-dividing-line-padding | @spacer-1 | - 
--td-footer-link-font-size | @font-size-s | - 
--td-footer-link-line-height | 40rpx | - 
--td-footer-logo-icon-height | 48rpx | - 
--td-footer-logo-icon-margin-right | @spacer | - 
--td-footer-logo-icon-width | 48rpx | - 
--td-footer-logo-title-font-size | @font-size-m | - 
--td-footer-logo-title-line-height | 48rpx | - 
--td-footer-logo-title-url-width | 256rpx | - 
--td-footer-text-color | @font-gray-3 | - 
--td-footer-text-font-size | @font-size-s | - 
--td-footer-text-line-height | 40rpx | - 
--td-footer-text-margin-top | 8rpx | - 
