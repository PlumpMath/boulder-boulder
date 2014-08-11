import Ember from 'ember';
import AuthenticationMixin from '../mixins/authentication';

export default Ember.Route.extend(AuthenticationMixin, {
  model: function() {
    return this.store.find('problem', {gym_id: this.get('session.gym.id')});
  },
});
