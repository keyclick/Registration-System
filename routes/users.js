const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req,res)=>{
    res.render('home');
})

router.get('/register', (req,res)=>{
    res.render('register');
})

router.get('/profile', (req,res)=>{
    res.render('main');
})

router.post('/register', async(req,res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword){
            const register = new User({

              firstname:req.body.firstname,
              lastname:req.body.lastname,
              phone:req.body.phone,
              age:req.body.age,
              gender:req.body.gender,
              email:req.body.email,
              password:password,  
              confirmpassword:cpassword

            })

            const data = await register.save();  //used to save the entry
            res.status(201).render('main');

        }else{
            res.send('Password dont match')
        }
    } catch(error){
        res.status(401).send();
    }
})


module.exports = router;