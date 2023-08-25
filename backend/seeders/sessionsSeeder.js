const mongoose = require('mongoose');
const Session = require('../models/Session');
const User = require('../models/User') // Adjust the path as needed
const moment = require('moment');


const slots = [];


generateFutureDates = () => {

  console.log('Generating future dates')

  function getNextThursday(date) {
    const nextThursday = date.clone().startOf('week').add(4, 'days');
    return nextThursday.isBefore(date) ? nextThursday.add(1, 'week') : nextThursday;
  }
  
  function getNextFriday(date) {
    const nextFriday = date.clone().startOf('week').add(5, 'days');
    return nextFriday.isBefore(date) ? nextFriday.add(1, 'week') : nextFriday;
  }
  
  const today = moment().startOf('day');
  const endPeriod = today.clone().add(2, 'months').endOf('month');
  
  const thursdayDates = [];
  const fridayDates = [];
  
  let currentDate = today.clone();
  
  while (currentDate.isSameOrBefore(endPeriod)) {
    thursdayDates.push(getNextThursday(currentDate).format('YYYY-MM-DD'));
    fridayDates.push(getNextFriday(currentDate).format('YYYY-MM-DD'));
    currentDate.add(1, 'week');
  }
  
  const availableDates = [...thursdayDates, ...fridayDates];
  

  return availableDates;
}

generateSessionsData = (eachDean, availableDates) => {

  console.log('generating sessions on those dates')

  availableDates.forEach(date => {
      const slotTime = moment(`${date} 10:00`, "YYYY-MM-DD HH:mm");
      const formattedSlotTime = slotTime.format("YYYY-MM-DDTHH:mm:ss[Z]");

      sessionsData.push({
          dateTime: formattedSlotTime,
          isBooked: false,
          deanId: eachDean.universityId
      });
  });

 
}



const sessionsData = []

mongoose.connect('mongodb://localhost:27017/slot-booker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to MongoDB');


  await Session.deleteMany();


  let deans 

  try {

    const students = await User.find({ role: 'student' });


    deans = await User.find({ role: 'dean' });



  } catch (error) {
    console.error('Error reading users:', error);
  }



  let availableDates = generateFutureDates()

  for (let eachDean of deans){

      generateSessionsData(eachDean, availableDates);
  }

 

  try {
    await Session.deleteMany();

     await Session.insertMany(sessionsData);
  

  } catch (error) {
    console.error('Error inserting sample sessions:', error);
  }


  db.close();
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
