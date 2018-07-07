const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');

router.post("/register",function (req,res) {
    
    const newUser = new User({

        index:req.body.index,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    });

    User.saveUser(newUser,function(err,user){
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(user){
            res.json({state:true,msg:"data inserted"});
        }
    });
});



router.post("/login",function (req,res) {
    const index= req.body.index;
    const password=req.body.password;

    User.findByIndex(index,function(err,user){
        if (err) throw err;

        if(!user){
            res.json({state:false,msg:"No user found"});
            return false;
        }
       // else{
        User.passwordCheck(password,user.password,function (err,match) {
            if(err) throw err;

            if(match){
              const token = jwt.sign(user.toJSON(), config.secret,{expiresIn:86400});
                res.json(
                   {
                        state:true,
                        token: "JWT" + token,
                        user:{
                            id:user._id,
                            name:user.name,
                            index:user.index,
                            email:user.email

                        }
                    }
                
                )
            }
            else{
                res.json({state:false,msg:"Password is wrong"});
            }
        
        });
   // }
    });
});

router.get('/profile', passport.authenticate('jwt', { session: false }),function(req, res) {
        res.json({user:req.user});
    }
);

module.exports = router;