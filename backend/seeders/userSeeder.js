const mongoose = require('mongoose');
const uuid = require('uuid');
const User = require('../models/User'); // Adjust the path as needed

// Sample user data
const usersData = [
  {
    universityId: 'professor1',
    password: 'professor1pass',
    role: 'dean',
  },
  {
    universityId: 'professor2',
    password: 'professor2pass',
    role: 'dean',
  },
  {
    universityId: 'student1',
    password: 'student1pass',
    role: 'student',
  },
  {
    universityId: 'student2',
    password: 'student2pass',
    role: 'student',
  },
  {
    universityId: 'student3',
    password: 'student3pass',
    role: 'student',
  },
  {
    universityId: 'student4',
    password: 'student4pass',
    role: 'student',
  },
  {
    universityId: 'student5',
    password: 'student5pass',
    role: 'student',
  },
  {
    universityId: 'student6',
    password: 'student6pass',
    role: 'student',
  },
];

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/slot-booker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to MongoDB');

//  Clear existing users
 await User.deleteMany();

 // Insert sample user data
  try {
    for (const userData of usersData) {
      userData.uuid = uuid.v4();
      await User.create(userData);
    }
    console.log('Sample users inserted successfully');
  } catch (error) {
    console.error('Error inserting sample users:', error);
  }

try {

    // Query users with a specific role
    const students = await User.find({ role: 'student' });
    console.log('Students:', students);

    const deans = await User.find({ role: 'dean' });
    console.log('Deans:', deans);

    

  } catch (error) {
    console.error('Error reading users:', error);
  }


  // Close the database connection
  db.close();
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
