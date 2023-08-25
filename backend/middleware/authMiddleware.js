const User = require('../models/User');


module.exports = async  (req, res, next) => {
  const token = req.header('Authorization');
  const parsedToken = token.replace("Bearer ","")


  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    console.log('Token verification stage')
    const user = await User.findOne({ uuid: parsedToken  });
    req.userId = user._id;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Invalid token' });
  }
};
