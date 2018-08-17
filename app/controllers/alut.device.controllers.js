const Device = require('../models/device.js')
const notification = require('../methods/notification.send.js')

exports.register = (req, res) => {
    let body = JSON.parse(req.body);

    if (body) {
        let newDevice = new Device(body);
        newDevice.save(err => {
            if (!err) {
                console.log("Device Regsitered!");
                res.sendStatus(200);
            } else {
                console.log("Device registration failed!");
                res.sendStatus(500);
            }
        });
    }
};

exports.sendAll = (req, res) => {
    Device.find( (err, devices) => {
        if (!err && devices) {
            let androidDevices = [];
            devices.forEach(device => {
                if (device.platform === 'ios') {
                    try{
                        notification.sendIos(device.deviceId, 'Hello World', 'iOS notification test');
                    }
                    catch(err){
                        console.log("Error sending to iOS:\n"+err);
                        res.sendStatus(500);
                    }
                } else if (device.platform === 'android') {
                    androidDevices.push(device.deviceId);
                }
            });
            try{
                notification.sendAndroid(androidDevices, 'Hello World', 'Android notification tests');
                res.sendStatus(200);
            }
            catch(err){
                console.log("Error sending to android:\n"+err);
                res.sendStatus(500);
            }
        } else {
            res.sendStatus(500);
        }
    });
};

exports.sendFriendRequest = (req, res) => {
    device = Device.find( (err, devices) => {
        if (!err && devices) {
            for(device in devices)
                if(req.body.deviceId == device.deviceId)
                    return device;
            return 0;
        }
    })

    if(device == 0)
    {
        console.error("Device id wasn't found in registered devices");
        res.sendStatus(500);
    }
    
    let title = 'Add Friend Request';
    let body = 'Enter app for more details';

    try { 

    if(device.platform == 'ios') {
        notification.sendIos(device.deviceId, title, body);
        res.sendStatus(200);
    }
    else if(device.platform == 'android') {
        notification.sendAndroid(device, title, body);
        res.sendStatus(200);
    }
    else {
        console.error("device has no suitable platform");
        res.sendStatus(500);
    }
    }
    catch(err){
        console.log("Error sending friend request:\n"+err);
    }

};