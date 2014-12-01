'use strict';

var Slider = require('nd-slider');

new Slider({
  paginator: '#paginator',
  activeClass: 'active',
  container: '#container',
  slides: '.slide',
  slideWrap: '.slide-wrap',
  speed: 1000
}).on('animate', function() {
  console.log('Current slide index: ', this.index);
});
