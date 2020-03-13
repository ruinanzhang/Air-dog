var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import theme from '@opuscapita/oc-cm-theme';
import { DropdownCloseIndicator, DropdownOpenIndicator } from './components/dropdown-indicator.component';

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
        components: { DropdownIndicator: DropdownCloseIndicator }
      });
    };

    _this.handleCloseMenu = function () {
      return _this.setState({
        components: { DropdownIndicator: DropdownOpenIndicator }
      });
    };

    _this.state = {
      components: {
        DropdownIndicator: DropdownOpenIndicator
      }
    };
    return _this;
  }

  return FloatingSelectBase;
}(React.PureComponent), _class.defaultProps = {
  controlHeight: theme.formControls.input.height,
  customStyles: {}
}, _temp);
export { FloatingSelectBase as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2Zsb2F0aW5nLXNlbGVjdC1iYXNlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ0aGVtZSIsIkRyb3Bkb3duQ2xvc2VJbmRpY2F0b3IiLCJEcm9wZG93bk9wZW5JbmRpY2F0b3IiLCJGbG9hdGluZ1NlbGVjdEJhc2UiLCJwcm9wcyIsImdldE5vbmNlIiwibm9uY2UiLCJ3aW5kb3ciLCJOT05DRV9JRCIsImhhbmRsZU9wZW5NZW51Iiwic2V0U3RhdGUiLCJjb21wb25lbnRzIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJoYW5kbGVDbG9zZU1lbnUiLCJzdGF0ZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJjb250cm9sSGVpZ2h0IiwiZm9ybUNvbnRyb2xzIiwiaW5wdXQiLCJoZWlnaHQiLCJjdXN0b21TdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQix5QkFBbEI7QUFDQSxTQUNFQyxzQkFERixFQUVFQyxxQkFGRixRQUdPLDJDQUhQOztJQUtxQkMsa0I7OztBQWtDbkIsOEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFTbkJDLFFBVG1CLEdBU1IsWUFBTTtBQUNmLFVBQUlDLFFBQVEsSUFBWjtBQUNBO0FBQ0E7QUFDQSxVQUFJQyxVQUFVQSxPQUFPQyxRQUFyQixFQUErQkYsUUFBUUMsT0FBT0MsUUFBZjtBQUMvQixhQUFPRixLQUFQO0FBQ0QsS0Fma0I7O0FBQUEsVUFpQm5CRyxjQWpCbUIsR0FpQkY7QUFBQSxhQUFNLE1BQUtDLFFBQUwsQ0FBYztBQUNuQ0Msb0JBQVksRUFBRUMsbUJBQW1CWCxzQkFBckI7QUFEdUIsT0FBZCxDQUFOO0FBQUEsS0FqQkU7O0FBQUEsVUFxQm5CWSxlQXJCbUIsR0FxQkQ7QUFBQSxhQUFNLE1BQUtILFFBQUwsQ0FBYztBQUNwQ0Msb0JBQVksRUFBRUMsbUJBQW1CVixxQkFBckI7QUFEd0IsT0FBZCxDQUFOO0FBQUEsS0FyQkM7O0FBRWpCLFVBQUtZLEtBQUwsR0FBYTtBQUNYSCxrQkFBWTtBQUNWQywyQkFBbUJWO0FBRFQ7QUFERCxLQUFiO0FBRmlCO0FBT2xCOzs7RUF6QzZDSixNQUFNaUIsYSxVQTZCN0NDLFksR0FBZTtBQUNwQkMsaUJBQWVqQixNQUFNa0IsWUFBTixDQUFtQkMsS0FBbkIsQ0FBeUJDLE1BRHBCO0FBRXBCQyxnQkFBYztBQUZNLEM7U0E3QkhsQixrQiIsImZpbGUiOiJmbG9hdGluZy1zZWxlY3QtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB0aGVtZSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS10aGVtZSc7XG5pbXBvcnQge1xuICBEcm9wZG93bkNsb3NlSW5kaWNhdG9yLFxuICBEcm9wZG93bk9wZW5JbmRpY2F0b3IsXG59IGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bi1pbmRpY2F0b3IuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRpbmdTZWxlY3RCYXNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udHJvbEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjdXN0b21TdHlsZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjbGVhckluZGljYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBjb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgY29udHJvbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBkcm9wZG93bkluZGljYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBncm91cDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBncm91cEhlYWRpbmc6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgaW5kaWNhdG9yc0NvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBpbmRpY2F0b3JTZXBhcmF0b3I6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgaW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbG9hZGluZ0luZGljYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBsb2FkaW5nTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBtZW51OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG1lbnVMaXN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG1lbnVQb3J0YWw6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbXVsdGlWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBtdWx0aVZhbHVlTGFiZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbXVsdGlWYWx1ZVJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBub09wdGlvbnNNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzaW5nbGVWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICB2YWx1ZUNvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgfSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb250cm9sSGVpZ2h0OiB0aGVtZS5mb3JtQ29udHJvbHMuaW5wdXQuaGVpZ2h0LFxuICAgIGN1c3RvbVN0eWxlczoge30sXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duT3BlbkluZGljYXRvcixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGdldE5vbmNlID0gKCkgPT4ge1xuICAgIGxldCBub25jZSA9IG51bGw7XG4gICAgLy8gQ291bGRuJ3QgZmlndXJlIG91dCBhIHdheSB0byBnZXQgdGhlIF9fd2VicGFja19ub25jZV9fIGRpcmVjdGx5LCBzbyBpbiB0aGUgbWVhbnRpbWVcbiAgICAvLyB3ZSdsbCB1c2Ugd2luZG93Lk5PTkNFX0lEXG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuTk9OQ0VfSUQpIG5vbmNlID0gd2luZG93Lk5PTkNFX0lEO1xuICAgIHJldHVybiBub25jZTtcbiAgfTtcblxuICBoYW5kbGVPcGVuTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgIGNvbXBvbmVudHM6IHsgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duQ2xvc2VJbmRpY2F0b3IgfSxcbiAgfSk7XG5cbiAgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgY29tcG9uZW50czogeyBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25PcGVuSW5kaWNhdG9yIH0sXG4gIH0pO1xufVxuIl19