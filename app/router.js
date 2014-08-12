import Ember from 'ember';

var Router = Ember.Router.extend({
  // location: BoulderBoulderENV.locationType,
  // location: 'history',
});

Router.map(function() {
  this.resource('gyms');
  this.resource('gym', {path: '/gyms/:id'});

  this.resource('attempts');

  this.resource('problems', function() {
    this.route('new');
  });
  this.resource('problem', {path: '/problems/:id'});

  this.resource('users');
  this.resource('user', {path: '/users/:id'});
});

export default Router;
