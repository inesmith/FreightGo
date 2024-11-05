// backend/index.js
mongoose.connect("mongodb+srv://221076:Nykswantstobe1@freighgocluster.e89na.mongodb.net/?retryWrites=true&w=majority&appName=freighgocluster");

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // User model schema
const app = express();
app.use(express.json());
const cors = require('cors');
const { default: mongoose } = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.listen(5000, () => console.log('Node server running on http://localhost:5000'));

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register Route
app.post('/api/register', async (req, res) => {
  const { name, surname, email, password, role, contactNumber } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({
      name,
      surname,
      email,
      password: hashedPassword,
      role,
      contactNumber,
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to register user' });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ error: 'User not found' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user });
});

app.listen(5000, () => console.log('Backend server running on http://localhost:5000'));
