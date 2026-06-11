const appTitle = document.getElementById("app-title")
const movieCount = document.getElementById("movie-count")

// select #movie-form        → store in movieForm
// select #title-input       → store in titleInput
// select #genre-input       → store in genreInput
// select #movie-list        → store in movieList
// select #clear-watched-btn → store in clearWatchedBtn

const movieForm = ducument.getElementById("movie-form")
const titleInput = ducument.getElementById("title-input")
const genreInput = ducument.getElementById("genre-input")
const movieList = ducument.getElementById("movie-list")
const clearWatchedBtn = ducument.getElementById("clear-watched-btn")

// select ALL elements with class "filter-btn" using querySelectorAll
// store them in filterBtns — you'll loop over them in Phase 6

const filterBtns = ducument.querySelectorAll("filter-btn")
