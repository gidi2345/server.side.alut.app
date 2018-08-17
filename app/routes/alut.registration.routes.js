

//module.exports = (app) => {
    const tempusers = require('express').Router();
    const TempUser = require('../controllers/alut.temp.user.controllers.js');
    const User = require('../controllers/alut.user.controllers.js');

    // Create temp User that wait for approval
    tempusers.post('/registerRequest', TempUser.registerRequest);
    // Change temp User to regular User when manager approved it
   // app.post('/requestApproved',OPEN REGISTER PAGE)

   

//}

module.exports = tempusers;