const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  universityId: String,
  password: String,
  uuid: String,
  role: { type: String, enum: ['student', 'dean'] },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
