'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventTarget2 = require('./EventTarget');

var _EventTarget3 = _interopRequireDefault(_EventTarget2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import SourceManager from './SourceManager';

var privateData = new WeakMap();

var ImageCapture = function (_EventTarget) {
  _inherits(ImageCapture, _EventTarget);

  function ImageCapture(track) {
    _classCallCheck(this, ImageCapture);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageCapture).call(this));

    privateData.set(_this, {
      videoStreamTrack: track,
      photoCapabilities: null,
      previewStream: null
    });
    return _this;
  }

  _createClass(ImageCapture, [{
    key: 'setOptions',
    value: function setOptions(photoSettings) {
      void photoSettings;
    }
  }, {
    key: 'takePhoto',
    value: function takePhoto() {
      var source = privateData.get(this).videoStreamTrack.source,
          needToRestart = false;
      if (!source.stopped) {
        source.stop();
        needToRestart = true;
      }
      return source.hal.takeSnapshot(source.deviceId).then(function (d) {
        if (needToRestart) {
          source.start();
        }
        return d;
      }, function (e) {
        throw e;
      });
    }
  }, {
    key: 'grabFrame',
    value: function grabFrame() {}
  }, {
    key: 'videoStreamTrack',
    get: function get() {
      return privateData.get(this).videoStreamTrack;
    }
  }, {
    key: 'photoCapabilities',
    get: function get() {
      return privateData.get(this).photoCapabilities;
    }
  }, {
    key: 'previewStream',
    get: function get() {
      return privateData.get(this).previewStream;
    }
  }]);

  return ImageCapture;
}(_EventTarget3.default);

exports.default = ImageCapture;