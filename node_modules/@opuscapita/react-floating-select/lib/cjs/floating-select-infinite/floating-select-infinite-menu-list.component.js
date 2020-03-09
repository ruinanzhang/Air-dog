'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInfinite = require('react-infinite');

var _reactInfinite2 = _interopRequireDefault(_reactInfinite);

var _floatingSelectInfiniteMenuOption = require('./floating-select-infinite-menu-option.component');

var _floatingSelectInfiniteMenuOption2 = _interopRequireDefault(_floatingSelectInfiniteMenuOption);

require('./floating-select-infinite.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Other imports


var CLASS_PREFIX = 'floating-select-infinite';

var MenuList = function (_React$PureComponent) {
  _inherits(MenuList, _React$PureComponent);

  function MenuList() {
    var _temp, _this, _ret;

    _classCallCheck(this, MenuList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onOptionClick = function (item) {
      var selectOption = _this.props.selectOption;

      selectOption(item.props.data);
    }, _this.getItems = function () {
      var children = _this.props.children;

      if (!children) return [];
      return children;
    }, _this.renderNoOptionsMessage = function () {
      return _react2.default.createElement(
        'div',
        { className: CLASS_PREFIX + '-no-options-message' },
        _this.props.selectProps.noOptionsMessage()
      );
    }, _this.renderMenuItems = function () {
      var components = _this.props.selectProps.components;

      var renderOption = components && components.Option ? function (child) {
        return _react2.default.createElement(components.Option, _extends({ key: child.key }, child.props));
      } : function (child) {
        return _react2.default.createElement(_floatingSelectInfiniteMenuOption2.default, _extends({
          item: child,
          key: child.key,
          onOptionClick: _this.onOptionClick
        }, _this.props));
      };
      return _this.getItems().map(renderOption);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MenuList.prototype.render = function render() {
    var _props = this.props,
        getStyles = _props.getStyles,
        selectProps = _props.selectProps;

    var menuListStyles = getStyles('menuList', this.props);
    var controlHeight = parseInt(selectProps.controlHeight, 10);
    var maxHeight = menuListStyles.maxHeight;

    var itemCount = this.getItems().length;
    var listHeight = maxHeight;

    if (itemCount * controlHeight < maxHeight) listHeight = itemCount * controlHeight;
    if (listHeight === 0) listHeight = controlHeight;
    return _react2.default.createElement(
      _reactInfinite2.default,
      {
        className: !this.getItems().length ? CLASS_PREFIX + '-menu-list no-options' : CLASS_PREFIX + '-menu-list',
        ref: this.setListRef,
        containerHeight: listHeight,
        elementHeight: controlHeight
      },
      itemCount ? this.renderMenuItems() : this.renderNoOptionsMessage()
    );
  };

  return MenuList;
}(_react2.default.PureComponent);

exports.default = MenuList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNMQVNTX1BSRUZJWCIsIk1lbnVMaXN0Iiwib25PcHRpb25DbGljayIsIml0ZW0iLCJzZWxlY3RPcHRpb24iLCJwcm9wcyIsImRhdGEiLCJnZXRJdGVtcyIsImNoaWxkcmVuIiwicmVuZGVyTm9PcHRpb25zTWVzc2FnZSIsInNlbGVjdFByb3BzIiwibm9PcHRpb25zTWVzc2FnZSIsInJlbmRlck1lbnVJdGVtcyIsImNvbXBvbmVudHMiLCJyZW5kZXJPcHRpb24iLCJPcHRpb24iLCJjaGlsZCIsImtleSIsIm1hcCIsInJlbmRlciIsImdldFN0eWxlcyIsIm1lbnVMaXN0U3R5bGVzIiwiY29udHJvbEhlaWdodCIsInBhcnNlSW50IiwibWF4SGVpZ2h0IiwiaXRlbUNvdW50IiwibGVuZ3RoIiwibGlzdEhlaWdodCIsInNldExpc3RSZWYiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxlQUFlLDBCQUFyQjs7SUFFTUMsUTs7Ozs7Ozs7Ozs7O2dLQUNKQyxhLEdBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUFBLFVBQ2hCQyxZQURnQixHQUNDLE1BQUtDLEtBRE4sQ0FDaEJELFlBRGdCOztBQUV4QkEsbUJBQWFELEtBQUtFLEtBQUwsQ0FBV0MsSUFBeEI7QUFDRCxLLFFBRURDLFEsR0FBVyxZQUFNO0FBQUEsVUFDUEMsUUFETyxHQUNNLE1BQUtILEtBRFgsQ0FDUEcsUUFETzs7QUFFZixVQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEVBQVA7QUFDZixhQUFPQSxRQUFQO0FBQ0QsSyxRQUVEQyxzQixHQUF5QjtBQUFBLGFBQ3ZCO0FBQUE7QUFBQSxVQUFLLFdBQWNULFlBQWQsd0JBQUw7QUFDRyxjQUFLSyxLQUFMLENBQVdLLFdBQVgsQ0FBdUJDLGdCQUF2QjtBQURILE9BRHVCO0FBQUEsSyxRQU16QkMsZSxHQUFrQixZQUFNO0FBQUEsVUFDQ0MsVUFERCxHQUNrQixNQUFLUixLQUR2QixDQUNkSyxXQURjLENBQ0NHLFVBREQ7O0FBRXRCLFVBQU1DLGVBQWVELGNBQWNBLFdBQVdFLE1BQXpCLEdBQ2pCO0FBQUEsZUFBUyw4QkFBQyxVQUFELENBQVksTUFBWixhQUFtQixLQUFLQyxNQUFNQyxHQUE5QixJQUF1Q0QsTUFBTVgsS0FBN0MsRUFBVDtBQUFBLE9BRGlCLEdBRWpCO0FBQUEsZUFDQSw4QkFBQywwQ0FBRDtBQUNFLGdCQUFNVyxLQURSO0FBRUUsZUFBS0EsTUFBTUMsR0FGYjtBQUdFLHlCQUFlLE1BQUtmO0FBSHRCLFdBSU0sTUFBS0csS0FKWCxFQURBO0FBQUEsT0FGSjtBQVNBLGFBQU8sTUFBS0UsUUFBTCxHQUFnQlcsR0FBaEIsQ0FBb0JKLFlBQXBCLENBQVA7QUFDRCxLOzs7cUJBRURLLE0scUJBQVM7QUFBQSxpQkFHSCxLQUFLZCxLQUhGO0FBQUEsUUFFTGUsU0FGSyxVQUVMQSxTQUZLO0FBQUEsUUFFTVYsV0FGTixVQUVNQSxXQUZOOztBQUlQLFFBQU1XLGlCQUFpQkQsVUFBVSxVQUFWLEVBQXNCLEtBQUtmLEtBQTNCLENBQXZCO0FBQ0EsUUFBTWlCLGdCQUFnQkMsU0FBU2IsWUFBWVksYUFBckIsRUFBb0MsRUFBcEMsQ0FBdEI7QUFMTyxRQU1DRSxTQU5ELEdBTWVILGNBTmYsQ0FNQ0csU0FORDs7QUFPUCxRQUFNQyxZQUFZLEtBQUtsQixRQUFMLEdBQWdCbUIsTUFBbEM7QUFDQSxRQUFJQyxhQUFhSCxTQUFqQjs7QUFFQSxRQUFJQyxZQUFZSCxhQUFaLEdBQTRCRSxTQUFoQyxFQUEyQ0csYUFBYUYsWUFBWUgsYUFBekI7QUFDM0MsUUFBSUssZUFBZSxDQUFuQixFQUFzQkEsYUFBYUwsYUFBYjtBQUN0QixXQUNFO0FBQUMsNkJBQUQ7QUFBQTtBQUNFLG1CQUFXLENBQUMsS0FBS2YsUUFBTCxHQUFnQm1CLE1BQWpCLEdBQTZCMUIsWUFBN0IsNkJBQXNFQSxZQUF0RSxlQURiO0FBRUUsYUFBSyxLQUFLNEIsVUFGWjtBQUdFLHlCQUFpQkQsVUFIbkI7QUFJRSx1QkFBZUw7QUFKakI7QUFNR0csa0JBQVksS0FBS2IsZUFBTCxFQUFaLEdBQXFDLEtBQUtILHNCQUFMO0FBTnhDLEtBREY7QUFVRCxHOzs7RUF0RG9Cb0IsZ0JBQU1DLGE7O2tCQW1FZDdCLFEiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLW1lbnUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LW9wdGlvbi5jb21wb25lbnQnO1xuLy8gT3RoZXIgaW1wb3J0c1xuaW1wb3J0ICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS5zY3NzJztcblxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZSc7XG5cbmNsYXNzIE1lbnVMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIG9uT3B0aW9uQ2xpY2sgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0T3B0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHNlbGVjdE9wdGlvbihpdGVtLnByb3BzLmRhdGEpO1xuICB9O1xuXG4gIGdldEl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuIFtdO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfTtcblxuICByZW5kZXJOb09wdGlvbnNNZXNzYWdlID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LW5vLW9wdGlvbnMtbWVzc2FnZWB9PlxuICAgICAge3RoaXMucHJvcHMuc2VsZWN0UHJvcHMubm9PcHRpb25zTWVzc2FnZSgpfVxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJlbmRlck1lbnVJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdFByb3BzOiB7IGNvbXBvbmVudHMgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByZW5kZXJPcHRpb24gPSBjb21wb25lbnRzICYmIGNvbXBvbmVudHMuT3B0aW9uXG4gICAgICA/IGNoaWxkID0+IDxjb21wb25lbnRzLk9wdGlvbiBrZXk9e2NoaWxkLmtleX0gey4uLmNoaWxkLnByb3BzfSAvPlxuICAgICAgOiBjaGlsZCA9PiAoXG4gICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgaXRlbT17Y2hpbGR9XG4gICAgICAgICAga2V5PXtjaGlsZC5rZXl9XG4gICAgICAgICAgb25PcHRpb25DbGljaz17dGhpcy5vbk9wdGlvbkNsaWNrfVxuICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAvPik7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKS5tYXAocmVuZGVyT3B0aW9uKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZ2V0U3R5bGVzLCBzZWxlY3RQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZW51TGlzdFN0eWxlcyA9IGdldFN0eWxlcygnbWVudUxpc3QnLCB0aGlzLnByb3BzKTtcbiAgICBjb25zdCBjb250cm9sSGVpZ2h0ID0gcGFyc2VJbnQoc2VsZWN0UHJvcHMuY29udHJvbEhlaWdodCwgMTApO1xuICAgIGNvbnN0IHsgbWF4SGVpZ2h0IH0gPSBtZW51TGlzdFN0eWxlcztcbiAgICBjb25zdCBpdGVtQ291bnQgPSB0aGlzLmdldEl0ZW1zKCkubGVuZ3RoO1xuICAgIGxldCBsaXN0SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuXG4gICAgaWYgKGl0ZW1Db3VudCAqIGNvbnRyb2xIZWlnaHQgPCBtYXhIZWlnaHQpIGxpc3RIZWlnaHQgPSBpdGVtQ291bnQgKiBjb250cm9sSGVpZ2h0O1xuICAgIGlmIChsaXN0SGVpZ2h0ID09PSAwKSBsaXN0SGVpZ2h0ID0gY29udHJvbEhlaWdodDtcbiAgICByZXR1cm4gKFxuICAgICAgPEluZmluaXRlXG4gICAgICAgIGNsYXNzTmFtZT17IXRoaXMuZ2V0SXRlbXMoKS5sZW5ndGggPyBgJHtDTEFTU19QUkVGSVh9LW1lbnUtbGlzdCBuby1vcHRpb25zYCA6IGAke0NMQVNTX1BSRUZJWH0tbWVudS1saXN0YH1cbiAgICAgICAgcmVmPXt0aGlzLnNldExpc3RSZWZ9XG4gICAgICAgIGNvbnRhaW5lckhlaWdodD17bGlzdEhlaWdodH1cbiAgICAgICAgZWxlbWVudEhlaWdodD17Y29udHJvbEhlaWdodH1cbiAgICAgID5cbiAgICAgICAge2l0ZW1Db3VudCA/IHRoaXMucmVuZGVyTWVudUl0ZW1zKCkgOiB0aGlzLnJlbmRlck5vT3B0aW9uc01lc3NhZ2UoKX1cbiAgICAgIDwvSW5maW5pdGU+XG4gICAgKTtcbiAgfVxufVxuXG5NZW51TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGdldFN0eWxlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBub09wdGlvbnNNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHNlbGVjdE9wdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0O1xuIl19