const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
const routes = require('./app/routes/index.js');

const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Connecting to the database

mongoose.connect('mongodb://localhost:27017/alutDb')
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// Require routes
//var routes = require('./app/routes/alut.routes.js')(app);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//  Connect all our routes to our application
app.use('/', routes);

//require('./app/controllers/alut.temp.user.controllers.js')(app)
//require('./app/routes/alut.child.routes.js')(app);
//require('./app/routes/alut.user.routes.js')(app);



//app.post('/', register.registerRequest);



//app.get('/approved', function(request, response){

//});

// ........


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});