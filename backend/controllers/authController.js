
const User = require('../models/User');

exports.studentLogin = async (req, res) => {
    try{
    console.log('logging in a student')
    const student = await  User.findOne({ universityId: req.body.universityId, password: req.body.password  });
    req.userId = student._id
    const token = student.uuid
    res.json({ token });
    } catch(err){
        console.log(err)
        res.json({ Error: 'logging in as student failed'})
    }
};


exports.deanLogin = async (req, res) => {
    try{
    console.log('logging in a dean')
    const dean = await User.findOne({ universityId: req.body.universityId, password: req.body.password  });
    req.userId = student._id
    const token = dean.uuid;
    res.json({ token });
    } catch(err){
      console.log(err)
      res.json({ Error: 'logging in as dean failed'})
    }
};
