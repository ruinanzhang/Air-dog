'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-nested-ternary */


var _ocCmTheme = require('@opuscapita/oc-cm-theme');

var _ocCmTheme2 = _interopRequireDefault(_ocCmTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles shared between both FloatingSelect implementations
var mainStyles = function mainStyles(inputHeight) {
  return {
    container: function container(base) {
      return _extends({}, base, {
        width: '100%',
        lineHeight: 'normal'
      });
    },
    control: function control(base, state) {
      return _extends({}, base, {
        backgroundColor: state.isDisabled ? '#eee' : _ocCmTheme.colors.white,
        borderColor: state.isFocused ? _ocCmTheme.colors.yellow : _ocCmTheme.colors.grey3,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + _ocCmTheme.colors.white + ', 0 0 8px ' + _ocCmTheme.colors.yellow : 0,
        '&:hover': {
          borderColor: state.isFocused ? _ocCmTheme.colors.yellow : _ocCmTheme.colors.grey3
        },
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders
        boxSizing: 'border-box',
        outline: 0,
        flexWrap: 'no-wrap',
        lineHeight: 'normal'
      });
    },
    group: function group() {
      return {
        padding: 0
      };
    },
    groupHeading: function groupHeading() {
      return {
        fontWeight: 'bold',
        paddingTop: _ocCmTheme2.default.halfGutterWidth,
        paddingLeft: _ocCmTheme2.default.gutterWidth,
        paddingBottom: _ocCmTheme2.default.halfGutterWidth,
        '&:hover': {
          backgroundColor: _ocCmTheme.colors.grey4
        }
      };
    },
    indicatorSeparator: function indicatorSeparator() {
      return { display: 'none' };
    },
    input: function input(base) {
      return _extends({}, base, {
        color: _ocCmTheme.colors.grey9,
        padding: 0,
        margin: 0
      });
    },
    menu: function menu(base) {
      return _extends({}, base, {
        border: '1px solid ' + _ocCmTheme.colors.grey6,
        borderRadius: 0,
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.175)',
        marginBottom: 0,
        marginTop: 0,
        zIndex: 3
      });
    },
    menuPortal: function menuPortal(base) {
      return _extends({}, base, {
        zIndex: 9999
      });
    },
    menuList: function menuList(base) {
      return _extends({}, base, {
        padding: 0
      });
    },
    multiValueLabel: function multiValueLabel(base) {
      return _extends({}, base, {
        backgroundColor: _ocCmTheme.colors.grey5,
        borderRadius: 0,
        color: _ocCmTheme.colors.grey9
      });
    },
    multiValueRemove: function multiValueRemove(base) {
      return _extends({}, base, {
        backgroundColor: _ocCmTheme.colors.grey5,
        borderRadius: 0,
        color: _ocCmTheme.colors.grey9,
        ':hover': {
          backgroundColor: _ocCmTheme.colors.grey8,
          color: _ocCmTheme.colors.white
        },
        flex: '0 0 auto'
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? _ocCmTheme.colors.grey5 : state.isFocused ? _ocCmTheme.colors.grey4 : 'transparent',
        color: state.isDisabled ? _ocCmTheme.colors.grey9 : state.isSelected ? _ocCmTheme.colors.grey9 : 'inherit',
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: _ocCmTheme.colors.grey4 },
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders
        paddingLeft: state.data.group ? '50px' : '12px'
      });
    },
    singleValue: function singleValue(base) {
      return _extends({}, base, {
        color: _ocCmTheme.colors.grey9
      });
    },
    valueContainer: function valueContainer(base) {
      return _extends({}, base, {
        display: 'flex',
        flex: '1 1 auto',
        flexWrap: 'wrap',
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders,
        boxSizing: 'border-box',
        overflow: 'hidden',
        lineHeight: 'normal'
      });
    },
    indicatorsContainer: function indicatorsContainer(base) {
      return _extends({}, base, {
        flex: '0 0 auto',
        flexWrap: 'no-wrap',
        height: 'calc(' + inputHeight + ' - 2px)', // 1px borders,
        boxSizing: 'border-box',
        overflow: 'hidden',
        lineHeight: 'normal'
      });
    },
    clearIndicator: function clearIndicator(base) {
      return _extends({}, base, {
        color: _ocCmTheme.colors.grey9,
        ':hover': {
          cursor: 'pointer',
          color: _ocCmTheme.colors.grey9
        },
        paddingRight: '0'
      });
    },
    dropdownIndicator: function dropdownIndicator(base, state) {
      return _extends({}, base, {
        color: _ocCmTheme.colors.grey9,
        ':hover': {
          cursor: 'pointer',
          color: _ocCmTheme.colors.grey9
        },
        paddingLeft: state.selectProps.isClearable && state.hasValue ? '0' : '8px'
      });
    }
  };
};

