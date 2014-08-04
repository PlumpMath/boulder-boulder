import DS from "ember-data";

var Gym = DS.Model.extend({
  name: DS.attr('string'),
});

Gym.reopenClass({
  FIXTURES: [
    {id: 1, name: 'The Circuit: Tigard'},
    {id: 1, name: 'The Circuit: NE'},
    {id: 1, name: 'The Circuit: SW'},
  ]
});

export default Gym;
