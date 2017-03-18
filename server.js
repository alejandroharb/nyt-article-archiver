var express = require('express');
var app = express();
//initialize mongodb and mongoose ORM
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var db = mongoose.connection;

var Article = require('./models/Article.js');

//catch any database errors
db.on("error", function (error) {
    console.log("Database error: ", error);
})
// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Server port
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("App running on port 3000!");
})