const express = require('express')
const UsersController = require('../controllers/userController')

const router = express.Router()

router.route('/getAll').get(UsersController.allUsersFn)
router.route('/uploadUserData').post(UsersController.createUserFn)
router.route('/updateUser/:id').patch(UsersController.updateUserFn)
router.route('/deleteUser/:id').delete(UsersController.deleteUserFn)
// router.route()

module.exports = router
