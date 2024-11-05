const mongoose = require('mongoose');

const freightSchema = new mongoose.Schema({
  name: String,
  truckType: String,
  units: Number,
  weight: Number,
  destination: String,
});

module.exports = mongoose.model('Freight', freightSchema);
