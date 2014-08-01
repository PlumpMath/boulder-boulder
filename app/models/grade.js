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
    {id: 8, name: 'V6'},
    {id: 9, name: 'V7'},
    {id: 10, name: 'V8'},
    {id: 11, name: 'V9'},
    {id: 12, name: 'V10'},
    {id: 13, name: 'V11'},
    {id: 14, name: 'V12'},
  ]
});

export default Grade;
