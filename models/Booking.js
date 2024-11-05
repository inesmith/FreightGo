const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  transporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional until assigned
  truckType: { type: String, required: true },
  units: { type: Number, required: true },
  weight: { type: Number, required: true },
  destination: { type: String, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('Booking', bookingSchema);
