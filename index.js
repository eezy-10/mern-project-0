require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then( () => console.log('Connected to MongoDB'))
.catch( (err) => console.error(err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);

// Create User
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// Get Users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

//Get User by ID
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

let PORT = process.env.PORT ?? 3000;
// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});