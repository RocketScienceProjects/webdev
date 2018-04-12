myMovies = [
    {
        title: "red sun",
        rating: 4,
        hasWatched: true
    },
    {
        title: "star wars",
        rating: 5,
        hasWatched: false
    }
]

myMovies.forEach( function(movie) {
    if (movie.hasWatched === true){
        console.log("You have watched " + "\"" + movie.title + "\"" + " - " + movie.rating + " stars")
    } else {
        console.log("You have not watched " + "\"" + movie.title + "\"" + " - " + movie.rating + " stars")
    }

}

)