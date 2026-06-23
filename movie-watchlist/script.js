// Phase 1: Connect to the DOM
// These variables store the HTML elements JavaScript will need later.

let currentFilter = "all"

const appTitle = document.getElementById("app-title")
const movieCount = document.getElementById("movie-count")
const movieForm = document.getElementById("movie-form")
const titleInput = document.getElementById("title-input")
const genreInput = document.getElementById("genre-input")
const movieList = document.getElementById("movie-list")
const clearWatchedBtn = document.getElementById("clear-watched-btn")

// querySelectorAll gets every element with the class "filter-btn".
// This gives us a list of the filter buttons for Phase 6 later.
const filterBtns = document.querySelectorAll(".filter-btn")

// Phase 1 check:
// Open DevTools and make sure none of these log as null.
console.log(appTitle)
console.log(movieCount)
console.log(movieForm)
console.log(titleInput)
console.log(genreInput)
console.log(movieList)
console.log(clearWatchedBtn)
console.log(filterBtns)
// End of Phase 1

// Phase 2 starts here:
// Practice textContent, classList, and attributes/properties below this line.
// Change the app title
appTitle.textContent = "My Movie Watchlist"

// Read and log the current count text
console.log("Count says:", movieCount.textContent)

// Update the count text manually (JavaScript will keep this accurate later)
movieCount.textContent = "0 movies"

// .add() puts a class on the element
movieCount.classList.add("active-filter")
// Look at the browser — what changed?

// .remove() takes it off
movieCount.classList.remove("active-filter")

// .toggle() adds if missing, removes if present — one call does both
movieCount.classList.toggle("active-filter")
movieCount.classList.toggle("active-filter")

// getAttribute reads the HTML attribute as it was written in the file
console.log(titleInput.getAttribute("placeholder"))  // → "Movie title..."
console.log(titleInput.getAttribute("type"))         // → "text"
console.log(titleInput.getAttribute("required"))     // → "" (empty string = it exists)

// setAttribute changes or adds an attribute
titleInput.setAttribute("placeholder", "Try: The Matrix")
// Refresh — the placeholder text in the input changed

// removeAttribute removes it entirely
titleInput.removeAttribute("required")
// The input is no longer required — blank submissions won't be blocked
titleInput.setAttribute("required", "")  // put it back

titleInput.getAttribute("value")  // → null (the HTML never had a value attribute)
titleInput.value                  // → whatever you just typed

// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") → gets the value originally written in the HTML
// .value               → gets the current value in the input box


// Phase 3 starts here:
movieForm.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(titleInput.value)
    console.log(genreInput.value)

    const newMovie = createMovieCard(titleInput.value, genreInput.value)

    movieList.append(newMovie)
    updateCount()
    movieForm.reset()
})

function createMovieCard(title, genre) {
    const movieCard = document.createElement("li")

    movieCard.classList.add("movie-card")
    movieCard.setAttribute("data-genre", genre)
  // 1. Create the outer <li>
  //    - give it the class "movie-card"
  //    - use setAttribute to set data-genre to the genre value
    const movieInfo = document.createElement("div")
    movieInfo.classList.add("movie-info")

  // 2. Create a <div> for the info section — class "movie-info"
    const movieTitle = document.createElement("span")
    movieTitle.classList.add("movie-title")
    movieTitle.textContent = title

    const movieGenre = document.createElement("span")
    movieGenre.classList.add("movie-genre")
    movieGenre.textContent = genre || "No genre"

    movieInfo.append(movieTitle, movieGenre)
  //    Inside it, create two <span> elements:
  //    - one with class "movie-title" — set its textContent to title
  //    - one with class "movie-genre" — set its textContent to genre (show "No genre" if empty)
  //    Append both spans into the info div

    const movieActions = document.createElement("div")
    movieActions.classList.add("movie-actions")

    const watchBtn = document.createElement("button")
    watchBtn.classList.add("watch-btn")
    watchBtn.textContent = "Mark Watched"

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-btn")
    removeBtn.textContent ="Remove"

    movieActions.append(watchBtn, removeBtn)
  // 3. Create a <div> for the buttons — class "movie-actions"
  //    Inside it, create two <button> elements:
  //    - one with class "watch-btn" — textContent "Mark Watched"
  //    - one with class "remove-btn" — textContent "Remove"
  //    Append both buttons into the actions div
    
    movieCard.append(movieInfo, movieActions)
  // 4. Append the info div and actions div into the <li>

    return movieCard
  // 5. return the card — do NOT append it here
  //    The function's job is to build and return. Appending is the caller's job.
}

