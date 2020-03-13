'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ocCmTheme = require('@opuscapita/oc-cm-theme');

var _ocCmTheme2 = _interopRequireDefault(_ocCmTheme);

var _dropdownIndicator = require('./components/dropdown-indicator.component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingSelectBase = (_temp = _class = function (_React$PureComponent) {
  _inherits(FloatingSelectBase, _React$PureComponent);

  function FloatingSelectBase(props) {
    _classCallCheck(this, FloatingSelectBase);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.getNonce = function () {
      var nonce = null;
      // Couldn't figure out a way to get the __webpack_nonce__ directly, so in the meantime
      // we'll use window.NONCE_ID
      if (window && window.NONCE_ID) nonce = window.NONCE_ID;
      return nonce;
    };

    _this.handleOpenMenu = function () {
      return _this.setState({
        components: { DropdownIndicator: _dropdownIndicator.DropdownCloseIndicator }
      });
    };

    _this.handleCloseMenu = function () {
      return _this.setState({
        components: { DropdownIndicator: _dropdownIndicator.DropdownOpenIndicator }
      });
    };

    _this.state = {
      components: {
        DropdownIndicator: _dropdownIndicator.DropdownOpenIndicator
      }
    };
    return _this;
  }

  return FloatingSelectBase;
}(_react2.default.PureComponent), _class.defaultProps = {
  controlHeight: _ocCmTheme2.default.formControls.input.height,
  customStyles: {}
}, _temp);
exports.default = FloatingSelectBase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRmxvYXRpbmdTZWxlY3RCYXNlIiwicHJvcHMiLCJnZXROb25jZSIsIm5vbmNlIiwid2luZG93IiwiTk9OQ0VfSUQiLCJoYW5kbGVPcGVuTWVudSIsInNldFN0YXRlIiwiY29tcG9uZW50cyIsIkRyb3Bkb3duSW5kaWNhdG9yIiwiRHJvcGRvd25DbG9zZUluZGljYXRvciIsImhhbmRsZUNsb3NlTWVudSIsIkRyb3Bkb3duT3BlbkluZGljYXRvciIsInN0YXRlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiY29udHJvbEhlaWdodCIsInRoZW1lIiwiZm9ybUNvbnRyb2xzIiwiaW5wdXQiLCJoZWlnaHQiLCJjdXN0b21TdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7O21CQUFBO0FBQ0E7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBS3FCQSxrQjs7O0FBa0NuQiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQSxVQVNuQkMsUUFUbUIsR0FTUixZQUFNO0FBQ2YsVUFBSUMsUUFBUSxJQUFaO0FBQ0E7QUFDQTtBQUNBLFVBQUlDLFVBQVVBLE9BQU9DLFFBQXJCLEVBQStCRixRQUFRQyxPQUFPQyxRQUFmO0FBQy9CLGFBQU9GLEtBQVA7QUFDRCxLQWZrQjs7QUFBQSxVQWlCbkJHLGNBakJtQixHQWlCRjtBQUFBLGFBQU0sTUFBS0MsUUFBTCxDQUFjO0FBQ25DQyxvQkFBWSxFQUFFQyxtQkFBbUJDLHlDQUFyQjtBQUR1QixPQUFkLENBQU47QUFBQSxLQWpCRTs7QUFBQSxVQXFCbkJDLGVBckJtQixHQXFCRDtBQUFBLGFBQU0sTUFBS0osUUFBTCxDQUFjO0FBQ3BDQyxvQkFBWSxFQUFFQyxtQkFBbUJHLHdDQUFyQjtBQUR3QixPQUFkLENBQU47QUFBQSxLQXJCQzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hMLGtCQUFZO0FBQ1ZDLDJCQUFtQkc7QUFEVDtBQURELEtBQWI7QUFGaUI7QUFPbEI7OztFQXpDNkNFLGdCQUFNQyxhLFVBNkI3Q0MsWSxHQUFlO0FBQ3BCQyxpQkFBZUMsb0JBQU1DLFlBQU4sQ0FBbUJDLEtBQW5CLENBQXlCQyxNQURwQjtBQUVwQkMsZ0JBQWM7QUFGTSxDO2tCQTdCSHRCLGtCIiwiZmlsZSI6ImZsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLXRoZW1lJztcbmltcG9ydCB7XG4gIERyb3Bkb3duQ2xvc2VJbmRpY2F0b3IsXG4gIERyb3Bkb3duT3BlbkluZGljYXRvcixcbn0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duLWluZGljYXRvci5jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZ1NlbGVjdEJhc2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250cm9sSGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1c3RvbVN0eWxlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNsZWFySW5kaWNhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGNvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBjb250cm9sOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGRyb3Bkb3duSW5kaWNhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGdyb3VwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGdyb3VwSGVhZGluZzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBpbmRpY2F0b3JzQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGluZGljYXRvclNlcGFyYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBpbnB1dDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBsb2FkaW5nSW5kaWNhdG9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGxvYWRpbmdNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG1lbnU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbWVudUxpc3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbWVudVBvcnRhbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBtdWx0aVZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG11bHRpVmFsdWVMYWJlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBtdWx0aVZhbHVlUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG5vT3B0aW9uc01lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb3B0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHNpbmdsZVZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHZhbHVlQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB9KSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbnRyb2xIZWlnaHQ6IHRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5oZWlnaHQsXG4gICAgY3VzdG9tU3R5bGVzOiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0Tm9uY2UgPSAoKSA9PiB7XG4gICAgbGV0IG5vbmNlID0gbnVsbDtcbiAgICAvLyBDb3VsZG4ndCBmaWd1cmUgb3V0IGEgd2F5IHRvIGdldCB0aGUgX193ZWJwYWNrX25vbmNlX18gZGlyZWN0bHksIHNvIGluIHRoZSBtZWFudGltZVxuICAgIC8vIHdlJ2xsIHVzZSB3aW5kb3cuTk9OQ0VfSURcbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5OT05DRV9JRCkgbm9uY2UgPSB3aW5kb3cuTk9OQ0VfSUQ7XG4gICAgcmV0dXJuIG5vbmNlO1xuICB9O1xuXG4gIGhhbmRsZU9wZW5NZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgY29tcG9uZW50czogeyBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25DbG9zZUluZGljYXRvciB9LFxuICB9KTtcblxuICBoYW5kbGVDbG9zZU1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bk9wZW5JbmRpY2F0b3IgfSxcbiAgfSk7XG59XG4iXX0=