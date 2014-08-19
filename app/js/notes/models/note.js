//Backbone note model

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Note = Backbone.Model.extend({
  url: '/api/v_0_0_1/notes',
  idAttribute: '_id',
  defaults: {
    noteBody: ''
  }
});

module.exports = Note;

//have to use get/set, not just access property directly
//no: thing.noteBody
