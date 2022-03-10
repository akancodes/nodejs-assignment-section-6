// Core modules
const path = require('path');

// 3rd party modules
const express = require('express');

// Routes
const homepage = require('./routes/index');
const users = require('./routes/users');

const app = express();

// Set engine to ejs
app.set('view engine', 'ejs');

// Body parser
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(homepage);
app.use(users);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
    });
});

app.listen(3001);
