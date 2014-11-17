// Run 'npm install' to install node dependencies
var express = require('express');
var app = express();

var mongo = require('mongoskin');
var username = 'nik' // TODO
var password = 'Dummy12345' // TODO
var url = 'ds047940.mongolab.com' // TODO
var db = mongoskin.db('mongodb://'+username+':'+password+'@'+url+':47940/hackathon-yelp', {safe:true})

app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');

app.get('/state/:state', function(req, res) {
    var query = {"state" : req.params.state};
    var projection = {};
    db.collection('business')
        .find(query,projection)
        .limit(20)
        .toArray(function (err, items) {        
            res.render("business_map", {data: items});        
    });
});

app.listen(3000);
console.log('listening on port 3000');
