const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;

const userSchema = new schema({

    index:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});

const User = module.exports = mongoose.model("user",userSchema);

module.exports.saveUser = function (newUser,callback){

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;

            if (err) throw err;
            newUser.save(callback);
        });
    });
    
}

module.exports.findByIndex = function (index,callback){
    const query = {index:index};
    User.findOne(query,callback);
};

module.exports.passwordCheck = function(plainpassword,hash,callback){
    
    bcrypt.compare(plainpassword, hash, function(err, res) {
        if (err) throw err;

        if(res){
            callback(null,res);
        }
    });
};

module.exports.findUserbyId = function(id,callback){
    User.findOne(id,callback);

};