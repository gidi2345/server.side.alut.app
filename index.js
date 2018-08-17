/*
File Name:index.js
Creator:Gidi Shmila
Decription:index.js is the main file of the routing system.
every time a new service group will add - her route need to be inckuded here.

exmaple: const <service group> = require('path to file or directory to routes of the service group
or to the services)
*/


const routes = require('express').Router();

const users = require('./alut.user.routes.js');
const tempUsers = require('./alut.registration.routes.js'); 
const childs =require('./alut.child.routes.js');


routes.use('/users', users);
routes.use('/tempusers', tempUsers);
routes.use('/childs',childs);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
