import Ember from "ember";

export default Ember.Controller.extend({
  grades: ['VB', 'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9',
    'V10', 'V11', 'V12', 'V13'],
  colors: [
    {name: 'blue',   hex: '#002691'},
    {name: 'orange', hex: '#FF4300'},
    {name: 'black',  hex: '#040404'},
    {name: 'green',  hex: '#006428'},
    {name: 'red',    hex: '#EB1902'},
  ],
  tapePatterns: ['normal', 'diamond', 'double diamond', 'square', 'double square'],
  grade: null,
  primaryColor: null,
  secondaryColor: null,
  tapePattern: 'normal',
  actions: {
    save: function() {
      console.log(this.getProperties('grade', 'primaryColor', 'secondaryColor',
        'tapePattern'));
    },
  },
});
