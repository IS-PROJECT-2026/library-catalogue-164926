/* 
   The Reading Room — catalogue script
   Stage 1: render the shelf
    */

var catalogue = [
  { title: "Things Fall Apart",        author: "Chinua Achebe",      year: 1958 },
  { title: "Petals of Blood",          author: "Ngugi wa Thiong'o",  year: 1977 },
  { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", year: 1969 },
  { title: "Season of Migration",      author: "Tayeb Salih",        year: 1966 },
  { title: "Dust",                     author: "Yvonne Owuor",       year: 2013 },
  { title: "The Name of the Rose",     author: "Umberto Eco",        year: 1980 }
];

var shelf = document.getElementById("book-list");
var emptyNote = document.getElementById("empty-note");

/* Build one index card. */
function makeCard(entry) {
  var card = document.createElement("li");

  var year = document.createElement("span");
  year.className = "year";
  year.textContent = entry.year;

  var title = document.createElement("span");
  title.className = "title";
  title.textContent = entry.title;

  var byline = document.createElement("span");
  byline.className = "byline";
  byline.textContent = entry.author;

  card.appendChild(year);
  card.appendChild(title);
  card.appendChild(byline);

  return card;
}

/* Empty the shelf, then lay out whatever it is given. */
function drawShelf(entries) {
  shelf.innerHTML = "";

  for (var i = 0; i < entries.length; i++) {
    shelf.appendChild(makeCard(entries[i]));
  }

  emptyNote.hidden = entries.length > 0;
}

drawShelf(catalogue);

/* --- Search --------------------------------------------------- */

var searchBox = document.getElementById("search");

/* Match against title or author, case-insensitive. */
function matches(entry, term) {
  var haystack = (entry.title + " " + entry.author).toLowerCase();
  return haystack.indexOf(term) !== -1;
}

function runSearch() {
  var term = searchBox.value.trim().toLowerCase();

  if (term === "") {
    drawShelf(catalogue);
    return;
  }

  var found = [];
  for (var i = 0; i < catalogue.length; i++) {
    if (matches(catalogue[i], term)) {
      found.push(catalogue[i]);
    }
  }

  drawShelf(found);
}

searchBox.addEventListener("input", runSearch);
/* --- Accession ------------------------------------------------ */

var titleInput  = document.getElementById("title-input");
var authorInput = document.getElementById("author-input");
var yearInput   = document.getElementById("year-input");
var addButton   = document.getElementById("add-book");

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
}

function accession() {
  var title  = titleInput.value.trim();
  var author = authorInput.value.trim();
  var year   = parseInt(yearInput.value, 10);

  if (title === "" || author === "") {
    alert("A title and an author are needed before a book can be shelved.");
    return;
  }

  if (isNaN(year)) {
    year = "n.d.";
  }

  catalogue.push({ title: title, author: author, year: year });

  clearForm();
  searchBox.value = "";
  drawShelf(catalogue);
}

addButton.addEventListener("click", accession);