// merge style functions with customStyle functions
var mergeStyles = function mergeStyles(baseStyles, customStyles) {
  var mergedStyles = Object.assign({}, baseStyles);
  Object.keys(customStyles).forEach(function (key) {
    if (baseStyles[key]) {
      mergedStyles[key] = function (base, state) {
        return _extends({}, base, baseStyles[key]({}, state), customStyles[key]({}, state));
      };
    } else {
      mergedStyles[key] = customStyles[key];
    }
  });
  return mergedStyles;
};

var styles = function styles(inputHeight, customStyles) {
  var baseStyles = mainStyles(inputHeight);
  if (customStyles) {
    return mergeStyles(baseStyles, customStyles);
  }
  return baseStyles;
};

exports.default = styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJtYWluU3R5bGVzIiwiY29udGFpbmVyIiwiYmFzZSIsIndpZHRoIiwibGluZUhlaWdodCIsImNvbnRyb2wiLCJzdGF0ZSIsImJhY2tncm91bmRDb2xvciIsImlzRGlzYWJsZWQiLCJjb2xvcnMiLCJ3aGl0ZSIsImJvcmRlckNvbG9yIiwiaXNGb2N1c2VkIiwieWVsbG93IiwiZ3JleTMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtaW5IZWlnaHQiLCJpbnB1dEhlaWdodCIsImJveFNpemluZyIsIm91dGxpbmUiLCJmbGV4V3JhcCIsImdyb3VwIiwicGFkZGluZyIsImdyb3VwSGVhZGluZyIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwidGhlbWUiLCJoYWxmR3V0dGVyV2lkdGgiLCJwYWRkaW5nTGVmdCIsImd1dHRlcldpZHRoIiwicGFkZGluZ0JvdHRvbSIsImdyZXk0IiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJncmV5OSIsIm1hcmdpbiIsIm1lbnUiLCJib3JkZXIiLCJncmV5NiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInpJbmRleCIsIm1lbnVQb3J0YWwiLCJtZW51TGlzdCIsIm11bHRpVmFsdWVMYWJlbCIsImdyZXk1IiwibXVsdGlWYWx1ZVJlbW92ZSIsImdyZXk4IiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJkYXRhIiwiaXNIaWRkZW4iLCJtYXRjaCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJvdmVyZmxvdyIsImluZGljYXRvcnNDb250YWluZXIiLCJoZWlnaHQiLCJjbGVhckluZGljYXRvciIsImN1cnNvciIsInBhZGRpbmdSaWdodCIsImRyb3Bkb3duSW5kaWNhdG9yIiwic2VsZWN0UHJvcHMiLCJpc0NsZWFyYWJsZSIsImhhc1ZhbHVlIiwibWVyZ2VTdHlsZXMiLCJiYXNlU3R5bGVzIiwiY3VzdG9tU3R5bGVzIiwibWVyZ2VkU3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7a1FBQUE7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQWdCO0FBQ2pDQyxlQUFXO0FBQUEsMEJBQ05DLElBRE07QUFFVEMsZUFBTyxNQUZFO0FBR1RDLG9CQUFZO0FBSEg7QUFBQSxLQURzQjtBQU1qQ0MsYUFBUyxpQkFBQ0gsSUFBRCxFQUFPSSxLQUFQO0FBQUEsMEJBQ0pKLElBREk7QUFFUEsseUJBQWlCRCxNQUFNRSxVQUFOLEdBQW1CLE1BQW5CLEdBQTRCQyxrQkFBT0MsS0FGN0M7QUFHUEMscUJBQWFMLE1BQU1NLFNBQU4sR0FBa0JILGtCQUFPSSxNQUF6QixHQUFrQ0osa0JBQU9LLEtBSC9DO0FBSVBDLHNCQUFjLENBSlA7QUFLUEMsbUJBQVdWLE1BQU1NLFNBQU4sd0JBQXFDSCxrQkFBT0MsS0FBNUMsa0JBQThERCxrQkFBT0ksTUFBckUsR0FBZ0YsQ0FMcEY7QUFNUCxtQkFBVztBQUNURix1QkFBYUwsTUFBTU0sU0FBTixHQUFrQkgsa0JBQU9JLE1BQXpCLEdBQWtDSixrQkFBT0s7QUFEN0MsU0FOSjtBQVNQRyw2QkFBbUJDLFdBQW5CLFlBVE8sRUFTa0M7QUFDekNDLG1CQUFXLFlBVko7QUFXUEMsaUJBQVMsQ0FYRjtBQVlQQyxrQkFBVSxTQVpIO0FBYVBqQixvQkFBWTtBQWJMO0FBQUEsS0FOd0I7QUFxQmpDa0IsV0FBTztBQUFBLGFBQU87QUFDWkMsaUJBQVM7QUFERyxPQUFQO0FBQUEsS0FyQjBCO0FBd0JqQ0Msa0JBQWM7QUFBQSxhQUFPO0FBQ25CQyxvQkFBWSxNQURPO0FBRW5CQyxvQkFBWUMsb0JBQU1DLGVBRkM7QUFHbkJDLHFCQUFhRixvQkFBTUcsV0FIQTtBQUluQkMsdUJBQWVKLG9CQUFNQyxlQUpGO0FBS25CLG1CQUFXO0FBQ1RyQiwyQkFBaUJF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UyxDQUFDNUQsV0FBRCxFQUFjcUQsWUFBZCxFQUErQjtBQUM1QyxNQUFNRCxhQUFhdEUsV0FBV2tCLFdBQVgsQ0FBbkI7QUFDQSxNQUFJcUQsWUFBSixFQUFrQjtBQUNoQixXQUFPRixZQUFZQyxVQUFaLEVBQXdCQyxZQUF4QixDQUFQO0FBQ0Q7QUFDRCxTQUFPRCxVQUFQO0FBQ0QsQ0FORDs7a0JBUWVRLE0iLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmltcG9ydCB0aGVtZSwgeyBjb2xvcnMgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS10aGVtZSc7XG5cbi8vIFN0eWxlcyBzaGFyZWQgYmV0d2VlbiBib3RoIEZsb2F0aW5nU2VsZWN0IGltcGxlbWVudGF0aW9uc1xuY29uc3QgbWFpblN0eWxlcyA9IGlucHV0SGVpZ2h0ID0+ICh7XG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNEaXNhYmxlZCA/ICcjZWVlJyA6IGNvbG9ycy53aGl0ZSxcbiAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLnllbGxvdyA6IGNvbG9ycy5ncmV5MyxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBgaW5zZXQgMCAxcHggMXB4ICR7Y29sb3JzLndoaXRlfSwgMCAwIDhweCAke2NvbG9ycy55ZWxsb3d9YCA6IDAsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLnllbGxvdyA6IGNvbG9ycy5ncmV5MyxcbiAgICB9LFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnNcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBncm91cDogKCkgPT4gKHtcbiAgICBwYWRkaW5nOiAwLFxuICB9KSxcbiAgZ3JvdXBIZWFkaW5nOiAoKSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5oYWxmR3V0dGVyV2lkdGgsXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLmd1dHRlcldpZHRoLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLmhhbGZHdXR0ZXJXaWR0aCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk0LFxuICAgIH0sXG4gIH0pLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7IGRpc3BsYXk6ICdub25lJyB9KSxcbiAgaW5wdXQ6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgcGFkZGluZzogMCxcbiAgICBtYXJnaW46IDAsXG4gIH0pLFxuICBtZW51OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTZ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiAnMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KScsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICB6SW5kZXg6IDMsXG4gIH0pLFxuICBtZW51UG9ydGFsOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICB6SW5kZXg6IDk5OTksXG4gIH0pLFxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgfSksXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTUsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gIH0pLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5NSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTgsXG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICAgIH0sXG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgfSksXG4gIG9wdGlvbjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgJzphY3RpdmUnOiB7IGJhY2tncm91bmRDb2xvcjogJ25vbmUnIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkXG4gICAgICA/IGNvbG9ycy5ncmV5NVxuICAgICAgOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuZ3JleTQgOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBzdGF0ZS5pc0Rpc2FibGVkXG4gICAgICA/IGNvbG9ycy5ncmV5OVxuICAgICAgOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmdyZXk5IDogJ2luaGVyaXQnLFxuICAgIGRpc3BsYXk6IHN0YXRlLmRhdGEuaXNIaWRkZW4gJiYgIXN0YXRlLmRhdGEubWF0Y2ggPyAnbm9uZScgOiAnYmxvY2snLFxuICAgICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk0IH0sXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVyc1xuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5kYXRhLmdyb3VwID8gJzUwcHgnIDogJzEycHgnLFxuICB9KSxcbiAgc2luZ2xlVmFsdWU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gIH0pLFxuICB2YWx1ZUNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGluZGljYXRvcnNDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBoZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgfSxcbiAgICBwYWRkaW5nUmlnaHQ6ICcwJyxcbiAgfSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgfSxcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuc2VsZWN0UHJvcHMuaXNDbGVhcmFibGUgJiYgc3RhdGUuaGFzVmFsdWUgPyAnMCcgOiAnOHB4JyxcbiAgfSksXG59KTtcblxuLy8gbWVyZ2Ugc3R5bGUgZnVuY3Rpb25zIHdpdGggY3VzdG9tU3R5bGUgZnVuY3Rpb25zXG5jb25zdCBtZXJnZVN0eWxlcyA9IChiYXNlU3R5bGVzLCBjdXN0b21TdHlsZXMpID0+IHtcbiAgY29uc3QgbWVyZ2VkU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZVN0eWxlcyk7XG4gIE9iamVjdC5rZXlzKGN1c3RvbVN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGJhc2VTdHlsZXNba2V5XSkge1xuICAgICAgbWVyZ2VkU3R5bGVzW2tleV0gPSAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIC4uLmJhc2VTdHlsZXNba2V5XSh7fSwgc3RhdGUpLFxuICAgICAgICAuLi5jdXN0b21TdHlsZXNba2V5XSh7fSwgc3RhdGUpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlZFN0eWxlc1trZXldID0gY3VzdG9tU3R5bGVzW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1lcmdlZFN0eWxlcztcbn07XG5cbmNvbnN0IHN0eWxlcyA9IChpbnB1dEhlaWdodCwgY3VzdG9tU3R5bGVzKSA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZXMgPSBtYWluU3R5bGVzKGlucHV0SGVpZ2h0KTtcbiAgaWYgKGN1c3RvbVN0eWxlcykge1xuICAgIHJldHVybiBtZXJnZVN0eWxlcyhiYXNlU3R5bGVzLCBjdXN0b21TdHlsZXMpO1xuICB9XG4gIHJldHVybiBiYXNlU3R5bGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19