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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingSelect = function (_FloatingSelectBase) {
  _inherits(FloatingSelect, _FloatingSelectBase);

  function FloatingSelect() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          customStyles = _this$props.customStyles,
          rest = _objectWithoutProperties(_this$props, ['components', 'customStyles']);

      var comp = _extends({}, components, _this.state.components);
      return _react2.default.createElement(_reactSelect2.default, _extends({}, rest, {
        components: comp,
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        ref: function ref(el) {
          _this.selectRef = el;
        },
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: (0, _styles2.default)(_this.props.controlHeight, customStyles),
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelect;
}(_floatingSelectBase2.default);

exports.default = FloatingSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRmxvYXRpbmdTZWxlY3QiLCJyZW5kZXIiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJjdXN0b21TdHlsZXMiLCJyZXN0IiwiY29tcCIsInN0YXRlIiwiZG9jdW1lbnQiLCJib2R5IiwiZWwiLCJzZWxlY3RSZWYiLCJoYW5kbGVPcGVuTWVudSIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRyb2xIZWlnaHQiLCJnZXROb25jZSIsIkZsb2F0aW5nU2VsZWN0QmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7OzhKQUNuQkMsTSxHQUFTLFlBQU07QUFBQSx3QkFDaUMsTUFBS0MsS0FEdEM7QUFBQSxVQUNMQyxVQURLLGVBQ0xBLFVBREs7QUFBQSxVQUNPQyxZQURQLGVBQ09BLFlBRFA7QUFBQSxVQUN3QkMsSUFEeEI7O0FBRWIsVUFBTUMsb0JBQVlILFVBQVosRUFBMkIsTUFBS0ksS0FBTCxDQUFXSixVQUF0QyxDQUFOO0FBQ0EsYUFDRSw4QkFBQyxxQkFBRCxlQUNNRSxJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSx1QkFBYyxNQUhoQjtBQUlFLDBCQUFrQkUsU0FBU0MsSUFKN0I7QUFLRSxhQUFLLGFBQUNDLEVBQUQsRUFBUTtBQUNYLGdCQUFLQyxTQUFMLEdBQWlCRCxFQUFqQjtBQUNELFNBUEg7QUFRRSxvQkFBWSxNQUFLRSxjQVJuQjtBQVNFLHFCQUFhLE1BQUtDLGVBVHBCO0FBVUUsZ0JBQVEsc0JBQU8sTUFBS1gsS0FBTCxDQUFXWSxhQUFsQixFQUFpQ1YsWUFBakMsQ0FWVjtBQVdFLGVBQU8sTUFBS1csUUFBTDtBQVhULFNBREY7QUFlRCxLOzs7O0VBbkJ5Q0MsNEI7O2tCQUF2QmhCLGMiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Jhc2Uvc3R5bGVzJztcbmltcG9ydCBGbG9hdGluZ1NlbGVjdEJhc2UgZnJvbSAnLi4vYmFzZS9mbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdCBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXBvbmVudHMsIGN1c3RvbVN0eWxlcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wID0geyAuLi5jb21wb25lbnRzLCAuLi50aGlzLnN0YXRlLmNvbXBvbmVudHMgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgY29tcG9uZW50cz17Y29tcH1cbiAgICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgICBtZW51UG9ydGFsVGFyZ2V0PXtkb2N1bWVudC5ib2R5fVxuICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0UmVmID0gZWw7XG4gICAgICAgIH19XG4gICAgICAgIG9uTWVudU9wZW49e3RoaXMuaGFuZGxlT3Blbk1lbnV9XG4gICAgICAgIG9uTWVudUNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlTWVudX1cbiAgICAgICAgc3R5bGVzPXtzdHlsZXModGhpcy5wcm9wcy5jb250cm9sSGVpZ2h0LCBjdXN0b21TdHlsZXMpfVxuICAgICAgICBub25jZT17dGhpcy5nZXROb25jZSgpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=