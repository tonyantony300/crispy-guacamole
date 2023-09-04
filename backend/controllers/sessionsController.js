// Import necessary modules

const moment = require('moment');
const ObjectId = require('mongodb').ObjectId;

const Session = require('../models/Session'); 
const User = require('../models/User')


exports.getFreeSessions = async (req, res) => {
 try{
    const userId = req.userId
    const userData = await User.find ( {_id: new ObjectId (userId)} );
    console.log('userData =>', userData)
    let faculty = req.query.faculty
    let freeSessions
    if(userData[0].role === 'dean'){
      console.log('getting sessions for dean, ie booked ones only')
      freeSessions = await Session.find({ isBooked: true, deanId: userData[0].universityId, dateTime: { $gte: new Date () } });
    } else {
      console.log('fetching sessions for student')
      if(!faculty){
        console.log('faculty not found')
        freeSessions = await Session.find({ isBooked: true, studentId: userData[0].universityId, dateTime: { $gte: new Date () } });
      }else {
        freeSessions = await Session.find({ isBooked: false, deanId: faculty, dateTime: { $gte: new Date () } });
      }
    
    }
    res.json({ sessions: freeSessions });
} catch(err){
  
  res.json({ Error: 'failed to find sessions' });
  console.log(err)
}
};


exports.bookSession = async (req, res) => {
  try{
  console.log('Booking session')
  const userId = req.userId
  const userData = await User.find ( {_id: new ObjectId (userId)} );
  const sessionDetails = await Session.findByIdAndUpdate(req.body.sessionId, { isBooked: true , studentId: userData[0].universityId});
  const sessionTime = moment(sessionDetails.dateTime).utc().format('YYYY-MM-DD HH:mm:ss')
  const profDetail = sessionDetails.deanId
  res.json({ message:  `${userData[0].universityId}'s - ${sessionTime} Session booked successfully with ${profDetail}` });
  } catch(err){
    res.json({ Error: 'Unexpected error while booking'})
    console.log(err)
  }
};
