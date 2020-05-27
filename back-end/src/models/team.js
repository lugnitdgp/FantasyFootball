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
    },
    players:{
        type: Array,
        required : true,
        default: []
    },
    number:{
        total:{type:Number, required:true, default:0},
        fwd:{type:Number, required:true, default:0},
        gk:{type:Number, required:true, default:0},
        mf:{type:Number, required:true, default:0},
        df:{type:Number, required:true, default:0},
        marquee:{type:Number, required:true, default:0}

    },
    penalty:{
        type: Number,
        required: true,
        default:0
    },
    rating:{
        type: Number,
        required: true,
        default:0
    }


})
var Details = module.exports = mongoose.model('Teams', Teams);
