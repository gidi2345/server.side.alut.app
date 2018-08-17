var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

    
var DeviceSchema = new Schema({
    deviceId : { type : String, required : true },
    platform : { type : String, required : true }
});

DeviceSchema.set('autoIndex', true)
module.exports = mongoose.model('Device', DeviceSchema);