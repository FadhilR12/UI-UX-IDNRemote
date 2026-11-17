// Navbar di HP: tombol ikon membuka menu sebagai panel overlay dari kanan.
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.querySelector('.nav-close');
const navBackdrop = document.querySelector('.nav-backdrop');

function setNav(open) {
  navToggle.setAttribute('aria-expanded', String(open));
  navMenu.classList.toggle('is-open', open);
  navBackdrop.hidden = !open;
  document.body.classList.toggle('nav-locked', open);
  if (open) {
    navClose.focus();
  } else {
    navToggle.focus();
  }
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => setNav(true));
  navClose.addEventListener('click', () => setNav(false));
  navBackdrop.addEventListener('click', () => setNav(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) setNav(false);
  });
}
