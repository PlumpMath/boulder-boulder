import Ember from 'ember';

var Router = Ember.Router.extend({
  // location: BoulderBoulderENV.locationType,
  // location: 'history',
});

Router.map(function() {
  this.resource('gyms');
  this.resource('gym', {path: '/gyms/:id'});

  this.resource('problems', function() {
    this.route('new');
  });
  this.resource('problem', {path: '/problems/:id'});
});

export default Router;
