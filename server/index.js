const express = require('express');
const path = require('path');
const app = express();

const servername = "localhost";
const port = 8080;



/** 
const fit = require('./tracker/controller');


app
    .use('/', (req, res, next) => {
        res.sendFile(path.join(_dirname,"../dist/index.html"));
    })
    .use('/tracker', fit)
    .use('/profile', profile)
    .listen(port);

    console.log("running on http://" + servername + ": " + port);
    */