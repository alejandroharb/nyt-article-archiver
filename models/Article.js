var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
        unique: true
    },
    url: {
        type: String,
        require: true,
        unique: true
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;