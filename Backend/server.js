const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const gameRoutes = require('./routes/game');
const dbConfig = require('./config/db');
const cors = require('cors');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

dbConfig();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use('/api/game', protect, gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
