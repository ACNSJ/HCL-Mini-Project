const express = require('express')
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true
})

const User = require('../models/usermodel')
const router = express.Router()
// All 
router.get('/index',(req,res)=>{
    res.render('homepages/index')
})

// New user
router.get('/register',(req,res)=>{
    res.render('portal/Register',{user : new User()})
})

router.post('/login',async (req,res)=>{
    const user = await User.find({email:req.body.email})
    if (user.length!=0) {
        res.render('portal/Register',{
            errorMessage:'Email Already exists'})
    } else {
                
    
    if(req.body.rpassword == req.body.rcpassword)
    {
    const user = new User({
        name: req.body.rname,
        email:req.body.email,
        password:req.body.rpassword

    })
    try {
        const newUser = await user.save()
        res.redirect('login')
        
    } catch (error) {
        res.render('portal/Register',{
            user : user,
            errorMessage:'Error creating user'
        })
    }
    }
    else{
        res.render('portal/Register',{
            errorMessage:'Password Mismatch'
        })
    }
}
})


// Login
router.get('/login',async(req,res)=>{
    res.render('portal/Login')
})

router.post('/index',async(req,res)=>{
    try{
    const user = await User.find({email:req.body.email , password:req.body.lpassword})
    u=user[0]
    const l=u['name']    
    if (user.length==0) {
        res.render('portal/Login',{
            errorMessage:'Email/Password error'})
    } else {
        res.redirect(`/home?name=${encodeURIComponent(l)}`)        
    }
}
catch(err){
    res.render('portal/Login',{
        errorMessage:'Error No Person Found'})
}
})



module.exports = router