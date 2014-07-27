import Ember from "ember";

export default Ember.Component.extend({
  grades: ['VB', 'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10'],
  grade: null,
  selectableGrades: Ember.computed('grades', function() {
    return this.get('grades').map(function(item) {
      return Ember.ObjectProxy.create({
        content: item, //Ember.Object.create({name: item}),
        isSelected: false
      });
    });
  }),
  actions: {
    select: function(grade) {
      this.get('selectableGrades').forEach(function(item) {
        item.set('isSelected', false);
      });
      grade.set('isSelected', true);
      this.sendAction('action', grade);
    },
  },
});
