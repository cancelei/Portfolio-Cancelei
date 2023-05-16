const menu = document.getElementById('menu');
const { body } = document;

function menuOpen() {
  menu.classList.add('menu_open');
  body.classList.add('menu-open');
}

function menuClose() {
  menu.classList.remove('menu_open');
  body.classList.remove('menu-open');
}