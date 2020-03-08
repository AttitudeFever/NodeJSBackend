const mongoose = require('mongoose');
// define a schema that maps to the structure of the data in MongoDB
const favoriteSchema = new mongoose.Schema({
    id: Number,
    title: String,
    poster: String,
});
module.exports = mongoose.model('Favorite', favoriteSchema);