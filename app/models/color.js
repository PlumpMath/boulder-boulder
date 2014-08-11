import DS from "ember-data";

var Color = DS.Model.extend({
  name: DS.attr('string'),
  hex:  DS.attr('string'),
});

Color.reopenClass({
  FIXTURES: [
    {id: 1, name: 'red', hex: '#EB1902'},
    {id: 2, name: 'green', hex: '#006428'},
    {id: 3, name: 'blue', hex: '#002691'},
    {id: 4, name: 'orange', hex: '#FF4300'},
    {id: 5, name: 'black', hex: '#040404'},
    {id: 6, name: 'white', hex: '#F4f4f4'},
  ]
});


export default Color;
