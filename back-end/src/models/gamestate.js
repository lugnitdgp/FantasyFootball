var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameState = new Schema({
    
   isStarted : {
       type : Boolean,
       required: true,
       default : false
   },
   lastPlayer:{
    type : String
   }
});


var Details = module.exports = mongoose.model('State', GameState);

