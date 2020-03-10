const express = require('express');
const parser = require('body-parser');
const Movie = require('./models/Movie');
const movieRouter = require('./handlers/moviesRouter.js');
const favoriteRouter = require('./handlers/favoritesRouter.js');
const Favorite = require('./models/Favorite');
const path = require('path');
const db = require('./handlers/dataConnector.js');

// create connection to database
//require('./handlers/dataConnector.js').connect();
db.connect();
// create an express app
const app = express();
let port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server running at port= " + port);
});

// tell node to use json and HTTP header features in body-parser
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//Enable CORS for all resources on your server.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// root endpoint will retrieve all paintings
app.get('*', function (req, res) {
    res.send('')
});

// use the route handlers for movies
movieRouter.handleAllMovies(app, Movie);
movieRouter.handleSingleMovie(app, Movie);
movieRouter.handleAllMoviesBrief(app, Movie);
movieRouter.handleAllMoviesTitleRegex(app, Movie);
movieRouter.handleAllMoviesYear(app, Movie);
movieRouter.handleAllMoviesRating(app, Movie);

// use the route handlers for favorites
favoriteRouter.handleAllFavorite(app, Favorite);
favoriteRouter.handleFavoriteDelete(app, Favorite);

// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
    });