var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import PropTypes from 'prop-types';
import { FloatingSelect } from '@opuscapita/react-floating-select';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { debounce } from 'debounce';

import './responsive-navbar.scss';

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
      return debounce(_this.refreshLastVisibleItem(), 300);
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
      var tooltip = React.createElement(
        Tooltip,
        { id: 'tooltip' },
        tooltipContent
      );
      return !_this.props.showNavItemTooltip ? node : React.createElement(
        OverlayTrigger,
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
      return React.createElement(
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
        React.createElement(
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
      return React.createElement(
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

      return React.createElement(
        'div',
        {
          id: id + '-select',
          className: 'responsive-navbar-select ' + borderClass,
          style: { fontWeight: fontWeight, fontSize: fontSize },
          ref: function ref(r) {
            _this.selectContainerRef = r;
          }
        },
        React.createElement(FloatingSelect, {
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
      return React.createElement(
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
      return React.createElement(
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
}(React.PureComponent), _class.defaultProps = {
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
export { ResponsiveNavbar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLW5hdmJhci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiRmxvYXRpbmdTZWxlY3QiLCJPdmVybGF5VHJpZ2dlciIsIlRvb2x0aXAiLCJkZWJvdW5jZSIsIlJlc3BvbnNpdmVOYXZiYXIiLCJwcm9wcyIsInN0YXRlIiwiaXNTZWxlY3RWaXNpYmxlIiwibGFzdFZpc2libGVJdGVtSW5kZXgiLCJnZXRMYXN0VmlzaWJsZUl0ZW1JbmRleCIsIm5hdkJhcldpZHRoIiwibmF2YmFyQ29udGFpbmVyUmVmIiwib2Zmc2V0V2lkdGgiLCJzZWxlY3RXaWR0aCIsInNlbGVjdENvbnRhaW5lclJlZiIsImNvbXBvbmVudExlZnRXaWR0aCIsImNvbXBvbmVudExlZnRDb250YWluZXJSZWYiLCJjb21wb25lbnRSaWdodFdpZHRoIiwiY29tcG9uZW50UmlnaHRDb250YWluZXJSZWYiLCJyZW1haW5pbmdXaWR0aCIsImxhc3RWaXNpYmxlIiwiaSIsImxpc3QiLCJsZW5ndGgiLCJpdGVtV2lkdGhzIiwiaGFuZGxlUmVzaXplIiwicmVmcmVzaExhc3RWaXNpYmxlSXRlbSIsInNldFN0YXRlIiwidG9vbHRpcFdyYXBwZXIiLCJub2RlIiwiaW5kZXgiLCJ0b29sdGlwQ29udGVudCIsInRvb2x0aXAiLCJzaG93TmF2SXRlbVRvb2x0aXAiLCJ0b29sdGlwRGVsYXkiLCJoYW5kbGVPbkNoYW5nZSIsInZhbHVlIiwib25TZWxlY3QiLCJoYW5kbGVPbkNsaWNrIiwiaHJlZiIsIm5hdmJhckl0ZW0iLCJpdGVtIiwiY2xhc3NOYW1lIiwiYWN0aXZlS2V5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiaGVpZ2h0IiwiYWN0aXZlS2V5SW5kZXgiLCJhY3RpdmVJdGVtSW5kZXgiLCJtaW5IZWlnaHQiLCJpZCIsIlN0cmluZyIsInIiLCJuYW1lIiwiZG9MaW5lQ291bnQiLCJzb21lIiwibmF2YmFyIiwic2hvd05hdkl0ZW1Cb3JkZXIiLCJ2aXNpYmxlTGlzdCIsInNsaWNlIiwiaXRlbUNsYXNzTmFtZSIsIml0ZW1zIiwibWFwIiwibGluZUNvdW50IiwibmF2YmFyU3R5bGUiLCJoZWlnaHRQeCIsInBhcnNlSW50IiwibGluZUhlaWdodCIsImNvbWJvYm94IiwiY29tcG9uZW50TGVmdCIsImNvbXBvbmVudFJpZ2h0IiwicmVzb2x2ZUFjdGl2ZUl0ZW1Gcm9tT3B0aW9ucyIsInNlbGVjdE9wdGlvbnMiLCJhY3RpdmVJdGVtIiwiZmluZCIsIm9wdHMiLCJmaW5kSW5kZXgiLCJwbGFjZWhvbGRlciIsIm5hdkxpc3QiLCJsYWJlbCIsImxpbmVDb3VudE5lZWRlZCIsImN1c3RvbUxpbmVDb3VudCIsImN1c3RvbUJvcmRlckNsYXNzIiwiY3VzdG9tSW5hY3RpdmVCb3JkZXIiLCJpbmFjdGl2ZUJvcmRlciIsImJvcmRlckNsYXNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxjQUFULFFBQStCLG1DQUEvQjtBQUNBLFNBQVNDLGNBQVQsRUFBeUJDLE9BQXpCLFFBQXdDLGlCQUF4QztBQUNBLFNBQVNDLFFBQVQsUUFBeUIsVUFBekI7O0FBRUEsT0FBTywwQkFBUDs7SUFFcUJDLGdCOzs7QUF1Q25CLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBS25CQyxLQUxtQixHQUtYO0FBQ05DLHVCQUFpQixLQURYO0FBRU5DLDRCQUFzQixD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RUQrRCxrQiwrQkFBbUJDLFMsRUFBV0MsUyxFQUFXO0FBQ3ZDO0FBQ0EsUUFDRSxLQUFLckYsS0FBTCxDQUFXQyxlQUFYLEtBQStCb0YsVUFBVXBGLGVBQXpDLElBQ0EsS0FBS0QsS0FBTCxDQUFXRSxvQkFBWCxLQUFvQ21GLFVBQVVuRixvQkFGaEQsRUFHRTtBQUNBLFdBQUtrQixzQkFBTDtBQUNEO0FBQ0YsRzs7NkJBRURrRSxvQixtQ0FBdUI7QUFDckJMLFdBQU9NLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtwRSxZQUExQztBQUNBOEQsV0FBT00sbUJBQVAsQ0FBMkIsbUJBQTNCLEVBQWdELEtBQUtuRSxzQkFBckQsRUFGcUIsQ0FFeUQ7QUFDL0UsRzs7QUEyQ0Q7OztBQUtBOzs7QUFLQTs7O0FBbUNBOzs7QUF3REE7OztBQW1EQTs7O0FBY0E7Ozs2QkFjQW9FLE0scUJBQVM7QUFDUCxXQUFPLEtBQUt0QyxNQUFMLEVBQVA7QUFDRCxHOzs7RUFyUzJDMUQsTUFBTWlHLGEsVUF3QjNDQyxZLEdBQWU7QUFDcEI5QyxNQUFJLG1CQURnQjtBQUVwQlIsYUFBVyxFQUZTO0FBR3BCTCxZQUFVLG9CQUFNLENBQUUsQ0FIRTtBQUlwQm9CLHFCQUFtQixLQUpDO0FBS3BCeEIsc0JBQW9CLElBTEE7QUFNcEJDLGdCQUFjLElBTk07QUFPcEJXLFlBQVUsU0FQVTtBQVFwQkQsY0FBWSxTQVJRO0FBU3BCaUMsZUFBYSxTQVRPO0FBVXBCL0IsVUFBUSxNQVZZO0FBV3BCdUIsaUJBQWUsSUFYSztBQVlwQkMsa0JBQWdCO0FBWkksQztTQXhCSGxFLGdCIiwiZmlsZSI6InJlc3BvbnNpdmUtbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWZpbmQtZG9tLW5vZGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdkZWJvdW5jZSc7XG5cbmltcG9ydCAnLi9yZXNwb25zaXZlLW5hdmJhci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZU5hdmJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93TmF2SXRlbUJvcmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd05hdkl0ZW1Ub29sdGlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0b29sdGlwRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZm9udFNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9udFdlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zaGFwZSh7fSksIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICAgIGxpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29tcG9uZW50TGVmdDogUHJvcFR5cGVzLm5vZGUsXG4gICAgY29tcG9uZW50UmlnaHQ6IFByb3BUeXBlcy5ub2RlLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogJ3Jlc3BvbnNpdmUtbmF2YmFyJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBzaG93TmF2SXRlbUJvcmRlcjogZmFsc2UsXG4gICAgc2hvd05hdkl0ZW1Ub29sdGlwOiB0cnVlLFxuICAgIHRvb2x0aXBEZWxheTogMjAwMCxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGZvbnRXZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBwbGFjZWhvbGRlcjogJ21vcmUuLi4nLFxuICAgIGhlaWdodDogJzQwcHgnLFxuICAgIGNvbXBvbmVudExlZnQ6IG51bGwsXG4gICAgY29tcG9uZW50UmlnaHQ6IG51bGwsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLml0ZW1XaWR0aHMgPSBbXTsgLy8gc3RvcmUgaXRlbSB3aWR0aHMgaGVyZSwgdGhleSBkb24ndCBjaGFuZ2VcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlzU2VsZWN0VmlzaWJsZTogZmFsc2UsXG4gICAgbGFzdFZpc2libGVJdGVtSW5kZXg6IC0yLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoTGFzdFZpc2libGVJdGVtKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgdGhpcy5yZWZyZXNoTGFzdFZpc2libGVJdGVtKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAvLyBSZWZyZXNoIHZpc2libGUgaXRlbXMgaWYgdmFsdWVzIGNoYW5nZVxuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuaXNTZWxlY3RWaXNpYmxlICE9PSBwcmV2U3RhdGUuaXNTZWxlY3RWaXNpYmxlIHx8XG4gICAgICB0aGlzLnN0YXRlLmxhc3RWaXNpYmxlSXRlbUluZGV4ICE9PSBwcmV2U3RhdGUubGFzdFZpc2libGVJdGVtSW5kZXhcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaExhc3RWaXNpYmxlSXRlbSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoTGFzdFZpc2libGVJdGVtKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gIH1cblxuICBnZXRMYXN0VmlzaWJsZUl0ZW1JbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZCYXJXaWR0aCA9IHRoaXMubmF2YmFyQ29udGFpbmVyUmVmID8gdGhpcy5uYXZiYXJDb250YWluZXJSZWYub2Zmc2V0V2lkdGggOiAwO1xuICAgIGNvbnN0IHNlbGVjdFdpZHRoID0gdGhpcy5zZWxlY3RDb250YWluZXJSZWYgPyB0aGlzLnNlbGVjdENvbnRhaW5lclJlZi5vZmZzZXRXaWR0aCA6IDA7XG4gICAgY29uc3QgY29tcG9uZW50TGVmdFdpZHRoID0gdGhpcy5jb21wb25lbnRMZWZ0Q29udGFpbmVyUmVmID8gdGhpcy5jb21wb25lbnRMZWZ0Q29udGFpbmVyUmVmLm9mZnNldFdpZHRoIDogMDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGNvbnN0IGNvbXBvbmVudFJpZ2h0V2lkdGggPSB0aGlzLmNvbXBvbmVudFJpZ2h0Q29udGFpbmVyUmVmID8gdGhpcy5jb21wb25lbnRSaWdodENvbnRhaW5lclJlZi5vZmZzZXRXaWR0aCA6IDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGxldCByZW1haW5pbmdXaWR0aCA9IG5hdkJhcldpZHRoIC0gc2VsZWN0V2lkdGggLSBjb21wb25lbnRMZWZ0V2lkdGggLSBjb21wb25lbnRSaWdodFdpZHRoO1xuICAgIGxldCBsYXN0VmlzaWJsZSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgcmVtYWluaW5nV2lkdGggLT0gdGhpcy5pdGVtV2lkdGhzW2ldO1xuICAgICAgaWYgKHJlbWFpbmluZ1dpZHRoIDwgMCkge1xuICAgICAgICBsYXN0VmlzaWJsZSAtPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGxhc3RWaXNpYmxlICs9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RWaXNpYmxlO1xuICB9XG5cbiAgaGFuZGxlUmVzaXplID0gKCkgPT4gZGVib3VuY2UodGhpcy5yZWZyZXNoTGFzdFZpc2libGVJdGVtKCksIDMwMCk7XG5cbiAgcmVmcmVzaExhc3RWaXNpYmxlSXRlbSA9ICgpID0+IHtcbiAgICBjb25zdCBsYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMuZ2V0TGFzdFZpc2libGVJdGVtSW5kZXgoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5sYXN0VmlzaWJsZUl0ZW1JbmRleCAhPT0gbGFzdFZpc2libGVJdGVtSW5kZXgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1NlbGVjdFZpc2libGU6IHRoaXMucHJvcHMubGlzdC5sZW5ndGggPiAobGFzdFZpc2libGVJdGVtSW5kZXggKyAxKSxcbiAgICAgICAgbGFzdFZpc2libGVJdGVtSW5kZXgsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b29sdGlwV3JhcHBlciA9IChub2RlLCBpbmRleCwgdG9vbHRpcENvbnRlbnQpID0+IHtcbiAgICBjb25zdCB0b29sdGlwID0gPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+e3Rvb2x0aXBDb250ZW50fTwvVG9vbHRpcD47XG4gICAgcmV0dXJuICF0aGlzLnByb3BzLnNob3dOYXZJdGVtVG9vbHRpcCA/IG5vZGUgOlxuICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJib3R0b21cIiBrZXk9e2luZGV4fSBvdmVybGF5PXt0b29sdGlwfSBkZWxheVNob3c9e3RoaXMucHJvcHMudG9vbHRpcERlbGF5fT5cbiAgICAgIHtub2RlfVxuICAgIDwvT3ZlcmxheVRyaWdnZXI+O1xuICB9XG5cbiAgLy8gSGFuZGxlIHJlYWN0LXNlbGVjdCBvbkNoYW5nZVxuICBoYW5kbGVPbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3QodmFsdWUpO1xuICB9XG5cbiAgLy8gSGFuZGxlIG5hdmJhciBvbkNsaWNrXG4gIGhhbmRsZU9uQ2xpY2sgPSBocmVmID0+ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGhyZWYpO1xuICB9XG5cbiAgLy8gUmVuZGVyIG5hdmJhciBpdGVtXG4gIG5hdmJhckl0ZW0gPSAoaXRlbSwgaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2ZUtleSxcbiAgICAgIGZvbnRXZWlnaHQsXG4gICAgICBmb250U2l6ZSxcbiAgICAgIGhlaWdodCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIHJlc29sdmUgYWN0aXZlS2V5SW5kZXhcbiAgICBsZXQgYWN0aXZlS2V5SW5kZXggPSBhY3RpdmVLZXk7XG4gICAgaWYgKHR5cGVvZiBhY3RpdmVLZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICBhY3RpdmVLZXlJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4KGFjdGl2ZUtleSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IGFjdGl2ZUtleUluZGV4ID8gYCR7Y2xhc3NOYW1lfSBzZWxlY3RlZC1ib3JkZXJgIDogYCR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQsIGZvbnRTaXplLCBtaW5IZWlnaHQ6IGhlaWdodCB9fVxuICAgICAgICBpZD17aXRlbS5pZCB8fCBgbmF2SXRlbSR7U3RyaW5nKGluZGV4KX1gfVxuICAgICAgICBrZXk9e2l0ZW0uaWQgfHwgYG5hdml0ZW0ke1N0cmluZyhpbmRleCl9YH1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVPbkNsaWNrKGl0ZW0uaHJlZil9XG4gICAgICAgIHJlZj17KHIpID0+IHtcbiAgICAgICAgICBpZiAociAmJiAhdGhpcy5pdGVtV2lkdGhzW2luZGV4XSkgdGhpcy5pdGVtV2lkdGhzW2luZGV4XSA9IHIub2Zmc2V0V2lkdGg7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtbmF2YmFyLWl0ZW0tdGV4dFwiPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGRvTGluZUNvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gbGlzdC5zb21lKGl0ZW0gPT4gdHlwZW9mIChpdGVtLm5hbWUpICE9PSAnc3RyaW5nJyk7XG4gIH1cblxuICAvLyBSZW5kZXIgbmF2YmFyXG4gIG5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGxpc3QsXG4gICAgICBzaG93TmF2SXRlbUJvcmRlcixcbiAgICAgIGhlaWdodCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2aXNpYmxlTGlzdCA9IHRoaXMuc3RhdGUubGFzdFZpc2libGVJdGVtSW5kZXggPiAtMiA/XG4gICAgICBsaXN0LnNsaWNlKDAsIHRoaXMuc3RhdGUubGFzdFZpc2libGVJdGVtSW5kZXggKyAxKSA6XG4gICAgICBsaXN0O1xuICAgIGNvbnN0IGl0ZW1DbGFzc05hbWUgPSBzaG93TmF2SXRlbUJvcmRlciA/XG4gICAgICAncmVzcG9uc2l2ZS1uYXZiYXItaXRlbSBpbmFjdGl2ZS1ib3JkZXInIDpcbiAgICAgICdyZXNwb25zaXZlLW5hdmJhci1pdGVtIG5vLWl0ZW0tYm9yZGVyJztcbiAgICBjb25zdCBpdGVtcyA9IHZpc2libGVMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIHRoaXMudG9vbHRpcFdyYXBwZXIodGhpcy5uYXZiYXJJdGVtKGl0ZW0sIGluZGV4LCBpdGVtQ2xhc3NOYW1lKSwgaW5kZXgsIGl0ZW0ubmFtZSlcbiAgICApKTtcbiAgICBjb25zdCBsaW5lQ291bnQgPSB0aGlzLmRvTGluZUNvdW50KCk7XG4gICAgY29uc3QgbmF2YmFyU3R5bGUgPSB7XG4gICAgICBtaW5IZWlnaHQ6IGhlaWdodCxcbiAgICB9O1xuICAgIGlmIChoZWlnaHQuc2xpY2UoLTIpID09PSAncHgnICYmIGxpbmVDb3VudCkge1xuICAgICAgY29uc3QgaGVpZ2h0UHggPSBwYXJzZUludChoZWlnaHQuc2xpY2UoMCwgLTIpLCAxMCk7XG4gICAgICBuYXZiYXJTdHlsZS5saW5lSGVpZ2h0ID0gYCR7KGhlaWdodFB4IC0gNCl9cHhgO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBpZD17YCR7aWR9LWNvbnRhaW5lcmB9XG4gICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5uYXZiYXJDb250YWluZXJSZWYgPSByOyB9fVxuICAgICAgICBjbGFzc05hbWU9e2ByZXNwb25zaXZlLW5hdmJhci1jb250YWluZXIgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgc3R5bGU9e25hdmJhclN0eWxlfVxuICAgICAgPlxuICAgICAgICB7aXRlbXN9XG4gICAgICAgIHt0aGlzLmNvbWJvYm94KCl9XG4gICAgICAgIHt0aGlzLmNvbXBvbmVudExlZnQoKX1cbiAgICAgICAge3RoaXMuY29tcG9uZW50UmlnaHQoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXNvbHZlQWN0aXZlSXRlbUZyb21PcHRpb25zID0gKHNlbGVjdE9wdGlvbnMpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZUtleSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgYWN0aXZlSXRlbSA9IHNlbGVjdE9wdGlvbnMuZmluZChvcHRzID0+IG9wdHMudmFsdWUgPT09IGFjdGl2ZUtleSk7XG4gICAgaWYgKCFhY3RpdmVJdGVtKSB7XG4gICAgICBhY3RpdmVJdGVtID0gc2VsZWN0T3B0aW9ucy5maW5kKG9wdHMgPT4gb3B0cy52YWx1ZSA9PT0gYWN0aXZlS2V5LnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZUl0ZW07XG4gIH1cblxuICBhY3RpdmVJdGVtSW5kZXggPSAoYWN0aXZlSXRlbSkgPT4ge1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWFjdGl2ZUl0ZW0pIHJldHVybiBudWxsO1xuICAgIHJldHVybiBsaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaHJlZiA9PT0gYWN0aXZlSXRlbS52YWx1ZSk7XG4gIH1cblxuICAvLyBSZW5kZXIgY29tYm9ib3gsIHdoZW4gYWxsIGl0ZW1zIGRvIG5vdCBmaXRcbiAgY29tYm9ib3ggPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBsaXN0LFxuICAgICAgZm9udFNpemUsXG4gICAgICBmb250V2VpZ2h0LFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBzaG93TmF2SXRlbUJvcmRlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNTZWxlY3RWaXNpYmxlKSB7XG4gICAgICAvLyByZXR1cm4gbnVsbCBpZiBhbGwgbmF2IGl0ZW1zIGFyZSB2aXNpYmxlXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzbGljZSBuYXYgaXRlbXMgbGlzdCBhbmQgc2hvdyBpbnZpc2libGUgaXRlbXMgaW4gdGhlIGNvbWJvYm94XG4gICAgY29uc3QgbmF2TGlzdCA9IHRoaXMuc3RhdGUubGFzdFZpc2libGVJdGVtSW5kZXggPiAtMiA/XG4gICAgICBsaXN0LnNsaWNlKHRoaXMuc3RhdGUubGFzdFZpc2libGVJdGVtSW5kZXggKyAxKSA6IGxpc3Q7XG4gICAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IG5hdkxpc3QubWFwKGl0ZW0gPT4gKHtcbiAgICAgIHZhbHVlOiBpdGVtLmhyZWYsXG4gICAgICBsYWJlbDogaXRlbS5uYW1lLFxuICAgIH0pKTtcbiAgICBjb25zdCBsaW5lQ291bnROZWVkZWQgPSB0aGlzLmRvTGluZUNvdW50KCk7XG4gICAgY29uc3QgY3VzdG9tTGluZUNvdW50ID0gbGluZUNvdW50TmVlZGVkID8gJ2xpbmUtY291bnQnIDogJyc7XG4gICAgY29uc3QgY3VzdG9tQm9yZGVyQ2xhc3MgPSBsaW5lQ291bnROZWVkZWQgPyAnc2VsZWN0ZWQtYm9yZGVyIGxpbmUtY291bnQnIDogJ3NlbGVjdGVkLWJvcmRlcic7XG4gICAgY29uc3QgY3VzdG9tSW5hY3RpdmVCb3JkZXIgPSBsaW5lQ291bnROZWVkZWQgPyAnaW5hY3RpdmUtYm9yZGVyIGxpbmUtY291bnQnIDogJ2luYWN0aXZlLWJvcmRlcic7XG4gICAgY29uc3QgaW5hY3RpdmVCb3JkZXIgPSBzaG93TmF2SXRlbUJvcmRlciA/IGN1c3RvbUluYWN0aXZlQm9yZGVyIDogY3VzdG9tTGluZUNvdW50O1xuICAgIC8vIFJlc29sdmUgYWN0aXZlSXRlbVxuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLnJlc29sdmVBY3RpdmVJdGVtRnJvbU9wdGlvbnMoc2VsZWN0T3B0aW9ucyk7XG4gICAgY29uc3QgYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5hY3RpdmVJdGVtSW5kZXgoYWN0aXZlSXRlbSk7XG4gICAgY29uc3QgYm9yZGVyQ2xhc3MgPSBhY3RpdmVJdGVtSW5kZXggPj0gKHRoaXMuc3RhdGUubGFzdFZpc2libGVJdGVtSW5kZXggKyAxKSA/IGN1c3RvbUJvcmRlckNsYXNzIDogaW5hY3RpdmVCb3JkZXI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGlkPXtgJHtpZH0tc2VsZWN0YH1cbiAgICAgICAgY2xhc3NOYW1lPXtgcmVzcG9uc2l2ZS1uYXZiYXItc2VsZWN0ICR7Ym9yZGVyQ2xhc3N9YH1cbiAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodCwgZm9udFNpemUgfX1cbiAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLnNlbGVjdENvbnRhaW5lclJlZiA9IHI7IH19XG4gICAgICA+XG4gICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgIG5hbWU9e2Ake2lkfS1zZWxlY3QtY29tcG9uZW50YH1cbiAgICAgICAgICB2YWx1ZT17YWN0aXZlSXRlbSB8fCAnJ31cbiAgICAgICAgICBpc0NsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIG9wdGlvbnM9e3NlbGVjdE9wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8gUmVuZGVyIGN1c3RvbSBsZWZ0IHNpZGUgY29tcG9uZW50XG4gIGNvbXBvbmVudExlZnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb21wb25lbnRMZWZ0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY29tcG9uZW50TGVmdCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS1uYXZiYXItY29udGFpbmVyLWxlZnRcIlxuICAgICAgICByZWY9eyhyKSA9PiB7IHRoaXMuY29tcG9uZW50TGVmdENvbnRhaW5lclJlZiA9IHI7IH19XG4gICAgICA+XG4gICAgICAgIHsgY29tcG9uZW50TGVmdCB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8gUmVuZGVyIGN1c3RvbSByaWdodCBzaWRlIGNvbXBvbmVudFxuICBjb21wb25lbnRSaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXBvbmVudFJpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY29tcG9uZW50UmlnaHQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInJlc3BvbnNpdmUtbmF2YmFyLWNvbnRhaW5lci1yaWdodFwiXG4gICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5jb21wb25lbnRSaWdodENvbnRhaW5lclJlZiA9IHI7IH19XG4gICAgICA+XG4gICAgICAgIHsgY29tcG9uZW50UmlnaHQgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZiYXIoKTtcbiAgfVxufVxuIl19