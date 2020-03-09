'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _styles = require('../base/styles');

var _styles2 = _interopRequireDefault(_styles);

var _floatingSelectBase = require('../base/floating-select-base.component');

var _floatingSelectBase2 = _interopRequireDefault(_floatingSelectBase);

var _floatingSelectInfiniteMenuList = require('./floating-select-infinite-menu-list.component');

var _floatingSelectInfiniteMenuList2 = _interopRequireDefault(_floatingSelectInfiniteMenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingSelectInfinite = function (_FloatingSelectBase) {
  _inherits(FloatingSelectInfinite, _FloatingSelectBase);

  function FloatingSelectInfinite() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectInfinite);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          customStyles = _this$props.customStyles,
          rest = _objectWithoutProperties(_this$props, ['components', 'customStyles']);

      var comp = _extends({}, components, _this.state.components, { MenuList: _floatingSelectInfiniteMenuList2.default });

      // Can't figure out a way to get styles for a single option when using
      // custom MenuList component. So, we'll have to reset the existing styles
      // by returning an empty object and then style these with CSS.
      var modifiedStyles = Object.assign((0, _styles2.default)(_this.props.controlHeight, customStyles), {
        option: function option() {
          return {};
        }
      });

      return _react2.default.createElement(_reactSelect2.default, _extends({}, rest, {
        components: comp,
        styles: modifiedStyles,
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        ref: function ref(el) {
          _this.selectRef = el;
        },
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectInfinite;
}(_floatingSelectBase2.default);

exports.default = FloatingSelectInfinite;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRmxvYXRpbmdTZWxlY3RJbmZpbml0ZSIsInJlbmRlciIsInByb3BzIiwiY29tcG9uZW50cyIsImN1c3RvbVN0eWxlcyIsInJlc3QiLCJjb21wIiwic3RhdGUiLCJNZW51TGlzdCIsIm1vZGlmaWVkU3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udHJvbEhlaWdodCIsIm9wdGlvbiIsImRvY3VtZW50IiwiYm9keSIsImVsIiwic2VsZWN0UmVmIiwiaGFuZGxlT3Blbk1lbnUiLCJoYW5kbGVDbG9zZU1lbnUiLCJnZXROb25jZSIsIkZsb2F0aW5nU2VsZWN0QmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTLFlBQU07QUFBQSx3QkFDaUMsTUFBS0MsS0FEdEM7QUFBQSxVQUNMQyxVQURLLGVBQ0xBLFVBREs7QUFBQSxVQUNPQyxZQURQLGVBQ09BLFlBRFA7QUFBQSxVQUN3QkMsSUFEeEI7O0FBR2IsVUFBTUMsb0JBQ0RILFVBREMsRUFFRCxNQUFLSSxLQUFMLENBQVdKLFVBRlYsRUFHRCxFQUFFSyxrREFBRixFQUhDLENBQU47O0FBTUE7QUFDQTtBQUNBO0FBQ0EsVUFBTUMsaUJBQWlCQyxPQUFPQyxNQUFQLENBQWMsc0JBQU8sTUFBS1QsS0FBTCxDQUFXVSxhQUFsQixFQUFpQ1IsWUFBakMsQ0FBZCxFQUE4RDtBQUNuRlMsZ0JBQVE7QUFBQSxpQkFBTyxFQUFQO0FBQUE7QUFEMkUsT0FBOUQsQ0FBdkI7O0FBSUEsYUFDRSw4QkFBQyxxQkFBRCxlQUNNUixJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSxnQkFBUUcsY0FIVjtBQUlFLHVCQUFjLE1BSmhCO0FBS0UsMEJBQWtCSyxTQUFTQyxJQUw3QjtBQU1FLGFBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FSSDtBQVNFLG9CQUFZLE1BQUtFLGNBVG5CO0FBVUUscUJBQWEsTUFBS0MsZUFWcEI7QUFXRSxlQUFPLE1BQUtDLFFBQUw7QUFYVCxTQURGO0FBZUQsSzs7OztFQWhDaURDLDRCOztrQkFBL0JyQixzQiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtaW5maW5pdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vYmFzZS9zdHlsZXMnO1xuaW1wb3J0IEZsb2F0aW5nU2VsZWN0QmFzZSBmcm9tICcuLi9iYXNlL2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnLi9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUtbWVudS1saXN0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0SW5maW5pdGUgZXh0ZW5kcyBGbG9hdGluZ1NlbGVjdEJhc2Uge1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb21wb25lbnRzLCBjdXN0b21TdHlsZXMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjb21wID0ge1xuICAgICAgLi4uY29tcG9uZW50cyxcbiAgICAgIC4uLnRoaXMuc3RhdGUuY29tcG9uZW50cyxcbiAgICAgIC4uLnsgTWVudUxpc3QgfSxcbiAgICB9O1xuXG4gICAgLy8gQ2FuJ3QgZmlndXJlIG91dCBhIHdheSB0byBnZXQgc3R5bGVzIGZvciBhIHNpbmdsZSBvcHRpb24gd2hlbiB1c2luZ1xuICAgIC8vIGN1c3RvbSBNZW51TGlzdCBjb21wb25lbnQuIFNvLCB3ZSdsbCBoYXZlIHRvIHJlc2V0IHRoZSBleGlzdGluZyBzdHlsZXNcbiAgICAvLyBieSByZXR1cm5pbmcgYW4gZW1wdHkgb2JqZWN0IGFuZCB0aGVuIHN0eWxlIHRoZXNlIHdpdGggQ1NTLlxuICAgIGNvbnN0IG1vZGlmaWVkU3R5bGVzID0gT2JqZWN0LmFzc2lnbihzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0LCBjdXN0b21TdHlsZXMpLCB7XG4gICAgICBvcHRpb246ICgpID0+ICh7fSksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgY29tcG9uZW50cz17Y29tcH1cbiAgICAgICAgc3R5bGVzPXttb2RpZmllZFN0eWxlc31cbiAgICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgICBtZW51UG9ydGFsVGFyZ2V0PXtkb2N1bWVudC5ib2R5fVxuICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0UmVmID0gZWw7XG4gICAgICAgIH19XG4gICAgICAgIG9uTWVudU9wZW49e3RoaXMuaGFuZGxlT3Blbk1lbnV9XG4gICAgICAgIG9uTWVudUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlTWVudX1cbiAgICAgICAgbm9uY2U9e3RoaXMuZ2V0Tm9uY2UoKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcbn1cbiJdfQ==