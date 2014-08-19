var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Note = require('../models/note');
var NotesCollection = require('../collections/notes-collection');
//var NotesView = require('../collections/notes-collection');
var NoteView = require('./note-view');

module.exports = Backbone.View.extend({
  tagName:'div',
  initialize: function() {
    this.collection.on('add', this.addNote, this);
    this.collection.on('reset', this.addAll, this);
    this.render();
  },

  addNote: function(note) {
    var noteView = new NoteView({model: note});
    this.$el.children('#notes').append(noteView.$el);
  },

  addAll: function() {
    this.$el.children('#notes').html(''); //adding this here because we don't want to append the same data twice
    //clear it out and then add back in all the divs we have
    this.collection.forEach(this.addNote);
  },

  render: function() {
    var template = require('../templates/notes-collection.hbs');
    this.$el.html(template());
    this.addAll();
  }

});