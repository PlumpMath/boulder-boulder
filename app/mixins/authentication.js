import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function() {
    if (!this.get('session.gym')) {
      this.transitionTo('index');
    }
  },
});
