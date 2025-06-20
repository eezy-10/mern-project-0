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
router.get('/:id', getUser);
router.get('/', createUser);
router.get('/:id', updateUser);
router.get('/:id', deleteUser);

module.exports = router;