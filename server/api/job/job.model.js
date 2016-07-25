'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var JobSchema = new Schema({
  name: String,
  description: String,
  salary:Number,
  company:String,
  active: Boolean
});

export default mongoose.model('Job', JobSchema);
