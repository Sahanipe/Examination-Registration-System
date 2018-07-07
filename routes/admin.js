const express = require('express');
const router = express.Router();
//const multer=require('multer');
const Days=require('../models/adminModel');


router.post("/examDays",function (req,res,next) {
    const newEdays = new Days({
        date:req.body.date,
        time:req.body.time,
        subject:req.body.subject
    });
    newEdays.save((err,day)=>{
        if(err){
        res.json({state:false,msg:"data not inserted"});
        console.log(err);
        }
        else{
       // res.json({state:true,msg:"data inserted"});
        res.json({state:true,msg:day});
        }
    });

});

router.get('/examViewDays',function (req,res,next) {
    Days.find({},(err, days)=>{
        if (err){
            res.json({state:false,msg:"error"});
        }
        else{
            res.status(200).json({state:true,msg:days});
        }
    });
});

router.delete('/examDelDay/:id',function (req,res,next) {
    Days.findOneAndRemove({_id:req.params.id},(err,exam)=>{
        if(err){
            res.json({errmsg:err});
        }
        else{
            //res.status(200).json({msg:exam});
            res.json({msg:"Successfully deleted"});
        }
    });  
});
module.exports = router;