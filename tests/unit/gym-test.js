// import Ember from "ember";
import { test, moduleForModel } from 'ember-qunit';
import startApp from '../helpers/start-app';
// var App;

moduleForModel('gym', 'Gym Model', {
});

test("can have a name", function() {
  var gym = this.subject({name: 'KC'});
  equal(gym.get('name'), 'KC');
});

test("can have a stripe publishable key", function() {
  var gym = this.subject({stripePublishableKey: 'key'});
  equal(gym.get('stripePublishableKey'), 'key');
});
