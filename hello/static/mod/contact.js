'use strict';

var $ = require('jquery');

module.exports = function(message) {
  $('body').append($('<p/>').text('mailto:' + message + ';'));
};
