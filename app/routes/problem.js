import Ember from 'ember';
import AuthenticationMixin from '../mixins/authentication';

export default Ember.Route.extend(AuthenticationMixin, {
  model: function(params) {
    return this.store.find('problem', params.id);
  },
});
