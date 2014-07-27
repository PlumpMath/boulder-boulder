import Ember from "ember";

export default Ember.Controller.extend({
  grade: null,
  primaryColor: null,
  secondaryColor: null,
  actions: {
    gradeSelected: function(grade) {
      this.set('grade', grade.get('content'));
    },
    primaryColor: function(color) {
      this.set('primaryColor', color.get('name'));
    },
    secondaryColor: function(color) {
      this.set('secondaryColor', color.get('name'));
    },
  },
});
