import Ember from 'ember';
// import AuthenticationMixin from '../mixins/authentication';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  },
});
