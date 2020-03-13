# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## next

## 3.4.0
* Upgraded react and `@opuscapita/react-floating-select` versions

## 3.3.4
* Fixed debounce so that calculation of visible items works better
* Fixed dropdown selection highlighting border
* Added possibility to provide PropTypes.shape({}) or PropTypes.number for activeKey prop.

## 3.3.3
* Fixed event listener removal
* Added Storybook support

## 3.3.2
* Upgrade `@opuscapita/react-floating-select`

## 3.3.1
* Upgrade `@opuscapita/react-floating-select` and other packages

## 3.3.0
* Add `componentLeft` prop for custom component aligned to left
* Upgrade packages

## 3.2.2
* Fix navbar item height on IE

## 3.2.1
* Fix publish

## 3.2.0
* Add `componentRight` prop for custom component at right
* Add `className` prop for styled-components compability
* Remove getDOMNode references
* Function style refs
* Refactor code
* Upgrade `@opuscapita/react-floating-select`

## 3.1.8
* Use `@opuscapita/react-floating-select` instead of old `react-select`
* Fix select input id
* Update packages

## 3.1.7
* Updated eslint related packages
* Fix for 'showNavItemBorder' property: when false keep NavItem aligned with selected ones

## 3.1.6
* Added 'id' property to the component. Fixed HTML id values

## 3.0.6
* inactive navbar style fix

## 3.0.5
* made initial update delay configurable (default value 200ms).

## 3.0.4
* Added react-select added to dependencies

## 3.0.3
* Fix navbar height on IE
* Update @opuscapita/oc-cm-common-styles

## 3.0.2
* Fix package name to webpack config

## 3.0.1
* Changed README.md to new react component template format

## 3.0.0
* ResponsiveNavbar is changed from named export to default export
* Changed height configurable, default 40px
* Update to React 16.2
* New template and builds

## 2.0.1
* Add key attribute to buttons

## 2.0.0
* Upgrade to react 15.6.2

## 1.0.6

* Don't render combobox if items fit on navbar

## 1.0.5

* allow href to be string or number

## 1.0.2 - 1.0.4

* Calculate item widths
* Restore original margins and border widths

## 1.0.1

* Adjust bottom margin and navbar item height

## 1.0.0

* Extracted to own repository from oc-common-ui
