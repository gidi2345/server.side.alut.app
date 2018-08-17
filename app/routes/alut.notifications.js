const notifications = require('express').Router();
const Device = require('../controllers/alut.device.controllers.js');

//Request should be - 
// { deviceId:abcdefghijklmnopqrstuvwxyz ,
//   platform:android }
// { deviceId:abcdefghijklmnopqrstuvwxyz ,
//   platform:ios }
notifications.post('/register', Device.register);

notifications.get('/sendAll', Device.sendAll); 

notifications.get('/sendFriendRequest', Device.sendFriendRequest);

module.exports = notifications