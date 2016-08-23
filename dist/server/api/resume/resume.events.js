/**
 * Resume model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _resume = require('./resume.model');

var _resume2 = _interopRequireDefault(_resume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResumeEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
ResumeEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _resume2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    ResumeEvents.emit(event + ':' + doc._id, doc);
    ResumeEvents.emit(event, doc);
  };
}

exports.default = ResumeEvents;
//# sourceMappingURL=resume.events.js.map
