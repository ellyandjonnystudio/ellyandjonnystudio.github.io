/* ==========================================================================
   NAVIGATION
   Shared by all pages: hides the top bar after scrolling past the hero,
   and opens/closes the hamburger menu on phones.
   ========================================================================== */

const topbar = document.querySelector('.topbar');
const hero = document.querySelector('.hero');
const menuButton = document.querySelector('.menu-button');


function updateTopbarVisibility() {
  const heroBottomEdge = hero.getBoundingClientRect().bottom;
  topbar.classList.toggle('hidden', heroBottomEdge <= 0);
}

if (hero) {
  window.addEventListener('scroll', updateTopbarVisibility, { passive: true });
  updateTopbarVisibility();
}


/* ----- MOBILE: open and close the hamburger menu ----- */

menuButton.addEventListener('click', () => {
  const menuIsOpen = topbar.classList.toggle('menu-open');

  // Switch the icon between ☰ (closed) and ✕ (open) and update the screen reader info
  menuButton.textContent = menuIsOpen ? '✕' : '☰';
  menuButton.setAttribute('aria-expanded', menuIsOpen);
  menuButton.setAttribute('aria-label', menuIsOpen ? 'Menü schließen' : 'Menü öffnen');
});
