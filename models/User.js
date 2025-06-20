const { default: mongoose } = require('mongoose');
const mngoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: Number,
    email: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('User', userSchema);