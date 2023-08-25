const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const Session = require('../models/Session');

describe('Session Model', () => {
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

  it('should be able to save a session', (done) => {
    const sessionData = {
      date: new Date(),
      time: '10:00 AM',
    };

    const session = new Session(sessionData);

    session.save((error, savedSession) => {
      if (error) {
        done(error);
      } else {
        expect(savedSession.date).to.equal(sessionData.date);
        expect(savedSession.time).to.equal(sessionData.time);
        done();
      }
    });
  });

  // Add more test cases as needed
});
