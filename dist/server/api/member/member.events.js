/**
 * Member model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _member = require('./member.model');

var _member2 = _interopRequireDefault(_member);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MemberEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
MemberEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _member2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    MemberEvents.emit(event + ':' + doc._id, doc);
    MemberEvents.emit(event, doc);
  };
}

exports.default = MemberEvents;
//# sourceMappingURL=member.events.js.map
