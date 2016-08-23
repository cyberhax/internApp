'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var JobSchema = new Schema({
  name: String,
  description: String,
  salary: Number,
  company: String,
  active: Boolean,
  ygapply: []
});

exports.default = _mongoose2.default.model('Job', JobSchema);
//# sourceMappingURL=job.model.js.map
