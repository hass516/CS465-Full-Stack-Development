const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('users');

const register = async (req, res) => {

  // Validate required fields
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: 'All fields required' });
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email
  });

  // Set hashed password and salt
  user.setPassword(req.body.password);

  try {

    await user.save();

    const token = user.generateJWT();

    return res
      .status(200)
      .json({ token });

  } catch (err) {

    return res
      .status(400)
      .json(err);

  }
};

const login = (req, res, next) => {

  // Validate required fields
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: 'All fields required' });
  }

  passport.authenticate('local', (err, user, info) => {

    if (err) {
      return res
        .status(404)
        .json(err);
    }

    if (user) {
      const token = user.generateJWT();
      return res
        .status(200)
        .json({ token });
    }

    return res
      .status(401)
      .json(info);

  })(req, res, next);
};

module.exports = {
  register,
  login
};