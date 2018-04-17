const express = require('express');


var app = express();

const servername = "localhost";
const port = 8080;

app.get('/goodbye', function (req, res) {
    res.write('New Paltz');
    res.end();

  });

  console.log("running on http://" + servername + ": " + port);
