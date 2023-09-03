const express = require('express')
const {login, register, logout} = require('../controller/user.js')


const router = express.Router()


router.post('/login',login)
router.post('/register',register)
router.delete('/loout',logout)


module.exports = router