var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PlayerDeet = new Schema({
    name:{
        type: String,
        required : true
    },
    isMarquee:{
        type : Boolean,
        required : true,
        default: false
    },
    rating: {
        type:Number,
        required: true
    },
    price: {
        type:Number,
        required: true,
        default : 1000
    },
    type : {
        type: Number,
        required: true
    }
})

var Details = module.exports = mongoose.model('PlayerDeet', PlayerDeet);
