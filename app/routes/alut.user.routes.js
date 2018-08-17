const users = require('express').Router();
const User = require('../controllers/alut.user.controllers.js');


    // Create a new User
    users.post('/createUser', User.create);

    // User login
    users.post('/login',User.login);

    // Retrieve all User
    users.get('/findAllUsers', User.findAll);

    // Retrieve a single User with UserId
    users.get('/findOneUser/:userId', User.findOne);

    // Add friend to User 
    users.get('/addFriend/:userId/:friendId', User.addFriend);

    // Remove friend from user
    users.get('/removeFriend/:userId/:friendId', User.removedFriend);

    // Update a User with UserId
    users.put('/updateUser/:userId', User.update);

    // Delete a User with UserId
    users.delete('/deleteUser/:userId', User.delete);

    module.exports = users;
