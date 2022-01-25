const menuContainer = document.querySelector('.mobile-menu-list');
const menuItem = document.querySelectorAll('.mobile-menu-item');
const hamburger = document.querySelector('.mobile');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menuContainer.classList.contains('showMenu')) {
    menuContainer.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menuContainer.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItem.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});
