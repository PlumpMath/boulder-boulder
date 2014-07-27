import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import DS from 'ember-data';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'boulder-boulder', // TODO: loaded via config
  Resolver: Resolver
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

loadInitializers(App, 'boulder-boulder');

export default App;
