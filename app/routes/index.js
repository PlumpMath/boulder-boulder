import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      // problems: this.store.find('problem'),
      colors: this.store.find('color'),
      grades: this.store.find('grade'),
    });
  },
  // setupController: function(controller, model) {
  // },
});
