# liri-node-app

LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI is a CLI that allows one to search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 

To retrieve the data that will power this app, one needs to send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. The following packages were crucial to making LIRI functional:
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   * [Axios](https://www.npmjs.com/package/axios)
   * [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
   * [Moment](https://www.npmjs.com/package/moment)
   * [DotEnv](https://www.npmjs.com/package/dotenv)