// read/set env variables
require("dotenv").config();

// environment variables
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
moment().format();
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var inquirer = require("inquirer");

var option = process.argv[2]
var input = process.argv[3]
// var multInput = process.argv[3] + "+" + process.argv[4]

// main logic
switch (option) {
    case "concert-this":
        concertThis(input);
        break;
    case "spotify-this-song":
        spotifyThis(input);
        break;
    case "movie-this":
        movieThis(input);
        break;
    case "do-what-it-says":
        doThis(input);
        break;

}

// each function
function concertThis(input) {
    var concertQuery = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"

    axios.get(concertQuery).then(
        function (response) {

            for (var i=0; i < response.data.length; i++){

                var dateTime = response.data[i].datetime
                var dateArray = dateTime.split('T')
                var date = moment(dateArray[0]).format('MM-DD-YYYY')
                

                var responseConcert=
                "-----------------------------------------------" +
                "\nVenue: " + response.data[i].venue.name +
                "\nLocation: " + response.data[i].venue.city + ", " + response.data[i].venue.region +
                "\nDate: " + date 
                

                console.log(responseConcert)
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

function spotifyThis(input) {
    if (!input) {
        input = "The Sign";
    }
    spotify
    .search({ type: 'track', query: input })
  .then(function(response) {
      for (var i=0; i <20; i++){

        var responseSong =
        "-----------------------------------------------" +
        "\nArtist: " + response.tracks.items[i].artists[0].name +
        "\nSong Title: " + response.tracks.items[i].name +
        "\nPreview Link: " + response.tracks.items[i].preview_url +
        "\nAlbum: " + response.tracks.items[i].album.name

        console.log(responseSong)
      }
    
  })
  .catch(function(err) {
    console.log(err);
  });
}

function movieThis(input) {
    if (!input) {
        input = "mr nobody"
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            var responseMovie =
                "-----------------------------------------------" +
                "\nMovie Title: " + response.data.Title +
                "\nRelease Year: " + response.data.Released +
                "\nIMDB Rating: " + response.data.imdbRating +
                "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                "\nCountry: " + response.data.Country +
                "\nLanguage: " + response.data.Language +
                "\nPlot: " + response.data.Plot +
                "\nActors: " + response.data.Actors +
                "\n-----------------------------------------------"

            console.log(responseMovie)

        })
        .catch(function (error) {
            console.log(error);
        });
}


function doThis(input) { 
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            console.log(error);
        }
        dataArray = data.split(",")
        spotifyThis(dataArray[1])
    });
}