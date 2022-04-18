const songAPI = `https://beyonce-object-api.herokuapp.com/hits`
const movieAPI = `https://beyonce-object-api.herokuapp.com/movies`


//1. Print all the songs
function fetchHitSongs() {
    const fetchData = fetch(songAPI)
        .then(response => response.json())
        .then(response => {
            const hitSongs = response.hits.map(hit => hit.title)
            const exercise = document.querySelector(".exercise")
            const div = document.createElement("div")
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.textContent = "1. Print all the songs"
            exercise.append(div)
            div.append(ul)
            ul.append(li)
            li.append(hitSongs)
            return hitSongs
        })
}
fetchHitSongs()

//2. Print all the movies
function fetchHitMovies(title) {
    const fetchDataMovies = fetch(movieAPI)
        .then(response => response.json())
        .then(response => {
            const hitMovies = response.movies.map(hit => hit.title)
            const exercise = document.querySelector(".exercise")
            const div = document.createElement("div")
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.textContent = "2. Print all the movies"
            exercise.append(div)
            div.append(ul)
            ul.append(li)
            li.append(hitMovies)
            return hitMovies
        })
}
fetchHitMovies()

//3. Return an array of all Beyonce's hit song titles
function fetchHitSongTitles() {
    const fetchData = fetch(songAPI)
        .then(response => response.json())
        .then(response => {
            const exercise = document.querySelector(".exercise")
            const div = document.createElement("div")
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.textContent = "3. Return an array of all Beyonce's hit song titles"
            exercise.append(div)
            div.append(ul)
            ul.append(li)
            const hitSongTitles = response.hits.forEach((hit) => {
                li.append(` ${hit.title} `)
           })


        })

    }

            // const exercise = document.querySelector(".exercise")
            // const div = document.createElement("div")
            // const ul = document.createElement("ul")
            // const li = document.createElement("li")
            // ul.textContent = "Beyonce Hit Songs - Return an array of all Beyonce's hit song titles"
            // exercise.append(div)
            // div.append(ul)
            // ul.append(li)
            // li.append(hitSongTitles)
            // return hitSongTitles
            // console.log(hitSongTitles)
        // })
// }
fetchHitSongTitles()
// console.log(fetchHitSongTitles())
