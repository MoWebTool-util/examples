'use strict';

var $ = require('jquery');
var Dialog = require('arale-dialog');

module.exports = function(message) {
  $(function() {
    new Dialog({
      content: 'hellow ' + message + '!',
      hasMask: false
    }).show();
  });
};
