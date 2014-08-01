import Ember from 'ember';

export default Ember.Component.extend({
  isVisible: function() {
    return this.get('step') === this.get('currentStep');
  }.property('step', 'currentStep')
});
