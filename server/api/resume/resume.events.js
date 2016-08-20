/**
 * Resume model events
 */

'use strict';

import {EventEmitter} from 'events';
import Resume from './resume.model';
var ResumeEvents = new EventEmitter();

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
  Resume.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ResumeEvents.emit(event + ':' + doc._id, doc);
    ResumeEvents.emit(event, doc);
  }
}

export default ResumeEvents;
