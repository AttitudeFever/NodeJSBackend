const express = require('express');
const parser = require('body-parser');

// create connection to database
require('./handlers/dataConnector.js').connect();
// create an express app
const app = express();
let port = 8080;
app.listen(port, function () {
    console.log("Server running at port= " + port);
});

// tell node to use json and HTTP header features in body-parser
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// root endpoint will retrieve all paintings
app.get("/", (req, resp) => {
    //provider.xyz(req, resp);
});


// use the route handlers


// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
    });