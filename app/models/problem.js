import DS from "ember-data";

var Problem = DS.Model.extend({
  gym: DS.belongsTo('gym'),
  grade: DS.belongsTo('grade'),
  primaryColor: DS.belongsTo('color'),
  secondaryColor: DS.belongsTo('color'),
  // tapePattern: DS.belongsTo('tapePattern'),
});

Problem.reopenClass({
  FIXTURES: [
    {id: 1, grade: 1, primaryColor: 1, gym: 1},
    {id: 2, grade: 2, primaryColor: 2, gym: 1},
    {id: 3, grade: 3, primaryColor: 3, gym: 1},
  ],
});

export default Problem;
