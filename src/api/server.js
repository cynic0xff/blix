const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./db');

    //make a connection to the database
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true })
        .then(() => { console.log('Database connected')},
        err => { console.log('Cannot connect to datbase. ' + err)}
    );

    const app = express();
    let port = process.env.PORT || 4000;

    const server = app.listen(() => {
        console.log(`Listening on port ${port}`);
    });
