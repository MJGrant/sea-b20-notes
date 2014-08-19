//Backbone car model
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Car = Backbone.Model.extend({
  url: '/api/v_0_0_1/notes',
  idAttribute: '_id',
  defaults: {
    make: '',
    model: '',
    year: '',
    color: '',
  }
});

module.exports = Car;