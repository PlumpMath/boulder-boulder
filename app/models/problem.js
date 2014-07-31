import DS from "ember-data";

var Problem = DS.Model.extend({
  // gym: DS.belongsTo('gym'),
  grade: DS.belongsTo('grade'),
  primaryColor: DS.belongsTo('color'),
  secondaryColor: DS.belongsTo('color'),
  // tapePattern: DS.belongsTo('tapePattern'),
});

Problem.reopenClass({
  FIXTURES: [
    {id: 1, gradeId: 1, primaryColorId: 1},
    {id: 2, gradeId: 2, primaryColorId: 2},
    {id: 3, gradeId: 3, primaryColorId: 3},
  ],
});

export default Problem;
