var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Creatable from 'react-select/creatable';
import styles from '../base/styles';
import FloatingSelectBase from '../base/floating-select-base.component';

var FloatingSelectCreatable = function (_FloatingSelectBase) {
  _inherits(FloatingSelectCreatable, _FloatingSelectBase);

  function FloatingSelectCreatable() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingSelectCreatable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _FloatingSelectBase.call.apply(_FloatingSelectBase, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          components = _this$props.components,
          customStyles = _this$props.customStyles,
          rest = _objectWithoutProperties(_this$props, ['components', 'customStyles']);

      var comp = _extends({}, components, _this.state.components);
      return React.createElement(Creatable, _extends({}, rest, {
        components: comp,
        menuPlacement: 'auto',
        menuPortalTarget: document.body,
        ref: function ref(el) {
          _this.selectRef = el;
        },
        onMenuOpen: _this.handleOpenMenu,
        onMenuClose: _this.handleCloseMenu,
        styles: styles(_this.props.controlHeight, customStyles),
        nonce: _this.getNonce()
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return FloatingSelectCreatable;
}(FloatingSelectBase);

export { FloatingSelectCreatable as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mbG9hdGluZy1zZWxlY3QvZmxvYXRpbmctc2VsZWN0LWNyZWF0YWJsZS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ3JlYXRhYmxlIiwic3R5bGVzIiwiRmxvYXRpbmdTZWxlY3RCYXNlIiwiRmxvYXRpbmdTZWxlY3RDcmVhdGFibGUiLCJyZW5kZXIiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJjdXN0b21TdHlsZXMiLCJyZXN0IiwiY29tcCIsInN0YXRlIiwiZG9jdW1lbnQiLCJib2R5IiwiZWwiLCJzZWxlY3RSZWYiLCJoYW5kbGVPcGVuTWVudSIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRyb2xIZWlnaHQiLCJnZXROb25jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHdCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsZ0JBQW5CO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0Isd0NBQS9COztJQUVxQkMsdUI7Ozs7Ozs7Ozs7Ozs4SkFDbkJDLE0sR0FBUyxZQUFNO0FBQUEsd0JBQ2lDLE1BQUtDLEtBRHRDO0FBQUEsVUFDTEMsVUFESyxlQUNMQSxVQURLO0FBQUEsVUFDT0MsWUFEUCxlQUNPQSxZQURQO0FBQUEsVUFDd0JDLElBRHhCOztBQUViLFVBQU1DLG9CQUFZSCxVQUFaLEVBQTJCLE1BQUtJLEtBQUwsQ0FBV0osVUFBdEMsQ0FBTjtBQUNBLGFBQ0Usb0JBQUMsU0FBRCxlQUNNRSxJQUROO0FBRUUsb0JBQVlDLElBRmQ7QUFHRSx1QkFBYyxNQUhoQjtBQUlFLDBCQUFrQkUsU0FBU0MsSUFKN0I7QUFLRSxhQUFLLGFBQUNDLEVBQUQsRUFBUTtBQUNYLGdCQUFLQyxTQUFMLEdBQWlCRCxFQUFqQjtBQUNELFNBUEg7QUFRRSxvQkFBWSxNQUFLRSxjQVJuQjtBQVNFLHFCQUFhLE1BQUtDLGVBVHBCO0FBVUUsZ0JBQVFmLE9BQU8sTUFBS0ksS0FBTCxDQUFXWSxhQUFsQixFQUFpQ1YsWUFBakMsQ0FWVjtBQVdFLGVBQU8sTUFBS1csUUFBTDtBQVhULFNBREY7QUFlRCxLOzs7O0VBbkJrRGhCLGtCOztTQUFoQ0MsdUIiLCJmaWxlIjoiZmxvYXRpbmctc2VsZWN0LWNyZWF0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENyZWF0YWJsZSBmcm9tICdyZWFjdC1zZWxlY3QvY3JlYXRhYmxlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vYmFzZS9zdHlsZXMnO1xuaW1wb3J0IEZsb2F0aW5nU2VsZWN0QmFzZSBmcm9tICcuLi9iYXNlL2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0aW5nU2VsZWN0Q3JlYXRhYmxlIGV4dGVuZHMgRmxvYXRpbmdTZWxlY3RCYXNlIHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29tcG9uZW50cywgY3VzdG9tU3R5bGVzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNvbXAgPSB7IC4uLmNvbXBvbmVudHMsIC4uLnRoaXMuc3RhdGUuY29tcG9uZW50cyB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Q3JlYXRhYmxlXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBjb21wb25lbnRzPXtjb21wfVxuICAgICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICAgIG1lbnVQb3J0YWxUYXJnZXQ9e2RvY3VtZW50LmJvZHl9XG4gICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBlbDtcbiAgICAgICAgfX1cbiAgICAgICAgb25NZW51T3Blbj17dGhpcy5oYW5kbGVPcGVuTWVudX1cbiAgICAgICAgb25NZW51Q2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgICBzdHlsZXM9e3N0eWxlcyh0aGlzLnByb3BzLmNvbnRyb2xIZWlnaHQsIGN1c3RvbVN0eWxlcyl9XG4gICAgICAgIG5vbmNlPXt0aGlzLmdldE5vbmNlKCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==