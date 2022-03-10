// Core modules
const path = require('path');

// 3rd party modules
const express = require('express');

// Helpers and utils
const rootDir = require('../helpers/path');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Homepage',
        path: '/',
    });
});

module.exports = router;
