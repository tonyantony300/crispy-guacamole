const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  dateTime: Date,
  isBooked: Boolean,
  deanId: String,
  studentId: String,
});


const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
