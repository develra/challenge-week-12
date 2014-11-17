var mongojs = require('mongojs')
var fs = require('fs')
var top_50 = fs.readFileSync('subreddit_counts.txt', 'utf8')
top_50_array = top_50.split("\r\n")
var db = mongojs("mongodb://198.199.113.194/bigdata/", ['reddit']);
var author_set = [];
for(var i =0;i<50; i++)
{
	//var query=top_50_array[i].split(" ")[1];
	var query = eval('{subreddit:'+top_50_array[i].split(" ")[1]+'}')
	console.log(query)
	var nested_author_list = []
	db.precipitation.find({subreddit:query}).forEach(function(err,record){
		nested_author_list.push(record.author);
	});
	author_set.push(nested_author_list)
}
console.log("done");

> db.precipitation.find({date:/20100425*/,"station.name":"MADISON DANE CO REGION
AL AIRPORT WI US"}, {totalPrecip:{$sum:1}})

db.precipitation.aggregate(
	[
	$group:
	{
	_id: { date: /20100425*/, STATION_NAME:"LAS VEGAS MCCARRAN INTERNATIONAL AIRPORT NV US"},
	avergage_wind_speed: {$avg: $}

	}
	]
	)