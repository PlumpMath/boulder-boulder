import DS from "ember-data";

var Grade = DS.Model.extend({
  name: DS.attr('string'),
});

Grade.reopenClass({
  FIXTURES: [
    {id: 1, name: 'VB'},
    {id: 2, name: 'V0'},
    {id: 3, name: 'V1'},
    {id: 4, name: 'V2'},
    {id: 5, name: 'V3'},
    {id: 6, name: 'V4'},
    {id: 7, name: 'V5'},
  ]
});

export default Grade;
