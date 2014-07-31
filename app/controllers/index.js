import Ember from "ember";

export default Ember.ObjectController.extend({
  grade: function() {
    return this.get('grades.firstObject');
  }.property(),
  primaryColor: null,
  secondaryColor: null,
  tapePattern: null,
  actions: {
    save: function() {
      console.log(
        this.getProperties('grade', 'primaryColor', 'secondaryColor', 'tapePattern')
      );
    },
  },
});
