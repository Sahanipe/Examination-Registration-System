const mongoose = require('mongoose');
const schema = mongoose.Schema;

const edaySchema = new schema({
    date:{type:String,required:true},
    time:{type:String,required:true},
    subject:{type:String,required:true}
});

const Days=module.exports = mongoose.model('day',edaySchema);

