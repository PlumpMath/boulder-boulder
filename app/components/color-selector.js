import Ember from "ember";

export default Ember.Component.extend({
  colors: [
    {name: 'blue', color:  '#002691'},
    {name: 'orange', color: '#FF4300'},
    {name: 'black', color: '#040404'},
    {name: 'green', color: '#006428'},
    {name: 'red', color: '#EB1902'},
  ],
  selectableColors: function() {
    return this.get('colors').map(function(item) {
      return Ember.ObjectProxy.create({
        content: item,
        isSelected: false,
        fillColor: 'background-color: '+item.color,
      });
    });
  }.property('colors'),
  actions: {
    select: function(color) {
      this.get('selectableColors').forEach(function(item) {
        item.set('isSelected', false);
      });
      color.set('isSelected', true);
      this.sendAction('action', color);
    },
  },
});
