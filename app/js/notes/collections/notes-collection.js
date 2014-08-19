var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Note = require('../models/note');

module.exports = Backbone.Collection.extend({
  url: '/api/v_0_0_1/notes',
  model: Note
});
