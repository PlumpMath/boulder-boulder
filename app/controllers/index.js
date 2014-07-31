import Ember from "ember";

export default Ember.ObjectController.extend({
  grade: 'VB',
  primaryColor: null,
  secondaryColor: null,
  tapePattern: 'normal',
  actions: {
    save: function() {
      this.setProperties({
        grade: 'VB',
        primaryColor: null,
        secondaryColor: null,
        tapePattern: 'normal',
      });
    },
  },
});
