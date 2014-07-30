import Ember from "ember";

export default Ember.Component.extend({
  tagName : "span",
  classNames: ['color-square'],
  attributeBindings : [ "style" ],
  title: function() {
    return this.get('name');
  },
  style: function() {
    return 'background-color: '+this.get('hex');
  }.property('hex'),
});

