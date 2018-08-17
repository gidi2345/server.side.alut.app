var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;


var userSchema = new Schema({
    id : {
        type : String, required: true, trim: true
    },
    firstName : {
        type : String, required: true, trim: true
    },
    lastName : {
        type : String, required: true, trim: true
    },
    email : {
        type : String, required: true, trim: true, index: { unique: true }
    },
    password : {
        type : String, required: true
    },
    gender : {
        type: String, 
        enum: ["male", "female"]
    },
    phone : String,
    childsId : [{type: String,required:true}],
    /*
    child : {
        type: ObjectId,
        ref: 'Child'    
    },
    friends: [{
        type: ObjectId,
        ref: 'Child' 
    }],
    waitingList : {
        type: ObjectId,
        ref: 'Child'    
    }
    */
});

module.exports = mongoose.model('User', userSchema)
        
