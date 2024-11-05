const { authenticateRole } = require("./middleware/authMiddleware");

// Apply middleware to protected routes
app.use('/api/booking', authenticateRole(['standard', 'transporter']));
