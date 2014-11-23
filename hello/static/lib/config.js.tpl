(function(window, seajs, undefined) {

  'use strict';

  if (!seajs) {
    return;
  }

  // 线上部署版本
  var appname = '@APPNAME';
  var version = '@VERSION';

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
      'arale-base': appname + '/spm_modules/arale-base/1.2.0/base',
      'arale-class': appname + '/spm_modules/arale-class/1.2.0/class',
      'arale-dialog': appname + '/spm_modules/arale-dialog/1.4.0/dialog',
      'arale-easing': appname + '/spm_modules/arale-easing/1.1.0/easing',
      'arale-events': appname + '/spm_modules/arale-events/1.2.0/events',
      'arale-iframe-shim': appname + '/spm_modules/arale-iframe-shim/1.1.0/index',
      'arale-overlay': appname + '/spm_modules/arale-overlay/1.2.0/overlay',
      'arale-templatable': appname + '/spm_modules/arale-templatable/0.10.0/src/templatable',
      'arale-widget': appname + '/spm_modules/arale-widget/1.2.0/widget',
      'handlebars': appname + '/spm_modules/handlebars/1.3.0/dist/cjs/handlebars',
      'handlebars-runtime': appname + '/spm_modules/handlebars-runtime/1.3.0/dist/cjs/handlebars.runtime',
      'position': appname + '/spm_modules/position/1.1.0/index',
      'seajs-debug': appname + '/lib/seajs/seajs-debug/seajs-debug',
      'seajs-style': appname + '/lib/seajs/seajs-style/seajs-style',
      'seajs-text': appname + '/lib/seajs/seajs-text/seajs-text',
      'seajs-wrap': appname + '/lib/seajs/seajs-wrap/seajs-wrap',
      'jquery': appname + '/lib/jquery/jquery',
      '$': appname + '/lib/jquery/jquery'
    },
    map: map
  });

  if (seajs.development) {
    seajs.use(['seajs-style', 'seajs-debug', 'seajs-text']);
  }

})(this, this.seajs);
