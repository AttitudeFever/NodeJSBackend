// handle GET requests for [domain]/api/favorites - return all favorites
const handleAllFavorite = (app, Favorite) => {
    app.route('/api/favorites')

        .get(function (req, resp) {
            // use mongoose to retrieve all favorites from MongoDB
            Favorite.find({}, function (err, data) {
                if (err) {
                    resp.json({ message: 'Unable to connect to favorites' });
                } else {
                    // return JSON retrieved by Mongo as response
                    resp.json(data);
                }
            });
        })

        .post(function (req, resp) {
            // use mongoose to insert favorite item through MongoDB
            var itemToAdd = {id:"", title:"", poster:""};
            Favorite.insertOne(itemToAdd, function (err, res) {
                if (err) {
                    throw err
                } else {
                    // close connection
                    console.log("1 favorite document inserted");
                    db.close();
                }
            });
        })

        .delete(function (req, resp) {
            // use mongoose to delete favorite item through MongoDB
            var itemToDelete = { id: '' };
            Favorite.deleteOne(itemToDelete, function (err, res) {
                if (err) {
                    throw err
                } else {
                    // close connection
                    console.log("1 avorite document deleted");
                    db.close();
                }
            });
        });

};

module.exports = {
    handleAllFavorite
}