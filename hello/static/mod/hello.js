'use strict';

var Dialog = require('arale-dialog');

module.exports = function(message) {
  new Dialog({
    content: 'hellow ' + message + '!',
    hasMask: false
  }).show();
};
