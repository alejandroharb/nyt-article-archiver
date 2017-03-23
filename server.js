var express = require('express');
var app = express();
var bodyParser = require('body-parser')
//initialize mongodb and mongoose ORM
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var db = mongoose.connection;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var Article = require('./models/Article.js');

//catch any database errors
db.on("error", function (error) {
    console.log("Database error: ", error);
})
// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
app.use(express.static(".public"));

//Server port
var PORT = process.env.PORT || 3000;

//import routes for backend data processing
require('./routes/api-routes.js')(app);


app.listen(PORT, function () {
    console.log("App running on port 3000!");
})