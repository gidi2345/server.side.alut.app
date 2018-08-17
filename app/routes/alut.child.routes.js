    const childs = require('express').Router();
    const Child = require('../controllers/alut.child.controllers.js');

    // Create a new Child
    childs.post('/createChild', Child.create);

    // Retrieve all Child
    childs.get('/findAllChilds', Child.findAll);

    // Retrieve a single Child with ChildId
    childs.get('/findOneChild/:childId', Child.findOne);

    // Update a Child with ChildId
    childs.put('/updateChild/:childId', Child.update);

    // Delete a Child with ChildId
    childs.delete('/deleteChild/:childId', Child.delete);

    module.exports = childs;
