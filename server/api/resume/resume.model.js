'use strict';

import mongoose from 'mongoose';

var ResumeSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Resume', ResumeSchema);
