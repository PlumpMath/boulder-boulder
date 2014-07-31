import DS from "ember-data";

var Gym = DS.Model.extend({
  name: DS.attr('string'),
});

Gym.FIXTURES = [
  {id: 1, name: 'hello'}
];

export default Gym;
