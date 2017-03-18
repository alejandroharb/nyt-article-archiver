var mongojs = require('mongojs');
var mongoose = require('mongoose');
//local connection to database
mongoose.connect('mongodb://localhost/nytreact');
mongoose.Promise = Promise;

var Article = require('./../models/Article.js');

module.exports = function(app) {
    app.get('/api/saved', (req, res) => {
        //query MongoDB for all saved articles
    });
    app.post('/api/saved', (req, res) => {
        //save an article to the database
    });
    app.delete('/api/saved', (req, res) => {
        //delte saved article in the database
    });
    app.get('/', (req, res) => {
        //load HTML page with ReactJS component rendered
    });
}