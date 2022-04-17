const songAPI = `https://beyonce-object-api.herokuapp.com/hits`
const movieAPI = `https://beyonce-object-api.herokuapp.com/movies`
const jokeAPI = `https://api.jokes.one/jod?category=animal`


//Print all the songs
function fetchHitSongs() {
    const fetchData = fetch(songAPI)
        .then(response => response.json())
        .then(response => {
            const hitSongs = response.hits.map(hit => hit.title)
            const flexmain = document.querySelector(".flexmain")
            const div = document.createElement("div")
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.textContent = "Beyonce Hit Songs"
            flexmain.append(div)
            div.append(ul)
            ul.append(li)
            li.append(hitSongs)
            return hitSongs
        })

    return fetchData
}

console.log(fetchHitSongs())



//Print all the movies
function fetchHitMovies() {
    const fetchDataMovies = fetch(movieAPI)
        .then(response => response.json())
        .then(response => {
            const hitMovies = response.movies.map(hit => hit.title)
            const flexmain = document.querySelector(".flexmain")
            const div = document.createElement("div")
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.textContent = "Beyonce Hit Movies"
            flexmain.append(div)
            div.append(ul)
            ul.append(li)
            li.append(hitMovies)
            return hitMovies
        })

    return fetchDataMovies
}

console.log(fetchHitMovies())