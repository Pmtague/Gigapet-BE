const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const secrets = require('./secrets.js');

router.post('/register', (req, res) => {
    let newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 12);
    newUser.password = hash;

    Users.add(newUser)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not register user' });
        });
});

module.exports = router

