# Challenge Week 12 Submission Template

Michael Aaron

# Reddit Data Challenges

## Challenge 1

https://www.dropbox.com/s/7dmub8gdd8qxcwf/Screenshot%202014-11-16%2022.55.51.png?dl=1

## Challenge 2

This dataset is awesome! I use reddit (way too often), so there are some tropes and cliches
among the community I am curious about. I wonder how comment length has an impact on the score. 
I would assume longer answers are often better, but also take longer to evaluate, meaning many users
won't spend the time to actually stop and read the comment to see if it is worth rating. My guess would
be that the shorter comments tend to have a statistically lower up/down ratio, but many more votes.
This probably also varies depending on subreddit.

db.reddit.find({subreddit:"runescape"}).count("ups")
db.reddit.find({subreddit:"runescape"}).count("downs")

## Challenge 3

As previously stated. I think we could discover many things about the variation between subreddits, and using
the data such as up/down votes, as well as some basic information about comments, glean some insight into the way that various subreddits use, view, and interact with the comment system. 

## Challenge 4

I assume it would tell us many interesting things about the way various subreddits interact and how the community
segregates itself as a whole; it seems as if it would be difficult to draw interesting conclusions about outside
correlations without using some sort of NLP.

## Challenge 5

Which two of the top 50 subreddits share the most common commenters? (i.e., try to find the 2 subreddits that share the most number of users commenting in them)

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
	db.reddit.find({subreddit:query}).forEach(function(err,record){
		nested_author_list.push(record.author);
	});
	author_set.push(nested_author_list)
}
console.log("done");

The two subreddits with the most commenter's in common are funny and pics. 

## Challenge 6

We would need to condition are statement, with the word "popular" comments or some such thing, as if we were missing the data for all comments with 10 or less upvotes, many, many comments would be left out that were only viewed and interacted with by a couple of users. This means that our results might be skewed, as the image subreddits, such as funny and pics, often have much more voting activity, due to the reasons listed at the start of this assignment, than longer-form subreddits, such as "ask reddit"

## Challenge 7

Stated above - it would mean that pictured-based subreddits are unfairly matched at a higher rate.

## Challenge 8

Our answer is only from a subset of the reddit comments, it is likely that the popularity of various subreddits changes over time. The subreddits might also have a very high amount of bot-activity for whatever reason, as they are defaults, so possibly bots are influencing our answer to question 5, when really we are curious about the activity of various users. 

## Challenge 9

-The file only has 14 days of data, right around the start of school - this may impact the results
-Duplicates may exist
-The API may have errors?

## Challenge 10

- gather more data from more varied dates, using the scraper provided by mystery reddit user. and compare the similarity of the variables we are interested in
- Clean duplicates
- Check the API for inconsistancies - this one seems unlikely


# Yelp and Weather 

## Challenge 1

> db.precipitation.find({date:/20100425*/,"station.name":"MADISON DANE CO REGION
AL AIRPORT WI US"})
{ "_id" : ObjectId("546948af4b679e63a75667d6"), "date" : "20100423 17:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667d7"), "date" : "20100423 18:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667d8"), "date" : "20100423 20:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667d9"), "date" : "20100423 21:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667da"), "date" : "20100423 22:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667db"), "date" : "20100424 02:00", "elev
ation" : "264", "hpcp" : 3, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667dc"), "date" : "20100424 03:00", "elev
ation" : "264", "hpcp" : 5, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667dd"), "date" : "20100424 04:00", "elev
ation" : "264", "hpcp" : 17, "location" : { "coordinates" : [ 43.1405, -89.3452
], "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
 : { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }

{ "_id" : ObjectId("546948af4b679e63a75667de"), "date" : "20100424 05:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667df"), "date" : "20100424 06:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e0"), "date" : "20100424 07:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e1"), "date" : "20100424 08:00", "elev
ation" : "264", "hpcp" : 1, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e2"), "date" : "20100424 09:00", "elev
ation" : "264", "hpcp" : 1, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e3"), "date" : "20100424 11:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e4"), "date" : "20100424 12:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e5"), "date" : "20100424 17:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e6"), "date" : "20100424 18:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e7"), "date" : "20100424 19:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e8"), "date" : "20100424 20:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667e9"), "date" : "20100424 21:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
Type "it" for more
> it
{ "_id" : ObjectId("546948af4b679e63a75667ea"), "date" : "20100424 22:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667eb"), "date" : "20100424 23:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667ec"), "date" : "20100425 00:00", "elev
ation" : "264", "hpcp" : 1, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667ed"), "date" : "20100425 01:00", "elev
ation" : "264", "hpcp" : 25, "location" : { "coordinates" : [ 43.1405, -89.3452
], "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
 : { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }

{ "_id" : ObjectId("546948af4b679e63a75667ee"), "date" : "20100425 02:00", "elev
ation" : "264", "hpcp" : 10, "location" : { "coordinates" : [ 43.1405, -89.3452
], "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
 : { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }

{ "_id" : ObjectId("546948af4b679e63a75667ef"), "date" : "20100425 03:00", "elev
ation" : "264", "hpcp" : 10, "location" : { "coordinates" : [ 43.1405, -89.3452
], "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
 : { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }

{ "_id" : ObjectId("546948af4b679e63a75667f0"), "date" : "20100425 04:00", "elev
ation" : "264", "hpcp" : 4, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667f1"), "date" : "20100425 05:00", "elev
ation" : "264", "hpcp" : 9, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667f2"), "date" : "20100425 06:00", "elev
ation" : "264", "hpcp" : 1, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667f3"), "date" : "20100425 07:00", "elev
ation" : "264", "hpcp" : 1, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667f4"), "date" : "20100425 08:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667f5"), "date" : "20100425 09:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667f6"), "date" : "20100425 10:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667f7"), "date" : "20100425 11:00", "elev
ation" : "264", "hpcp" : 1, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : " ", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667f8"), "date" : "20100425 12:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }
{ "_id" : ObjectId("546948af4b679e63a75667f9"), "date" : "20100425 16:00", "elev
ation" : "264", "hpcp" : 0, "location" : { "coordinates" : [ 43.1405, -89.3452 ]
, "type" : "Point" }, "measurement_flag" : "T", "quality_flag" : " ", "station"
: { "id" : "COOP:474961", "name" : "MADISON DANE CO REGIONAL AIRPORT WI US" } }

[https://www.dropbox.com/s/l235xcx9ukuc21h/Screenshot%202014-11-17%2015.50.09.png?dl=1]

## Challenge 2

> db.normals.find({DATE: /20100425 12:00/, STATION_NAME:"LAS VEGAS MCCARRAN INTE
RNATIONAL AIRPORT NV US"}, {"HLY-WIND-AVGSPD":1})
Avgspd = 114
https://www.dropbox.com/s/jm6ngd6z21nmc5q/Screenshot%202014-11-17%2016.47.58.png?dl=1

## Challenge 3

db.businesses.aggregate([
  {$match: {city: "Madison"}},
  {$group: {_id: null, sumReviews: {$sum: "$review_count"}}}
])
34410

## Challenge 4

db.businesses.aggregate([
  {$match: {city: "Las Vegas"}},
  {$group: {_id: null, sumReviews: {$sum: "$review_count"}}}
])
577550

## Challenge 5

db.businesses.aggregate([
  {$match: {city: "Phoenix"}},
  {$group: {_id: null, sumReviews: {$sum: "$review_count"}}}
])
 200089

## Challenge 6 [BONUS]

[Code]
[Answer]



