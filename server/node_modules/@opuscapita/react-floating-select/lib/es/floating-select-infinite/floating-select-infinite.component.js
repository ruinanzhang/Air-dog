var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Select from 'react-select';
import styles from '../base/styles';
import FloatingSelectBase from '../base/floating-select-base.component';
import MenuList from './floating-select-infinite-menu-list.component';

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

      var comp = _extends({}, components, _this.state.components, { MenuList: MenuList });

      // Can't figure out a way to get styles for a single option when using
      // custom MenuList component. So, we'll have to reset the existing styles
      // by returning an empty object and then style these with CSS.
      var modifiedStyles = Object.assign(styles(_this.props.controlHeight, customStyles), {
        option: function option() {
          return {};
        }
      });

      return React.createElement(Select, _extends({}, rest, {
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
}(FloatingSelectBase);

export { FloatingSelectInfinite as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QtaW5maW5pdGUvZmxvYXRpbmctc2VsZWN0LWluZmluaXRlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJTZWxlY3QiLCJzdHlsZXMiLCJGbG9hdGluZ1NlbGVjdEJhc2UiLCJNZW51TGlzdCIsIkZsb2F0aW5nU2VsZWN0SW5maW5pdGUiLCJyZW5kZXIiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJjdXN0b21TdHlsZXMiLCJyZXN0IiwiY29tcCIsInN0YXRlIiwibW9kaWZpZWRTdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJjb250cm9sSGVpZ2h0Iiwib3B0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiZWwiLCJzZWxlY3RSZWYiLCJoYW5kbGVPcGVuTWVudSIsImhhbmRsZUNsb3NlTWVudSIsImdldE5vbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsY0FBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGdCQUFuQjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLHdDQUEvQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZ0RBQXJCOztJQUVxQkMsc0I7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUyxZQUFNO0FBQUEsd0JBQ2lDLE1BQUtDLEtBRHRDO0FBQUEsVUFDTEMsVUFESyxlQUNMQSxVQURLO0FBQUEsVUFDT0MsWUFEUCxlQUNPQSxZQURQO0FBQUEsVUFDd0JDLElBRHhCOztBQUdiLFVBQU1DLG9CQUNESCxVQURDLEVBRUQsTUFBS0ksS0FBTCxDQUFXSixVQUZWLEVBR0QsRUFBRUosa0JBQUYsRUFIQyxDQUFOOztBQU1BO0FBQ0E7QUFDQTtBQUNBLFVBQU1TLGlCQUFpQkMsT0FBT0MsTUFBUCxDQUFjYixPQUFPLE1BQUtLLEtBQUwsQ0FBV1MsYUFBbEIsRUFBaUNQLFlBQWpDLENBQWQsRUFBOEQ7QUFDbkZRLGdCQUFRO0FBQUEsaUJBQU8sRUFBUDtBQUFBO0FBRDJFLE9BQTlELENBQXZCOztBQUlBLGFBQ0Usb0JBQUMsTUFBRCxlQUNNUCxJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSxnQkFBUUUsY0FIVjtBQUlFLHVCQUFjLE1BSmhCO0FBS0UsMEJBQWtCSyxTQUFTQyxJQUw3QjtBQU1FLGFBQUssYUFBQ0MsRUFBRCxFQUFRO0FBQ1gsZ0JBQUtDLFNBQUwsR0FBaUJELEVBQWpCO0FBQ0QsU0FSSDtBQVNFLG9CQUFZLE1BQUtFLGNBVG5CO0FBVUUscUJBQWEsTUFBS0MsZUFWcEI7QUFXRSxlQUFPLE1BQUtDLFFBQUw7QUFYVCxTQURGO0FBZUQsSzs7OztFQWhDaURyQixrQjs7U0FBL0JFLHNCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9iYXNlL3N0eWxlcyc7XG5pbXBvcnQgRmxvYXRpbmdTZWxlY3RCYXNlIGZyb20gJy4uL2Jhc2UvZmxvYXRpbmctc2VsZWN0LWJhc2UuY29tcG9uZW50JztcbmltcG9ydCBNZW51TGlzdCBmcm9tICcuL2Zsb2F0aW5nLXNlbGVjdC1pbmZpbml0ZS1tZW51LWxpc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RJbmZpbml0ZSBleHRlbmRzIEZsb2F0aW5nU2VsZWN0QmFzZSB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbXBvbmVudHMsIGN1c3RvbVN0eWxlcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNvbXAgPSB7XG4gICAgICAuLi5jb21wb25lbnRzLFxuICAgICAgLi4udGhpcy5zdGF0ZS5jb21wb25lbnRzLFxuICAgICAgLi4ueyBNZW51TGlzdCB9LFxuICAgIH07XG5cbiAgICAvLyBDYW4ndCBmaWd1cmUgb3V0IGEgd2F5IHRvIGdldCBzdHlsZXMgZm9yIGEgc2luZ2xlIG9wdGlvbiB3aGVuIHVzaW5nXG4gICAgLy8gY3VzdG9tIE1lbnVMaXN0IGNvbXBvbmVudC4gU28sIHdlJ2xsIGhhdmUgdG8gcmVzZXQgdGhlIGV4aXN0aW5nIHN0eWxlc1xuICAgIC8vIGJ5IHJldHVybmluZyBhbiBlbXB0eSBvYmplY3QgYW5kIHRoZW4gc3R5bGUgdGhlc2Ugd2l0aCBDU1MuXG4gICAgY29uc3QgbW9kaWZpZWRTdHlsZXMgPSBPYmplY3QuYXNzaWduKHN0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQsIGN1c3RvbVN0eWxlcyksIHtcbiAgICAgIG9wdGlvbjogKCkgPT4gKHt9KSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBjb21wb25lbnRzPXtjb21wfVxuICAgICAgICBzdHlsZXM9e21vZGlmaWVkU3R5bGVzfVxuICAgICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICAgIG1lbnVQb3J0YWxUYXJnZXQ9e2RvY3VtZW50LmJvZHl9XG4gICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBlbDtcbiAgICAgICAgfX1cbiAgICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cbiAgICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgICBub25jZT17dGhpcy5nZXROb25jZSgpfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xufVxuIl19