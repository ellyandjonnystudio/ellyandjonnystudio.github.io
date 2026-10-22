/* ==========================================================================
   CATEGORY PAGE
   Builds the content of kategorie.html from the data in books.js.
   The category to show is read from the page address, for example:
     kategorie.html?kategorie=kinderbuecher
   A series can be opened directly by adding its id after a "#":
     kategorie.html?kategorie=kinderbuecher#lumo-trilogie
   ========================================================================== */

/* ----- Finding the requested category with bookCategories.find() ----- */

const pageAddressParameters = new URLSearchParams(window.location.search);
const requestedCategoryId = pageAddressParameters.get('kategorie');
const currentCategory = bookCategories.find(category => category.id === requestedCategoryId);

/* ----- Script to fill the page elements ----- */

const breadcrumbCurrentElement = document.getElementById('breadcrumb-current');
const categoryTitleElement = document.getElementById('category-title');
const categorySummaryElement = document.getElementById('category-summary');
const categoryDescriptionElement = document.getElementById('category-description');
const seriesJumpLinksElement = document.getElementById('series-jump-links');
const shelvesElement = document.getElementById('shelves');
const otherCategoriesElement = document.getElementById('other-categories');

const shelfTemplate = document.getElementById('shelf-template');
const bookCardTemplate = document.getElementById('book-card-template');

/* ----- Build the page ----- */

if (currentCategory) {
  renderCategory(currentCategory);
} else {
  renderCategoryNotFound();
}

renderOtherCategories();
scrollToRequestedSeries();
updateAllShelfOverflowStates();
window.addEventListener('resize', updateAllShelfOverflowStates);


// Fills the hero, the series jump links and one shelf per series
function renderCategory(category) {
  const totalBookCount = category.series.reduce((sum, series) => sum + series.books.length, 0);
  const seriesWord = category.series.length === 1 ? 'Reihe' : 'Reihen';

  document.title = `${category.title} – EllyandJonnyStudio`;
  breadcrumbCurrentElement.textContent = category.title;
  categoryTitleElement.textContent = `${category.emoji} ${category.title}`;
  categorySummaryElement.textContent = `${totalBookCount} Titel in ${category.series.length} ${seriesWord}`;
  categoryDescriptionElement.textContent = category.description;

  for (const series of category.series) {
    seriesJumpLinksElement.append(createChip(series.title, `#${series.id}`));
    shelvesElement.append(createShelf(series));
  }
}

// Shown when the address contains no or an unknown category
function renderCategoryNotFound() {
  document.title = 'Kategorie nicht gefunden – EllyandJonnyStudio';
  breadcrumbCurrentElement.textContent = 'Kategorie nicht gefunden';
  categoryTitleElement.textContent = 'Kategorie nicht gefunden';
  categoryDescriptionElement.textContent = 'Diese Kategorie gibt es leider nicht. Unten findest du alle unsere Kategorien.';
}

// Links to all other categories at the bottom of the page
function renderOtherCategories() {
  for (const category of bookCategories) {
    if (category === currentCategory) continue;
    otherCategoriesElement.append(
      createChip(`${category.emoji} ${category.title}`, `kategorie.html?kategorie=${category.id}`)
    );
  }
}

// Content is built by this script, so the browser cannot jump to "#series-id"
// on its own while loading. This does it once everything is in place.
function scrollToRequestedSeries() {
  const requestedSeriesId = window.location.hash.slice(1);
  const requestedShelf = requestedSeriesId && document.getElementById(requestedSeriesId);

  if (requestedShelf) {
    requestedShelf.scrollIntoView();
  }
}


/* Blocks */

// One shelf: heading, "show all" button and a horizontally scrollable row of books
function createShelf(series) {
  const shelf = shelfTemplate.content.firstElementChild.cloneNode(true);
  const bookRow = shelf.querySelector('.shelf-row');
  const toggleButton = shelf.querySelector('.shelf-toggle');

  shelf.id = series.id;
  shelf.querySelector('.shelf-title').textContent = series.title;
  shelf.querySelector('.shelf-subtitle').textContent = `${series.subtitle} · ${series.books.length} Titel`;

  for (const book of series.books) {
    bookRow.append(createBookCard(book));
  }

  // Arrow buttons scroll the row by roughly one screen width
  shelf.querySelector('.shelf-arrow--previous').addEventListener('click', () => scrollBookRow(bookRow, -1));
  shelf.querySelector('.shelf-arrow--next').addEventListener('click', () => scrollBookRow(bookRow, 1));

  // "Alle anzeigen" switches between the scrollable row and a full grid
  toggleButton.addEventListener('click', () => {
    const shelfIsExpanded = shelf.classList.toggle('shelf--expanded');
    toggleButton.textContent = shelfIsExpanded ? 'Weniger anzeigen' : 'Alle anzeigen';
    updateAllShelfOverflowStates();
  });

  return shelf;
}

// One book: cover, title and an optional detail line
function createBookCard(book) {
  const bookCard = bookCardTemplate.content.firstElementChild.cloneNode(true);
  const coverImage = bookCard.querySelector('.book-card-cover');

  coverImage.src = book.cover || placeholderCoverPath;
  coverImage.alt = `Cover: ${book.title}`;
  bookCard.querySelector('.book-card-title').textContent = book.title;
  bookCard.querySelector('.book-card-detail').textContent = book.detail || '';

  return bookCard;
}

// A rounded link button, used for the series jump links and the other categories
function createChip(label, linkTarget) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');

  link.className = 'chip';
  link.href = linkTarget;
  link.textContent = label;
  listItem.append(link);

  return listItem;
}



/* Shelf behaviour : IMPORTANT */

// direction: -1 scrolls back, 1 scrolls forward
function scrollBookRow(bookRow, direction) {
  bookRow.scrollBy({ left: direction * bookRow.clientWidth * 0.8, behavior: 'smooth' });
}

// Marks shelves whose books all fit on screen, so the arrows and the
// "Alle anzeigen" button can be hidden there
function updateAllShelfOverflowStates() {
  for (const shelf of document.querySelectorAll('.shelf')) {
    if (shelf.classList.contains('shelf--expanded')) continue;

    const bookRow = shelf.querySelector('.shelf-row');
    const allBooksFit = bookRow.scrollWidth <= bookRow.clientWidth;
    shelf.classList.toggle('shelf--fits', allBooksFit);
  }
}
