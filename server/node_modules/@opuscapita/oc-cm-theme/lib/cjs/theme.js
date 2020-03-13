'use strict';

exports.__esModule = true;

var _colors = require('./colors');

var _constants = require('./constants');

/**
 * Keep this alphabetical order if possible
 */
// Certain variable values are temporarily imported from oc-cm-common-styles
exports.default = {
    colors: _colors.colors,
    column: {
        minWidth: '400px'
    },
    contentBackgroundColor: _colors.colors.white,
    formControls: {
        button: {
            backgroundColor: _colors.colors.grey10,
            primaryBackgroundColor: _colors.colors.orange2,
            textColor: _colors.colors.white,
            minWidth: '70px'
        },
        input: {
            borderColor: _colors.colors.grey7,
            focusBorderColor: _colors.colors.yellow,
            height: '34px'
        }
    },
    halfGutterWidth: '0.5rem',
    header: {
        height: _constants.constants.navBarHeight,
        button: {
            height: '2rem'
        }
    },
    gutterWidth: '1rem',
    inputColumn: {
        flexDirection: 'column',
        labelWidth: '225px',
        labelContainerLineHeight: '1.5rem',
        errorContainer: {
            height: '1.5rem'
        },
        requiredIndicator: {
            fontSize: _constants.constants.fontSize.h4
        }
    },
    inputRow: {
        flexDirection: 'row',
        labelWidth: '225px',
        errorContainer: {
            height: '1.5rem'
        },
        requiredIndicator: {
            fontSize: _constants.constants.fontSize.h4
        }
    },
    screenSizes: {
        medium: '40rem',
        large: '64rem',
        xLarge: '75rem'
    },
    text: {
        title: {
            fontSize: _constants.constants.fontSize.medium,
            fontWeight: _constants.constants.fontWeight.bold
        },
        subTitle: {
            fontSize: _constants.constants.fontSize.medium,
            fontWeight: _constants.constants.fontWeight.normal
        },
        error: {
            fontSize: _constants.constants.fontSize.small,
            color: _colors.colors.red
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJjb2x1bW4iLCJtaW5XaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZSIsImZvcm1Db250cm9scyIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImdyZXkxMCIsInByaW1hcnlCYWNrZ3JvdW5kQ29sb3IiLCJvcmFuZ2UyIiwidGV4dENvbG9yIiwiaW5wdXQiLCJib3JkZXJDb2xvciIsImdyZXk3IiwiZm9jdXNCb3JkZXJDb2xvciIsInllbGxvdyIsImhlaWdodCIsImhhbGZHdXR0ZXJXaWR0aCIsImhlYWRlciIsImNvbnN0YW50cyIsIm5hdkJhckhlaWdodCIsImd1dHRlcldpZHRoIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwibGFiZWxXaWR0aCIsImxhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsImVycm9yQ29udGFpbmVyIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJmb250U2l6ZSIsImg0IiwiaW5wdXRSb3ciLCJzY3JlZW5TaXplcyIsIm1lZGl1bSIsImxhcmdlIiwieExhcmdlIiwidGV4dCIsInRpdGxlIiwiZm9udFdlaWdodCIsImJvbGQiLCJzdWJUaXRsZSIsIm5vcm1hbCIsImVycm9yIiwic21hbGwiLCJjb2xvciIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOztBQUNBOztBQUVBOzs7QUFKQTtrQkFPZTtBQUNYQSwwQkFEVztBQUVYQyxZQUFRO0FBQ0pDLGtCQUFVO0FBRE4sS0FGRztBQUtYQyw0QkFBd0JILGVBQU9JLEtBTHBCO0FBTVhDLGtCQUFjO0FBQ1ZDLGdCQUFRO0FBQ0pDLDZCQUFpQlAsZUFBT1EsTUFEcEI7QUFFSkMsb0NBQXdCVCxlQUFPVSxPQUYzQjtBQUdKQyx1QkFBV1gsZUFBT0ksS0FIZDtBQUlKRixzQkFBVTtBQUpOLFNBREU7QUFPVlUsZUFBTztBQUNIQyx5QkFBYWIsZUFBT2MsS0FEakI7QUFFSEMsOEJBQWtCZixlQUFPZ0IsTUFGdEI7QUFHSEMsb0JBQVE7QUFITDtBQVBHLEtBTkg7QUFtQlhDLHFCQUFpQixRQW5CTjtBQW9CWEMsWUFBUTtBQUNKRixnQkFBUUcscUJBQVVDLFlBRGQ7QUFFSmYsZ0JBQVE7QUFDSlcsb0JBQVE7QUFESjtBQUZKLEtBcEJHO0FBMEJYSyxpQkFBYSxNQTFCRjtBQTJCWEMsaUJBQWE7QUFDVEMsdUJBQWUsUUFETjtBQUVUQyxvQkFBWSxPQUZIO0FBR1RDLGtDQUEwQixRQUhqQjtBQUlUQyx3QkFBZ0I7QUFDWlYsb0JBQVE7QUFESSxTQUpQO0FBT1RXLDJCQUFtQjtBQUNmQyxzQkFBVVQscUJBQVVTLFFBQVYsQ0FBbUJDO0FBRGQ7QUFQVixLQTNCRjtBQXNDWEMsY0FBVTtBQUNOUCx1QkFBZSxLQURUO0FBRU5DLG9CQUFZLE9BRk47QUFHTkUsd0JBQWdCO0FBQ1pWLG9CQUFRO0FBREksU0FIVjtBQU1OVywyQkFBbUI7QUFDZkMsc0JBQVVULHFCQUFVUyxRQUFWLENBQW1CQztBQURkO0FBTmIsS0F0Q0M7QUFnRFhFLGlCQUFhO0FBQ1RDLGdCQUFRLE9BREM7QUFFVEMsZUFBTyxPQUZFO0FBR1RDLGdCQUFRO0FBSEMsS0FoREY7QUFxRFhDLFVBQU07QUFDRkMsZUFBTztBQUNIUixzQkFBVVQscUJBQVVTLFFBQVYsQ0FBbUJJLE1BRDFCO0FBRUhLLHdCQUFZbEIscUJBQVVrQixVQUFWLENBQXFCQztBQUY5QixTQURMO0FBS0ZDLGtCQUFVO0FBQ05YLHNCQUFVVCxxQkFBVVMsUUFBVixDQUFtQkksTUFEdkI7QUFFTkssd0JBQVlsQixxQkFBVWtCLFVBQVYsQ0FBcUJHO0FBRjNCLFNBTFI7QUFTRkMsZUFBTztBQUNIYixzQkFBVVQscUJBQVVTLFFBQVYsQ0FBbUJjLEtBRDFCO0FBRUhDLG1CQUFPNUMsZUFBTzZDO0FBRlg7QUFUTDtBQXJESyxDIiwiZmlsZSI6InRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2VydGFpbiB2YXJpYWJsZSB2YWx1ZXMgYXJlIHRlbXBvcmFyaWx5IGltcG9ydGVkIGZyb20gb2MtY20tY29tbW9uLXN0eWxlc1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEtlZXAgdGhpcyBhbHBoYWJldGljYWwgb3JkZXIgaWYgcG9zc2libGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbG9ycyxcbiAgICBjb2x1bW46IHtcbiAgICAgICAgbWluV2lkdGg6ICc0MDBweCcsXG4gICAgfSxcbiAgICBjb250ZW50QmFja2dyb3VuZENvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgZm9ybUNvbnRyb2xzOiB7XG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTEwLFxuICAgICAgICAgICAgcHJpbWFyeUJhY2tncm91bmRDb2xvcjogY29sb3JzLm9yYW5nZTIsXG4gICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiAnNzBweCcsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLmdyZXk3LFxuICAgICAgICAgICAgZm9jdXNCb3JkZXJDb2xvcjogY29sb3JzLnllbGxvdyxcbiAgICAgICAgICAgIGhlaWdodDogJzM0cHgnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgaGFsZkd1dHRlcldpZHRoOiAnMC41cmVtJyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgaGVpZ2h0OiBjb25zdGFudHMubmF2QmFySGVpZ2h0LFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIGhlaWdodDogJzJyZW0nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZ3V0dGVyV2lkdGg6ICcxcmVtJyxcbiAgICBpbnB1dENvbHVtbjoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgbGFiZWxXaWR0aDogJzIyNXB4JyxcbiAgICAgICAgbGFiZWxDb250YWluZXJMaW5lSGVpZ2h0OiAnMS41cmVtJyxcbiAgICAgICAgZXJyb3JDb250YWluZXI6IHtcbiAgICAgICAgICAgIGhlaWdodDogJzEuNXJlbScsXG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLmg0LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgaW5wdXRSb3c6IHtcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGxhYmVsV2lkdGg6ICcyMjVweCcsXG4gICAgICAgIGVycm9yQ29udGFpbmVyOiB7XG4gICAgICAgICAgICBoZWlnaHQ6ICcxLjVyZW0nLFxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZEluZGljYXRvcjoge1xuICAgICAgICAgICAgZm9udFNpemU6IGNvbnN0YW50cy5mb250U2l6ZS5oNCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHNjcmVlblNpemVzOiB7XG4gICAgICAgIG1lZGl1bTogJzQwcmVtJyxcbiAgICAgICAgbGFyZ2U6ICc2NHJlbScsXG4gICAgICAgIHhMYXJnZTogJzc1cmVtJyxcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUubWVkaXVtLFxuICAgICAgICAgICAgZm9udFdlaWdodDogY29uc3RhbnRzLmZvbnRXZWlnaHQuYm9sZCxcbiAgICAgICAgfSxcbiAgICAgICAgc3ViVGl0bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUubWVkaXVtLFxuICAgICAgICAgICAgZm9udFdlaWdodDogY29uc3RhbnRzLmZvbnRXZWlnaHQubm9ybWFsLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgZm9udFNpemU6IGNvbnN0YW50cy5mb250U2l6ZS5zbWFsbCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMucmVkLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIl19