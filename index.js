const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport= require('passport');
const cors=require('cors');

const app = express();
const port= process.env.PORT || 3000;
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


const config = require('./config/database');
const user = require('./routes/users');
const exam = require('./routes/exams');
const admin = require('./routes/admin');



const connection = mongoose.connect(config.database);
if (connection){
    console.log("database connected");
}else{
    console.log("databse not connected");
}


app.use(express.static(path.join(__dirname,"public")));

app.use('/user', user);
app.use('/exam',exam);
app.use('/admin',admin);


app.get("/",(req,res)=> {
    res.send("Hello world!");
});

app.listen(3000,function(){
    console.log("listening to port 3000" + port);
});