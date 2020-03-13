var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-nested-ternary */
import theme, { colors } from '@opuscapita/oc-cm-theme';

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
        backgroundColor: state.isDisabled ? '#eee' : colors.white,
        borderColor: state.isFocused ? colors.yellow : colors.grey3,
        borderRadius: 0,
        boxShadow: state.isFocused ? 'inset 0 1px 1px ' + colors.white + ', 0 0 8px ' + colors.yellow : 0,
        '&:hover': {
          borderColor: state.isFocused ? colors.yellow : colors.grey3
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
        paddingTop: theme.halfGutterWidth,
        paddingLeft: theme.gutterWidth,
        paddingBottom: theme.halfGutterWidth,
        '&:hover': {
          backgroundColor: colors.grey4
        }
      };
    },
    indicatorSeparator: function indicatorSeparator() {
      return { display: 'none' };
    },
    input: function input(base) {
      return _extends({}, base, {
        color: colors.grey9,
        padding: 0,
        margin: 0
      });
    },
    menu: function menu(base) {
      return _extends({}, base, {
        border: '1px solid ' + colors.grey6,
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
        backgroundColor: colors.grey5,
        borderRadius: 0,
        color: colors.grey9
      });
    },
    multiValueRemove: function multiValueRemove(base) {
      return _extends({}, base, {
        backgroundColor: colors.grey5,
        borderRadius: 0,
        color: colors.grey9,
        ':hover': {
          backgroundColor: colors.grey8,
          color: colors.white
        },
        flex: '0 0 auto'
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        ':active': { backgroundColor: 'none' },
        backgroundColor: state.isSelected ? colors.grey5 : state.isFocused ? colors.grey4 : 'transparent',
        color: state.isDisabled ? colors.grey9 : state.isSelected ? colors.grey9 : 'inherit',
        display: state.data.isHidden && !state.data.match ? 'none' : 'block',
        ':hover': { backgroundColor: colors.grey4 },
        minHeight: 'calc(' + inputHeight + ' - 2px)', // 1px borders
        paddingLeft: state.data.group ? '50px' : '12px'
      });
    },
    singleValue: function singleValue(base) {
      return _extends({}, base, {
        color: colors.grey9
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
        color: colors.grey9,
        ':hover': {
          cursor: 'pointer',
          color: colors.grey9
        },
        paddingRight: '0'
      });
    },
    dropdownIndicator: function dropdownIndicator(base, state) {
      return _extends({}, base, {
        color: colors.grey9,
        ':hover': {
          cursor: 'pointer',
          color: colors.grey9
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

export default styles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNvbG9ycyIsIm1haW5TdHlsZXMiLCJjb250YWluZXIiLCJiYXNlIiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwiY29udHJvbCIsInN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwiaXNEaXNhYmxlZCIsIndoaXRlIiwiYm9yZGVyQ29sb3IiLCJpc0ZvY3VzZWQiLCJ5ZWxsb3ciLCJncmV5MyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1pbkhlaWdodCIsImlucHV0SGVpZ2h0IiwiYm94U2l6aW5nIiwib3V0bGluZSIsImZsZXhXcmFwIiwiZ3JvdXAiLCJwYWRkaW5nIiwiZ3JvdXBIZWFkaW5nIiwiZm9udFdlaWdodCIsInBhZGRpbmdUb3AiLCJoYWxmR3V0dGVyV2lkdGgiLCJwYWRkaW5nTGVmdCIsImd1dHRlcldpZHRoIiwicGFkZGluZ0JvdHRvbSIsImdyZXk0IiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwiZGlzcGxheSIsImlucHV0IiwiY29sb3IiLCJncmV5OSIsIm1hcmdpbiIsIm1lbnUiLCJib3JkZXIiLCJncmV5NiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInpJbmRleCIsIm1lbnVQb3J0YWwiLCJtZW51TGlzdCIsIm11bHRpVmFsdWVMYWJlbCIsImdyZXk1IiwibXVsdGlWYWx1ZVJlbW92ZSIsImdyZXk4IiwiZmxleCIsIm9wdGlvbiIsImlzU2VsZWN0ZWQiLCJkYXRhIiwiaXNIaWRkZW4iLCJtYXRjaCIsInNpbmdsZVZhbHVlIiwidmFsdWVDb250YWluZXIiLCJvdmVyZmxvdyIsImluZGljYXRvcnNDb250YWluZXIiLCJoZWlnaHQiLCJjbGVhckluZGljYXRvciIsImN1cnNvciIsInBhZGRpbmdSaWdodCIsImRyb3Bkb3duSW5kaWNhdG9yIiwic2VsZWN0UHJvcHMiLCJpc0NsZWFyYWJsZSIsImhhc1ZhbHVlIiwibWVyZ2VTdHlsZXMiLCJiYXNlU3R5bGVzIiwiY3VzdG9tU3R5bGVzIiwibWVyZ2VkU3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxNQUFoQixRQUE4Qix5QkFBOUI7O0FBRUE7QUFDQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUFnQjtBQUNqQ0MsZUFBVztBQUFBLDBCQUNOQyxJQURNO0FBRVRDLGVBQU8sTUFGRTtBQUdUQyxvQkFBWTtBQUhIO0FBQUEsS0FEc0I7QUFNakNDLGFBQVMsaUJBQUNILElBQUQsRUFBT0ksS0FBUDtBQUFBLDBCQUNKSixJQURJO0FBRVBLLHlCQUFpQkQsTUFBTUUsVUFBTixHQUFtQixNQUFuQixHQUE0QlQsT0FBT1UsS0FGN0M7QUFHUEMscUJBQWFKLE1BQU1LLFNBQU4sR0FBa0JaLE9BQU9hLE1BQXpCLEdBQWtDYixPQUFPYyxLQUgvQztBQUlQQyxzQkFBYyxDQUpQO0FBS1BDLG1CQUFXVCxNQUFNSyxTQUFOLHdCQUFxQ1osT0FBT1UsS0FBNUMsa0JBQThEVixPQUFPYSxNQUFyRSxHQUFnRixDQUxwRjtBQU1QLG1CQUFXO0FBQ1RGLHVCQUFhSixNQUFNSyxTQUFOLEdBQWtCWixPQUFPYSxNQUF6QixHQUFrQ2IsT0FBT2M7QUFEN0MsU0FOSjtBQVNQRyw2QkFBbUJDLFdBQW5CLFlBVE8sRUFTa0M7QUFDekNDLG1CQUFXLFlBVko7QUFXUEMsaUJBQVMsQ0FYRjtBQVlQQyxrQkFBVSxTQVpIO0FBYVBoQixvQkFBWTtBQWJMO0FBQUEsS0FOd0I7QUFxQmpDaUIsV0FBTztBQUFBLGFBQU87QUFDWkMsaUJBQVM7QUFERyxPQUFQO0FBQUEsS0FyQjBCO0FBd0JqQ0Msa0JBQWM7QUFBQSxhQUFPO0FBQ25CQyxvQkFBWSxNQURPO0FBRW5CQyxvQkFBWTNCLE1BQU00QixlQUZDO0FBR25CQyxxQkFBYTdCLE1BQU04QixXQUhBO0FBSW5CQyx1QkFBZS9CLE1BQU00QixlQUpGO0FB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QSxNQUFTLENBQUMzRCxXQUFELEVBQWNvRCxZQUFkLEVBQStCO0FBQzVDLE1BQU1ELGFBQWFwRSxXQUFXaUIsV0FBWCxDQUFuQjtBQUNBLE1BQUlvRCxZQUFKLEVBQWtCO0FBQ2hCLFdBQU9GLFlBQVlDLFVBQVosRUFBd0JDLFlBQXhCLENBQVA7QUFDRDtBQUNELFNBQU9ELFVBQVA7QUFDRCxDQU5EOztBQVFBLGVBQWVRLE1BQWYiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmltcG9ydCB0aGVtZSwgeyBjb2xvcnMgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS10aGVtZSc7XG5cbi8vIFN0eWxlcyBzaGFyZWQgYmV0d2VlbiBib3RoIEZsb2F0aW5nU2VsZWN0IGltcGxlbWVudGF0aW9uc1xuY29uc3QgbWFpblN0eWxlcyA9IGlucHV0SGVpZ2h0ID0+ICh7XG4gIGNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGNvbnRyb2w6IChiYXNlLCBzdGF0ZSkgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuaXNEaXNhYmxlZCA/ICcjZWVlJyA6IGNvbG9ycy53aGl0ZSxcbiAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLnllbGxvdyA6IGNvbG9ycy5ncmV5MyxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiBzdGF0ZS5pc0ZvY3VzZWQgPyBgaW5zZXQgMCAxcHggMXB4ICR7Y29sb3JzLndoaXRlfSwgMCAwIDhweCAke2NvbG9ycy55ZWxsb3d9YCA6IDAsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogc3RhdGUuaXNGb2N1c2VkID8gY29sb3JzLnllbGxvdyA6IGNvbG9ycy5ncmV5MyxcbiAgICB9LFxuICAgIG1pbkhlaWdodDogYGNhbGMoJHtpbnB1dEhlaWdodH0gLSAycHgpYCwgLy8gMXB4IGJvcmRlcnNcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGZsZXhXcmFwOiAnbm8td3JhcCcsXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXG4gIH0pLFxuICBncm91cDogKCkgPT4gKHtcbiAgICBwYWRkaW5nOiAwLFxuICB9KSxcbiAgZ3JvdXBIZWFkaW5nOiAoKSA9PiAoe1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5oYWxmR3V0dGVyV2lkdGgsXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLmd1dHRlcldpZHRoLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLmhhbGZHdXR0ZXJXaWR0aCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk0LFxuICAgIH0sXG4gIH0pLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7IGRpc3BsYXk6ICdub25lJyB9KSxcbiAgaW5wdXQ6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgcGFkZGluZzogMCxcbiAgICBtYXJnaW46IDAsXG4gIH0pLFxuICBtZW51OiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleTZ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgYm94U2hhZG93OiAnMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KScsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpblRvcDogMCxcbiAgICB6SW5kZXg6IDMsXG4gIH0pLFxuICBtZW51UG9ydGFsOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICB6SW5kZXg6IDk5OTksXG4gIH0pLFxuICBtZW51TGlzdDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgcGFkZGluZzogMCxcbiAgfSksXG4gIG11bHRpVmFsdWVMYWJlbDogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTUsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gIH0pLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5NSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgY29sb3I6IGNvbG9ycy5ncmV5OSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTgsXG4gICAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICAgIH0sXG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgfSksXG4gIG9wdGlvbjogKGJhc2UsIHN0YXRlKSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgJzphY3RpdmUnOiB7IGJhY2tncm91bmRDb2xvcjogJ25vbmUnIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkXG4gICAgICA/IGNvbG9ycy5ncmV5NVxuICAgICAgOiBzdGF0ZS5pc0ZvY3VzZWQgPyBjb2xvcnMuZ3JleTQgOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBzdGF0ZS5pc0Rpc2FibGVkXG4gICAgICA/IGNvbG9ycy5ncmV5OVxuICAgICAgOiBzdGF0ZS5pc1NlbGVjdGVkID8gY29sb3JzLmdyZXk5IDogJ2luaGVyaXQnLFxuICAgIGRpc3BsYXk6IHN0YXRlLmRhdGEuaXNIaWRkZW4gJiYgIXN0YXRlLmRhdGEubWF0Y2ggPyAnbm9uZScgOiAnYmxvY2snLFxuICAgICc6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyZXk0IH0sXG4gICAgbWluSGVpZ2h0OiBgY2FsYygke2lucHV0SGVpZ2h0fSAtIDJweClgLCAvLyAxcHggYm9yZGVyc1xuICAgIHBhZGRpbmdMZWZ0OiBzdGF0ZS5kYXRhLmdyb3VwID8gJzUwcHgnIDogJzEycHgnLFxuICB9KSxcbiAgc2luZ2xlVmFsdWU6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gIH0pLFxuICB2YWx1ZUNvbnRhaW5lcjogYmFzZSA9PiAoe1xuICAgIC4uLmJhc2UsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGluZGljYXRvcnNDb250YWluZXI6IGJhc2UgPT4gKHtcbiAgICAuLi5iYXNlLFxuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgZmxleFdyYXA6ICduby13cmFwJyxcbiAgICBoZWlnaHQ6IGBjYWxjKCR7aW5wdXRIZWlnaHR9IC0gMnB4KWAsIC8vIDFweCBib3JkZXJzLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgfSksXG4gIGNsZWFySW5kaWNhdG9yOiBiYXNlID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgfSxcbiAgICBwYWRkaW5nUmlnaHQ6ICcwJyxcbiAgfSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgLi4uYmFzZSxcbiAgICBjb2xvcjogY29sb3JzLmdyZXk5LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZ3JleTksXG4gICAgfSxcbiAgICBwYWRkaW5nTGVmdDogc3RhdGUuc2VsZWN0UHJvcHMuaXNDbGVhcmFibGUgJiYgc3RhdGUuaGFzVmFsdWUgPyAnMCcgOiAnOHB4JyxcbiAgfSksXG59KTtcblxuLy8gbWVyZ2Ugc3R5bGUgZnVuY3Rpb25zIHdpdGggY3VzdG9tU3R5bGUgZnVuY3Rpb25zXG5jb25zdCBtZXJnZVN0eWxlcyA9IChiYXNlU3R5bGVzLCBjdXN0b21TdHlsZXMpID0+IHtcbiAgY29uc3QgbWVyZ2VkU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZVN0eWxlcyk7XG4gIE9iamVjdC5rZXlzKGN1c3RvbVN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGJhc2VTdHlsZXNba2V5XSkge1xuICAgICAgbWVyZ2VkU3R5bGVzW2tleV0gPSAoYmFzZSwgc3RhdGUpID0+ICh7XG4gICAgICAgIC4uLmJhc2UsXG4gICAgICAgIC4uLmJhc2VTdHlsZXNba2V5XSh7fSwgc3RhdGUpLFxuICAgICAgICAuLi5jdXN0b21TdHlsZXNba2V5XSh7fSwgc3RhdGUpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlZFN0eWxlc1trZXldID0gY3VzdG9tU3R5bGVzW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1lcmdlZFN0eWxlcztcbn07XG5cbmNvbnN0IHN0eWxlcyA9IChpbnB1dEhlaWdodCwgY3VzdG9tU3R5bGVzKSA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZXMgPSBtYWluU3R5bGVzKGlucHV0SGVpZ2h0KTtcbiAgaWYgKGN1c3RvbVN0eWxlcykge1xuICAgIHJldHVybiBtZXJnZVN0eWxlcyhiYXNlU3R5bGVzLCBjdXN0b21TdHlsZXMpO1xuICB9XG4gIHJldHVybiBiYXNlU3R5bGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIl19