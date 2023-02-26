const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getUserByID,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controller/userController');

// /api/users
router.route('/')
.get(getAllUsers)
.post(createUser);

// /api/users/:id
router.route('/:id')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser);

// /api/users/:id/friends/:friendId

router.route('/:id/friends/:friendID')
.post(addFriend)
.delete(removeFriend)


module.exports = router;