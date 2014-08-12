import DS from 'ember-data';

var Layout = DS.Model.extend({
  gym: DS.belongsTo('gym'),
  walls: DS.attr(),
});

Layout.reopenClass({
  FIXTURES: [
    {id: 1, walls: [{x: 1, y: 1}]}
  ],
});

export default Layout;
