# react-responsive-navbar

### Description
Navbar component that moves the navbar items to a dropdown, if they do not fit in the content area.

### Installation
```
npm install @opuscapita/react-responsive-navbar
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-responsive-navbar)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name          | Type                         | Default             | Description                                 |
| ------------------ | ---------------------------- | ------------------- | ------------------------------------------- |
| id                 | string                       | 'responsive-navbar' | Custom ID prefix                            |
| className          | string                       |                     | Custon className                            |
| activeKey          | number || object             | required            | Navbar item to be active initially          |
| list               | array of object (name, href) | required            | List of navbar items                        |
| showNavItemBorder  | boolean                      | false               | show bottom-border below navbar items       |
| showNavItemTooltip | boolean                      | true                | enables tooltips for nav items              |
| tooltipDelay       | number                       | 2000                | delay before tooltip becomes visible        |
| fontSize           | string                       | 'inherit'           | override for fontSize                       |
| fontWeight         | string                       | 'inherit'           | override for fontWeight                     |
| placeholder        | string                       | 'more...'           | override for placeholder text               |
| height             | string                       | 40px                | override for height                         |
| height             | string                       | 40px                | override for height                         |
| onSelect           | function                     |                     | Callback fired when the active item changes |
| componentLeft      | node                         |                     | Custom component aligned to left            |
| componentRight     | node                         |                     | Custom component aligned to right           |

### Code example
```jsx
import ResponsiveNavbar from '@opuscapita/react-responsive-navbar';

const ResponsiveNavbarView = (props) => {
  const list = [
    { name: 'Item 1', href: '/item1' },
    { name: 'Item 2', href: '/item2' },
  ];

  const activeKey = 2;

  return (
    <ResponsiveNavbar
      activeKey={activeKey}
      list={list}
      onSelect={(href) => { props.router.push(href); }}
    />
  );
};

export default withRouter(ResponsiveNavbarView);
```
