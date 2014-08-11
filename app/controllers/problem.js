import Ember from 'ember';

export default Ember.ObjectController.extend({
  tapeStyle: function() {
    return 'background-color: '+this.get('primaryColor.hex')+';';
  }.property('primaryColor.hex'),
  tapeSecondaryStyle: function() {
    return 'background-color: '+this.get('secondaryColor.hex')+';';
  }.property('secondaryColor.hex'),
});
