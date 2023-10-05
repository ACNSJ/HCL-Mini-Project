const express = require('express')
const User = require('../models/usermodel')
const router = express.Router()
// All 
router.get('/',(req,res)=>{
    res.render('index')
})
module.exports = router

router.post('/',(req,res)=>{
    res.send('create')
})