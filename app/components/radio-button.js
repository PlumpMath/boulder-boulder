import Ember from "ember";

export default Ember.Component.extend({
  tagName : "input",
  type : "radio",
  attributeBindings : [ "name", "type", "value", "checked:checked" ],
  classNameBindings: ["checked:active"],
  click : function() {
    this.set("selection", this.get('value'));
  },
  checked : function() {
      return this.get("value") === this.get("selection");
  }.property('selection')
});

