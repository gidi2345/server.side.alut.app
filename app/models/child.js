var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;


const ChildSchema = new Schema({
    id : {
        type : String, required: true
    },
    name : {
        type : String, required: true
    },
    age : {
        type : Number, required: true  
    },
    gender : {
        type: String, 
        enum: ["זכר", "נקבה"],
        required: true 
    },
    hobbies : [{
       // enum: ["ספורט", "מוזיקה"]
       type: String
    }],
    verbal: {
        type:Boolean,
        required: true
    } ,
    independent: {
        type:String,
        required: true
    } ,
    address:{
        city: {
            type: String,
            required: true
        },
        street:{
            type: String 
        }
    },
    description : {
        type : String, required: true
    }
});

    ChildSchema.set('autoIndex', true)
    module.exports = mongoose.model('Child', ChildSchema)


