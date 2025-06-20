const User = require('../models/User');

//Create a user
exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
}

//Get All Users
exports.getUsers = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

//Get Single User
exports.getSingleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ message: 'User not found'});
        res.json(user);
    } catch (err) {
        next(err);
    }
}

//Updating User
exports.updateUser = async (req, res, next) => {
    try {
        const user = User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!user) return res.status(404).json({ message: 'User not found'});
        res.json(user);
    } catch (err) {
        next(err);
    }
}

//Deleting User
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({ message: 'User not found'});
        res.json({message: 'User deleted successfully'});
    } catch (err) {
        next(err);
    }
}