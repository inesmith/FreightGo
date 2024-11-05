const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Middleware to verify JWT and extract user info
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = decoded;
    next();
  });
};

// Create a new booking (Standard User)
router.post('/', authenticate, async (req, res) => {
  if (req.user.role !== 'standard') {
    return res.status(403).json({ error: 'Only standard users can create bookings' });
  }

  try {
    const booking = new Booking({ ...req.body, customer: req.user.userId });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Transporter views and accepts a booking
router.put('/:id/accept', authenticate, async (req, res) => {
  if (req.user.role !== 'transporter') {
    return res.status(403).json({ error: 'Only transporters can accept bookings' });
  }

  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { transporter: req.user.userId, status: 'accepted' },
      { new: true }
    );
    res.json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
