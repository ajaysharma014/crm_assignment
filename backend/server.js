require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));