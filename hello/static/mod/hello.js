'use strict';

var $ = require('$');

module.exports = function(message) {
  $('body').append($('<p/>').text('hellow ' + message + '!'));
};
