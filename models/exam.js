const mongoose = require('mongoose');
const schema = mongoose.Schema;

const examSchema = new schema({
    name:{type:String,required:true},
    index:{type:String,required:true},
    year:{type:String,required:true},
    subject:{type:String,required:true},
});

const Exam=module.exports = mongoose.model('exam',examSchema);

module.exports.findByIndex = function (index,callback){
    const query = {index:index};
    Exam.find(query,callback);
};