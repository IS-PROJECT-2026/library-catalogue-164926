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