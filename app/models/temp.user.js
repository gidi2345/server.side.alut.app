/*Creator:Gidi Shmila.
 *Date:5.7.18
 *Description:
 *Create Temporery User Schema,When manager approved the user ,he will moved to 
 *User Schema.
 */


var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;


var tempUserSchema = new Schema({
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
    }
});

module.exports = mongoose.model('TempUser', tempUserSchema)
        
