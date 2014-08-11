import DS from 'ember-data';

// export default DS.FixtureAdapter.extend({
// });

export default DS.ActiveModelAdapter.extend({
  host: window.BoulderBoulderENV.APP.API_HOST
});
