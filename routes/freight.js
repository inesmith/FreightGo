const express = require('express');
const Freight = require('../models/Freight');

const router = express.Router();

// Create a new freight entry
router.post('/', async (req, res) => {
  try {
    const freight = new Freight(req.body);
    await freight.save();
    res.status(201).json(freight);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all freight entries
router.get('/', async (req, res) => {
  try {
    const freights = await Freight.find();
    res.status(200).json(freights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
