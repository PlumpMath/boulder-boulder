import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    setGym: function (gym) {
      this.set('session.gym', gym);
      this.transitionToRoute('problems');
    },
  },
});
