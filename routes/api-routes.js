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
        Article.find({}).sort([
            ["date", "descending"]
        ]).limit(10).exec(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc)
            }
        });
    });
    app.post('/api/saved', (req, res) => {
        console.log(req.body)
        //save an article to the database
        Article.create({
            title: req.body.title,
            date: req.body.date,
            url: req.body.url
        }, function(err, doc) {
            if(err) {
                console.log(err);
            } else {
                console.log("=====saved =====")
                // console.log(doc)
                res.send("saved Search")
            }
        })
    });
    app.delete('/api/saved', (req, res) => {
        //delte saved article in the database
        console.log(req.body)
        console.log(req.params.url)
        console.log(req.params)
        Article.remove({ url: req.body.url }, function (err,doc) {
            if (err) {
                console.log(err);
            } else {
                console.log("=====deleted=====")
                // console.log(doc)
                res.send("deleted article from archive");
            }
        })
    });
    app.get('/', (req, res) => {
        //load HTML page with ReactJS component rendered
       res.sendFile(path.join(__dirname + "/../public/index.html"));
    });
}