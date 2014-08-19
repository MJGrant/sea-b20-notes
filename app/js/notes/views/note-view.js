var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var NoteView = Backbone.View.extend({
  tagName: 'div',
  //soemtimes templates are up here, but we're using require bc browserify
  //div is the default
  //every view gets wrapped in an opening and closing html tag
  //this is where you can specify the html tag to wrap in
  initialize: function() {
    this.render();
    //called any time you create a new instance of this view
  },
  render: function() {
    var template = require('../templates/basic-note-template.hbs'); //handlebars template
    var data = this.model.attributes;
    this.$el.html(template(data)); //using jquery function html to render this template
    return this; //backbone convention, must return this

    //npm install --save-dev hbsfy
    //lets you render hbs files
  }
});

module.exports = NoteView;