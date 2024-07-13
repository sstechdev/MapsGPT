const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register new user
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
  
    // Simple validation
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    try {
      // Check for existing user
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ msg: 'User already exists' });
  
      const newUser = new User({
        name,
        email,
        password
      });
  
      // Create salt & hash
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
  
      const savedUser = await newUser.save();
  
      jwt.sign(
        { id: savedUser.id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: savedUser.id,
              name: savedUser.name,
              email: savedUser.email
            }
          });
        }
      );
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router;