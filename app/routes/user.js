import Ember from 'ember';
// import AuthenticationMixin from '../mixins/authentication';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.id);
  },
});
