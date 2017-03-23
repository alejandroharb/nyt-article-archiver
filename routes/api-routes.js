var mongojs = require('mongojs');
var mongoose = require('mongoose');

var path = require('path')
//local connection to database
mongoose.connect('mongodb://localhost/nytreact');
mongoose.Promise = Promise;



var Article = require('./../models/Article.js');

module.exports = function(app) {
    app.get('/api/saved', (req, res) => {
        //query MongoDB for all saved articles
    });
    app.post('/api/saved', (req, res) => {
        console.log(req.body)
        //save an article to the database
        Article.create({
            tite: req.body.title,
            date: req.body.date,
            url: req.body.url
        }, function(err) {
            if(err) {
                console.log(err);
            } else {
                res.send("saved Search")
            }
        })
    });
    app.delete('/api/saved', (req, res) => {
        //delte saved article in the database
    });
    app.get('/', (req, res) => {
        //load HTML page with ReactJS component rendered
       res.sendFile(path.join(__dirname + "/../public/index.html"));
    });
}