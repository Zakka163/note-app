const express = require('express')
const { login, register, logout } = require('../controller/user.js')
const auth = require('../middleware/auth.js')
const { createNote, getNote, getNotes, updateNote, deleteNote } = require('../controller/note.js')


const router = express.Router()

// user
router.post('/login', login)
router.post('/register', register)
router.delete('/logout', auth, logout)


// note
router.get('/notes', auth,getNotes)
router.get('/note', auth,getNote)
router.post('/note', auth,createNote)
router.put('/note', auth,updateNote)
router.delete('/note', auth,deleteNote)



module.exports = router