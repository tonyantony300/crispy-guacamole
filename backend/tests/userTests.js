const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const User = require('../models/User');

describe('User Model', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost:27017/test-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.once('open', () => {
      done();
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done());
    });
  });

  it('should be able to save a user', (done) => {
    const userData = {
      universityId: 'student123',
      password: 'password123',
      role: 'student',
    };

    const user = new User(userData);

    user.save((error, savedUser) => {
      if (error) {
        done(error);
      } else {
        expect(savedUser.universityId).to.equal(userData.universityId);
        expect(savedUser.password).to.equal(userData.password);
        expect(savedUser.role).to.equal(userData.role);
        done();
      }
    });
  });

  // Add more test cases as needed
});
