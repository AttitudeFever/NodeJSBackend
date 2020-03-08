// handle GET requests for [domain]/api/images - return all books
const handleAllMovies = (app, Movie) => {
    app.route('/api/movies')
        .get(function (req, resp) {
            // use mongoose to retrieve all books from Mongo
            Movie.find({}, function (err, data) {
                if (err) {
                    resp.json({ message: 'Unable to connect to movies' });
                } else {
                    // return JSON retrieved by Mongo as response
                    resp.json(data);
                }
            });
        });
};

module.exports = {
    handleAllMovies
}