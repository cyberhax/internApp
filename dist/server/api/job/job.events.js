/**
 * Job model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _job = require('./job.model');

var _job2 = _interopRequireDefault(_job);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JobEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
JobEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _job2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    JobEvents.emit(event + ':' + doc._id, doc);
    JobEvents.emit(event, doc);
  };
}

exports.default = JobEvents;
//# sourceMappingURL=job.events.js.map
