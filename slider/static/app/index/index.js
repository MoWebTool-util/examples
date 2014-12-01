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
  if (this.index > 0) {
    var self = this,
      pic = this.slides.eq(this.index).find('.pic');

    pic.css('background-image', 'none');

    setTimeout(function() {
      pic.css('background-image', 'url(images/' + (self.index + 1) + '/pic.gif)');
    }, 10);
  }
});
