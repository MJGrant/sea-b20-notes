var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Car = require('../models/car');

module.exports = Backbone.Collection.extend({
  url: '/api/v_0_0_1/cars',
  model: Car
});
