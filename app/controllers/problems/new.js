import Ember from "ember";

export default Ember.ObjectController.extend({
  step: 1,
  maxSteps: 3, // until tape patterns are added
  inProgress: function() {
    return this.get('step') < this.get('maxSteps');
  }.property('step', 'maxSteps'),
  grade: function() {
    return this.get('grades.firstObject');
  }.property(),
  primaryColor: null,
  secondaryColor: null,
  tapePattern: null,
  actions: {
    save: function() {
      var problem = this.store.createRecord('problem',
        this.getProperties('grade', 'primaryColor', 'secondaryColor', 'tapePattern'));
      this.transitionToRoute('problem', problem);
    },
    nextStep: function() {
      if (!this.get('inProgress')) return;
      this.incrementProperty('step');
    },
  },
});