const appTitle = document.getElementById("app-title")
const movieCount = document.getElementById("movie-count")

// select #movie-form        → store in movieForm
// select #title-input       → store in titleInput
// select #genre-input       → store in genreInput
// select #movie-list        → store in movieList
// select #clear-watched-btn → store in clearWatchedBtn

const movieForm = document.getElementById("movie-form")
const titleInput = document.getElementById("title-input")
const genreInput = document.getElementById("genre-input")
const movieList = document.getElementById("movie-list")
const clearWatchedBtn = document.getElementById("clear-watched-btn")

// select ALL elements with class "filter-btn" using querySelectorAll
// store them in filterBtns — you'll loop over them in Phase 6

const filterBtns = document.querySelectorAll("filter-btn")



//phase 2-Part A — textContent (review)
// Change the app title
// appTitle.textContent = "My Movie Watchlist"

// Read and log the current count text
// console.log("Count says:", movieCount.textContent)

// Update the count text manually (JavaScript will keep this accurate later)
// movieCount.textContent = "0 movies"



//phase 2-Part B — classList (review)
// .add() puts a class on the element
// movieCount.classList.add("active-filter")
// Look at the browser — what changed?

// .remove() takes it off
// movieCount.classList.remove("active-filter")

// .toggle() adds if missing, removes if present — one call does both
// movieCount.classList.toggle("active-filter")
// movieCount.classList.toggle("active-filter")


//phase 2-Part C — Attributes vs. Properties
// getAttribute reads the HTML attribute as it was written in the file
// console.log(titleInput.getAttribute("placeholder"))  // → "Movie title..."
// console.log(titleInput.getAttribute("type"))         // → "text"
// console.log(titleInput.getAttribute("required"))     // → "" (empty string = it exists)

// setAttribute changes or adds an attribute
// titleInput.setAttribute("placeholder", "Try: The Matrix")
// Refresh — the placeholder text in the input changed

// removeAttribute removes it entirely
// titleInput.removeAttribute("required")
// The input is no longer required — blank submissions won't be blocked
// titleInput.setAttribute("required", "")  // put it back

// titleInput.getAttribute("value")  // → null (the HTML never had a value attribute)
// titleInput.value                  // → whatever you just typed


// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") →  It will shows up as "null", because of that this isn't a value attribute 
//                          in the HTML file, and it won't get anything from Js.file. 
// .value               → It will shows you the whatever you type in the box.
//                        It doesn't care about what in the HTML or JS files.                            


movieForm.addEventListener("submit", (event) => {
  // 1. Stop the browser from reloading the page — this must be the very first line
  //    Without this, the page refreshes on every submit and you lose everything
  //    hint: event.preventDefault()
        event.preventDefault()
        {
            // 2. Read the movie title from the input — use .value, not getAttribute
            //    hint: titleInput.value reads the live value the user typed

            titleInput.value

            // 3. Read the genre the same way

            genreInput.value

            // 4. Log both values to the console
            //    Type a title and genre, submit — confirm you see them in DevTools

            // 5. At the end, reset the form so the inputs are blank for the next entry
            //    hint: movieForm.reset() clears all inputs in the form at once
            movieForm.reset()

        }
             // 6. Don't build cards yet — that's Phase 4

  
        

  
})