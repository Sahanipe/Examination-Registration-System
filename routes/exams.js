const express = require('express');
const router = express.Router();
const Exam = require('../models/exam');

router.post("/examUG",function (req,res,next) {
    const newExam = new Exam({
        name:req.body.name,
        index:req.body.index,
        year:req.body.year,
        subject:req.body.subject
    });
    newExam.save((err,exam)=>{
        if(err){
        res.json({state:false,msg:"data not inserted"});
        console.log(err);
        }
        else{
       // res.json({state:true,msg:"data inserted"});
        res.status(200).json({state:true,msg:exam});
        }
    });

});


router.get('/examViewUG',function (req,res,next) {
    Exam.find({},(err, exams)=>{
        if (err){
            res.json({state:false,msg:"error"});
        }
        else{
            res.status(200).json({state:true,msg:exams});
        }
    });
});

router.delete('/examDelUG/:id',function (req,res,next) {
    Exam.findOneAndRemove({_id:req.params.id},(err,exam)=>{
        if(err){
            res.json({errmsg:err});
        }
        else{
            //res.status(200).json({msg:exam});
            res.json({msg:"Successfully deleted"});
        }
    });  
});

router.get('/MyexamView',function (req,res,next) {
    const index=req.query.Index;
    Exam.findByIndex(index,(err, exams)=>{
        if (err){
            res.json({state:false,msg:"error"});
        }
        else{
            res.json({msg:exams});
        }
    });
});

module.exports = router;