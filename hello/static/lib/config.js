(function(window, seajs, undefined) {

  'use strict';

  if (!seajs) {
    return;
  }

  // 线上部署版本
  var appname = 'static';
  var version = '0.0.0';

  // 开关：true开发版本 false部署版本
  var development = seajs.development =
                    window.location.search.indexOf('development') > 0;

  // 时间戳，调试用
  var timestamp;

  // 映射表
  var map = [];

  function addParam(url, name, value) {
    return url + (url.indexOf('?') === -1 ? '?' : '&') + name + (value !== undefined ? ('=' + value) : '');
  }

  if (development) { // 开发模式
    timestamp = new Date().getTime();
    map.push(function(url) {
      return addParam(url, '_ts', timestamp);
    });
  } else { // 部署模式
    map.push(function(url) {
      // 仅重定向 app 目录
      return addParam(url.replace(appname + '/app/', appname + '/dist/' + appname + '/app/'), '_v', version);
    });
  }

  seajs.config({
    base: '/',
    alias: {
      'arale-base': appname + '/spm_modules/arale-base/1.2.0/base.js',
      'arale-class': appname + '/spm_modules/arale-class/1.2.0/class.js',
      'arale-dialog': appname + '/spm_modules/arale-dialog/1.4.0/dialog.js',
      'arale-easing': appname + '/spm_modules/arale-easing/1.1.0/index.js',
      'arale-events': appname + '/spm_modules/arale-events/1.2.0/events.js',
      'arale-iframe-shim': appname + '/spm_modules/arale-iframe-shim/1.1.0/index.js',
      'arale-overlay': appname + '/spm_modules/arale-overlay/1.2.0/overlay.js',
      'arale-templatable': appname + '/spm_modules/arale-templatable/0.10.0/src/templatable.js',
      'arale-widget': appname + '/spm_modules/arale-widget/1.2.0/widget.js',
      'handlebars': appname + '/spm_modules/handlebars/1.3.0/dist/cjs/handlebars.js',
      'handlebars-runtime': appname + '/spm_modules/handlebars-runtime/1.3.0/dist/cjs/handlebars.runtime.js',
      'jquery': appname + '/spm_modules/jquery/1.11.1/jquery.js',
      'position': appname + '/spm_modules/position/1.1.0/index.js',
      'seajs': appname + '/spm_modules/seajs/2.3.0/./dist/sea.js',
      'seajs-debug': appname + '/spm_modules/seajs-debug/1.1.1/dist/seajs-debug.js',
      'seajs-style': appname + '/spm_modules/seajs-style/1.1.0/dist/seajs-style.js',
      '$': appname + '/lib/jquery/jquery'
    },
    map: map
  });

  // if (seajs.development) {
  //   seajs.use(['seajs-style', 'seajs-debug', 'seajs-text']);
  // }

})(this, this.seajs);
