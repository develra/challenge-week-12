var mongojs = require('mongojs')
var fs = require('fs')
var top_50 = fs.readFileSync('subreddit_counts.txt', 'utf8')
top_50_array = top_50.split("\r\n")
var db = mongojs("mongodb://198.199.113.194/bigdata/", ['precipitation']);
var author_set = [];
for(var i =0;i<50; i++)
{
	//var query=top_50_array[i].split(" ")[1];
	var query = eval('{subreddit:'+top_50_array[i].split(" ")[1]+'}')
	console.log(query)
	var nested_author_list = []
	db.precipitation.find({subreddit:query}).(function(err,record){
		nested_author_list.push(record.author);
	});
	author_set.push(nested_author_list)
}
console.log("done");
