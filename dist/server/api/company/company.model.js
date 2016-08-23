'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanySchema = new _mongoose2.default.Schema({
  name: String,
  description: String,
  website: String,
  active: Boolean
});

exports.default = _mongoose2.default.model('Company', CompanySchema);
//# sourceMappingURL=company.model.js.map
