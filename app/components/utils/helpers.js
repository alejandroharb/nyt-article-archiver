var axios = require('axios');
var nytKey = '?api-key=' + 'dcd5cec8eded4db7a0ac8f4db350c2f0';
var helpers = {
    runAPI: function (query, start, end) {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += nytKey += query += start += end;
        return axios.get(url)
            .then(function (response) {
                console.log(response);
                return response;
            });
    },
    saveArticleData: function(data) {
        return axios.post("/api/saved", data);
    },
    getArticles: function (data) {
        return axios.get("/api/saved");
    },
    deleteArticleData: function (data) {
        console.log("data in helpers")
        console.log(data)
        return axios.delete("/api/saved", {params: {url: data.url}})
    }
};

module.exports = helpers;