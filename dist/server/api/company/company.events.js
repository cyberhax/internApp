/**
 * Company model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _company = require('./company.model');

var _company2 = _interopRequireDefault(_company);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
CompanyEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _company2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    CompanyEvents.emit(event + ':' + doc._id, doc);
    CompanyEvents.emit(event, doc);
  };
}

exports.default = CompanyEvents;
//# sourceMappingURL=company.events.js.map
