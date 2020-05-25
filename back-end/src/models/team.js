var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Teams = new Schema({
    name :{
        type : String,
        required : true
    },
    money:{
        type: Number,
        required: true
    }

})
var Details = module.exports = mongoose.model('Teams', Teams);
