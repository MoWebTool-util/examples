(function(window, seajs, undefined) {

  'use strict';

  if (!seajs) {
    return;
  }

  function addParam(url, param) {
    if (!param) {
      return url;
    }

    return url + (url.indexOf('?') === -1 ? '?' : '&') + param;
  }

  // debug 开关
  var debug = window.location.search.indexOf('debug') > 0;

  // 映射表
  var map = [];

  if (debug) {
    // debug 模式
    document.write('<script src="static/spm_modules/seajs-text/1.1.0/dist/seajs-text.js?nowrap"></script><script src="static/spm_modules/seajs-wrap/1.0.2/dist/seajs-wrap.js?nowrap"></script><script src="static/spm_modules/seajs-style/1.1.0/dist/seajs-style.js?nowrap"></script><script src="static/spm_modules/seajs-debug/1.1.1/dist/seajs-debug.js?nowrap"></script>');
  } else {
    // 部署模式
    map.push(function(url) {
      // 仅重定向 app 目录
      return addParam(url.replace('/app/', '/dist/static/app/'), '0.0.0');
    });
  }

  seajs.config({
    base: './',
    alias: {
      'jquery': 'static/spm_modules/jquery/1.11.1/jquery.js',
      'arale-dialog': 'static/spm_modules/arale-dialog/1.4.0/dialog.js',
      'handlebars-runtime': 'static/spm_modules/handlebars-runtime/1.3.0/dist/cjs/handlebars.runtime.js',
      'arale-class': 'static/spm_modules/arale-class/1.2.0/class.js',
      'arale-events': 'static/spm_modules/arale-events/1.2.0/events.js',
      'arale-base': 'static/spm_modules/arale-base/1.2.0/base.js',
      'position': 'static/spm_modules/position/1.1.0/index.js',
      'arale-widget': 'static/spm_modules/arale-widget/1.2.0/widget.js',
      'arale-iframe-shim': 'static/spm_modules/arale-iframe-shim/1.1.0/index.js',
      'handlebars': 'static/spm_modules/handlebars/1.3.0/dist/cjs/handlebars.js',
      'arale-overlay': 'static/spm_modules/arale-overlay/1.2.0/overlay.js',
      'arale-easing': 'static/spm_modules/arale-easing/1.1.0/index.js',
      'arale-templatable': 'static/spm_modules/arale-templatable/0.10.0/src/templatable.js'
    },
    map: map,
    debug: debug
  });

})(this, this.seajs);
