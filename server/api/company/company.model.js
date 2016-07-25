'use strict';

import mongoose from 'mongoose';

var CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  website:String,
  active: Boolean
});

export default mongoose.model('Company', CompanySchema);
