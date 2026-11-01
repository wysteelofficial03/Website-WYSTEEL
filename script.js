const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('navigation');

function closeMenu() {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.getElementById('year').textContent = new Date().getFullYear();
