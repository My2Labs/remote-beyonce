const songAPI = `https://beyonce-object-api.herokuapp.com/hits`
const movieAPI = `https://beyonce-object-api.herokuapp.com/movies`


//1. Print all the songs
function fetchHitSongTitles() {
    const fetchData1 = fetch(songAPI)
        .then(response => response.json())
        .then(response => {
            const exercise = document.querySelector(".exercise")
            const div = document.createElement("div")
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.textContent = "1. Print all the songs"
            exercise.append(div)
            div.append(ul)
            ul.append(li)
            const hitSongTitles = response.hits.forEach((hit) => {
                li.append(` ${hit.title} \n`)

            })
        })
}
fetchHitSongTitles()

//2. Print all the movies
function fetchHitMovies(title) {
    const fetchData2 = fetch(movieAPI)
        .then(response => response.json())
        .then(response => {
            const exercise = document.querySelector(".exercise")
            const div = document.createElement("div")
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.textContent = "2. Print all the movies"
            exercise.append(div)
            div.append(ul)
            ul.append(li)
            const hitMovies = response.movies.forEach((hit) => {
                li.append(` ${hit.title} \n`)

            })
        })
}
fetchHitMovies()


//3. Return an array of all Beyonce's hit song titles
function fetchHitSongs() {
    const fetchData3 = fetch(songAPI)
        .then(response => response.json())
        .then(response => {
            const hitSongs = response.hits.map(hit => hit.title)
            const exercise = document.querySelector(".exercise")
            const div = document.createElement("div")
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.textContent = "3. Return an array of all Beyonce's hit song titles"
            exercise.append(div)
            div.append(ul)
            ul.append(li)
            li.append(hitSongs)
            return hitSongs
        })
}
fetchHitSongs()


//4. Return an array of all Beyonce's fierceness ratings
function fetchFierceness() {
    const fetchData4 = fetch(songAPI)
        .then(response => response.json())
        .then(response => {
            const hitSongs = response.hits.map(hit => hit.fierceness)
            const exercise = document.querySelector(".exercise")
            const div = document.createElement("div")
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.textContent = "4. Return an array of all Beyonce's fierceness ratings"
            exercise.append(div)
            div.append(ul)
            ul.append(li)
            li.append(hitSongs)
            return hitSongs
        })
}
fetchFierceness()
