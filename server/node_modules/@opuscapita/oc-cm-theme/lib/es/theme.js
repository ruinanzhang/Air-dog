// Certain variable values are temporarily imported from oc-cm-common-styles
import { colors } from './colors';
import { constants } from './constants';

/**
 * Keep this alphabetical order if possible
 */
export default {
    colors: colors,
    column: {
        minWidth: '400px'
    },
    contentBackgroundColor: colors.white,
    formControls: {
        button: {
            backgroundColor: colors.grey10,
            primaryBackgroundColor: colors.orange2,
            textColor: colors.white,
            minWidth: '70px'
        },
        input: {
            borderColor: colors.grey7,
            focusBorderColor: colors.yellow,
            height: '34px'
        }
    },
    halfGutterWidth: '0.5rem',
    header: {
        height: constants.navBarHeight,
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
            fontSize: constants.fontSize.h4
        }
    },
    inputRow: {
        flexDirection: 'row',
        labelWidth: '225px',
        errorContainer: {
            height: '1.5rem'
        },
        requiredIndicator: {
            fontSize: constants.fontSize.h4
        }
    },
    screenSizes: {
        medium: '40rem',
        large: '64rem',
        xLarge: '75rem'
    },
    text: {
        title: {
            fontSize: constants.fontSize.medium,
            fontWeight: constants.fontWeight.bold
        },
        subTitle: {
            fontSize: constants.fontSize.medium,
            fontWeight: constants.fontWeight.normal
        },
        error: {
            fontSize: constants.fontSize.small,
            color: colors.red
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJjb25zdGFudHMiLCJjb2x1bW4iLCJtaW5XaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZSIsImZvcm1Db250cm9scyIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImdyZXkxMCIsInByaW1hcnlCYWNrZ3JvdW5kQ29sb3IiLCJvcmFuZ2UyIiwidGV4dENvbG9yIiwiaW5wdXQiLCJib3JkZXJDb2xvciIsImdyZXk3IiwiZm9jdXNCb3JkZXJDb2xvciIsInllbGxvdyIsImhlaWdodCIsImhhbGZHdXR0ZXJXaWR0aCIsImhlYWRlciIsIm5hdkJhckhlaWdodCIsImd1dHRlcldpZHRoIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwibGFiZWxXaWR0aCIsImxhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsImVycm9yQ29udGFpbmVyIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJmb250U2l6ZSIsImg0IiwiaW5wdXRSb3ciLCJzY3JlZW5TaXplcyIsIm1lZGl1bSIsImxhcmdlIiwieExhcmdlIiwidGV4dCIsInRpdGxlIiwiZm9udFdlaWdodCIsImJvbGQiLCJzdWJUaXRsZSIsIm5vcm1hbCIsImVycm9yIiwic21hbGwiLCJjb2xvciIsInJlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTQSxNQUFULFFBQXVCLFVBQXZCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7QUFFQTs7O0FBR0EsZUFBZTtBQUNYRCxrQkFEVztBQUVYRSxZQUFRO0FBQ0pDLGtCQUFVO0FBRE4sS0FGRztBQUtYQyw0QkFBd0JKLE9BQU9LLEtBTHBCO0FBTVhDLGtCQUFjO0FBQ1ZDLGdCQUFRO0FBQ0pDLDZCQUFpQlIsT0FBT1MsTUFEcEI7QUFFSkMsb0NBQXdCVixPQUFPVyxPQUYzQjtBQUdKQyx1QkFBV1osT0FBT0ssS0FIZDtBQUlKRixzQkFBVTtBQUpOLFNBREU7QUFPVlUsZUFBTztBQUNIQyx5QkFBYWQsT0FBT2UsS0FEakI7QUFFSEMsOEJBQWtCaEIsT0FBT2lCLE1BRnRCO0FBR0hDLG9CQUFRO0FBSEw7QUFQRyxLQU5IO0FBbUJYQyxxQkFBaUIsUUFuQk47QUFvQlhDLFlBQVE7QUFDSkYsZ0JBQVFqQixVQUFVb0IsWUFEZDtBQUVKZCxnQkFBUTtBQUNKVyxvQkFBUTtBQURKO0FBRkosS0FwQkc7QUEwQlhJLGlCQUFhLE1BMUJGO0FBMkJYQyxpQkFBYTtBQUNUQyx1QkFBZSxRQUROO0FBRVRDLG9CQUFZLE9BRkg7QUFHVEMsa0NBQTBCLFFBSGpCO0FBSVRDLHdCQUFnQjtBQUNaVCxvQkFBUTtBQURJLFNBSlA7QUFPVFUsMkJBQW1CO0FBQ2ZDLHNCQUFVNUIsVUFBVTRCLFFBQVYsQ0FBbUJDO0FBRGQ7QUFQVixLQTNCRjtBQXNDWEMsY0FBVTtBQUNOUCx1QkFBZSxLQURUO0FBRU5DLG9CQUFZLE9BRk47QUFHTkUsd0JBQWdCO0FBQ1pULG9CQUFRO0FBREksU0FIVjtBQU1OVSwyQkFBbUI7QUFDZkMsc0JBQVU1QixVQUFVNEIsUUFBVixDQUFtQkM7QUFEZDtBQU5iLEtBdENDO0FBZ0RYRSxpQkFBYTtBQUNUQyxnQkFBUSxPQURDO0FBRVRDLGVBQU8sT0FGRTtBQUdUQyxnQkFBUTtBQUhDLEtBaERGO0FBcURYQyxVQUFNO0FBQ0ZDLGVBQU87QUFDSFIsc0JBQVU1QixVQUFVNEIsUUFBVixDQUFtQkksTUFEMUI7QUFFSEssd0JBQVlyQyxVQUFVcUMsVUFBVixDQUFxQkM7QUFGOUIsU0FETDtBQUtGQyxrQkFBVTtBQUNOWCxzQkFBVTVCLFVBQVU0QixRQUFWLENBQW1CSSxNQUR2QjtBQUVOSyx3QkFBWXJDLFVBQVVxQyxVQUFWLENBQXFCRztBQUYzQixTQUxSO0FBU0ZDLGVBQU87QUFDSGIsc0JBQVU1QixVQUFVNEIsUUFBVixDQUFtQmMsS0FEMUI7QUFFSEMsbUJBQU81QyxPQUFPNkM7QUFGWDtBQVRMO0FBckRLLENBQWYiLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDZXJ0YWluIHZhcmlhYmxlIHZhbHVlcyBhcmUgdGVtcG9yYXJpbHkgaW1wb3J0ZWQgZnJvbSBvYy1jbS1jb21tb24tc3R5bGVzXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogS2VlcCB0aGlzIGFscGhhYmV0aWNhbCBvcmRlciBpZiBwb3NzaWJsZVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29sb3JzLFxuICAgIGNvbHVtbjoge1xuICAgICAgICBtaW5XaWR0aDogJzQwMHB4JyxcbiAgICB9LFxuICAgIGNvbnRlbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICBmb3JtQ29udHJvbHM6IHtcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5MTAsXG4gICAgICAgICAgICBwcmltYXJ5QmFja2dyb3VuZENvbG9yOiBjb2xvcnMub3JhbmdlMixcbiAgICAgICAgICAgIHRleHRDb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgICAgICAgbWluV2lkdGg6ICc3MHB4JyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuZ3JleTcsXG4gICAgICAgICAgICBmb2N1c0JvcmRlckNvbG9yOiBjb2xvcnMueWVsbG93LFxuICAgICAgICAgICAgaGVpZ2h0OiAnMzRweCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBoYWxmR3V0dGVyV2lkdGg6ICcwLjVyZW0nLFxuICAgIGhlYWRlcjoge1xuICAgICAgICBoZWlnaHQ6IGNvbnN0YW50cy5uYXZCYXJIZWlnaHQsXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgaGVpZ2h0OiAnMnJlbScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBndXR0ZXJXaWR0aDogJzFyZW0nLFxuICAgIGlucHV0Q29sdW1uOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBsYWJlbFdpZHRoOiAnMjI1cHgnLFxuICAgICAgICBsYWJlbENvbnRhaW5lckxpbmVIZWlnaHQ6ICcxLjVyZW0nLFxuICAgICAgICBlcnJvckNvbnRhaW5lcjoge1xuICAgICAgICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZWRJbmRpY2F0b3I6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUuaDQsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBpbnB1dFJvdzoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgbGFiZWxXaWR0aDogJzIyNXB4JyxcbiAgICAgICAgZXJyb3JDb250YWluZXI6IHtcbiAgICAgICAgICAgIGhlaWdodDogJzEuNXJlbScsXG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLmg0LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgc2NyZWVuU2l6ZXM6IHtcbiAgICAgICAgbWVkaXVtOiAnNDByZW0nLFxuICAgICAgICBsYXJnZTogJzY0cmVtJyxcbiAgICAgICAgeExhcmdlOiAnNzVyZW0nLFxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IGNvbnN0YW50cy5mb250U2l6ZS5tZWRpdW0sXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBjb25zdGFudHMuZm9udFdlaWdodC5ib2xkLFxuICAgICAgICB9LFxuICAgICAgICBzdWJUaXRsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IGNvbnN0YW50cy5mb250U2l6ZS5tZWRpdW0sXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBjb25zdGFudHMuZm9udFdlaWdodC5ub3JtYWwsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLnNtYWxsLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9ycy5yZWQsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iXX0=