//Phase 5
movieList.addEventListener("click", (event) => {
  // 1. If the click was not on a BUTTON, return early
  //    hint: event.target.tagName === "BUTTON"

    if (event.target.tagName !== "BUTTON") {    
        return
    }

  // 2. Get the card the button lives in
  //    hint: event.target.closest("li")
    const card = event.target.closest("li")

  // 3. Was it the remove button?
  //    - Check: event.target.classList.contains("remove-btn")
  //    - If yes: remove the card from the DOM entirely
  //      hint: card.remove()
  //    - // TODO: call updateCount() here — Phase 6
  //    - // TODO: call applyFilter(currentFilter) here — Phase 6
    if(event.target.classList.contains("remove-btn")) {
        card.remove()
    }
    updateCount()
    applyFilter(currentFilter)
  // 4. Was it the watch button?
  //    - Check: event.target.classList.contains("watch-btn")
  //    - If yes: toggle the "watched" class on the card
  //      hint: card.classList.toggle("watched")
  //    - Update the button's textContent based on the new state:
  //      if the card now has .watched → set button text to "Unmark Watched"
  //      if it no longer has .watched → set button text to "Mark Watched"
  //      hint: card.classList.contains("watched") returns true or false
  //    - // TODO: call applyFilter(currentFilter) here — Phase 6
  if(event.target.classList.contains("watch-btn")){
    card.classList.toggle("watched")
    if (card.classList.contains("watched")) {
        event.target.textContent = "Unmark Watched"
    }
    else {
        event.target.textContent = "Mark Watched"
    }
  }
  applyFilter(currentFilter)
})

// Why do we attach the listener to #movie-list instead of to each button?
// Answer: Because the buttons do not exist at first. They are made later when we add movies. So we put one listener on the movie list instead
//
// What does event.target.closest("li") do?
// Answer: It finds the movie card that has the button inside.

function updateCount() {
  // 1. Query all cards in the list
  //    hint: movieList.querySelectorAll(".movie-card").length
    const count = movieList.querySelectorAll(".movie-card").length
  // 2. Update movieCount.textContent
  //    e.g. "3 movies" or "1 movie" — handle the singular if you want a bonus

  movieCount.textContent = `${count} movies`
}

function updateFilterButtons(activeFilter) {
  // 1. Loop over filterBtns
  // 2. On each button:
  //    - first remove "active-filter" from every button
  //    - then add it back only to the one whose id matches the active filter
  //      hint: btn.id === "filter-" + activeFilter

  filterBtns.forEach((eachBtn) => {
    eachBtn.classList.remove("active-filter")

    if (eachBtn.id === "filter-" + activeFilter) {
        eachBtn.classList.add("active-filter")
    }
  })
}

function applyFilter(filter) {
    currentFilter = filter

    updateFilterButtons(filter)

    const allMovies = movieList.querySelectorAll(".movie-card")

    allMovies.forEach((singleMovie) => {

        const isWatched = singleMovie.classList.contains("watched")

        if (filter === "all") {
            singleMovie.classList.remove("filtered-out")
        }
        else if (filter === "watched" && isWatched){
            singleMovie.classList.remove("filtered-out")    
        }
        else if(filter == "unwatched" && !isWatched) {
            singleMovie.classList.remove("filtered-out")
        }
        else {
            singleMovie.classList.add("filtered-out")
        }
    })
  // 1. Update the currentFilter variable so the rest of the app knows what's active

  // 2. Update which button looks active
  //    hint: call updateFilterButtons(filter)

  // 3. Get all cards in the list
  //    hint: movieList.querySelectorAll(".movie-card")

  // 4. Loop over every card and decide: show it or hide it?
  //    if filter === "all"       → show every card
  //    if filter === "watched"   → show cards with .watched, hide the rest
  //    if filter === "unwatched" → show cards without .watched, hide the rest
  //    hint: card.classList.contains("watched") tells you the card's current state
  //    hint: card.classList.add("filtered-out") hides it, .remove("filtered-out") shows it
}

const filterAllBtn = document.getElementById("filter-all")
const filterUnwatchedBtn = document.getElementById("filter-unwatched")
const filterWatchedBtn = document.getElementById("filter-watched")

filterAllBtn.addEventListener("click", () => {
    applyFilter("all")
})

filterUnwatchedBtn.addEventListener("click", () => {
    applyFilter("unwatched")
})

filterWatchedBtn.addEventListener("click", () => {
    applyFilter("watched")
})

clearWatchedBtn.addEventListener("click", () => {
  // 1. Select all cards that currently have the "watched" class
  //    hint: movieList.querySelectorAll(".watched")
    const watchedMovies = movieList.querySelectorAll(".watched")

    watchedMovies.forEach((singleWatched) =>{
        singleWatched.remove()
        updateCount()
        applyFilter(currentFilter)
    })

  // 2. Loop over them and call .remove() on each

  // 3. Call updateCount()

  // 4. Call applyFilter(currentFilter)
})