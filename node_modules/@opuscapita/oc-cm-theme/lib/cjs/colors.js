'use strict';

exports.__esModule = true;
var descriptions = {
    grey1: ['Button (disabled)'],
    grey2: ['Alert notification background'],
    grey3: ['Edited grid row', 'Disabled grid text', 'Input border'],
    grey4: ['Select hover background', 'Grid highlighted row background', 'Grid header background'],
    grey5: ['Selected grid row background', 'Selected select item background'],
    grey6: ['App background', 'Grid row border'],
    grey7: ['Grid outer border'],
    grey8: ['Button (hover)'],
    grey9: ['Grid text', 'Button background', 'Checkbox border'],
    grey10: ['Button (pressed)'],

    // Oranges
    orange1: ['Priority button (hover)'],
    orange2: ['Priority button background'],
    orange3: ['Priority button (pressed)'],

    // Other colors e.g. graphs
    yellow: ['Warning color'],
    white: ['Content background color'],
    green: ['Success color'],
    black: [],
    petrol: ['Tooltip background color'],
    red: ['Error color'],
    blue: [],
    violet: []
};

var colors = exports.colors = {
    // Greys
    grey1: '#F0F0F0',
    grey2: '#EAEAEA',
    grey3: '#CCCCCC',

    // Bluish greys
    grey4: '#EFF2F4',
    grey5: '#E6E9EB',
    grey6: '#D3DADE',
    grey7: '#A4AFB6',
    grey8: '#77818c',
    grey9: '#67707C',
    grey10: '#585F68',

    // Oranges
    orange1: '#FF7517',
    orange2: '#EC6608',
    orange3: '#d35c0b',

    // Other colors e.g. graphs
    yellow: '#FECA1D',
    white: '#FFFFFF',
    green: '#3AA57B',
    black: '#000000',
    petrol: '#006070',
    red: '#D82515',
    blue: '#16AED6',
    violet: '#943BA3',
    descriptions: descriptions
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xvcnMuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb25zIiwiZ3JleTEiLCJncmV5MiIsImdyZXkzIiwiZ3JleTQiLCJncmV5NSIsImdyZXk2IiwiZ3JleTciLCJncmV5OCIsImdyZXk5IiwiZ3JleTEwIiwib3JhbmdlMSIsIm9yYW5nZTIiLCJvcmFuZ2UzIiwieWVsbG93Iiwid2hpdGUiLCJncmVlbiIsImJsYWNrIiwicGV0cm9sIiwicmVkIiwiYmx1ZSIsInZpb2xldCIsImNvbG9ycyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTUEsZUFBZTtBQUNqQkMsV0FBTyxDQUFDLG1CQUFELENBRFU7QUFFakJDLFdBQU8sQ0FBQywrQkFBRCxDQUZVO0FBR2pCQyxXQUFPLENBQ0gsaUJBREcsRUFFSCxvQkFGRyxFQUdILGNBSEcsQ0FIVTtBQVFqQkMsV0FBTyxDQUNILHlCQURHLEVBRUgsaUNBRkcsRUFHSCx3QkFIRyxDQVJVO0FBYWpCQyxXQUFPLENBQ0gsOEJBREcsRUFFSCxpQ0FGRyxDQWJVO0FBaUJqQkMsV0FBTyxDQUFDLGdCQUFELEVBQW1CLGlCQUFuQixDQWpCVTtBQWtCakJDLFdBQU8sQ0FBQyxtQkFBRCxDQWxCVTtBQW1CakJDLFdBQU8sQ0FBQyxnQkFBRCxDQW5CVTtBQW9CakJDLFdBQU8sQ0FDSCxXQURHLEVBRUgsbUJBRkcsRUFHSCxpQkFIRyxDQXBCVTtBQXlCakJDLFlBQVEsQ0FBQyxrQkFBRCxDQXpCUzs7QUEyQmpCO0FBQ0FDLGFBQVMsQ0FBQyx5QkFBRCxDQTVCUTtBQTZCakJDLGFBQVMsQ0FBQyw0QkFBRCxDQTdCUTtBQThCakJDLGFBQVMsQ0FBQywyQkFBRCxDQTlCUTs7QUFnQ2pCO0FBQ0FDLFlBQVEsQ0FBQyxlQUFELENBakNTO0FBa0NqQkMsV0FBTyxDQUFDLDBCQUFELENBbENVO0FBbUNqQkMsV0FBTyxDQUFDLGVBQUQsQ0FuQ1U7QUFvQ2pCQyxXQUFPLEVBcENVO0FBcUNqQkMsWUFBUSxDQUFDLDBCQUFELENBckNTO0FBc0NqQkMsU0FBSyxDQUFDLGFBQUQsQ0F0Q1k7QUF1Q2pCQyxVQUFNLEVBdkNXO0FBd0NqQkMsWUFBUTtBQXhDUyxDQUFyQjs7QUE0Q08sSUFBTUMsMEJBQVM7QUFDbEI7QUFDQXJCLFdBQU8sU0FGVztBQUdsQkMsV0FBTyxTQUhXO0FBSWxCQyxXQUFPLFNBSlc7O0FBTWxCO0FBQ0FDLFdBQU8sU0FQVztBQVFsQkMsV0FBTyxTQVJXO0FBU2xCQyxXQUFPLFNBVFc7QUFVbEJDLFdBQU8sU0FWVztBQVdsQkMsV0FBTyxTQVhXO0FBWWxCQyxXQUFPLFNBWlc7QUFhbEJDLFlBQVEsU0FiVTs7QUFlbEI7QUFDQUMsYUFBUyxTQWhCUztBQWlCbEJDLGFBQVMsU0FqQlM7QUFrQmxCQyxhQUFTLFNBbEJTOztBQW9CbEI7QUFDQUMsWUFBUSxTQXJCVTtBQXNCbEJDLFdBQU8sU0F0Qlc7QUF1QmxCQyxXQUFPLFNBdkJXO0FBd0JsQkMsV0FBTyxTQXhCVztBQXlCbEJDLFlBQVEsU0F6QlU7QUEwQmxCQyxTQUFLLFNBMUJhO0FBMkJsQkMsVUFBTSxTQTNCWTtBQTRCbEJDLFlBQVEsU0E1QlU7QUE2QmxCckIsa0JBQWNBO0FBN0JJLENBQWYiLCJmaWxlIjoiY29sb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVzY3JpcHRpb25zID0ge1xuICAgIGdyZXkxOiBbJ0J1dHRvbiAoZGlzYWJsZWQpJ10sXG4gICAgZ3JleTI6IFsnQWxlcnQgbm90aWZpY2F0aW9uIGJhY2tncm91bmQnXSxcbiAgICBncmV5MzogW1xuICAgICAgICAnRWRpdGVkIGdyaWQgcm93JyxcbiAgICAgICAgJ0Rpc2FibGVkIGdyaWQgdGV4dCcsXG4gICAgICAgICdJbnB1dCBib3JkZXInLFxuICAgIF0sXG4gICAgZ3JleTQ6IFtcbiAgICAgICAgJ1NlbGVjdCBob3ZlciBiYWNrZ3JvdW5kJyxcbiAgICAgICAgJ0dyaWQgaGlnaGxpZ2h0ZWQgcm93IGJhY2tncm91bmQnLFxuICAgICAgICAnR3JpZCBoZWFkZXIgYmFja2dyb3VuZCcsXG4gICAgXSxcbiAgICBncmV5NTogW1xuICAgICAgICAnU2VsZWN0ZWQgZ3JpZCByb3cgYmFja2dyb3VuZCcsXG4gICAgICAgICdTZWxlY3RlZCBzZWxlY3QgaXRlbSBiYWNrZ3JvdW5kJyxcbiAgICBdLFxuICAgIGdyZXk2OiBbJ0FwcCBiYWNrZ3JvdW5kJywgJ0dyaWQgcm93IGJvcmRlciddLFxuICAgIGdyZXk3OiBbJ0dyaWQgb3V0ZXIgYm9yZGVyJ10sXG4gICAgZ3JleTg6IFsnQnV0dG9uIChob3ZlciknXSxcbiAgICBncmV5OTogW1xuICAgICAgICAnR3JpZCB0ZXh0JyxcbiAgICAgICAgJ0J1dHRvbiBiYWNrZ3JvdW5kJyxcbiAgICAgICAgJ0NoZWNrYm94IGJvcmRlcicsXG4gICAgXSxcbiAgICBncmV5MTA6IFsnQnV0dG9uIChwcmVzc2VkKSddLFxuXG4gICAgLy8gT3Jhbmdlc1xuICAgIG9yYW5nZTE6IFsnUHJpb3JpdHkgYnV0dG9uIChob3ZlciknXSxcbiAgICBvcmFuZ2UyOiBbJ1ByaW9yaXR5IGJ1dHRvbiBiYWNrZ3JvdW5kJ10sXG4gICAgb3JhbmdlMzogWydQcmlvcml0eSBidXR0b24gKHByZXNzZWQpJ10sXG5cbiAgICAvLyBPdGhlciBjb2xvcnMgZS5nLiBncmFwaHNcbiAgICB5ZWxsb3c6IFsnV2FybmluZyBjb2xvciddLFxuICAgIHdoaXRlOiBbJ0NvbnRlbnQgYmFja2dyb3VuZCBjb2xvciddLFxuICAgIGdyZWVuOiBbJ1N1Y2Nlc3MgY29sb3InXSxcbiAgICBibGFjazogW10sXG4gICAgcGV0cm9sOiBbJ1Rvb2x0aXAgYmFja2dyb3VuZCBjb2xvciddLFxuICAgIHJlZDogWydFcnJvciBjb2xvciddLFxuICAgIGJsdWU6IFtdLFxuICAgIHZpb2xldDogW10sXG59O1xuXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gICAgLy8gR3JleXNcbiAgICBncmV5MTogJyNGMEYwRjAnLFxuICAgIGdyZXkyOiAnI0VBRUFFQScsXG4gICAgZ3JleTM6ICcjQ0NDQ0NDJyxcblxuICAgIC8vIEJsdWlzaCBncmV5c1xuICAgIGdyZXk0OiAnI0VGRjJGNCcsXG4gICAgZ3JleTU6ICcjRTZFOUVCJyxcbiAgICBncmV5NjogJyNEM0RBREUnLFxuICAgIGdyZXk3OiAnI0E0QUZCNicsXG4gICAgZ3JleTg6ICcjNzc4MThjJyxcbiAgICBncmV5OTogJyM2NzcwN0MnLFxuICAgIGdyZXkxMDogJyM1ODVGNjgnLFxuXG4gICAgLy8gT3Jhbmdlc1xuICAgIG9yYW5nZTE6ICcjRkY3NTE3JyxcbiAgICBvcmFuZ2UyOiAnI0VDNjYwOCcsXG4gICAgb3JhbmdlMzogJyNkMzVjMGInLFxuXG4gICAgLy8gT3RoZXIgY29sb3JzIGUuZy4gZ3JhcGhzXG4gICAgeWVsbG93OiAnI0ZFQ0ExRCcsXG4gICAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgICBncmVlbjogJyMzQUE1N0InLFxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgcGV0cm9sOiAnIzAwNjA3MCcsXG4gICAgcmVkOiAnI0Q4MjUxNScsXG4gICAgYmx1ZTogJyMxNkFFRDYnLFxuICAgIHZpb2xldDogJyM5NDNCQTMnLFxuICAgIGRlc2NyaXB0aW9uczogZGVzY3JpcHRpb25zLFxufTtcbiJdfQ==