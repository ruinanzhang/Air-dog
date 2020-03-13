# Changelog
* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## <next>

## 4.0.0
* Updated react-select v3 in order to improve performance. See the [migrate guide](MIGRATEGUIDE.md).

## 3.6.4
* Added possibility to custom `FloatingSelectInfinite` menu list options

## 3.6.3
* Added hover background color for group heading

## 3.6.2
* Added box-shadow for menu

## 3.6.1
* Updrade `@opuscapita/oc-cm-theme` and other dependencies

## 3.6.0
* Added `customStyles` prop that is merged with default style functions
* Fixed `components` props to all exported components
* Fixed indicator icon mouseover styles
* Fixed 100% width when using flex as container
* Fix `controlHeight` prop when `isSearchable` is enabled
* Refactored demo
* Upgraded some components

## 3.5.1
* Changed disabled input's background color (from `#fff` to `#eee`)
* Replaced `@opuscapita/oc-cm-common-layouts` dependency with `@opuscapita/oc-cm-theme`

## 3.5.0
* initial Storybook stories implementation
* styled-components dependencies -> devDependencies
* Fixed a className related bug in `FloatingSelectInfinite`

## 3.4.1
* Fixed a bug where `FloatingSelectInfinite` would crash, when there were no options in the `MenuList`.

## 3.4.0
* Ditch react-window in `FloatingSelectWindowed` component, use react-infinite instead and rename the component `FloatingSelectInfinite`

## 3.3.2
* Degrade to `react-select` 2.2 to restore nonce support

## 3.3.1
* Add nonce to portal version

## 3.3.0
* Added `FloatingSelectWindowed` component, which uses `react-window` library to display large amounts of data. Implementation is based on `react-windowed-select` [component](https://github.com/bvaughn/react-window)

## 3.2.4
* Expose styles.js, so it can be used in styling of other react-select based components

## 3.2.3
* Add nonce support. Nonce is currently derived from window.NONCE_ID

## 3.2.2
* Fix multiselect styles

## 3.2.1
* Fix focused menu option styles

## 3.2.0
* Add a reference to the react-select component

## 3.1.0
* Add FloatingSelectPortal & FloatingSelectPortalCreatable component for rendering select menu into document body

## 3.0.2
* Add missing dependency `styled-components`
* Update packages

## 3.0.1
* Added z-index for dropdown menu in order to avoid react-grid header column stack over

## 3.0.0
* Updated react-select v2.0.0 in order to support grouped options
* Added controlHeight prop
* Finetuned styles
* Updated repo https://github.com/OpusCapita/react-component-template
* Removed depencency to tether which became useless after updating react-select V2.

## 2.0.1
* Removed border rounding
* Enhanced focused style: same if dropdown is open or not

## 2.0.0
* Update to react 15.6.2

## 1.1.2
* Code formatting

## 1.1.1
* Fixed overflowed content

## 1.1.0
* Added focused style

## 1.0.0
* Extracted to own repository from oc-common-ui
