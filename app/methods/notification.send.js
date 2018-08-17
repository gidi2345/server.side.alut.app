var apns = require('apns');
var gcm = require('node-gcm');

exports.sendIos = (deviceId, title, message) => {
    var options = {
        keyFile  : 'key.pem',
        certFile : 'cert.pem',
        debug    : true,
        gateway  : 'gateway.sandbox.push.apple.com',
        errorCallback : function(num, err) {
            console.error(err);
        }
    };
    
    let connection = new apns.Connection(options);

    let notification = new apns.Notification();
    notification.device = new apns.Device(deviceId);
    notification.alert = title;//'Hello World !';
    notification.body = message;//'This is the body of the notification';

    connection.sendNotification(notification);
}

exports.sendAndroid = (devices, title, message) => {
    let androidMessage = new gcm.Message({
        notification: {
            title: title,//"Hello, World",
            icon: "ic_launcher",
            body: message//"This is a notification that will be displayed if your app is in the background."
        }
    });

    let sender = new gcm.Sender('AIzaSyD4Wu64CkFPMM6nJOF5vxhcF4pZ_TCa6jU');

    sender.send(androidMessage, {
        registrationTokens : devices
    }, function(err, response) {
        if (err) {
            console.error(err);
        } else {
            console.info(response);
        }
    });
}
