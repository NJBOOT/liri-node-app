# liri-node-app

LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI is a CLI that allows one to search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 

To retrieve the data that will power this app, one needs to send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. The following packages & APIs were crucial to making LIRI functional:
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   * [Axios](https://www.npmjs.com/package/axios)
   * [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
   * [Moment](https://www.npmjs.com/package/moment)
   * [DotEnv](https://www.npmjs.com/package/dotenv)

LIRI takes in four command line arguments:

`node liri.js concert-this <artist/band name here>`
`node liri.js spotify-this-song '<song name here>'`
`node liri.js movie-this '<movie name here>'`
`node liri.js do-what-it-says`

Additional Notes: the following github repository was of assistance in the moment formatting: https://github.com/TylerJStark/liri-node-app/blob/master/liri.js