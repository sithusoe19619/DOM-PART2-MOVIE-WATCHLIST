// Phase 1: Connect to the DOM
// These variables store the HTML elements JavaScript will need later.

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
