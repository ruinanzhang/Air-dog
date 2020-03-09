'use strict';

exports.__esModule = true;
var constants = exports.constants = {
    // Currently we do not use roundings, but the variables have been added for
    // Bootstrap compatibility
    borderRadius: {
        base: 0,
        large: 0,
        small: 0
    },
    navBarHeight: '40px',
    fontWeight: {
        light: 300,
        normal: 400,
        bold: 700
    },
    // Bootstrap 3 sets html font-size to 62.5% i.e. 10px with Browser's default size being 16px.
    // Bootstrap 4 uses different base font-size and hence these values need to be changed.
    fontSize: {
        h1: '3.6rem', // 36px
        h2: '3rem', // 30px
        h3: '2.4rem', // 24px
        h4: '1.8rem', // 18px

        large: '1.8rem',
        medium: '1.6rem',
        normal: '1.4rem', // default text
        small: '1.2rem'
    },
    classPrefix: 'oc-layout'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwiYm9yZGVyUmFkaXVzIiwiYmFzZSIsImxhcmdlIiwic21hbGwiLCJuYXZCYXJIZWlnaHQiLCJmb250V2VpZ2h0IiwibGlnaHQiLCJub3JtYWwiLCJib2xkIiwiZm9udFNpemUiLCJoMSIsImgyIiwiaDMiLCJoNCIsIm1lZGl1bSIsImNsYXNzUHJlZml4Il0sIm1hcHBpbmdzIjoiOzs7QUFBTyxJQUFNQSxnQ0FBWTtBQUNyQjtBQUNBO0FBQ0FDLGtCQUFjO0FBQ1ZDLGNBQU0sQ0FESTtBQUVWQyxlQUFPLENBRkc7QUFHVkMsZUFBTztBQUhHLEtBSE87QUFRckJDLGtCQUFjLE1BUk87QUFTckJDLGdCQUFZO0FBQ1JDLGVBQU8sR0FEQztBQUVSQyxnQkFBUSxHQUZBO0FBR1JDLGNBQU07QUFIRSxLQVRTO0FBY3JCO0FBQ0E7QUFDQUMsY0FBVTtBQUNOQyxZQUFJLFFBREUsRUFDUTtBQUNkQyxZQUFJLE1BRkUsRUFFTTtBQUNaQyxZQUFJLFFBSEUsRUFHUTtBQUNkQyxZQUFJLFFBSkUsRUFJUTs7QUFFZFgsZUFBTyxRQU5EO0FBT05ZLGdCQUFRLFFBUEY7QUFRTlAsZ0JBQVEsUUFSRixFQVFZO0FBQ2xCSixlQUFPO0FBVEQsS0FoQlc7QUEyQnJCWSxpQkFBYTtBQTNCUSxDQUFsQiIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29uc3RhbnRzID0ge1xuICAgIC8vIEN1cnJlbnRseSB3ZSBkbyBub3QgdXNlIHJvdW5kaW5ncywgYnV0IHRoZSB2YXJpYWJsZXMgaGF2ZSBiZWVuIGFkZGVkIGZvclxuICAgIC8vIEJvb3RzdHJhcCBjb21wYXRpYmlsaXR5XG4gICAgYm9yZGVyUmFkaXVzOiB7XG4gICAgICAgIGJhc2U6IDAsXG4gICAgICAgIGxhcmdlOiAwLFxuICAgICAgICBzbWFsbDogMCxcbiAgICB9LFxuICAgIG5hdkJhckhlaWdodDogJzQwcHgnLFxuICAgIGZvbnRXZWlnaHQ6IHtcbiAgICAgICAgbGlnaHQ6IDMwMCxcbiAgICAgICAgbm9ybWFsOiA0MDAsXG4gICAgICAgIGJvbGQ6IDcwMCxcbiAgICB9LFxuICAgIC8vIEJvb3RzdHJhcCAzIHNldHMgaHRtbCBmb250LXNpemUgdG8gNjIuNSUgaS5lLiAxMHB4IHdpdGggQnJvd3NlcidzIGRlZmF1bHQgc2l6ZSBiZWluZyAxNnB4LlxuICAgIC8vIEJvb3RzdHJhcCA0IHVzZXMgZGlmZmVyZW50IGJhc2UgZm9udC1zaXplIGFuZCBoZW5jZSB0aGVzZSB2YWx1ZXMgbmVlZCB0byBiZSBjaGFuZ2VkLlxuICAgIGZvbnRTaXplOiB7XG4gICAgICAgIGgxOiAnMy42cmVtJywgLy8gMzZweFxuICAgICAgICBoMjogJzNyZW0nLCAvLyAzMHB4XG4gICAgICAgIGgzOiAnMi40cmVtJywgLy8gMjRweFxuICAgICAgICBoNDogJzEuOHJlbScsIC8vIDE4cHhcblxuICAgICAgICBsYXJnZTogJzEuOHJlbScsXG4gICAgICAgIG1lZGl1bTogJzEuNnJlbScsXG4gICAgICAgIG5vcm1hbDogJzEuNHJlbScsIC8vIGRlZmF1bHQgdGV4dFxuICAgICAgICBzbWFsbDogJzEuMnJlbScsXG4gICAgfSxcbiAgICBjbGFzc1ByZWZpeDogJ29jLWxheW91dCcsXG59O1xuIl19