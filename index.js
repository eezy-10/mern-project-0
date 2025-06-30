require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then( () => console.log('Connected to MongoDB'))
.catch( (err) => console.error(err));

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port https://localhost/${process.env.PORT}`);
});