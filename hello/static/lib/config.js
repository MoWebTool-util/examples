(function(window, seajs, undefined) {

  'use strict';

  if (!seajs) {
    return;
  }

  // debug 开关
  var debug = window.location.search.indexOf('debug') > 0;

  // 映射表
  var map = [];

  function addParam(url, name, value) {
    return url + (url.indexOf('?') === -1 ? '?' : '&') + name + (value !== undefined ? ('=' + value) : '');
  }

  if (debug) {
    // 开发模式
    var timestamp = new Date().getTime();
    map.push(function(url) {
      return addParam(url, '_ts', timestamp);
    });
  } else {
    // 部署模式
    map.push(function(url) {
      // 仅重定向 app 目录
      return addParam(url.replace('/app/', '/dist/static/app/'), '_v', '0.0.0');
    });
  }

  seajs.config({
    base: '/',
    alias: {
      // only for debug
      'arale-base': 'static/spm_modules/arale-base/1.2.0/base.js',
      'arale-class': 'static/spm_modules/arale-class/1.2.0/class.js',
      'arale-dialog': 'static/spm_modules/arale-dialog/1.4.0/dialog.js',
      'arale-easing': 'static/spm_modules/arale-easing/1.1.0/index.js',
      'arale-events': 'static/spm_modules/arale-events/1.2.0/events.js',
      'arale-iframe-shim': 'static/spm_modules/arale-iframe-shim/1.1.0/index.js',
      'arale-overlay': 'static/spm_modules/arale-overlay/1.2.0/overlay.js',
      'arale-templatable': 'static/spm_modules/arale-templatable/0.10.0/src/templatable.js',
      'arale-widget': 'static/spm_modules/arale-widget/1.2.0/widget.js',
      'handlebars': 'static/spm_modules/handlebars/1.3.0/dist/cjs/handlebars.js',
      'handlebars-runtime': 'static/spm_modules/handlebars-runtime/1.3.0/dist/cjs/handlebars.runtime.js',
      'jquery': 'static/spm_modules/jquery/1.11.1/jquery.js',
      'position': 'static/spm_modules/position/1.1.0/index.js',
      'seajs': 'static/spm_modules/seajs/2.3.0/dist/sea.js',
      'seajs-debug': 'static/spm_modules/seajs-debug/1.1.1/dist/seajs-debug.js',
      'seajs-style': 'static/spm_modules/seajs-style/1.1.0/dist/seajs-style.js'
    },
    map: map,
    debug: debug
  });

  // if (debug) {
  //   seajs.use(['seajs-style', 'seajs-debug', 'seajs-text']);
  // }

})(this, this.seajs);
