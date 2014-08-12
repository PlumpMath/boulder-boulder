import DS from 'ember-data';

export default DS.Model.extend({
  successful: DS.attr('boolean'),
  completedAt: DS.attr('date'),

  user: DS.belongsTo('user'),
  problem: DS.belongsTo('problem'),
});
