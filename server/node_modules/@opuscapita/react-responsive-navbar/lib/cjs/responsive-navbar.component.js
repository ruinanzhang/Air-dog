'use strict';

exports.__esModule = true;
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class, _temp; /* eslint-disable react/no-find-dom-node */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFloatingSelect = require('@opuscapita/react-floating-select');

var _reactBootstrap = require('react-bootstrap');

var _debounce = require('debounce');

require('./responsive-navbar.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveNavbar = (_temp = _class = function (_React$PureComponent) {
  _inherits(ResponsiveNavbar, _React$PureComponent);

  function ResponsiveNavbar(props) {
    _classCallCheck(this, ResponsiveNavbar);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.state = {
      isSelectVisible: false,
      lastVisibleItemIndex: -2
    };

    _this.getLastVisibleItemIndex = function () {
      var navBarWidth = _this.navbarContainerRef ? _this.navbarContainerRef.offsetWidth : 0;
      var selectWidth = _this.selectContainerRef ? _this.selectContainerRef.offsetWidth : 0;
      var componentLeftWidth = _this.componentLeftContainerRef ? _this.componentLeftContainerRef.offsetWidth : 0; // eslint-disable-line
      var componentRightWidth = _this.componentRightContainerRef ? _this.componentRightContainerRef.offsetWidth : 0; // eslint-disable-line

      var remainingWidth = navBarWidth - selectWidth - componentLeftWidth - componentRightWidth;
      var lastVisible = 0;

      for (var i = 0; i < _this.props.list.length; i += 1) {
        remainingWidth -= _this.itemWidths[i];
        if (remainingWidth < 0) {
          lastVisible -= 1;
          break;
        }
        lastVisible += 1;
      }

      return lastVisible;
    };

    _this.handleResize = function () {
      return (0, _debounce.debounce)(_this.refreshLastVisibleItem(), 300);
    };

    _this.refreshLastVisibleItem = function () {
      var lastVisibleItemIndex = _this.getLastVisibleItemIndex();
      if (_this.state.lastVisibleItemIndex !== lastVisibleItemIndex) {
        _this.setState({
          isSelectVisible: _this.props.list.length > lastVisibleItemIndex + 1,
          lastVisibleItemIndex: lastVisibleItemIndex
        });
      }
    };

    _this.tooltipWrapper = function (node, index, tooltipContent) {
      var tooltip = _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: 'tooltip' },
        tooltipContent
      );
      return !_this.props.showNavItemTooltip ? node : _react2.default.createElement(
        _reactBootstrap.OverlayTrigger,
        { placement: 'bottom', key: index, overlay: tooltip, delayShow: _this.props.tooltipDelay },
        node
      );
    };

    _this.handleOnChange = function (value) {
      _this.props.onSelect(value);
    };

    _this.handleOnClick = function (href) {
      return function () {
        _this.props.onSelect(href);
      };
    };

    _this.navbarItem = function (item, index, className) {
      var _this$props = _this.props,
          activeKey = _this$props.activeKey,
          fontWeight = _this$props.fontWeight,
          fontSize = _this$props.fontSize,
          height = _this$props.height;

      // resolve activeKeyIndex

      var activeKeyIndex = activeKey;
      if ((typeof activeKey === 'undefined' ? 'undefined' : _typeof(activeKey)) === 'object') {
        activeKeyIndex = _this.activeItemIndex(activeKey);
      }
      return _react2.default.createElement(
        'button',
        {
          className: index === activeKeyIndex ? className + ' selected-border' : '' + className,
          style: { fontWeight: fontWeight, fontSize: fontSize, minHeight: height },
          id: item.id || 'navItem' + String(index),
          key: item.id || 'navitem' + String(index),
          onClick: _this.handleOnClick(item.href),
          ref: function ref(r) {
            if (r && !_this.itemWidths[index]) _this.itemWidths[index] = r.offsetWidth;
          }
        },
        _react2.default.createElement(
          'span',
          { className: 'responsive-navbar-item-text' },
          item.name
        )
      );
    };

    _this.doLineCount = function () {
      var list = _this.props.list;

      return list.some(function (item) {
        return typeof item.name !== 'string';
      });
    };

    _this.navbar = function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          list = _this$props2.list,
          showNavItemBorder = _this$props2.showNavItemBorder,
          height = _this$props2.height;

      var visibleList = _this.state.lastVisibleItemIndex > -2 ? list.slice(0, _this.state.lastVisibleItemIndex + 1) : list;
      var itemClassName = showNavItemBorder ? 'responsive-navbar-item inactive-border' : 'responsive-navbar-item no-item-border';
      var items = visibleList.map(function (item, index) {
        return _this.tooltipWrapper(_this.navbarItem(item, index, itemClassName), index, item.name);
      });
      var lineCount = _this.doLineCount();
      var navbarStyle = {
        minHeight: height
      };
      if (height.slice(-2) === 'px' && lineCount) {
        var heightPx = parseInt(height.slice(0, -2), 10);
        navbarStyle.lineHeight = heightPx - 4 + 'px';
      }
      return _react2.default.createElement(
        'div',
        {
          id: id + '-container',
          ref: function ref(r) {
            _this.navbarContainerRef = r;
          },
          className: 'responsive-navbar-container ' + className,
          style: navbarStyle
        },
        items,
        _this.combobox(),
        _this.componentLeft(),
        _this.componentRight()
      );
    };

    _this.resolveActiveItemFromOptions = function (selectOptions) {
      var activeKey = _this.props.activeKey;

      var activeItem = selectOptions.find(function (opts) {
        return opts.value === activeKey;
      });
      if (!activeItem) {
        activeItem = selectOptions.find(function (opts) {
          return opts.value === activeKey.value;
        });
      }
      return activeItem;
    };

    _this.activeItemIndex = function (activeItem) {
      var list = _this.props.list;

      if (!activeItem) return null;
      return list.findIndex(function (item) {
        return item.href === activeItem.value;
      });
    };

    _this.combobox = function () {
      var _this$props3 = _this.props,
          id = _this$props3.id,
          list = _this$props3.list,
          fontSize = _this$props3.fontSize,
          fontWeight = _this$props3.fontWeight,
          placeholder = _this$props3.placeholder,
          showNavItemBorder = _this$props3.showNavItemBorder;

      if (!_this.state.isSelectVisible) {
        // return null if all nav items are visible
        return null;
      }

      // slice nav items list and show invisible items in the combobox
      var navList = _this.state.lastVisibleItemIndex > -2 ? list.slice(_this.state.lastVisibleItemIndex + 1) : list;
      var selectOptions = navList.map(function (item) {
        return {
          value: item.href,
          label: item.name
        };
      });
      var lineCountNeeded = _this.doLineCount();
      var customLineCount = lineCountNeeded ? 'line-count' : '';
      var customBorderClass = lineCountNeeded ? 'selected-border line-count' : 'selected-border';
      var customInactiveBorder = lineCountNeeded ? 'inactive-border line-count' : 'inactive-border';
      var inactiveBorder = showNavItemBorder ? customInactiveBorder : customLineCount;
      // Resolve activeItem
      var activeItem = _this.resolveActiveItemFromOptions(selectOptions);
      var activeItemIndex = _this.activeItemIndex(activeItem);
      var borderClass = activeItemIndex >= _this.state.lastVisibleItemIndex + 1 ? customBorderClass : inactiveBorder; // eslint-disable-line

      return _react2.default.createElement(
        'div',
        {
          id: id + '-select',
          className: 'responsive-navbar-select ' + borderClass,
          style: { fontWeight: fontWeight, fontSize: fontSize },
          ref: function ref(r) {
            _this.selectContainerRef = r;
          }
        },
        _react2.default.createElement(_reactFloatingSelect.FloatingSelect, {
          name: id + '-select-component',
          value: activeItem || '',
          isClearable: false,
          placeholder: placeholder,
          options: selectOptions,
          onChange: _this.handleOnChange
        })
      );
    };

    _this.componentLeft = function () {
      var componentLeft = _this.props.componentLeft;

      if (!componentLeft) return null;
      return _react2.default.createElement(
        'div',
        {
          className: 'responsive-navbar-container-left',
          ref: function ref(r) {
            _this.componentLeftContainerRef = r;
          }
        },
        componentLeft
      );
    };

    _this.componentRight = function () {
      var componentRight = _this.props.componentRight;

      if (!componentRight) return null;
      return _react2.default.createElement(
        'div',
        {
          className: 'responsive-navbar-container-right',
          ref: function ref(r) {
            _this.componentRightContainerRef = r;
          }
        },
        componentRight
      );
    };

    _this.itemWidths = []; // store item widths here, they don't change
    return _this;
  }

  ResponsiveNavbar.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('orientationchange', this.refreshLastVisibleItem); // for mobile support
    this.refreshLastVisibleItem();
  };

  ResponsiveNavbar.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Refresh visible items if values change
    if (this.state.isSelectVisible !== prevState.isSelectVisible || this.state.lastVisibleItemIndex !== prevState.lastVisibleItemIndex) {
      this.refreshLastVisibleItem();
    }
  };

  ResponsiveNavbar.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('orientationchange', this.refreshLastVisibleItem); // for mobile support
  };

  // Handle react-select onChange


  // Handle navbar onClick


  // Render navbar item


  // Render navbar


  // Render combobox, when all items do not fit


  // Render custom left side component


  // Render custom right side component


  ResponsiveNavbar.prototype.render = function render() {
    return this.navbar();
  };

  return ResponsiveNavbar;
}(_react2.default.PureComponent), _class.defaultProps = {
  id: 'responsive-navbar',
  className: '',
  onSelect: function onSelect() {},
  showNavItemBorder: false,
  showNavItemTooltip: true,
  tooltipDelay: 2000,
  fontSize: 'inherit',
  fontWeight: 'inherit',
  placeholder: 'more...',
  height: '40px',
  componentLeft: null,
  componentRight: null
}, _temp);
exports.default = ResponsiveNavbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLW5hdmJhci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlc3BvbnNpdmVOYXZiYXIiLCJwcm9wcyIsInN0YXRlIiwiaXNTZWxlY3RWaXNpYmxlIiwibGFzdFZpc2libGVJdGVtSW5kZXgiLCJnZXRMYXN0VmlzaWJsZUl0ZW1JbmRleCIsIm5hdkJhcldpZHRoIiwibmF2YmFyQ29udGFpbmVyUmVmIiwib2Zmc2V0V2lkdGgiLCJzZWxlY3RXaWR0aCIsInNlbGVjdENvbnRhaW5lclJlZiIsImNvbXBvbmVudExlZnRXaWR0aCIsImNvbXBvbmVudExlZnRDb250YWluZXJSZWYiLCJjb21wb25lbnRSaWdodFdpZHRoIiwiY29tcG9uZW50UmlnaHRDb250YWluZXJSZWYiLCJyZW1haW5pbmdXaWR0aCIsImxhc3RWaXNpYmxlIiwiaSIsImxpc3QiLCJsZW5ndGgiLCJpdGVtV2lkdGhzIiwiaGFuZGxlUmVzaXplIiwicmVmcmVzaExhc3RWaXNpYmxlSXRlbSIsInNldFN0YXRlIiwidG9vbHRpcFdyYXBwZXIiLCJub2RlIiwiaW5kZXgiLCJ0b29sdGlwQ29udGVudCIsInRvb2x0aXAiLCJzaG93TmF2SXRlbVRvb2x0aXAiLCJ0b29sdGlwRGVsYXkiLCJoYW5kbGVPbkNoYW5nZSIsInZhbHVlIiwib25TZWxlY3QiLCJoYW5kbGVPbkNsaWNrIiwiaHJlZiIsIm5hdmJhckl0ZW0iLCJpdGVtIiwiY2xhc3NOYW1lIiwiYWN0aXZlS2V5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiaGVpZ2h0IiwiYWN0aXZlS2V5SW5kZXgiLCJhY3RpdmVJdGVtSW5kZXgiLCJtaW5IZWlnaHQiLCJpZCIsIlN0cmluZyIsInIiLCJuYW1lIiwiZG9MaW5lQ291bnQiLCJzb21lIiwibmF2YmFyIiwic2hvd05hdkl0ZW1Cb3JkZXIiLCJ2aXNpYmxlTGlzdCIsInNsaWNlIiwiaXRlbUNsYXNzTmFtZSIsIml0ZW1zIiwibWFwIiwibGluZUNvdW50IiwibmF2YmFyU3R5bGUiLCJoZWlnaHRQeCIsInBhcnNlSW50IiwibGluZUhlaWdodCIsImNvbWJvYm94IiwiY29tcG9uZW50TGVmdCIsImNvbXBvbmVudFJpZ2h0IiwicmVzb2x2ZUFjdGl2ZUl0ZW1Gcm9tT3B0aW9ucyIsInNlbGVjdE9wdGlvbnMiLCJhY3RpdmVJdGVtIiwiZmluZCIsIm9wdHMiLCJmaW5kSW5kZXgiLCJwbGFjZWhvbGRlciIsIm5hdkxpc3QiLCJsYWJlbCIsImxpbmVDb3VudE5lZWRlZCIsImN1c3RvbUxpbmVDb3VudCIsImN1c3RvbUJvcmRlckNsYXNzIiwiY3VzdG9tSW5hY3RpdmVCb3JkZXIiLCJpbmFjdGl2ZUJvcmRlciIsImJvcmRlckNsYXNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O21CQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7QUF1Q25CLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBS25CQyxLQUxtQixHQUtYO0FBQ05DLHVCQUFpQixLQURYO0FBRU5DLDRCQUFzQixDQUFDO0FBRmpCLEtBTFc7O0FBQUEsVUErQm5CQyx1QkEvQm1CLEdBK0JPLFlBQU07QUFDOUIsVUFBTUMsY0FBYyxNQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkMsV0FBbEQsR0FBZ0UsQ0FBcEY7QUFDQSxVQUFNQyxjQUFjLE1BQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRixXQUFsRCxHQUFnRSxDQUFwRjtB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dUI7QUFDckJMLFdBQU9NLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtwRSxZQUExQztBQUNBOEQsV0FBT00sbUJBQVAsQ0FBMkIsbUJBQTNCLEVBQWdELEtBQUtuRSxzQkFBckQsRUFGcUIsQ0FFeUQ7QUFDL0UsRzs7QUEyQ0Q7OztBQUtBOzs7QUFLQTs7O0FBbUNBOzs7QUF3REE7OztBQW1EQTs7O0FBY0E7Ozs2QkFjQW9FLE0scUJBQVM7QUFDUCxXQUFPLEtBQUt0QyxNQUFMLEVBQVA7QUFDRCxHOzs7RUFyUzJDdUMsZ0JBQU1DLGEsVUF3QjNDQyxZLEdBQWU7QUFDcEIvQyxNQUFJLG1CQURnQjtBQUVwQlIsYUFBVyxFQUZTO0FBR3BCTCxZQUFVLG9CQUFNLENBQUUsQ0FIRTtBQUlwQm9CLHFCQUFtQixLQUpDO0FBS3BCeEIsc0JBQW9CLElBTEE7QUFNcEJDLGdCQUFjLElBTk07QUFPcEJXLFlBQVUsU0FQVTtBQVFwQkQsY0FBWSxTQVJRO0FBU3BCaUMsZUFBYSxTQVRPO0FBVXBCL0IsVUFBUSxNQVZZO0FBV3BCdUIsaUJBQWUsSUFYSztBQVlwQkMsa0JBQWdCO0FBWkksQztrQkF4QkhsRSxnQiIsImZpbGUiOiJyZXNwb25zaXZlLW5hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1maW5kLWRvbS1ub2RlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZsb2F0aW5nU2VsZWN0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZmxvYXRpbmctc2VsZWN0JztcbmltcG9ydCB7IE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnZGVib3VuY2UnO1xuXG5pbXBvcnQgJy4vcmVzcG9uc2l2ZS1uYXZiYXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmVOYXZiYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd05hdkl0ZW1Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dOYXZJdGVtVG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9vbHRpcERlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGZvbnRTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvbnRXZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc2hhcGUoe30pLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5ub2RlLFxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICB9KSkuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbXBvbmVudExlZnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIGNvbXBvbmVudFJpZ2h0OiBQcm9wVHlwZXMubm9kZSxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6ICdyZXNwb25zaXZlLW5hdmJhcicsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgc2hvd05hdkl0ZW1Cb3JkZXI6IGZhbHNlLFxuICAgIHNob3dOYXZJdGVtVG9vbHRpcDogdHJ1ZSxcbiAgICB0b29sdGlwRGVsYXk6IDIwMDAsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICBmb250V2VpZ2h0OiAnaW5oZXJpdCcsXG4gICAgcGxhY2Vob2xkZXI6ICdtb3JlLi4uJyxcbiAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICBjb21wb25lbnRMZWZ0OiBudWxsLFxuICAgIGNvbXBvbmVudFJpZ2h0OiBudWxsLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5pdGVtV2lkdGhzID0gW107IC8vIHN0b3JlIGl0ZW0gd2lkdGhzIGhlcmUsIHRoZXkgZG9uJ3QgY2hhbmdlXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpc1NlbGVjdFZpc2libGU6IGZhbHNlLFxuICAgIGxhc3RWaXNpYmxlSXRlbUluZGV4OiAtMixcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaExhc3RWaXNpYmxlSXRlbSk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIHRoaXMucmVmcmVzaExhc3RWaXNpYmxlSXRlbSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gUmVmcmVzaCB2aXNpYmxlIGl0ZW1zIGlmIHZhbHVlcyBjaGFuZ2VcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXRlLmlzU2VsZWN0VmlzaWJsZSAhPT0gcHJldlN0YXRlLmlzU2VsZWN0VmlzaWJsZSB8fFxuICAgICAgdGhpcy5zdGF0ZS5sYXN0VmlzaWJsZUl0ZW1JbmRleCAhPT0gcHJldlN0YXRlLmxhc3RWaXNpYmxlSXRlbUluZGV4XG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hMYXN0VmlzaWJsZUl0ZW0oKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaExhc3RWaXNpYmxlSXRlbSk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICB9XG5cbiAgZ2V0TGFzdFZpc2libGVJdGVtSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2QmFyV2lkdGggPSB0aGlzLm5hdmJhckNvbnRhaW5lclJlZiA/IHRoaXMubmF2YmFyQ29udGFpbmVyUmVmLm9mZnNldFdpZHRoIDogMDtcbiAgICBjb25zdCBzZWxlY3RXaWR0aCA9IHRoaXMuc2VsZWN0Q29udGFpbmVyUmVmID8gdGhpcy5zZWxlY3RDb250YWluZXJSZWYub2Zmc2V0V2lkdGggOiAwO1xuICAgIGNvbnN0IGNvbXBvbmVudExlZnRXaWR0aCA9IHRoaXMuY29tcG9uZW50TGVmdENvbnRhaW5lclJlZiA/IHRoaXMuY29tcG9uZW50TGVmdENvbnRhaW5lclJlZi5vZmZzZXRXaWR0aCA6IDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zdCBjb21wb25lbnRSaWdodFdpZHRoID0gdGhpcy5jb21wb25lbnRSaWdodENvbnRhaW5lclJlZiA/IHRoaXMuY29tcG9uZW50UmlnaHRDb250YWluZXJSZWYub2Zmc2V0V2lkdGggOiAwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBsZXQgcmVtYWluaW5nV2lkdGggPSBuYXZCYXJXaWR0aCAtIHNlbGVjdFdpZHRoIC0gY29tcG9uZW50TGVmdFdpZHRoIC0gY29tcG9uZW50UmlnaHRXaWR0aDtcbiAgICBsZXQgbGFzdFZpc2libGUgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHJlbWFpbmluZ1dpZHRoIC09IHRoaXMuaXRlbVdpZHRoc1tpXTtcbiAgICAgIGlmIChyZW1haW5pbmdXaWR0aCA8IDApIHtcbiAgICAgICAgbGFzdFZpc2libGUgLT0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBsYXN0VmlzaWJsZSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0VmlzaWJsZTtcbiAgfVxuXG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IGRlYm91bmNlKHRoaXMucmVmcmVzaExhc3RWaXNpYmxlSXRlbSgpLCAzMDApO1xuXG4gIHJlZnJlc2hMYXN0VmlzaWJsZUl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgbGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLmdldExhc3RWaXNpYmxlSXRlbUluZGV4KCk7XG4gICAgaWYgKHRoaXMuc3RhdGUubGFzdFZpc2libGVJdGVtSW5kZXggIT09IGxhc3RWaXNpYmxlSXRlbUluZGV4KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNTZWxlY3RWaXNpYmxlOiB0aGlzLnByb3BzLmxpc3QubGVuZ3RoID4gKGxhc3RWaXNpYmxlSXRlbUluZGV4ICsgMSksXG4gICAgICAgIGxhc3RWaXNpYmxlSXRlbUluZGV4LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9vbHRpcFdyYXBwZXIgPSAobm9kZSwgaW5kZXgsIHRvb2x0aXBDb250ZW50KSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPnt0b29sdGlwQ29udGVudH08L1Rvb2x0aXA+O1xuICAgIHJldHVybiAhdGhpcy5wcm9wcy5zaG93TmF2SXRlbVRvb2x0aXAgPyBub2RlIDpcbiAgICA8T3ZlcmxheVRyaWdnZXIgcGxhY2VtZW50PVwiYm90dG9tXCIga2V5PXtpbmRleH0gb3ZlcmxheT17dG9vbHRpcH0gZGVsYXlTaG93PXt0aGlzLnByb3BzLnRvb2x0aXBEZWxheX0+XG4gICAgICB7bm9kZX1cbiAgICA8L092ZXJsYXlUcmlnZ2VyPjtcbiAgfVxuXG4gIC8vIEhhbmRsZSByZWFjdC1zZWxlY3Qgb25DaGFuZ2VcbiAgaGFuZGxlT25DaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHZhbHVlKTtcbiAgfVxuXG4gIC8vIEhhbmRsZSBuYXZiYXIgb25DbGlja1xuICBoYW5kbGVPbkNsaWNrID0gaHJlZiA9PiAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdChocmVmKTtcbiAgfVxuXG4gIC8vIFJlbmRlciBuYXZiYXIgaXRlbVxuICBuYXZiYXJJdGVtID0gKGl0ZW0sIGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmVLZXksXG4gICAgICBmb250V2VpZ2h0LFxuICAgICAgZm9udFNpemUsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyByZXNvbHZlIGFjdGl2ZUtleUluZGV4XG4gICAgbGV0IGFjdGl2ZUtleUluZGV4ID0gYWN0aXZlS2V5O1xuICAgIGlmICh0eXBlb2YgYWN0aXZlS2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAgYWN0aXZlS2V5SW5kZXggPSB0aGlzLmFjdGl2ZUl0ZW1JbmRleChhY3RpdmVLZXkpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBhY3RpdmVLZXlJbmRleCA/IGAke2NsYXNzTmFtZX0gc2VsZWN0ZWQtYm9yZGVyYCA6IGAke2NsYXNzTmFtZX1gfVxuICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0LCBmb250U2l6ZSwgbWluSGVpZ2h0OiBoZWlnaHQgfX1cbiAgICAgICAgaWQ9e2l0ZW0uaWQgfHwgYG5hdkl0ZW0ke1N0cmluZyhpbmRleCl9YH1cbiAgICAgICAga2V5PXtpdGVtLmlkIHx8IGBuYXZpdGVtJHtTdHJpbmcoaW5kZXgpfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25DbGljayhpdGVtLmhyZWYpfVxuICAgICAgICByZWY9eyhyKSA9PiB7XG4gICAgICAgICAgaWYgKHIgJiYgIXRoaXMuaXRlbVdpZHRoc1tpbmRleF0pIHRoaXMuaXRlbVdpZHRoc1tpbmRleF0gPSByLm9mZnNldFdpZHRoO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXNwb25zaXZlLW5hdmJhci1pdGVtLXRleHRcIj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBkb0xpbmVDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGxpc3Quc29tZShpdGVtID0+IHR5cGVvZiAoaXRlbS5uYW1lKSAhPT0gJ3N0cmluZycpO1xuICB9XG5cbiAgLy8gUmVuZGVyIG5hdmJhclxuICBuYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsaXN0LFxuICAgICAgc2hvd05hdkl0ZW1Cb3JkZXIsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmlzaWJsZUxpc3QgPSB0aGlzLnN0YXRlLmxhc3RWaXNpYmxlSXRlbUluZGV4ID4gLTIgP1xuICAgICAgbGlzdC5zbGljZSgwLCB0aGlzLnN0YXRlLmxhc3RWaXNpYmxlSXRlbUluZGV4ICsgMSkgOlxuICAgICAgbGlzdDtcbiAgICBjb25zdCBpdGVtQ2xhc3NOYW1lID0gc2hvd05hdkl0ZW1Cb3JkZXIgP1xuICAgICAgJ3Jlc3BvbnNpdmUtbmF2YmFyLWl0ZW0gaW5hY3RpdmUtYm9yZGVyJyA6XG4gICAgICAncmVzcG9uc2l2ZS1uYXZiYXItaXRlbSBuby1pdGVtLWJvcmRlcic7XG4gICAgY29uc3QgaXRlbXMgPSB2aXNpYmxlTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICB0aGlzLnRvb2x0aXBXcmFwcGVyKHRoaXMubmF2YmFySXRlbShpdGVtLCBpbmRleCwgaXRlbUNsYXNzTmFtZSksIGluZGV4LCBpdGVtLm5hbWUpXG4gICAgKSk7XG4gICAgY29uc3QgbGluZUNvdW50ID0gdGhpcy5kb0xpbmVDb3VudCgpO1xuICAgIGNvbnN0IG5hdmJhclN0eWxlID0ge1xuICAgICAgbWluSGVpZ2h0OiBoZWlnaHQsXG4gICAgfTtcbiAgICBpZiAoaGVpZ2h0LnNsaWNlKC0yKSA9PT0gJ3B4JyAmJiBsaW5lQ291bnQpIHtcbiAgICAgIGNvbnN0IGhlaWdodFB4ID0gcGFyc2VJbnQoaGVpZ2h0LnNsaWNlKDAsIC0yKSwgMTApO1xuICAgICAgbmF2YmFyU3R5bGUubGluZUhlaWdodCA9IGAkeyhoZWlnaHRQeCAtIDQpfXB4YDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9e2Ake2lkfS1jb250YWluZXJgfVxuICAgICAgICByZWY9eyhyKSA9PiB7IHRoaXMubmF2YmFyQ29udGFpbmVyUmVmID0gcjsgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtgcmVzcG9uc2l2ZS1uYXZiYXItY29udGFpbmVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHN0eWxlPXtuYXZiYXJTdHlsZX1cbiAgICAgID5cbiAgICAgICAge2l0ZW1zfVxuICAgICAgICB7dGhpcy5jb21ib2JveCgpfVxuICAgICAgICB7dGhpcy5jb21wb25lbnRMZWZ0KCl9XG4gICAgICAgIHt0aGlzLmNvbXBvbmVudFJpZ2h0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZUFjdGl2ZUl0ZW1Gcm9tT3B0aW9ucyA9IChzZWxlY3RPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmVLZXkgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGFjdGl2ZUl0ZW0gPSBzZWxlY3RPcHRpb25zLmZpbmQob3B0cyA9PiBvcHRzLnZhbHVlID09PSBhY3RpdmVLZXkpO1xuICAgIGlmICghYWN0aXZlSXRlbSkge1xuICAgICAgYWN0aXZlSXRlbSA9IHNlbGVjdE9wdGlvbnMuZmluZChvcHRzID0+IG9wdHMudmFsdWUgPT09IGFjdGl2ZUtleS52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBhY3RpdmVJdGVtO1xuICB9XG5cbiAgYWN0aXZlSXRlbUluZGV4ID0gKGFjdGl2ZUl0ZW0pID0+IHtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFhY3RpdmVJdGVtKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmhyZWYgPT09IGFjdGl2ZUl0ZW0udmFsdWUpO1xuICB9XG5cbiAgLy8gUmVuZGVyIGNvbWJvYm94LCB3aGVuIGFsbCBpdGVtcyBkbyBub3QgZml0XG4gIGNvbWJvYm94ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgbGlzdCxcbiAgICAgIGZvbnRTaXplLFxuICAgICAgZm9udFdlaWdodCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgc2hvd05hdkl0ZW1Cb3JkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzU2VsZWN0VmlzaWJsZSkge1xuICAgICAgLy8gcmV0dXJuIG51bGwgaWYgYWxsIG5hdiBpdGVtcyBhcmUgdmlzaWJsZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gc2xpY2UgbmF2IGl0ZW1zIGxpc3QgYW5kIHNob3cgaW52aXNpYmxlIGl0ZW1zIGluIHRoZSBjb21ib2JveFxuICAgIGNvbnN0IG5hdkxpc3QgPSB0aGlzLnN0YXRlLmxhc3RWaXNpYmxlSXRlbUluZGV4ID4gLTIgP1xuICAgICAgbGlzdC5zbGljZSh0aGlzLnN0YXRlLmxhc3RWaXNpYmxlSXRlbUluZGV4ICsgMSkgOiBsaXN0O1xuICAgIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBuYXZMaXN0Lm1hcChpdGVtID0+ICh7XG4gICAgICB2YWx1ZTogaXRlbS5ocmVmLFxuICAgICAgbGFiZWw6IGl0ZW0ubmFtZSxcbiAgICB9KSk7XG4gICAgY29uc3QgbGluZUNvdW50TmVlZGVkID0gdGhpcy5kb0xpbmVDb3VudCgpO1xuICAgIGNvbnN0IGN1c3RvbUxpbmVDb3VudCA9IGxpbmVDb3VudE5lZWRlZCA/ICdsaW5lLWNvdW50JyA6ICcnO1xuICAgIGNvbnN0IGN1c3RvbUJvcmRlckNsYXNzID0gbGluZUNvdW50TmVlZGVkID8gJ3NlbGVjdGVkLWJvcmRlciBsaW5lLWNvdW50JyA6ICdzZWxlY3RlZC1ib3JkZXInO1xuICAgIGNvbnN0IGN1c3RvbUluYWN0aXZlQm9yZGVyID0gbGluZUNvdW50TmVlZGVkID8gJ2luYWN0aXZlLWJvcmRlciBsaW5lLWNvdW50JyA6ICdpbmFjdGl2ZS1ib3JkZXInO1xuICAgIGNvbnN0IGluYWN0aXZlQm9yZGVyID0gc2hvd05hdkl0ZW1Cb3JkZXIgPyBjdXN0b21JbmFjdGl2ZUJvcmRlciA6IGN1c3RvbUxpbmVDb3VudDtcbiAgICAvLyBSZXNvbHZlIGFjdGl2ZUl0ZW1cbiAgICBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5yZXNvbHZlQWN0aXZlSXRlbUZyb21PcHRpb25zKHNlbGVjdE9wdGlvbnMpO1xuICAgIGNvbnN0IGFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4KGFjdGl2ZUl0ZW0pO1xuICAgIGNvbnN0IGJvcmRlckNsYXNzID0gYWN0aXZlSXRlbUluZGV4ID49ICh0aGlzLnN0YXRlLmxhc3RWaXNpYmxlSXRlbUluZGV4ICsgMSkgPyBjdXN0b21Cb3JkZXJDbGFzcyA6IGluYWN0aXZlQm9yZGVyOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGB9XG4gICAgICAgIGNsYXNzTmFtZT17YHJlc3BvbnNpdmUtbmF2YmFyLXNlbGVjdCAke2JvcmRlckNsYXNzfWB9XG4gICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQsIGZvbnRTaXplIH19XG4gICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5zZWxlY3RDb250YWluZXJSZWYgPSByOyB9fVxuICAgICAgPlxuICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICBuYW1lPXtgJHtpZH0tc2VsZWN0LWNvbXBvbmVudGB9XG4gICAgICAgICAgdmFsdWU9e2FjdGl2ZUl0ZW0gfHwgJyd9XG4gICAgICAgICAgaXNDbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBvcHRpb25zPXtzZWxlY3RPcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlbmRlciBjdXN0b20gbGVmdCBzaWRlIGNvbXBvbmVudFxuICBjb21wb25lbnRMZWZ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29tcG9uZW50TGVmdCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNvbXBvbmVudExlZnQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtbmF2YmFyLWNvbnRhaW5lci1sZWZ0XCJcbiAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLmNvbXBvbmVudExlZnRDb250YWluZXJSZWYgPSByOyB9fVxuICAgICAgPlxuICAgICAgICB7IGNvbXBvbmVudExlZnQgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlbmRlciBjdXN0b20gcmlnaHQgc2lkZSBjb21wb25lbnRcbiAgY29tcG9uZW50UmlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb21wb25lbnRSaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNvbXBvbmVudFJpZ2h0KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJyZXNwb25zaXZlLW5hdmJhci1jb250YWluZXItcmlnaHRcIlxuICAgICAgICByZWY9eyhyKSA9PiB7IHRoaXMuY29tcG9uZW50UmlnaHRDb250YWluZXJSZWYgPSByOyB9fVxuICAgICAgPlxuICAgICAgICB7IGNvbXBvbmVudFJpZ2h0IH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2YmFyKCk7XG4gIH1cbn1cbiJdfQ==