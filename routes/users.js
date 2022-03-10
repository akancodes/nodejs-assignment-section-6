// Core modules
const path = require('path');

// 3rd party modules
const express = require('express');

// Helpers and utils
const rootDir = require('../helpers/path');
const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users',
        path: '/users',
        users,
    });
});

router.post('/users', (req, res, next) => {
    users.push({ username: req.body.username });
    res.redirect('/users');
});

module.exports = router;
