const express = require('express');
const router = express.Router();
const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");

router.get('/', getUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;