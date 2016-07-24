'use strict';

import mongoose from 'mongoose';

var MemberSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model('Member', MemberSchema);
